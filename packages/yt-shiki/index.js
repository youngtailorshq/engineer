const shiki = require('shiki');
const {
  commonLangIds,
  commonLangAliases,
  otherLangIds,
} = require('shiki-languages');
const visit = require('unist-util-visit');

const CLASS_BLOCK = 'shiki';
const CLASS_INLINE = 'shiki-inline';

const ERROR_MESSAGE = '<code>ERROR Rendering Code Block</code>';

const languages = [...commonLangIds, ...commonLangAliases, ...otherLangIds];

module.exports = options => {
  const theme = options.theme ? options.theme : 'nord';

  return async tree => {
    const highlighter = await shiki.getHighlighter({
      theme,
      langs: languages,
    });

    visit(tree, 'code', node => {
      node.type = 'html';
      try {
        node.value = highlight(node, CLASS_BLOCK, highlighter);
      } catch (e) {
        throw e;
        node.value = ERROR_MESSAGE;
      }
    });

    if (!options.skipInline) {
      visit(tree, 'inlineCode', node => {
        node.type = 'html';
        try {
          node.value = highlight(node, CLASS_INLINE, highlighter);
        } catch (e) {
          console.log(e);
          node.value = ERROR_MESSAGE;
        }
      });
    }
  };
};

function highlight({ value, lang, meta }, cls, highlighter) {
  const index = languages.findIndex(x => x === lang);
  const theme = shiki.getTheme('nord');
  let metaParsed = {};
  if (meta) {
    metaParsed = parseMeta(meta);
  }

  if (index >= 0) {
    const code = highlighter.codeToHtml(value, lang);
    return codeToHtml({ value: code, cls, meta: metaParsed });
  }

  // Fallback for unknown languages.
  return `<code class="${cls}" style="background: ${theme.bg}; color: ${
    theme.colors['terminal.foreground']
  }">${escape(value)}</code>`;
}

function codeToHtml({ value, cls, meta }) {
  return `
    <div class="relative mb-10 mt-4 pb-4 overflow-x-auto border border-mid-gray rounded-sm ${
      meta.filename ? 'pt-12' : 'pt-4'
    }">
      ${
        meta.filename
          ? `
        <div class="absolute top-0 left-0 flex items-center w-full h-10 px-4 select-none">
          <div className="flex items-center">
            <svg width="54" height="14">
              <g fill="none" fill-rule="evenodd" transform="translate(1 1)">
                <circle cx="6" cy="6" r="6" fill="#FF5F56" stroke="#E0443E" stroke-width=".5"/>
                <circle cx="26" cy="6" r="6" fill="#FFBD2E" stroke="#DEA123" stroke-width=".5"/>
                <circle cx="46" cy="6" r="6" fill="#27C93F" stroke="#1AAB29" stroke-width=".5"/>
              </g>
            </svg>
          </div>
          <div class="flex-1 text-center text-dark-gray">${meta.filename}</div>
        </div>
      `
          : ''
      }
      <code class="block float-left min-w-full px-4">${value}</code>
    </div>
  `;
}

function parseMeta(rawMeta) {
  const meta = rawMeta.split(' ');
  let parsed = {};
  meta.forEach(keyValue => {
    const kv = keyValue.split('=');
    try {
      parsed[kv[0].trim()] = kv[1].trim();
    } catch (e) {
      console.error('Meta MUST BE key=value');
    }
  });
  return parsed;
}

function escape(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

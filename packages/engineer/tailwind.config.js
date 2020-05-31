module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    keyframes: true,
    content: [
      './src/**/*.vue',
      './src/**/*.js',
      './src/**/*.jsx',
      './src/**/*.ts',
      './src/**/*.tsx',
      './src/**/*.html',
      './src/**/*.pug',
      './src/**/*.md',
      './src/**/*.svg',
    ],
    whitelist: [
      'body',
      'html',
      'img',
      'a',
      'g-image',
      'g-image--lazy',
      'g-image--loaded',
      'active',
      'active--exact',
    ],
    whitelistPatterns: [
      /shiki/,
      /prism/,
      /token$/,
      /markdown/,
      /rich-text/,
      /richtext/,
      /.*-(enter|enter-active|enter-to|leave|leave-active|leave-to)/,
      /data-v-.*/,
      />>>/,
      /::v-deep/,
    ],

    // This is the function used to extract class names from your templates
    defaultExtractor: content => {
      // Capture as liberally as possible, including things like `h-(screen-1.5)`
      const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || [];

      // Capture classes within other delimiters like .block(class="w-1/2") in Pug
      const innerMatches = content.match(/[^<>"'`\s.()]*[^<>"'`\s.():]/g) || [];

      return broadMatches.concat(innerMatches);
    },
  },
  theme: {
    extend: {
      colors: {
        'dark-gray': '#6A737D',
      },
    },
  },
  variants: {},
  plugins: [],
};

// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'YTEngineer',
  plugins: [
    {
      use: 'ytailwind',
      options: {
        tailwindConfig: './tailwind.config.js',
      },
    },
    {
      use: '@gridsome/vue-remark',
      options: {
        typeName: 'Blog',
        baseDir: './content/blog',
        pathPrefix: '/blog',
        template: './src/templates/BlogTemplate.vue',
        refs: {
          category: {
            typeName: 'Category',
            create: true,
          },
        },
        plugins: [
          [
            'yt-shiki',
            {
              skipInline: false,
              theme: require('./src/shiki_theme.json'),
            },
          ],
        ],
      },
    },
  ],
};

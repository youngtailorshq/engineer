// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'YTEngineer',
  plugins: [
    {
      use: '~/plugins/ytailwind',
      options: {
        tailwindConfig: './tailwind.config.js',
      },
    },
    {
      use: '@gridsome/vue-remark',
      options: {
        typeName: 'Blog',
        baseDir: './src/content/blog',
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
            'gridsome-plugin-remark-shiki',
            {
              theme: 'nord',
              skipInline: false,
              theme: require('./plugins/shiki/theme.json'),
            },
          ],
        ],
      },
    },
  ],
};

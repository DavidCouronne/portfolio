// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Portfolio de David Couronné',
  siteDescription:
    'Portfolio de David Couronné powerd by Gridsome and Vuetify',
  siteUrl: 'https://davidcouronne.netlify.com',
  plugins: [
    {
      use: 'gridsome-plugin-pwa',
      options: {
        title: 'Portfolio David Couronné',
        startUrl: '/',
        display: 'standalone',
        statusBarStyle: 'default',
        manifestPath: 'manifest.json',
        disableServiceWorker: false,
        serviceWorkerPath: 'service-worker.js',
        cachedFileTypes: 'js,json,css,html,png,jpg,jpeg,svg',
        shortName: 'portfolio',
        themeColor: '#666600',
        backgroundColor: '#ffffff',
        icon: 'src/favicon.png', // must be provided like 'src/favicon.png'
        msTileImage: '',
        msTileColor: '#666600',
      },
    },
    {
      use: '@gridsome/vue-remark',
      options: {
        typeName: 'Documentation', // Required
        baseDir: './docs', // Where .md files are located
        pathPrefix: '/docs', // Add route prefix. Optional
        template: './src/templates/Documentation.vue', // Optional
      },
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'blog/**/*.md',
        typeName: 'Post',
        refs: {
          tags: {
            typeName: 'Tag',
            create: true,
          },
        },
      },
    },

    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000, // default
      },
    },
  ],
  templates: { Post: '/:title', Tag: '/tag/:id' },
  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      plugins: [
        [
          'gridsome-plugin-remark-prismjs-all',
          {
            aliases: {
              js: 'javascript',
              sh: 'bash',
            },
            languageExtensions: [
              {
                language: 'vue',
                extend: 'html',
                definition: {
                  vue_types: /(Vue)/,
                },
                insertBefore: {
                  function: {
                    vue_keywords: /(v-if|v-for)/,
                  },
                },
              },
              {
                language: 'toml',
                extend: 'yaml',
                definition: {
                  toml_types: /(Toml)/,
                },
                insertBefore: {
                  function: {
                    toml_keywords: /(build|header)/,
                  },
                },
              },
            ],
          },
        ],
      ],
    },
  },
}

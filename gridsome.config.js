// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "David Couronné",
  siteDescription: "Welcome to my Blog",
  siteUrl: "http://localhost:8080",
  plugins: [
    {
      use: "gridsome-plugin-pwa",
      options: {
        title: "Gridsome",
        startUrl: "/",
        display: "standalone",
        statusBarStyle: "default",
        manifestPath: "manifest.json",
        disableServiceWorker: false,
        serviceWorkerPath: "service-worker.js",
        cachedFileTypes: "js,json,css,html,png,jpg,jpeg,svg",
        shortName: "Gridsome",
        themeColor: "#666600",
        backgroundColor: "#ffffff",
        icon: "src/favicon.png", // must be provided like 'src/favicon.png'
        msTileImage: "",
        msTileColor: "#666600"
      }
    },
    {
      use: "gridsome-plugin-tailwindcss",
      options: {
        tailwindConfig: "./tailwind.config.js",
        purgeConfig: {
          whitelist: [
            "svg-inline--fa",
            "table",
            "table-striped",
            "table-bordered",
            "table-hover",
            "table-sm"
          ],
          whitelistPatterns: [
            /fa-$/,
            /blockquote$/,
            /code$/,
            /pre$/,
            /table$/,
            /table-$/
          ]
        },
        presetEnvConfig: {},
        shouldPurge: false,
        shouldImport: true,
        shouldTimeTravel: true,
        shouldPurgeUnusedKeyframes: true
      }
    },
    {
      use: "gridsome-source-static-meta",
      options: {
        path: "content/site/*.json"
      }
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "Author",
        path: "./content/author/*.md"
      }
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "Blog",
        path: "./content/blog/**/*.md",
        refs: {
          author: "Author",
          tags: {
            typeName: "Tag",
            create: true
          },
          category: {
            typeName: "Category",
            create: true
          }
        }
      }
    }
  ],
  transformers: {
    remark: {
      plugins: [
        [
          "gridsome-plugin-remark-prismjs-all",
          {
            aliases: {
              dosini: `ini`,
              env: `bash`,
              es6: `js`,
              flowchart: `none`,
              gitignore: `none`,
              gql: `graphql`,
              htaccess: `apacheconf`,
              mdx: `markdown`,
              md: `markdown`,
              ml: `fsharp`,
              styl: `stylus`
            }
          }
        ],
        "@noxify/gridsome-remark-table-align",
        [
          "@noxify/gridsome-remark-classes",
          {
            table: "table table-striped",
            "tableCell[align=center]": "text-center",
            "tableCell[align=right]": "text-right"
          }
        ]
      ]
    }
  },
  templates: {
    Blog: [
      {
        path: "/blog/:title"
      }
    ],
    Category: [
      {
        path: "/category/:title",
        component: "~/templates/Category.vue"
      }
    ],
    Author: [
      {
        path: "/author/:name",
        component: "~/templates/Author.vue"
      }
    ],
    Tag: [
      {
        path: "/tags/:title",
        component: "~/templates/Tag.vue"
      }
    ]
  }
};

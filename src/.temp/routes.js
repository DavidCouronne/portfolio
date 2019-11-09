export default [
  {
    path: "/tag/:id/:page(\\d+)?/",
    component: () => import(/* webpackChunkName: "page--src-templates-tag-vue" */ "C:\\Workspace\\Gridsome\\gridsome-sites\\portfolio\\src\\templates\\Tag.vue")
  },
  {
    path: "/docs/vue-components-in-markdown/",
    component: () => import(/* webpackChunkName: "page--src-templates-documentation-vue" */ "C:\\Workspace\\Gridsome\\gridsome-sites\\portfolio\\src\\templates\\Documentation.vue"),
    meta: {
      $vueRemark: () => import(/* webpackChunkName: "vue-remark--docs-vue-components-in-markdown-md" */ "C:\\Workspace\\Gridsome\\gridsome-sites\\portfolio\\docs\\vue-components-in-markdown.md")
    }
  },
  {
    path: "/docs/tailwind/",
    component: () => import(/* webpackChunkName: "page--src-templates-documentation-vue" */ "C:\\Workspace\\Gridsome\\gridsome-sites\\portfolio\\src\\templates\\Documentation.vue"),
    meta: {
      $vueRemark: () => import(/* webpackChunkName: "vue-remark--docs-tailwind-md" */ "C:\\Workspace\\Gridsome\\gridsome-sites\\portfolio\\docs\\tailwind.md")
    }
  },
  {
    path: "/blog/:page(\\d+)?/",
    component: () => import(/* webpackChunkName: "page--src-pages-blog-vue" */ "C:\\Workspace\\Gridsome\\gridsome-sites\\portfolio\\src\\pages\\Blog.vue")
  },
  {
    path: "/index-swap/",
    component: () => import(/* webpackChunkName: "page--src-pages-index-swap-vue" */ "C:\\Workspace\\Gridsome\\gridsome-sites\\portfolio\\src\\pages\\IndexSwap.vue")
  },
  {
    path: "/docs/",
    component: () => import(/* webpackChunkName: "page--src-pages-docs-vue" */ "C:\\Workspace\\Gridsome\\gridsome-sites\\portfolio\\src\\pages\\Docs.vue")
  },
  {
    name: "404",
    path: "/404/",
    component: () => import(/* webpackChunkName: "page--src-pages-404-vue" */ "C:\\Workspace\\Gridsome\\gridsome-sites\\portfolio\\src\\pages\\404.vue")
  },
  {
    path: "/:title/",
    component: () => import(/* webpackChunkName: "page--src-templates-post-vue" */ "C:\\Workspace\\Gridsome\\gridsome-sites\\portfolio\\src\\templates\\Post.vue")
  },
  {
    name: "home",
    path: "/",
    component: () => import(/* webpackChunkName: "page--src-pages-index-vue" */ "C:\\Workspace\\Gridsome\\gridsome-sites\\portfolio\\src\\pages\\Index.vue")
  },
  {
    name: "*",
    path: "*",
    component: () => import(/* webpackChunkName: "page--src-pages-404-vue" */ "C:\\Workspace\\Gridsome\\gridsome-sites\\portfolio\\src\\pages\\404.vue")
  }
]


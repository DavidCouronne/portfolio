// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import LandingLayout from '~/layouts/Landing.vue'
import VueScrollTo from 'vue-scrollto'
import VueFuse from 'vue-fuse'

import './assets/style/index.scss'

export default function(Vue, { head }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.component('Landing', LandingLayout)

  Vue.use(VueScrollTo, {
    duration: 500,
    easing: 'ease'
  })

  Vue.use(VueFuse)

  head.meta.push({
    name: 'keywords',
    content:
      'Gridsome,Vue,Tailwind,Tailwind CSS,JavaScript,HTML,CSS,Vue.js,VueJS'
  })

  head.meta.push({
    name: 'description',
    content: 'Gridsome Portfolio Starter'
  })

  head.meta.push({
    name: 'author',
    content: 'Andre Madarang'
  })

  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Nunito+Sans:400,700'
  })
}

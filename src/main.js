// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'


import Vuetify from 'vuetify'
import './assets/style/index.scss'

import { vuetifyConfig } from './vuetify.config.js'

export default function(Vue, { head, appOptions }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  

  const vuetifyOpts = vuetifyConfig()

  Vue.use(Vuetify)

  appOptions.vuetify = new Vuetify(vuetifyOpts)

  head.meta.push({
    name: 'keywords',
    content:
      'Gridsome,Vue,Tailwind,Tailwind CSS,JavaScript,HTML,CSS,Vue.js,VueJS'
  })

  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Nunito+Sans:400,700'
  })
}

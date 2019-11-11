<template>
  <Layout>
    <!-- <v-app-bar app dense color="black" dark>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>David Couronné</v-toolbar-title>

      <v-spacer></v-spacer>
       <v-btn :to="$url('/')">
          Home
        </v-btn>
        <v-btn :to="$url('/blog')">
          Blog
        </v-btn>
        <v-btn :to="$url('/docs')">
         Documentation
        </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar> -->
    <v-content>
      <!-- Home Parallax -->
      <v-card>
        <v-img
          src="https://res.cloudinary.com/dpw19qolx/image/upload/v1573405573/art-dark-dawn.jpg"
          height="600"
        >
          <v-layout
            column
            align-center
            justify-center
            class="white--text"
            fill-height
          >
            <!-- <img
          :src="require('@/assets/img/acadetech-icon.svg')"
          alt="AcadeTech"
        > -->
            <img
              src="https://res.cloudinary.com/dpw19qolx/image/upload/v1573406011/dessin.svg"
              height="150px"
              alt="Dinosaure"
            />

            <h1 class="white--text mb-2 display-3 text-xs-center">
              Web Developper
            </h1>
            <div class="subheading mb-3 text-xs-center shadow">
              Mathematics Teacher in professionnal reconversion
            </div>

            <v-btn class="mt-5 " dark large outlined rounded href="/blog">
              Read Me
            </v-btn>
          </v-layout>
        </v-img>
      </v-card>

      <!-- Home parallax -->
      <!-- features -->
<section>
    <v-layout
      column
      wrap
      class="my-5"
      align-center
    >
      <v-flex
        xs12
        class="midContainer"
      >
        <v-container grid-list-xl>
          <v-layout
            row
            wrap
            align-center
          >
            <v-flex
              xs12
              md4
            >
              <v-card class="elevation-0 transparent">
                <v-card-text class="text-xs-center">
                  <img
                    src="@/assets/img/logo.png"
                    width="40"
                    height="40"
                  >
                </v-card-text>
                <v-card-title
                  primary-title
                  class="layout justify-center"
                >
                  <div class="headline text-xs-center">
                    Gridsome
                  </div>
                </v-card-title>
                <v-card-text>
                  Gridsome is a Vue-powered static site generator for building CDN-ready websites for any headless CMS, local files or APIs.
                  <v-card-text class="text-xs-center">
                    <v-btn
                      outlined
                      rounded
                      color="success"
                      href="https://gridsome.org/"
                      target="_blank"
                    >
                      Gridsome
                    </v-btn>
                  </v-card-text>
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex
              xs12
              md4
            >
              <v-card class="elevation-0 transparent">
                <v-card-text class="text-xs-center">
                  <img
                    src="@/assets/img/vuetify-logo.svg"
                    width="40"
                    height="40"
                  >
                </v-card-text>
                <v-card-title
                  primary-title
                  class="layout justify-center"
                >
                  <div class="headline">
                    Vuetify
                  </div>
                </v-card-title>
                <v-card-text>
                  Semantic Material Components
                  Be prepared for an armada of specialized components at your disposal. With over 80 in total, there is a solution for any application.
                  <v-card-text class="text-xs-center">
                    <v-btn
                      outlined
                      rounded
                      color="info"
                      href="https://vuetifyjs.com/en/"
                      target="_blank"
                    >
                      Vuetify
                    </v-btn>
                  </v-card-text>
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex
              xs12
              md4
            >
              <v-card class="elevation-0 transparent">
                <v-card-text class="text-xs-center">
                  <img
                    src="@/assets/img/contentful-logo.svg"
                    width="40"
                    height="40"
                  >
                </v-card-text>
                <v-card-title
                  primary-title
                  class="layout justify-center"
                >
                  <div class="headline">
                    Contentful
                  </div>
                </v-card-title>
                <v-card-text>
                  Contentful provides a content infrastructure that enables teams to power content in any digital product.
                  gridsome + contentful have no harzzel on server content now. Fast. Flexible. Future-proof.
                  <v-card-text class="text-xs-center">
                    <v-btn
                      outlined
                      rounded
                      color="error"
                      href="https://www.contentful.com/developers/docs/javascript/tutorials/integrate-contentful-with-vue-and-nuxt/"
                      target="_blank"
                    >
                      Contentful
                    </v-btn>
                  </v-card-text>
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-flex>
    </v-layout>
  </section>
      <!-- end features -->
    </v-content>
 </Layout>
</template>

<script>
export default {
  data() {
    return {
      goDark: false,
      scroll: 0,
      itemsExt: [
        {
          faIcon: 'github',
          title: 'Kelvin Git',
          to: 'https://github.com/kelvin2go',
          target: '_blank'
        }
      ],
      activenav: 'secundary',
      color: 'secondary',
      clipped: true,
      drawer: false,
      fixed: true,
      isSidebarOpen: false,
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'AcadeTech',
      items: [
        { icon: 'mdi-home', title: 'Accueil', to: '/' },
        { icon: 'mdi-school', title: 'Blogs', to: '/blogs' }
        /* { icon: 'computer', title: 'Développement', to: '/dev' },
        { icon: 'computer', title: 'Cover', to: '/cover' } */
      ]
    }
  },
  computed: {
    setTheme() {
      if (this.goDark == true) {
        return (this.$vuetify.theme.dark = true)
      } else {
        return (this.$vuetify.theme.dark = false)
      }
    },
    setGoDark() {
      return this.goDark === !this.goDark
    }
  }
}
</script>

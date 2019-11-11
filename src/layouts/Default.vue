<template>
  <v-app :dark="setTheme">
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant.sync="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list
        dense
        nav
      >
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="title">
              David
            </v-list-item-title>
            <v-list-item-subtitle>
              Couronné
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-divider />
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"

          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider />
        <v-list-item @click="miniVariant = !miniVariant">
          <v-list-item-icon>
            <v-icon>mdi-clock-start</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Collapse</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
      dark

      dense color="black"
    >
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
      />
      <v-toolbar-title>David Couronné</v-toolbar-title>
     
      <v-spacer />
       <v-toolbar-items class="hidden-md-and-up">
      <v-btn
        dark
        icon
        router
        exact
        to="/"
      >
        <v-icon>mdi-home</v-icon>
      </v-btn>
      <v-btn
        dark
        icon
        router
        exact
        to="/blogs"
      >
        <v-icon>mdi-school</v-icon>
      </v-btn></v-toolbar-items>
      <v-toolbar-items class="hidden-sm-and-down">
      <v-btn :to="$url('/')">
          Home
        </v-btn>
        <v-btn :to="$url('/blog')">
          Blog
        </v-btn>
        <v-btn :to="$url('/docs')">
         Documentation
        </v-btn>
      </v-toolbar-items>
      <v-btn
        icon
        @click="goDark = !goDark"
      >
        <v-icon v-if="goDark">
          mdi-white-balance-sunny
        </v-icon>
        <v-icon v-else>
          mdi-moon-waxing-crescent
        </v-icon>
      </v-btn>
    </v-app-bar>

    
          <slot />

          <!-- footer -->
          <v-footer
    dark
    padless
  >
    <v-card
      class="flex"
      flat
      tile
       color="black"
    >
      <v-card-title>
        <strong class="subheading">Get connected with me on social networks!</strong>

        <v-spacer></v-spacer>

        <v-btn
         href="https://twitter.com/nollan94"
          class="mx-4"
          dark
          icon
          title="twitter"
        >
          <v-icon size="24px">mdi-twitter</v-icon>
        </v-btn>
        <v-btn
         href="https://github.com/DavidCouronne"
          class="mx-4"
          dark
          icon
          title="github"
        >
          <v-icon size="24px">mdi-github-circle</v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} — <strong>David Couronné</strong>
      </v-card-text>
    </v-card>
  </v-footer>
        
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      goDark: true,
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
        { icon: 'mdi-school', title: 'Blog', to: '/blog' }
        /* { icon: 'computer', title: 'Développement', to: '/dev' },
        { icon: 'computer', title: 'Cover', to: '/cover' } */
      ]
    }
  },
  computed: {
    setTheme () {
      if (this.goDark == true) {
        return (this.$vuetify.theme.dark = true)
      } else {
        return (this.$vuetify.theme.dark = false)
      }
    },
    setGoDark () {
      return this.goDark === !this.goDark
    }
  }
}
</script>

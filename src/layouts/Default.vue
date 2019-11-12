<template>
  <v-app :dark="$vuetify.theme.dark">
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
            <v-list-item-subtitle>Couronné</v-list-item-subtitle>
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
      dense
      color="black"
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>David Couronné {{ theme }}</v-toolbar-title>

      <v-spacer />

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

      <toggle-theme
        :theme="theme"
        @themeChanged="updateTheme"
      />
    </v-app-bar>

    <slot />

    <!-- footer -->
    <footer-layout />
  </v-app>
</template>

<script>
  import FooterLayout from './Partials/FooterLayout'
  import ToggleTheme from './Partials/ToggleTheme'
  export default {
    components: {
      FooterLayout,
      ToggleTheme,
    },
    data () {
      return {
        theme: '',
        scroll: 0,
        itemsExt: [
          {
            faIcon: 'github',
            title: 'Kelvin Git',
            to: 'https://github.com/kelvin2go',
            target: '_blank',
          },
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
          { icon: 'mdi-school', title: 'Blog', to: '/blog' },
        /* { icon: 'computer', title: 'Développement', to: '/dev' },
        { icon: 'computer', title: 'Cover', to: '/cover' } */
        ],
      }
    },
    mounted () {
      this.theme = localStorage.getItem('theme') || 'theme-light'
      this.$vuetify.theme.dark = this.theme === 'theme-dark'
    },
    methods: {
      updateTheme (theme) {
        this.theme = theme
        this.$vuetify.theme.dark = this.theme === 'theme-dark'
      },
    },
  }
</script>

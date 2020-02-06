<template>
  <div id="app" dark>
    <HeaderPartial v-if="hideHeader != true"></HeaderPartial>

    <slot />
    <NavbarPartial :disableScroll="disableScroll"></NavbarPartial>
    <FooterPartial></FooterPartial>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import HeaderPartial from './partials/HeaderWithNavbar.vue'
import NavbarPartial from './partials/Navbar.vue'
import FooterPartial from './partials/Footer.vue'

export default {
  props: {
    hideHeader: {
      type: Boolean,
      default: false
    },
    disableScroll: {
      type: Boolean,
      default: false
    }
  },
  components: {
    HeaderPartial,
    NavbarPartial,
    FooterPartial
  },

  metaInfo: {
    bodyAttrs: {
      class: 'm-0'
    }
  }
}
</script>

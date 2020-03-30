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
export default {
  props: {
    hideHeader: {
      type: Boolean,
      default: false,
    },
    disableScroll: {
      type: Boolean,
      default: false,
    },
  },

  metaInfo: {
    bodyAttrs: {
      class: 'm-0',
    },
  },
}
</script>

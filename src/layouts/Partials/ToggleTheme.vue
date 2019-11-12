<template>
  <v-btn
    icon
    @click.prevent="toggleTheme"
  >
    <v-icon v-if="theme === 'theme-dark'">
      mdi-white-balance-sunny
    </v-icon>
    <v-icon v-else>
      mdi-moon-waxing-crescent
    </v-icon>
  </v-btn>
</template>

<script>
  export default {
    props: {
      theme: {
        type: String,
        required: true,
      },
    },
    methods: {
      toggleTheme () {
        const newTheme =
          this.theme === 'theme-light' ? 'theme-dark' : 'theme-light'
        localStorage.setItem('theme', newTheme)
        this.$emit('themeChanged', newTheme)
      },
    },
  }
</script>

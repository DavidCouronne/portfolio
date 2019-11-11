<template>
  <v-footer dark padless>
    <v-card class="flex" flat tile color="black">
      <v-card-title>
        <strong class="subheading">Get connected with me!</strong>

        <v-spacer></v-spacer>

        <v-btn href="https://twitter.com/nollan94" class="mx-4" dark icon title="twitter">
          <v-icon size="24px">mdi-twitter</v-icon>
        </v-btn>
        <v-btn href="https://github.com/DavidCouronne" class="mx-4" dark icon title="github">
          <v-icon size="24px">mdi-github-circle</v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} —
        <strong>David Couronné</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

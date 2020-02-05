<template>
  <v-footer

    padless
  >
    <v-card
      class="flex"
      flat
      tile
    >
      <v-list>
        <v-list-item>
          <g-link
            class="footer-link"
            to="/Legacy"
          >
            Legacy
          </g-link>
          <v-spacer />

          <v-btn
            href="https://twitter.com/nollan94"
            class="mx-4"

            icon
            title="twitter"
          >
            <v-icon size="24px">
              mdi-twitter
            </v-icon>
          </v-btn>
          <v-btn
            href="https://github.com/DavidCouronne"
            class="mx-4"

            icon
            title="github"
          >
            <v-icon size="24px">
              mdi-github-circle
            </v-icon>
          </v-btn>
        </v-list-item>
      </v-list>
      <v-card-text class="py-2  text-center">
        {{ new Date().getFullYear() }} —
        <strong>David Couronné</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

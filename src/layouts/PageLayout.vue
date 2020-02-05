<template>
  <Layout>
    <v-content>
      <v-container fluid>
        <v-row>
          <v-col
            lg="8"
            offset-lg="2"
            xl="1"
            offset-xl="2"
            class="pa-6"
          >
            <slot />
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </Layout>
</template>

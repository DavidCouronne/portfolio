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
            <s-e-o-page />
            <v-sheet
              mx-auto
              py-0
              py-md-6
            >
              <div class="post__header">
                <v-img
                  v-if="$page.post.cover_image"
                  alt="Cover image"
                  :aspect-ratio="16 / 9"
                  :src="$page.post.cover_image"
                />
              </div>

              <h1>{{ $page.post.title }}</h1>
              <p>Posted {{ $page.post.date }}.</p>
              <v-container>
                <div v-html="$page.post.content" />
              </v-container>

              <div class="post__footer">
                <post-tags :post="$page.post" />
              </div>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </Layout>
</template>

<static-query>
query {
  metadata{
    siteUrl
    pathPrefix
    }
    }
</static-query>

<page-query>
query Post ($id: ID!) {
  post: post (id: $id) {
    title
    path
    date (format: "D. MMMM YYYY")
    timeToRead
    tags {
      id
      title
      path
    }
    description
    content
    author
    avatar
    cover_image
  }
}
</page-query>

<script>
  import SEOPage from '../components/base/SEOArticle.vue'
  export default {
    components: {
      SEOPage,
    },
  }
</script>

<style src="../css/github-markdown.css" />

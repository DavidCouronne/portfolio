<template>
  <Layout>
    <div class="container sm:pxi-0 mx-auto overflow-x-hidden">
      <div class="flex flex-wrap with-large pt-16 pb-16 mx-4 sm:-mx-4">
        <PostListItem
          v-for="edge in $page.entries.edges"
          :key="edge.node.id"
          :record="edge.node"
        />
      </div>
      <div class="pagination flex justify-center mb-8">
        <Pagination
          baseUrl=""
          :currentPage="$page.entries.pageInfo.currentPage"
          :totalPages="$page.entries.pageInfo.totalPages"
          :maxVisibleButtons="5"
          v-if="$page.entries.pageInfo.totalPages > 1"
        />
      </div>
    </div>
  </Layout>
</template>

<page-query>

query($page:Int) {

  entries: allBlog(perPage: 9, page: $page, sortBy: "date") @paginate {
    totalCount
    
    pageInfo {
      totalPages
      currentPage
     
    }
    edges {
      node {
        title
        description
        cover_image
        path
        timeToRead
        humanTime : date(format:"DD MMM YYYY")
        date (format: "D. MMMM YYYY")
        
        category {
          id
          title
        }
        author {
          id
          name
          image(width:64, height:64, fit:inside)
          path
        }
      }
    }
  }
}

</page-query>

<script>
import PostListItem from '~/components/PostListItem.vue'
import Pagination from '~/components/Pagination.vue'

export default {
  metaInfo() {
    return {
      title: 'Blog de David Couronné',
      meta: [
        {
          name: 'description',
          content: 'Blog de David Couronné',
        },
        // open-graph tags
        {
          property: 'og:title',
          content: 'Blog de David Couronné',
        },
        {
          property: 'og:description',
          content: 'Blog de David Couronné',
        },
        {
          property: 'og:image',
          content:
            'https://res.cloudinary.com/dpw19qolx/image/upload/v1573405573/art-dark-dawn.jpg',
        },
        {
          property: 'og:url',
          content: this.$static.metadata.siteUrl,
        },
        // twitter card
        {
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          name: 'twitter:creator',
          content: '@nollan94',
        },
        { name: 'twitter:title', content: 'Blog de David Couronné' },
        { name: 'twitter:description', content: 'Blog de David Couronné' },
      ],
      // Some ld+json tags
    }
  },
  components: {
    Pagination,
    PostListItem,
  },
}
</script>

<static-query>
query {
  metadata {
    author
  }
}
</static-query>

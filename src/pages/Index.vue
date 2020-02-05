<template>
  <Layout>
    <div class="container sm:pxi-0 mx-auto overflow-x-hidden">
      <div class="flex flex-wrap with-large pt-16 pb-16 mx-4 sm:-mx-4">
        <PostListItem v-for="edge in $page.entries.edges" :key="edge.node.id" :record="edge.node" />
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
        image
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

import PostListItem from '~/components/PostListItem.vue';
import Pagination from "~/components/Pagination.vue";

export default {
  metaInfo: {
    title: "Hello, world!"
  },
  components: {
    Pagination,
    PostListItem
  }
};
</script>

<template>
  <div class="relative">
    <div class="relative w-80">
      <div
        class="absolute top-0 ml-3"
        style="top:10px"
      >
        <svg
          fill="currentColor"
          class="text-gray-500 h-5 w-5"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path
            class="heroicon-ui"
            d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"
          />
        </svg>
      </div>
      <div
        v-if="query.length > 0"
        class="absolute top-0 right-0 text-2xl mr-3 cursor-pointer text-gray-600 hover:text-gray-800"
        style="top:2px;"
        @click="reset"
      >
        &times;
      </div>
    </div>
  </div>
</template>

<static-query>
  {
    metadata{
      pathPrefix
    }
  }
</static-query>

<script>
  import axios from 'axios'

  export default {
    components: {},
    data () {
      return {
        query: '',
        results: [],
        posts: [],
        highlightedIndex: 0,
        searchResultsVisible: false,
        options: {
          shouldSort: true,
          includeMatches: true,
          threshold: 0.5,
          location: 0,
          distance: 500,
          maxPatternLength: 32,
          minMatchCharLength: 1,
          keys: ['title', 'summary'],
        },
      }
    },
    created () {
      axios(this.$static.metadata.pathPrefix + '/search.json')
        .then(response => {
          this.posts = response.data
        })
        .catch(error => {
          console.log(error)
        })
    },
    methods: {
      reset () {
        this.query = ''
        this.highlightedIndex = 0
      },
      softReset () {
        this.highlightedIndex = 0
        this.searchResultsVisible = true
      },
      performSearch () {
        this.$search(this.query, this.posts, this.options).then(results => {
          this.results = results
        })
      },
      highlightPrev () {
        if (this.highlightedIndex > 0) {
          this.highlightedIndex = this.highlightedIndex - 1
          this.scrollIntoView()
        }
      },
      highlightNext () {
        if (this.highlightedIndex < this.results.length - 1) {
          this.highlightedIndex = this.highlightedIndex + 1
          this.scrollIntoView()
        }
      },
      scrollIntoView () {
        this.$refs.results.children[this.highlightedIndex].scrollIntoView({
          block: 'nearest',
        })
      },
      gotoLink () {
        if (this.results[this.highlightedIndex]) {
          window.location = this.results[this.highlightedIndex].item.path
        }
      },
      focusSearch (e) {
        if (e.key === '/') {
          this.$refs.search.focus()
        }
      },
    },
  }
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>

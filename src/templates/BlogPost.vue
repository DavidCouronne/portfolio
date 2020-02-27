<template>
  <Layout :hideHeader="true" :disableScroll="true">
    <div class="container sm:pxi-0 mx-auto overflow-x-hidden pt-24">
      <div class="lg:mx-32 md:mx-16 sm:mx-8 mx-4 pt-8">
        <section class="post-header container mx-auto px-0 mb-4 border-b">
          <span
            class="text-blue-500 font-medium uppercase tracking-wide text-sm"
          >
            <g-link :to="$page.blog.category.path" class="hover:underline">
              {{ $page.blog.category.title }}
            </g-link>
          </span>
          <h1 class="text-5xl font-medium leading-none mt-0">
            {{ $page.blog.title }}
          </h1>
          <div
            class="text-2xl pt-4 pb-10 text-gray-700 "
            v-html="$page.blog.description"
          ></div>
        </section>
        <section class="post-author-list mb-10 mx-0">
          <div class="flex items-center">
            <div class="flex justify-between items-center">
              <ul class="list-none flex author-list">
                <li
                  v-for="author in $page.blog.author"
                  :key="author.id"
                  class="author-list-item"
                >
                  <g-link :to="author.path" v-tooltip="author.name">
                    <g-image
                      :src="author.image"
                      :alt="author.name"
                      class="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-gray-200 border-2 border-white"
                    />
                  </g-link>
                </li>
              </ul>
            </div>
            <div class="pl-3 flex flex-col text-xs leading-none uppercase">
              <p>
                <span
                  v-for="(author, index) in $page.blog.author"
                  :key="author.id"
                >
                  <g-link
                    :to="author.path"
                    v-tooltip="author.name"
                    class="hover:underline"
                    >{{ author.name }}</g-link
                  >
                  <span v-if="index < $page.blog.author.length - 1">,</span>
                </span>
              </p>
              <p class="text-gray-700">
                <time :datetime="$page.blog.datetime">
                  {{ $page.blog.humanTime }}
                </time>
                &nbsp;&middot;&nbsp; {{ $page.blog.timeToRead }} min read
              </p>
            </div>
          </div>
        </section>
      </div>
      <section class="post-image mx-auto max-w-2xl">
        <g-image class="rounded" :src="$page.blog.cover_image"></g-image>
      </section>

      <div class="lg:mx-32 md:mx-16 px-4 sm:px-0">
        <section class="post-content container mx-auto relative  text-gray-700">
          <div
            class="post-content-text text-xl rich-text font-sans"
            v-html="$page.blog.content"
          ></div>
        </section>

        <section class="post-tags container mx-auto relative py-10">
          <g-link
            v-for="tag in $page.blog.tags"
            :key="tag.id"
            :to="tag.path"
            class="text-xs bg-transparent hover:text-blue-700 py-2 px-4 mr-2 border hover:border-blue-500 border-gray-600 text-gray-700 rounded-full"
            >{{ tag.title }}</g-link
          >
        </section>
      </div>
    </div>

    <section
      class="post-related bg-black text-gray-200 pt-10 border-b border-b-gray-900"
    >
      <div class="container mx-auto">
        <div class="flex flex-wrap pt-8 pb-8 mx-4 sm:-mx-4">
          <PostListItem
            v-if="$page.previous"
            :record="$page.previous"
            :border="false"
          ></PostListItem>
          <PostListItem
            v-if="$page.next"
            :record="$page.next"
            :border="false"
          ></PostListItem>
        </div>
      </div>
    </section>
  </Layout>
</template>

<page-query>
  query($id: ID!, $previousElement: ID!, $nextElement: ID!) {
    blog(id: $id) {
      title
      path
      cover_image
      cover_image_caption
      description
      content
      humanTime : date(format:"DD MMMM YYYY")
      datetime : date(format:"ddd MMM DD YYYY hh:mm:ss zZ")
      timeToRead
      tags {
        id
        title
        path
      }
      category {
        id
        title
        path
        belongsTo(limit:4) {
          totalCount
          edges {
            node {
              ... on Blog {
                title
                path
              }
            }
          }
        }
      }
      author {
        id
        name
        image
        path
      }
      tags {
        id
        title
        path
      }
    }

    previous: blog(id: $previousElement) {
      title
      description
      cover_image
      path
      timeToRead
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

    next: blog(id: $nextElement) {
      title
      description
      cover_image
      path
      timeToRead
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
</page-query>

<script>
import PostListItem from '~/components/PostListItem.vue'

export default {
  components: {
    PostListItem
  },
  metaInfo() {
    return {
      title: this.$page.blog.title,
      meta: [
        {
          name: 'description',
          content: this.$page.blog.description
        },
        // open-graph tags
        {
          property: 'og:title',
          content: this.$page.blog.title
        },
        {
          property: 'og:description',
          content: this.$page.blog.description
        },
        {
          property: 'og:image',
          content: this.$page.blog.cover_image || ''
        },
        {
          property: 'og:url',
          content: this.$static.metadata.siteUrl + this.$page.blog.path
        },
        // twitter card
        {
          name: 'twitter:card',
          content: this.$page.blog.cover_image
            ? 'summary_large_image'
            : 'summary'
        },
        {
          name: 'twitter:creator',
          content: '@nollan94'
        },
        { name: 'twitter:title', content: this.$page.blog.title },
        { name: 'twitter:description', content: this.$page.blog.description }
      ],
      // Some ld+json tags
      script: [
        {
          type: 'application/ld+json',
          json: {
            '@context': 'http://schema.org',
            '@type': 'BlogPosting',
            description: this.$page.blog.description,
            datePublished: this.$page.blog.datetime,
            dateModified: this.$page.blog.datetime,
            author: {
              name: 'David Couronné'
            },
            headline: this.$page.blog.title,
            image: this.$page.blog.cover_image,
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': this.$static.metadata.siteUrl + this.$page.blog.path
            }
          }
        }
      ]
    }
  }
}
</script>

<static-query>
query {
  metadata {
    siteName
    siteUrl
  }
}
</static-query>

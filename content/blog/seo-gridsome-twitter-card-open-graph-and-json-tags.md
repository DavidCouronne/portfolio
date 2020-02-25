---
published: false
date: 2020-25-02
datepublished: 2020-02-25T19:31:47Z
category: dev
author: davidcouronne
datemodified: 2020-02-25T19:31:47Z
title: 'SEO Gridsome: Twitter card, open-graph and json tags'
tags: seo, Gridsome
series: false
canonical_url: false
description: How to add twitter card and open-graph tags
cover_image: https://res.cloudinary.com/dpw19qolx/image/upload/v1562052876/nebulae-1199180_1920.jpg
cover_image_caption: Nebulae from Unsplash

---
SEO matter's. With Gridsome, thank's to vue-meta, you can easely add open-graph, twitter and google tags.

This article is not about improving SEO, just add tags programmatically in your Gridosme project.

## Tools

We need some tools for validate our SEO tags

### Twitter Card Validator

:::important

+ you need a twitter account !
+ work only with live site, not development mode

:::

https://cards-dev.twitter.com/validator

Documentation: https://developer.twitter.com/en/docs/tweets/optimize-with-cards/overview/markup

### Google Data Structure Testing Tool

:::important
Work in development mode, with some copy/paste...
:::

https://search.google.com/structured-data/testing-tool

## Blog posts

Assume you have a template, `BlogPost.vue` for exemple.

His structure is something like this:

```html
<template>
    ...
</template>

<page-query>
    ...
</page-query>

<script>
import ...

export default {
    ...
}
</script>
```

Focus on the basic structure of meta datas:

```js
export default {
  components: {
    ...
  },
  metaInfo() {
    return {
      title: this.$page.blog.title, //for example
      meta: [
        // Regular meta tags
        ...
        // open-graph tags
        ...
        // twitter card
        ...
      ],
      // Some ld+json tags
      script: [
        {
          type: 'application/ld+json',
          json: {
           ...
          }
        }
      ]
    }
  }
}
</script>
```


With a complete example:


```js
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
          content: this.$page.blog.author.twitter
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
            datePublished: this.$page.blog.datePublished,
            dateModified: this.$page.blog.dateModified,
            author: {
              name: this.$page.blog.author.name
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
  ```

  You need to adapt your queries, and your frontmatter in order to match the SEO fields.

:::tip
If ou're the only one author of your blog, you can hard-code your meta data.
:::

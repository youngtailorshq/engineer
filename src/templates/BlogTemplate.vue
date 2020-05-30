<template>
  <Layout>
    <div class="flex flex-wrap-reverse">
      <div
        class="w-full lg:w-3/4 py-4 lg:pt-8 lg:pb-4 dark:border-gray-800 lg:border-r"
      >
        <article class="lg:px-8">
          <h1 class="text-4xl font-black mb-4 leading-none">
            {{ $page.blog.title }}
          </h1>
          <VueRemarkContent class="young-content" />
        </article>
      </div>
      <ArticleToc :toc="$page.blog.headings" />
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Hello, world!',
  },
};
</script>

<page-query>
query Blog ($id: ID!) {
  blog(id: $id) {
    title
    headings {
      depth
      value
      anchor
    }
  }
}
</page-query>

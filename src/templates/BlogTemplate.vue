<template>
  <Layout>
    <div class="flex flex-wrap-reverse">
      <div class="w-full lg:w-3/4 py-4 lg:pt-8 lg:pb-4 dark:border-gray-800">
        <article class="lg:px-8">
          <h1 class="text-4xl font-black mb-4 leading-none">{{ $page.blog.title }}</h1>
          <VueRemarkContent />
        </article>
      </div>
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
  }
}
</page-query>
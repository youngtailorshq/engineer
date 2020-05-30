<template>
  <div class="pt-16">
    <Navbar />
    <main class="container mx-auto px-4 lg:px-8">
      <div class="flex flex-wrap relative">
        <aside
          class="h-screen w-full lg:w-1/5 fixed lg:sticky top-0 left-0 bottom-0 pt-16 lg:-mt-16 lg:block bg-white dark:bg-gray-900 lg:bg-transparent z-30 lg:border-r dark:border-gray-800"
        >
          <div class="container mx-auto overflow-auto h-full">
            <div class="lg:hidden flex-1 flex justify-center px-4 mt-8 mb-4 w-full">
              <SearchInput />
            </div>
            <ul class="lg:pl-0 p-4 lg:py-8 lg:pr-8">
              <li>
                <h3 class="aside-title">Latest Blog</h3>
              </li>
              <ul>
                <li v-for="blog of blogs" :key="blog.id">
                  <g-link
                    :to="blog.path"
                    class="px-2 rounded font-medium py-1 block text-gray-600 dark:text-gray-500 hover:text-gray-800 dark-hover:text-gray-100"
                    exact-active-class="text-green-600 bg-green-100 hover:text-green-600 dark:text-green-200 dark:bg-green-900 dark-hover:text-green-200"
                  >{{ blog.title }}</g-link>
                </li>
              </ul>
            </ul>
          </div>
        </aside>
        <div class="w-full lg:w-4/5">
          <slot />
        </div>
      </div>
    </main>
    <TheFooter />
  </div>
</template>

<static-query>
query {
  allBlog {
    edges {
      node {
        id
        title
        path
      }
    }
  }
}
</static-query>

<script>
export default {
  computed: {
    blogs() {
      return this.$static.allBlog.edges.map(edge => ({ ...edge.node }));
    },
  },
};
</script>

<style lang="postcss">
@import url('https://fonts.googleapis.com/css2?family=Be+Vietnam:ital,wght@0,400;0,700;1,400;1,700&display=swap');
body {
  font-family: 'Be Vietnam', sans-serif;
}
.aside-title {
  @apply mb-3 text-gray-500 uppercase tracking-wide font-bold text-sm;
}
@screen lg {
  .aside-title {
    @apply mb-2 text-xs;
  }
}
</style>

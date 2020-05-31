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
<style lang='postcss' > .dark-mode .young-content {
  & h2,
  & h3,
  & blockquote {
    @apply border-gray-800;
  }

  & > code,
  & li > code,
  & p > code,
  & h3 > code {
    @apply bg-gray-800;
  }
}

.young-content h2 {
  @apply text-3xl font-black mb-4 pb-1 border-b -mt-16 pt-24;

  & > a {
    @apply ml-6;
    &::before {
      content: '#';
      @apply text-green-500 font-normal -ml-6 pr-1 absolute opacity-100;
    }
  }

  &:hover {
    & > a::before {
      @apply opacity-100;
    }
  }
}
.young-content h3 {
  @apply text-2xl font-extrabold mb-2 pb-1 border-b -mt-16 pt-20;

  & > a {
    @apply ml-6;
    &::before {
      content: '#';
      @apply text-green-500 font-normal -ml-5 pr-1 absolute opacity-100;
    }
  }

  &:hover {
    & > a::before {
      @apply opacity-100;
    }
  }
}

@screen lg {
  .young-content h2 a,
  .young-content h3 a {
    @apply ml-0;
    &::before {
      @apply opacity-0;
    }
  }
}

.young-content ul,
.young-content ol {
  @apply list-disc list-inside mb-4;

  & > li {
    @apply leading-7;

    & > ul {
      @apply pl-4;
    }
  }
}

.young-content ol {
  @apply list-decimal;
}

.young-content {
  & a {
    @apply underline;
  }

  & p {
    @apply mb-4 leading-7;
  }

  & > blockquote {
    @apply py-2 pl-4 mb-4 border-l-4;

    & p:last-child {
      @apply mb-0;
    }
  }

  & > code,
  & li > code,
  & p > code {
    @apply bg-gray-100 p-1 text-sm shadow-xs rounded;
  }

  & h3 > code {
    @apply bg-gray-100 p-1 text-lg shadow-xs rounded;
  }

  & pre[class*='language-'] {
    @apply rounded mt-0 mb-4 bg-gray-800 text-sm relative;

    > code {
      @apply bg-gray-800 relative;
      text-shadow: none;
    }
  }

  & video {
    @apply w-full border rounded shadow-md;
  }
}

.young-content-highlight {
  @apply relative;

  & > .filename {
    @apply absolute right-0 text-gray-600 font-light z-10 mr-2 mt-1 text-sm;
  }
}
</style>

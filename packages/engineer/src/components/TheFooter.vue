<template>
  <footer class="h-24 w-full border-t dark:border-gray-800 bg-white dark:bg-gray-900">
    <div class="h-full w-full container mx-auto px-4 lg:px-8 flex items-center justify-between">
      <div class="flex items-center">
        <span class="mr-2 text-sm leading-none">© {{ new Date().getFullYear() }}</span>
        <a href="https://youngtailors.com" target="_blank" rel="noopener">Young Tailors</a>
      </div>
      <!-- <div class="flex">
        <ColorSwitcher class="p-2 pr-0" />
      </div>-->
    </div>
  </footer>
</template>

<script>
export default {
  computed: {},
};
</script>

<style>
</style>

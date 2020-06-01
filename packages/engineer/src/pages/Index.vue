<template>
  <Layout>
    <div class="py-4 lg:pt-8 lg:pb-4 lg:px-8 young-content">
      <!-- Learn how to use images here: https://gridsome.org/docs/images -->

      <div class="flex items-center">
        <g-image
          alt="Example image"
          src="~/favicon.png"
          width="135"
          class="mr-8"
        />
        <div>
          <h2>Product development lovers</h2>
          <p class="text-gray-600">
            Not just develop, we love to see the beautiful products and willing
            to hear customer feedback.
          </p>
        </div>
      </div>
      <h3>Our services</h3>
      <BaseList :items="items" />
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Hello, world!',
  },
  data() {
    return {
      items: [
        'Product Development',
        'Web Development',
        'Mobile Development',
        'UI & UX Design',
        'Consulting & Maintainance',
        'Cloud Setup',
      ],
    };
  },
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>

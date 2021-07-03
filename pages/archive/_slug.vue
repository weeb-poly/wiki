<template>
  <main>
    <nuxt-content :document="data" />
  </main>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    const { slug } = params;
    let data; 

    try {
      data = await $content('archive', year, slug).fetch();
    } catch (e) {
      error({ message: 'Mascot not found' });
    }

    return { data };
  },
  head() {
    return {
      meta: [
        { hid: 'og:title', property: 'og:title', content: this.data.title },
        { hid: 'og:description', property: 'og:description', content: this.data.description },
      ]
    }
  }
};
</script>

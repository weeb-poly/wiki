<template>
  <main class="my-4">
    <section id="mascot" class="container">
      <div class="m-title mb-3">
        <h1>{{ data.title }}</h1>
      </div>

      <div class="m-info mb-3 ms-md-4">
        <InfoCard :title="data.title" :img="data.cover" :info="data.info"></InfoCard>
      </div>

      <div class="m-content">
        <nuxt-content :document="data" />
      </div>

      <div class="m-gallery" v-if="data.media">
        <h4>Gallery</h4>

        <Gallery :data="data.media"></Gallery>
      </div>
    </section>
  
  </main>
</template>

<style lang="scss">
#mascot {
  @media (min-width: 768px) {
    display: grid;
    grid-template-areas: "title" "info" "content" "gallery";
    grid-template-rows: auto auto 1fr auto;
  }

  @media (min-width: 992px) {
    grid-template-areas: "title info" "content info" "gallery gallery";
    grid-template-columns: 3fr 1fr;
    grid-template-rows: auto 1fr auto;
  }

  .m-title {
    grid-area: title;
  }

  .m-info {
    grid-area: info;

    @media (min-width: 992px) {
      overflow-y: auto;
    }
  }

  .m-content {
    grid-area: content;
    min-width: 1px;
  }

  .m-gallery {
    grid-area: gallery;
    min-width: 1px;
  }
}
</style>

<script>
export default {
  async asyncData({ $content, params, error }) {
    const { slug } = params;
    let data;
  
    try {
      data = await $content('mascots', slug).fetch();
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
        { hid: 'og:image', property: 'og:image', content: this.data.cover },
      ]
    }
  }
};
</script>

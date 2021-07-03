<template>
  <main class="my-4">
    <section id="mascot" class="container">
      <div class="m-title mb-3">
        <h1>{{ data.title }}</h1>
      </div>

      <div class="m-info mb-3 ms-md-4">
        <InfoCard :data="data"></InfoCard>
      </div>

      <div class="m-content">
        <nuxt-content :document="data" />
      </div>

      <div class="m-gallery" v-if="data.media">
        <h4>Gallery</h4>

        <!--
        <div class="row my-1" :data-masonry="JSON.stringify({'percentPosition':true})">
          <div class="col-sm-6 col-lg-4 mb-4" v-for="item in data.media" :key="item.src">
            <div class="card">
              <img :src="item.src" class="card-img-top">

              <div class="card-body">
                <p class="card-text" v-html="item.caption"></p>
              </div>
            </div>
          </div>
        </div>
        -->

        <div class="row my-1 row-cols-1 row-cols-md-3 g-3 justify-content-md-center">
          <div class="col" v-for="item in data.media" :key="item.src">
            <!--
            <figure class="figure">
              <img :src="item.src" class="figure-img img-fluid rounded">
              <figcaption class="figure-caption" v-html="item.caption"></figcaption>
            </figure>
            -->
            <div class="card h-100">
              <img class="card-img-top" :src="item.src">
              <div class="card-body">
                <h5 class="card-title" v-html="item.title"></h5>
                <p class="card-text" v-html="item.text"></p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  
  </main>
</template>

<style lang="scss" scoped>
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

table.card-body {
  tr:last-child > * {
    border-bottom-width: 0;
  }

  th, td {
    padding: 0.25rem !important;
  }
}

.m-gallery {
  .card-img,
  .card-img-top {
    width: 100%;
    height: 100%;
    aspect-ratio: 1 / 1;
    object-fit: contain;
  }
}

.fs-7 {
  font-size: 0.75rem !important;
}
</style>

<script>
export default {
  async asyncData({ $content, params, error }) {
    const data = await $content('mascots', params.slug).fetch();

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

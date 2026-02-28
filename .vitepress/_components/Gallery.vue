<template>
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
    <div class="col" v-for="item in data" :key="item.src">
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
</template>

<style lang="scss" scoped>
.card-img,
.card-img-top {
  width: 100%;
  height: 100%;
  aspect-ratio: 1 / 1;
  object-fit: contain;
}
</style>

<script>
export default {
  props: {
    data: {
      type: Array,
      required: true
    },
  },
};
</script>

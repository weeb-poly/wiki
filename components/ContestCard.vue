<template>
  <div class="card">
    <h5 class="card-header" v-html="data.rank"></h5>
    <img class="card-img-top" :src="data.img">
    <div class="card-body">
      <h5 class="card-title">{{ data.name }}</h5>
      <h6 class="card-subtitle mb-2 text-muted">{{ data.creator }}</h6>
      <p class="card-text" v-html="data.desc"></p>
    </div>
    <div class="card-footer" v-if="data.footer">
      <small class="text-muted">{{ data.footer }}</small>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true
    }
  }
};
</script>

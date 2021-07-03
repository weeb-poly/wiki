<template>
  <div class="card">
    <NuxtLink class="card-header h5" :to="data.path">{{ data.title }}</NuxtLink>
    <img class="card-img-top" :src="data.cover">
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true
    }
  },
};
</script>

<template>
  <div v-if="loading" id="preloader">
    <p>Loading...</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        loading: false
      };
    },
    methods: {
      start() {
        this.loading = true;
      },
      finish() {
        this.loading = false;
      }
    }
  }
</script>

<style lang="scss" scoped>
@import '~/assets/scss/parts/preloader';
</style>
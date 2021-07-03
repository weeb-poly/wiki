<template>
  <a href="#" class="back-to-top d-flex align-items-center justify-content-center" :class="{ 'active': visible }"><i class="bi bi-arrow-up-short"></i></a>
</template>

<script>
export default {
  data() {
    return {
      visible: false
    }
  },
  methods: {
    scrollListener() {
      this.visible = (window.scrollY > 100);
    }
  },
  mounted() {
    setTimeout(() => {
      window.addEventListener('load', this.scrollListener);
    });
    document.addEventListener('scroll', this.scrollListener);
  },
  beforeDestroy() {
    window.removeEventListener('load', this.scrollListener);
    document.removeEventListener('scroll', this.scrollListener);
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/variables';
@import '~/assets/scss/parts/back-to-top';
</style>

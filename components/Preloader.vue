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

<style lang="scss">
@use '~/assets/scss/variables' as vars;

#preloader {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  overflow: hidden;
  background: vars.$body-bg;

  &:before {
    content: "";
    position: fixed;
    top: calc(50% - 30px);
    left: calc(50% - 30px);
    border: 6px solid vars.$crimson;
    border-top-color: vars.$body-bg;
    border-bottom-color: vars.$body-bg;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    animation: animate-preloader 1s linear infinite;
  }
}

@keyframes animate-preloader {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>

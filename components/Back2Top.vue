<template>
  <div
    class="back-to-top d-flex align-items-center justify-content-center"
    :class="{ 'show': show }"
    @click="scrollToTop"
  ><i class="bi bi-arrow-up-short"></i></div>
</template>

<script>
export default {
  props: {
    threshold: {
      type: Number,
      default: 100
    }
  },
  data() {
    return {
      debounceTimeout: null,
      scrollTop: 0
    }
  },
  computed: {
    show() {
      return this.scrollTop > this.threshold;
    }
  },
  mounted() {
    this.setScrollTop();
    window.addEventListener('scroll', () =>  this.setScrollTop(), 100);
  },
  methods: {
    setScrollTop() {
      if (this.debounceTimeout) {
        clearTimeout(this.debounceTimeout);
      }

      this.debounceTimeout = setTimeout(() => {
        this.scrollTop = window.pageYOffset
          || document.documentElement.scrollTop
          || document.body.scrollTop || 0;
      }, 100);
    },
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      this.scrollTop = 0;
    }
  }
}
</script>

<style lang="scss" scoped>
@use '~/assets/scss/variables' as vars;

.back-to-top {
  position: fixed;
  cursor: pointer;

  visibility: hidden;
  opacity: 0;

  right: 15px;
  bottom: 15px;
  z-index: 996;
  background: vars.$primary;
  width: 40px;
  height: 40px;
  border-radius: 50px;
  transition: all 0.4s;

  i {
    font-size: 28px;
    color: vars.$cultured;
    line-height: 0;
  }

  &:hover {
    background: lighten(vars.$primary, 5%);
    color: vars.$cultured;
  }

  &.show {
    visibility: visible;
    opacity: 1;
  }
}
</style>

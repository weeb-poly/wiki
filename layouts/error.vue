<template>
  <main class="d-flex flex-column flex-grow-1">
    <div class="hero flex-grow-1 position-relative overflow-hidden p-3 mt-0 p-md-5">
      <div class="align-middle container position-relative p-lg-3 my-3 text-white">
        <h1 v-if="error.statusCode === 404">Page not found</h1>
        <h1 v-else>An error occurred</h1>
        <NuxtLink to="/" class="btn btn-hero btn-lg fs-6 fw-bold mt-3">Home</NuxtLink>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  props: ['error'],
  layout: 'default',
}
</script>

<style lang="scss">
@import '~/assets/scss/variables';
@import '~/assets/scss/parts/hero';
</style>

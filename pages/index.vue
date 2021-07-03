<template>
  <main>
    <Hero></Hero>
    <About></About>
  </main>
</template>

<script>
export default {
  head() {
    return {
      meta: [
        { hid: 'og:image', property: 'og:image', content: '/android-chrome-192x192.png' },
      ]
    };
  }
}
</script>

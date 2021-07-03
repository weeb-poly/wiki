<template>
  <main>
    <div class="breadcrumbs">
      <div class="container">
        <h2>Archive</h2>
        <p>This is our list of our archived posts.</p>
      </div>
    </div>

    <section id="mascot-list" class="py-3">
      <div class="container">
        <div class="my-3 p-3">
          <div class="d-flex bg-body pt-3">
            <p class="pb-3 mb-0 lh-sm" v-for="item in data" :key="item.path">
              <NuxtLink class="d-block" :to="item.path">{{ item.title }}</NuxtLink>
              {{ item.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

  </main>
</template>


<script>
  export default {
    async asyncData({ $content, _params }) {
      const data = await $content('archive', { deep: true })
        .without(['body'])
        .fetch();

      return { data };
    }
  }
</script>

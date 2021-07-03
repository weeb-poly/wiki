<template>
  <main>
    <div class="breadcrumbs">
      <div class="container">
        <h2>Archive</h2>
        <p>This is our list of our archived posts.</p>
      </div>
    </div>

    <section class="py-3">
      <div class="container">
        <ul class="list-group">
          <li class="list-group-item d-flex justify-content-between align-items-start" v-for="item in data" :key="item.path">
            <div class="ms-2 me-auto">
              <div class="fw-bold">
                <NuxtLink :to="item.path">{{ item.title }}</NuxtLink>
              </div>
              {{ item.description }}
            </div>
          </li>
        </ul>
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

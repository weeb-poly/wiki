<template>
  <main>
    <div class="breadcrumbs">
      <div class="container">
        <h2>Mascots</h2>
        <p>This is our list of mascots.</p>
      </div>
    </div>

    <section id="mascot-list" class="py-3">
      <div class="container">
        <div class="row my-1 row-cols-1 row-cols-md-3 g-4 justify-content-md-center">

          <div class="col" v-for="item in data" :key="item.path">
            <PreviewCard :data="item" class="mb-3"></PreviewCard>
          </div>

        </div>
      </div>
    </section>

  </main>
</template>


<script>
  export default {
    async asyncData({ $content, _params }) {
      const data = await $content('mascots', { deep: true })
        .without(['body'])
        .fetch();
      
      return { data };
    }
  }
</script>

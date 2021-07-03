<template>
  <section class="container">
    <div class="row my-1 row-cols-1 row-cols-md-3 g-4 justify-content-md-center">
      <div class="col" v-for="entry in data" :key="entry.name">
        <ContestCard :data="entry"></ContestCard>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      required: true
    }
  }
};
</script>

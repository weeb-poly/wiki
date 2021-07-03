<template>
  <section class="container">
    <div class="row my-1 row-cols-1 row-cols-md-3 g-4 justify-content-md-center">
      <div class="col" v-for="entry in data" :key="entry.name">
        <BaseCard :src="entry.img">
          <template v-slot:header>
            <span v-html="entry.rank"></span>
            <span v-if="entry.votes"> - {{ entry.votes }} Votes</span>
          </template>

          <template v-slot:body>
            <h5 class="card-title">{{ entry.name }}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{{ entry.creator }}</h6>
            <p class="card-text" v-html="entry.desc"></p>
          </template>

          <template v-if="entry.role" v-slot:footer>
            <small class="text-muted">{{ entry.role }}</small>
          </template>
        </BaseCard>
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

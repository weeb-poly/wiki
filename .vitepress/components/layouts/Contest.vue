<script setup lang="ts">
import { useData } from 'vitepress'
import CustomCard from '../CustomCard.vue'

const { frontmatter } = useData()
</script>

<template>
 <div class="ContestLayout">
    <div class="container">
      <div class="content">
        <main class="vp-doc">
          <Content />
          <div class="gallery">
            <CustomCard v-for="entry of frontmatter.contest" :image=entry.img>
              <template #header>
                <span v-html=entry.rank></span> - {{ entry.votes }} Votes
              </template>
              <template #body>
                <h5 class="card-title">{{ entry.name }}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{{ entry.creator }}</h6>
                <p class="card-text" v-html=entry.desc></p>
              </template>
              <template v-if=entry.role #footer>
                {{ entry.role }}
              </template>
            </CustomCard>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<style scoped>
.ContestLayout {
  padding: auto 1.5rem 3rem;
}

@media (min-width: 40rem) {
  .ContestLayout {
    padding: auto 3rem 4rem;
  }
}

@media (min-width: 60rem) {
  .ContestLayout {
    padding: auto 4rem 4rem;
  }
}

.gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 1rem;
  margin-top: 2rem;
}

.container {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 72rem;
  width: 100%;
  padding: 2rem 1.5rem 6rem;
}

@media (min-width: 60rem) {
  .container {
    flex-direction: row;
    padding: 3rem 2rem 0;
  }
}

@media (min-width: 48rem) {
  .container {
    padding: 3rem 2rem 8rem;
  }
}

.content {
  position: relative;
  margin: 0 auto;
  width: 100%;
}

@media (min-width: 60rem) {
  .content {
    padding: 0 2rem 8rem;
  }
}

@media (min-width: 80rem) {
  .content {
    order: 1;
    margin: 0;
    min-width: 40rem;
  }
}
</style>

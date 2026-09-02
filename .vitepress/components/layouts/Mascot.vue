<script setup lang="ts">
import { useData } from 'vitepress'
import InfoBoxCard from '../InfoBoxCard.vue'
import CustomCard from '../CustomCard.vue'

const { frontmatter } = useData()
</script>

<template>
 <div class="MascotLayout">
    <div class="container">
      <div class="content">
        <main class="mascot vp-doc">
          <h1 v-if="frontmatter.title" class="title" >{{ frontmatter.title }}</h1>
          <div class="info">
            <InfoBoxCard :image=frontmatter.cover :info=frontmatter.info />
          </div>
          <Content class="content-container" />
          <div class="gallery">
            <CustomCard v-for="media of frontmatter.media" :image=media.src>
              <template #header>
                {{ media.title }}
              </template>
            </CustomCard>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<style>
.vp-doc .m-content h2 {
  margin-top: 0;
  border-top: 0;
}
</style>

<style scoped>
.MascotLayout {
  /*margin-top: calc((var(--vp-nav-height) + var(--vp-layout-top-height, 0px)) * -1);*/
  padding: auto 1.5rem 3rem;
}

@media (min-width: 40rem) {
  .MascotLayout {
    padding: auto 3rem 4rem;
  }
}

@media (min-width: 60rem) {
  .MascotLayout {
    padding: auto 4rem 4rem;
  }
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

@media (min-width: 48rem) {
  .mascot {
    display: grid;
    grid-template-areas: "title" "info" "content" "gallery";
    grid-template-rows: auto auto 1fr auto;
  }
}

@media (min-width: 60rem) {
  .mascot {
    grid-template-areas: "title info" "content info" "gallery gallery";
    grid-template-columns: 3fr 1fr;
    grid-template-rows: auto 1fr auto;
  }
}

.mascot > .title {
  grid-area: title;
}

.mascot > .info {
  grid-area: info;
}

@media (min-width: 60rem) {
  .mascot > .info {
    overflow-y: auto;
  }
}

.mascot > .content-container {
  grid-area: content;
  min-width: 1px;
}

.mascot > .gallery {
  grid-area: gallery;
  min-width: 1px;
}

.gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 1rem;
  margin-top: 2rem;
}

@media (max-width: 48rem) {
  .gallery {
    grid-template-columns: repeat(1, 1fr);
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

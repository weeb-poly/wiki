---
layout: page
---
<script setup>
import { data as posts } from '../../.vitepress/loaders/mascots.data.js';
</script>

<div class="ContestLayout">
  <div class="container">
    <div class="content">
      <main class="vp-doc">
        <div class="gallery">
          <CustomCard v-for="post of posts" :image=post.frontmatter.cover>
            <template #header>
              <a :href=post.url>{{ post.frontmatter.title }}</a>
            </template>
          </CustomCard>
        </div>
      </main>
    </div>
  </div>
</div>

<style scoped>
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

<script setup lang="ts">
import { withBase } from "vitepress";

interface Props {
  image?: string
}

defineProps<Props>();
</script>

<template>
  <div class="card">
    <h2 v-if="$slots.header" class="card-header">
      <slot name="header"></slot>
    </h2>

    <img v-if="image" class="card-img" :src="withBase(image)">

    <div v-if="$slots.body" class="card-body">
      <slot name="body"></slot>
    </div>

    <div v-if="$slots.footer" class="card-footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<style scope>
.card {
  display: flex;
  flex-direction: column;
  height: 100%;
  border: 1px solid var(--vp-c-bg-soft);
  background-color: var(--vp-c-bg-soft);
  border-radius: .75rem;
}

h2.card-header {
  font-weight: 600;
  line-height: 1.5;
  padding: .5rem 1rem;
  margin-top: 0rem;
  margin-bottom: .5rem;
}

img.card-img {
  margin: 0;
  width: 100%;
  height: 100%;
  aspect-ratio: 1 / 1;
  object-fit: contain;
}

.card-body {
  flex: 1 1 auto;
  padding: 1rem 1rem;
}

.card-footer {
  padding: .5rem 1rem;
}
</style>

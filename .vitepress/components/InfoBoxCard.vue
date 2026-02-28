<!-- Based on Wikipedia Infobox and DocInfoCard:
https://github.com/ljw1412/anime-doc/blob/main/.vitepress/components/DocInfoCard.vue
-->
<script setup lang="ts">
import { withBase } from 'vitepress'

interface Props {
  title?: string
  image?: string
  info: { label: string, value: string; }[]
}

withDefaults(defineProps<Props>(), {
  info: [],
})
</script>

<template>
  <div class="infobox">
    <table>
      <tbody>
        <tr v-if="title">
          <th colspan="2">{{ title }}</th>
        </tr>
        <tr v-if="image">
          <td colspan="2" style="font-size: 0">
            <img :src="withBase(image)" />
          </td>
        </tr>
        <tr v-for="item in info" :key="item.label">
          <th scope="row" v-html="item.label"></th>
          <td v-html="item.value"></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scope>
.infobox {
  position: relative;
  width: 256px;
}

@media (max-width: 640px) {
  .infobox {
    width: 100%;
  }
}

@media (min-width: 640px) {
  .infobox {
    margin-left: 1em;
    float: right;
    clear: right;
  }
}

.infobox > table {
  margin: 0;
}
</style>

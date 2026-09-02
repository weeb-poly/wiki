---
aside: false
---
<script setup>
import { data as posts } from '../../.vitepress/loaders/archive.data.js';
</script>

# Archive

<ul>
  <li v-for="post of posts">
    <a :href="post.url">{{ post.frontmatter.title }}</a>
  </li>
</ul>

import { createContentLoader } from 'vitepress';

export default createContentLoader('archive/**/*.md', {
  transform(rawLines) {
    return rawLines.filter((page) => page.url.endsWith('.html'))
  }
})

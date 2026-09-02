import { createContentLoader } from 'vitepress';

export default createContentLoader('mascots/*.md', {
  transform(rawLines) {
    return rawLines.filter((page) => page.url.endsWith('.html'))
  }
})

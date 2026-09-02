import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "src",

  title: "Weeb Poly",
  description: "A VitePress Site",

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    outline: 1,

    nav: [
      { text: 'Mascots', link: '/mascots' },
      { text: 'Archive', link: '/archive' },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/weeb-poly' }
    ],

    footer: {
      message: 'in waifui confidimus',
      copyright: 'Copyright © Weeb Poly'
    }
  }
})

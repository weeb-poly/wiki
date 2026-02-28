// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'

import InfoBoxCard from '../components/InfoBoxCard.vue'
import CustomCard from '../components/CustomCard.vue'
import CardGrid from '../components/CardGrid.vue'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    app.component('InfoBoxCard', InfoBoxCard)
    app.component('CustomCard', CustomCard)
    app.component('CardGrid', CardGrid)
  }
} satisfies Theme

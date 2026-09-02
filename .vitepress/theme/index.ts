// https://vitepress.dev/guide/custom-theme
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'

import CustomCard from '../components/CustomCard.vue'

import Mascot from '../components/layouts/Mascot.vue'
import Contest from '../components/layouts/Contest.vue'


export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('CustomCard', CustomCard)
    app.component('mascot', Mascot)
    app.component('contest', Contest)

  }
} satisfies Theme

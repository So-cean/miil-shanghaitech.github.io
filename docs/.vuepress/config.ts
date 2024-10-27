import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

import { path } from '@vuepress/utils'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { backToTopPlugin } from '@vuepress/plugin-back-to-top'
import { mediumZoomPlugin } from '@vuepress/plugin-medium-zoom'
import { copyCodePlugin } from '@vuepress/plugin-copy-code'
import { commentPlugin } from '@vuepress/plugin-comment'

// import { hopeTheme } from 'vuepress-theme-hope'

import sidebar from './config/sidebar'
import navbar from './config/navbar'

export default defineUserConfig({
  lang: 'en-US',

  title: 'Melo',
  description: 'Melo community',

  theme: defaultTheme({
    logo: 'https://vuejs.press/images/hero.png',

    navbar: navbar,
    sidebar: sidebar,
  }),
  // theme: 'reco',
  plugins: [
    backToTopPlugin(),
    mediumZoomPlugin(),
    copyCodePlugin(),
    registerComponentsPlugin({ componentsDir: path.resolve(__dirname, './components') }),
    // registerComponentsPlugin({ componentsDir: path.resolve(__dirname, './types') }),
    commentPlugin({
      provider: 'Giscus',
      repo: 'So-cean/So-cean.github.io',
      repoId: 'R_kgDOMbYOPA',
      category: 'Announcements',
      categoryId: 'DIC_kwDOMbYOPM4CiKig',
      mapping: 'pathname',
      inputPosition: 'bottom',
      reactionsEnabled: false,
    }),
  ],
  
  // bundler: viteBundler({
  //   viteOptions: {
  //     css: {
  //       preprocessorOptions: {
  //         css: {
  //           // Import Font Awesome globally
  //           additionalData: `@import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css';`
  //         }
  //       }
  //     }
  //   }
  // }),
  bundler: viteBundler(),
  clientConfigFile: path.resolve(__dirname, './client.ts'),
})

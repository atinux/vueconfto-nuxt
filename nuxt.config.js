export default {
  head: {
    htmlAttrs: { lang: 'en' },
    title: 'Advanced Vue Component Design',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Vue Toronto example of SSR & Advanced components design.' }
    ],
    script: [
      { src: 'https://polyfill.io/v2/polyfill.min.js?features=IntersectionObserver', body: true }
    ]
  },
  css: [
    '@/assets/main.css'
  ],
  modules: [
    'nuxt-purgecss'
  ],
  purgeCSS: {
    mode: 'postcss'
  },
  build: {
    postcss: {
      plugins: {
        tailwindcss: './tailwind.js',
        autoprefixer: {}
      }
    }
  }
}

import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/fee-collection-documentation/',
  title: 'FeeCollection',
  description: 'Laravel package documentation for fee workflows',
  cleanUrls: true,
  themeConfig: {
    logo: '/logo.svg',
    nav: [
      { text: 'Guide', link: '/guide/getting-started' },
      { text: 'Usage', link: '/guide/usage' },
      { text: 'Reference', link: '/reference/database' },
      { text: 'GitHub', link: 'https://github.com/3mad0o/fee-collection' }
    ],
    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Introduction', link: '/' },
          { text: 'Getting Started', link: '/guide/getting-started' },
          { text: 'Configuration', link: '/guide/configuration' },
          { text: 'Core Concepts', link: '/guide/core-concepts' },
          { text: 'Usage Recipes', link: '/guide/usage' },
          { text: 'PDF Documents', link: '/guide/pdf-documents' },
          { text: 'Events', link: '/guide/events' }
        ]
      },
      {
        text: 'Reference',
        items: [
          { text: 'Database Fields', link: '/reference/database' },
          { text: 'API Quick Reference', link: '/reference/api' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/3mad0o/fee-collection' }
    ],
    search: {
      provider: 'local'
    },
    footer: {
      message: 'Released under the MIT License.'
    }
  }
})

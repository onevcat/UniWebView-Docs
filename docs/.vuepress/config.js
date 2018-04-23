module.exports = {
  title: 'UniWebView',
  description: 'UniWebView is a modern web view component for mobile Unity 3D games. Integrating web content to your games was never easier. It is a plugin built on native iOS/Android technology, which helps your users to enjoy web content and interact with your game through the web views.',
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }]
  ],
  serviceWorker: true,
  themeConfig: {
    repo: 'onevcat/UniWebView-Docs',
    editLinks: true,
    docsDir: 'docs',
    nav: [
      {
        text: 'Guide',
        link: '/guide/getting-started',
      },
      {
        text: 'API Reference',
        link: '/api/'
      },
      {
        text: 'Release Note',
        link: '/release/'
      },
    ],
    sidebar: [
      {
        title: 'Guide',
        collapsable: false,
        children: [
          'guide/getting-started',
          'guide/installation',
          'guide/using-prefab',
          'guide/working-with-code',
        ]
      },
      {
        title: 'UniWebView In Depth',
        collapsable: false,
        children: [
          'guide/position-and-size',
          'guide/transition',
          'guide/memory-management',
          'guide/messaging-system',
          'guide/using-javascript',
          'guide/loading-local-files',
          'guide/uploading',
          'guide/playing-videos',
          'guide/http-auth',
          'guide/debugging'
        ]
      },
      {
        title: 'Help Center',
        collapsable: false,
        children: [
          'help/faq',
          'help/ticket'
        ]
      },
      {
        title: 'API Reference',
        collapsable: false,
        children: [
        ]
      },
      {
        title: 'Other',
        collapsable: false,
        children: [
        ]
      },
    ]
  }
}
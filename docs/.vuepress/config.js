module.exports = {
  title: "UniWebView",
  description:
    "UniWebView is a modern web view component for mobile Unity 3D games. Integrating web content to your games was never easier. It is a plugin built on native iOS/Android technology, which helps your users to enjoy web content and interact with your game through the web views.",
  head: [["link", { rel: "icon", href: `/logo.png` }]],
  serviceWorker: true,
  themeConfig: {
    repo: "onevcat/UniWebView-Docs",
    editLinks: true,
    docsDir: "docs",
    nav: [
      {
        text: "Guide",
        link: "/guide/getting-started"
      },
      {
        text: "API Reference",
        link: "/api/"
      }
    ],
    sidebar: {
      "/guide/": [
        {
          title: "Guide",
          collapsable: false,
          children: [
            "getting-started",
            "installation",
            "using-prefab",
            "working-with-code"
          ]
        },
        {
          title: "UniWebView In Depth",
          collapsable: false,
          children: [
            "position-and-size",
            "transition",
            "memory-management",
            "messaging-system",
            "using-javascript",
            "loading-local-files",
            "uploading",
            "playing-videos",
            "http-auth",
            "debugging"
          ]
        },
        {
          title: "Help Center",
          collapsable: false,
          children: ["faq", "ticket"]
        },
        {
          title: "Other",
          collapsable: false,
          children: ["../api/", "../release-note/"]
        }
      ],
      "/api/": []
    }
  }
};
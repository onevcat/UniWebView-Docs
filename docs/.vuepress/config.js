module.exports = {
  title: "UniWebView",
  description: "UniWebView is a modern web view component for mobile Unity 3D games. Integrating web content to your games was never easier. It is a plugin built on native iOS/Android technology, which helps your users to enjoy web content and interact with your game through the web views.",
  head: [
    ["link", {
      rel: "icon",
      href: `/logo.png`
    }]
  ],
  serviceWorker: true,
  dest: "dist",
  themeConfig: {
    repo: "onevcat/UniWebView-Docs",
    editLinks: true,
    docsDir: "docs",
    lastUpdated: 'Last Updated',
    nav: [{
        text: "Guide",
        link: "/guide/"
      },
      {
        text: "API Reference",
        link: "/api/"
      },
      {
        text: "v3",
        link: "https://docs-v3.uniwebview.com"
      }
    ],
    sidebar: {
      "/guide/": [{
          title: "Getting Started",
          collapsable: false,
          children: ["", "installation", "using-prefab", "working-with-code"]
        },
        {
          title: "Common Tasks",
          collapsable: false,
          children: [
            "safe-browsing",
            "position-and-size",
            "transition",
            "memory-management",
            "messaging-system",
            "using-javascript",
            "loading-local-files",
            "uploading",
            "download-files",
            "playing-videos",
            "http-auth",
            "support-new-window",
            "built-in-toolbar",
            "transparency-through",
            "debugging"
          ]
        },
        {
          title: "Help Center",
          collapsable: false,
          children: ["faq", "ticket"]
        },
        {
          title: "Resources",
          collapsable: false,
          children: [
            ["../api/", "API Reference"],
            "version-highlight",
            ["migration-guide", "Migrating From 3.x"],
            ["tos", "Term of Service"],
            "privacy",
            "../release-note/"
          ]
        }
      ],
      "/api/": [{
        title: "API Reference",
        collapsable: false,
        children: [
          "",
          "uniwebviewsafebrowsing",
          "uniwebviewmessage",
          "uniwebviewnativelistener",
          "uniwebviewnativeresultpayload",
          "uniwebviewtransitionedge",
          "uniwebviewtoolbarposition",
          "uniwebviewcontentinsetadjustmentbehavior",
          "uniwebviewdownloadmatchingtype",
          "uniwebviewlogger",
          "uniwebviewhelper"
        ]
      }]
    }
  }
};
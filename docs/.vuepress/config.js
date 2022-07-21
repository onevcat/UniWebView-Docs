const { defaultTheme } = require('@vuepress/theme-default')
const { searchPlugin } = require('@vuepress/plugin-search')

module.exports = {
  title: "UniWebView",
  description: "UniWebView is a modern web view component for mobile Unity 3D games. Integrating web content to your games was never easier. It is a plugin built on native iOS/Android technology, which helps your users to enjoy web content and interact with your game through the web views.",
  head: [
    [
      "link", 
      {
        rel: "icon",
        type: "image/png",
        href: "/images/logo108.png"
      }
    ]
  ],
  serviceWorker: true,
  dest: "dist",
  theme: defaultTheme({
    logo: "/images/logo108.png",
    repo: "onevcat/UniWebView-Docs",
    docsBranch: 'master',
    editLink: true,
    docsDir: "docs",
    navbar: [{
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
          text: "Getting Started",
          collapsible: false,
          children: ["installation", "using-prefab", "working-with-code"]
        },
        {
          text: "Common Tasks",
          collapsible: false,
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
            "webrtc-support",
            "debugging"
          ]
        },
        {
          text: "Help Center",
          collapsible: false,
          children: ["faq", "ticket"]
        },
        {
          text: "Resources",
          collapsible: false,
          children: [
            {
              text: "API Reference",
              link: "../api/"
            },
            "version-highlight",
            {
              text: "Migrating From 3.x",
              link: "migration-guide"
            },
            {
              text: "Term of Service",
              link: "tos"
            },
            "privacy",
            "../release-note/"
          ]
        }
      ],
      "/api/": [{
        text: "API Reference",
        collapsible: false,
        children: [
          {
            text: "UniWebView",
            link: "./"
          },
          {
            text: "UniWebViewSafeBrowsing",
            link: "uniwebviewsafebrowsing"
          },
          {
            text: "UniWebViewMessage",
            link: "uniwebviewmessage"
          },
          {
            text: "UniWebViewNativeListener",
            link: "uniwebviewnativelistener"
          },
          {
            text: "UniWebViewNativeResultPayload",
            link: "uniwebviewnativeresultpayload"
          },
          {
            text: "UniWebViewTransitionEdge",
            link: "uniwebviewtransitionedge"
          },
          {
            text: "UniWebViewToolbarPosition",
            link: "uniwebviewtoolbarposition"
          },
          {
            text: "UniWebViewContentInsetAdjustmentBehavior",
            link: "uniwebviewcontentinsetadjustmentbehavior"
          },
          {
            text: "UniWebViewDownloadMatchingType",
            link: "uniwebviewdownloadmatchingtype"
          },
          {
            text: "UniWebViewLogger",
            link: "uniwebviewlogger"
          },
          {
            text: "UniWebViewHelper",
            link: "uniwebviewhelper"
          },
        ]
      }]
    }
  }),
  plugins: [
    searchPlugin({
      
    }),
  ],
};
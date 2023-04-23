const { defaultTheme } = require('@vuepress/theme-default')
const { searchPlugin } = require('@vuepress/plugin-search')

const json = require('./version.json');

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
    contributors: false,
    navbar: [
      {
        text: "Guide",
        link: "/guide/"
      },
      {
        text: "API Reference",
        link: "/api/"
      },
      {
        text: `v${json.version}`,
        children: [
          {
            text: 'Release Note',
            link: '../release-note/',
          },
          {
            text: 'v4.x',
            link: 'https://docs-v4.uniwebview.com',
          },
          {
            text: 'v3.x',
            link: 'https://docs-v3.uniwebview.com',
          },
        ],
      },
      {
        text: "Home",
        link: "https://uniwebview.com"
      }
    ],
    sidebar: {
      "/guide/": [{
          text: "Getting Started",
          collapsible: false,
          children: [
            "./",
            "installation"
          ]
        },
        {
          text: "Essentials",
          collapsible: false,
          children: [
            "overview",
            "using-prefab", 
            "working-with-code",
            "safe-browsing",
          ]
        },
        {
          text: "Topics",
          collapsible: false,
          children: [
            "position-and-size",
            "embedded-toolbar",
            "transition",
            "memory-management",
            "messaging-system",
            "using-javascript",
            "oauth2",
            "loading-local-files",
            "uploading",
            "download-files",
            "playing-videos",
            "http-auth",
            "support-new-window",
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
              text: "Migrating From 4.x",
              link: "migration-guide-v4-to-v5"
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
        children: [
          {
            text: "Essentials", 
            children: [
              {
                text: "UniWebView",
                link: "./"
              },
              {
                text: "UniWebViewSafeBrowsing",
                link: "uniwebviewsafebrowsing"
              },
            ]
          },
          {
            text: "OAuth 2", 
            children: [
              {
                text: "Built-in Providers",
                children: [
                  {
                    text: "Twitter",
                    link: "UniWebViewAuthenticationFlowTwitter"
                  },
                  {
                    text: "Facebook",
                    link: "UniWebViewAuthenticationFlowFacebook"
                  },
                  {
                    text: "Google",
                    link: "UniWebViewAuthenticationFlowGoogle"
                  },
                  {
                    text: "LINE",
                    link: "UniWebViewAuthenticationFlowLine"
                  },
                  {
                    text: "Discord",
                    link: "UniWebViewAuthenticationFlowDiscord"
                  },
                  {
                    text: "GitHub",
                    link: "UniWebViewAuthenticationFlowGitHub"
                  },
                ]
              },
              {
                text: "Customized Flow",
                children: [
                  {
                    text: "Customizable Flow",
                    link: "UniWebViewAuthenticationFlowCustomize"
                  },
                  {
                    text: "Standard Token",
                    link: "UniWebViewAuthenticationStandardToken"
                  }
                ]
              },
              {
                text: "Implementing Flow",
                children: [
                  {
                    text: "Flow Interface",
                    link: "IUniWebViewAuthenticationFlow"
                  },
                  {
                    text: "Common Flow",
                    link: "UniWebViewAuthenticationCommonFlow"
                  },
                  {
                    text: "Auth Session",
                    link: "UniWebViewAuthenticationSession"
                  },
                  {
                    text: "Auth Utils",
                    link: "UniWebViewAuthenticationUtils"
                  }
                ]
              }
            ]
          },
          {
            text: "Models", 
            children: [
              {
                text: "UniWebViewMessage",
                link: "uniwebviewmessage"
              },
              {
                text: "UniWebViewNativeResultPayload",
                link: "uniwebviewnativeresultpayload"
              },
              {
                text: "UniWebViewChannelMethodHandleRequest",
                link: "UniWebViewChannelMethodHandleRequest"
              }
            ]
          },
          {
            text: "Enums", 
            children: [
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
            ]
          },
          {
            text: "Misc", 
            children: [
              {
                text: "UniWebViewEmbeddedToolbar",
                link: "UniWebViewEmbeddedToolbar"
              },
              {
                text: "UniWebViewNativeListener",
                link: "uniwebviewnativelistener"
              },
              {
                text: "UniWebViewLogger",
                link: "uniwebviewlogger"
              },
              {
                text: "UniWebViewHelper",
                link: "uniwebviewhelper"
              }
            ]
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
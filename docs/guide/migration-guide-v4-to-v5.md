# Migration Guide

::: tip Upgrade Pricing
If you have purchased UniWebView 4 before, we offer an upgrading discount.

For users:

- Purchased from our Gumroad Store - [Submit a ticket](https://onevcat.atlassian.net/servicedesk/customer/portal/2/group/2/create/10011) with your purchasing Email and we will send a coupon back.
- Purchased from Unity Asset Store - Sign in to Asset Store and visit [our product page](https://assetstore.unity.com/packages/slug/229334)
  to find the Upgrade Price.
  :::

### Overview

Most part of UniWebView 5 is compatible with UniWebView 4. In most cases, migrating to the new version just takes several
minutes. You can do it with very little (if not no) efforts. You need to:

1. Remove UniWebView 4 from your project.
2. Install UniWebView 5.
3. Replace deprecated methods with new ones.
4. Check if new features can do better jobs.

Let's start!

::: warning
Before you start the migration, we strongly suggest that you should backup your project. If you are already using a
version control system (like git), you should be all fine!
:::

### Removing UniWebView 4

First we suggest remove UniWebView 4 from your project. Remove these files/folders (and the related ".meta" files if
any) from your project:

- "Assets/UniWebView" folder
- "Assets/Plugins/Android/UniWebView.aar"
- "Assets/Plugins/iOS/libUniWebView.a"
- "Assets/Plugins/UniWebView.bundle"

> It is assumed that you didn't move these files to another location. If you did that, remove the corresponding folders
> and files.

### Installing UniWebView 5

Now, you have completely removed UniWebView 4 from you project. Please make sure that you no longer have a "UniWebView" folder in "Assets". Then follow the [Installation Guide](./installation.md) to integrate UniWebView 5 into your project.

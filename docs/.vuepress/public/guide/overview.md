# Overview

> UniWebView offers two options for displaying web content: a customizable general-purpose web view and a simple, secure full-screen safe browsing mode.

In this guide, we will introduce the two main options when using this package to show some web content. You can choose one that fits your project better.

## Two Options

There are two options to show some a web page. You need to decide which one is better to fit for your project:

- [**General-Purpose Web View**](using-prefab.md)

  The powerful option. You can set web view's size and position, show or hide the navigation bar, load local files, call JavaScript on the web page from Unity and do much more other tasks.

- [**Safe Browsing Mode**](safe-browsing.md)

  The simple option. It provides an always-full-screen and browser-level experience to display web content. There is very little you can do except giving it a URL and let it show, but it is much safer and familiar to your users. You can think it as the Mobile Safari or Chrome in your app.

::: tip
Each option has a Unity prefab to simplify the basic use, as well as provides a full-set of APIs by code.
:::

If you are still not sure which is better for your case, check the sections below and there are more suggestions.

## When to Choose Web View

If you are going to implement any of below, you have to choose the [general purpose-web view option](using-prefab.md):

- Show the page in partial area of the screen, instead of always full screen.
- Hide the system UI, such as the navigation buttons (Go Back, Go Forward and Done, etc).
- Call some JavaScript on the page from Unity.
- Receive certain user actions on the web page in Unity.
- Listen to the page's events, such as page loaded or error happened.
- Set customize header fields or user agent.
- Set or read cookies on the page from Unity.
- Load any local files from the app bundle.

It gives you a much more powerful web view component. But at the same time, you take the responsibility to use it correctly.

## When to Choose Safe Browsing Mode

If one of the following conditions is met, then the [safe browsing mode option](safe-browsing.md) could be the best choice for you:

- Simply show a remote web page in full screen and browse a specified URL, just like in a browser.
- Use some secure-strict features, like **Apple Pay**, **Reader Mode**, or **Password Autofill**.

It is simple and easy to use, as an out-of-the-box solution to show the web page. But you do not have much more other control except for the navigation bar color.

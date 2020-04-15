---
path: testing-push-notifications-on-ios-simulator
date: 2020-04-15T08:22:31.703Z
title: Testing Push Notifications with iOS simulator and React Native
description: >-
  For the long time we could not test Push Notifications on iOS simulator. But
  from Xcode version 11.4 it is possible now! In this article we will make the
  test notification with custom payload to pop up on a screen of iOS simulator.
---
## How does Xcode allow us now to trigger notifications?

I'm going to assume that you already have configured notifications in you React Native app. You just want to test how your app behaves when user opens your app by pressing on notifications. In this article we will make the test notification with custom payload to pop up on a screen of iOS simulator.

![](/assets/screenshot-2020-03-20-at-6.01.45-pm.png "The notifications screen")

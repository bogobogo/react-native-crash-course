# E2E Tests (with Detox)

## What we're going to do

In this step we are going to:
* Install [Detox](https://github.com/wix/detox) and get familiar with part of its API.
* Write E2E tests for the main flows in our app.
* Refactor our tests to use mocking data.

## About Detox

The most complicated thing about automated testing of mobile apps is the tip of the testing pyramid - E2E. The core problem lies within its flakiness, which usually makes tests non-deterministic. We believe that the only way to tackle flakiness head-on is by moving from **Black Box** to **Gray Box** testing. That's where Detox comes into play.

[Detox](https://github.com/wix/detox) is Wix's in-house open source gray box end-to-end testing and automation library for mobile apps. Detox tests your mobile app while running on a real device / simulator, interacting with it just like a real user would.


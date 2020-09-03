## TODO - not sure about this

## 4. Separate config files

First things first: grab some coffee :coffee:. <br />Next: for your app to use a *mock* server, you’ll need to tell it when it should not try to connect to the *actual* server. This is accomplished by creating a new flavor of our Javascript bundle that uses different endpoints.

<img src="https://github.com/wix-playground/wix-mobile-crash-course/blob/master/assets/detoxMock.png" />

In order to do it:

Follow the instructions [here](https://github.com/wix/Detox/blob/master/docs/Guide.Mocking.md#configuration)

Here is how your `metro.config.js` file should look like:

```js
const defaultSourceExts = require('metro-config/src/defaults/defaults').sourceExts

module.exports = {
  resolver: {
    sourceExts: process.env.RN_SRC_EXT ? process.env.RN_SRC_EXT.split(',').concat(defaultSourceExts) : defaultSourceExts
  },
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
};
```

In `package.json` add an additional script:

```js
"start-e2e": "RN_SRC_EXT=e2e.js react-native start"
```

When you run `npm run start-e2e` it will override default files with the ones that have the E2E extension.

To check that it works you can duplicate one of your files and change its behavior. For example, duplicate `posts.action.js` (don't forget to name it `posts.action.e2e.js`, you can delete it after you're done playing with it) and in the `deletePost` function add an `alert(‘e2e’)`. Run the app with `npm run start-e2e` and make sure that when deleting a post the alert is triggered and when running the app with `npm run start` the alert does not get triggered.

## 5. Create a separate API file

Currently, all of our Server calls are located in our `posts.actions.js` file. The best practice is to separate all of those calls into a separated file - it will make our code look much cleaner and allow us to reuse it later.

So create an `api.js` file with all of your API calls.

This is how our [`posts.actions.js`](https://github.com/wix-playground/wix-mobile-crash-course/blob/master/src/posts/posts.actions.js) and [`api.js`](https://github.com/wix-playground/wix-mobile-crash-course/blob/master/src/posts/api.js) files should look like.

## 6. Override the API file

Create an `api.e2e.js` file so that whenever you run `npm run start-e2e` it will override the original `api.js` file. In your `api.e2e.js` file, mock all of your functions to use a simple array with mock posts, instead of actually fetching/posting to the server.

In addition, add a `reset` function which will be used after every test to reset the data to its initial state. Your `api.e2e.js` file should look like [this](https://github.com/wix-playground/wix-mobile-crash-course/blob/master/src/posts/api.e2e.js).

## 7. Refactor your tests
Use the `reset` function that you just created after every test. Refactor the post id’s which you are using in the test to fit your new mock server's logic. Your tests should look like [this](https://github.com/wix-playground/wix-mobile-crash-course/blob/master/e2e/firstTest.spec.js).

Now when we run our E2E tests they will be rock solid and won't stumble upon on any potential server flaws.

All the steps from this section can be viewed in this [commit](https://github.com/wix-playground/wix-mobile-crash-course/commit/73fcb3ea893f32f765ddb66d0336717db05afb55).
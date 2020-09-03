## TODO - should add tests to check these assignments

## 3. Write the following E2E tests
* It should display a post
* It should add a post
* It should delete a post

A couple of suggestions while writing your tests:
- A good test should be readable by everyone, not just by developers. Try to create a driver that will make your test look like a simple user flow.
- Try splitting your driver into [Given-When-Then](https://solidsoft.wordpress.com/2017/05/16/importance-of-given-when-then-in-unit-tests-and-tdd/) sections.
- If you are working on a Mac, you can use its “Accessibility inspector” to [inspect your app `testID`s](https://www.youtube.com/watch?v=EkG5_kWkqwE&t=250s).In the top left corner choose the simulator as the source > click on the target icon > point to any component to view its `testID`.
- Make sure your hardware keyboard is disconnected from your simulator (cmd+shift+k) - this often fails tests because the simulator doesn't open the simulator keyboard.

If you need any hints, you can check the final E2E test file [here](https://github.com/wix-playground/wix-mobile-crash-course/blob/master/e2e/firstTest.spec.js).

<img src="https://github.com/wix-playground/wix-mobile-crash-course/blob/master/assets/e2e.gif" />
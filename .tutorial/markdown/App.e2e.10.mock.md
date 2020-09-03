## TODO - should codio to fix a test with bad dependancies add tests to check these assignments

# Isolating Tests with Mocking

An important rule to guide any test scenario is predictability. Whenever you write tests, you need to make sure that both inputs and outputs are consistent.

We can run two types of tests with Detox:

* **Production e2e**

Every part of the system is tested (including the server). It’s the closest thing to a real user with a device in their hand. It has many uncontrollable variables where each can affect the test outcome. For example, if the network is down, the test will fail. If server has bugs, the test will fail. If your app has AB tests, you can get a different one on each run and the test will fail... We can’t trust those tests to be rock-solid.

So why do we do production e2e tests? The main benefit is that we can reduce the amount of manual testing. Consider running a test suite of 100 tests, where 10 fail. We can then check manually just these 10 scenarios and investigate the issues (e.g., it can be a real issue or a server problem).

## **Mock e2e** (or UI Automation)

As opposed to production E2E, in a mock E2E test we are setting controlled and consistent inputs and environment by replacing all endpoints with mock servers and data. We are controlling the servers, the requests, and thus all the responses the test will give us. For example, we could have detox run tests using the mock server on dev, while in production use a real server.

A mock E2E test is predictable and stable and will just keep working because the environment and the server will stay the same on each run. On the other hand, it will not catch any bugs or integration issues that might arise when deploying with a real server.

Looking at the Pros and Cons:

|     | Pros | Cons |
| ---------------- | ---------------- | ---------------- |
| Production E2E     | Real user experience <br> Easy to setup <br> Easy to write <br> High confidence    | Flaky <br> Slow <br> Hard to maintain    |
| Mock E2E     | Closer to code <br> Stable <br> Easy to maintain    | Hard to setup <br> Hard to write    |

We believe that mock E2E tests are the best way to actually run integration tests on react-native.

Consider tests we just wrote in the previous section. There is potentially a huge problem there - as some tests depend on successful outcomes of other ones. To explain further, in one test we are adding a post and in the next test we are depending on the fact that this post already exists. Also, changing the order of these tests can result in the “delete a post” test to fail. Tests CANNOT depend on one another, they should always run with the same input and the same output. So let's fix that.
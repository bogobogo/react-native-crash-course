Overall code written in the next 3 steps:

const postId = 1;
await element(by.id(`postItem-${id}`)).tap()
await expect(element(by.id('post-title'))).toHaveText('Post 1');
await expect(element(by.id('post-text'))).toHaveText('post 1 text');


Codio script - 

Now that we know how to match our component, we will use actions to simulate an interaction with it.
Let's jump back to our previous test in the e2e test page, and add a simple tap action.

await element(by.id(`postItem-${id}`)).tap()

Easy right?

Add comment: Notice that the action is async because...

In the next step you will run the e2e test and see the action.
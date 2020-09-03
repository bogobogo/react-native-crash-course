Overall code written in the next 3 steps:

const postId = 1;
await element(by.id(`postItem-${id}`)).tap()
await expect(element(by.id('post-title'))).toHaveText('Post 1');
await expect(element(by.id('post-text'))).toHaveText('post 1 text');

Codio script - 

Last step we've tapped on our element, that has an "onClick" action to navigate to a different screen.
We are expecting the "tap" action to result in that navigation, so let us express our expectations in code.

I've already went ahead and wrote the TestID props for both components that we will test.

The first one is the post title, and we expect the text 'Post1',
await expect(element(by.id('post-title'))).toHaveText('Post 1');

The second is the post text, and we expect the text'post 1 text',


In the next step you will run the e2e test and see the full test.
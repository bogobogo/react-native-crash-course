Overall code written in the next 3 steps:
const postId = 1;
await element(by.id(`postItem-${id}`)).tap()
await expect(element(by.id('post-title'))).toHaveText('Post 1');
await expect(element(by.id('post-text'))).toHaveText('post 1 text');


Codio script - 

Detox uses matchers to match UI elements in your app.
In later steps we will use the matching property of Detox, and use actions on matched components to simulate interaction with elements and expectations to verify element states.
Let's start by writing some basic matches, using the specified accessibility identifier, the testId prop provided to us by react.

First lets add the testID prop to the ListItem component found in the PostList page:

testID={`postItem-${item.id}`}

Now jump to our first e2e test, lets match for the postId 1: 

const postId = 1;
await element(by.id(`postItem-${id}`));

In the next step you will run the e2e test and see that it matches.






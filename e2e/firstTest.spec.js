const driver = require('./firstTest.driver');
const MockServerApi = require('../src/posts/api.e2e');

describe('Example', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  afterEach(() => {
    MockServerApi.reset();
  });

  it('should display the first post in the list', async () => {
    const postId = 1;
    await element(by.id(`postItem-${item.id}`))
    
  });

  it('should display the posts list on app launch', async () => {
    // your code goes here
    
  });

  it('should add a post', async () => {
    // your code goes here

  });

  it('should delete a post', async () => {
    // your code goes here

  });

  it('should update a post', async () => {
    // your code goes here

  });



});

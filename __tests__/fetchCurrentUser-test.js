// __tests__/fetchCurrentUser-test.js
jest.dontMock('../fetchCurrentUser.js');

describe('fetchCurrentUser', function() {
  it('calls into $.ajax with the correct params', function() {
    var $ = require('jquery');
    var fetchCurrentUser = require('../fetchCurrentUser');

    // Call into the function we want to test
    function dummyCallback() {}
    fetchCurrentUser(dummyCallback);

    // Now make sure that $.ajax was properly called during the previous
    // 2 lines
    expect($.ajax).toBeCalledWith({
      type: 'GET',
      url: 'http://example.com/currentUser',
      success: jasmine.any(Function)
    });
  });
});
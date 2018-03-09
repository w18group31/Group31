// requires 'npm install mocha'

var assert = require('assert'); // required for assertions

// unit testing format
// describe('name of test group', function() {
//   describe('name of test', function() {
//     it('name of human-readable expected outcome', function(){
//       assert.equal('aValue', 'anotherValue');
//     });
//   });
// });

// test book is selected
describe('select book tests', function() {
  var DB = require("../fauxDB.js");
  var testBookId = 187;

  describe('selectBook()', function() {
    it('should open a book file and be able to parse book data', function() {
      DB.select.book(testBookId, function(dbResult) {
        assert.equal(dbResult.title, 'Test Book One Eight Four');
      });
    });
  });
});


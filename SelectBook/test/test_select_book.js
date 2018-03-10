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

  var testBookId = 187;

  describe('selectBook()', function() {
    it('should open a book file and be able to parse book data', function() {
      var book = selectBook(testBookId);
      assert.equal(book.title, 'Test Book For Page Turn');
    });
  });
});


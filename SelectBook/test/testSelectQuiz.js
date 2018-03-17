
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

// test quiz is selected
describe('select quiz tests', function() {
  var DB = require("../fauxDB.js");
  var testQuizId = 929;

  describe('selectQuiz()', function() {
    it('should get a quiz and return quiz data', function() {
      DB.select.quiz(testQuizId, function(dbResult) {
        assert.equal(dbResult.questions[0].question, 'What animal stepped on a frog?');
      });
    });
  });
});


var expect = require('chai').expect;

function toEnglish(word){
  if ( word === "zero" ){
  return 0;
  }
  if( word === "one" ){
  return 1;
}

expect(toEnglish("zero")).to.equal(0);
expect(toEnglish("one")).to.equal(1);
expect(toEnglish("two")).to.equal(2);
expect(toEnglish("three")).to.equal(3);
expect(toEnglish("four")).to.equal(4);
expect(toEnglish("five")).to.equal(5);
expect(toEnglish("six")).to.equal(6);
expect(toEnglish("seven")).to.equal(7);
expect(toEnglish("eight")).to.equal(8);
expect(toEnglish("nine")).to.equal(9);
//If, else, switch...
//@mention pairs after paired programming in commit
//commit to branch 04--todo-cli-2 of TIY-repo

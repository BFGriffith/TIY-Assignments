var expect = require('chai').expect;

/*When you write a check, to validate the amount
you have to write the English words for the amount
on a separate line. For example, a check for $123.45
has a line with:
one hundred twenty three and 45/100s dollars

Given a function `toEnglish` that accepts a
JavaScript `Number` and returns a `String` formatted
for use on a check, as above.*/

function toWord(number){
  if ( number === 0 ){
    return "zero";
  }
  if ( number === 1 ){
    return "one";
  }
  if ( number === 2 ){
    return "two";
  }
  if ( number === 3 ){
    return "three";
  }
  if ( number === 4 ){
    return "four";
  }
  if ( number === 5 ){
    return "five";
  }
  if ( number === 6 ){
    return "six";
  }
  if ( number === 7 ){
    return "seven";
  }
  if ( number === 8 ){
    return "eight";
  }
  if ( number === 9 ){
    return "nine";
  }
  if ( number === 10 ){
    return "ten";
  }
  if ( number === 11 ){
    return "eleven";
  }
  if ( number === 12 ){
    return "twelve";
  }
  if ( number === 13 ){
    return "thirteen";
  }
  if ( number === 14 ){
    return "fourteen";
  }
  if ( number === 15 ){
    return "fifteen";
  }
  if ( number === 16 ){
    return "sixteen";
  }
  if ( number === 17 ){
    return "seventeen";
  }
  if ( number === 18 ){
    return "eighteen";
  }
  if ( number === 19 ){
    return "nineteen";
  }
  if ( number === 20 ){
    return "twenty";
  }
}

expect(toWord).to.exist;
expect(toWord(0)).to.equal("zero");
expect(toWord(1)).to.equal("one");
expect(toWord(2)).to.equal("two");
expect(toWord(3)).to.equal("three");
expect(toWord(4)).to.equal("four");
expect(toWord(5)).to.equal("five");
expect(toWord(6)).to.equal("six");
expect(toWord(7)).to.equal("seven");
expect(toWord(8)).to.equal("eight");
expect(toWord(9)).to.equal("nine");
expect(toWord(10)).to.equal("ten");
expect(toWord(11)).to.equal("eleven");
expect(toWord(12)).to.equal("twelve");
expect(toWord(13)).to.equal("thirteen");
expect(toWord(14)).to.equal("fourteen");
expect(toWord(15)).to.equal("fifteen");
expect(toWord(16)).to.equal("sixteen");
expect(toWord(17)).to.equal("seventeen");
expect(toWord(18)).to.equal("eighteen");
expect(toWord(19)).to.equal("nineteen");
expect(toWord(20)).to.equal("twenty");


/*
function toEnglish(toTens, toWord){
  var a = toWord(a);
  var b = toWord(y);
  return a + b;
}
*/

//@mention pairs after paired programming in commit
//commit to branch 04--todo-cli-2 of TIY-repo
//ronori style kata:
//timer = 5 minutes per pair on one computer
//next five minutes one is replaced from audience
//commit with names after both leave
//pilot/copilot: pilot touches keyboard
//pilot is first person in the air

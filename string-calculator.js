var expect = require('chai').expect;

function toEnglish(word){
  if ( word === "zero" ){
    return 0;
  }
  if( word === "one" ){
    return 1;
  }
  if( word === "two" ){
    return 2;
  }
  if( word === "three" ){
    return 3;
  }
  if( word === "four" ){
    return 4;
  }
  if( word === "five" ){
    return 5;
  }
  if( word === "six" ){
    return 6;
  }
  if( word === "seven" ){
    return 7;
  }
  if( word === "eight" ){
    return 8;
  }
  if( word === "nine" ){
    return 9;
  }
}

function plus(x, y){
  var a = toEnglish(x);
  var b = toEnglish(y);
  return a + b;
}

function minus(x, y){
  var a = toEnglish(x);
  var b = toEnglish(y);
  return a - b;
}

plus("zero", "zero");

expect(toEnglish).to.exist;
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

expect(plus).to.exist;
expect(plus("zero", "zero")).to.equal(0);
expect(plus("zero", "one")).to.equal(1);
expect(plus("zero", "two")).to.equal(2);
expect(plus("zero", "three")).to.equal(3);

expect(minus).to.exist;
expect(minus("zero", "zero")).to.equal(0);
expect(minus("zero", "one")).to.equal(-1);
expect(plus("zero", "two")).to.equal(-2);

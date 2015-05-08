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

function subtract(c, d){
  var c = toEnglish(c);
  var d = toEnglish(d);
  return c - d;
}

function multiply(e, f){
  var e = toEnglish(e);
  var f = toEnglish(f);
  return e * f;
}

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
expect(plus("zero", "four")).to.equal(4);
expect(plus("zero", "five")).to.equal(5);
expect(plus("zero", "six")).to.equal(6);
expect(plus("zero", "seven")).to.equal(7);
expect(plus("zero", "eight")).to.equal(8);
expect(plus("zero", "nine")).to.equal(9);

expect(plus("one", "zero")).to.equal(1);
expect(plus("one", "one")).to.equal(2);
expect(plus("one", "two")).to.equal(3);
expect(plus("one", "three")).to.equal(4);
expect(plus("one", "four")).to.equal(5);
expect(plus("one", "five")).to.equal(6);
expect(plus("one", "six")).to.equal(7);
expect(plus("one", "seven")).to.equal(8);
expect(plus("one", "eight")).to.equal(9);
expect(plus("one", "nine")).to.equal(10);

expect(plus("two", "zero")).to.equal(2);
expect(plus("two", "one")).to.equal(3);
expect(plus("two", "two")).to.equal(4);


expect(subtract).to.exist;
expect(subtract("zero", "zero")).to.equal(0);
expect(subtract("zero", "one")).to.equal(-1);
expect(subtract("zero", "two")).to.equal(-2);

expect(multiply).to.exist;
expect(multiply("zero", "zero")).to.equal(0);
expect(multiply("zero", "one")).to.equal(0);

expect(multiply("one", "one")).to.equal(1);
expect(multiply("one", "two")).to.equal(2);

expect(multiply("two", "one")).to.equal(2);
expect(multiply("two", "two")).to.equal(4);
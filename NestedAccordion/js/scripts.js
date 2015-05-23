// Just a tracer...
// alert("It's alive!");
// debugger;
alert('hello');
document.head.parentNode.className = "js"; // It's alive!

var elements = document.querySelectorAll('h3');
var elements = document.querySelectorAll('.cbp-nttrigger');


_.forEach(document.querySelectorAll('.cbp-nttrigger'), function(element) {
  element.addEventListener('click', function() {

  });
});

jQuery('.cbp-nttrigger').on('click', function(event) {
  jQuery(event.target).parent().toggleClass('cbp-ntopen');
});

/*
for (var index = 0; index < elements.length; index++) {
  var element = elements[index]
  element[index].addEventListener('click', function() {
    console.log(element, index, element[index])
    element[index].parentElement.classList.toggle('cbp-ntopen');
  });
}
console.log(elements);
_.forEach(elements, function(element, index, elements) {
  element.addEventListener('click', function() {
    element.parentElement.classList.toggle('cbp-ntopen');
  });
});
_.forEach(nestedElements, function(element, index, nestedElements) {
  element.addEventListener('click', function() {
    element.parentElement.classList.toggle('cbp-ntopen');
  });
});
*/

// Just a tracer...
// alert("It's alive!");
// debugger;
alert('hello');
document.head.parentNode.className = "js"; // It's alive!

var elements = document.querySelectorAll('h3');
var elements = document.querySelectorAll('.cbp-nttrigger');


_.forEach(document.querySelectorAll('.cbp-nttrigger'), function(element){
  element.addEventListener('click', function(){

  });
});

jQuery('.cbp-nttrigger').on('click', function(event){
  jQuery(event.target).parent().toggleClass('cbp-ntopen');
});

/*
document.querySelectorAll('.cbp-nttrigger').function(){

}
// elements[0].addEventListener('click', function(){
//     elements[0].parentElement.classList.toggle('cbp-ntopen');
// });
//
// elements[1].addEventListener('click', function(){
//     elements[1].parentElement.classList.toggle('cbp-ntopen');
// });

// for ( var index = 0; index < elements.length; index++ ){
//     var element = elements[index]
//     element.addEventListener('click', function(){
//         console.log(elements, index, element);
//         element.parentElement.classList.toggle('cbp-ntopen');
//     });
// }
// console.log(index);

_.forEach(elements, function(element, index, elements){
  element.addEventListener('click', function(){
  //  console.log(elements, index, elements);
     element.parentElement.classList.toggle('cbp-ntopen');
   });
});

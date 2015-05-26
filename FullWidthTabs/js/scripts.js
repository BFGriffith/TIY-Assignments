/*
(function(window) {
  var BASE_URL = 'http:lorempixel.com/400/200/abstract?';

  function rando(limit) {
    return Math.floor(Math.random() * limit);
  }

  function randoImage() {
    return BASE_URL + '?' + rando(1000);
  }

  $('img').attr('src', randoImage);

  var $tabs = $('a[class^="tab"]');

  $tabs.on('click', function() { //stackoverflow
    $('section').removeClass('content-current');
    $($(this).attr('href')).addClass('content-current');
    $('a').removeClass('tab-current');
    $(this).addClass('tab-current');
  });

})(window);
*/

(function(window){
  $('li').click(function(){
    $('li').removeClass('tab-current');
    $(this).addClass('tab-current');
    $('section').removeClass('content-current');
    $($(this).children().attr('href')).addClass('content-current');
  });
})(window);

/*Trying various jQuery methods to get this to work without much success.*/

/*
$(function(window) {
  $('a.icon-shop').click(function() {
    $('section').removeClass('content-current');
    $('#section-1').addClass('content-current');
    $('a').removeClass('tab-current');
    $('a.icon-shop').addClass('tab-current');
  }
  );
  $('a.icon-cup').click(function() {
    $('section').removeClass('content-current');
    $('#section-2').addClass('content-current');
    $('a').removeClass('tab-current');
    $('a.icon-cup').addClass('tab-current');
  }
  ) $('a.icon-food').click(function() {
    $('section').removeClass('content-current');
    $('#section-3').addClass('content-current');
    $('a').removeClass('tab-current');
    $('a.icon-food').addClass('tab-current');
  }
  ) $('a.icon-lab').click(function() {
    $('section').removeClass('content-current');
    $('#section-4').addClass('content-current');
    $('a').removeClass('tab-current');
    $('a.icon-lab').addClass('tab-current');
  }
  ) $('a.icon-truck').click(function() {
    $('section').removeClass('content-current');
    $('#section-5').addClass('content-current');
    $('a').removeClass('tab-current');
    $('a.icon-truck').addClass('tab-current');
  }
  )
}
)(window);
*/

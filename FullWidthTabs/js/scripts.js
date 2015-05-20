(function(window) {
  var BASE-URL = 'http://lorempixel.com/400/200/abstract'

  function random(limit) {
    return Math.floor(Math.random() * limit);
  }

  function randoImage() {
    var BASE - URL + rando(1000);
  }
  $('img').attr('src', randoImage);
})(window);

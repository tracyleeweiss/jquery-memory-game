Array.prototype.shuffle = function () {
    for (var i = this.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = this[i];
        this[i] = this[j];
        this[j] = tmp;
    }

    return this;
}

$(document).ready(function(){
  var timer = 0;
  var timeCount = setInterval(function(){
    $('#timer').html(timer++);
  }, 1000);

  var letterTiles = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
  letterTiles.shuffle()
  var tiles = '';
  // var numOfTiles = 10;

  // $('#small_btn').on('click', function(){
  for(var i = 0; i < letterTiles.length; i++){
    
    var letter = letterTiles[i] 
    tiles += '<li class="tile" data-tile="'+letter+'">'+letter+'</li>';
 }
    $('#game').html(tiles);

    $('.tile').on('click', function(){
      // If another tile is open
      var thisTile = $(this)
      if($('.open').length > 0){
        var otherTile = $('.open').eq(0);
        if(otherTile.data('tile') === thisTile.data('tile')) { // If the other tile matches me -> show it as solved
          otherTile.removeClass('open')
          otherTile.addClass('solved')
          thisTile.addClass('solved');
          if($('.solved').length === 10){
            window.clearInterval(timeCount);
            alert('You Won')
          }
        } else {
          thisTile.addClass('open');
          // after some time, remove the open classes
          setTimeout(function(){
            otherTile.removeClass('open');
            thisTile.removeClass('open');
          }, 1000)

        }
      } else {
        thisTile.addClass('open');
      }
  });
}); 
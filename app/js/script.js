
var element = $('#mba');
var flashInterval;

$(window).scroll(function(){
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = element.offset().top;
    var elemBottom = elemTop + element.height();
    /*
    console.log('docViewTop: ' + docViewTop + '- elemTop: ' + elemTop);
    console.log('docViewBottom: ' + docViewBottom + '-elemBottom: ' + elemBottom)
    */
    if ((elemBottom <= docViewBottom + 2) && (elemTop >= docViewTop - 2)) {
        console.log('there');
        flashInterval = setInterval(flash, 1000);
    }

    else {
        console.log('a');
        clearInterval(flashInterval);
        removeReverseBgColor;
        
    }
});

function flash () {
  $('#mba').toggleClass('reverse-bg-color');
  $('.btn').toggleClass('reverse-bg-color');
}

function removeReverseBgColor () {
  if($('#mba').hasClass('reverse-bg-color')) {
          $('#mba').removeClass('reverse-bg-color');
        }
  if($('.btn').removeClass('reverse-bg-color')) {
      $('.btn').removeClass('reverse-bg-color');
    }
}




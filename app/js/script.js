
var scrolling = false;

$(function() {
    var targetOffset = $('#mba').offset().top - window.innerHeight;
    var currentOffset = $(document).scrollTop();
    
    if (!scrolling) {
      $(window).scroll(function(){
        
        console.log( targetOffset + ' - ' + currentOffset );   //just for your debugging
        (function(){
        if ( currentOffset > targetOffset) {
            setInterval(flash, 1000);

          }   
        })();
      });
      if (currentOffset < targetOffset) {
        scrolling = false;
        console.log('offset change detected');
      }
    }

});

function flash () {
  $('#mba').toggleClass('reverse-bg-color');
  $('.btn').toggleClass('reverse-bg-color');
  console.log(scrolling);
}





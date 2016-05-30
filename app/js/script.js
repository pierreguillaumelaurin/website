/*
$(function() {
    var targetOffset = $('#mba').offset().top - window.innerHeight;
    var scrolling = false;
    $(window).scroll(function(){
        
        if (!scrolling)
        {
        var currentOffset = $(document).scrollTop();
        console.log( targetOffset + ' - ' + currentOffset );   //just for your debugging
        (function(){
        while ( currentOffset > targetOffset - 50 && currentOffset < targetOffset + 50){
            setInterval(flash(), 2000);
          }
        })();
        scrolling=true;
    };
  });
});

function flash () {
  $('#mba').toggleClass('reverse-bg-color');
  console.log('toggliing on!');
  scrolling = false;
}
*/

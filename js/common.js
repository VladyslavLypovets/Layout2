$(document).ready(function(){
  $('.go-top').click(function() {
  			$('body, html').animate({scrollTop:0},1000);
  });
  $('.go_to').click( function(){
	var scroll_el = $(this).attr('href');
        if ($(scroll_el).length != 0) {
	    $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500);
        }
	    return false;
    });
    var cheker=0;
    $('.menu-toggle').click(function(){
      if(cheker==0){
        $('.adaptive_navbar').show('slow');
        cheker=1;
      } else{
        $('.adaptive_navbar').hide('slow');
        cheker=0;
      }
  });

});

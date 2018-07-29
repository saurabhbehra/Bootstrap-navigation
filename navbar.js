$(document).ready(function(){
	$("nav div").click(function() {
            $("ul").slideToggle();
            $("ul ul").css("display", "none");
      });

	  $("#drop").click(function(){
		  $("#dropdown").slideToggle();
	  });

      $(window).resize(function() {
            if($(window).width() > 768) {
                  $("ul").removeAttr('style');
            }
      });
	  $("button").hover(function(){
		$(".right2").toggleClass("green");
		
	  });
	  $("input").focus(function(){
		$(this).addClass("blue");
	  });
		$("input").focusout(function(){
		$(this).removeClass("blue");
	  });
})

function myFunction() {
    var x = document.getElementById("catopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

$(document).on('click', 'a', function(event){
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
});

$(document).ready(function(){

	$(window).scroll(function(){
		if($(this).scrollTop()>100){
			$(".scrollup").fadeIn();
		} else{
			$(".scrollup").fadeOut();
		}
	});
	$(".scrollup").click(function(){
		$("html,body").animate({scrollTop:0}, 600);
		return false;
	});

});

/*$(document).ready(function(){



  $('a[href*=#]').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
    && location.hostname == this.hostname) {
      var $target = $(this.hash);
      $target = $target.length && $target
      || $('[name=' + this.hash.slice(1) +']');
      if ($target.length) {
        var targetOffset = $target.offset().top;
        $('html,body')
        .animate({scrollTop: targetOffset}, 1000);
       return false;
      }
    }
  });
});*/

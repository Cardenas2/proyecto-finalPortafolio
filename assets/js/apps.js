$(document).ready(function(){
	// init Masonry
	var $grid = $('.grid').masonry({
	  // options...
	});
	// layout Masonry after each image loads
	$grid.imagesLoaded().progress( function() {
		$grid.masonry('layout');
	});


	$(window).scroll(function(){
 // Aquí va el código que se ejecuta mientras haces el scroll y debe estar fuera del $(window).ready()
 if ($(window).scrollTop() < altura){

 	$('.btnInicio').addClass('fixed-top');
 }
 // Esta variable almacenaría la distancia con el top, para poder comparar y así ejecutar algún script en cierto minuto
 else{
 	$('.btnInicio').removeClass('fixed-top');
 }
});

});


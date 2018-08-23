$(document).ready(function(){
  var total = $('.textoEscrito__magico span').length;
  var current = 0;
  
  
  function show(){
    console.log('show', current);
    $('.current').removeClass('current');
    $($('.textoEscrito__magico span').get(current)).addClass('current');
    current++;
    if(current >= total){
      current = 0;
      console.log('reset')
    }
    setTimeout(function(){
      show();
    }, 3000);
  }
  
  show();
  
  

  // init Masonry
	var $grid = $('.grid').masonry({
	  // options...
	});
	// layout Masonry after each image loads
	$grid.imagesLoaded().progress( function() {
		$grid.masonry('layout');
	}); 

	//funcion boton para up
	$('.btnInicio').css('opacity', 0);
		
	$(window).scroll(function(){
		 // Aquí va el código que se ejecuta mientras haces el scroll y debe estar fuera del $(window).ready()
		 if ($(window).scrollTop() <= $(window).height()){
 			$('.btnInicio').css('opacity', 0);
 		}else{
 	 		// Esta variable almacenaría la distancia con el top, para poder comparar y así ejecutar algún script en cierto minuto
 			$('.btnInicio').css('opacity', 1);
 			//$('.btnInicio').removeClass('fixed-top');
 		}
	});

	$('.btnInicio').click(function(evt){
		$('html, body').animate({
			scrollTop: 0
		})

		evt.preventDefault();
		evt.stopPropagation();
	})

});






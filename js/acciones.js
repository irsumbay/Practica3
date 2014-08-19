//JavaScript

//ESPERAR A QUE EL DOCUMENTO ESTE LISTO	
$(document).ready(function(e){	

	$('#principal').height($('#page').height()); //calcula la altura del dispositivo	
	
// ESPERAR A QUE EL DISPOSITIVO ESTE LISTO
	document.addEventListener("deviceready",function(){    
		//Creamos una variable llamada audio para mandar a traer plugins de aaudio
		audio = window.plugins.LowLatencyAudio;		
		//ESCRIBIR UN ALIAS(DO, RE, MI, FA, SOL, LA) - UBICACION DEL ARCHIVO - QUE HACER EN DADO CASO ENCUENTRE EL ARCHIVO - MARCAR UN ERROR EN DADO CASO NO HABRA EL ARCHIVO
		audio.preloadFX('do', 'audio/DO.mp3', function(){}, function(e) {alert('error ' + e);});
		audio.preloadFX('re', 'audio/RE.mp3', function(){}, function(e) {alert('error ' + e);});
		audio.preloadFX('re', 'audio/MI.mp3', function(){}, function(e) {alert('error ' + e);});
		audio.preloadFX('re', 'audio/FA.mp3', function(){}, function(e) {alert('error ' + e);});
		audio.preloadFX('re', 'audio/SOL.mp3', function(){}, function(e) {alert('error ' + e);});
		audio.preloadFX('re', 'audio/LA.mp3', function(){}, function(e) {alert('error ' + e);});

		//Se crean eventos bind
		//hacemos uso de la clase nota, y checamos que div se toco y cambiamos el estilo del div tocado
		$('.nota').bind('touchstart', function(){
			$(this).addClass('tocada');  //cambiar el estilo de los div (do, re, ,mi, fa, sol, la)
			audio.play($(this).attr('id'));
			}).bind('touchend', function(){
				$(this).removeClass('tocada');
			});
			
	},false); //deviceready
});//ready
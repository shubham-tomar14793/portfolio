/* to adjust the height of div to full page */

$(document).ready(function(){
	function changeLandingSectionHeight(className){
		var screenHeight = $(window).height();
		$('.'+className).css('height',screenHeight);
	}
	changeLandingSectionHeight('landing-section');	
});
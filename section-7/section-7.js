$(function() {

	$('#what').waypoint(function() {
		setTimeout(function(){
			$('.steps_holder').addClass('show')
		}, 0);
	}, { offset: '50%' });

});
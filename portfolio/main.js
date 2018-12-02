//window.location.href = '/flows';
$(document).ready(function() {
	$('#fullpage').fullpage({
		//options here
		autoScrolling:true,
		scrollHorizontally: true,
    controlArrows: true,
	});

	//methods
	$.fn.fullpage.setAllowScrolling(true);
});

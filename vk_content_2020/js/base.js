/**
 * Base js functions
 */

$(document).ready(function(){

		$('#rockstar-map').rmap({
		width : '100%',
		height : '460',
		image : {
			src : 'images/map.png',
			width : 2000,
			height : 1200
		},
		nav_ui : {
            show : false,
      },
	  zoom : {
		  initial :1,
		  max : 1
	  },
		menu : {show : false},
		fullscreen : {
            enabled : true,
            start_in_fullscreen : false
      }
	});
	
});


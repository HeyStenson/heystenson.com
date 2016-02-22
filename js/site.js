console.log("Oh, cool, you're looking at my code! Definitely let me know what you think. I love learning new things about how to write better code, optimize user experience, and link to more cat pictures.");

// currently active menu item 
var current_item = 0;

// settings
var section_hide_time = 1300;
var section_show_time = 1300;

$(function() {
	// Switch section
	$('a', '.mainmenu').click(function() {
		if(!$(this).hasClass('active')) { 
			current_item = this;
			// close all visible divs with the class of .section
			$('.section:visible').fadeOut(section_hide_time, function() { 
				$('a', '.mainmenu').removeClass('active');  
				$(current_item).addClass('active');
				var new_section = $( $(current_item).attr('href') );
				new_section.fadeIn(section_show_time);
			});
		}
		return false;
	});		
});
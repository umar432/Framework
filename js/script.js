/*!
 * Custom Script - Check it out - https://github.com/umar432/Framework 
 */
/* jQuery for page scrolling feature - requires jQuery Easing plugin */
$(function() 
{
    $('a[href*=#]:not([href=#])').bind('click', function(event) 
	{
		
        var $anchor = $(this);
		$('#myNavbar').removeClass('in');
        $('html, body').stop().animate(
		{
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
		
        event.preventDefault();
		
    });
	

});


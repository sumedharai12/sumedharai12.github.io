$(document).ready(function(){
    $('a.scrolly').on('click', function(event) {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Store the target element's href attribute
        var target = $(this).attr('href');

        // Calculate the distance between the current scroll position and the bottom of the target element
        var windowHeight = $(window).height();
        var documentHeight = $(document).height();
        var targetBottom = $(target).offset().top + $(target).outerHeight();
        var distanceToBottom = documentHeight - targetBottom;

        // Calculate the scrolling speed based on the distance to the bottom
        var speed = 500 + (distanceToBottom / 4); // Adjust the multiplier (2 in this case) to control the scrolling speed

        // Scroll to the target element with the calculated speed
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, speed, 'swing'); // You can adjust the easing function as needed
    });
});

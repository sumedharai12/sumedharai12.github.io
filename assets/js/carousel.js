$(document).ready(function(){
    $('.slider').slick({
        dots: false, // Disable dots navigation
        infinite: true,
        speed: 500,
        slidesToShow: 1, // Show one project per slide
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev">Previous</button>', // Custom previous arrow
        nextArrow: '<button type="button" class="slick-next">Next</button>', // Custom next arrow
    });
});
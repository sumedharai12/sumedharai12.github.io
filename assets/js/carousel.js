$(document).ready(function(){
    $('.slider').slick({
        dots: false, // Disable dots navigation
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 2, // Show one project per slide
        slidesToScroll: 1,
        prevArrow: '<button type="button" id="prev-arrow" class="slick-prev">Previous</button>', // Custom previous arrow
        nextArrow: '<button type="button" id="next-arrow" class="slick-next">Next</button>', // Custom next arrow
    });
});
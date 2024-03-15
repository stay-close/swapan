// About me area slider

$('.skills_section').owlCarousel({
    rtl:true,
    center:true,
    loop:true,
    slideTransition: 'linear',
    autoplay:true,
    autoplayTimeout: 6000,
    autoplaySpeed: 6000,
    autoplayHoverPause: true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})

// Profile section skills slider
$('.profile_slider').owlCarousel({
    rtl:true,
    center:true,
    loop:true,
    slideTransition: 'linear',
    autoplay:true,
    autoplayTimeout: 6000,
    autoplaySpeed: 6000,
    autoplayHoverPause: true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})
$(function () {
    'use strict';

//     // Menu js start

    $(window).on("scroll", function () {
        var scrolling = $(this).scrollTop();
        if (scrolling > 130) {
            $(".menu_head").addClass("menu_fix");
        } else {
            $(".menu_head").removeClass("menu_fix");
        }
    });

//     // Flow slider js

    $('.flow_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: false,
        swipeToSlide: 0,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
        },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
        },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    }
  ]
    });
// Coundown js
    const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

let birthday = "jan 1, 2030 00:00:00",
  countDown = new Date(birthday).getTime(),
  x = setInterval(function() {    

    let now = new Date().getTime(),
        distance = countDown - now;

      document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
      document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
      document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

    //do something later when date is reached
    if (distance < 0) {
      let headline = document.getElementById("headline"),
          countdown = document.getElementById("countdown"),
          content = document.getElementById("content");

      headline.innerText = "It's my birthday!";
      countdown.style.display = "none";
      content.style.display = "block";

      clearInterval(x);
    }
    //seconds
  }, 0)

  

     //Tounament scroll js
    $(".tun_scroll").niceScroll({
        cursorcolor: "#1f004f",
        cursorwidth: "10px",
        cursorborder: "transparent",
        autohidemode: false,
        background: "#000",
        iframeautoresize: true,
        smoothscroll: true,
    });
    $('.about_game_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true,
        centerMode: true,
        centerPadding: 0,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
    },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
    },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
}
]
    });
    // accoudian js
   $('.card').on('click', function () {
       $('.add_border').removeClass('add_border');
       $(this).toggleClass('add_border');
   });

//     video part js
    $('.venobox').venobox({
        spinner: "cube-grid",
        spinColor: "#ff39dc",
    });
   
});

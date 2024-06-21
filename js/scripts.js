function getSubMenuParams() {
    $(".sub_menu").css({
        "height" : "auto"
    });
    topCoord = $("#nav").offset().top;
    $(".sub_menu").css({
        "height" : $(window).height() - topCoord + "px"
    });
    console.log($(document).scrollTop() );
}

var w = window,
d = document,
e = d.documentElement,
g = d.getElementsByTagName('body')[0],
bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;
var topCoord;
$(window).resize(function() {
    getSubMenuParams();
});

$(document).scroll(function() {

});

$(document).ready(function() {
    getSubMenuParams();

    $(document).on("click", ".checkout_list [data-option-val]",  function(e) {
      e.preventDefault();
      parent = $(this).closest(".custom_select");
      val = $(this).attr("data-option-val");
      parent.find(".p_val").text(val);
      parent.find("input[type='hidden']").val(val);
      parent.removeClass("active");
      parent.find("[data-option-val]").removeClass("active");
      $(this).addClass("active");
    });

    $(document).on("click", ".custom_select .p_val", function(e) {
      e.preventDefault();
      parent = $(this).closest(".custom_select");
      if(parent.hasClass("active")) {
        parent.removeClass("active");
      } else {
        $(".custom_select").removeClass("active");
        parent.addClass("active");
      }
    });

    $(document).mouseup(function(e) {
      hide_element = $(".custom_select");
      if (!hide_element.is(e.target)
          && hide_element.has(e.target).length === 0) {
          hide_element.removeClass("active");
        }
    });

    $(this).keydown(function(eventObject){
      if (eventObject.which == 27) {
        $(".custom_select").removeClass("active");
      }
    });

    // --------------

    $(".respmenubtn").click(function(e) {
      e.preventDefault();
      if( $("#resp_nav").is(":hidden") ) {
          $("#resp_nav").fadeIn(300);
          $(this).addClass("active");
      } else {
          $("#resp_nav").fadeOut(300);
          $(this).removeClass("active");
      }
    });
    
    $(this).keydown(function(eventObject){
        if (eventObject.which == 27 &&
            $("#resp_nav").is(":visible") &&
            bodyWidth <= 767) {
                $("#resp_nav").fadeOut(300);
                $(".respmenubtn").removeClass("active");
        }
    });

    // --------------

    const swiper = new Swiper('.promo_slider', {
        loop: true,
        effect: "fade",
        fadeEffect: {
            crossFade: true
        },
        // autoplay: {
        //     delay: 2000, // время задержки между слайдами
        //     disableOnInteraction: false, // слайды будут продолжать автоматически переключаться при нажатии на кнопки навигации
        // },
      navigation: {
        nextEl: '.slide_next',
        prevEl: '.slide_prev',
      }
    });

    // -------------
    const cards_slider = new Swiper(".cardsSliderWrapper", {
    loop: true,
      // slidesPerView: 4,
      slidesPerView: "auto",
      spaceBetween: 0,
      pagination: {
        el: ".cards_slider_pagination",
        clickable: true
      },
    navigation: {
        nextEl: '.cards_next',
        prevEl: '.cards_prev',
    },
    on: {
        init: function () {
            $(".cards_slider_pagination .swiper-pagination-bullet").removeClass("prevBullet");
            $(".cards_slider_pagination .swiper-pagination-bullet").removeClass("nextBullet");
            $(".cards_slider_pagination .swiper-pagination-bullet-active").prev(".swiper-pagination-bullet").addClass("prevBullet");
            $(".cards_slider_pagination .swiper-pagination-bullet-active").next(".swiper-pagination-bullet").addClass("nextBullet");
        },
        slideChange: function () {
            $(".cards_slider_pagination .swiper-pagination-bullet").removeClass("prevBullet");
            $(".cards_slider_pagination .swiper-pagination-bullet").removeClass("nextBullet");
            $(".cards_slider_pagination .swiper-pagination-bullet-active").prev(".swiper-pagination-bullet").addClass("prevBullet");
            $(".cards_slider_pagination .swiper-pagination-bullet-active").next(".swiper-pagination-bullet").addClass("nextBullet");
        }
      }
    });

    const cardSlider = new Swiper(".card_slider_wrapper", {
        loop: true,
        effect: "fade",
        fadeEffect: {
            crossFade: true
        },
        navigation: {
            nextEl: '.next',
            prevEl: '.prev',
        },
        pagination: {
            el: ".card_slider_pag",
            clickable: true
        }
    });

    // ------------
    const team_slider = new Swiper(".team_slider", {
    loop: true,
    slidesPerView: "auto",
    effect: "fade",
    fadeEffect: {
        crossFade: true
    },
    pagination: {
        el: ".team_slider_pag",
        clickable: true
    },
    navigation: {
        nextEl: '.team_sl_next',
        prevEl: '.team_sl_prev',
    },
    on: {
        init: function () {
            $(".team_slider_pag .swiper-pagination-bullet").removeClass("prevBullet");
            $(".team_slider_pag .swiper-pagination-bullet").removeClass("nextBullet");
            $(".team_slider_pag .swiper-pagination-bullet-active").prev(".swiper-pagination-bullet").addClass("prevBullet");
            $(".team_slider_pag .swiper-pagination-bullet-active").next(".swiper-pagination-bullet").addClass("nextBullet");
        },
        slideChange: function () {
            $(".team_slider_pag .swiper-pagination-bullet").removeClass("prevBullet");
            $(".team_slider_pag .swiper-pagination-bullet").removeClass("nextBullet");
            $(".team_slider_pag .swiper-pagination-bullet-active").prev(".swiper-pagination-bullet").addClass("prevBullet");
            $(".team_slider_pag .swiper-pagination-bullet-active").next(".swiper-pagination-bullet").addClass("nextBullet");
        }
      }
    });

    $(".nav li").on("mouseover", function() {
        index = $(this).attr("data-itemindex");
        subMenu = $("[data-subindex = '"+index+"']");
        // subMenu.offset({left:0});
        // subMenu.fadeIn(300);
        subMenu.addClass("visible");
        subMenu.offset({top:topCoord});
        console.log(index);
    });

    $(".nav li").on("mouseleave", function() {
        // index = $(this).attr("data-itemindex");
        subMenu = $("[data-subindex]");
        // subMenu.offset({left:0});
        // subMenu.fadeIn(300);
        subMenu.removeClass("visible");
        console.log(index);
    });

});
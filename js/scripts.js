var w = window,
d = document,
e = d.documentElement,
g = d.getElementsByTagName('body')[0],
bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

$(window).resize(function() {

});

$(document).scroll(function() {

});

$(document).ready(function() {

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

});
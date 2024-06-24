function getSubMenuParams() {
    $(".sub_menu").css({
        "height" : "auto"
    });
    topCoord = $("#nav").offset().top;
    $(".sub_menu").css({
        "height" : $(window).height() - topCoord + "px"
    });
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

    // ------------

    // var cardsSlider = new Swiper(".cardsSlider", {
    //   effect: "cards",
    //   grabCursor: true,
    //     pagination: {
    //         el: ".cardsSlider_pag",
    //         clickable: true
    //     },
    //     on: {
    //     init: function () {
    //         $(".cardsSlider_pag .swiper-pagination-bullet").removeClass("prevBullet");
    //         $(".cardsSlider_pag .swiper-pagination-bullet").removeClass("nextBullet");
    //         $(".cardsSlider_pag .swiper-pagination-bullet-active").prev(".swiper-pagination-bullet").addClass("prevBullet");
    //         $(".cardsSlider_pag .swiper-pagination-bullet-active").next(".swiper-pagination-bullet").addClass("nextBullet");
    //     },
    //     slideChange: function () {
    //         $(".cardsSlider_pag .swiper-pagination-bullet").removeClass("prevBullet");
    //         $(".cardsSlider_pag .swiper-pagination-bullet").removeClass("nextBullet");
    //         $(".cardsSlider_pag .swiper-pagination-bullet-active").prev(".swiper-pagination-bullet").addClass("prevBullet");
    //         $(".cardsSlider_pag .swiper-pagination-bullet-active").next(".swiper-pagination-bullet").addClass("nextBullet");
    //     }
    //   }
    // });

    // -------------

    const testimonialSlider = new Swiper('.testimonialSlider', {
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
        nextEl: '.test_slide_next',
        prevEl: '.test_slide_prev',
      }
    });

    // ---------------

    // var verticalScroll = new Swiper("#verticalScroll", {
    //   direction: "vertical",
    //   slidesPerView: "auto",
    //   freeMode: true,
    //   scrollbar: {
    //     el: ".swiper-scrollbar",
    //   },
    //   mousewheel: true,
    // });
    // var verticalScroll = new Swiper("#verticalScroll", {
    //     direction: 'vertical',
    //     slidesPerView: "auto",
    //     mousewheelControl: true,
    //     freeMode: true,
    //     mousewheel: true
    // });


    // ---------------

    const videoSlider2 = new Swiper(".videoSlider2", {
        loop: true,
        // slidesPerView: 4,
        slidesPerView: "auto",
        spaceBetween: 0,
        navigation: {
            nextEl: '.videos_next',
            prevEl: '.videos_prev',
        }
    });

    // ---------------

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

    // ---------------------

    var templ = '<div class="select-box">'+
    '<svg class="tel_arrow" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">'+
            '<path d="M4 6L8 10L12 6" stroke="#0E2141" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>'+
            '</svg>'+
    '<div class="selected-option"><div>'+
           '<span class="iconify" data-icon="flag:gb-4x3"></span>'+
            '<strong>+44</strong></div>'+
          '<input class="codeTelInput" type="number" name="tel" placeholder="" required >'+
    '</div>'+
    '<div class="options">'+
        '<input type="text" class="search-box" placeholder="Поиск страны">'+
        '<ol></ol></div></div>';
    var telInputWrapp = $('.field-type-tel');
    telInputWrapp.after(templ);
    
    // 253 countries
    const countries = [  
      { name: "Афганистан", code: "AF", phone: 93 },
{ name: "Аландские острова", code: "AX", phone: 358 },
{ name: "Албания", code: "AL", phone: 355 },
{ name: "Алжир", code: "DZ", phone: 213 },
{ name: "Американское Самоа", code: "AS", phone: 1684 },
{ name: "Андорра", code: "AD", phone: 376 },
{ name: "Ангола", code: "AO", phone: 244 },
{ name: "Ангилья", code: "AI", phone: 1264 },
{ name: "Антарктида", code: "AQ", phone: 672 },
{ name: "Антигуа и Барбуда", code: "AG", phone: 1268 },
{ name: "Аргентина", code: "AR", phone: 54 },
{ name: "Армения", code: "AM", phone: 374 },
{ name: "Аруба", code: "AW", phone: 297 },
{ name: "Австралия", code: "AU", phone: 61 },
{ name: "Австрия", code: "AT", phone: 43 },
{ name: "Азербайджан", code: "AZ", phone: 994 },
{ name: "Багамы", code: "BS", phone: 1242 },
{ name: "Бахрейн", code: "BH", phone: 973 },
{ name: "Бангладеш", code: "BD", phone: 880 },
{ name: "Барбадос", code: "BB", phone: 1246 },
{ name: "Беларусь", code: "BY", phone: 375 },
{ name: "Бельгия", code: "BE", phone: 32 },
{ name: "Белиз", code: "BZ", phone: 501 },
{ name: "Бенин", code: "BJ", phone: 229 },
{ name: "Бермуды", code: "BM", phone: 1441 },
{ name: "Бутан", code: "BT", phone: 975 },
{ name: "Боливия", code: "BO", phone: 591 },
{ name: "Бонайре, Синт-Эстатиус и Саба", code: "BQ", phone: 599 },
{ name: "Босния и Герцеговина", code: "BA", phone: 387 },
{ name: "Ботсвана", code: "BW", phone: 267 },
{ name: "Бразилия", code: "BR", phone: 55 },
{ name: "Британская территория Индийского океана", code: "IO", phone: 246 },
{ name: "Бруней-Даруссалам", code: "BN", phone: 673 },
{ name: "Болгария", code: "BG", phone: 359 },
{ name: "Буркина-Фасо", code: "BF", phone: 226 },
{ name: "Бурунди", code: "BI", phone: 257 },
{ name: "Берег Слоновой Кости", code: "CI", phone: 225 },
{ name: "Венгрия", code: "HU", phone: 36 },
{ name: "Воссоединение", code: "RE", phone: 262 },
{ name: "Великобритания", code: "GB", phone: 44 },      
{ name: "Вануату", code: "VU", phone: 678 },
{ name: "Венесуэла", code: "VE", phone: 58 },
{ name: "Вьетнам", code: "VN", phone: 84 },
{ name: "Виргинские острова, Британская", code: "VG", phone: 1284 },
{ name: "Виргинские острова, США", code: "VI", phone: 1340 },
{ name: "Габон", code: "GA", phone: 241 },
{ name: "Гамбия", code: "GM", phone: 220 },
{ name: "Грузия", code: "GE", phone: 995 },
{ name: "Германия", code: "DE", phone: 49 },
{ name: "Гана", code: "GH", phone: 233 },
{ name: "Гибралтар", code: "GI", phone: 350 },
{ name: "Греция", code: "GR", phone: 30 },
{ name: "Гренландия", code: "GL", phone: 299 },
{ name: "Гренада", code: "GD", phone: 1473 },
{ name: "Гваделупа", code: "GP", phone: 590 },
{ name: "Гуам", code: "GU", phone: 1671 },
{ name: "Гватемала", code: "GT", phone: 502 },
{ name: "Гернси", code: "GG", phone: 44 },
{ name: "Гвинея", code: "GN", phone: 224 },
{ name: "Гвинея-Бисау", code: "GW", phone: 245 },
{ name: "Гайана", code: "GY", phone: 592 },
{ name: "Гаити", code: "HT", phone: 509 },
{ name: "Гондурас", code: "HN", phone: 504 },
{ name: "Гонконг", code: "HK", phone: 852 },
{ name: "Дания", code: "DK", phone: 45 },
{ name: "Джибути", code: "DJ", phone: 253 },
{ name: "Доминика", code: "DM", phone: 1767 },
{ name: "Доминиканская Республика", code: "DO", phone: 1809 },
{ name: "Джерси", code: "JE", phone: 44 },
{ name: "Египет", code: "EG", phone: 20 },
{ name: "Западная Сахара", code: "EH", phone: 212 },
{ name: "Замбия", code: "ZM", phone: 260 },
{ name: "Зимбабве", code: "ZW", phone: 263 },
{ name: "Исландия", code: "IS", phone: 354 },
{ name: "Индия", code: "IN", phone: 91 },
{ name: "Индонезия", code: "ID", phone: 62 },
{ name: "Иран, Исламская Республика", code: "IR", phone: 98 },
{ name: "Ирак", code: "IQ", phone: 964 },
{ name: "Ирландия", code: "IE", phone: 353 },
{ name: "Израиль", code: "IL", phone: 972 },
{ name: "Италия", code: "IT", phone: 39 },
{ name: "Иордания", code: "JO", phone: 962 },
{ name: "Испания", code: "ES", phone: 34 },
{ name: "Идти", code: "TG", phone: 228 },
{ name: "Йемен", code: "YE", phone: 967 },
{ name: "Катар", code: "QA", phone: 974 },
{ name: "Камбоджа", code: "KH", phone: 855 },
{ name: "Камерун", code: "CM", phone: 237 },
{ name: "Канада", code: "CA", phone: 1 },
{ name: "Кабо-Верде", code: "CV", phone: 238 },
{ name: "Каймановы острова", code: "KY", phone: 1345 },
{ name: "Китай", code: "CN", phone: 86 },
{ name: "Кокосовые острова (Килинг)", code: "CC", phone: 672 },
{ name: "Колумбия", code: "CO", phone: 57 },
{ name: "Коморские острова", code: "KM", phone: 269 },
{ name: "Конго", code: "CG", phone: 242 },
{ name: "Конго, Демократическая Республика Конго", code: "CD", phone: 242 },
{ name: "Коста-Рика", code: "CR", phone: 506 },
{ name: "Куба", code: "CU", phone: 53 },
{ name: "Кюрасао", code: "CW", phone: 599 },
{ name: "Кипр", code: "CY", phone: 357 },
{ name: "Казахстан", code: "KZ", phone: 7 },
{ name: "Кения", code: "KE", phone: 254 },
{ name: "Кирибати", code: "KI", phone: 686 },
{ name: "Корея, Народно-Демократическая Республика", code: "KP", phone: 850 },
{ name: "Корея, Республик", code: "KR", phone: 82 },
{ name: "Косово", code: "XK", phone: 383 },
{ name: "Кувейт", code: "KW", phone: 965 },
{ name: "Кыргызстан", code: "KG", phone: 996 },
{ name: "Лаосская Народно-Демократическая Республика", code: "LA", phone: 856 },
{ name: "Латвия", code: "LV", phone: 371 },
{ name: "Ливан", code: "LB", phone: 961 },
{ name: "Лесото", code: "LS", phone: 266 },
{ name: "Либерия", code: "LR", phone: 231 },
{ name: "Ливийская арабская джамахирия", code: "LY", phone: 218 },
{ name: "Лихтенштейн", code: "LI", phone: 423 },
{ name: "Литва", code: "LT", phone: 370 },
{ name: "Люксембург", code: "LU", phone: 352 },
{ name: "Макао", code: "MO", phone: 853 },
{ name: "Македония, бывшая югославская республика", code: "MK", phone: 389 },
{ name: "Мадагаскар", code: "MG", phone: 261 },
{ name: "Малави", code: "MW", phone: 265 },
{ name: "Малайзия", code: "MY", phone: 60 },
{ name: "Мальдивы", code: "MV", phone: 960 },
{ name: "Мали", code: "ML", phone: 223 },
{ name: "Мальта", code: "MT", phone: 356 },
{ name: "Маршалловы острова", code: "MH", phone: 692 },
{ name: "Мартиника", code: "MQ", phone: 596 },
{ name: "Мавритания", code: "MR", phone: 222 },
{ name: "Маврикий", code: "MU", phone: 230 },
{ name: "Майотта", code: "YT", phone: 262 },
{ name: "Мексика", code: "MX", phone: 52 },
{ name: "Микронезия, Федеративные Штаты", code: "FM", phone: 691 },
{ name: "Молдова, Республика", code: "MD", phone: 373 },
{ name: "Монако", code: "MC", phone: 377 },
{ name: "Монголия", code: "MN", phone: 976 },
{ name: "Монтсеррат", code: "MS", phone: 1664 },
{ name: "Марокко", code: "MA", phone: 212 },
{ name: "Мозамбик", code: "MZ", phone: 258 },
{ name: "Мьянма", code: "MM", phone: 95 },
{ name: "Малые отдаленные острова США", code: "UM", phone: 1 },
{ name: "Намибия", code: "NA", phone: 264 },
{ name: "Науру", code: "NR", phone: 674 },
{ name: "Непал", code: "NP", phone: 977 },
{ name: "Нидерланды", code: "NL", phone: 31 },
{ name: "Нидерландские Антильские острова", code: "AN", phone: 599 },
{ name: "Новая Каледония", code: "NC", phone: 687 },
{ name: "Новая Зеландия", code: "NZ", phone: 64 },
{ name: "Никарагуа", code: "NI", phone: 505 },
{ name: "Нигер", code: "NE", phone: 227 },
{ name: "Нигерия", code: "NG", phone: 234 },
{ name: "Ниуэ", code: "NU", phone: 683 },
{ name: "Норвегия", code: "NO", phone: 47 },
{ name: "Остров Буве", code: "BV", phone: 55 },
{ name: "Остров Рождества", code: "CX", phone: 61 },
{ name: "Острова Кука", code: "CK", phone: 682 },
{ name: "Остров Мэн", code: "IM", phone: 44 },
{ name: "Остров Норфолк", code: "NF", phone: 672 },
{ name: "Оман", code: "OM", phone: 968 },
{ name: "Остров Святой Елены", code: "SH", phone: 290 },
{ name: "Остров Херд и острова Макдональда", code: "HM", phone: 0 },
{ name: "Острова Тёркс и Кайкос", code: "TC", phone: 1649 },
{ name: "Объединенные Арабские Эмираты", code: "AE", phone: 971 },
{ name: "Пакистан", code: "PK", phone: 92 },
{ name: "Палау", code: "PW", phone: 680 },
{ name: "Палестинская территория, оккупированная", code: "PS", phone: 970 },
{ name: "Панама", code: "PA", phone: 507 },
{ name: "Папуа - Новая Гвинея", code: "PG", phone: 675 },
{ name: "Парагвай", code: "PY", phone: 595 },
{ name: "Перу", code: "PE", phone: 51 },
{ name: "Питкэрн", code: "PN", phone: 64 },
{ name: "Польша", code: "PL", phone: 48 },
{ name: "Португалия", code: "PT", phone: 351 },
{ name: "Пуэрто-Рико", code: "PR", phone: 1787 },
{ name: "Румыния", code: "RO", phone: 40 },
{ name: "Российская Федерация", code: "RU", phone: 7 },
{ name: "Руанда", code: "RW", phone: 250 },
{ name: "Сальвадор", code: "SV", phone: 503 },
{ name: "Святой Престол (государство-город Ватикан)", code: "VA", phone: 39 },
{ name: "Северные Марианские острова", code: "MP", phone: 1670 },
{ name: "Сен-Бартелеми", code: "BL", phone: 590 },
{ name: "Сент-Китс и Невис", code: "KN", phone: 1869 },
{ name: "Санкт-Люсия", code: "LC", phone: 1758 },
{ name: "Сен-Мартен", code: "MF", phone: 590 },
{ name: "Сен-Пьер и Микелон", code: "PM", phone: 508 },
{ name: "Святой Винсент и Гренадины", code: "VC", phone: 1784 },
{ name: "Самоа", code: "WS", phone: 684 },
{ name: "Сан-Марино", code: "SM", phone: 378 },
{ name: "Сан-Томе и Принсипи", code: "ST", phone: 239 },
{ name: "Саудовская Аравия", code: "SA", phone: 966 },
{ name: "Сенегал", code: "SN", phone: 221 },
{ name: "Сербия", code: "RS", phone: 381 },
{ name: "Сербия и Черногория", code: "CS", phone: 381 },
{ name: "Сейшельские острова", code: "SC", phone: 248 },
{ name: "Сьерра-Леоне", code: "SL", phone: 232 },
{ name: "Сингапур", code: "SG", phone: 65 },
{ name: "Сен-Мартен", code: "SX", phone: 721 },
{ name: "Словакия", code: "SK", phone: 421 },
{ name: "Словения", code: "SI", phone: 386 },
{ name: "Соломоновы острова", code: "SB", phone: 677 },
{ name: "Сомали", code: "SO", phone: 252 },
{ name: "Судан", code: "SD", phone: 249 },
{ name: "Суринам", code: "SR", phone: 597 },
{ name: "Свазиленд", code: "SZ", phone: 268 },
{ name: "Сирийская Арабская Республика", code: "SY", phone: 963 },
{ name: "Соединенные Штаты", code: "US", phone: 1 },
{ name: "Тайвань, провинция Китая", code: "TW", phone: 886 },
{ name: "Таджикистан", code: "TJ", phone: 992 },
{ name: "Танзания, Объединенная Республика", code: "TZ", phone: 255 },
{ name: "Таиланд", code: "TH", phone: 66 },
{ name: "Тимор-Лешти", code: "TL", phone: 670 },
{ name: "Токелау", code: "TK", phone: 690 },
{ name: "Тонга", code: "TO", phone: 676 },
{ name: "Тринидад и Тобаго", code: "TT", phone: 1868 },
{ name: "Тунис", code: "TN", phone: 216 },
{ name: "Турция", code: "TR", phone: 90 },
{ name: "Туркменистан", code: "TM", phone: 7370 },
{ name: "Тувалу", code: "TV", phone: 688 },
{ name: "Уганда", code: "UG", phone: 256 },
{ name: "Украина", code: "UA", phone: 380 },
{ name: "Уругвай", code: "UY", phone: 598 },
{ name: "Узбекистан", code: "UZ", phone: 998 },
{ name: "Уоллис и Футуна", code: "WF", phone: 681 },
{ name: "Фолклендские острова (Мальвинские острова)", code: "FK", phone: 500 },
{ name: "Фарерские острова", code: "FO", phone: 298 },
{ name: "Фиджи", code: "FJ", phone: 679 },
{ name: "Финляндия", code: "FI", phone: 358 },
{ name: "Франция", code: "FR", phone: 33 },
{ name: "Французская Гвиана", code: "GF", phone: 594 },
{ name: "Французская Полинезия", code: "PF", phone: 689 },
{ name: "Филиппины", code: "PH", phone: 63 },
{ name: "Хорватия", code: "HR", phone: 385 },
{ name: "Центрально-Африканская Республика", code: "CF", phone: 236 },
{ name: "Чад", code: "TD", phone: 235 },
{ name: "Чили", code: "CL", phone: 56 },
{ name: "Чешская Республика", code: "CZ", phone: 420 },
{ name: "Черногория", code: "ME", phone: 382 },
{ name: "Шри-Ланка", code: "LK", phone: 94 },       
{ name: "Шпицберген и Ян-Майен", code: "SJ", phone: 47 },       
{ name: "Швеция", code: "SE", phone: 46 },
{ name: "Швейцария", code: "CH", phone: 41 },
{ name: "Эквадор", code: "EC", phone: 593 },
{ name: "Экваториальная Гвинея", code: "GQ", phone: 240 },
{ name: "Эритрея", code: "ER", phone: 291 },
{ name: "Эстония", code: "EE", phone: 372 },
{ name: "Эфиопия", code: "ET", phone: 251 },
{ name: "Южные Французские Территории", code: "TF", phone: 262 },
{ name: "Южная Африка", code: "ZA", phone: 27 },
{ name: "Южная Георгия и Южные Сандвичевы острова", code: "GS", phone: 500 },
{ name: "Южный Судан", code: "SS", phone: 211 },
{ name: "Ямайка", code: "JM", phone: 1876 },
{ name: "Япония", code: "JP", phone: 81 },
    ],

        select_box = document.querySelector('.options'),
        search_box = document.querySelector('.search-box'),
        input_box = document.querySelector('input[type="tel"]'),
        selected_option = document.querySelector('.selected-option div');

    let options = null;

    for (country of countries) {
        const option = `
        <li class="option">
            <div>
                <span class="iconify" data-icon="flag:${country.code.toLowerCase()}-4x3"></span>
                <span class="country-name">${country.name}</span>
            </div>
            <strong>+${country.phone}</strong>
        </li> `;

        select_box.querySelector('ol').insertAdjacentHTML('beforeend', option);
        options = document.querySelectorAll('.option');
    }

    function selectOption() {
        const icon = this.querySelector('.iconify').cloneNode(true),
            phone_code = this.querySelector('strong').cloneNode(true);

        selected_option.innerHTML = '';
        selected_option.append(icon, phone_code);

        input_box.value = phone_code.innerText;

        select_box.classList.remove('active');
        selected_option.classList.remove('active');

        search_box.value = '';
        select_box.querySelectorAll('.hide').forEach(el => el.classList.remove('hide'));
    }

    function searchCountry() {
        let search_query = search_box.value.toLowerCase();
        for (option of options) {
            let is_matched = option.querySelector('.country-name').innerText.toLowerCase().includes(search_query);
            option.classList.toggle('hide', !is_matched)
        }
    }


    selected_option.addEventListener('click', () => {
        select_box.classList.toggle('active');
        selected_option.classList.toggle('active');
    })

    options.forEach(option => option.addEventListener('click', selectOption));
    search_box.addEventListener('input', searchCountry);


    var telInput = telInputWrapp.find("[type='tel']");
    var placeholder = telInput.attr("placeholder");
        var codeTelInput = $('.codeTelInput');
        var codeTelInputVal;
        var codeVal;
        var telStr;
        var tel;
        codeTelInput.attr("placeholder", placeholder);

        $(document).on("click", ".select-box ol li.option", function() {
          codeVal = $(this).find("strong").text();
          codeTelInputVal = codeTelInput.val();
          telInput.val(codeVal + codeTelInputVal);
        });

        $(document).on( "change", '.codeTelInput', function() {
          codeVal = $(".selected-option > div > strong").text();
          codeTelInputVal = $(this).val();
          telStr = codeVal + codeTelInputVal;
          telInput.val(telStr);
        });

        $(this).keydown(function(eventObject){
        if (eventObject.which == 27) {
          $(".select-box .options").removeClass("active");
        }
      });
      $(document).on("mouseup", function(e) {
          hide_element = $(".select-box .options");
          if (!hide_element.is(e.target)
              && hide_element.has(e.target).length === 0) {
            $(".select-box .options").removeClass("active");
          }
      });

      // -------------

    $(".dr_title").on("click", function(e) {
      e.preventDefault();
      parent = $(this).closest(".dr_parent");
      sl = parent.find(".dr_content");
      if(sl.is(":hidden")) {
        parent.addClass("active");
        sl.slideDown(300);
      } else {               
        sl.slideUp(300);
        parent.removeClass("active");
      }
    });

});
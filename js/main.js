(function ($) {
  "use strict";

  // Preloader
  $(window).on("load", function () {
    if ($("#preloader").length) {
      $("#preloader")
        .delay(100)
        .fadeOut("slow", function () {
          $(this).remove();
        });
    }
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });

  // Initiate the wowjs animation library
  new WOW().init();

  // Initiate superfish on nav menu
  $(".nav-menu").superfish({
    animation: {
      opacity: "show",
    },
    speed: 400,
  });

  // Mobile Navigation
  if ($("#nav-menu-container").length) {
    var $mobile_nav = $("#nav-menu-container").clone().prop({
      id: "mobile-nav",
    });
    $mobile_nav.find("> ul").attr({
      class: "",
      id: "",
    });
    $("body").append($mobile_nav);
    $("body").prepend(
      '<button type="button" id="mobile-nav-toggle"><i class="fa fa-bars"></i></button>'
    );
    $("body").append('<div id="mobile-body-overly"></div>');
    $("#mobile-nav")
      .find(".menu-has-children")
      .prepend('<i class="fa fa-chevron-down"></i>');
    $("img-mudar").attr("src", "img/intro-carousel_games/1.jpg");

    $(document).on("click", ".menu-has-children i", function (e) {
      $(this).next().toggleClass("menu-item-active");
      $(this).nextAll("ul").eq(0).slideToggle();
      $(this).toggleClass("fa-chevron-up fa-chevron-down");
    });

    $(document).on("click", "#mobile-nav-toggle", function (e) {
      $("body").toggleClass("mobile-nav-active");
      $("#mobile-nav-toggle i").toggleClass("fa-times fa-bars");
      $("#mobile-body-overly").toggle();
    });

    $(document).click(function (e) {
      var container = $("#mobile-nav, #mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($("body").hasClass("mobile-nav-active")) {
          $("body").removeClass("mobile-nav-active");
          $("#mobile-nav-toggle i").toggleClass("fa-times fa-bars");
          $("#mobile-body-overly").fadeOut();
        }
      }
    });
  } else if ($("#mobile-nav, #mobile-nav-toggle").length) {
    $("#mobile-nav, #mobile-nav-toggle").hide();
  }

  // Header scroll class
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $("#header").addClass("header-scrolled");
    } else {
      $("#header").removeClass("header-scrolled");
    }
  });

  if ($(window).scrollTop() > 100) {
    $("#header").addClass("header-scrolled");
  }

  // Smooth scroll for the menu and links with .scrollto classes
  $(".nav-menu a, #mobile-nav a, .scrollto").on("click", function () {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      if (target.length) {
        var top_space = 0;

        if ($("#header").length) {
          top_space = $("#header").outerHeight();

          if (!$("#header").hasClass("header-scrolled")) {
            top_space = top_space - 20;
          }
        }

        $("html, body").animate(
          {
            scrollTop: target.offset().top - top_space,
          },
          1500,
          "easeInOutExpo"
        );

        if ($(this).parents(".nav-menu").length) {
          $(".nav-menu .menu-active").removeClass("menu-active");
          $(this).closest("li").addClass("menu-active");
        }

        if ($("body").hasClass("mobile-nav-active")) {
          $("body").removeClass("mobile-nav-active");
          $("#mobile-nav-toggle i").toggleClass("fa-times fa-bars");
          $("#mobile-body-overly").fadeOut();
        }
        return false;
      }
    }
  });

  /*
  // Navigation active state on scroll
  var nav_sections = $("section");
  var main_nav = $(".nav-menu, #mobile-nav");
  var main_nav_height = $("#header").outerHeight().toFixed(0);
 // alert(main_nav_height);
  $(window).on("scroll", function () {
    var cur_pos = $(this).scrollTop();
    //alert(cur_pos);
    nav_sections.each(function () {
      var top = $(this).offset().top - main_nav_height,
        bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        main_nav.find("li").removeClass("menu-active menu-item-active");
        main_nav
          .find('a[href="#' + $(this).attr("id") + '"]')
          .parent("li")
          .addClass("menu-active menu-item-active");
      }
    });
  });*/

  $(window).on("scroll", function () {
    var novidades = document.getElementById("novidades");
    var pos = novidades.getBoundingClientRect();

    var liDes = document.getElementById("li-destaque");
    var liNov = document.getElementById("li-novidades");
    var liAss = document.getElementById("li-assista");
    var liCon = document.getElementById("li-contato");

    var sectionPos = $(window).height() / 4;
    const sections = [
      sectionPos * 4,
      sectionPos,
      sectionPos * -1,
      sectionPos * 4 * -1,
    ];

    if (pos.top >= sections[0]) {
      liDes.classList.add("menu-active");
      liNov.classList.remove("menu-active");
      liAss.classList.remove("menu-active");
      liCon.classList.remove("menu-active");
    } else if (pos.top < sections[1] && pos.top > sections[2]) {
      liNov.classList.add("menu-active");
      liDes.classList.remove("menu-active");
      liAss.classList.remove("menu-active");
      liCon.classList.remove("menu-active");
    } else if (pos.top < sections[2] && pos.top > sections[3]) {
      liAss.classList.add("menu-active");
      liNov.classList.remove("menu-active");
      liDes.classList.remove("menu-active");
      liCon.classList.remove("menu-active");
    } else if (pos.top <= sections[3]) {
      liCon.classList.add("menu-active");
      liAss.classList.remove("menu-active");
      liNov.classList.remove("menu-active");
      liDes.classList.remove("menu-active");
    }
  });

  // Intro carousel
  var introCarousel = $(".carousel");
  var introCarouselIndicators = $(".carousel-indicators");
  introCarousel
    .find(".carousel-inner")
    .children(".carousel-item")
    .each(function (index) {
      index === 0
        ? introCarouselIndicators.append(
            "<li data-target='#introCarousel' data-slide-to='" +
              index +
              "' class='active'></li>"
          )
        : introCarouselIndicators.append(
            "<li data-target='#introCarousel' data-slide-to='" +
              index +
              "'></li>"
          );

      $(this).css(
        "background-image",
        "url('" +
          $(this).children(".carousel-background").children("img").attr("src") +
          "')"
      );
      $(this).children(".carousel-background").remove();
    });

  $(".carousel").swipe({
    swipe: function (
      event,
      direction,
      distance,
      duration,
      fingerCount,
      fingerData
    ) {
      if (direction == "left") $(this).carousel("next");
      if (direction == "right") $(this).carousel("prev");
    },
    allowPageScroll: "vertical",
  });

  // Skills section
  $("#skills").waypoint(
    function () {
      $(".progress .progress-bar").each(function () {
        $(this).css("width", $(this).attr("aria-valuenow") + "%");
      });
    },
    { offset: "80%" }
  );

  // jQuery counterUp (used in Facts section)
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000,
  });

  // Porfolio isotope and filter
  var portfolioIsotope = $(".portfolio-container").isotope({
    itemSelector: ".portfolio-item",
    layoutMode: "fitRows",
  });

  $("#portfolio-flters li").on("click", function () {
    $("#portfolio-flters li").removeClass("filter-active");
    $(this).addClass("filter-active");

    portfolioIsotope.isotope({ filter: $(this).data("filter") });
  });

  // Clients carousel (uses the Owl Carousel library)
  $(".clients-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    responsive: { 0: { items: 2 }, 768: { items: 4 }, 900: { items: 6 } },
  });

  // Testimonials carousel (uses the Owl Carousel library)
  $(".testimonials-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 1,
  });
  $(document).ready(function () {
    /* default settings */
    $(".venobox").venobox();

    /* custom settings */
    $(".venobox_custom").venobox({
      framewidth: "", // default: ''
      frameheight: "", // default: ''
      border: "", // default: '0'
      bgcolor: "rgba(255,255,255,0.1)", // default: '#fff'
      titleattr: "data-title", // default: 'title'
      numeratio: true, // default: false
      infinigall: true, // default: false
    });
  });

  // Novidades
  $(function () {
    $("div").hover(
      function () {
        if (this.id == "novidades-card") {
          var date = this.previousElementSibling;
          $(date).css("margin-top", "-50px");
        }
      },
      function () {
        var date = this.previousElementSibling;
        $(date).css("margin-top", "");
      }
    );
  });

  /*Set Valores*/
  const urlAtt = "/textos/atualização.txt";
  const urlCard ="/textos/card.txt";
  const urlLink ="/textos/youtube.txt"
  $(window).on("load", function () {
    // Inicialize Texto Card Carousel

    getTextData(urlCard, (data)=>{
      const elements = document.querySelectorAll("[id=card-info-text]");
      for (var i = 0; i < elements.length; i++) {
        elements[i].innerHTML = data;
      }
    });

    // Inicializa Imagens Novidades
    var elements = document.querySelectorAll("[class=novidades-card]");
    for (var i = 0; i < elements.length; i++) {
      var path = `url('/img/ilustruções_temporarias/${i + 1}.jpg')`;
      elements[i].style.backgroundImage = path;
    }
    // Inicializa Textos das Novidades
    var elementsTexto = document.querySelectorAll(
      "[id=novidades-card-info-text]"
    );
    var elementsData = document.querySelectorAll("[id=date]");

    getTextData(urlAtt, (data) => {
      const textosWithData = data.toString().split("#");

      for (var i = 1; i < textosWithData.length; i++) {
        var dataSplitTexto = textosWithData[i].split("$");
        elementsData[i - 1].innerHTML = dataSplitTexto[0];
        elementsTexto[i - 1].innerHTML = dataSplitTexto[1];
      }
    });
  });

  //inicializa link youtube video
  
  getTextData(urlLink, (data) =>{
    document.getElementById('yt-video').href = data;
  });


  function getTextData(url, callback) {
    fetch(url)
      .then((response) => response.text())
      .then((result) => callback(result));
  }
})(jQuery);

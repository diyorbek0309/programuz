!(function($) {
  "use strict";

//programuz - Diyorbek Olimov

  $(document).ready('.nav-menu a, .mobile-nav a, .scrollto', function(e) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      e.preventDefault();
      var target = $(this.hash);
      if (target.length) {
        var scrollto = target.offset().top;
        var scrolled = 20;
        if ($('#header').length) {
          scrollto -= $('#header').outerHeight()
          if (!$('#header').hasClass('header-scrolled')) {
            scrollto += scrolled;
          }
        }
        if ($(this).attr("href") == '#header') {
          scrollto = 0;
        }
        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');
        if ($(this).parents('.nav-menu, .mobile-nav').length) {
          $('.nav-menu .active, .mobile-nav .active').removeClass('active');
          $(this).closest('li').addClass('active');
        }
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }
        return false;
      }
    }
  });

  if ($('.nav-menu').length) {
    var $mobile_nav = $('.nav-menu').clone().prop({
      class: 'mobile-nav d-lg-none'
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>');
    $('body').append('<div class="mobile-nav-overly"></div>');
    $(document).on('click', '.mobile-nav-toggle', function(e) {
      $('body').toggleClass('mobile-nav-active');
      $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
      $('.mobile-nav-overly').toggle();
    });
    $(document).on('click', '.mobile-nav .drop-down > a', function(e) {
      e.preventDefault();
      $(this).next().slideToggle(300);
      $(this).parent().toggleClass('active');
    });
    $(document).click(function(e) {
      var container = $(".mobile-nav, .mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }
      }
    });
  } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
    $(".mobile-nav, .mobile-nav-toggle").hide();
  }


  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#header').addClass('header-scrolled');
    } else {
      $('#header').removeClass('header-scrolled');
    }
  });
  if ($(window).scrollTop() > 100) {
    $('#header').addClass('header-scrolled');
  }

  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back').fadeIn('slow');
    } else {
      $('.back').fadeOut('slow');
    }
  });
  $('.back').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 2000, 'easeInOutExpo');
    return false;
  });

  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000
  });

  $(window).on('load', function() {
    var coursesIsotope = $('.courses-container').isotope({
      itemSelector: '.courses-item',
      layoutMode: 'fitRows'
    });
    $('#courses-filters li').on('click', function() {
      $("#courses-filters li").removeClass('filter-active');
      $(this).addClass('filter-active');
      coursesIsotope.isotope({
        filter: $(this).data('filter')
      });
    });


    
    $(document).ready(function() {
      $('.venobox').venobox();
      $('.loader').css('display', 'none');
    });
  });


  AOS.init({
    duration: 800,
    easing: "ease-in-out"
  });

})(jQuery);


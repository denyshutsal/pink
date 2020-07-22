// Main nav menu
$(function () {
  // Show or hide the menu when scrolling
  (function () {
    var mainNav = $('.page-header');
    var posEnd = 0;

    $(document).on('scroll', function () {
      var posStart = $(this).scrollTop();

      if (posStart > posEnd) {
        mainNav.addClass('page-header--hidden');
      } else {
        mainNav.removeClass('page-header--hidden');
      }
      posEnd = posStart;
    });
  })();

  // Open or close main nav menu
  (function () {
    $('.nav-toggle').on('click', function () {
      $('body').toggleClass('nav-open');
      $('.content-wrapper').toggleClass('content-wrapper--hidden');
    });
  })();

  // Сlose main nav menu after selecting its item & select the current menu link
  (function () {
    var mainNavLink = $('.main-nav__link');

    mainNavLink.on('click', function () {
      mainNavLink.removeClass('main-nav__link--active');
      $(this).addClass('main-nav__link--active');
      $('body').removeClass('nav-open');
      $('.content-wrapper').removeClass('content-wrapper--hidden');
    });
  })();

  // Switch mobile main nav menu to desktop menu form when window width > 1200 pixels
  (function () {
    $(window).resize(function () {
      if ($(window).width() > 1200) {
        $('body').removeClass('nav-open');
        $('.content-wrapper').removeClass('content-wrapper--hidden');
      }
    });
  })();
});

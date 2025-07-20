(function ($) {
  "use strict";

  // Dropdown on mouse hover
  $(document).ready(function () {
    function toggleNavbarMethod() {
      if ($(window).width() > 992) {
        $(".navbar .dropdown")
          .on("mouseover", function () {
            $(".dropdown-toggle", this).trigger("click");
          })
          .on("mouseout", function () {
            $(".dropdown-toggle", this).trigger("click").blur();
          });
      } else {
        $(".navbar .dropdown").off("mouseover").off("mouseout");
      }
    }
    toggleNavbarMethod();
    $(window).resize(toggleNavbarMethod);

    // Initialize animations on page load
    $(".section-title, .courses-item, .team-item, .testimonial-carousel").each(
      function () {
        $(this).addClass("animate-fade-in-up");
      }
    );

    // Animate stats counters
    $(".bg-success, .bg-primary, .bg-secondary, .bg-warning").addClass(
      "animate-fade-in-up"
    );

    // Add hover effects to social icons
    $(".social-icon").hover(
      function () {
        $(this).addClass("animate-shake");
      },
      function () {
        $(this).removeClass("animate-shake");
      }
    );

    // Animate form inputs on focus
    $("input, textarea")
      .focus(function () {
        $(this).parent().addClass("animate-pulse");
      })
      .blur(function () {
        $(this).parent().removeClass("animate-pulse");
      });

    // Initialize floating animation for header emoji
    $(".emoji-icon").addClass("animate-float");

    // Initialize blink animation for buttons
    $(".blink-button").addClass("blink-button");
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }

    // Scroll animations for sections
    $(".animate-on-scroll").each(function () {
      var position = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();

      if (scroll > position - windowHeight + 200) {
        $(this).addClass("animate-fade-in-up");
      }
    });
  });

  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });

  // Facts counter
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 2000,
  });

  // Courses carousel with hover effects
  $(".courses-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1500,
    loop: true,
    dots: false,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 2,
      },
      768: {
        items: 3,
      },
      992: {
        items: 4,
      },
    },
    onInitialized: function () {
      $(".courses-item").addClass("course-hover-effect");
    },
  });

  // Team carousel with hover effects
  $(".team-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    margin: 30,
    dots: false,
    loop: true,
    nav: true,
    navText: [
      '<i class="fa fa-angle-left" aria-hidden="true"></i>',
      '<i class="fa fa-angle-right" aria-hidden="true"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
    onInitialized: function () {
      $(".team-item").addClass("course-hover-effect");
    },
  });

  // Testimonials carousel
  $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1500,
    items: 1,
    dots: false,
    loop: true,
    nav: true,
    navText: [
      '<i class="fa fa-angle-left" aria-hidden="true"></i>',
      '<i class="fa fa-angle-right" aria-hidden="true"></i>',
    ],
  });

  // Related carousel
  $(".related-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    margin: 30,
    dots: false,
    loop: true,
    nav: true,
    navText: [
      '<i class="fa fa-angle-left" aria-hidden="true"></i>',
      '<i class="fa fa-angle-right" aria-hidden="true"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 1,
      },
      768: {
        items: 2,
      },
    },
  });

  // Add hover effects to buttons
  $(".btn-hover-grow").hover(
    function () {
      $(this).css("transform", "scale(1.05)");
      $(this).css("box-shadow", "0 5px 15px rgba(0,0,0,0.1)");
    },
    function () {
      $(this).css("transform", "scale(1)");
      $(this).css("box-shadow", "none");
    }
  );

  // Add hover effects to course items
  $(".course-hover-effect").hover(
    function () {
      $(this).css("transform", "translateY(-10px)");
      $(this).css("box-shadow", "0 10px 20px rgba(0,0,0,0.1)");
    },
    function () {
      $(this).css("transform", "translateY(0)");
      $(this).css("box-shadow", "none");
    }
  );
})(jQuery);

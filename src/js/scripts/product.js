    $(document).ready(function () {

      var swiper = new Swiper('.product-slider', {
        spaceBetween: 30,
        effect: 'fade',
        allowTouchMove: false,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },

      });


      $(".swiper-pagination-bullet").on({
        'mouseenter': function () {
          $(this).trigger("click");
        },
        'mouseleave': function () {
          $('.swiper-pagination-bullet').first().trigger("click");
        }
      });


    });
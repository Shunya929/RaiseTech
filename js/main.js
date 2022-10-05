jQuery(function($){

  let open = $('.js-hamburger').hasClass('is-open');

  $(".js-hamburger").on("click",function() {
    if(!$('.js-hamburger').hasClass('is-open')) {
      $(".p-header-right").addClass("is-open");
      $(this).addClass("is-open");
      $('h2.c-menu-list').css('display','block');
      $('.js-menu').stop().slideDown(300);
    } else {
      $(this).removeClass("is-open");
      $(".p-header-right").removeClass("is-open");
      $('.js-menu').css('display','none');
      $('.js-menu').stop().slideUp(300);
    }
  })

  $(window).resize(function() {
    $(function() {
      if (window.matchMedia("(max-width: 1200px)").matches) {
        $('.js-menu').css('display','none');
      } else {
        $('.js-menu').css('display','block');
      };
    });
    $(".p-header-right").removeClass("is-open");
    $(".p-humburger").removeClass("is-open");
  });
  
  $("li.c-nav-list").hover(function(){
    $(this).children('.c-submenu').stop().slideToggle(300);
    $(this).toggleClass("is-hover");
  });

  $(window).resize(function() {
    $('.c-submenu').css('display','none');
    $('li.c-nav-list h2::before').css({"display":"intitial", "position":"intitial", "content":"intitial", "top":"intitial", "right":"intitial", "height":"intitial", "width":"intitial", "background-color":"intitial"});
    $("li.c-nav-list").removeClass("is-hover");
  });

  $(window).on('scroll', function() {
    scrolled = $(window).scrollTop();
    let weight1 = 0.4;
    let weight2 = 0.05;
    $(function() {
      if (window.matchMedia("(max-width: 767px)").matches) {
        $('.c-students-img1').css( 'top', 20 - scrolled * weight1 + 'px' );
        $('.c-students-img2').css( 'top', 20 - scrolled * weight2 + 'px' );
      } else {
        $('.c-students-img1').css( 'top', 0 - scrolled * weight1 + 'px' );
        $('.c-students-img2').css( 'top', 0 - scrolled * weight2 + 'px' );
      };
    });
  });
  });

  
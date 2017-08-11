// This function is use to change main banner in landing page
function changeMainBanner(title, color, description, textColor, imgUri) {
  $('#banner-title').html(title);
  $('#banner-title').css('color', textColor);
  $('#banner-title-second').html(title);
  $('#banner-title-second').css('color', textColor);
  $('#banner-desc').html(description);
  $('#banner-desc').css('color', textColor);
  $('.box-main').removeClass('endless-runner');
  $('.box-main').css('background-color',color);
  $('#banner-image').attr('src', imgUri);
  $('.box-main').find('.btn').attr('onclick','playGame("'+title+'")');
}

// This function is use to perform toggle navigation on tablet and smartphone screen
function sideNav() {
  if ($('aside').css('transform') == 'matrix(1, 0, 0, 1, -250, 0)') {
    $('aside').css({
      'visibility':'visible',
      'transform':'translateX(0)',
    });
  }
  else {
    $('aside').css({
      'visibility':'visible',
      'transform':'translateX(-250px)',
    });
  }
}

$(document).ready(function () {
  // This event is use to handle click event on toolbar
  $('.toolbar').on('click',function () {
    sideNav();
  });

  // This event is use to handle click event on search menu
  $('#search').on('click',function () {
    sideNav();
  });

  // This event is use to handle resize event on window
  $(window).on('resize',function () {
    if ($(window).width() > 768) {
      $('aside').css({
        'visibility':'visible',
        'transform':'translateX(0)',
      });
    }
    else {
        $('aside').css({
          'visibility':'visible',
          'transform':'translateX(-250px)',
        });
    }
  });

  // Handle open modal event
  $('[data-popup-open]').on('click', function(e)  {
    var targeted_popup_class = jQuery(this).attr('data-popup-open');
    $('[data-popup="' + targeted_popup_class + '"]').fadeIn(350);
    e.preventDefault();
    // $('body').css('overflow-y','hidden');
  });

  // Handle close modal event
  $('[data-popup-close]').on('click', function(e)  {
    var targeted_popup_class = jQuery(this).attr('data-popup-close');
    $('[data-popup="' + targeted_popup_class + '"]').fadeOut(350);
    e.preventDefault();
    // $('body').css('overflow-y','auto');
  });
});

jQuery(document).ready(function ($) {
  $(window).stellar({ 
    horizontalScrolling: false
  });

  var links = $('.navigation').find('li')
    , slide = $('.slide')
    , button = $('.button')
    , mywindow = $(window)
    , htmlbody = $('html,body');

  slide.waypoint(function(event, direction) {
    var dataslide = $(this).attr('data-slide');

    // Update the navigation links based on where the document is moving.
    if (direction === 'down') {
      $('.navigation li[data-slide="' + dataslide + '"]').addClass('active').prev().removeClass('active');
    }
    else {
      $('.navigation li[data-slide="' + dataslide + '"]').addClass('active').next().removeClass('active');
    }
  });

  mywindow.scroll(function () {
    // Anytime the windows is at the top, ensure that the first menu item
    // is the active one.
    if (mywindow.scrollTop() === 0) {
      $('.navigation li[data-slide="1"]').addClass('active');
      $('.navigation li[data-slide="2"]').removeClass('active');
      $('.navigation li[data-slide="3"]').removeClass('active');
    }
  });

  function goToByScroll(dataslide) {
    htmlbody.animate({
      scrollTop: $('.slide[data-slide="' + dataslide + '"]').offset().top
    }, 1500, 'easeInOutQuint');
  }

  links.click(function (e) {
    e.preventDefault();
    dataslide = $(this).attr('data-slide');
    goToByScroll(dataslide);
  });

  button.click(function (e) {
    e.preventDefault();
    dataslide = $(this).attr('data-slide');
    goToByScroll(dataslide);
  });
});

/**
 * Validate the sign up form and logs errors out to an unordered
 * list directly above the form.
 */

var validateForm = function() {
  var emailTest = /\S+@\S+\.\S+/
    , email     = $('#email').val()
    , name      = $('#name').val()
    , $errors   = $('.errors')
    , err       = [];

  $errors.hide().empty();

  if (!emailTest.test(email)) {
    err.push($('<li>', { text: 'Enter a valid email address' }));
  }

  if (name.length === 0) {
    err.push($('<li>', { text: 'Enter your name' }));
  }

  for (var i = err.length - 1; i >= 0; i--) {
    $errors.append(err[i]);
  }

  $errors.fadeIn();

  return err.length === 0;
};

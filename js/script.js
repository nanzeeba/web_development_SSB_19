
// slick start
$('.center').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});

// counter js start
jQuery(document).ready(function($) {
  $('.counter').counterUp({
      delay: 10,
      time: 1000
    });
  });

// wow js

wow = new WOW(
      {
        animateClass: 'animated',
        offset:       100,
        callback:     function(box) {
          console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
        }
      }
    );
    wow.init();
    document.getElementById('moar').onclick = function() {

      var section = document.createElement('section');
      section.className = 'section--blue wow slideInLeft';
      this.parentNode.insertBefore(section, this);

       var section = document.createElement('section');
      section.className = 'section--gold wow slideInRight';
      this.parentNode.insertBefore(section, this);

    };

/*...........extra start..........*/


/*...........extra end..........*/
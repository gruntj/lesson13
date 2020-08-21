  $('.slider-block-1').slick({

  	autoplay:true,
  	autoplaySpeed:2000,
  	speed:2000,
  	dots:true,
    centerMode: false,
  	arrows:false,
  	 responsive: [
    {
      breakpoint: 830,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 1,
        dots: false,
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
         dots: false,
        centerPadding: '0px',
        slidesToShow: 1
      }
    }
  ]

  });




  $('.slider-2').slick({

  	autoplay:true,
  	autoplaySpeed:2000,
  	speed:2000,
  	dots:false,
  	arrows:true,
  	slidesToShow: 6,
     centerPadding: '0px',
  	 responsive: [
    {
      breakpoint: 906,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 1,
      }
    }
  ]

  });


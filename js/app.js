$(function(){
    // navbar
    let togglerBtn = $(".myTogglerBtn");
    togglerBtn.click(function(){
        let menu = $("nav #myNavbar ul");
        menu.toggleClass("menuActive");
// logo
        let logo = $("nav .myLogo");
        logo.toggleClass("activeLogo");     

});  

 // banner
$('.banner-slider').slick({
    infinite: true,
    slidesToShow: 1,
    arrows: false,
  
  
});
// slick for service
$(".service-slider").slick({
    slidesToShow: 3,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 600 ,
        settings: {
          slidesToShow: 1,
        }
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });




});

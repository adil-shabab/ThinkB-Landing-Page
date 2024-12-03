document.addEventListener("DOMContentLoaded", function () {
    const sliders = document.querySelectorAll(".logos-slide");

    sliders.forEach(slider => {
      const clone = slider.cloneNode(true);
      slider.parentElement.appendChild(clone);
    });
  });

  


  $(document).ready(function () {
    $('.customer-review-slider').slick({
        dots: true,              // Enable navigation dots
        infinite: true,          // Infinite loop
        speed: 500,              // Transition speed
        slidesToShow: 3,         // Show 1 slide at a time
        slidesToScroll: 1,       // Scroll 1 slide at a time
        autoplay: true,          // Enable autoplay
        autoplaySpeed: 3000,     // Autoplay speed
        arrows: false            // Disable navigation arrows
    });
});
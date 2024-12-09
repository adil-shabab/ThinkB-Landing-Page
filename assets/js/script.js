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
        slidesToShow: 3,         // Show 3 slides at a time (default)
        slidesToScroll: 1,       // Scroll 1 slide at a time
        autoplay: true,          // Enable autoplay
        autoplaySpeed: 3000,     // Autoplay speed
        arrows: false,           // Disable navigation arrows
        responsive: [
            {
                breakpoint: 1024, // For devices smaller than 1024px
                settings: {
                    slidesToShow: 2, // Show 2 slides at a time
                    slidesToScroll: 1 // Scroll 1 slide at a time
                }
            },
            {
                breakpoint: 768, // For devices smaller than 768px
                settings: {
                    slidesToShow: 1, // Show 1 slide at a time
                    slidesToScroll: 1 // Scroll 1 slide at a time
                }
            }
        ]
    });
});


const toggleButton = document.getElementById('toggleButton');
    const toggleParagraph = document.getElementById('toggleParagraph');

    toggleButton.addEventListener('click', () => {
      if (toggleParagraph.style.display === 'none') {
        toggleParagraph.style.display = 'block';
        toggleButton.textContent = '-'; // Change "+" to "-"
      } else {
        toggleParagraph.style.display = 'none';
        toggleButton.textContent = '+'; // Change "-" to "+"
      }
    });




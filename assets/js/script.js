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


const toggleButtons = document.querySelectorAll('.toggleButton');
const toggleParagraphs = document.querySelectorAll('.toggleParagraph');

toggleButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    // Toggle the display of the corresponding paragraph
    const paragraph = toggleParagraphs[index];
    const icon = button.querySelector('i');

    if (paragraph.style.display === 'none') {
      paragraph.style.display = 'block';
      icon.classList.remove('fa-plus');
      icon.classList.add('fa-minus');
    } else {
      paragraph.style.display = 'none';
      icon.classList.remove('fa-minus');
      icon.classList.add('fa-plus');
    }
  });
});


function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
function scrollToBox() {
  document.getElementById("quote-box").scrollIntoView({ behavior: "smooth" });
}




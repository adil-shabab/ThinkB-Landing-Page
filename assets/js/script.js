document.addEventListener("DOMContentLoaded", function () {
    const sliders = document.querySelectorAll(".logos-slide");

    sliders.forEach(slider => {
      const clone = slider.cloneNode(true);
      slider.parentElement.appendChild(clone);
    });
  });
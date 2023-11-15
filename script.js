var navLinks = document.getElementById("navLinks");
function showMenuBar() {
  navLinks.style.right = "0";
}
function hideMenuBar() {
  navLinks.style.right = "-200px"
}

const initSlider = () => {
  const imgList = document.querySelector(".slider-wrapper .img-list");
  const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button");
  const sliderScroll = document.querySelector(".container .slider-scroll");
  const sliderScrollThumb = document.querySelector(".scrollbar-thumb");
  const maxScrollLeft = imgList.scrollWidth - imgList.clientWidth;



  slideButtons.forEach(button => {
    button.addEventListener("click", () => {
      const direction = button.id === "prev-img" ? -1 : 1;
      const scrollAmount = imgList.clientWidth * direction;
      imgList.scrollBy({left: scrollAmount, behaviour: "smooth"});
    });
  });

  const handleButtons = () => {
    slideButtons[0].style.display = imgList.scrollLeft <= 0 ? "none" : "block";
    slideButtons[1].style.display = imgList.scrollLeft >= maxScrollLeft ? "none" : "block";
  }

  const updateScroll = () => {
    const ScrollPosition = imgList.scrollLeft;
    const Thumb = (ScrollPosition / maxScrollLeft) * (sliderScroll.clientWidth - sliderScrollThumb.offsetWidth);
    sliderScrollThumb.style.left = `${Thumb}px`;
  }

  imgList.addEventListener("scroll", () => {
    handleButtons();
    updateScroll();
  });
}

window.addEventListener("load", initSlider)
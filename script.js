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
  slideButtons.forEach(button => {
    button.addEventListener("click", () => {
      const direction = button.id === "previous-img" ? -1 : 1;
      const scrollAmount = imgList.clientWidth * direction;
      imgList.scrollBy({left:scrollAmount, behaviour: "smooth"});
    });
  });
}

window.addEventListener("load", initSlider)
const container = document.querySelector(".portfolio");
const items = document.querySelectorAll(".portfolio__item");

function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function scrollToCenter(index) {
  gsap.to(items[index], { duration: 0.5, top: "150px", opacity: 1 });
  currentIndex++;
  scrollTicks = 0;
}

let currentIndex = 0;
const scrollThreshold = 75;
let scrollTicks = 0;

container.addEventListener("wheel", (event) => {
  if (currentIndex <= items.length && isElementInViewport(container)) event.preventDefault();

  scrollTicks++;
  if (scrollTicks >= scrollThreshold) {
    scrollToCenter(currentIndex);
  }
});

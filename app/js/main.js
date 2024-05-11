const jabberBtn = document.querySelector('.jabber');
const tooltip = document.querySelector('.footer__tooltip');

jabberBtn.addEventListener('click', function () {
  if (!jabberBtn.disabled) {
    const jabberAddress = jabberBtn.textContent;
    jabberBtn.disabled = true;

    navigator.clipboard.writeText(jabberAddress)
      .then(() => {
        tooltip.classList.add('visible');
        setTimeout(() => {
          tooltip.classList.remove('visible');
          jabberBtn.disabled = false;
        }, 2000);
        jabberBtn.blur();
      })
      .catch((error) => {
        console.error('Error when copying contact:', error);
        jabberBtn.disabled = false;
      });
  }
});

new Swiper('.portfolio__swiper', {
  centeredSlides: true,
  initialSlide: 2,
  slidesPerView: 'auto',
  freeMode: true,
  spaceBetween: 8,
  breakpoints: {
    610: {
      spaceBetween: 15
    },
    530: {
      spaceBetween: 10
    }
  }
});

const html = document.documentElement;
const menuBtn = document.querySelector('.menu-btn');
const headerNav = document.querySelector('.header__mobile');
const anchors = document.querySelectorAll('a.desktop');
const anchorsMobile = document.querySelectorAll('a.header__link.mobile');

menuBtn.addEventListener('click', () => {
  menuBtn.blur();
  html.classList.toggle('active');
  menuBtn.classList.toggle('active');
  headerNav.classList.toggle('active');
});

function scrollToTarget(targetId) {
  const targetSection = document.querySelector(targetId);
  if (targetSection) {
    html.classList.remove('active');
    headerNav.classList.remove('active');
    menuBtn.classList.remove('active');
    setTimeout(() => {
      const targetOffset = targetSection.offsetTop - 50;
      window.scrollTo({top: targetOffset, behavior: 'smooth'});
    }, 400);
  }
}

function handleAnchorClick(event) {
  event.preventDefault();
  const href = this.getAttribute('href');
  const hrefParts = href.split('#');
  if (hrefParts.length === 2) {
    const targetId = '#' + hrefParts[1];
    scrollToTarget(targetId);
  }
}

for (const anchor of anchorsMobile) {
  anchor.addEventListener('click', handleAnchorClick);
  anchor.addEventListener('touchstart', handleAnchorClick, {passive: true});
}

for (const anchor of anchors) {
  anchor.addEventListener('click', handleAnchorClick);
}
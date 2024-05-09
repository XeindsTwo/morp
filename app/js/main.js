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
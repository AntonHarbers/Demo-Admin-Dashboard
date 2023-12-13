const logoContainer = document.querySelector('.logo');

function createCircle() {
  const circle = document.createElement('div');
  const size = Math.random() * 25;

  circle.classList.add('fire');
  circle.style.width = `${size + Math.random()}px`;
  circle.style.height = `${size + Math.random()}px`;

  logoContainer.appendChild(circle);

  setTimeout(() => {
    circle.remove();
  }, 1100);
}

setInterval(createCircle, Math.random() * Math.random() * 100);

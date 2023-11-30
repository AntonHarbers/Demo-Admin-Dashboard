const logoContainer = document.querySelector('.logo');

// create a css fire animation by creating many small circles that animate upwards and disappear

// create a function that creates a circle

function createCircle() {
  const circle = document.createElement('div');
  circle.classList.add('fire');
  logoContainer.appendChild(circle);

  // randomize the size
  const size = Math.random() * 25;
  circle.style.width = `${size + Math.random()}px`;
  circle.style.height = `${size + Math.random()}px`;

  setTimeout(() => {
    circle.remove();
  }, 1100);
}

// create a function that calls the createCircle function every 50ms

setInterval(createCircle, Math.random() * Math.random() * 100);

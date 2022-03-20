const images = ['0.jpg', '1.jpg', '2.jpg'];

const chosenImage = images[Math.floor(Math.random() * images.length)];
const backgroundImage = `url(img/${chosenImage})`;

document.body.style.backgroundImage = backgroundImage;
document.body.style.backgroundSize = '100% 100%';

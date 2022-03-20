const clock = document.querySelector('#clock');

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  clock.innerHTML = `<span>${hours}:${minutes}</span>`;
}

getClock();
setInterval(getClock, 1000);

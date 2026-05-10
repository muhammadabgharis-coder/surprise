function showMessage() {
  document.getElementById("secretMessage").innerHTML =
  "Saya rindu awak ❤️";
}

// Countdown
const targetDate = new Date("June 1, 2026 00:00:00").getTime();

const countdownFunction = setInterval(function () {

  const now = new Date().getTime();
  const distance = targetDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  const countdown = document.getElementById("countdown");

  if (countdown) {
    countdown.innerHTML =
      days + " Hari " +
      hours + " Jam " +
      minutes + " Minit " +
      seconds + " Saat ";
  }

  if (distance < 0) {
    clearInterval(countdownFunction);

    if (countdown) {
      countdown.innerHTML = "Dah Sampai Hari Jumpa ❤️";
    }
  }

}, 1000);
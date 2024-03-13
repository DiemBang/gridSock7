let startingMinutes = 0.2;
let time = startingMinutes * 60;
const countdown = document.getElementById("countdown");

function startGameTimer() {
  let intervalId = setInterval(updateCountdown, 1000);

  function updateCountdown() {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    minutes = minutes < 2 ? "0" + minutes : minutes;
    seconds = seconds < 2 ? "0" + seconds : seconds;

    countdown.innerHTML = `${minutes}: ${seconds}`;

    if (time === 0) {
      clearInterval(intervalId);
      console.log("Time's up!");
      countdown.innerText = "00:00";
    }
    time--;
  }
}

export { startGameTimer };

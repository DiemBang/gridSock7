import { showResultPage } from "./resultPage.js";

let startingMinutes;
let time;
const countdown = document.getElementById("countdown");

function startGameTimer() {
  startingMinutes = 2;
  time = startingMinutes * 60;
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
      showResultPage();
    }
    time--;
  }
}

export { startGameTimer };

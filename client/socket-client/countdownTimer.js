let startingMinutes = 2;
let time = startingMinutes * 60;
const countdown = document.getElementById("countdown");

setInterval(updateCountdown, 1000);

function updateCountdown() {
    const minutes = Math.floor(time/60);
    let seconds = time % 60; 

    seconds = seconds < 2 ? '0' + seconds : seconds;

    countdown.innerHTML = `${minutes}: ${seconds}`;
    time--;

    if (count === 0) {
            clearInterval(timer);
            console.log("Time's up!");
          }
}



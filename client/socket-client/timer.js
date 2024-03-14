//Create a callback function with seonds there the timer should start.

// export function timer(seconds, callback) {
//   console.log(`timer started for ${seconds} seconds`);
//   const timer = setTimeout(callback, seconds * 1000);
//   return timer;
// }

export { updateCountdown };

function updateCountdown(secondsRemaining) {
  const countdownToGame = document.getElementById("countdownToGame");
  countdownToGame.textContent = secondsRemaining;
  console.log("UPDATE COUNTDOWN");
}

export function timer(seconds, callback, updateCountdown) {
  console.log(`timer started for ${seconds} seconds`);

  let remainingSeconds = seconds;
  const countdownInterval = setInterval(() => {
    updateCountdown(remainingSeconds);
    remainingSeconds--;

    if (remainingSeconds < 0) {
      clearInterval(countdownInterval);
      callback();
    }
  }, 1000);
  //   const timer = setTimeout(callback, seconds * 1000);
  //   return timer;
}

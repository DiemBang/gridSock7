
// Create a callback function with seonds there the timer should start.
export function timer(seconds, callback) {
    console.log(`timer started for ${seconds} seconds`);
    const timer = setTimeout(callback, seconds * 1000);
    return timer;
}
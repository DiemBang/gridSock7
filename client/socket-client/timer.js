export function timer(seconds, callback) {
    console.log(`timer started for ${seconds} seconds`);
    const timer = setTimeout(() => {
        if (callback) {
            callback();
        }
    }, seconds * 1000);
    return timer;
}
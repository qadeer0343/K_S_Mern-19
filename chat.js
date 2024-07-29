let hours = 0;
let minutes = 0;
let seconds = 0;

function updateTime() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      hours++;
      if (hours === 24) {
        hours = 0;
      }
    }
  }

  const formattedHours = (hours < 10 ? "0" : "") + hours;
  const formattedMinutes = (minutes < 10 ? "0" : "") + minutes;
  const formattedSeconds = (seconds < 10 ? "0" : "") + seconds;

  console.clear();
  console.log(`${formattedHours}:${formattedMinutes}:${formattedSeconds}`);
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function startClock() {
  for (;;) {
    // infinite for loop
    updateTime();
    await delay(1000); // Wait for 1 second
  }
}

startClock();

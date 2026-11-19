setTimeout(setup, 0);

function setup() {
  const target = new Date();
  const userInput = prompt("Please target hour:");
  
  if (userInput != null)
  {
    const hours = userInput;
    userInput = prompt("Please target minutes:");
    const mins = userInput;
    userInput = prompt("Please target seconds:");
    const secs = userInput;
    target.setTime(hours, minutes, seconds);
    reloadAtTime(target);
  }
}

function reloadAtTime(date) {
  const now = new Date();
  const target = date;

  // If the target time has already passed today, set it for tomorrow
  if (target <= now) {
    target.setDate(target.getDate() + 1);
  }

  const timeUntilReload = target - now;

  setTimeout(() => {
    window.location.reload();
  }, timeUntilReload);
}

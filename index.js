setTimeout(setup, 0);

function setup() {
  const target = new Date();
  const time;
  const userInput = prompt("Please enter your name:");
  if (userInput != null)
  {
    time = userInput;
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

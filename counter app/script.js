
let countdownInterval;

    function startCountdown() {
      clearInterval(countdownInterval); // Clear previous intervals if any
      const input = document.getElementById("countInput");
      const display = document.getElementById("countDisplay");
      let count = parseInt(input.value);

      if (isNaN(count) || count < 0) {
        display.textContent = "Enter a valid number!";
        return;
      }

      display.textContent = count;

      countdownInterval = setInterval(() => {
        count--;
        display.textContent = count;

        if (count <= 0) {
          clearInterval(countdownInterval);
          display.textContent = "Time's up!";
        }
     },1000);
}
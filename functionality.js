// clock updates and theme changes
document.addEventListener("DOMContentLoaded", () => {
  const clock = document.getElementById("clock");
  const themeSelector = document.getElementById("theme");

  // Function to update the clock
  function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");
    clock.textContent = `${hours}:${minutes}:${seconds}`;
  }

  // Function to change the theme
  function changeTheme() {
    const theme = themeSelector.value;
    document.body.className = theme; // Set body class to the selected theme
  }

  // Initial Clock Update
  updateClock();

  // Update clock every second
  setInterval(updateClock, 1000);

  // Listen for theme changes
  themeSelector.addEventListener("change", changeTheme);
});

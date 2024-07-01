document.addEventListener("DOMContentLoaded", () => {
  // Function to update the current time in UTC
  function updateTime() {
    const now = new Date();
    const utcTime = now.toUTCString().split(" ")[4];
    document.getElementById("current-time").textContent = utcTime;
  }

  //Function to update the current day of the week
  function updateDay() {
    const now = new Date();
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const day = days[now.getUTCDay()];
    document.getElementById("current-day").textContent = day;
  }

  //Update time and day immediately
  updateTime();
  updateDay();

  //Update time every second
  setInterval(updateTime, 1000);
});

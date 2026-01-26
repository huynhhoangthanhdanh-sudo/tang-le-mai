function changeBackground() {
  const hours = new Date().getHours();
  const style = document.getElementById("style");

  if (hours >= 5 && hours <= 10) {
    style.href = "styleMorning.css";
  } else if (hours > 10 && hours <= 15) {
    style.href = "styleNoon.css";
  } else if (hours > 15 && hours <= 19) {
    style.href = "styleAfternoon.css";
  } else {
    style.href = "styleNight.css";
  }
}
changeBackground();
setInterval(changeBackground, 60000);

function changeLink() {
  const hours = new Date().getHours();
  const link = document.getElementById("link");

  if (hours >= 5 && hours <= 12) {
    link.href = "https://www.youtube.com/shorts/UFncnd1APKw";
  }
}
changeLink();

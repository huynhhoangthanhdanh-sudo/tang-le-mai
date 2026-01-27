function changeLink() {
  const hours = new Date().getHours();
  const link = document.getElementById("link");
  const paragraph = document.getElementById("paragraph");

  if (hours >= 5 && hours <= 10) {
    link.href = "https://www.youtube.com/shorts/UFncnd1APKw";
    link.textContent = "Hello";
    paragraph.textContent = "Good morning 🌞";
  } else if (hours > 10 && hours <= 15) {
    link.textContent = "...";
    paragraph.textContent = "Have a nice day!!!";
  } else if (hours > 15 && hours <= 19) {
    link.textContent = "Enjoy";
    paragraph.textContent = "Good afternoon ✨";
  } else {
    link.textContent = "Sweet dream";
    paragraph.textContent = "Good night";
  }
}
changeLink();

function changeLink() {
  const hours = new Date().getHours();
  const link = document.getElementById("link");
  const paragraph = document.getElementById("paragraph");

  if (hours >= 5 && hours <= 10) {
    link.src = "https://www.youtube.com/embed/UFncnd1APKw";
    link.textContent = "Hello";
    paragraph.textContent = "Good morning 🌞";
  } else if (hours >= 10 && hours <= 15) {
    link.src = "";
    link.textContent = "...";
    paragraph.textContent = "Have a nice day!!!";
  } else if (hours >= 15 && hours <= 19) {
    link.src = "";
    link.textContent = "Enjoy";
    paragraph.textContent = "Good afternoon ✨";
  } else {
    link.textContent = "Sweet dream";
    paragraph.textContent = "Good night";
  }
}
changeLink();

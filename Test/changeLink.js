function changeLink() {
  const hours = new Date().getHours();
  const button = document.getElementById("click");
  const link = document.getElementById("link");
  const paragraph = document.getElementById("paragraph");
  let Morning = [
    "Good morning🌞",
    "Have a beautiful day 🧡🧡",
    "BELIEVE IN YOURSELF ❤️‍🔥❤️‍🔥❤️‍🔥",
    "The present is today and today is a present🎁🎁🏆",
  ];
  let Noon = [
    "50% of the day, 50% ahead 🕛🕛",
    "Let's take a break 🎵🎵",
    "Bon appétit 🍚🍚",
    "Come back full of energy in the afternoon ⚽️⚽️⚽️",
  ];
  let Afternoon = [
    "Good afternoon ✨",
    "Time to go home 🚌🚌🚌",
    "Enjoy the rest of your day 🌅🌅🌅",
    "Don't forget to eat something 🍱🍱🍱",
  ];
  let BeforeNight = [
    "Finally! After a long day 🌕🌕",
    "How was your day? 🥰🥰",
    "Today is almost over, just wrap up and prepare for another day",
    "a few days left🚍🚍🚍",
  ];
  let Night = [
    "Good night💤💤💤",
    "Sleep well💤💤💤",
    "Gud nite💤💤💤",
    "Nighty night💤💤💤",
  ];

  if (hours >= 5 && hours < 10) {
    link.src = "https://www.youtube.com/embed/hcau3Lz55l0";
    button.textContent = "Hello";
    paragraph.textContent = Morning[Math.floor(Math.random() * Morning.length)];
  } else if (hours >= 10 && hours < 15) {
    link.src = "https://www.youtube.com/embed/G2XyX5eb4mo";
    button.textContent = "Play";
    paragraph.textContent = Noon[Math.floor(Math.random() * Noon.length)];
  } else if (hours >= 15 && hours < 20) {
    link.src = "https://www.youtube.com/embed/iXwHptATrjY";
    button.textContent = "Enjoy";
    paragraph.textContent =
      Afternoon[Math.floor(Math.random() * Afternoon.length)];
  } else if (hours >= 20 && hours < 22) {
    link.src = "https://www.youtube.com/embed/WqoVxjNv9oQ";
    button.textContent = "Relax";
    paragraph.textContent =
      BeforeNight[Math.floor(Math.random() * BeforeNight.length)];
  } else {
    button.textContent = "😴😴😴😴";
    paragraph.textContent = Night[Math.floor(Math.random() * Night.length)];
  }
}
changeLink();

function updateClock() {
  const now = new Date();

  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  document.getElementById("clock").textContent =
    `${hours}:${minutes}:${seconds}`;
}

updateClock(); // chạy ngay khi load
setInterval(updateClock, 1000); // cập nhật mỗi giây

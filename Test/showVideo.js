function show() {
  const vid = document.getElementById("link");
  vid.style.opacity = 1;
  vid.style.pointerEvents = "auto";
  document.getElementById("click").style.opacity = 0;
  document.getElementById("click").style.zIndex = -10;
}

function playSound(e) {
  //console.log(e)
  //console.log(e.keyCode)
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  //console.log(audio)
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  //console.log(key)
  key.classList.add("playing");
}
function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("playing");
}
const keyboard = document.querySelectorAll(".key");
keyboard.forEach((key) =>
  key.addEventListener("transitionend", removeTransition)
);
window.addEventListener("keydown", playSound);

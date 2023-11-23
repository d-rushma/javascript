window.addEventListener("keydown", playDrum);
function playDrum(e) {
  const sound = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!sound) return;
  sound.currentTime = 0;
  sound.play();
  key.classList.add("playing");
  setTimeout(() => {
    key.classList.remove("playing");
  }, 100);
}

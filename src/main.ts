// listen to keyboard input

window.addEventListener("keydown", handleKeyDown);
window.addEventListener("keyup", handleKeyUp);

function handleKeyDown(ev: KeyboardEvent) {
  const keyCode = ev.keyCode;
  const kbdEl = document.querySelector(`.key[data-key="${keyCode}"]`);
  if (!kbdEl) return;
  kbdEl.classList.add("playing");
  playAudio(keyCode);
}

function handleKeyUp(ev: KeyboardEvent) {
  const keyCode = ev.keyCode;
  const kbdEl = document.querySelector(`.key[data-key="${keyCode}"]`);
  if (!kbdEl) return;
  kbdEl.classList.remove("playing");
}

function playAudio(dataKey: number) {
  const audioEl = document.querySelector<HTMLAudioElement>(
    `audio[data-key="${dataKey}"]`
  );

  if (!audioEl) return;
  audioEl.currentTime = 0;
  audioEl.play();
}

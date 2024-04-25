const audio = document.getElementById("audio");
const playPauseBtn = document.getElementById("playPauseBtn");
let isPlaying = false;

function togglePlay() {
  if (isPlaying) {
    audio.pause();
    isPlaying = false;
    playPauseBtn.classList.remove("pause");
    playPauseBtn.classList.add("play");
  } else {
    audio.play();
    isPlaying = true;
    playPauseBtn.classList.remove("play");
    playPauseBtn.classList.add("pause");
  }
}
playPauseBtn.addEventListener("click", togglePlay);

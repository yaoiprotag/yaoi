// script.js

const buttons = document.querySelectorAll('.playButton');
const audioPlayer = document.getElementById('audioPlayer');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const soundFile = button.getAttribute('data-sound');
    audioPlayer.src = soundFile;
    audioPlayer.play();
  });
});

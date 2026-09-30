const wavesurfer = WaveSurfer.create({
    container: "#waveform",
    waveColor: "#8b1111",
    progressColor: "#e32629",
    height: 50,
    barWidth: 2,
    barGap: 1,
    barRadius: 2
});

wavesurfer.load("audio/song.mp3"); /* this say “Hey wavesurfer, load this song.” */

const playButton = document.getElementById("play-button");

playButton.onclick = () => {
    wavesurfer.playPause(); /* this plays and pauses the music when clicked */
};

wavesurfer.on("play", () => {
    playButton.textContent = "❚❚"; /* changes the text inside your button */
});

wavesurfer.on("pause", () => {
    playButton.textContent = "▶";
});
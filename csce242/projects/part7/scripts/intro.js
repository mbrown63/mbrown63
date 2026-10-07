const navToggle = document.getElementById("nav-toggle");
const mainNav = document.getElementById("main-nav");

if (navToggle && mainNav) {
    navToggle.onclick = () => {
        mainNav.classList.toggle("show");
    };
}

const waveform = document.getElementById("waveform");
const soundPlayButton = document.getElementById("sound-play-button");

if (waveform && soundPlayButton) {

    const wavesurfer = WaveSurfer.create({
        container: "#waveform",
        waveColor: "#8b1111",
        progressColor: "#e32629",
        height: 50,
        barWidth: 2,
        barGap: 1,
        barRadius: 2
    });

    wavesurfer.load("audio/song.mp3");/* this say “Hey wavesurfer, load this song.” */

    wavesurfer.on("error", (error) => {
        console.log(error);
    });

    soundPlayButton.onclick = () => {
        wavesurfer.playPause(); /* this plays and pauses the music when clicked */
    };

    wavesurfer.on("play", () => {
        soundPlayButton.textContent = "❚❚"; /* changes the text inside your button */
    });

    wavesurfer.on("pause", () => {
        soundPlayButton.textContent = "▶";
    });
}


const musicWaveform = document.getElementById("music-waveform");
const playButton = document.getElementById("play-button");
const currentTime = document.getElementById("current-time");
const totalTime = document.getElementById("total-time");

// Only runs the music player if the waveform and play button are on the page
if (musicWaveform && playButton) {

    // Creates the waveform and controls how it looks
    const musicWavesurfer = WaveSurfer.create({
        container: "#music-waveform",
        waveColor: "#5c0b0b",
        progressColor: "#e32629",
        height: 35,
        barWidth: 2,
        barGap: 1,
        barRadius: 2 // Rounds the wave bars
    });

    musicWavesurfer.load("audio/the-sound.mp3");

    playButton.onclick = () => {
        musicWavesurfer.playPause();
    };

    musicWavesurfer.on("play", () => {
        playButton.textContent = "❚❚";
    });

    musicWavesurfer.on("pause", () => {
        playButton.textContent = "▶";
    });

    // Updates the current song time while the song is playing
    musicWavesurfer.on("timeupdate", (time) => {
        // Changes the time into minutes and seconds
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);

        // Shows the current time like 0:05 instead of 0:5
        currentTime.textContent =
            minutes + ":" + seconds.toString().padStart(2, "0");
    });

    musicWavesurfer.on("ready", (duration) => {
        const minutes = Math.floor(duration / 60);
        const seconds = Math.floor(duration % 60);

        // Shows the total song time
        totalTime.textContent =
            minutes + ":" + seconds.toString().padStart(2, "0");
    });
}
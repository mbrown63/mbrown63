const getMusic = async () => {
    const url = "https://mbrown63.github.io/mbrown63/csce242/projects/part7/music.json";
    const response = await fetch(url);
    const music = await response.json();

    console.log(music);
};

getMusic();
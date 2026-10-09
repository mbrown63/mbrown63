const getMusic = async () => {
    const url = "https://mbrown63.github.io/mbrown63/csce242/projects/part7/music.json";
    const response = await fetch(url);
    const music = await response.json();

    console.log(music);

    const albumContainer = document.getElementById("album-container");

    music.forEach((album) => {
        const albumCard = document.createElement("div");
        albumCard.classList.add("album");

        const img = document.createElement("img");
        img.src = album.img_name;
        img.alt = album.title;
        albumCard.appendChild(img);

        const title = document.createElement("h3");
        title.innerHTML = album.title;
        albumCard.appendChild(title);

        const type = document.createElement("p");
        type.innerHTML = album.type + " • " + album.year;
        albumCard.appendChild(type);

        const description = document.createElement("p");
        description.innerHTML = album.description;
        albumCard.appendChild(description);

        const button = document.createElement("a");
        button.classList.add("music-button");
        button.href = "#";
        button.innerHTML = "LISTEN →";
        albumCard.appendChild(button);

        albumContainer.appendChild(albumCard);

    });

};

getMusic();
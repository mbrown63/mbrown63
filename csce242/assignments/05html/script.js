const speech = document.getElementById("speech");
const drink = document.getElementById("drink");
const drinkMessage = document.getElementById("drink-message");
const sun = document.getElementById("sun");
const sticker = document.getElementById("sticker");

const showSpeech = () => {
    speech.innerHTML += "<div class='speech-bubble'>Hi</div>";
};

const showDrink = () => {
    drinkMessage.innerHTML = drink.value + ": Nice Choice!";
};

const addSticker = () => {
    const emoji = document.createElement("span");
    emoji.innerHTML = "😊";
    emoji.classList.add("emoji");

    sticker.appendChild(emoji);
};

speech.addEventListener("click", showSpeech);
drink.addEventListener("change", showDrink);
sun.addEventListener("click", addSticker);
//shows speech bubble when column is clicked
document.getElementById("speech").onclick = (e) => {
    document.getElementById("speech-bubble").classList.toggle("show");
};

//shows beverage choice when selected
document.getElementById("drink").onchange = (e) => {
    document.getElementById("drink-message").innerHTML = e.target.value + ": Nice Choice!";
};

//adds sticker when image is clicked
document.getElementById("sun").onclick = (e) => {
    document.getElementById("emoji").classList.toggle("show");
};
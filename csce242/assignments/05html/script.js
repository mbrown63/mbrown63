//shows speech bubble when column is clicked
document.getElementById("speech").onclick = (e) => {
    document.getElementById("speech-bubble").classList.toggle("show");
    e.target.innerHTML = "done!";
};

//shows beverage choice when selected
document.getElementById("drink").onchange = (e) => {
    document.getElementById("drink-message").innerHTML = e.target.value + ": Nice Choice!";
};

//adds sticker when image is clicked
document.getElementById("sun").onclick = (e) => {
    document.getElementById("emoji").classList.toggle("show");
};

//when you change the number of days since you watered your plant
//show a message and change the image
document.getElementById("txt-num-days").onkeyup = (e) => {
    const numDays = e.target.value;
    console.log(numDays + 7);
    const pMessage = document.getElementById("p-plant-msg");
    const plantImage = document.getElementById("img-plant");
    plantImage.classList.remove("hidden");
    
    if (numDays <= 2) {
        pMessage.innerHTML = `Let your plant rest it's only been ${numDays} days.`;
        plantImage.src = 
    } else if(numDays <= 5){
        pMessage.innerHTML = `Time to water its been ${numDays} days`;
        plantImage.src = 
    } else if (numDays <= 7) {
        pMessage.innerHTML = `Oh no your plant is wiltiing it been ${numDays} days.`;
        plantImage.src = 
    } else {
        pMessage.innerHTML = "Your plant is a gooner";
        plantImage.src = 
    }
}

//counting
let countInterval;
let count = 0;
const pCount = document.getElementById("p-count");
const btnStart = document.getElementById("btn-start");
const btnPause = document.getElementById("btn-pause");
const btnStop = document.getElementById("btn-stop");
btnPause.disabled = true
btnStart.disabled = true
btnStop.disable = true;

document.getElementById("btn-start").onclick = () =>
{
    countInterval = setInterval(()=>{
        pCount.innerHTML = ++count;
    },500); //every half a sec the function (inside the () ) is beign called
    btnStart.disable = true;
    btnpause.disable = false;
    btnStop.disable = false;
};
document.getElementById("btn-pause").onclick = () =>
{
    clearInterval (countInterval);
    btnStart.disable = false
    btnpause.disable = true;
    btnStop.disable = true;
};
document.getElementById("btn-stop").onclick = () =>
{
    count=0;
    pCount.innerHTML = "";
    clearInterval (countInterval);
    btnStart.disable = false;
    btnPause.disable = true;
    btnStop.disable = true;
    
};

//date display
setInterval(()=>{
    const pDisplay = document.getElementById("date-display");
    const today = new Date ();
    const seconds = today.getSeconds();
    pDisplay.innerHTML = seconds;
}, 1000);
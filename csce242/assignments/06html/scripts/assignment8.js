//exercise 1
document.getElementById("txt-missing-days").onkeyup = (e) => {
    const numDays = parseInt(e.target.value);
    const pMessage = document.getElementById("p-missing-message");
    const pWarning = document.getElementById("p-missing-warning");

    const percent = numDays / 25 * 7;

    if(numDays <= 2){
        pMessage.innerHTML = `You will lose ${percent.toFixed(1)}% for missing ${numDays} days.`;
        pWarning.innerHTML = "See you next class! ";
    } else if(numDays <= 5){
        pMessage.innerHTML = `You will lose ${percent.toFixed(1)}% for missing ${numDays} days.`;
        pWarning.innerHTML = "Those classes your missing are adding up.";
    } else if(numDays <= 8) {
        pMessage.innerHTML = `You will lose ${percent.toFixed(1)}% for skipping ${numDays} days.`;
        pWarning.innerHTML = "This is not an online class, you are missing valuable learning opportunities.";
    } else {
        pMessage.innerHTML = `You will lose ${percent.toFixed(1)}% for missing ${numDays} days.`;
        pWarning.innerHTML = "You are missing WAY to many class! You get an F!";
    }
}

//exercise 2
const lastDay = new Date("December 4, 2026");
const today = new Date();

const timeDifference = lastDay.getTime() - today.getTime();
const daysLeft = Math.ceil(timeDifference / (1000 * 60 * 60 * 24)); /* 1000 = 1sec 60 = 1min 60 = 1hr 24 = 1 day */

document.getElementById("p-days-left").innerHTML = `You have ${daysLeft} days left in the semester`;

const pSemesterMessage = document.getElementById("p-semester-message");

if(daysLeft > 100){
    pSemesterMessage.innerHTML = "Not time to start counting down yet.";
} else if(daysLeft > 50){
    pSemesterMessage.innerHTML = "The semester is getting closer to the end.";
} else if(daysLeft > 20){
    pSemesterMessage.innerHTML = "The final stretch is coming!";
} else {
    pSemesterMessage.innerHTML = "Almost there! Keep pushing!";
}

//exercise 1 link
document.getElementById("link-exercise1").onclick = (e) => {
    e.preventDefault();
    document.getElementById("exercise1").classList.remove("hidden");
    document.getElementById("exercise2").classList.add("hidden");
};

//exercise 2 link
document.getElementById("link-exercise2").onclick = (e) => {
    e.preventDefault();
    document.getElementById("exercise1").classList.add("hidden");
    document.getElementById("exercise2").classList.remove("hidden");
};

//toggle the navigation
document.querySelector("#toggle-nav").onclick = () => {
    document.querySelector("#main-nav ul").classList.toggle("hide-small");
    document.querySelector("#toggle-nav").classList.toggle("nav-open");
}
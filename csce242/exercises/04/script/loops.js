document.getElementById("btn-loop").onclick = (e) => {
    const loopResult = document.getElementById("loop-result");

    for(let i = 0; i < 10; i++){
        let p = document.createElement("p");
        p.innerHTML = i;
        loopResul.append(p);
    }

document.getElementById("btn-loop-range").onclick = () => {
    const startText = document.getElementById("txt-start");
    const endText = document.getElementById("txt-start");
    const errorStart = document.getElementById("txt-start");
    errorStart.classList.add("hidden")


}
};
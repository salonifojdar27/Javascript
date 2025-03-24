
const bg_button = document.querySelector("#bg")
const body = document.querySelector("body");

function getcolor() {
    const randomNumber = Math.floor(Math.random() * 16777216);
    const randomcode = "#" + randomNumber.toString(16);
    document.body.style.backgroundColor = randomcode;
    document.querySelector("#color").innerText = randomcode;
}

document.getElementById("bg").addEventListener(
    "click",
    getcolor

)

getcolor();
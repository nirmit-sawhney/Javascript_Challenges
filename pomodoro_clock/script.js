let start = document.querySelector(".start");
let min = document.querySelector("#min");
let sec = document.querySelector("#sec");
let ring = document.querySelector(".ring");
let settings = document.querySelector(".settings");

import {
    stopTimer,
    startTimer,
    allowInp,
    disableInp,
    validate
} from "./utility.js";

settings.addEventListener("click", () => {
    stopTimer();
    allowInp();
});

start.addEventListener("click", () => {
    disableInp();
    if (start.innerHTML == "start") {
        if (validate()) {
            alert("Please Enter a valid Time");
            min.value = "00";
            sec.value = "00";
            ring.style.stroke = "#09A65A";
        } else {
            startTimer();
        }
    } else {
        stopTimer();
    }
});

export { start, min, sec, ring };

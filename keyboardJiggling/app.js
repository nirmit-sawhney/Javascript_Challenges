let keys = document.getElementsByClassName("key");
let randomKey, dataKey;

const jiggleRandomKey = () => {
    randomKey = Math.floor((Math.random() * keys.length) - 1);
    keys[randomKey].classList.add("jiggle");
    dataKey = keys[randomKey].getAttribute("data-key");
}

jiggleRandomKey();

document.addEventListener("keydown", (event) => {
    if (event.key.toUpperCase() == dataKey) {
        keys[randomKey].classList.remove("jiggle");
        jiggleRandomKey();
    }
}, true);


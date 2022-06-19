let keys = document.getElementsByClassName("key");
let randomKey, dataKey;

const getRandomKey=(min,max)=>{
    return Math.floor(Math.random() * (max - min) ) + min;
}

const jiggleRandomKey = () => {
    randomKey = getRandomKey(0,keys.length);
    keys[randomKey].classList.add("jiggle");
    dataKey = keys[randomKey].getAttribute("data-key");
}

jiggleRandomKey();

document.addEventListener("keydown", (event) => {
    let pressedKey=event.key.toUpperCase();
    if (pressedKey == dataKey) {
        keys[randomKey].classList.remove("jiggle");
        jiggleRandomKey();
    }else{
        showErrow(pressedKey);
    }
}, true);

const showErrow=(pressedKey)=>{
    let elem=document.querySelector(`button[data-key='${pressedKey}']`);
    elem.classList.add("showerror");
    setTimeout(()=>{
        elem.classList.remove("showerror");
    },300);
}


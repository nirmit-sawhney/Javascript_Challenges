const playAudio=(idx)=> () => {
    const audio=new Audio(`./audio/key-${idx+1}.mp3`);
    audio.play();
};

const pianoFunctionality=()=>{
    const keys=document.querySelectorAll("a");
    keys.forEach((elem,idx)=>{
        elem.addEventListener("click",playAudio(idx));
    });
};

pianoFunctionality();
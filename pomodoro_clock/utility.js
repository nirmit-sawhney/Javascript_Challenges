import {start,ring,min,sec} from './script.js';
let x;
const startTimer=()=>{
    start.innerHTML="stop";
    ring.style.stroke="#09A65A"
    x=setInterval(function(){
        if(min.value==0 && sec.value==0){
            ring.style.stroke="red";
            start.innerHTML="start";
            start.disabled="true";
            clearInterval(x);
            setTimeout(()=>{
                alert("Time is over!!");
                ring.style.stroke="#09A65A"
            },100)
        }
        else{
            if(sec.value==0){
                min.value-=1;
                min.value=('0'+min.value).slice(-2);
                sec.value=59;
            }else{
                sec.value-=1;
                sec.value=('0'+sec.value).slice(-2);
            }
        }
    },1000)
}

const stopTimer=()=>{
    start.innerHTML="start";
    clearInterval(x);
    ring.style.stroke="blue";
}

const allowInp=()=>{
    min.disabled=false;
    sec.disabled=false;
}

const disableInp=()=>{
    min.disabled=true;
    sec.disabled=true;
}

const validate=()=>{
    if(!(min.value>=0 && min.value<=59) || !(sec.value>=0 && sec.value<=59) || min.value.trim()=="" || sec.value.trim()=="" || (min.value==0 && sec.value==0)){
        return true;
    }
    return false;
}

export {validate,disableInp,stopTimer,startTimer,allowInp};
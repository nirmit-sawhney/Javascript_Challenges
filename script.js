const start=document.querySelector(".start");
const min=document.querySelector('#min');
const sec=document.querySelector("#sec");
const ring=document.querySelector('.ring');
const settings=document.querySelector('.settings');

var x;

settings.addEventListener('click',()=>{
    stopTimer();
    allowInp();
})

function allowInp(){
    min.disabled=false;
    sec.disabled=false;
}

function disableInp(){
    min.disabled=true;
    sec.disabled=true;
}

start.addEventListener('click',()=>{
    disableInp();
    if(start.innerHTML=="start"){
        if(!(min.value>=0 && min.value<=99) || !(sec.value>=0 && sec.value<=60) || min.value=="" || sec.value=="" || (min.value==0 && sec.value==0)){
            alert('Please Enter a valid Time'+"\n"+"You can enter any time between 0 to 99 minutes and seconds in specific range");
            min.value="00";
            sec.value="00";
            ring.classList.remove("stop");
        }else{
            startTimer();
        }
    }else{
        stopTimer();
    }
})

function startTimer(){
    start.innerHTML="Stop";
    ring.classList.remove("stop");
    x=setInterval(function(){
        if(min.value==0 && sec.value==0){
            ring.classList.remove("warning");
            ring.classList.add("ending");
            start.innerHTML="Start";
            start.disabled="true";
            clearInterval(x);
            setTimeout(()=>{
                alert("Time is over!!");
                ring.classList.remove("ending");
            },100)
        }
        else{
            if(sec.value==0){
                min.value-=1;
                min.value=('0'+min.value).slice(-2);
                sec.value=60;
            }else{
                sec.value-=1;
                sec.value=('0'+sec.value).slice(-2);

                if(min.value==0 && sec.value<10){
                    ring.classList.add("warning");
                }
            }
        }
    },1000)
}

function stopTimer(){
    start.innerHTML="start";
    clearInterval(x);
    ring.classList.add("stop");
}
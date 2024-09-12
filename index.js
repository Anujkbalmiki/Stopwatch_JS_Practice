const clock=document.querySelector(".stopwatch");

let sec=0,
min=0,
hr=0,
IntervalID=0;

const startStopWatch=()=>{
   IntervalID=setInterval(() => {
      if(sec<59){
         sec++;
      }
      else if(min>=59){
         hr++;
         min=0;
      }
      else{
         min++;
         sec=0
      }

      const seconds = String(sec).padStart(2,"0");
      const minutes = String(min).padStart(2,"0");
      const hours = String(hr).padStart(2,"0");
      clock.innerText=`${hours}:${minutes}:${seconds}`;
   }, 1000);
};
const stopStopWatch=()=>{
   clearInterval(IntervalID);
};

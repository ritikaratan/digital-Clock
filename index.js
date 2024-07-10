const hoursE1 = document.getElementById("Hours");
const minutesE1 = document.getElementById("Minutes");
const secondsE1 = document.getElementById("Seconds");
const ampmE1 = document.getElementById("ampm");
function updateClock()
{
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let ampm= "AM";
    if (h>12)
    {
        h = h-12;
        ampm = "PM";

    }
    h = h<10 ? "0" + h : h;
    m = m<10 ? "0" + m : m;
    s = s<10 ? "0" + s : s;
    hoursE1.innerHTML= h;
    minutesE1.innerHTML = m;
    secondsE1.innerHTML = s;
    ampmE1= ampm;
    setTimeout(() =>{
        updateClock()
    },1000)
    
}
updateClock();
const url = "https://worldtimeapi.org/api/timezone/asia/dhaka";
fetch(url)
    .then(res => res.json())
    .then(data => countryList(data))

// function countryList(data) {
// }

    const timeElement = document.getElementById('time');
    const date = new Date(data.datetime);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const ampm = hours >= 12 ? 'pm' : 'am';
    const hours12 = hours % 12 || 12;
    const formattedTime = `${hours12}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} ${ampm}`;
    timeElement.innerText = formattedTime;

// ==================================================================
// ---------------------- new function ------------------------------
// ==================================================================
// let miliSecInterval;

// let miliSec = 1;
let sec = 0;
let min = 0;
let hour = 0;

 function countryList(data) {

    function creatTime(timeId, time) {
        let id = timeTwoDigit(time);
        document.getElementById(timeId).innerText = `${id}`
    }

    setInterval(() => {

        // creatTime('milisecond', miliSec);
        creatTime('second', sec);
        creatTime('min', min);
        creatTime('hour', hour);

        miliSec++
        if (miliSec === 100) {
            sec++
            miliSec = 0;
        }
        if (sec === 60) {
            min++
            sec = 0;
        }
    }, 10)
}



function timeTwoDigit(time) {
    let id = time.toString();
    if (id.length === 1) {
        id = '0' + time;
    } else {
        id = time;
    } return id;
}
const day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

let b;
let c;
let e;
let ampm;

setInterval(() => {
    b = (new Date()).getSeconds()
    b = setTwoDigit(b)
    c = (new Date()).getMinutes()
    c = setTwoDigit(c)
    e = (new Date()).getHours()
    if (e === 0) {
        ampm = 'am'
        e = 12
    } if (e > 12) {
        ampm = 'pm'
        e = e - 12
    } else {
        ampm = 'am'
    }
    e = setTwoDigit(e)
    document.getElementById('time').innerText = `${e}:${c}:${b} ${ampm}`
    document.getElementById('date').innerText = `${day[new Date().getDay()]}, ${new Date().getDate()} ${months[new Date().getMonth()]}, ${new Date().getFullYear()}`
}, 1);

function timeTwoDigit(time) {
    let id = time.toString();
    if (id.length === 1) {
        id = '0' + time;
    } else {
        id = time;
    } return id;
}

let miliSecInterval;

let miliSec = 1;
let sec = 0;
let min = 0;

document.getElementById('btn-start').addEventListener('click', function () {

    function creatTime(timeId, time) {
        let id = timeTwoDigit(time);
        document.getElementById(timeId).innerText = `${id}`
    }

    miliSecInterval = setInterval(() => {


        creatTime('milisecond', miliSec);
        creatTime('secound', sec);
        creatTime('minute', min);

        miliSec++
        if (miliSec === 100) {
            sec++
            miliSec = 0;
        }
        if (sec === 60) {
            min++
            sec = 0;
        }
    }, 1000);

    document.getElementById('lap-time').classList.remove('hidden');
    document.getElementById('btn-pause').classList.remove('hidden');
    document.getElementById('btn-clear').classList.remove('hidden');
    document.getElementById('btn-start').classList.add('hidden');
})

document.getElementById('btn-pause').addEventListener('click', function () {
    clearInterval(miliSecInterval);
    document.getElementById('lap-time').classList.add('hidden');
    document.getElementById('btn-pause').classList.add('hidden');
    document.getElementById('btn-start').classList.remove('hidden');
})

document.getElementById('btn-clear').addEventListener('click', function () {
    clearInterval(miliSecInterval);
    i = 0;
    document.getElementById('milisecond').innerText = `00`;
    document.getElementById('secound').innerText = `00`;
    document.getElementById('minute').innerText = `00`;
    document.getElementById('lap-time').classList.add('hidden');
    document.getElementById('btn-clear').classList.add('hidden');
    document.getElementById('btn-pause').classList.add('hidden');
    document.getElementById('btn-start').classList.remove('hidden');
    document.getElementById('display-laptime').innerHTML = ``;
    serialNo = 1;
    document.getElementById('btn-lapclear').classList.add('hidden')
    miliSec = 1
    sec = 0
    min = 0
})

let serialNo = 1;

document.getElementById('lap-time').addEventListener('click', function () {
    let lapMiliSec = timeTwoDigit(miliSec);
    let lapSec = timeTwoDigit(sec);
    let lapMin = timeTwoDigit(min);
    serialNo = timeTwoDigit(serialNo)
    document.getElementById('display-laptime').innerHTML += `
    <h3>
       <span>${serialNo}. <span>${e}:${c}:${b} ${ampm}</span> => </span><span>${lapMin}</span>:<span>${lapSec}</span>:<span>${lapMiliSec}</span>
    </h3>
    `
    serialNo++
    document.getElementById('btn-lapclear').classList.remove('hidden')
})

document.getElementById('btn-lapclear').addEventListener('click', function () {
    document.getElementById('display-laptime').innerHTML = ``;
    serialNo = 1;
    document.getElementById('btn-lapclear').classList.add('hidden')
})

const setTwoDigit = (digit) => {
    let newTwoDigit = digit.toString()
    if (newTwoDigit.length === 1) {
        newTwoDigit = '0' + digit
    } else {
        newTwoDigit = digit
    }
    return newTwoDigit
}
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
    }, 10);

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
    document.getElementById('display-laptime').innerHTML += `
    <h3>
        <span>${serialNo}. </span><span>${min}</span>:<span>${lapSec}</span>:<span>${lapMiliSec}</span>
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

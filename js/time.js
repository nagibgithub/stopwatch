// const url = "https://worldtimeapi.org/api/timezone/asia/dhaka";
// fetch(url)
//     .then(res => res.json())
//     .then(data => countryList(data))

// function countryList(data) {
//     const timeElement = document.getElementById('time');
//     // updateTime(timeElement, data.datetime);
//     setInterval(() => {
//         const date = new Date(data.datetime);
//         console.log(date);
//         const hours = date.getHours();
//         const minutes = date.getMinutes();
//         const seconds = date.getSeconds();
//         console.log(seconds);
//         const ampm = hours >= 12 ? 'pm' : 'am';
//         const hours12 = hours % 12 || 12;
//         const formattedTime = `${hours12}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} ${ampm}`;
//         timeElement.innerText = formattedTime;
//     }, 100);
// }


let name = prompt("Please enter your name:");


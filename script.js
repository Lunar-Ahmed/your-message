console.log("Hello, World!");

document.getElementById("moon").innerHTML = "Hello, Moon!"

document.write("Hello, Africa")


let day = "Teusday";

switch (day) {
    case "Monday":
        console.log("Start of the week!");
        break;
    case "Friday":
        console.log("End of the workweek!");
        break;
    default:
        console.log("It's just another day.");
}


for (let i = 0; i < 11; i++) {
    console.log("Count: " + i);
}

function sayHello() {
    alert("Hello, World!");
}



//===============================
function updateCountdown() {
    const newYear = new Date('January 1, 2025 00:00:00').getTime();
    const now = new Date().getTime();
    const distance = newYear - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('time').innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (distance < 0) {
        clearInterval(countdownInterval);
        document.getElementById('time').innerText = "Happy New Year!";
        startConfetti();
    }
}

const countdownInterval = setInterval(updateCountdown, 1000);

function celebrate() {
    alert('Happy New Year 2025!');
    document.body.style.backgroundColor = '#4CAF50';
    document.getElementById('heading').innerText = 'Wishing You a Joyous 2025!';
    startConfetti();
}

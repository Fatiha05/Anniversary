const startDate = new Date("2024-07-18T00:00:00");

function updateTimer(){

    const now = new Date();

    const diff = now - startDate;

    const totalSeconds = Math.floor(diff / 1000);

    const totalMinutes = Math.floor(diff / (1000*60));

    const totalHours = Math.floor(diff / (1000*60*60));

    const totalDays = Math.floor(diff / (1000*60*60*24));

    const totalMonths = Math.floor(totalDays / 30.44);

    const totalYears = Math.floor(totalDays / 365.25);

    document.getElementById("years").textContent = totalYears;

    document.getElementById("months").textContent = totalMonths;

    document.getElementById("days").textContent = totalDays.toLocaleString();

    document.getElementById("hours").textContent = totalHours.toLocaleString();

    document.getElementById("minutes").textContent = totalMinutes.toLocaleString();

    document.getElementById("seconds").textContent = totalSeconds.toLocaleString();

}

updateTimer();

setInterval(updateTimer,1000);
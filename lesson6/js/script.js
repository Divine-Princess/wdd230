const today = new Date();

const dayNumber = today.getDay();

const element = document.getElementById("message");

if (dayNumber == 5) {
    element.classList.add("showme");
} else {
    element.classList.add("hideme");
}

function toggleMenu() {
    document.getElementById("navigation").classList.toggle("hide");
}

document.querySelector("#copyrightyear").textContent = new Date().toLocaleDateString('en-gb', { weekday:"long", year:"numeric", day:"numeric", month:"short"});


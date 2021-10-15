function toggleMenu() {
    document.getElementById("navigation").classList.toggle("hide");
}

document.querySelector("#copyrightyear").textContent = new Date().toLocaleDateString('en-gb', { weekday:"long", year:"numeric", day:"numeric", month:"short"});


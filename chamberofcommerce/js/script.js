function toggleMenu() {
    document.getElementById("navigation").classList.toggle("hide");
}

WebFont.load({google: {families: ["Outfit", "Faustina"]} });

document.querySelector("#copyrightyear").textContent = new Date().getFullYear();;
document.getElementById("lastmodified").textContent = new Date(document.lastModified);

let gridtoggle = document.querySelector("div.directoryjs");

function toggleGrid() {
    if (gridtoggle.classList.contains("grid")) {
        return;
    } else {
    document.querySelector("div.directoryjs").classList.toggle("grid");
    document.querySelector("img.grid").classList.toggle("blue");
    document.querySelector("img.list").classList.toggle("blue");
    }
}

function toggleList() {
    if (gridtoggle.classList.contains("grid")) {
        document.querySelector("div.directoryjs").classList.toggle("grid");
        document.querySelector("img.grid").classList.toggle("blue");
        document.querySelector("img.list").classList.toggle("blue");
    } else {
        return;
    }
    
}

function closeAlert() {
    document.getElementById("weatheralert").remove();
}
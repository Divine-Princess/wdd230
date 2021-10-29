
const millisecondsToDays = 8640000;

let lastVisit = localStorage.getItem("lastvisit");

let todaysVisit = Math.round(Date.now() / millisecondsToDays);

let daysFromVisit = todaysVisit - lastVisit;

localStorage.setItem("lastvisit", todaysVisit);

document.getElementById("visited").textContent = daysFromVisit;















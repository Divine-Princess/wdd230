const inputBox = document.querySelector("input");
const bomButton = document.querySelector("button");
const bomList = document.querySelector("ul");

bomButton.addEventListener("click", function() {
    let personinput = inputBox.value;
    if (personinput !=="") {
        const newBTN = document.createElement("button");
        newBTN.innerHTML = "\u274C";

        const newLI = document.createElement("li");
        newLI.textContent = personinput;
        newLI.appendChild(newBTN);
       
        bomList.appendChild(newLI);

        inputBox.value = "";

        newBTN.addEventListener("click", function(){

            newLI.remove();

        });
    }
 });
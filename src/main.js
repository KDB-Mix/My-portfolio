const icon_button = document.querySelector("#icon-button")
const icon = document.querySelector("#icon")
const thought_bubble = document.querySelector("header .thought-bubble")
const creations_ul = document.querySelector("#creations ul")
const currentYear = new Date().getFullYear();
const currentMonth = new Date().getMonth();
const ageContainer = document.querySelector("#age");

ageContainer.innerHTML = `Age: ${currentYear-2010} years ${currentMonth > 0 ? `${currentMonth} Months`:``}`
icon_button.addEventListener("click", function() {
    thought_bubble.style.animation = "scale-out .5s ease-in forwards"
    if (icon.src.endsWith("icon.svg")){
        icon.src = "src/assets/face.jpg"
    }else{
        icon.src = "src/assets/icon.svg"
    }
});
fetch("https://raw.githubusercontent.com/KDB-Mix/kdb-mix.github.io/refs/heads/master/projects.json").then(
    response => response.json()
).then(
    data => {
        for (let index = 0; index < Object.keys(data).length; index++){
            const title = Object.keys(data)[index];
            creations_ul.innerHTML += `<li><a href="${data[title]["link"]["url"]}" target="_blank">${title}</a></li>`
        }
    }
)
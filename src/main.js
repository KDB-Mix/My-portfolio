const icon_button = document.querySelector("#icon-button")
const icon = document.querySelector("#icon")
const thought_bubble = document.querySelector("header .thought-bubble")

icon_button.addEventListener("click", function() {
    thought_bubble.style.animation = "scale-out .5s ease-in forwards"
    if (icon.src.endsWith("icon.svg")){
        icon.src = "src/assets/face.svg"
    }else{
        icon.src = "src/assets/icon.svg"
    }
});
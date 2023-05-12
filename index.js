let text = "My name is Alatishe Olorunjuwon, I am a participant of Sail Tech Talent Cohort 2 Batch A"
let index = 0
let speed = 100;
let text1 = document.querySelector("#text")
function typeEffect(){
    if (index < text.length) {
       text1.textContent += text.charAt(index)
        index++
        setTimeout(typeEffect, speed)
    }
}
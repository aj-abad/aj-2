const code = [
    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight",
    "KeyB",
    "KeyA",
    "Enter"
]



let codeCounter = 0
window.addEventListener("keyup", function(e) {
    if (e.code === code[codeCounter]) {
        ++codeCounter;
        if (codeCounter === code.length) {
            document.body.classList.toggle("easteregg")
            codeCounter = 0;
        }
    } else {
        codeCounter = 0;
    }
});
const text = "Jared Alexander";
let index = 0;

function typingEffect() {
    const typingElement = document.getElementById("typing");

    if (!typingElement) return;

    if (index < text.length) {
        typingElement.textContent += text.charAt(index);
        index++;
        setTimeout(typingEffect, 120);
    }
}

function toggleMusic() {
    const music = document.getElementById("music");

    if (!music) return;

    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
}

window.addEventListener("load", () => {
    typingEffect();
});

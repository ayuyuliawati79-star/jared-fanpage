// ==========================
// TYPING EFFECT
// ==========================

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

// ==========================
// MUSIC CONTROL
// ==========================

function toggleMusic() {
    const music = document.getElementById("music");

    if (!music) {
        alert("Audio tidak ditemukan.");
        return;
    }

    if (music.paused) {
        music.play()
            .then(() => {
                console.log("Music playing");
            })
            .catch(error => {
                console.error("Audio gagal diputar:", error);
            });
    } else {
        music.pause();
        console.log("Music paused");
    }
}

// ==========================
// PAGE LOAD
// ==========================

window.addEventListener("load", () => {
    typingEffect();
});
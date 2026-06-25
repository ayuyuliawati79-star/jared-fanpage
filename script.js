const text = "Jared Alexander Reyes Peña";
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

    music.muted = false;
    music.volume = 1;

    if (music.paused) {
        const playPromise = music.play();

        if (playPromise !== undefined) {
            playPromise.catch(() => {
                alert("Klik sekali lagi untuk mengaktifkan audio");
            });
        }
    } else {
        music.pause();
    }
}

window.addEventListener("load", () => {
    typingEffect();
});

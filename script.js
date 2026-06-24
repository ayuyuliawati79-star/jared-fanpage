const text = "Jared Alexander";
let i = 0;

function typingEffect() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typingEffect, 150);
    }
}

typingEffect();

function toggleMusic() {
    const music = document.getElementById("music");

    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
}

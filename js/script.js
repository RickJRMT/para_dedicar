// Elementos de audio
const envelopeOpenSound = document.getElementById('envelope-open');
const specialEnvelopeSound = document.getElementById('special-envelope');
const confettiSound = document.getElementById('confetti-sound');

// Función para reproducir sonido
function playSound(audioElement) {
    audioElement.currentTime = 0; // Reinicia el sonido si ya está reproduciéndose
    audioElement.play();
}

function openEnvelope(envelope) {
    envelope.classList.toggle('open');
    if (envelope.classList.contains('open')) {
        playSound(envelopeOpenSound);
    }
}

function openSpecialEnvelope(envelope) {
    envelope.classList.toggle('open');
    if (envelope.classList.contains('open')) {
        playSound(specialEnvelopeSound);
    }
}

function createConfetti() {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
    playSound(confettiSound);

    // Crear globos
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            const balloon = document.createElement('div');
            balloon.className = 'balloon';
            balloon.style.left = Math.random() * 100 + 'vw';
            balloon.style.animationDuration = Math.random() * 3 + 3 + 's';
            document.body.appendChild(balloon);

            setTimeout(() => {
                balloon.remove();
            }, 6000);
        }, i * 300);
    }
}

document.querySelector('.confetti-button').addEventListener('click', createConfetti); 
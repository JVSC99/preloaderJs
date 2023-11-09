const overlay = document.createElement('div');
overlay.id = 'loader';
overlay.style.cssText = `
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.7);
    z-index: 999;
`;

const lottieContainer = document.createElement('div');
lottieContainer.id = 'lottieContainer';
lottieContainer.style.cssText = `
    max-width: 100%;
    max-height: 100%;
    display: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;
lottieContainer.style.display = 'none';

document.body.appendChild(overlay);
document.body.appendChild(lottieContainer);

function hideOverlay() {
    overlay.style.display = 'none';
    lottieContainer.style.display = 'block';
    // Substitua 'seu-arquivo-lottie.json' pelo caminho do seu arquivo Lottie.
    lottie.loadAnimation({
        container: lottieContainer,
        renderer: 'svg', // ou 'canvas' se preferir
        loop: true,
        autoplay: true,
        path: 'https://jvsc99.github.io/preloaderJs/JVGIsylS3F-3.json',
    });
}

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(hideOverlay, 100); // Substitua pelo seu código real de carregamento.
});

window.addEventListener('load', hideOverlay);

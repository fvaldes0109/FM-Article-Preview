let button, overlay;

function init() {
    button = document.getElementById('button-cont');
    overlay = document.getElementById('overlay');

    button.addEventListener('click', overlayToggle);
}

function overlayToggle() {
    if (overlay.style.display == 'none' || !overlay.style.display) {
        overlay.style.display = 'block';
    } else {
        overlay.style.display = 'none';
    }
}

window.addEventListener('load', init);
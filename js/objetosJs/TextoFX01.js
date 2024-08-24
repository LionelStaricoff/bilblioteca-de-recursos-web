export class CrearTextoFX01 {
    constructor(padre = 'body', text) {
        this._padre = document.querySelector(padre);
        this._text = text;
        this.renderTitle();
    }

    renderTitle() {
        this._text.split('').forEach((char, index) => {
            const span = document.createElement('span');
            span.classList.add('animated-title');
            span.style.animationDelay = `${(index + 1) * 0.1}s`;
            span.textContent = char === ' ' ? '\u00A0' : char;
            this._padre.appendChild(span);
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new CrearTextoFX01('.title-container', 'Tu Título Aquí');
});

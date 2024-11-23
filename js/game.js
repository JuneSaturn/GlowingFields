class Field extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({mode: 'open'});

        const style = document.createElement('style');
        style.textContent = `div {
            font-size: 20px;
        }`;

        const div = document.createElement('div');
        div.textContent = 'Hello, Shadow DOM!';

        shadow.appendChild(style);
        shadow.appendChild(div);
    }
}
customElements.define('game-field', Field);
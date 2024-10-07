class FooterComponent extends HTMLElement {
    connectedCallback() {

        this.innerHTML = `
            <footer>
                <h1>I'm the Footer</h1>
                <p>© 2024 My Project. All rights reserved.</p>
            </footer>
        `;
    }
}

window.customElements.define('footer-component', FooterComponent);


class ContentComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <section>
                <h1>I'm the Main Content</h1>
                <p>Welcome to the main content area!</p>
            </section>
        `;
    }
}

window.customElements.define('content-component', ContentComponent);


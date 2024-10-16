class ContentComponent extends HTMLElement {
    connectedCallback() {

        this.innerHTML = `
        
        `
    ;
    }
}

window.customElements.define('content-component', ContentComponent);
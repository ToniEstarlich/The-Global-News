class NavbarComponent extends HTMLElement {
    connectedCallback() {

        this.innerHTML = `
            <nav>
                <h1>I'm the Navbar</h1>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        `;
    }
}

window.customElements.define('navbar-component', NavbarComponent);


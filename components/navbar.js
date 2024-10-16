class NavbarComponent extends HTMLElement {
    connectedCallback() {

        this.innerHTML = `
    <div class="header">
        <div class="logo">
            NEWS
        </div>
        <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#sportsNews">Sports</a></li>
                <li><a href="#businessNews">Business</a></li>
                <li><a href="#techNews">Technology</a></li>
            </ul>
            <div class="bar">
                <i class="open fa-solid fa-bars-staggered"></i>
                <i class="close fa-solid fa-xmark"></i>
            </div>
        </nav>
    </div>
        `;
    }
}

window.customElements.define('navbar-component', NavbarComponent);


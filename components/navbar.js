class NavbarComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="header">
                <div class="logo">
                    NEWS
                </div>
                <nav>
                    <ul>
                        <li><a href="./index.html" id="homeLink">Home</a></li>
                        <li><a href="#" id="politicsLink">Politics</a></li>
                        <li><a href="#" id="sportsLink">Sports</a></li>
                        <li><a href="#" id="businessLink">Business</a></li>
                        <li><a href="#" id="techLink">Technology</a></li>
                    </ul>
                    <div class="bar">
                        <i class="open fa-solid fa-bars-staggered"></i>
                        <i class="close fa-solid fa-xmark"></i>
                    </div>
                </nav>
            </div>
        `;

        document.addEventListener("DOMContentLoaded", function() {
            const homeLink = document.getElementById("homeLink");
            const politicsLink = document.getElementById("politicsLink");
            const sportsLink = document.getElementById("sportsLink");
            const businessLink = document.getElementById("businessLink");
            const techLink = document.getElementById("techLink");

            homeLink.addEventListener("click", function(event) {
                event.preventDefault();
                const homeSection = document.getElementById("home");
                homeSection.scrollIntoView({ behavior: "smooth" });
            });

            politicsLink.addEventListener("click", function(event) {
                event.preventDefault();
                const politicsSection = document.getElementById("politicsNews");
                politicsSection.scrollIntoView({ behavior: "smooth" });
            });

            sportsLink.addEventListener("click", function(event) {
                event.preventDefault();
                const sportsSection = document.getElementById("sportsSection");
                sportsSection.scrollIntoView({ behavior: "smooth" });
            });

            businessLink.addEventListener("click", function(event) {
                event.preventDefault();
                const businessSection = document.getElementById("businessNews");
                businessSection.scrollIntoView({ behavior: "smooth" });
            });

            techLink.addEventListener("click", function(event) {
                event.preventDefault();
                const techSection = document.getElementById("techNews");
                techSection.scrollIntoView({ behavior: "smooth" });
            });
        });
    }
}

window.customElements.define('navbar-component', NavbarComponent);

class NavbarComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
         <nav class="navbar navbar-expand-md  navbar-dark">
  <a class="navbar-brand" href="#">G<h5>N</h5></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="collapsibleNavbar">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a href="../index.html" id="homeLink">Home</a>
      </li>
      <li class="nav-item">
        <a href="../pages/Contact.html" id="homeLink">About</a
      </li>
      <li class="nav-item">
        <a href="./index.html" id="homeLink">Contact</a
      </li>    
    </ul>
  </div>  
</nav>          
                


     <!--
            <div class="header">
               <h6 class="main-title"><span class="thin">the Global</span> news</h6>
                <nav>
                    <button class="navbar-toggler" type="button">
                        <span class="navbar-toggler-icon open fa-solid fa-bars-staggered"></span>
                        <span class="navbar-toggler-icon close fa-solid fa-xmark" style="display: none;"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul>
                            <li><a href="./index.html" id="homeLink">Home</a></li>
                            <li><a href="#" id="politicsLink">Politics</a></li>
                            <li><a href="#" id="sportsLink">Sports</a></li>
                            <li><a href="#" id="businessLink">Business</a></li>
                            <li><a href="#" id="techLink">Technology</a></li>
                        </ul>
                    </div>
                </nav>
            </div>-->
        `;

        document.addEventListener("DOMContentLoaded", () => {
            const homeLink = document.getElementById("homeLink");
            const politicsLink = document.getElementById("politicsLink");
            const sportsLink = document.getElementById("sportsLink");
            const businessLink = document.getElementById("businessLink");
            const techLink = document.getElementById("techLink");
            const navBar = document.querySelector("nav ul");
            const toggler = document.querySelector(".navbar-toggler");
            const openIcon = document.querySelector(".open");
            const closeIcon = document.querySelector(".close");

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

            // Toggle mobile menu
            toggler.addEventListener("click", function() {
                navBar.classList.toggle("active"); // Toggle active class

                // Show/hide icons
                if (navBar.classList.contains("active")) {
                    openIcon.style.display = "none";
                    closeIcon.style.display = "block";
                } else {
                    openIcon.style.display = "block";
                    closeIcon.style.display = "none";
                }
            });
        });
    }
}

window.customElements.define('navbar-component', NavbarComponent);

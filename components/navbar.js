class NavbarComponent extends HTMLElement {
    connectedCallback() {
        // Define the relative paths for each page based on the current path
        const path = window.location.pathname;
        let homePath = '';
        let aboutPath = '';
        let contactPath = '';

        if (path.includes('/sports-news/') || path.includes('/politics-news/') || path.includes('/tech-news/') || path.includes('/business-news/') || path.includes('/success/')) {
            homePath = '../../index.html';
            aboutPath = '../../pages/about.html';
            contactPath = '../../pages/contact.html';
        } else if (path.includes('/pages/success/')) {
            homePath = '../../index.html';
            aboutPath = '../about.html';
            contactPath = '../contact.html';
        } else if (path.includes('/pages/')) {
            homePath = '../index.html';
            aboutPath = 'about.html';
            contactPath = 'contact.html';
        } else {
            homePath = 'index.html';
            aboutPath = 'pages/about.html';
            contactPath = 'pages/contact.html';
        }

        // Render the navbar with the calculated paths
        this.innerHTML = `
         <nav class="navbar navbar-expand-md  navbar-dark">
                <a class="navbar-brand" href="${homePath}"></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="${homePath}">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="${aboutPath}">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="${contactPath}">Contact</a>
                        </li>    
                    </ul>
                </div>  
            </nav>       
        `;
    }
}

// Define the custom navbar element
window.customElements.define('navbar-component', NavbarComponent);

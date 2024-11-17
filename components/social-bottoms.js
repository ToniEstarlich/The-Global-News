class SocialComponent extends HTMLElement {
    connectedCallback() {
        // Inject the HTML for the social links
        this.innerHTML = `
    
                <a href="#" class="fa fa-facebook"></a>
                <a href="#" class="fa fa-twitter"></a>
                <a href="#" class="fa fa-linkedin"></a>
                <a href="#" class="fa fa-youtube"></a>
            
        `;

        // Dynamically add the Font Awesome stylesheet if not already included
        const fontAwesomeLink = document.querySelector(
            'link[href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"]'
        );
        if (!fontAwesomeLink) {
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css';
            document.head.appendChild(link);
        }

        // Dynamically add the custom stylesheet if not already included
        const customStylesheetLink = document.querySelector(
            'link[href="./css/social-bottoms.css"]'
        );
        if (!customStylesheetLink) {
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = '../css/social-bottoms.css'; // Update path if needed
            document.head.appendChild(link);
        }
    }
}

window.customElements.define('social-component', SocialComponent);

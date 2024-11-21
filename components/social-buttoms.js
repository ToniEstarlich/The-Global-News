class SocialComponent extends HTMLElement {
    connectedCallback() {
        // Dynamically determine the path to the CSS file
        const path = window.location.pathname;
        let socialBottomsCSSPath = '';

        if (path.includes('/sports-news/') || path.includes('/politics-news/') || path.includes('/tech-news/') || path.includes('/business-news/') || path.includes('/success/')) {
            socialBottomsCSSPath = '../../css/social-bottoms.css';
        } else if (path.includes('/pages/success/')) {
            socialBottomsCSSPath = '../../css/social-bottoms.css';
        } else if (path.includes('/pages/')) {
            socialBottomsCSSPath = '../css/social-bottoms.css';
        } else {
            socialBottomsCSSPath = 'css/social-bottoms.css';
        }

        // Inject the CSS link dynamically
        const linkElement = document.createElement('link');
        linkElement.rel = 'stylesheet';
        linkElement.href = socialBottomsCSSPath;
        document.head.appendChild(linkElement);

        // Inject the HTML for the social links
        this.innerHTML = `
            <div class="social">
                <a href="https://www.facebook.com/yourprofile" class="fa fa-facebook" target="_blank" rel="noopener noreferrer"></a>
                <a href="https://twitter.com/yourprofile" class="fa fa-twitter" target="_blank" rel="noopener noreferrer"></a>
                <a href="https://www.linkedin.com/in/yourprofile" class="fa fa-linkedin" target="_blank" rel="noopener noreferrer"></a>
                <a href="https://www.youtube.com/c/yourchannel" class="fa fa-youtube" target="_blank" rel="noopener noreferrer"></a>
            </div>
        `;
    }
}

window.customElements.define('social-component', SocialComponent);

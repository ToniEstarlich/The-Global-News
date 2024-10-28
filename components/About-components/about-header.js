class AboutHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <link rel="stylesheet" href="path/to/about-header.css">
            <div class="container-about demo">
                <div class="content-about">
                    <div id="large-header" class="large-header">
                        <div id="stars"></div>
                        <div id="stars2"></div>
                        <div id="stars3"></div>
                        <h1 class="main-title"><span class="thin">The Global</span> News</h1>
                    </div>
                </div>
            </div>
        `;

        // Aplicación de box shadows
        document.getElementById('stars').style.boxShadow = generateBoxShadow(700, 1);
        document.getElementById('stars2').style.boxShadow = generateBoxShadow(200, 2);
        document.getElementById('stars3').style.boxShadow = generateBoxShadow(100, 3);
    }
}

function generateBoxShadow(count, size) {
    let boxShadowValue = '';
    for (let i = 0; i < count; i++) {
        let x = Math.floor(Math.random() * 2000);
        let y = Math.floor(Math.random() * 2000);
        boxShadowValue += `${x}px ${y}px #FFF`;
        if (i < count - 1) boxShadowValue += ', ';
    }
    return boxShadowValue;
}

window.customElements.define('about-header', AboutHeader);

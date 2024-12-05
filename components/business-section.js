class BusinessComponent extends HTMLElement {
    connectedCallback() {
        const newsData = {
            "businessNewsCards": [
                {
                    "epigraph": "EU businesses face new regulations",
                    "headline": "The EU's Green Deal: A Game-Changer for Business",
                    "subtitle": "Transforming the landscape of European commerce.",
                    "picture": "assets/images/business1.jpg",
                    "url": "./pages/business-news/business1.html"
                },
                {
                    "epigraph": "Global pandemic reshapes business",
                    "headline": "The COVID-19 Pandemic and Its Lasting Impact",
                    "subtitle": "How COVID-19 has changed business forever.",
                    "picture": "assets/images/business2.jpg",
                    "url": "./pages/business-news/business2.html"
                },
                {
                    "epigraph": "Global markets face uncertainty",
                    "headline": "Inflation and Supply Chain Disruptions",
                    "subtitle": "Navigating the challenges in today's market.",
                    "picture": "assets/images/business3.jpg",
                    "url": "./pages/business-news/business3.html"
                }
            ]
        };

        this.innerHTML = `
            <div class="news" id="business">
                <div class="title">
                    <h2 class="news-title">Business</h2>
                </div>
                <div class="newsBox"> 
                    <div class="content-wrapper">
                        ${newsData.businessNewsCards.map(business => `
                            <div class="news-card">
                                <a href="${business.url}" class="news-card__card-link"></a>
                                <img href="${business.url}" src="${business.picture}" alt="" class="news-card__image">
                                <div class="news-card__text-wrapper">
                                    <h2 class="news-card__title">${business.headline}</h2>
                                    <div class="news-card__post-date"><date-component></date-component></div>
                                    <div class="news-card__details-wrapper">
                                        <p class="news-card__excerpt">${business.subtitle}</p>
                                        <a href="${business.url}" class="news-card__read-more">Read more <i class="fas fa-long-arrow-alt-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
            <hr class="line">
        `;
    }
}

window.customElements.define('business-component', BusinessComponent);
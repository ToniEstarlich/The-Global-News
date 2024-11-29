class TechComponent extends HTMLElement {
    connectedCallback() {
        const newsData = {
            "technologyNews": [
                {
                    "epigraph": "AI reshapes industries",
                    "headline": "The Future of Artificial Intelligence",
                    "subtitle": "Exploring the potential of AI across sectors.",
                    "picture": "assets/images/tech1.jpg",
                    "url": "./pages/tech-news/tech1.html"
                },
                {
                    "epigraph": "5G revolution begins",
                    "headline": "5G Networks Are Changing the Digital Landscape",
                    "subtitle": "How 5G is transforming connectivity.",
                    "picture": "assets/images/tech2.jpg",
                    "url": "./pages/tech-news/tech2.html"
                },
                {
                    "epigraph": "Tech giants face scrutiny",
                    "headline": "Big Tech Under Fire",
                    "subtitle": "The ongoing debate over regulation and ethics.",
                    "picture": "assets/images/tech3.jpg",
                    "url": "./pages/tech-news/tech3.html"
                }
            ]
        };

        const technologyNewsSection = `
            <div class="title" id="technology" >
                <h2 class="news-title" style="text-decoration: underline; color: white; margin-left: 30px; margin-bottom: 20px; font-size: 50px;">Technology</h2>
            </div>
            <div class="newsBox"> 
                <div class="content-wrapper">
                    ${newsData.technologyNews.map(tech => `
                        <div class="news-card">
                            <a href="${tech.url}" class="news-card__card-link"></a>
                            <img src="${tech.picture}" alt="" class="news-card__image" href="${tech.url}">
                            <div class="news-card__text-wrapper">
                                <h2 class="news-card__title">${tech.headline}</h2>
                                <div class="news-card__post-date"><date-component></date-component></div>
                                <div class="news-card__details-wrapper">
                                    <p class="news-card__excerpt">${tech.subtitle}</p>
                                    <a href="${tech.url}" class="news-card__read-more">Read more <i class="fas fa-long-arrow-alt-right"></i></a>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
            <hr class="line">
        `;

        this.innerHTML = `
            <div class="news">
                ${technologyNewsSection}
            </div>
        `;
    }
}

customElements.define('tech-component', TechComponent);

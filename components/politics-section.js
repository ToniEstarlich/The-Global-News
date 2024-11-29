class PoliticsComponent extends HTMLElement {
    connectedCallback() {
        const newsData = {
            "politicsNewsCards": [
                {
                    "epigraph": "Election season heats up",
                    "headline": "2024 Presidential Election: Key Issues and Candidates",
                    "subtitle": "An overview of the upcoming election landscape.",
                    "picture": "assets/images/politics1.jpg",
                    "url": "./pages/politics-news/politics1.html"
                },
                {
                    "epigraph": "Global policies face scrutiny",
                    "headline": "Climate Change Policies: A Global Challenge",
                    "subtitle": "Examining international efforts to combat climate change.",
                    "picture": "assets/images/politics2.jpg",
                    "url": "./pages/politics-news/politics2.html"
                },
                {
                    "epigraph": "New legislation proposed",
                    "headline": "Healthcare Reform: What You Need to Know",
                    "subtitle": "A deep dive into proposed changes to the healthcare system.",
                    "picture": "assets/images/politics3.jpg",
                    "url": "./pages/politics-news/politics3.html"
                }
            ]
        };

        this.innerHTML = `
            <div class="news" id="politics">
                <div class="title">
                    <h2 class="news-title" style="text-decoration: underline; color: white; margin-left: 86px; margin-bottom: 20px; font-size: 50px;">Politics</h2>
                </div>
                <div class="newsBox"> 
                    <div class="content-wrapper">
                        ${newsData.politicsNewsCards.map(politics => `
                            <div class="news-card">
                                <a href="${politics.url}" class="news-card__card-link"></a>
                                <img src="${politics.picture}" alt="" class="news-card__image" href="${politics.url}">
                                <div class="news-card__text-wrapper">
                                    <h2 class="news-card__title">${politics.headline}</h2>
                                    <div class="news-card__post-date"><date-component date="2024-11-21"></date-component></div>
                                    <div class="news-card__details-wrapper">
                                        <p class="news-card__excerpt">${politics.subtitle}</p>
                                        <a href="${politics.url}" class="news-card__read-more">Read more <i class="fas fa-long-arrow-alt-right"></i></a>
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

window.customElements.define('politics-component', PoliticsComponent);

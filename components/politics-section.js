class PoliticsComponent extends HTMLElement {
    connectedCallback() {
        const newsData = {
            "politicsNewsCards": [
                {
                    "epigraph": "Election season heats up",
                    "headline": "2024 Presidential Election: Key Issues and Candidates",
                    "subtitle": "An overview of the upcoming election landscape.",
                    "picture": "assets/images/politics1.jpg"
                },
                {
                    "epigraph": "Global policies face scrutiny",
                    "headline": "Climate Change Policies: A Global Challenge",
                    "subtitle": "Examining international efforts to combat climate change.",
                    "picture": "assets/images/politics2.jpg"
                },
                {
                    "epigraph": "New legislation proposed",
                    "headline": "Healthcare Reform: What You Need to Know",
                    "subtitle": "A deep dive into proposed changes to the healthcare system.",
                    "picture": "assets/images/politics3.jpg"
                }
            ]
        };

        this.innerHTML = `
            <div class="news">
                <div class="title">
                    <h2 class="news-title" style="text-decoration: underline; color: white; margin-left: 86px; margin-bottom: 20px; font-size: 50px;">Politics</h2>
                </div>
                <div class="newsBox"> 
                    <div class="content-wrapper">
                        ${newsData.politicsNewsCards.map(politics => `
                            <div class="news-card">
                                <a href="#" class="news-card__card-link"></a>
                                <img src="${politics.picture}" alt="" class="news-card__image">
                                <div class="news-card__text-wrapper">
                                    <h2 class="news-card__title">${politics.headline}</h2>
                                    <div class="news-card__post-date">${politics.date || 'Jan 29, 2018'}</div>
                                    <div class="news-card__details-wrapper">
                                        <p class="news-card__excerpt">${politics.subtitle}</p>
                                        <a href="#" class="news-card__read-more">Read more <i class="fas fa-long-arrow-alt-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
    }
}

window.customElements.define('politics-component', PoliticsComponent);

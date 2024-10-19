class MixCardsComponent extends HTMLElement {
  connectedCallback() {
    const newsData = {
      "randomNewsCards": [
        {
          "epigraph": "Global pandemic reshapes business",
          "headline": "The COVID-19 Pandemic and Its Lasting Impact",
          "subtitle": "How COVID-19 has changed business forever.",
          "picture": "../../assets/images/business2.jpg"
        },
        {
          "epigraph": "A critical moment for the EU",
          "headline": "European Union Considers Major Expansion",
          "subtitle": "The implications of a growing EU.",
          "picture": "../../assets/images/politics1.jpg"
        },
        {
          "epigraph": "Tech giants face scrutiny",
          "headline": "Big Tech Under Fire",
          "subtitle": "The ongoing debate over regulation and ethics.",
          "picture": "../../assets/images/tech3.jpg"
        },
        {
          "epigraph": "The rise of American football stars",
          "headline": "Unstoppable Force: The Rise of Quarterback David Stone",
          "subtitle": "David Stone is redefining the game with his incredible skills",
          "picture": "../../assets/images/sport2.jpg"
        },
        {
          "epigraph": "AI reshapes industries",
          "headline": "The Future of Artificial Intelligence",
          "subtitle": "Exploring the potential of AI across sectors.",
          "picture": "../../assets/images/tech1.jpg"
        },
        {
          "epigraph": "EU businesses face new regulations",
          "headline": "The EU's Green Deal: A Game-Changer for Business",
          "subtitle": "Transforming the landscape of European commerce.",
          "picture": "../../assets/images/business1.jpg"
        },
        {
          "epigraph": "Breaking boundaries in tennis",
          "headline": "Historic Victory at Wimbledon 2024",
          "subtitle": "A newcomer shocks the world with her stunning performance",
          "picture": "../../assets/images/sport1.jpg"
        },
        {
          "epigraph": "A new dawn for cycling",
          "headline": "Tour de France 2024: The Underdog Triumphs",
          "subtitle": "An unexpected victory shakes the cycling world",
          "picture": "../../assets/images/sport3.jpg"
        },
        {
          "epigraph": "A nation at a crossroads",
          "headline": "UK Faces Economic and Political Uncertainty",
          "subtitle": "Challenges facing the UK in today's climate.",
          "picture": "../../assets/images/politics2.jpg"
        },
        {
          "epigraph": "5G revolution begins",
          "headline": "5G Networks Are Changing the Digital Landscape",
          "subtitle": "How 5G is transforming connectivity.",
          "picture": "../../assets/images/tech2.jpg"
        },
        {
          "epigraph": "Global markets face uncertainty",
          "headline": "Inflation and Supply Chain Disruptions",
          "subtitle": "Navigating the challenges in today's market.",
          "picture": "../../assets/images/business3.jpg"
        }
      ]
    };

    this.innerHTML = `
      <div class="news">
          <div class="title">
          </div>
          <div class="newsBox"> 
              <div class="content-wrapper">
                  ${newsData.randomNewsCards.map(news => `
                      <div class="news-card">
                          <a href="#" class="news-card__card-link"></a>
                          <img src="${news.picture}" alt="" class="news-card__image">
                          <div class="news-card__text-wrapper">
                              <h2 class="news-card__title">${news.headline}</h2>
                              <div class="news-card__post-date">${news.date || 'Jan 29, 2018'}</div>
                              <div class="news-card__details-wrapper">
                                  <p class="news-card__excerpt">${news.subtitle}</p>
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

window.customElements.define('mix-card-component', MixCardsComponent);

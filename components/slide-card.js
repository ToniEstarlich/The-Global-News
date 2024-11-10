class CardSlides extends HTMLElement {
    connectedCallback() {
      // Datos JSON simulados (pueden provenir de un archivo JSON o API)
      const newsData = {
        "politicsNewsCards": [
          {
            "headline": "2024 Presidential Election: Key Issues and Candidates",
            "picture": "assets/images/politics1.jpg",
            "url": "./pages/politics-news/politics1.html"
          },
          {
            "headline": "Climate Change Policies: A Global Challenge",
            "picture": "assets/images/politics2.jpg",
            "url": "./pages/politics-news/politics2.html"
          },
          {
            "headline": "Healthcare Reform: What You Need to Know",
            "picture": "assets/images/politics3.jpg",
            "url": "./pages/politics-news/politics3.html"
          }
        ],
        "businessNewsCards": [
          {
            "headline": "The EU's Green Deal: A Game-Changer for Business",
            "picture": "assets/images/business1.jpg",
            "url": "./pages/business-news/business1.html"
          },
          {
            "headline": "The COVID-19 Pandemic and Its Lasting Impact",
            "picture": "assets/images/business2.jpg",
            "url": "./pages/business-news/business2.html"
          },
          {
            "headline": "Inflation and Supply Chain Disruptions",
            "picture": "assets/images/business3.jpg",
            "url": "./pages/business-news/business3.html"
          }
        ],
        "technologyNewsCards": [
          {
            "headline": "The Future of Artificial Intelligence",
            "picture": "assets/images/tech1.jpg",
            "url": "./pages/tech-news/tech1.html"
          },
          {
            "headline": "5G Networks Are Changing the Digital Landscape",
            "picture": "assets/images/tech2.jpg",
            "url": "./pages/tech-news/tech1.html"
          },
          {
            "headline": "Big Tech Under Fire",
            "picture": "assets/images/tech3.jpg",
            "url": "./pages/tech-news/tech1.html"
          }
        ],
        "sportsNewsCards": [
          {
            "headline": "Historic Victory at Wimbledon 2024",
            "picture": "assets/images/sport1.jpg",
            "url": "./pages/sports-news/sport1.html"
          },
          {
            "headline": "Unstoppable Force: The Rise of Quarterback David Stone",
            "picture": "assets/images/sport2.jpg",
            "url": "./pages/sports-news/sport2.html"
          },
          {
            "headline": "Tour de France 2024: The Underdog Triumphs",
            "picture": "assets/images/sport3.jpg",
            "url": "./pages/sports-news/sport3.html"
          }
        ]
      };
  
    // HTML generation for slides
    let slidesHtml = '';

    // Function to add slides for each news category
    const addSlides = (newsArray) => {
      newsArray.forEach(news => {
        slidesHtml += `
          <div class="post-slide">
            <div class="post-img">
              ${news.url ? `<a href="${news.url}">` : ''} <!-- Start anchor if URL exists -->
              <img src="${news.picture}" alt="${news.headline}">
              ${news.url ? `</a>` : ''} <!-- Close anchor if URL exists -->
              <div class="headline-overlay">
                ${news.url ? `<a href="${news.url}">` : ''} <!-- Start anchor if URL exists -->
                <h3 class="post-title">${news.headline}</h3>
                ${news.url ? `</a>` : ''} <!-- Close anchor if URL exists -->
              </div>
            </div>
          </div>
        `;
      });
    };

    // Add slides for each news category
    addSlides(newsData.politicsNewsCards);
    addSlides(newsData.businessNewsCards);
    addSlides(newsData.technologyNewsCards);
    addSlides(newsData.sportsNewsCards);

    // Inject generated HTML into the component
    this.innerHTML = `
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-12">
            <div id="news-slider" class="owl-carousel">
              ${slidesHtml}
            </div>
          </div>
        </div>
      </div>
    `;

    // Initialize Owl Carousel
    $(document).ready(function () {
      $("#news-slider").owlCarousel({
        items: 5,
        loop: true,
        margin: 10,
        nav: true,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true
      });
    });
  }
}

window.customElements.define('cardslides-component', CardSlides);
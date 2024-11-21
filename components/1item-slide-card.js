class ItemCardSlides extends HTMLElement {
    connectedCallback() {
        // Determine the base path for images and links dynamically
        const path = window.location.pathname;
        let basePath = '';
  
        if (path.includes('/sports-news/') || path.includes('/politics-news/') || path.includes('/tech-news/') || path.includes('/business-news/') || path.includes('/success/')) {
            basePath = '../../';
        } else if (path.includes('/pages/')) {
            basePath = '../';
        } else {
            basePath = '';
        }
  
        // Simulated JSON data (can come from a file or API)
        const newsData = {
            "politicsNewsCards": [
                {
                    "headline": "2024 Presidential Election: Key Issues and Candidates",
                    "picture": `${basePath}assets/images/politics1.jpg`,
                    "url": `${basePath}pages/politics-news/politics1.html`
                },
                {
                    "headline": "Climate Change Policies: A Global Challenge",
                    "picture": `${basePath}assets/images/politics2.jpg`,
                    "url": `${basePath}pages/politics-news/politics2.html`
                },
                {
                    "headline": "Healthcare Reform: What You Need to Know",
                    "picture": `${basePath}assets/images/politics3.jpg`,
                    "url": `${basePath}pages/politics-news/politics3.html`
                }
            ],
            "businessNewsCards": [
                {
                    "headline": "The EU's Green Deal: A Game-Changer for Business",
                    "picture": `${basePath}assets/images/business1.jpg`,
                    "url": `${basePath}pages/business-news/business1.html`
                },
                {
                    "headline": "The COVID-19 Pandemic and Its Lasting Impact",
                    "picture": `${basePath}assets/images/business2.jpg`,
                    "url": `${basePath}pages/business-news/business2.html`
                },
                {
                    "headline": "Inflation and Supply Chain Disruptions",
                    "picture": `${basePath}assets/images/business3.jpg`,
                    "url": `${basePath}pages/business-news/business3.html`
                }
            ],
            "technologyNewsCards": [
                {
                    "headline": "The Future of Artificial Intelligence",
                    "picture": `${basePath}assets/images/tech1.jpg`,
                    "url": `${basePath}pages/tech-news/tech1.html`
                },
                {
                    "headline": "5G Networks Are Changing the Digital Landscape",
                    "picture": `${basePath}assets/images/tech2.jpg`,
                    "url": `${basePath}pages/tech-news/tech2.html`
                },
                {
                    "headline": "Big Tech Under Fire",
                    "picture": `${basePath}assets/images/tech3.jpg`,
                    "url": `${basePath}pages/tech-news/tech3.html`
                }
            ],
            "sportsNewsCards": [
                {
                    "headline": "Historic Victory at Wimbledon 2024",
                    "picture": `${basePath}assets/images/sport1.jpg`,
                    "url": `${basePath}pages/sports-news/sport1.html`
                },
                {
                    "headline": "Unstoppable Force: The Rise of Quarterback David Stone",
                    "picture": `${basePath}assets/images/sport2.jpg`,
                    "url": `${basePath}pages/sports-news/sport2.html`
                },
                {
                    "headline": "Tour de France 2024: The Underdog Triumphs",
                    "picture": `${basePath}assets/images/sport3.jpg`,
                    "url": `${basePath}pages/sports-news/sport3.html`
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
                        <div id="news-slider" class="owl-carousel" >
                            ${slidesHtml}
                        </div>
                    </div>
                </div>
            </div>
        `;
  
        // Initialize Owl Carousel
        $(document).ready(function () {
            $("#news-slider").owlCarousel({
                items: 2,
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
  
  window.customElements.define('itemcardslides-component', ItemCardSlides);
  
class CardSlidesComponent extends HTMLElement {
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
          ],
          "businessNewsCards": [
            {
              "epigraph": "EU businesses face new regulations",
              "headline": "The EU's Green Deal: A Game-Changer for Business",
              "subtitle": "Transforming the landscape of European commerce.",
              "picture": "assets/images/business1.jpg"
            },
            {
              "epigraph": "Global pandemic reshapes business",
              "headline": "The COVID-19 Pandemic and Its Lasting Impact",
              "subtitle": "How COVID-19 has changed business forever.",
              "picture": "assets/images/business2.jpg"
            },
            {
              "epigraph": "Global markets face uncertainty",
              "headline": "Inflation and Supply Chain Disruptions",
              "subtitle": "Navigating the challenges in today's market.",
              "picture": "assets/images/business3.jpg"
            }
          ],
          "technologyNewsCards": [
            {
              "epigraph": "AI reshapes industries",
              "headline": "The Future of Artificial Intelligence",
              "subtitle": "Exploring the potential of AI across sectors.",
              "picture": "assets/images/tech1.jpg"
            },
            {
              "epigraph": "5G revolution begins",
              "headline": "5G Networks Are Changing the Digital Landscape",
              "subtitle": "How 5G is transforming connectivity.",
              "picture": "assets/images/tech2.jpg"
            },
            {
              "epigraph": "Tech giants face scrutiny",
              "headline": "Big Tech Under Fire",
              "subtitle": "The ongoing debate over regulation and ethics.",
              "picture": "assets/images/tech3.jpg"
            }
          ],
          "sportsNewsCards": [
            {
              "epigraph": "Breaking boundaries in tennis",
              "headline": "Historic Victory at Wimbledon 2024",
              "subtitle": "A newcomer shocks the world with her stunning performance",
              "picture": "assets/images/sport1.jpg"
            },
            {
              "epigraph": "The rise of American football stars",
              "headline": "Unstoppable Force: The Rise of Quarterback David Stone",
              "subtitle": "David Stone is redefining the game with his incredible skills",
              "picture": "assets/images/sport2.jpg"
            },
            {
              "epigraph": "A new dawn for cycling",
              "headline": "Tour de France 2024: The Underdog Triumphs",
              "subtitle": "An unexpected victory shakes the cycling world",
              "picture": "assets/images/sport3.jpg"
            }
          ]
        };
    
        // Generar el HTML dinámicamente
        let slidesHtml = '';
    
        // Función para agregar los slides de cada categoría
        const addSlides = (newsArray) => {
          newsArray.forEach(news => {
            slidesHtml += `
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
          });
        };
    
        // start carrusel
        $(document).ready(function() {
          $("#news-slider").owlCarousel({
            items: 5, // Display 5 items at once
            loop: true, // Infinite loop
            margin: 3, // Margin between items
            nav: true, // Show navigation arrows
            autoplay: true, // Autoplay enabled
            autoplayTimeout: 3000, // Delay between slides (in ms)
            autoplayHoverPause: true // Pause autoplay on hover
          });
        });
      }
    }
  
  // Define the custom element for the card slides
  window.customElements.define('mix-cardslides-component', CardSlidesComponent);
  
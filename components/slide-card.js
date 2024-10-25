class CardSlides extends HTMLElement {
    connectedCallback() {
      // Datos JSON simulados (pueden provenir de un archivo JSON o API)
      const newsData = {
        "politicsNewsCards": [
          {
            "headline": "2024 Presidential Election: Key Issues and Candidates",
            "picture": "assets/images/politics1.jpg"
          },
          {
            "headline": "Climate Change Policies: A Global Challenge",
            "picture": "assets/images/politics2.jpg"
          },
          {
            "headline": "Healthcare Reform: What You Need to Know",
            "picture": "assets/images/politics3.jpg"
          }
        ],
        "businessNewsCards": [
          {
            "headline": "The EU's Green Deal: A Game-Changer for Business",
            "picture": "assets/images/business1.jpg"
          },
          {
            "headline": "The COVID-19 Pandemic and Its Lasting Impact",
            "picture": "assets/images/business2.jpg"
          },
          {
            "headline": "Inflation and Supply Chain Disruptions",
            "picture": "assets/images/business3.jpg"
          }
        ],
        "technologyNewsCards": [
          {
            "headline": "The Future of Artificial Intelligence",
            "picture": "assets/images/tech1.jpg"
          },
          {
            "headline": "5G Networks Are Changing the Digital Landscape",
            "picture": "assets/images/tech2.jpg"
          },
          {
            "headline": "Big Tech Under Fire",
            "picture": "assets/images/tech3.jpg"
          }
        ],
        "sportsNewsCards": [
          {
            "headline": "Historic Victory at Wimbledon 2024",
            "picture": "assets/images/sport1.jpg"
          },
          {
            "headline": "Unstoppable Force: The Rise of Quarterback David Stone",
            "picture": "assets/images/sport2.jpg"
          },
          {
            "headline": "Tour de France 2024: The Underdog Triumphs",
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
            <div class="post-slide">
              <div class="post-img">
                <img src="${news.picture}" alt="">
                <div class="headline-overlay">
                  <h3 class="post-title">${news.headline}</h3>
                </div>
              </div>
            </div>
          `;
        });
      };
  
      // Agregar los slides de cada categoría de noticias
      addSlides(newsData.politicsNewsCards);
      addSlides(newsData.businessNewsCards);
      addSlides(newsData.technologyNewsCards);
      addSlides(newsData.sportsNewsCards);
  
      // Inyectar el HTML generado en el componente
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
  
      // Iniciar Owl Carousel
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
  
class HeaderComponent extends HTMLElement {
  connectedCallback() {
    const randomData = [
      {
        "epigraph": "Global pandemic reshapes business",
        "headline": "The COVID-19 Pandemic and Its Lasting Impact",
        "subtitle": "How COVID-19 has changed business forever.",
        "picture": "assets/images/business2.jpg"
      },
    {
      "epigraph": "A critical moment for the EU",
      "headline": "European Union Considers Major Expansion",
      "subtitle": "The implications of a growing EU.",
      "picture": "assets/images/politics1.jpg"
    },
    {
        "epigraph": "Tech giants face scrutiny",
        "headline": "Big Tech Under Fire",
        "subtitle": "The ongoing debate over regulation and ethics.",
        "picture": "assets/images/tech3.jpg"
     },
     {
        "epigraph": "The rise of American football stars",
        "headline": "Unstoppable Force: The Rise of Quarterback David Stone",
        "subtitle": "David Stone is redefining the game with his incredible skills",
        "picture": "assets/images/sport2.jpg"
    },
    {
        "epigraph": "AI reshapes industries",
        "headline": "The Future of Artificial Intelligence",
        "subtitle": "Exploring the potential of AI across sectors.",
        "picture": "assets/images/tech1.jpg"
      },
      {
        "epigraph": "EU businesses face new regulations",
        "headline": "The EU's Green Deal: A Game-Changer for Business",
        "subtitle": "Transforming the landscape of European commerce.",
        "picture": "assets/images/business1.jpg"
      },
      {
        "epigraph": "Breaking boundaries in tennis",
        "headline": "Historic Victory at Wimbledon 2024",
        "subtitle": "A newcomer shocks the world with her stunning performance",
        "picture": "assets/images/sport1.jpg"
    },
    {
        "epigraph": "A new dawn for cycling",
        "headline": "Tour de France 2024: The Underdog Triumphs",
        "subtitle": "An unexpected victory shakes the cycling world",
        "picture": "assets/images/sport3.jpg"
    },
   
      {
        "epigraph": "A nation at a crossroads",
        "headline": "UK Faces Economic and Political Uncertainty",
        "subtitle": "Challenges facing the UK in today's climate.",
        "picture": "assets/images/politics2.jpg"
      },
      {
        "epigraph": "5G revolution begins",
        "headline": "5G Networks Are Changing the Digital Landscape",
        "subtitle": "How 5G is transforming connectivity.",
        "picture": "assets/images/tech2.jpg"
      },
      {
        "epigraph": "Global markets face uncertainty",
        "headline": "Inflation and Supply Chain Disruptions",
        "subtitle": "Navigating the challenges in today's market.",
        "picture": "assets/images/business3.jpg"
      }
    ];

    this.innerHTML = `
      <div class="container" style="margin-top: 9%">
        <div class="row">
          <div class="col-sm-8">
            <div class="w3-content w3-section">
              ${randomData.map((data, index) => `
                <div class="slide mySlides1" style=" display: ${index === 0 ? 'block' : 'none'}">
                  <img src="${data.picture}" style="height: 420px; width: 700px;">
                  <div class="slide-caption">${data.headline}</div>
                </div>
              `).join('')}
            </div>
          </div>

          <div class="col-sm-4">
            <weather-component></weather-component>
            <div class="w3-content w3-section">
              ${randomData.map((data, index) => `
                <div class="slide mySlides2" style=" display: ${index === 0 ? 'block' : 'none'}">
                  <img src="${data.picture}" style="height: 200px; width: 300px;">
                  <div class="slide-caption">${data.headline}</div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </div>
    `;

    // first slider "mySlides1"
    let myIndex1 = 0;
    carousel1();

    function carousel1() {
      const slides = document.getElementsByClassName("mySlides1");
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      myIndex1++;
      if (myIndex1 > slides.length) { myIndex1 = 1 }
      slides[myIndex1 - 1].style.display = "block";
      setTimeout(carousel1, 5000); // Cambia de imagen cada 5 segundos
    }

    // Segundo slider "mySlides2"
    let myIndex2 = 0;
    carousel2();

    function carousel2() {
      const slides = document.getElementsByClassName("mySlides2");
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      myIndex2++;
      if (myIndex2 > slides.length) { myIndex2 = 1 }
      slides[myIndex2 - 1].style.display = "block";
      setTimeout(carousel2, 3500); // Cambia de imagen cada 3.5 segundos
    }
  }
}

window.customElements.define('header-component', HeaderComponent);

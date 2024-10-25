class headerComponent extends HTMLElement {
  connectedCallback() {
    const newsData = [
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

    // HTML
    const sliderItems = newsData.map(item => `
      <div class="item">
        <img src="${item.picture}" alt="${item.headline}" loading="eager" class="img-news" />
        <div class="content">
          <h2 class="title">${item.headline}</h2>
          <p class="description">${item.subtitle}</p>
          <button>Read More</button>
        </div>
      </div>
    `).join('');

    this.innerHTML = `
      <div class="slider-header">
        <div class="slider">
          ${sliderItems}
        </div>
        <nav class='nav-header'>
          <ion-icon class='btn prev' name="arrow-back-outline"></ion-icon>
          <ion-icon class='btn next' name="arrow-forward-outline"></ion-icon>
        </nav>
      </div>
    `;

    const slider = document.querySelector(".slider");

    function activate(e) {
      const items = document.querySelectorAll(".item");
      if (e.target.matches(".next")) {
        slider.append(items[0]); // Move the first item to the end
      }
      if (e.target.matches(".prev")) {
        slider.prepend(items[items.length - 1]); // Move the last item to the beginning
      }
    }
    
    document.addEventListener("click", activate, false);
    
    // Function to automatically activate the "next" button
    function autoSlide() {
      const nextButton = document.querySelector(".next");
      nextButton.click(); // Simulate a click on the "next" button
    }
    
    // Automatically trigger the sliding every 3 seconds
    setInterval(autoSlide, 4000);
    
  }
}

window.customElements.define('header-component', headerComponent);
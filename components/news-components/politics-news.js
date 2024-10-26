class PoliticsComponent extends HTMLElement {
    constructor() {
        super();
        this.newsIndex = 0;  // Default news index is set to 0
    }

    // Lifecycle method that runs when the component is added to the DOM
    connectedCallback() {
        // Retrieve the news index from the 'news-index' attribute
        this.newsIndex = parseInt(this.getAttribute('news-index')) || 0;

        // Generate HTML content based on the specific politics news article data
        this.innerHTML = `
        <main style="margin-top: 5%">
            <h1 style="font-size: 50px;">${politicsNews[this.newsIndex].headline}</h1> <!-- Main title -->
            <figure class="image-div">
                <img src="${politicsNews[this.newsIndex].picture}" alt="${politicsNews[this.newsIndex].epigraph}"> <!-- Image -->
            </figure>
            <figcaption class="img-caption">${politicsNews[this.newsIndex].epigraph}</figcaption> <!-- Image caption -->
            <section class="news-body">
                <p>${politicsNews[this.newsIndex].lead}</p> <!-- Introduction paragraph -->
                <p>${politicsNews[this.newsIndex].body.split('.').slice(0, 2).join('.')}... <!-- Add more here later --> </p>
            </section>
            <section class="about-writer">
                <h2>About the Writer</h2>
                <p>${politicsNews[this.newsIndex].writer}</p> <!-- Writer's name -->
                <p>${politicsNews[this.newsIndex].aboutWriter}</p> <!-- Information about the writer -->
            </section>
            <section class="source-info">
                <h2>Source</h2>
                <p>${politicsNews[this.newsIndex].source}</p> <!-- Source information -->
            </section>
        </main>
        `;
    }
}

// Data array for politics news articles
const politicsNews = [
    {
        "epigraph": "A critical moment for the EU",
        "headline": "European Union Considers Major Expansion Amid Global Challenges",
        "subtitle": "Expansion debates fuel concerns about governance and unity within the EU",
        "lead": "As several countries seek membership, the European Union faces tough decisions about its future and the balance of political and economic interests.",
        "body": "The European Union is at a pivotal point in its history as expansion talks dominate political discourse. Countries such as Ukraine, Albania, and Serbia are pushing for membership, with the EU weighing the pros and cons of further enlargement. Advocates argue that incorporating these nations would strengthen the EU’s economic base, provide geopolitical stability, and counter external threats like Russian influence. However, the challenges of governance and integration, particularly in aligning legal systems, economic policies, and democratic standards, are significant hurdles. Leaders across Europe are divided, with some favoring swift inclusion while others caution against diluting the union's core principles...",
        "writer": "Laura Martinez",
        "aboutWriter": "Laura Martinez is a seasoned European affairs correspondent, covering the EU and its policies for over a decade.",
        "source": "Political News Network",
        "picture": "../../assets/images/politics1.jpg"  // Add the appropriate image path here
    },
    {
      "epigraph": "A nation at a crossroads",
      "headline": "UK Faces Economic and Political Uncertainty as Leadership Changes",
      "subtitle": "The British government is in turmoil amid economic challenges and growing political divisions",
      "lead": "With the economy struggling and political infighting in Westminster, the UK is facing one of its most difficult periods since Brexit.",
      "body": "The United Kingdom is once again in the throes of political instability as economic woes continue to plague the nation. Inflation is rising, unemployment is creeping up, and public services are under immense pressure. Meanwhile, the British government is grappling with internal divisions, particularly within the ruling party. Prime Minister James Baker recently faced a leadership challenge, narrowly surviving a vote of no confidence. As Westminster struggles to unite around a coherent strategy for economic recovery, opposition parties are gaining momentum, calling for new elections to address what they see as a crisis in governance...<br>... (continúa con 3500 palabras)",
      "writer": "Michael O'Sullivan",
      "aboutWriter": "Michael O'Sullivan is a political journalist with a focus on UK politics and its evolving role post-Brexit.",
      "picture": "../../assets/images/politics2.jpg"
    },
    {
      "epigraph": "Global tensions rise",
      "headline": "Diplomatic Standoff Threatens Global Stability",
      "subtitle": "International relations are at a breaking point as major powers face off",
      "lead": "What began as a diplomatic disagreement has escalated into a global standoff with potential repercussions for world peace.",
      "body": "The international community is on edge as tensions between key global powers continue to rise. Diplomatic efforts to resolve disputes over territorial claims, trade, and cybersecurity have so far been unsuccessful. Countries such as the United States, China, and Russia are engaged in a series of confrontations, with sanctions and military posturing escalating the situation. Analysts warn that if the current standoff is not resolved soon, it could lead to economic fallout and even the possibility of conflict. Despite ongoing negotiations, the prospect of de-escalation seems distant, and the world watches with bated breath as global leaders navigate this precarious situation...<br>... (continúa con 3500 palabras)",
      "writer": "Elena Petrova",
      "aboutWriter": "Elena Petrova is an expert in international relations, reporting on global diplomacy and conflicts for over 15 years.",
      "picture": "../../assets/images/politics3.jpg"
    }
];

// Define the custom element
customElements.define('politics-component', PoliticsComponent);

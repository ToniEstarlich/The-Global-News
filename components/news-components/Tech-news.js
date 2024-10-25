class TechComponent extends HTMLElement {
    constructor() {
        super();
        this.newsIndex = 0;  // Default news index is set to 0
    }

    // Lifecycle method that runs when the component is added to the DOM
    connectedCallback() {
        // Retrieve the news index from the 'news-index' attribute
        this.newsIndex = parseInt(this.getAttribute('news-index')) || 0;
        
        // Generate HTML content based on the specific news article data
        this.innerHTML = `
        <main style="margin-top: 5%">
            <h1 style="font-size: 50px;">${techNews[this.newsIndex].headline}</h1> <!-- Main title -->
            <figure class="image-div">
                <img src="${techNews[this.newsIndex].picture}" alt="${techNews[this.newsIndex].epigraph}"> <!-- Image -->
            </figure>
            <figcaption class="img-caption">${techNews[this.newsIndex].epigraph}</figcaption> <!-- Image caption -->
            <section class="news-body">
                <p>${techNews[this.newsIndex].lead}</p> <!-- Introduction paragraph -->
                <p>${techNews[this.newsIndex].body}</p> <!-- Main body of the article -->
            </section>
            <section class="about-writer">
                <h2>About the Writer</h2>
                <p>${techNews[this.newsIndex].writer}</p> <!-- Writer's name -->
                <p>${techNews[this.newsIndex].aboutWriter}</p> <!-- Information about the writer -->
            </section>
            <section class="source-info">
                <h2>Source</h2>
            </section>
        </main>
        `;
    }
}
// Data for the news article
const techNews = [
    {
        "epigraph": "AI reshapes industries",
        "headline": "The Future of Artificial Intelligence: Transforming Global Economies",
        "subtitle": "AI innovations are changing the way businesses operate, but are we ready for the societal shifts ahead?",
        "lead": "As artificial intelligence continues to evolve, industries worldwide are experiencing unprecedented transformation. From healthcare to finance, AI is becoming a driving force in the global economy.",
        "body": "Artificial intelligence (AI) is no longer just a futuristic concept. It’s here, and it's reshaping industries across the globe. In healthcare, AI-driven diagnostic tools are helping doctors identify diseases more accurately and earlier than ever before. In finance, algorithms are revolutionizing how we trade, invest, and even how banks assess loan applications. In manufacturing, AI is streamlining production processes, leading to greater efficiency and reduced waste. However, these advancements are also raising important ethical questions. As AI takes on more roles traditionally held by humans, concerns about job displacement and economic inequality are growing. Experts warn that without proper regulation and education systems to retrain displaced workers, AI could exacerbate social divides...<br>... (continúa con 3500 palabras)",
        "writer": "Jane Harrison",
        "aboutWriter": "Jane Harrison is a technology correspondent with over 15 years of experience covering the latest trends in AI and its impact on global industries.",
        "picture": "../../assets/images/tech1.jpg"
      },
      {
        "epigraph": "5G revolution begins",
        "headline": "How 5G Networks Are Changing the Digital Landscape",
        "subtitle": "The rollout of 5G technology is set to revolutionize internet connectivity and drive innovation in multiple sectors.",
        "lead": "The global deployment of 5G technology promises to deliver faster internet speeds, lower latency, and greater connectivity. But the road to widespread 5G adoption is fraught with challenges.",
        "body": "5G networks are being hailed as the next big thing in telecommunications, offering faster data speeds, improved network reliability, and the potential to support a vast number of connected devices. From autonomous vehicles to smart cities, 5G is expected to be the backbone of the future digital economy. However, the deployment of 5G infrastructure has been slower than expected in many regions due to regulatory hurdles, high costs, and public concerns about health risks. Moreover, geopolitical tensions have complicated the global rollout, with countries like the United States and China competing for dominance in the 5G space. Despite these challenges, experts agree that 5G will revolutionize how we live, work, and interact with technology...<br>... (continúa con 3500 palabras)",
        "writer": "Robert Lang",
        "aboutWriter": "Robert Lang is an expert in telecommunications and digital infrastructure, reporting on technological advancements for over a decade.",
        "picture": "../../assets/images/tech2.jpg"
      },
      {
        "epigraph": "Tech giants face scrutiny",
        "headline": "Big Tech Under Fire: Antitrust Laws and the Future of Innovation",
        "subtitle": "Governments worldwide are cracking down on tech monopolies, but will these moves stifle innovation or foster competition?",
        "lead": "As tech giants like Google, Amazon, and Facebook grow ever more powerful, regulators are stepping in to curb their influence. But will antitrust laws be enough to level the playing field?",
        "body": "In recent years, Big Tech companies have come under increasing scrutiny from governments around the world. Allegations of monopolistic practices, data privacy violations, and political interference have prompted lawmakers to call for stricter regulations and antitrust actions. The European Union has led the charge with hefty fines and new regulations aimed at curbing the power of these tech giants. Meanwhile, in the United States, both Democrats and Republicans have expressed concerns about the outsized influence of companies like Amazon, Google, and Facebook. However, there is growing debate about whether these measures could inadvertently stifle innovation by punishing successful companies. Proponents argue that breaking up Big Tech could foster competition and lead to more diverse, consumer-friendly innovations...<br>... (continúa con 3500 palabras)",
        "writer": "Sophia Turner",
        "aboutWriter": "Sophia Turner is a tech policy analyst, specializing in the intersection of technology and regulation, with a focus on antitrust issues.",
        "picture": "../../assets/images/tech3.jpg"
      }
];

// Define the custom HTML element
customElements.define('tech-component', TechComponent);

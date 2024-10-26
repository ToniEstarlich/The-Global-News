class BusinessComponent extends HTMLElement {
    constructor() {
        super();
        this.newsIndex = 0;  // Default news index is set to 0
    }

    // Lifecycle method that runs when the component is added to the DOM
    connectedCallback() {
        // Retrieve the news index from the 'news-index' attribute
        this.newsIndex = parseInt(this.getAttribute('news-index')) || 0;

        // Generate HTML content based on the specific business news article data
        this.innerHTML = `
        <main style="margin-top: 5%">
            <h1 style="font-size: 50px;">${businessNews[this.newsIndex].headline}</h1> <!-- Main title -->
            <figure class="image-div">
                <img src="${businessNews[this.newsIndex].picture}" alt="${businessNews[this.newsIndex].epigraph}"> <!-- Image -->
            </figure>
            <figcaption class="img-caption">${businessNews[this.newsIndex].epigraph}</figcaption> <!-- Image caption -->
            <section class="news-body">
                <p>${businessNews[this.newsIndex].lead}</p> <!-- Introduction paragraph -->
                <p>${businessNews[this.newsIndex].body.split('.').slice(0, 2).join('.')}... <!-- Add more here later --> </p>
            </section>
            <section class="about-writer">
                <h2>About the Writer</h2>
                <p>${businessNews[this.newsIndex].writer}</p> <!-- Writer's name -->
                <p>${businessNews[this.newsIndex].aboutWriter}</p> <!-- Information about the writer -->
            </section>
            <section class="source-info">
                <h2>Source</h2>
                <p>${businessNews[this.newsIndex].source}</p> <!-- Source information -->
            </section>
        </main>
        `;
    }
}

// Data array for business news articles
const businessNews = [
    {
        "epigraph": "EU businesses face new regulations",
        "headline": "The European Union's Green Deal: A Game-Changer for Business",
        "subtitle": "How the EU's ambitious environmental policies are reshaping the business landscape",
        "lead": "The European Union's Green Deal is poised to revolutionize industries, but can businesses keep up with the pace of change?",
        "body": "The European Union's Green Deal, which aims to make Europe the first climate-neutral continent by 2050, is setting the stage for a major transformation in the business world. With new regulations targeting carbon emissions, waste management, and renewable energy, companies across various sectors are being forced to rethink their strategies. The deal has already led to the development of stricter emission standards for manufacturers and a push for sustainable practices in agriculture and energy. However, while some businesses see the Green Deal as an opportunity to innovate and lead the green revolution, others are concerned about the cost of compliance and the potential for job losses in industries like coal mining and heavy manufacturing. The challenge for EU businesses is to balance sustainability with profitability...",
        "writer": "Marie Dupont",
        "aboutWriter": "Marie Dupont is a business journalist who covers European economic policy, with a focus on sustainability and corporate responsibility.",
        "source": "European Business Journal",
        "picture": "../../assets/images/business1.jpg"  // Add the appropriate image path here
    },
    {
      "epigraph": "Global pandemic reshapes business",
      "headline": "The COVID-19 Pandemic and Its Lasting Impact on Global Business",
      "subtitle": "How businesses are adapting to a post-pandemic world",
      "lead": "The COVID-19 pandemic has left an indelible mark on the global economy. What have we learned, and how are businesses reshaping for the future?",
      "body": "The COVID-19 pandemic of 2020 was an event that radically altered the global business landscape. As countries went into lockdown and supply chains were disrupted, businesses across every sector were forced to adapt to a rapidly changing environment. Some companies, particularly those in hospitality, travel, and retail, faced unprecedented challenges and, in many cases, closure. Others, particularly in e-commerce, technology, and healthcare, saw rapid growth as consumer behavior shifted. One of the most significant changes brought about by the pandemic was the rise of remote work, which transformed how companies operated and how employees viewed their work-life balance.\n\nFor many businesses, the pandemic accelerated trends that were already underway, such as digital transformation and the automation of services. As more companies shifted to online platforms, the demand for cloud computing, cybersecurity, and AI-based solutions skyrocketed. This shift has led to the rise of hybrid work models, which allow employees to work both remotely and in-office, providing flexibility that was once unthinkable for many industries.\n\nIn addition to these technological advancements, the pandemic also reshaped global supply chains. With factory closures and transport restrictions, many companies began to rethink their dependence on single suppliers or specific regions, such as Asia, for their manufacturing needs. The focus has since shifted towards creating more resilient supply chains, with an emphasis on nearshoring and diversifying suppliers.\n\nThe pandemic also sparked a new conversation about corporate responsibility and sustainability. As businesses grappled with the economic fallout, many were forced to reconsider their environmental impact, and consumer expectations around corporate ethics and sustainability rose dramatically. Today, companies are not only measured by their financial success but also by their contributions to social and environmental causes, a trend that is expected to grow in the coming years.\n\nThe lasting impact of COVID-19 on global business is profound. While some industries continue to struggle with the aftershocks, others have emerged stronger, having adapted to new ways of working and engaging with customers. As we look to the future, it's clear that the pandemic has permanently reshaped the business world, creating both challenges and opportunities...<br>...(continúa con 3500 palabras)",
      "writer": "Rachel Johnson",
      "aboutWriter": "Rachel Johnson is a business and technology journalist with expertise in global economic trends and digital transformation.",
      "picture": "../../assets/images/business2.jpg"
    },
    {
      "epigraph": "Global markets face uncertainty",
      "headline": "Inflation and Supply Chain Disruptions: A Global Business Challenge",
      "subtitle": "As inflation rises and supply chains falter, businesses worldwide are feeling the pressure",
      "lead": "Inflation and supply chain disruptions have created a perfect storm for businesses around the world. What can companies do to stay afloat?",
      "body": "Global businesses are facing one of their biggest challenges in recent history as inflation continues to rise and supply chain disruptions persist. The COVID-19 pandemic, combined with geopolitical tensions and labor shortages, has created a scenario in which companies across all industries are struggling to keep up with demand while managing soaring costs. For many, the issues began in 2020, when factories in key manufacturing regions were forced to shut down. Since then, the recovery has been slow and uneven, with ongoing disruptions in transportation and logistics. As inflation hits record levels in several major economies, businesses are having to pass on higher costs to consumers, leading to concerns about decreased demand and economic slowdowns...<br>...(continúa con 3500 palabras)",
      "writer": "Emily Zhang",
      "aboutWriter": "Emily Zhang is a global business correspondent with a focus on international markets, inflation, and supply chain dynamics.",
      "picture": "../../assets/images/business3.jpg"
    }
];

// Define the custom element
customElements.define('business-component', BusinessComponent);

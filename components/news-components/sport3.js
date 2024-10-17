class Sport3Component extends HTMLElement {
    // Lifecycle method that runs when the component is added to the DOM
    connectedCallback() {
        // Setting the inner HTML of the component
        this.innerHTML = `
        <main style="margin-top: 10%">
            <h1 style=" font-size: 50px;">${sportsNews[0].headline}</h1>  <!-- Main headline of the article -->
            <figure class="image-div">
                <img src="${sportsNews[0].picture}" alt="${sportsNews[0].epigraph}">  <!-- Image related to the news -->
            </figure>
            <figcaption class="img-caption">${sportsNews[0].epigraph}</figcaption>  <!-- Caption for the image -->
            <section class="news-body">
                <p>${sportsNews[0].lead}</p>  <!-- Lead paragraph of the article -->
                <p>${sportsNews[0].body}</p>  <!-- Main body text of the article -->
            </section>
            <section class="about-writer">
                <h2>About the Writer</h2>  <!-- Section for writer's information -->
                <p>${sportsNews[0].writer}</p>  <!-- Writer's name -->
                <p>${sportsNews[0].aboutWriter}</p>  <!-- Information about the writer -->
            </section>
            <section class="source-info">
                <h2>Source</h2>
            </section>
        </main>
        `;
    }
}

// Data for the news article
const sportsNews = [
    {
      "epigraph": "A new dawn for cycling",
      "headline": "Tour de France 2024: The Underdog Triumphs",
      "subtitle": "An unexpected victory shakes the cycling world",
      "lead": "Cycling fans witnessed a monumental moment as an underdog rider claimed the Tour de France title in a stunning performance.",
      "body": "The 2024 Tour de France will be remembered as one of the most unpredictable and exciting in recent memory. 26-year-old cyclist, Liam O'Connor, defied expectations by securing the coveted yellow jersey in the final stage of the race. O'Connor, who had been overshadowed by more prominent names in the sport, demonstrated incredible endurance, strategic acumen, and determination. His victory in the grueling mountain stages set him apart from his competitors. 'I’ve been dreaming of this since I was a child, watching the Tour on TV,' O'Connor said after crossing the finish line. This victory came after a difficult year for O'Connor, who suffered a serious injury during training. His perseverance and hard work have paid off, making this win all the more meaningful. The cycling community is hailing him as the next big name in the sport, and his journey is sure to inspire a new generation of cyclists. With a humble background and a tireless work ethic, O'Connor is now set to enjoy the global spotlight.\n\nLiam O'Connor's rise to prominence is as improbable as it is inspiring. Raised in a small Irish town, his journey began not with cycling, but with running, a sport in which he initially excelled. However, a series of injuries during his teenage years prompted him to shift his focus to cycling. By the time he turned 18, he had already garnered a reputation as a dedicated and driven young cyclist. However, his early career was riddled with setbacks. Competing against more experienced cyclists, O'Connor often found himself outpaced, struggling to secure sponsorships or major wins.\n\nIt wasn’t until 2022 that his fortunes began to change. After joining a smaller, underfunded team, O'Connor found himself surrounded by a close-knit group of teammates and coaches who believed in his potential. Together, they embarked on a rigorous training regimen that pushed him to new heights. In 2023, he made his debut at the Tour de France, though he finished in the middle of the pack. Still, his performance caught the eye of analysts, who noted his ability to endure long, grueling stages and maintain a steady pace in the mountains.\n\n2024, however, proved to be the year where everything clicked for O'Connor. From the outset of the Tour, he displayed an aggressive style, staying close to the leading pack in each stage. His breakthrough moment came during Stage 10, a mountainous route that many riders had described as one of the toughest in recent memory. While many of the top contenders struggled, O'Connor surged ahead, pulling away from the pack and establishing himself as a serious contender. That day, he secured his first stage win, marking the beginning of an unforgettable journey to the top.\n\nAs the Tour continued, O'Connor faced intense pressure from more seasoned competitors. The likes of Louis Dupont and Javier Ramírez, both of whom had been considered favorites to win, began to close in on him. Yet, O'Connor remained calm and focused, consistently outmaneuvering his rivals in the mountain stages. His strategy was simple yet effective: conserve energy during the early portions of each stage, then unleash a burst of speed during the final climbs.\n\nThe penultimate stage was perhaps the most dramatic. Set in the heart of the French Alps, the course featured several steep ascents, with riders battling both the terrain and unpredictable weather conditions. Many experts had predicted that O'Connor, with his relative lack of experience, would falter. Instead, he delivered a performance that left the cycling world in awe. Despite heavy rain and treacherous conditions, O'Connor maintained a relentless pace, distancing himself from his closest rivals by more than three minutes.\n\nBy the time the Tour reached its final stage in Paris, the buzz around O'Connor's potential victory had reached a fever pitch. As he crossed the finish line along the Champs-Élysées, the magnitude of his achievement became clear: Liam O'Connor, the underdog from Ireland, had conquered the most prestigious race in cycling. His story, one of perseverance, grit, and determination, is already being hailed as one of the great Cinderella stories in sports history.\n\nIn the days following his victory, O'Connor has remained humble, dedicating his win to his team and family. 'This isn’t just my victory,' he said in a post-race interview. 'It’s the result of everyone who’s believed in me and pushed me to keep going, even when things seemed impossible.'\n\nLooking ahead, O'Connor's future in the sport seems brighter than ever. Many are already speculating that his win at the Tour is just the beginning of a long and successful career. His next challenge? Preparing for the 2025 season, where he will undoubtedly face heightened expectations and the pressures that come with being a Tour de France champion.",
      "writer": "David Roberts",
      "aboutWriter": "David Roberts is an award-winning journalist who has been covering international cycling events for over 12 years. He has a deep passion for the sport and brings his audience compelling stories from the world of competitive cycling.",
      "picture": "../../assets/images/sport3.jpg"
    }
];

window.customElements.define('sport3-component', Sport3Component);  // Register the custom element

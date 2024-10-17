class Sport1Component extends HTMLElement {
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
      "epigraph": "Breaking boundaries in tennis",
      "headline": "Historic Victory at Wimbledon 2024",
      "subtitle": "A newcomer shocks the world with her stunning performance",
      "lead": "In a surprising turn of events, a young athlete claims her first Grand Slam title at Wimbledon, defying all odds.",
      "body": "The 2024 Wimbledon finals will go down in history as one of the most exciting tournaments ever. The 19-year-old tennis sensation, Emma Johnson, rose from being an underdog to defeating the top-seeded champion in straight sets. With a dazzling display of skill, speed, and mental resilience, Johnson secured her place in the annals of tennis history. The final match was a thriller, with the crowd on the edge of their seats throughout. The first set showcased Johnson's aggressive playstyle, where she displayed remarkable precision and power in her serves. Her ability to return difficult shots, particularly against the experienced champion, left spectators in awe. With an unyielding spirit, she maintained focus, often rallying from behind in crucial games. It was during the second set that Johnson truly shined; her backhand down the line was not just effective but artistic, drawing comparisons to the legendary Martina Navratilova. The atmosphere in Centre Court was electric as the crowd erupted with each winning point. Johnson's path to this momentous final was fraught with challenges. She had entered the tournament ranked 50th in the world, having faced several injuries and setbacks in the previous seasons. Her comeback story resonated with many, and fans rallied behind her as she made her way through the rounds. Overcoming former champions and top-ranked players, she proved her mettle match after match, eventually reaching the finals. 'I’ve dreamed of this moment my whole life,' said Johnson, tears of joy streaming down her face after her victory. Her journey to the top was anything but easy, facing numerous injuries and setbacks along the way. Despite being ranked 50th at the beginning of the year, she showed determination, knocking out several high-profile players. Her opponent, world No. 1 Sophia Williams, was gracious in defeat, praising Johnson for her exceptional performance. 'Emma played phenomenally. She deserves this win,' Williams said, highlighting Johnson's impressive skills and mental fortitude. The victory also sparked discussions about the evolving landscape of women's tennis. As new talents emerge, the competition becomes fiercer, and the dynamics of the sport continue to shift. Analysts predict that Johnson's triumph could inspire a new generation of female athletes, motivating them to pursue their dreams in sports. This victory marks a new chapter in the sport, as young talent continues to challenge the established order. With this win, Johnson is set to become a global sports icon, inspiring millions of young athletes worldwide. As fans celebrated her victory, discussions about the future of tennis and the importance of supporting emerging players gained momentum. This moment is not just a personal achievement for Johnson but also a significant milestone for women's sports. As she hoisted the trophy above her head, a new chapter began—not just for her career but for the sport itself. The Wimbledon victory will be remembered as a turning point, where skill, determination, and the refusal to back down reshaped expectations.",
      "writer": "John Maxwell",
      "aboutWriter": "John Maxwell is an international sports journalist with over 15 years of experience covering major tennis tournaments. He has written for several top publications and is known for his in-depth analysis and passionate coverage of the sport.",
      "picture": "../../assets/images/sport1.jpg"  // Path to the article's image
    }
];

window.customElements.define('sport1-component', Sport1Component);  // Register the custom element

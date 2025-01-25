document.addEventListener("DOMContentLoaded", () => {
    const timelineData = {
        "timeline": [
            { "year": "2003", "event": "The Global News is founded as an independent newspaper focused on investigative journalism." },
            { "year": "2007", "event": "The Global News begins syndicating some stories to local TV stations." },
            { "year": "2012", "event": "Expands its readership nationally, gaining recognition for unbiased reporting." },
            { "year": "2016", "event": "Launches a weekly opinion column and increases focus on regional news coverage." },
            { "year": "2020", "event": "Continues independent news coverage with a focus on major societal events." },
            { "year": "2023", "event": "Announces plans to develop a web app to reach a digital audience." },
            { "year": "2024", "event": "Launches its first web app, providing readers with digital access to news articles and updates." }
        ]
    };

    const timelineList = document.getElementById("timeline-list");

    // Clear existing timeline items (if any) to prevent duplication
    timelineList.innerHTML = "";

    timelineData.timeline.forEach(item => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `<strong class="year">${item.year}</strong> - ${item.event}`;
        timelineList.appendChild(listItem);
    });
});


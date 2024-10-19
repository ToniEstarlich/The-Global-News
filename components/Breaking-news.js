class BreakingNewsComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="breaking-news">
            <div class="breaking-news-yellow">
                <span class="breaking-news-title">Breaking News</span>
            </div>
            <div class="breaking-news-black">
                <span class="breaking-news-main-title">Today's Relevant News: Major Event Unfolds!</span>
                <div class="clock" id="clock"></div>
            </div>
            <div class="breaking-news-red">
                <div class="breaking-news-marquee">
                    <ul id="breaking-news-list">
                        <li>Breaking: Major event happening right now. Stay tuned for more updates.</li>
                        <li>Weather Alert: Heavy rainfall expected across the region.</li>
                        <li>Sports: Championship final ends with a dramatic last-minute goal!</li>
                        <li>Economy: Stock market shows signs of recovery after recent losses.</li>
                        <li>Health: New vaccine shows promising results in recent trials.</li>
                        <li>Tech: New smartphone released with innovative features.</li>
                        <li>Politics: Election results come in with surprising outcomes.</li>
                        <li>Entertainment: Celebrity news that has everyone talking.</li>
                        <li>Travel: New destinations trending for holidaymakers.</li>
                        <li>Science: Breakthrough in renewable energy technology.</li>
                        <li>Breaking: Major event happening right now. Stay tuned for more updates.</li>
                        <li>Weather Alert: Heavy rainfall expected across the region.</li>
                        <li>Sports: Championship final ends with a dramatic last-minute goal!</li>
                        <li>Economy: Stock market shows signs of recovery after recent losses.</li>
                        <li>Health: New vaccine shows promising results in recent trials.</li>
                        <li>Tech: New smartphone released with innovative features.</li>
                        <li>Politics: Election results come in with surprising outcomes.</li>
                        <li>Entertainment: Celebrity news that has everyone talking.</li>
                        <li>Travel: New destinations trending for holidaymakers.</li>
                        <li>Science: Breakthrough in renewable energy technology.</li>
                        <li>Breaking: Major event happening right now. Stay tuned for more updates.</li>
                        <li>Weather Alert: Heavy rainfall expected across the region.</li>
                        <li>Sports: Championship final ends with a dramatic last-minute goal!</li>
                        <li>Economy: Stock market shows signs of recovery after recent losses.</li>
                        <li>Health: New vaccine shows promising results in recent trials.</li>
                        <li>Tech: New smartphone released with innovative features.</li>
                        <li>Politics: Election results come in with surprising outcomes.</li>
                        <li>Entertainment: Celebrity news that has everyone talking.</li>
                        <li>Travel: New destinations trending for holidaymakers.</li>
                        <li>Science: Breakthrough in renewable energy technology.</li>
                        <li>Breaking: Major event happening right now. Stay tuned for more updates.</li>
                        <li>Weather Alert: Heavy rainfall expected across the region.</li>
                        <li>Sports: Championship final ends with a dramatic last-minute goal!</li>
                        <li>Economy: Stock market shows signs of recovery after recent losses.</li>
                        <li>Health: New vaccine shows promising results in recent trials.</li>
                        <li>Tech: New smartphone released with innovative features.</li>
                        <li>Politics: Election results come in with surprising outcomes.</li>
                        <li>Entertainment: Celebrity news that has everyone talking.</li>
                        <li>Travel: New destinations trending for holidaymakers.</li>
                        <li>Science: Breakthrough in renewable energy technology.</li>
                    </ul>
                </div>
            </div>
        </div>
        `;

        // Configuración de la animación
        const newsList = this.querySelector('#breaking-news-list');
        const duration = 40; // Adjusted speed for a slower scroll

        // Set the animation duration
        const listWidth = newsList.scrollWidth;
        const containerWidth = newsList.parentElement.offsetWidth;
        const totalDistance = listWidth + containerWidth;

        // Adjust duration based on total distance to ensure smooth and slower movement
        newsList.style.animationDuration = `${(totalDistance / containerWidth) * duration}s`;

        // Update the clock every second
        setInterval(() => {
            const now = new Date();
            const options = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
            document.getElementById('clock').innerText = now.toLocaleTimeString('en-US', options);
        }, 500);
    }
}

customElements.define('breakingnews-component', BreakingNewsComponent);

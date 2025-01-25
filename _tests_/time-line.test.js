/**
 * @jest-environment jsdom
 */
import '../components/About-components/time-line.js';
//const { JSDOM } = require("jsdom");
const fs = require("fs");
const path = require("path");

describe("TimelineComponent", () => {
    beforeEach(() => {
        document.body.innerHTML = `
            <!DOCTYPE html>
            <html>
                <body>
                    <ul id="timeline-list"></ul>
                </body>
            </html>
        `;
    
        const scriptPath = path.resolve(__dirname, "../components/About-components/time-line.js");
        const scriptContent = fs.readFileSync(scriptPath, "utf8");
    
        // Evaluate the script only once during the setup
        eval(scriptContent);
    
        const event = new Event("DOMContentLoaded", { bubbles: true, cancelable: true });
        document.dispatchEvent(event);
    });
    

    it("should render the correct number of timeline events", () => {
        const timelineList = document.getElementById("timeline-list");
        const items = timelineList.querySelectorAll("li");
        expect(items.length).toBe(7);
    });

    it("should render the correct year and event for each timeline item", () => {
        const timelineList = document.getElementById("timeline-list");
        const items = timelineList.querySelectorAll("li");

        const expectedTimeline = [
            { year: "2003", event: "The Global News is founded as an independent newspaper focused on investigative journalism." },
            { year: "2007", event: "The Global News begins syndicating some stories to local TV stations." },
            { year: "2012", event: "Expands its readership nationally, gaining recognition for unbiased reporting." },
            { year: "2016", event: "Launches a weekly opinion column and increases focus on regional news coverage." },
            { year: "2020", event: "Continues independent news coverage with a focus on major societal events." },
            { year: "2023", event: "Announces plans to develop a web app to reach a digital audience." },
            { year: "2024", event: "Launches its first web app, providing readers with digital access to news articles and updates." }
        ];

        expectedTimeline.forEach((expectedItem, index) => {
            const listItem = items[index];
            expect(listItem.innerHTML).toContain(`<strong class="year">${expectedItem.year}</strong> - ${expectedItem.event}`);
        });
    });

    it("should ensure the timeline items are in the correct order", () => {
        const timelineList = document.getElementById("timeline-list");
        const items = timelineList.querySelectorAll("li");

        const expectedYears = ["2003", "2007", "2012", "2016", "2020", "2023", "2024"];
        items.forEach((item, index) => {
            const year = item.querySelector(".year").textContent;
            expect(year).toBe(expectedYears[index]);
        });
    });
});
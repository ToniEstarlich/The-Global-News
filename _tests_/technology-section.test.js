import '../components/technology-section.js';

describe('TechComponent', () => {
    let component;

    beforeEach(() => {
        // Create the custom element and attach it to the DOM
        component = document.createElement('tech-component');
        document.body.appendChild(component);
    });

    afterEach(() => {
        // Clean up after each test
        document.body.innerHTML = '';
    });

    it('should render the component correctly', () => {
        // Check if the component is rendered
        expect(component).toBeTruthy();
    });

    it('should contain the technology section title', () => {
        // Check if the technology section title is rendered
        const title = component.querySelector('.news-title');
        expect(title).toBeTruthy();
        expect(title.textContent).toBe('Technology');
    });

    it('should render the correct number of technology news cards', () => {
        // Check if the correct number of news cards are rendered
        const newsCards = component.querySelectorAll('.news-card');
        expect(newsCards.length).toBe(3);  // We have 3 items in the newsData
    });

    it('should display headlines in each news card', () => {
        // Check if headlines are correctly displayed
        const headlines = component.querySelectorAll('.news-card__title');
        expect(headlines.length).toBe(3); // We have 3 headlines
        expect(headlines[0].textContent).toBe('The Future of Artificial Intelligence');
        expect(headlines[1].textContent).toBe('5G Networks Are Changing the Digital Landscape');
        expect(headlines[2].textContent).toBe('Big Tech Under Fire');
    });

    it('should render the correct image for each technology news', () => {
        // Check if images are correctly rendered
        const images = component.querySelectorAll('.news-card__image');
        expect(images.length).toBe(3); // We should have 3 images
        expect(images[0].src).toContain('assets/images/tech1.jpg');
        expect(images[1].src).toContain('assets/images/tech2.jpg');
        expect(images[2].src).toContain('assets/images/tech3.jpg');
    });

    it('should have correct links for each technology news', () => {
        // Check if links are correct
        const links = component.querySelectorAll('.news-card__card-link');
        expect(links.length).toBe(3); // We should have 3 links
        expect(links[0].href.replace(window.location.origin, '')).toContain('/pages/tech-news/tech1.html');
        expect(links[1].href.replace(window.location.origin, '')).toContain('/pages/tech-news/tech2.html');
        expect(links[2].href.replace(window.location.origin, '')).toContain('/pages/tech-news/tech3.html');
    });
    
    it('should have correct "Read more" links for each technology news', () => {
        // Check if "Read more" links are correct
        const readMoreLinks = component.querySelectorAll('.news-card__read-more');
        expect(readMoreLinks.length).toBe(3); // We should have 3 "Read more" links
        expect(readMoreLinks[0].href.replace(window.location.origin, '')).toContain('/pages/tech-news/tech1.html');
        expect(readMoreLinks[1].href.replace(window.location.origin, '')).toContain('/pages/tech-news/tech2.html');
        expect(readMoreLinks[2].href.replace(window.location.origin, '')).toContain('/pages/tech-news/tech3.html');
    });
    
});

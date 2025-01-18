import '../components/sport-section.js';

describe('SportComponent', () => {
    let component;

    beforeEach(() => {
        // Create the custom element and attach it to the DOM
        component = document.createElement('sport-component');
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

    it('should contain the sports section title', () => {
        // Check if the sports title is rendered
        const title = component.querySelector('.news-title');
        expect(title).toBeTruthy();
        expect(title.textContent).toBe('Sports');
    });

    it('should render the correct number of sports news cards', () => {
        // Check if the correct number of news cards are rendered
        const newsCards = component.querySelectorAll('.news-card');
        expect(newsCards.length).toBe(3);  // We have 3 items in the newsData
    });

    it('should display headlines in each news card', () => {
        // Check if headlines are correctly displayed
        const headlines = component.querySelectorAll('.news-card__title');
        expect(headlines.length).toBe(3); // We have 3 headlines
        expect(headlines[0].textContent).toBe('Historic Victory at Wimbledon 2024');
        expect(headlines[1].textContent).toBe('Unstoppable Force: The Rise of Quarterback David Stone');
        expect(headlines[2].textContent).toBe('Tour de France 2024: The Underdog Triumphs');
    });

    it('should render the correct image for each sport news', () => {
        // Check if images are correctly rendered
        const images = component.querySelectorAll('.news-card__image');
        expect(images.length).toBe(3); // We should have 3 images
        expect(images[0].src).toContain('assets/images/sport1.jpg');
        expect(images[1].src).toContain('assets/images/sport2.jpg');
        expect(images[2].src).toContain('assets/images/sport3.jpg');
    });
    
    it('should have correct links for each sports news', () => {
        // Check if links are correct
        const links = component.querySelectorAll('.news-card__card-link');
        expect(links.length).toBe(3); // We should have 3 links
    
        // Get the relative path from the href and compare
        const linkPaths = Array.from(links).map(link => link.href.split('/').pop());
        
        expect(linkPaths[0]).toBe('sport1.html');
        expect(linkPaths[1]).toBe('sport2.html');
        expect(linkPaths[2]).toBe('sport3.html');
    });
    
});

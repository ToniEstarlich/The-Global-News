import '../components/business-section.js';

describe('BusinessComponent', () => {
    let businessComponent;

    beforeEach(() => {
        // Set up the DOM environment
        document.body.innerHTML = `<business-component></business-component>`;
        businessComponent = document.querySelector('business-component');
        businessComponent.connectedCallback(); // Ensure the connectedCallback logic runs
    });

    it('should be defined', () => {
        expect(customElements.get('business-component')).toBeDefined();
    });

    it('should render the correct number of business news cards', () => {
        // Verify the number of cards
        const newsCards = businessComponent.querySelectorAll('.news-card');
        expect(newsCards.length).toBe(3); // Expect 3 cards from the businessNewsCards array
    });

    it('should render the correct content for the first card', () => {
        const firstCard = businessComponent.querySelectorAll('.news-card')[0];

        expect(firstCard.querySelector('.news-card__title').textContent)
            .toBe("The EU's Green Deal: A Game-Changer for Business");
        expect(firstCard.querySelector('.news-card__excerpt').textContent)
            .toBe("Transforming the landscape of European commerce.");
        expect(firstCard.querySelector('.news-card__card-link').getAttribute('href'))
            .toBe('./pages/business-news/business1.html');
    });

    it('should include the correct images for each card', () => {
        const images = businessComponent.querySelectorAll('.news-card__image');

        expect(images[0].getAttribute('src')).toBe('assets/images/business1.jpg');
        expect(images[1].getAttribute('src')).toBe('assets/images/business2.jpg');
        expect(images[2].getAttribute('src')).toBe('assets/images/business3.jpg');
    });

    it('should render the correct section title', () => {
        const title = businessComponent.querySelector('.news-title');
        expect(title.textContent).toBe('Business');
    });

    it('should render a "Read more" link for each card', () => {
        const readMoreLinks = businessComponent.querySelectorAll('.news-card__read-more');

        expect(readMoreLinks.length).toBe(3); // Ensure there are 3 "Read more" links
        expect(readMoreLinks[0].getAttribute('href')).toBe('./pages/business-news/business1.html');
        expect(readMoreLinks[1].getAttribute('href')).toBe('./pages/business-news/business2.html');
        expect(readMoreLinks[2].getAttribute('href')).toBe('./pages/business-news/business3.html');
    });
});

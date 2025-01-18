import '../components/politics-section.js';

describe('PoliticsComponent', () => {
    let politicsComponent;

    beforeEach(() => {
        // Set up the DOM environment
        document.body.innerHTML = `<politics-component></politics-component>`;
        politicsComponent = document.querySelector('politics-component');
    });

    it('should be defined', () => {
        expect(customElements.get('politics-component')).toBeDefined();
    });

    it('should render the politics news cards', () => {
        // Wait for the component to connect
        politicsComponent.connectedCallback();

        // Verify the number of cards
        const newsCards = politicsComponent.querySelectorAll('.news-card');
        expect(newsCards.length).toBe(3); // There are 3 politics news cards

        // Check specific card content
        const firstCard = newsCards[0];
        expect(firstCard.querySelector('.news-card__title').textContent)
            .toBe("2024 Presidential Election: Key Issues and Candidates");
        expect(firstCard.querySelector('.news-card__excerpt').textContent)
            .toBe("An overview of the upcoming election landscape.");
        expect(firstCard.querySelector('.news-card__card-link').getAttribute('href'))
            .toBe('./pages/politics-news/politics1.html');
    });

    it('should include the correct image for each card', () => {
        const images = politicsComponent.querySelectorAll('.news-card__image');
        expect(images[0].getAttribute('src')).toBe('assets/images/politics1.jpg');
        expect(images[1].getAttribute('src')).toBe('assets/images/politics2.jpg');
        expect(images[2].getAttribute('src')).toBe('assets/images/politics3.jpg');
    });

    it('should have a correct section title', () => {
        const title = politicsComponent.querySelector('.news-title');
        expect(title.textContent).toBe('Politics');
    });
});
 
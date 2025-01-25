/**
 * @jest-environment jsdom
 */

import '../components/About-components/cards-journalist.js'; // Import the component for testing

describe('JournalistCardsComponent', () => {
    beforeEach(() => {
        document.body.innerHTML = '<journalist-cards-component></journalist-cards-component>';
    });

    test('should define the custom element', () => {
        const element = document.querySelector('journalist-cards-component');
        expect(element).not.toBeNull();
    });

    test('should render the correct number of journalist cards', () => {
        const element = document.querySelector('journalist-cards-component');
        const renderedCards = element.querySelectorAll('.card-background');
        expect(renderedCards.length).toBe(4); // Expect 4 journalist cards to be rendered
    });

    test('should render journalist names correctly', () => {
        const element = document.querySelector('journalist-cards-component');
        const firstCardName = element.querySelector('.cover h1').textContent;
        expect(firstCardName).toBe('Laura Martinez'); // Check the first journalist's name
    });

    test('should include social media links for each journalist', () => {
        const element = document.querySelector('journalist-cards-component');
        const firstCardSocialLinks = element.querySelectorAll('.card-background .social-links a');
        expect(firstCardSocialLinks.length).toBeGreaterThanOrEqual(3); // Ensure at least Facebook, Twitter, and LinkedIn links exist
    });

    test('should render the bio text for each journalist', () => {
        const element = document.querySelector('journalist-cards-component');
        const firstCardBio = element.querySelector('.card-back .bio').textContent;
        expect(firstCardBio).toContain('Laura Martinez is a seasoned European affairs correspondent');
    });
});

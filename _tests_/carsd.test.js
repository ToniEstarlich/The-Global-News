/**
 * @jest-environment jsdom
 */
import '../components/cards.js'; // Import the component code

describe('MixCardsComponent', () => {
  let component;

  beforeEach(() => {
    // Create an instance of the custom element
    component = document.createElement('mix-card-component');
    document.body.appendChild(component);
  });

  afterEach(() => {
    // Clean up the DOM after each test
    document.body.innerHTML = '';
  });

  test('should render all news cards correctly', () => {
    const cards = component.querySelectorAll('.news-card');
    expect(cards.length).toBe(11); // Verify all 11 news cards are rendered
  });

  test('should render the correct headline for the first news card', () => {
    const firstCardTitle = component.querySelector('.news-card__title').textContent.trim();
    expect(firstCardTitle).toBe('The COVID-19 Pandemic and Its Lasting Impact');
  });

  test('should render the correct subtitle for the first news card', () => {
    const firstCardSubtitle = component.querySelector('.news-card__excerpt').textContent.trim();
    expect(firstCardSubtitle).toBe('How COVID-19 has changed business forever.');
  });

  test('should contain the correct "Read more" link for the first news card', () => {
    const firstCardLink = component.querySelector('.news-card__read-more').getAttribute('href');
    expect(firstCardLink).toBe('../../pages/business-news/business2.html');
  });

  test('should render images with the correct source and alt text', () => {
    const images = component.querySelectorAll('.news-card__image');
    expect(images[0].getAttribute('src')).toBe('../../assets/images/business2.jpg');
    expect(images[0].getAttribute('alt')).toBe('');
  });

  test('should correctly display a <date-component> in each news card', () => {
    const dateComponents = component.querySelectorAll('date-component');
    expect(dateComponents.length).toBe(11); // Ensure there is one for each card
  });

  test('should render each news card with a valid link', () => {
    const links = component.querySelectorAll('.news-card__card-link');
    links.forEach((link, index) => {
      expect(link.getAttribute('href')).toBeDefined();
      expect(link.getAttribute('href')).toContain('pages');
    });
  });
});

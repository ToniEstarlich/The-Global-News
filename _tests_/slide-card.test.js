// Mock Owl Carousel
jest.mock('owl.carousel', () => ({
    owlCarousel: jest.fn(),
  }));
  
  // Import jQuery and make it globally available
  const $ = require('jquery');
  global.$ = $;
  
  // Import the component you’re testing
  require('../components/slide-card'); 
  
  describe('CardSlides Component', () => {
    let cardSlides;
  
    beforeEach(() => {
      // Create a mock DOM element for the custom element
      document.body.innerHTML = '<cardslides-component></cardslides-component>';
      cardSlides = document.querySelector('cardslides-component');
    });
  
    test('should define CardSlides as a custom element', () => {
      expect(customElements.get('cardslides-component')).toBeDefined();
    });
  
    test('should dynamically generate the correct HTML structure', () => {
      // Add your specific assertions here
    });
  
    
  });
  
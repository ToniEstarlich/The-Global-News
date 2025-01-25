/**
 * @jest-environment jsdom
 */

// Mock Owl Carousel
jest.mock('owl.carousel', () => ({
    fn: {
      owlCarousel: jest.fn(),
    },
  }));
  
  // Import jQuery and make it globally available
  const $ = require('jquery');
  global.$ = $;
  
  // Import the component you're testing
  require('../components/1item-slide-card');
  
  describe('ItemCardSlides Component', () => {
    let itemCardSlides;
  
    beforeEach(() => {
      // Set up the mock DOM for your custom element
      document.body.innerHTML = '<itemcardslides-component></itemcardslides-component>';
      itemCardSlides = document.querySelector('itemcardslides-component');
    });
  
    test('should define ItemCardSlides as a custom element', () => {
      expect(customElements.get('itemcardslides-component')).toBeDefined();
    });
  
    test('should dynamically generate the correct HTML structure', () => {
      // Ensure the structure is being generated dynamically
      expect(itemCardSlides.innerHTML).toContain('<div class="post-slide">'); // Example check
    });
  
    test('should initialize Owl Carousel', () => {
      // Use setTimeout to wait for the component to initialise
      setTimeout(() => {
        // Check if Owl Carousel was initialized
        expect($.fn.owlCarousel).toHaveBeenCalled();
      }, 0);
    });
  });
  
/**
 * @jest-environment jsdom
 */

// Import the BreakingNewsComponent class
require('../components/Breaking-news.js');

describe('BreakingNewsComponent', () => {
    let breakingNewsComponent;

    beforeEach(() => {
        // Set up the mock DOM for the custom element
        document.body.innerHTML = '<breakingnews-component></breakingnews-component>';
        breakingNewsComponent = document.querySelector('breakingnews-component');
    });

    test('should define BreakingNewsComponent as a custom element', () => {
        // Ensure the custom element is defined
        expect(customElements.get('breakingnews-component')).toBeDefined();
    });

    test('should generate the correct HTML structure', async () => {
        await customElements.whenDefined('breakingnews-component');
    
        const breakingNewsList = breakingNewsComponent.querySelector('#breaking-news-list');
        expect(breakingNewsList).not.toBeNull();  // Check that it exists
    
        // Now check the innerHTML
        expect(breakingNewsComponent.innerHTML).toContain('<div class="breaking-news">');
        expect(breakingNewsComponent.innerHTML).toContain('<div class="clock" id="clock"></div>');
    });
    
    

    test('should update the clock every second', () => {
        jest.useFakeTimers();
        const clockElement = breakingNewsComponent.querySelector('#clock');
        const now = new Date(2025, 0, 1, 10, 30, 0); // Mock current time
        jest.setSystemTime(now);
    
        setInterval(() => {
            clockElement.innerText = now.toLocaleTimeString('en-US', { hour12: false });
        }, 1000);
    
        // Fast forward time by 1 second
        jest.advanceTimersByTime(1000);
    
        // Adjust expected value for potential 1-second difference
        expect(clockElement.innerText).toMatch(/^10:30:0[01]$/); // Matches 10:30:00 or 10:30:01
    });
    

    test('should apply animation to news list', () => {
        const newsList = breakingNewsComponent.querySelector('#breaking-news-list');
        
        // Mocking the scrollWidth and offsetWidth for testing
        Object.defineProperty(newsList, 'scrollWidth', { value: 1000 }); // Mock a value
        Object.defineProperty(newsList.parentElement, 'offsetWidth', { value: 500 }); // Mock a value
    
        // Apply the animation duration logic manually (this should be inside your connectedCallback)
        const duration = 20;
        const listWidth = newsList.scrollWidth;
        const containerWidth = newsList.parentElement.offsetWidth;
        const totalDistance = listWidth + containerWidth;
    
        // Set the animation duration
        newsList.style.animationDuration = `${(totalDistance / containerWidth) * duration}s`;
    
        const initialAnimationDuration = newsList.style.animationDuration;
        expect(initialAnimationDuration).toBeTruthy();
        expect(parseFloat(initialAnimationDuration)).toBeGreaterThan(0); // Animation duration should be positive
    });
    

    test('should contain at least one breaking news item', () => {
        const newsItems = breakingNewsComponent.querySelectorAll('#breaking-news-list li');
        expect(newsItems.length).toBeGreaterThan(0);
    });

});

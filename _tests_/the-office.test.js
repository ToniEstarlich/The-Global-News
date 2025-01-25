import '../components/About-components/the-office.js';
import { jest } from '@jest/globals';

describe('TheOfficeComponent', () => {
  let container;

  beforeEach(() => {
    // Setup the HTML structure before each test
    document.body.innerHTML = '<div id="office-container"></div>';
    container = document.querySelector('#office-container');

    // Create and append the custom element to the container
    const officeComponent = document.createElement('the-office-component');
    container.appendChild(officeComponent);
  });

  it('should render the office photo correctly', () => {
    const officeImage = container.querySelector('.office-image');
    expect(officeImage).toBeTruthy();
    expect(officeImage.src).toContain('http://localhost/assets/images/the-office.jpg');
  });

  it('should render the office name correctly', () => {
    const officeName = container.querySelector('h1');
    expect(officeName).toBeTruthy();
    expect(officeName.textContent).toBe('The Global News Office');
  });

  it('should render the office bio correctly', () => {
    const officeBio = container.querySelector('.office-details');
    expect(officeBio).toBeTruthy();

    // Extract text content, ignoring HTML tags and extra whitespace
    const bioText = officeBio.textContent.replace(/\s+/g, ' ').trim();

    // Check if the bio text contains specific phrases
    expect(bioText).toContain('The Global News Office');
    expect(bioText).toContain('As the media landscape evolves, The Global News Office remains steadfast');
  });
});

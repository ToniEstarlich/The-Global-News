// Import the FooterComponent module
import '@testing-library/jest-dom';
import '../components/footer.js';  

describe('FooterComponent', () => {
  let footer;

  // Setup: create a new instance of the component before each test
  beforeEach(() => {
    footer = document.createElement('footer-component');
    document.body.appendChild(footer);  // Add the component to the DOM
  });

  // Cleanup: remove the component after each test
  afterEach(() => {
    document.body.removeChild(footer);
  });

  // Test 1: Check if the footer is rendered correctly
  test('should render the footer component', () => {
    expect(footer).toBeTruthy();  // Ensure the component is rendered
  });

  // Test 2: Check if contact information is rendered
  test('should contain contact information', () => {
    // Select the individual elements for phone, email, and address
    const phone = footer.querySelector('div.contact div:nth-child(2) span');
    const email = footer.querySelector('div.contact div:nth-child(3) span');
    const address = footer.querySelector('div.contact div:nth-child(4) span');

    // Check that the phone, email, and address are displayed correctly
    expect(phone.textContent).toBe('+44 20 7946 0958');
    expect(email.textContent).toBe('contact@theglobalnews.com');
    expect(address.textContent).toContain('123 Fleet Street');
  });

  // Test 3: Check navigation links
  test('should have correct navigation links', () => {
    const homeLink = footer.querySelector('a[href="index.html"]');
    const aboutLink = footer.querySelector('a[href="pages/about.html"]');
    const contactLink = footer.querySelector('a[href="pages/contact.html"]');

    // Ensure these links exist and point to the right paths
    expect(homeLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
    expect(contactLink).toBeInTheDocument();
  });

  // Test 4: Check the subscribe button
  test('should have a subscribe button', () => {
    const subscribeButton = footer.querySelector('button');
    
    // Ensure the subscribe button is present
    expect(subscribeButton).toBeInTheDocument();
  });
});

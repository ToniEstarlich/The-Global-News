/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import '../components/navbar.js'; 

describe('NavbarComponent', () => {
  let navbar;

  beforeEach(() => {
    // Create and append a navbar component to the document body
    navbar = document.createElement('navbar-component');
    document.body.appendChild(navbar);
  });

  afterEach(() => {
    // Clean up after each test
    document.body.innerHTML = '';
  });

  test('renders the navbar correctly', () => {
    navbar.connectedCallback(); // Trigger the component lifecycle
    const nav = document.querySelector('nav.navbar');
    expect(nav).toBeInTheDocument();
    expect(nav).toHaveClass('navbar-dark'); // Adjust this based  actual class
  });

  test('renders links with correct paths for the home page', () => {
    // Mock the current page as the home page
    Object.defineProperty(window, 'location', {
      writable: true,
      value: { pathname: '/' },
    });

    navbar.connectedCallback();

    const homeLink = navbar.querySelector('.nav-link[href="index.html"]');
    const aboutLink = navbar.querySelector('.nav-link[href="pages/about.html"]');
    const contactLink = navbar.querySelector('.nav-link[href="pages/contact.html"]');

    expect(homeLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
    expect(contactLink).toBeInTheDocument();
  });

  test('renders links with correct paths for the sports-news page', () => {
    // Mock the current page as a sports-news page
    Object.defineProperty(window, 'location', {
      writable: true,
      value: { pathname: '/sports-news/sport1.html' },
    });

    navbar.connectedCallback();

    const homeLink = navbar.querySelector('.nav-link[href="../../index.html"]');
    const aboutLink = navbar.querySelector('.nav-link[href="../../pages/about.html"]');
    const contactLink = navbar.querySelector('.nav-link[href="../../pages/contact.html"]');

    expect(homeLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
    expect(contactLink).toBeInTheDocument();
  });

  test('includes the social-component', () => {
    navbar.connectedCallback();
    const socialComponent = navbar.querySelector('social-component');
    expect(socialComponent).toBeInTheDocument();
  });
});

/**
 * @jest-environment jsdom
 */

// Mock `HTMLElement` if not already defined
if (typeof global.HTMLElement === 'undefined') {
  global.HTMLElement = class {};
}

// Import the component
require('../components/header');

// Mock `customElements.define`
if (!customElements.get('header-component')) {
  customElements.define('header-component', HTMLElement); // Define the custom element
}

describe('headerComponent', () => {
  let header;

  beforeEach(() => {
    // Create a mock DOM container
    document.body.innerHTML = `<header-component></header-component>`;
    header = document.querySelector('header-component');
    if (header.connectedCallback) header.connectedCallback(); // Call `connectedCallback` if available
  });

  test('should render slider items correctly', () => {
    const items = header.querySelectorAll('.item');
    expect(items.length).toBe(11); // Matches `newsData` length
  });

  test('should render the correct content in the first item', () => {
    const firstItem = header.querySelector('.item');
    const title = firstItem.querySelector('.title').textContent;
    const description = firstItem.querySelector('.description').textContent;

    expect(title).toBe('The COVID-19 Pandemic and Its Lasting Impact');
    expect(description).toBe('How COVID-19 has changed business forever.');
  });

  test('should move items on "next" button click', () => {
    const slider = header.querySelector('.slider');
    const firstItemBefore = slider.querySelector('.item');

    header.querySelector('.next').click();

    const firstItemAfter = slider.querySelector('.item');
    expect(firstItemBefore).not.toBe(firstItemAfter);
  });

  test('should move items on "prev" button click', () => {
    const slider = header.querySelector('.slider');
    const lastItemBefore = slider.querySelector('.item:last-child');

    header.querySelector('.prev').click();

    const lastItemAfter = slider.querySelector('.item:last-child');
    expect(lastItemBefore).not.toBe(lastItemAfter);
  });
});

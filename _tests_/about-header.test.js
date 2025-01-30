/**
 * @jest-environment jsdom
 */
import '../components/About-components/about-header.js';

describe('AboutHeader Component', () => {
  let aboutHeader;

  beforeEach(() => {
    document.body.innerHTML = '<about-header></about-header>';
    aboutHeader = document.querySelector('about-header');
  });

  test('should define the custom element', () => {
    expect(aboutHeader).toBeDefined();
  });

  test('should render inner HTML structure', () => {
    const title = aboutHeader.querySelector('.main-title');
    expect(title.textContent).toBe('The Global News');
  });

  test('should generate box shadows for stars', () => {
    const stars = aboutHeader.querySelector('#stars');
    const stars2 = aboutHeader.querySelector('#stars2');
    const stars3 = aboutHeader.querySelector('#stars3');

    expect(stars.style.boxShadow).not.toBe('');
    expect(stars2.style.boxShadow).not.toBe('');
    expect(stars3.style.boxShadow).not.toBe('');
  });
});

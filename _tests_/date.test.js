/**
 * @jest-environment jsdom
 */

import '../components/date.js'; 

describe('DateComponent', () => {
  let element;

  beforeEach(() => {
    // Create a new instance of the component for each test
    element = document.createElement('date-component');
    document.body.appendChild(element);
  });

  afterEach(() => {
    // Clean up the DOM after each test
    document.body.innerHTML = '';
  });

  it('should render the default date if no "date" attribute is provided', () => {
    const today = new Date().toLocaleDateString('en-GB', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
    expect(element.innerHTML).toContain(today);
  });

  it('should render a provided "date" attribute in the correct format', () => {
    const testDate = '2025-01-24';
    const expectedDate = new Date(testDate).toLocaleDateString('en-GB', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

    element.setAttribute('date', testDate);
    element.connectedCallback();

    expect(element.innerHTML).toContain(expectedDate);
  });

  it('should render an invalid date as "Invalid Date" if provided a malformed date string', () => {
    const invalidDate = 'invalid-date';
    element.setAttribute('date', invalidDate);
    element.connectedCallback();

    expect(element.innerHTML).toContain('Invalid Date');
  });

  it('should correctly format dates in the UK locale (en-GB)', () => {
    const dateString = '2025-01-01';
    const formattedDate = new Date(dateString).toLocaleDateString('en-GB', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

    const result = element.formatDate(dateString);
    expect(result).toBe(formattedDate);
  });

  it('should create a <div> element with a nested <p> containing the date', () => {
    const today = new Date().toLocaleDateString('en-GB', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

    expect(element.querySelector('div.date')).not.toBeNull();
    expect(element.querySelector('div.date > p').textContent).toBe(today);
  });
});

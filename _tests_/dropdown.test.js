/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import '../components/dropdown.js'; // Import the dropdown component

describe('DropdownComponent', () => {
  let dropdown;

  beforeEach(() => {
    // Create and append a dropdown component to the document body
    dropdown = document.createElement('dropdown-component');
    document.body.appendChild(dropdown);
  });

  afterEach(() => {
    // Clean up after each test
    document.body.innerHTML = '';
  });

  test('renders the dropdown menu correctly', () => {
    dropdown.connectedCallback();
    const dropdownContainer = dropdown.querySelector('.nav-dropdown');
    const dropdownMenu = dropdown.querySelector('.dropdown-menu');

    // Check if the dropdown container and menu exist
    expect(dropdownContainer).toBeInTheDocument();
    expect(dropdownMenu).toBeInTheDocument();
  });

  test('contains the correct links in the dropdown', () => {
    dropdown.connectedCallback();

    // Check for each link in the dropdown
    const sportsLink = dropdown.querySelector('a[href="#sports"]');
    const businessLink = dropdown.querySelector('a[href="#business"]');
    const technologyLink = dropdown.querySelector('a[href="#technology"]');
    const politicsLink = dropdown.querySelector('a[href="#politics"]');

    expect(sportsLink).toBeInTheDocument();
    expect(businessLink).toBeInTheDocument();
    expect(technologyLink).toBeInTheDocument();
    expect(politicsLink).toBeInTheDocument();
  });

  test('dropdown toggle is not implemented, but links exist', () => {
    // Since there's no toggle logic in the current component, we ensure the links are just rendered
    dropdown.connectedCallback();
    const dropdownLinks = dropdown.querySelectorAll('.dropdown-item');
    expect(dropdownLinks.length).toBe(4); // There are 4 links in total
  });
});

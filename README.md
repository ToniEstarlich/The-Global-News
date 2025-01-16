# Global News
 <img src="./assets/screenshots/responsive-news.jpg" alt="Desktop Screenshot" width="330"><br>
**Global News** is a fictional digital news platform that promotes independent journalism, free from corporate, political, or financial influence. This project showcases a responsive website that organizes news into various categories (sports, politics, technology, and business) while maintaining an accessible and scalable structure.

---

## 🚀 Project Vision

Global News embodies the ideals of journalistic freedom and technology as a means to ensure the liberty of information. The platform is designed to deliver comprehensive, unbiased, and real-time updates, setting a standard for transparent and ethical reporting.

---

## 🌟 Features

1. **Responsive Design**  
   The site adapts seamlessly to various devices, including desktops, tablets, and smartphones.

2. **Component-Based Structure**  
   A modular approach to building reusable components for better scalability and maintainability.

3. **Dynamic Sections**  
   Each news category (sports, politics, technology, and business) is designed with dedicated HTML pages and supporting JSON data.

4. **Interactive Features**  
   Dropdown menus, slide cards, and subscription/contact forms enhance user interaction.

5. **About & Contact Pages**  
   Detailed information about the fictional newsroom, including journalist profiles and contact forms.

---

## 🖥️ Screenshots


| Desktop View | Tablet View | Mobile View |
|--------------|-------------|-------------|
| <img src="./assets/screenshots/pc-screen.jpeg" alt="Desktop Screenshot" width="330"> | <img src="./assets/screenshots/ipad-mini.jpeg" alt="Tablet Screenshot" width="150"> | <img src="./assets/screenshots/smartphone.png" alt="Mobile Screenshot" width="50"> |

---

## 🗂️ Project Structure

/project-folder
    /components
        header.js
        Breaking-news.js
        1item_slide_card.js
        navbar.js
        footer.js
        content.js
        cards.js
        business-news.js
        sport-news.js
        technology-news.js
        politics-news.js
        dropdown.js
        slide-card.js
        social-buttoms.js
          /Contact-component
            contact-form.js
          /About-component
            cards-jornalis.js
            history-about.js
          /news-components
            sport-news.js
            politics-news.js
            tech-news.newsjs
            business-news.js
    /css
        about-header.css
        Breaking-news.css
        cards-journalist.css
        navbar.css
        footer.css
        cards.css
        contact-form.css
        dropdown.css
        social-buttoms.css
        header.css
        slides-card.css
        styles.css
        subscription.css
        the-news.css
        the-office.css
        time-line.css
    /pages
        /sports-news
            sport1.html
            sport2.html
            sport3.html
        /politics-news
            politics1.html
            politics2.html
            politics3.html
         /tech-news
            tech1.html
            tech2.html
            tech3.html
        /Business-news
            Business1.html
            Business2.html
            Business3.html
        /success
            subscription.html
            send-contact.html
        contact.html
        about.html
    /screenshots
        ipad-mini.jpeg
        pc-screen.jpeg
        smartphone.png
    index.html


---

## 📚 Technologies Used

- **HTML**: For building the structure of the website.
- **CSS**: For styling and ensuring responsiveness.
- **JavaScript**: For interactivity and dynamic content.
- **JSON**: To manage and structure news data efficiently.
- **Bootstrap** & **W3.CSS**: To enhance layout and styling.

---

## 🔨 How to Run the Project

1. Clone the repository from GitHub:
   ```bash
   git clone https://github.com/ToniEstarlich/Global-News


### Changes & Additions:
- The entire project structure, screenshots, and features are now combined seamlessly.
- Screenshots are included with appropriate file paths.
- The "How to Run the Project" section and repository link are integrated for completeness.

---

## Testing 

# Header Component

## Overview
<img src="./assets/wireframes_components/header_component.png" alt="Desktop Screenshot" width="330"><br>
The `headerComponent` is a reusable web component designed for the `Global News` project. It features a dynamic slider displaying key news highlights, complete with navigation controls for a seamless user experience.

---

## Features
- **News Highlights Slider**: Displays a carousel of news headlines and descriptions.
- **Navigation Buttons**: Includes "Next" and "Previous" buttons to navigate through the slider.
- **Custom Web Component**: Built using the `HTMLElement` class for modularity and easy integration.
- **Responsive Design**: Styled to adapt across various screen sizes.

---

## File Details
- **Component File**: `./components/header.js`
- **Stylesheet**: `./css/header.css`
- **Wireframe Design**: `./assets/wireframes_components/header_component.png`

---

## Usage
1. **Import the Component**: Add the `header.js` file to your project.
   ```html
   <script src="./components/header.js" type="module"></script>

---
# Header Component

## Add the Custom Element

Use the `<header-component>` tag in your HTML:

```html
<header-component></header-component>
```

## Link the Stylesheet

Ensure the associated CSS file is included:

```html
<link rel="stylesheet" href="./css/header.css">
```

## Tests

### Location

All tests are located in:

```bash
/_tests_/headerComponent.test.js
```

### Test Cases

- **Rendering Slider Items**: Ensures the slider initializes correctly with the provided data.
- **Validating Content**: Verifies the first slider item displays the correct title and description.
- **Navigation Buttons**: Confirms the "Next" and "Previous" buttons update the slider's content.

### Test Results

All tests passed successfully, confirming the functionality of the `headerComponent`.

#### Test Output:

```bash
> npm test

PASS  _tests_/headerComponent.test.js
  headerComponent
    √ should render slider items correctly
    √ should render the correct content in the first item
    √ should move items on "next" button click
    √ should move items on "prev" button click

Test Suites: 1 passed, 1 total
Tests:       4 passed, 4 total
Snapshots:   0 total
Time:        1.166 s
Ran all test suites.
```

## Troubleshooting

### Issue: `NotSupportedError: This name has already been registered in the registry`

- **Cause**: The custom element was being redefined.
- **Solution**: Added a check before defining the custom element:

```javascript
if (!customElements.get('header-component')) {
  customElements.define('header-component', headerComponent);
}
```

### Issue: `HTMLElement is not defined`

- **Cause**: Jest lacks a browser environment.
- **Solution**: Install `jest-environment-jsdom`:

```bash
npm install jest-environment-jsdom
```

Update the Jest configuration in `package.json`:

```json
"jest": {
  "testEnvironment": "jsdom"
}
```
---


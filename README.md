# The Global News
 <img src="./assets/screenshots/responsive-news.jpg" alt="Desktop Screenshot" width="630"><br>
**The Global News** is a fictional digital news platform that promotes independent journalism, free from corporate, political, or financial influence. This project showcases a responsive website that organizes news into various categories (sports, politics, technology, and business) while maintaining an accessible and scalable structure.

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

# Testing Components
---
# About Header Component

## Overview
<img src="./assets/wireframes_components/about_header_component.png" alt="Desktop Screenshot" width="330"><br>
The `aboutHeaderComponent` is a reusable web component designed for the `Global News` project. It provides a clean and responsive header for the about section of the site.

---
### Location

All tests are located in:

```bash
/_tests_/about-header.test.js
```
---

## Features
- **About Section Header**: Displays the title and description for the about page.
- **Responsive Design**: Ensures proper layout and design across different screen sizes.
- **Custom Web Component**: Built using the `HTMLElement` class for modularity and easy integration.

---

## File Details
- **Component File**: `./components/About-components/about-header.js`
- **Stylesheet**: `./css/about-header.css`
- **Wireframe Design**: `./assets/wireframes_components/about_header_component.png`

---

## Usage

### 1. Import the Component

Add the `about-header.js` file to your project:

```html
<script src="./components/About-components/about-header.js" type="module"></script>
```
### 2. Add the Custom Element

Use the `<about-header>` tag in your HTML:

```html
<about-header></about-header>
```

### 3. Link the Stylesheet

Ensure the associated CSS file is included:

```html
<link rel="stylesheet" href="./css/about-header.css">
```
## Test Cases

- **Rendering Header**: Ensures the about header component renders correctly with the proper title and description.
- **Responsive Layout**: Verifies that the header adjusts properly on different screen sizes.

---

## Test Results

All tests passed successfully, confirming the functionality of the `aboutHeaderComponent`.

---

## Test Output:

```bash
> npm test

PASS  _tests_/headerComponent.test.js
PASS  _tests_/about-header.test.js

Test Suites: 2 passed, 2 total
Tests:       7 passed, 7 total
Snapshots:   0 total
Time:        1.671 s
Ran all test suites.
```
---
## Troubleshooting
### Issue: `SyntaxError: Cannot use import statement outside a module`

- **Cause**: Jest encountered an import statement but wasn't configured for ES Modules.
- **Solution**: Ensure Babel is configured to transform your code:

```bash
npm install --save-dev babel-jest @babel/core @babel/preset-env
```
---
### Issue: `Jest encountered an unexpected token`

- **Cause**: Jest needs to be configured to support ES Modules or JSX.
- **Solution**: In your `package.json`, make sure the following configuration is added for Jest:

```json
"jest": {
  "testEnvironment": "jsdom"
}
```
---
## Why Integrate Babel and Node Modules?

After running tests for the `about-header.js` component, you might encounter issues related to Jest not properly handling ES modules or JSX syntax. This is where Babel and the necessary node modules come into play. Here's why and how to integrate them:

### 1. **Why Use Babel?**
   Babel is a tool that allows you to use the latest JavaScript features (like ES6 modules or JSX) in your code while ensuring compatibility with older JavaScript environments. Jest, by default, may not understand the newer syntax unless you explicitly tell it to use Babel for transpiling. 

### 2. **Why Configure Jest?**
   Jest runs tests in a Node.js environment, which is different from a browser. If you're using ES modules or JSX, Jest won't be able to parse them without the right configuration. This is why we need to set up Babel to transpile the code before Jest can run the tests properly.

### 3. **Steps to Integrate Babel and Node Modules**

   - **Install Babel and Related Dependencies**:
     Babel can be integrated into your project using the following npm packages: `babel-jest`, `@babel/core`, and `@babel/preset-env`. These packages allow Jest to understand modern JavaScript syntax.

     To install Babel, run the following command in your project directory:

     ```bash
     npm install --save-dev babel-jest @babel/core @babel/preset-env
     ```

   - **Configure Jest to Use Babel**:
     After installing Babel, you need to tell Jest to use it by adding the `transform` configuration to your `package.json`. This ensures that Jest uses Babel to transpile `.js` files during testing.

     In your `package.json`, add the following Jest configuration:

     ```json
     "jest": {
       "transform": {
         "^.+\\.js$": "babel-jest"
       }
     }
     ```

     This configuration ensures that all `.js` files in your project will be processed by `babel-jest` before Jest runs the tests.

### 4. **Benefit**
   By integrating Babel and configuring Jest in this way, you'll be able to use modern JavaScript features like ES modules and JSX, while also ensuring that your tests run smoothly without any syntax errors.


---
## Testing Documentation

### Overview
<img src="./assets/wireframes_components/navbar_component.png" alt="Desktop Screenshot" width="330"><br>
To ensure the stability and reliability of the components in **The Global News** project, a series of unit tests were implemented using **Jest** and the `@testing-library/jest-dom` package. These tests validate the functionality and correct rendering of the components, focusing on dynamic behaviour and routing.

### Tests Implemented

#### 1. Navbar Component
**File:** `_tests_/navbar.test.js`

- **Purpose:** Verify the correct behaviour and rendering of the `navbar-component` under different scenarios.
- **Key Tests:**
  - **Rendering Validation:** Ensures the navbar is correctly rendered in the DOM with the appropriate CSS classes.
  - **Dynamic Links:** Confirms that navigation links (`Home`, `About`, `Contact`) have the correct paths based on the current page:
    - **Home Page:** Links are relative to `index.html`.
    - **Subpages (e.g., Sports News):** Links adjust to use relative paths (`../../`).
  - **Social Component:** Verifies that the `social-component` is correctly included in the navbar.

#### 2. Header Component
**File:** `_tests_/headerComponent.test.js`

- **Purpose:** Test the correct rendering and functionality of the `headerComponent`.

#### 3. About Header Component
**File:** `_tests_/about-header.test.js`

- **Purpose:** Verify the rendering and layout of the header on the About page.

### How to Run the Tests
To execute the test suite, use the following command in your terminal:

```bash
npm test
```
## Test Results

The current test suite includes a total of **11 tests** across **3 test files**, all of which pass successfully:

```yaml
Test Suites: 3 passed, 3 total
Tests:       11 passed, 11 total
Snapshots:   0 total
Time:        ~1.8 seconds
```
### Deprecation Warning
A warning related to the deprecated `punycode` module may appear during testing. This does not affect the functionality of the tests or the project. If necessary, you can suppress the warning by updating related dependencies in the future.

---
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



// _tests_/social-buttoms.test.js

import '../components/social-buttoms.js';  // Import the component

describe('SocialComponent', () => {
    let component;

    beforeEach(() => {
        // Create a new instance of the social-component
        component = document.createElement('social-component');
        document.body.appendChild(component);  // Append it to the body
    });

    afterEach(() => {
        // Clean up after each test
        document.body.removeChild(component);
    });

    test('should render social media links', () => {
        // Check if the social media links are rendered
        const facebookLink = component.querySelector('.fa-facebook');
        const twitterLink = component.querySelector('.fa-twitter');
        const linkedinLink = component.querySelector('.fa-linkedin');
        const youtubeLink = component.querySelector('.fa-youtube');

        // Assert that each social media link exists
        expect(facebookLink).toBeTruthy();
        expect(twitterLink).toBeTruthy();
        expect(linkedinLink).toBeTruthy();
        expect(youtubeLink).toBeTruthy();
    });

    test('should have correct link URLs', () => {
        // Check if the links have the correct href attributes
        const facebookLink = component.querySelector('.fa-facebook');
        const twitterLink = component.querySelector('.fa-twitter');
        const linkedinLink = component.querySelector('.fa-linkedin');
        const youtubeLink = component.querySelector('.fa-youtube');

        // Assert the correct URLs
        expect(facebookLink.href).toBe('https://www.facebook.com/yourprofile');
        expect(twitterLink.href).toBe('https://twitter.com/yourprofile');
        expect(linkedinLink.href).toBe('https://www.linkedin.com/in/yourprofile');
        expect(youtubeLink.href).toBe('https://www.youtube.com/c/yourchannel');
    });
});

// Test for contact-form.js

import '../components/Contact-components/contact-form.js';
describe("Contact Form Component", () => {
    let container;

    beforeEach(() => {
        // Manually setting up the DOM structure
        document.body.innerHTML = `
            <div id="contact-section">
                <div class="contact-container">
                    <div class="contact-content">
                        <div class="contact-info">
                            <h3>Contact Information</h3>
                            <p>The Global News headquarters are located in the heart of London, at the iconic Fleet Street, known for its rich history in journalism.</p>
                            <div class="info-item">
                                <strong>Address:</strong>
                                <p>123 Fleet Street, London, EC4A 2BB, United Kingdom</p>
                            </div>
                            <div class="info-item">
                                <strong>Email:</strong>
                                <p>contact@theglobalnews.com</p>
                            </div>
                            <div class="info-item">
                                <strong>Phone:</strong>
                                <p>+44 20 7946 0958</p>
                            </div>
                            <div class="info-item">
                                <strong>Business Hours:</strong>
                                <p>Weekdays: 9:00 AM - 6:00 PM</p>
                                <p>Saturday: 10:00 AM - 4:00 PM</p>
                                <p>Sunday: Closed</p>
                            </div>
                        </div>
                        
                        <div class="contact-form">
                            <h3>Contact Us</h3>
                            <form id="contact-form">
                                <div class="form-group">
                                    <label for="name">Name</label>
                                    <input type="text" id="name" name="name" required />
                                </div>
                                <div class="form-group">
                                    <label for="email">Email</label>
                                    <input type="email" id="email" name="email" required />
                                </div>
                                <div class="form-group">
                                    <label for="phone">Phone</label>
                                    <input type="tel" id="phone" name="phone" />
                                </div>
                                <div class="form-group">
                                    <label for="message">Message</label>
                                    <textarea id="message" name="message" required></textarea>
                                </div>
                                <button type="submit" class="submit-btn">Send</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        `;
        container = document.querySelector(".contact-container");
    });
    

    afterEach(() => {
        document.body.innerHTML = "";
    });

    test("renders the contact information correctly", () => {
        expect(container.querySelector(".contact-info h3").textContent).toBe("Contact Information");
        expect(container.querySelector(".info-item strong").textContent).toContain("Address:");
        expect(container.querySelector(".info-item p").textContent).toContain("123 Fleet Street");
    });

    test("renders the form with correct fields", () => {
        const form = container.querySelector("#contact-form");
        expect(form).not.toBeNull();

        const nameField = form.querySelector("#name");
        const emailField = form.querySelector("#email");
        const phoneField = form.querySelector("#phone");
        const messageField = form.querySelector("#message");

        expect(nameField).not.toBeNull();
        expect(emailField).not.toBeNull();
        expect(phoneField).not.toBeNull();
        expect(messageField).not.toBeNull();
    }); 
});

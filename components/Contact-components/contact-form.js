// Updated contact-form.js

const contactData = {
    "contactInfo": {
        "address": {
            "street": "123 Fleet Street",
            "city": "London",
            "postalCode": "EC4A 2BB",
            "country": "United Kingdom"
        },
        "phone": "+44 20 7946 0958",
        "email": "contact@theglobalnews.com",
        "businessHours": {
            "weekdays": "9:00 AM - 6:00 PM",
            "saturday": "10:00 AM - 4:00 PM",
            "sunday": "Closed"
        }
    },
    "locationDescription": {
        "description": "The Global News headquarters are located in the heart of London, at the iconic Fleet Street, known for its rich history in journalism."
    }
};

function renderContactForm() {
    const container = document.createElement('div');
    container.classList.add('contact-container');

    container.innerHTML = `
        <div class="contact-content">
            <div class="contact-info">
                <h3>Contact Information</h3>
                <p>${contactData.locationDescription.description}</p>
                <div class="info-item">
                    <strong>Address:</strong>
                    <p>${contactData.contactInfo.address.street}, ${contactData.contactInfo.address.city}, ${contactData.contactInfo.address.postalCode}, ${contactData.contactInfo.address.country}</p>
                </div>
                <div class="info-item">
                    <strong>Email:</strong>
                    <p>${contactData.contactInfo.email}</p>
                </div>
                <div class="info-item">
                    <strong>Phone:</strong>
                    <p>${contactData.contactInfo.phone}</p>
                </div>
                <div class="info-item">
                    <strong>Business Hours:</strong>
                    <p>Weekdays: ${contactData.contactInfo.businessHours.weekdays}</p>
                    <p>Saturday: ${contactData.contactInfo.businessHours.saturday}</p>
                    <p>Sunday: ${contactData.contactInfo.businessHours.sunday}</p>
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
    `;

    document.getElementById("contact-section").appendChild(container);

    // Add event listener to handle form submission and redirect
    document.getElementById("contact-form").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the form's default submit action

        // Redirect to the success page
        window.location.href = "../pages/success/send-contact.html";
    });
}

window.addEventListener('DOMContentLoaded', renderContactForm);

class FooterComponent extends HTMLElement {
    connectedCallback() {
        const contactInfo = {
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
                "description": "The Global News headquarters are located in the heart of London, at the iconic Fleet Street, known for its rich history in journalism. Our team is available for inquiries during business hours, and we are committed to responding to every question and comment with the highest level of professionalism."
            }
        };

        const path = window.location.pathname;
        let homePath, aboutPath, contactPath, subscribePath;

        if (path.includes('/sports-news/') || path.includes('/politics-news/') || path.includes('/tech-news/') || path.includes('/business-news/')) {
            homePath = '../../index.html';
            aboutPath = '../../pages/about.html';
            contactPath = '../../pages/contact.html';
            subscribePath = '../../pages/success/subscription.html';
        } else if (path.includes('/pages/success/')) {
            homePath = '../../index.html';
            aboutPath = '../about.html';
            contactPath = '../contact.html';
            subscribePath = 'subscription.html';
        } else if (path.includes('/pages/')) {
            homePath = '../index.html';
            aboutPath = 'about.html';
            contactPath = 'contact.html';
            subscribePath = 'success/subscription.html';
        } else {
            homePath = 'index.html';
            aboutPath = 'pages/about.html';
            contactPath = 'pages/contact.html';
            subscribePath = 'pages/success/subscription.html';
        }

        this.renderFooter(contactInfo, homePath, aboutPath, contactPath, subscribePath);
    }

    renderFooter(data, homePath, aboutPath, contactPath, subscribePath) {
        const { phone, email, address, businessHours } = data.contactInfo;
        const { description } = data.locationDescription;

        this.innerHTML = `
            <div class="footer">
                <div class="box">
                    <div class="left">
                        <div class="categories">
                            <p>The Global News</p>
                            <div><a href="${homePath}"><p>Home</p></a></div>
                            <div><a href="${aboutPath}"><p>About</p></a></div>
                            <div><a href="${contactPath}"><p>Contact</p></a></div>
                        </div>
                        <div class="contactUs">
                            <div class="contact">
                                <p>Contact Us</p>
                                <div>Phone No. - <span>${phone}</span></div>
                                <div>Email - <span>${email}</span></div>
                                <div>Address - <span>${address.street}, ${address.city}, ${address.country}</span></div>
                                <div>Business Hours - 
                                    <ul class="schedules-ul">
                                        <li class="schedules-li">Weekdays: ${businessHours.weekdays}</li>
                                        <li class="schedules-li" >Saturday: ${businessHours.saturday}</li>
                                        <li class="schedules-li">Sunday: ${businessHours.sunday}</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="icon">
                                <i class="fa-brands fa-square-facebook"></i>
                                <i class="fa-brands fa-instagram"></i>
                                <i class="fa-brands fa-youtube"></i>
                            </div>
                        </div>
                    </div>
                    <div class="right">
                        <div class="newsletter">
                            <p>Subscribe to Our Newsletter</p>
                            <div class="email">
                                <input type="email" placeholder="Enter Your Email Here">
                                <a href="${subscribePath}"><button>Subscribe</button></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="copyrights">
                    Copyrights &copy; 2022 Coders Villa
                </div>
            </div>
        `;
    }
}

window.customElements.define('footer-component', FooterComponent);

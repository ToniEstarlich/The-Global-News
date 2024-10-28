
const journalists = [
    {
        name: "Laura Martinez",
        specialty: "Correspondent for European affairs",
        bio: "Laura Martinez is a seasoned European affairs correspondent, covering the EU and its policies for over a decade.",
        photo: "images/journalist-laura.jpg",
        social: {
            facebook: "https://www.facebook.com",
            twitter: "https://twitter.com",
            linkedin: "https://www.linkedin.com"
        }
    },
    {
        name: "Marie Dupont",
        specialty: "Business journalist focused on sustainability",
        bio: "Marie Dupont is a business journalist who covers European economic policy, with a focus on sustainability and corporate responsibility.",
        photo: "images/journalist-marie.jpg",
        social: {
            facebook: "https://www.facebook.com",
            twitter: "https://twitter.com",
            linkedin: "https://www.linkedin.com"
        }
    },
    {
        name: "Carlos Peña",
        specialty: "Technology and Innovation",
        bio: "Carlos Peña writes about the latest advancements in technology, focusing on AI, cybersecurity, and the ever-evolving landscape of digital innovation.",
        photo: "images/journalist-carlos.jpg",
        social: {
            facebook: "https://www.facebook.com",
            twitter: "https://twitter.com",
            linkedin: "https://www.linkedin.com"
        }
    },
    {
        name: "Sophia Green",
        specialty: "Political Analyst",
        bio: "Sophia Green analyzes global political trends and provides in-depth insights into international relations and policy-making.",
        photo: "images/journalist-sophia.jpg",
        social: {
            facebook: "https://www.facebook.com",
            twitter: "https://twitter.com",
            linkedin: "https://www.linkedin.com"
        }
    }
];

// Generar HTML para cada tarjeta de periodista
function createJournalistCards() {
    const container = document.createElement('section');
    container.className = "row";

    journalists.forEach(journalist => {
        const cardHTML = `
            <div class="card-background col-md-3 col-sm-6 col-xs-12">
                <div class="card">
                    <div class="cover" style="background-image: url('${journalist.photo}'); background-size: cover;">
                        <h1>${journalist.name}</h1>
                        <span class="price">
                            <a href="${journalist.social.facebook}" target="_blank"><i class="fab fa-facebook"></i></a>
                            <a href="${journalist.social.twitter}" target="_blank"><i class="fab fa-twitter"></i></a>
                            <a href="${journalist.social.linkedin}" target="_blank"><i class="fab fa-linkedin"></i></a>
                        </span>
                        <div class="card-back">
                            <a href="#">${journalist.specialty}</a>
                            <p>${journalist.bio}</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += cardHTML;
    });

    document.getElementById('journalist-cards-container').appendChild(container);
}

window.onload = createJournalistCards;

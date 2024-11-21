
const journalists = [
    {
        name: "Laura Martinez",
        specialty: "Correspondent for European affairs",
        bio: "Laura Martinez is a seasoned European affairs correspondent, covering the EU and its policies for over a decade.",
        photo: "../assets/images/laura.jpg",
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
        photo: "../assets/images/marie.jpg",
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
        photo: "../assets/images/carlos.jpg",
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
        photo: "../assets/images/sophia.jpg",
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
            <div class="cover">
                <img src="${journalist.photo}" alt="${journalist.name}" class="journalist-photo">
                <h1>${journalist.name}</h1>
            </div>
            <div class="card-back">
                <a href="#" class="speciality">${journalist.specialty}</a>
                <p class="bio">${journalist.bio}</p>
                <span class="price">
                    <social-component></social-component>
                </span>
            </div>
        </div>
    </div>
        `;
        container.innerHTML += cardHTML;
    });

    document.getElementById('journalist-cards-container').appendChild(container);
}

window.onload = createJournalistCards;

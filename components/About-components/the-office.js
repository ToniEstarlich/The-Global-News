class TheOfficeComponent extends HTMLElement {
  connectedCallback() {
    const newsData = {
      "the-office": [
        {
          "name": "The Global News Office",
          "bio": `
            <h1>The Global News Office</h1><br> 
            Introduction:<br>
Located in the vibrant heart of the city, The Global News Office is a beacon of journalism, innovation, and progress.<br>
Established in 2005, this hub of global news dissemination is dedicated to shaping narratives and bringing essential stories to light.<br>
<br>
Through years of growth and evolution, The Global News Office has become a cornerstone of credible reporting.<br>
Its commitment to truth and transparency has earned the trust of millions worldwide.<br>
From breaking news to in-depth investigative stories, the office ensures that every piece of information is accurate, reliable, and timely.<br>
<br>
The team behind this institution consists of seasoned journalists, researchers, and media professionals.<br>
Their expertise spans across multiple disciplines, allowing for diverse perspectives and thorough analysis.<br>
Supported by cutting-edge technology, they work tirelessly to uncover stories that matter.<br>
<br>
Located in an architectural marvel, the office boasts state-of-the-art facilities designed to support modern journalism.<br>
Its open newsroom fosters collaboration and creativity, ensuring that every voice is heard.<br>
From bustling news desks to serene editing bays, the environment is a blend of energy and focus.<br>
<br>
Over the years, the office has embraced digital transformation.<br>
With a robust online presence, it reaches audiences across the globe, adapting to the ever-changing landscape of media consumption.<br>
Social media, live updates, and interactive content have become integral to its operations.<br>
<br>
The Global News Office is not just a building—it is a symbol of hope and resilience.<br>
In an era of misinformation, it stands tall as a pillar of integrity and a source of inspiration for future generations.<br>
<br>
Its vision extends beyond journalism, aiming to educate and engage communities through outreach programs and workshops.<br>
By doing so, it bridges the gap between information and empowerment, ensuring its legacy endures for years to come.
<br><hr>
<h2>A Hub of Excellence</h2><br> 
<p>
The Global News Office houses some of the most renowned journalists and media professionals in the industry. 
Equipped with state-of-the-art studios and cutting-edge broadcasting technology, it stands as a leader in the 
field of information sharing and reporting. The office is designed to foster collaboration, innovation, and 
creativity, ensuring that its professionals have the resources they need to produce groundbreaking work.
</p><br>
<p>
In addition to its core mission of delivering high-quality news, the office invests heavily in research and 
development. Teams work tirelessly to implement advanced analytical tools, artificial intelligence, and other 
emerging technologies to enhance the news delivery process. This approach not only ensures accuracy but also 
provides insightful perspectives that engage and inform audiences worldwide.
</p><br>
<p>
Moreover, the office has a robust training and mentorship program aimed at nurturing the next generation of 
journalists. Workshops, internships, and collaborations with educational institutions allow aspiring reporters 
to learn from seasoned professionals, gaining firsthand experience in a dynamic and fast-paced environment. 
Such initiatives strengthen the field of journalism and ensure its relevance in the digital age.
</p><br>
<p>
The office's commitment to innovation extends beyond technology and training. Sustainability and inclusivity 
are integral to its operations. From environmentally conscious practices in its infrastructure to actively 
promoting diversity in its workforce, The Global News Office sets a benchmark for socially responsible media 
organizations. These efforts reflect its understanding of the broader role journalism plays in shaping society.
</p><br>
<hr>

<h2>Conclusion</h2><br>
<p>
With a diverse team, advanced infrastructure, and an unwavering commitment to truth, The Global News Office is 
an institution that embodies the power of knowledge, collaboration, and the promise of a better-informed world. 
It stands as a symbol of integrity in an era where misinformation is rampant. By staying true to its principles, 
the office continues to build trust with its audience, providing content that is both enlightening and impactful.
</p><br>

<p>
As the media landscape evolves, The Global News Office remains steadfast in its mission to connect people with 
reliable and meaningful information. Its vision of creating a more informed and connected global community is a 
testament to the enduring importance of quality journalism.
</p><br>

          `,
          "photo": "../assets/images/the-office.jpg"
        }
      ]
    };

    const office = newsData["the-office"][0];

    this.innerHTML = `
      <div class="office-container ">
        <img class="office-image" src="${office.photo}" alt="Me" width="1500" height="700">
          <div class="w3-display-middle w3-padding-large w3-border w3-wide w3-text-light-grey w3-center">
            <h1 class="w3-hide-medium w3-hide-small w3-xxxlarge">${office.name}</h1>
            <h5 class="w3-hide-large" style="white-space:nowrap">${office.name}</h5>
            <h3 class="w3-hide-medium w3-hide-small"></h3>
          </div>
      
      <div class="the-office-container">
        <div class="office-details">
          ${office.bio}
        </div>
      </div>
    </div>
    `;
  }
}

window.customElements.define('the-office-component', TheOfficeComponent);

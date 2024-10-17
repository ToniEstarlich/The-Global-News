class NewsComponent extends HTMLElement {
    connectedCallback() {

        this.innerHTML = `
     <main  style="margin-top: 10%">
        <h1>FOUR PRACTICAL TIPS FOR CREATINE TO REALLY HAVE AN EFFECT</h1>
        <figure class="image-div">
            <img src="https://i.postimg.cc/g010JG5Z/creatine.jpg" alt="Creatine tips">
        </figure>
        <figcaption class="img-caption">Creatine tips</figcaption>
        <section class="tips-info">
            <div class="introduction">
                <p>Creatine is used by athletes and other fitness enthusiasts with the aim of improving performance and also increasing muscle mass. This condition simply made this supplement the "ball of the moment".</p>
                <p>Still, all care is necessary and in this sense, <a href="https://sportlife.com.br/" target="_blank">Sport Life</a> will share the four tips for effective creatine consumption with the CEO of Nutra Gold Nutrition, <a href="https://www.instagram.com/simonecoria/" target="_blank">Simone Coria.</a></p>
            </div>
            <div class="tip-1">
                <h2>Correct dosage</h2>
                <p>The recommended daily dose of monohydrate creatine is usually 3 to 5g. Exceeding this amount does not offer the additional benefits and can put a strain on the kidneys.</p>
            </div>
            <div class="tip-2">
                <h2>Adequate hydration</h2>
                <p>Staying well hydrated is the key. Creatine can increase water retention in the muscles, meaning it's essential to drink enough water throughout the day.</p>
            </div>
            <div class="tip-3">
                <h2>Product Choice</h2>
                <p>Opt for high-quality creatine. Lower quality products may contain impurities that can be harmful to health.</p>
            </div>
            <div class="tip-4">
                <h2>Professional supervision</h2>
                <p>Always consult a doctor or nutritionist before starting any supplementation. Especially if you have a history of kidney problems or other health conditions.</p>
            </div>
        </section>
        <section class="benefits-info">
            <div class="introduction">
                <h1>THE PROVEN BENEFITS OF CREATINE</h1>
            </div>
            <div class="benefit-1">
                <h2>Increased muscle strength and power</h2>
                <p>Studies show that creatine can significantly improve muscle strength, which allows athletes to train more intensely.</p>
            </div>
            <div class="benefit-2">
                <h2>Improved recovery</h2>
                <p>Creatine helps reduce muscle damage, inflammation after intense exercise, and speeds up recovery.</p>
            </div>
            <div class="benefit-3">
                <h2>Increased muscle mass</h2>
                <p>Creatine promotes intracellular water retention, which can increase visible muscle mass.</p>
            </div>
            <div class="final">
                <h2>Final Words</h2>
                <p>"With the proper dosage, correct hydration, and choice of quality products, you can enjoy all the benefits of creatine without worry. Always consult a health professional before starting supplementation to ensure it is suitable for you", concluded Simone Coria.</p>
            </div>
            <div class="source">
                <h2 class="source">Source: <a href="https://www.msn.com/pt-br/saude/nutricao/quatro-dicas-pr%C3%A1ticas-para-a-creatina-fazer-efeito-de-verdade/ar-BB1qXRiy?ocid=msedgdhp&pc=U531&cvid=fad040770e8f4df89974f6913edb18c9&ei=17#" target="_blank">MSN/Sport Life</a></h2>
                <p>See also: <a href="https://codepen.io/leonam-silva-de-souza/pen/abgNZyj" target="_blank">Creatin benefits for those who don't train</a></p>
            </div>
        </section>
    </main>
        `;
    }
}

window.customElements.define('news-component', NewsComponent);

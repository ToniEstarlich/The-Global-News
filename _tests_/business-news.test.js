// Import any necessary polyfills for web components
//import "@webcomponents/webcomponentsjs/webcomponents-bundle";
import "../components/news-components/business-news.js";

describe('BusinessComponent', () => {
  let businessNews;

  beforeEach(() => {
      
// Mock the businessNews data
  businessNews = [
    {
        "epigraph": "EU businesses face new regulations",
        "headline": "The European Union's Green Deal: A Game-Changer for Business",
        "subtitle": "How the EU's ambitious environmental policies are reshaping the business landscape",
        "lead": "The European Union's Green Deal is poised to revolutionize industries, but can businesses keep up with the pace of change?",
        "body": "The European Union's Green Deal, which aims to make Europe the first climate-neutral continent by 2050, is setting the stage for a major transformation in the business world. With new regulations targeting carbon emissions, waste management, and renewable energy, companies across various sectors are being forced to rethink their strategies. The deal has already led to the development of stricter emission standards for manufacturers and a push for sustainable practices in agriculture and energy. However, while some businesses see the Green Deal as an opportunity to innovate and lead the green revolution, others are concerned about the cost of compliance and the potential for job losses in industries like coal mining and heavy manufacturing. The challenge for EU businesses is to balance sustainability with profitability while navigating the complexities of new regulations and market demands.<br><p>One of the most significant impacts of the Green Deal is on the energy sector. Renewable energy projects, such as wind, solar, and hydrogen, are being prioritized, with substantial investments being allocated to accelerate their deployment. Governments across the EU are introducing incentives for green energy adoption, encouraging businesses to transition away from fossil fuels. For example, subsidies for solar panel installations and tax breaks for wind farm operators are making renewable energy a more viable option. This transformation is not only reducing greenhouse gas emissions but also creating new opportunities for businesses to lead the way in sustainable energy innovation. However, the shift is not without challenges. High initial costs, supply chain disruptions, and a lack of skilled workers in renewable energy technologies pose hurdles that need addressing.<br><p>The manufacturing industry is another area undergoing rapid change due to the Green Deal. Stricter emission standards mean manufacturers must invest in cleaner production methods and technologies, such as carbon capture and storage systems or energy-efficient machinery. Many companies are exploring circular economy practices, where resources are reused, recycled, or repurposed, to minimize waste and environmental impact. While these changes represent progress toward sustainability, they also require significant capital investment. Small and medium-sized enterprises (SMEs), in particular, often lack the financial resources to adapt quickly to these new requirements. This raises concerns about the competitiveness of smaller players in the industry compared to larger corporations with deeper pockets.<br><p>Agriculture, too, is being revolutionized by the Green Deal. The EU is promoting sustainable farming practices, including the reduction of chemical fertilizers and pesticides, the preservation of biodiversity, and the adoption of precision farming techniques. These measures aim to create a food system that is both environmentally friendly and resilient to climate change. Farmers are receiving support through grants and training programs to adopt these methods, but they also face challenges such as fluctuating crop yields and increased operational costs. The transition to sustainable agriculture requires a delicate balance between environmental goals and the economic realities faced by farmers, especially in regions where traditional farming practices are deeply rooted in local culture.<br><p>Another critical element of the Green Deal is its emphasis on research and innovation. To achieve its ambitious goals, the EU is funding projects that focus on developing groundbreaking technologies, such as carbon-neutral fuels, advanced battery storage, and efficient waste management systems. Businesses that invest in research and development (R&D) stand to gain a competitive edge in the emerging green economy. Collaboration between private companies, academic institutions, and government bodies is becoming increasingly common, fostering an ecosystem of innovation. For instance, partnerships between automotive manufacturers and tech companies are leading to advancements in electric vehicle technology and infrastructure. These collaborations not only accelerate progress but also highlight the interconnected nature of sustainable development across various sectors.<br><p>Despite the opportunities presented by the Green Deal, some industries face significant hurdles. The coal mining and heavy manufacturing sectors, for example, are grappling with the potential for job losses as a result of the shift toward sustainability. Communities that rely on these industries for their livelihoods are calling for a just transition that ensures no one is left behind. The EU is addressing these concerns through initiatives like the Just Transition Fund, which provides financial support and retraining programs for workers affected by the green transition. However, the implementation of such programs requires careful planning and collaboration among stakeholders to ensure their effectiveness and inclusivity.<br><p>Public opinion also plays a crucial role in the success of the Green Deal. Consumer demand for sustainable products and services is driving businesses to adopt eco-friendly practices. Companies that align with this demand can build stronger brand loyalty and tap into new market segments. On the other hand, businesses that fail to adapt risk losing their competitive edge in a rapidly evolving marketplace. Transparency and accountability are becoming key expectations from consumers, with many calling for clearer labeling and reporting on environmental impacts. This shift in consumer behavior is a powerful force, encouraging businesses to prioritize sustainability as a core element of their operations.<br><p>The Green Deal is not just about regulations and market changes; it also represents a broader cultural shift toward sustainability. Education and awareness campaigns are being launched across the EU to inform citizens about the importance of reducing carbon footprints and embracing sustainable lifestyles. These efforts aim to create a collective sense of responsibility and inspire individuals to take action in their daily lives. Schools, universities, and community organizations are playing a vital role in spreading awareness and fostering a culture of sustainability among future generations. By integrating environmental education into curriculums, the EU is laying the groundwork for a society that values and prioritizes sustainability.<br><p>In conclusion, the European Union's Green Deal is a transformative initiative that has far-reaching implications for businesses, communities, and individuals. While the road to achieving climate neutrality by 2050 is fraught with challenges, it also presents unprecedented opportunities for innovation, collaboration, and growth. By embracing the principles of sustainability and working together to overcome obstacles, the EU can pave the way for a greener, more resilient future. As the Green Deal continues to evolve, it will be crucial for all stakeholders to remain committed to its vision and actively contribute to its success. The journey toward a sustainable Europe is a shared responsibility that requires collective effort, determination, and adaptability.",
        "writer": "Marie Dupont", 
        "aboutWriter": "Marie Dupont is a business journalist who covers European economic policy, with a focus on sustainability and corporate responsibility.",
        "source": "European Business Journal",
        "picture": "../../assets/images/business1.jpg"
    },
    {
      "epigraph": "Global pandemic reshapes business",
      "headline": "The COVID-19 Pandemic and Its Lasting Impact on Global Business",
      "subtitle": "How businesses are adapting to a post-pandemic world",
      "lead": "The COVID-19 pandemic has left an indelible mark on the global economy. What have we learned, and how are businesses reshaping for the future?",
      "body": "The COVID-19 pandemic of 2020 was an event that radically altered the global business landscape. As countries went into lockdown and supply chains were disrupted, businesses across every sector were forced to adapt to a rapidly changing environment. Some companies, particularly those in hospitality, travel, and retail, faced unprecedented challenges and, in many cases, closure. Others, particularly in e-commerce, technology, and healthcare, saw rapid growth as consumer behavior shifted. One of the most significant changes brought about by the pandemic was the rise of remote work, which transformed how companies operated and how employees viewed their work-life balance.<hr> The shift to remote work was swift, forcing businesses to quickly adopt technologies that facilitated communication, collaboration, and productivity from home. Initially seen as a temporary measure, remote work has since evolved into a permanent fixture for many companies. Large corporations, including tech giants such as Twitter and Facebook, announced long-term or permanent remote work policies, citing cost savings on office space and the desire to give employees greater flexibility. As a result, companies began to rethink their office environments and reimagine their approach to employee well-being. <br> For many businesses, the pandemic accelerated trends that were already underway, such as digital transformation and the automation of services. As more companies shifted to online platforms, the demand for cloud computing, cybersecurity, and AI-based solutions skyrocketed. This shift has led to the rise of hybrid work models, which allow employees to work both remotely and in-office, providing flexibility that was once unthinkable for many industries. The pandemic also brought to light the vulnerabilities in traditional systems and the need for businesses to invest in digital infrastructure to stay competitive. <br> In addition to these technological advancements, the pandemic also reshaped global supply chains. With factory closures and transport restrictions, many companies began to rethink their dependence on single suppliers or specific regions, such as Asia, for their manufacturing needs. The focus has since shifted towards creating more resilient supply chains, with an emphasis on nearshoring and diversifying suppliers. By diversifying suppliers, companies aim to mitigate risks related to geopolitical instability, trade wars, and environmental factors. Nearshoring, the practice of relocating production closer to home, is also gaining momentum as businesses seek to reduce transportation costs and delivery times. <br> The pandemic also sparked a new conversation about corporate responsibility and sustainability. As businesses grappled with the economic fallout, many were forced to reconsider their environmental impact, and consumer expectations around corporate ethics and sustainability rose dramatically. During the lockdown, pollution levels in cities dropped, and people began to see the positive environmental changes. As a result, there was a renewed focus on the importance of sustainability and environmental stewardship. Today, companies are not only measured by their financial success but also by their contributions to social and environmental causes, a trend that is expected to grow in the coming years. <br> Another shift driven by the pandemic has been the acceleration of e-commerce. While online shopping was already growing in popularity, COVID-19 further expedited this shift as brick-and-mortar stores closed their doors, forcing consumers to turn to digital platforms. Retailers who had previously resisted e-commerce were quickly forced to adapt, embracing online sales and integrating digital tools such as augmented reality to enhance the online shopping experience. Social media platforms and influencers also played a crucial role in driving online sales, with many businesses leveraging platforms like Instagram and TikTok to reach new customers and promote products. <br> The lasting impact of COVID-19 on global business is profound. While some industries continue to struggle with the aftershocks, others have emerged stronger, having adapted to new ways of working and engaging with customers. As we look to the future, it's clear that the pandemic has permanently reshaped the business world, creating both challenges and opportunities.<hr> The lessons learned from the pandemic will continue to shape how companies approach their operations, workforce, and customer relationships for years to come. As businesses look ahead, they will need to remain agile, prepared to embrace new technologies and strategies to remain competitive in an increasingly unpredictable world.",     "writer": "Rachel Johnson",
      "aboutWriter": "Rachel Johnson is a business and technology journalist with expertise in global economic trends and digital transformation.",
      "source": "European Business Journal",
      "picture": "../../assets/images/business2.jpg"
    },
    {
      "epigraph": "Global markets face uncertainty",
      "headline": "Inflation and Supply Chain Disruptions: A Global Business Challenge",
      "subtitle": "As inflation rises and supply chains falter, businesses worldwide are feeling the pressure",
      "lead": "Inflation and supply chain disruptions have created a perfect storm for businesses around the world. What can companies do to stay afloat?",
      "body": "Global businesses are facing one of their biggest challenges in recent history as inflation continues to rise and supply chain disruptions persist. The COVID-19 pandemic, combined with geopolitical tensions and labor shortages, has created a scenario in which companies across all industries are struggling to keep up with demand while managing soaring costs. For many, the issues began in 2020, when factories in key manufacturing regions were forced to shut down. Since then, the recovery has been slow and uneven, with ongoing disruptions in transportation and logistics.<hr> As inflation hits record levels in several major economies, businesses are having to pass on higher costs to consumers, leading to concerns about decreased demand and economic slowdowns. <hr> The surge in inflation has been one of the most significant consequences of the pandemic and its economic fallout. Governments around the world responded to the crisis with stimulus packages, monetary easing, and other measures to support businesses and workers. However, these efforts have also contributed to the rise in inflation, with the cost of goods and services increasing at a rate not seen in decades. In sectors such as energy, food, and construction, prices have surged, leading to an increase in production costs for businesses. As a result, companies are being forced to raise prices on their products, which has led to concerns about inflationary pressure on consumer spending. <hr> Another factor contributing to rising prices is the ongoing disruption of global supply chains. The pandemic exposed vulnerabilities in the global supply chain system, and companies are now facing delays, shortages, and higher transportation costs. Many manufacturing plants remain under capacity, and transportation bottlenecks have caused significant delays in shipments. Ports around the world have been overwhelmed with cargo, while container shortages have driven up shipping costs. Additionally, the cost of raw materials, such as metals, timber, and plastics, has risen dramatically due to supply constraints and increased demand. <br> These disruptions are affecting all industries, from technology and automotive to consumer goods and food. For example, the global semiconductor shortage has had a profound impact on industries reliant on electronics, including automotive manufacturers who rely on chips for their vehicles. Car companies have been forced to reduce production, resulting in shortages of new vehicles. This has led to increased prices for both new and used cars, which has further fueled inflation. Similarly, disruptions in food supply chains have led to higher prices for consumers, particularly in developing nations where access to essential goods is limited. <br> As businesses continue to navigate these challenges, many are implementing strategies to mitigate the effects of inflation and supply chain disruptions. Some companies are focusing on increasing efficiency through automation and digital tools. Robotics, AI, and machine learning are being used to streamline production processes and reduce labor costs. Others are shifting their sourcing strategies, seeking to diversify suppliers or nearshore production to reduce dependency on distant regions and cut down on transportation costs. While these strategies can be effective, they require significant investment in technology and infrastructure, which not all businesses can afford. <br> In addition to these operational adjustments, many businesses are also turning to pricing strategies to cope with rising costs. Some companies are using dynamic pricing models, where prices are adjusted in real-time based on supply and demand fluctuations. This allows businesses to remain competitive while also covering the increasing costs of production and transportation. However, this approach can be risky, as it may alienate consumers if prices are perceived as too high or volatile. <br> The situation is further complicated by labor shortages, particularly in the service and manufacturing sectors. In many regions, workers are reluctant to return to their jobs after the pandemic, leading to vacancies in critical industries such as hospitality, healthcare, and logistics. To address this, businesses are offering higher wages, better benefits, and more flexible working conditions in an effort to attract and retain talent. However, these efforts have increased operational costs, which businesses must account for in their pricing models. <hr> While the challenges posed by inflation, labor shortages, and supply chain disruptions are significant, they also present opportunities for businesses to rethink their strategies and adopt more resilient practices. Companies that can adapt to this new reality by embracing technology, diversifying their supply chains, and managing inflation risks effectively will be better positioned to thrive in the coming years. For consumers, the ongoing rise in prices and supply chain challenges are likely to persist in the short term, but businesses that can navigate these hurdles will play a critical role in stabilizing the economy and helping global markets recover. <br> Looking ahead, businesses must remain vigilant and adaptable in the face of these ongoing challenges. The pandemic may have triggered the initial disruptions, but the long-term effects will require companies to rethink their entire business models and adopt new approaches to risk management. In an increasingly interconnected world, businesses will need to work together to create more sustainable and resilient supply chains that can withstand future shocks. As the global economy continues to recover, companies that can innovate, adapt, and stay ahead of emerging trends will be the ones to lead the way in a post-pandemic world.",
      "writer": "Emily Zhang",
      "aboutWriter": "Emily Zhang is a global business correspondent with a focus on international markets, inflation, and supply chain dynamics.",
      "source": "European Business Journal",
      "picture": "../../assets/images/business3.jpg"
    }
];
   // Assign the mock data to the global window object for the custom component
   global.businessNews = businessNews;
  });

//------------------------------------------------------------------



  it('should render the correct news article based on the news-index attribute', () => {
      document.body.innerHTML = `<business-component news-index="1"></business-component>`;
      const component = document.querySelector('business-component');

      // Simulate the connectedCallback lifecycle method
      component.connectedCallback();

      // Verify headline rendering
      const headline = document.querySelector('.title-news');
      expect(headline.textContent).toBe(businessNews[1].headline);

      // Verify image rendering
      const image = document.querySelector('.image-div img');
      expect(image.src).toContain('http://localhost/assets/images/business2.jpg');
      expect(image.alt).toBe(businessNews[1].epigraph);

      // Verify writer's information
      const writer = document.querySelector('.about-writer p:first-of-type');
      expect(writer.textContent).toBe(businessNews[1].writer);
  });

  it('should default to index 0 if the news-index attribute is missing or invalid', () => {
      document.body.innerHTML = `<business-component></business-component>`;
      const component = document.querySelector('business-component');

      // Simulate the connectedCallback lifecycle method
      component.connectedCallback();

      // Verify it defaults to the first article
      const headline = document.querySelector('.title-news');
      expect(headline.textContent).toBe(businessNews[0].headline);
  });

  it('should include the source information in the rendered output', () => {
      document.body.innerHTML = `<business-component news-index="0"></business-component>`;
      const component = document.querySelector('business-component');

      // Simulate the connectedCallback lifecycle method
      component.connectedCallback();

      // Verify source information rendering
      const source = document.querySelector('.source-info p');
      expect(source.textContent).toContain(businessNews[0].source);
  });

  it('should render the correct news article based on the news-index attribute', () => {
      document.body.innerHTML = `<business-component news-index="2"></business-component>`;
      const component = document.querySelector('business-component');

      // Simulate the connectedCallback lifecycle method
      component.connectedCallback();

      // Verify headline rendering
      const headline = document.querySelector('.title-news');
      expect(headline.textContent).toBe(businessNews[2].headline);

      // Verify image rendering
      const image = document.querySelector('.image-div img');
      expect(image.src).toContain('http://localhost/assets/images/business3.jpg');
      expect(image.alt).toBe(businessNews[2].epigraph);

      // Verify writer's information
      const writer = document.querySelector('.about-writer p:first-of-type');
      expect(writer.textContent).toBe(businessNews[2].writer);
  });
});
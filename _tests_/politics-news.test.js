import { JSDOM } from 'jsdom'; // For simulating the DOM in Node.js
import '../components/news-components/politics-news.js'; // Import your component script

describe('PoliticsComponent', () => {
    let container;
  
    // Mock data for the politics news articles
    const mockPoliticsNews = [
      {
          "epigraph": "A critical moment for the EU",
          "headline": "European Union Considers Major Expansion Amid Global Challenges",
          "subtitle": "Expansion debates fuel concerns about governance and unity within the EU",
          "lead": "As several countries seek membership, the European Union faces tough decisions about its future and the balance of political and economic interests.",
          "body": "The European Union is at a pivotal point in its history as expansion talks dominate political discourse. Countries such as Ukraine, Albania, and Serbia are pushing for membership, with the EU weighing the pros and cons of further enlargement. Advocates argue that incorporating these nations would strengthen the EU’s economic base, provide geopolitical stability, and counter external threats like Russian influence. However, the challenges of governance and integration, particularly in aligning legal systems, economic policies, and democratic standards, are significant hurdles. <br><hr> Leaders across Europe are divided, with some favoring swift inclusion while others caution against diluting the union's core principles. The idea of a ‘widening’ European Union has been met with both enthusiasm and skepticism. On one hand, proponents emphasize that EU enlargement could expand the market, foster deeper economic cooperation, and increase the union’s global influence. On the other hand, critics worry that expanding the EU too quickly might strain its institutions and decision-making processes, potentially leading to instability. <br><hr> Ukraine, which has long aspired to join the European Union, has been particularly vocal in its push for membership, especially after the 2014 annexation of Crimea by Russia. The ongoing conflict with Russia has made Ukraine’s desire to integrate with the West even more urgent. For many in Ukraine, EU membership represents a pathway to economic development, security, and alignment with European values. However, the country faces numerous challenges, including corruption, political instability, and the need to reform key institutions. <br><hr> Serbia, which has been a candidate country for EU membership since 2012, is also seeking to join the union. Serbia’s accession process has been slow, with the country facing significant pressure to resolve its disputes with Kosovo. While Serbia’s leaders have made some progress in negotiations, there remain deep divides over issues such as Kosovo’s independence and Serbia’s alignment with the European Union’s foreign policy, particularly with regard to Russia. <br><hr> Albania, another candidate country, has also made significant strides in its quest to join the EU. The country has implemented a range of political and economic reforms, but challenges remain, particularly in the areas of corruption and the rule of law. Albania’s EU aspirations have been complicated by political instability and concerns over organized crime. Nonetheless, Albania remains committed to its EU accession path, with the hope of reaping the benefits of economic growth and political stability. <br><hr> Despite the challenges, there are significant arguments in favor of EU enlargement. Economically, the addition of these countries could provide a boost to the union’s overall market size and economic influence. Many of the countries seeking membership are also undergoing economic transitions, which, with the right support from the EU, could lead to stronger economies in the long run. <br><hr> Geopolitically, integrating countries such as Ukraine, Albania, and Serbia into the EU would strengthen the union’s position in Europe and globally. Ukraine’s membership could act as a bulwark against Russian expansionism, while Albania and Serbia could provide strategic advantages in the Western Balkans. Together, these countries would enhance the EU’s ability to project power and influence, counteracting external pressures from other global powers, particularly Russia and China. <br><hr> On the other hand, critics argue that the EU has already expanded significantly since the early 2000s, and further enlargement could stretch the union’s resources and capabilities. The EU’s decision-making process has become increasingly complex with each new member, and adding more countries could make it even harder to achieve consensus on key issues. Furthermore, the political and economic integration of these countries would require significant investment in terms of financial and institutional resources. <br><hr> Another challenge facing the EU in its enlargement talks is the question of democracy and the rule of law. The EU has stringent criteria for membership, requiring countries to meet high standards in terms of democratic governance, human rights, and the rule of law. This is particularly difficult for countries like Ukraine, Serbia, and Albania, where political corruption, weak institutions, and human rights violations remain significant challenges. <br><hr> The issue of democratic values is also complicated by the rise of populist movements within EU member states. As some governments within the union embrace more authoritarian policies, it becomes increasingly difficult for the EU to maintain its own democratic ideals while simultaneously pushing for democratic reforms in potential member states. This tension has already been apparent in the EU’s dealings with countries like Hungary and Poland, both of which have faced criticism for undermining democratic institutions and principles. <br><hr> Ultimately, the question of EU enlargement comes down to balancing the desire for growth and influence with the need for cohesion and stability. While the benefits of expanding the union are clear, the challenges posed by governance, integration, and democratic standards are significant. It is unclear whether the EU will be able to overcome these hurdles and successfully integrate new countries in the near future. However, what is certain is that the ongoing debate over enlargement will continue to shape the future of the European Union for years to come. <br><hr> In conclusion, the European Union finds itself at a crossroads, with expansion talks taking center stage in political discourse. As countries like Ukraine, Albania, and Serbia seek membership, the EU must carefully consider the economic, geopolitical, and political implications of further enlargement. While the potential benefits of expansion are considerable, the challenges of integration, governance, and maintaining democratic principles are significant. As such, the EU must weigh these factors carefully in its decision-making process to ensure that any future enlargement strengthens, rather than destabilizes, the union.",
          "writer": "Laura Martinez",
          "aboutWriter": "Laura Martinez is a seasoned European affairs correspondent, covering the EU and its policies for over a decade.",
          "source": "Political News Network",
          "picture": "../../assets/images/politics1.jpg"  // Add the appropriate image path here
      },
      {
        "epigraph": "A nation at a crossroads",
        "headline": "UK Faces Economic and Political Uncertainty as Leadership Changes",
        "subtitle": "The British government is in turmoil amid economic challenges and growing political divisions",
        "lead": "With the economy struggling and political infighting in Westminster, the UK is facing one of its most difficult periods since Brexit.",
        "body": "The United Kingdom is once again in the throes of political instability as economic woes continue to plague the nation. Inflation is rising, unemployment is creeping up, and public services are under immense pressure. Meanwhile, the British government is grappling with internal divisions, particularly within the ruling party. Prime Minister James Baker recently faced a leadership challenge, narrowly surviving a vote of no confidence. As Westminster struggles to unite around a coherent strategy for economic recovery, opposition parties are gaining momentum, calling for new elections to address what they see as a crisis in governance. <br><hr> The political turmoil comes at a time when the UK is also facing a challenging economic landscape. Inflation has reached levels not seen in years, placing a strain on households across the country. Rising prices for essentials such as food, energy, and housing are putting a significant burden on the public. As a result, consumer confidence has plummeted, and many are questioning whether the government has the ability to address the economic challenges facing the nation. <br><hr> Unemployment, while still lower than in many other countries, has been creeping upwards. Recent figures show that job vacancies are down and the number of people seeking employment has increased. This is partly due to a slowdown in the private sector, where businesses are cutting back on hiring in response to rising costs and economic uncertainty. Moreover, industries such as retail, hospitality, and manufacturing are feeling the pinch, with many companies struggling to stay afloat amidst the cost-of-living crisis. <br><hr> Public services, which have long been a cornerstone of British society, are under immense pressure. The National Health Service (NHS) is facing record waiting times and staffing shortages, while schools and social services are struggling to meet growing demand with limited resources. Many experts warn that the long-term sustainability of these essential services is at risk if the economic situation does not improve. <br><hr> Against this backdrop of economic hardship, political divisions within the ruling party have become more apparent. Prime Minister James Baker, who assumed office just two years ago, is facing increasing scrutiny from both his party and the public. The recent vote of no confidence was a wake-up call, as many within the Conservative Party expressed dissatisfaction with his leadership. Some argue that Baker’s policies have failed to address the root causes of the economic crisis, while others criticize his inability to unite the party and provide a clear direction. <br><hr> The situation is further complicated by the growing influence of opposition parties. Labour Party leader Emma Turner has called for new elections, claiming that the current government is incapable of navigating the country through the current crisis. Turner’s call for a change in leadership resonates with many voters, particularly those who feel that the government has lost touch with the challenges faced by ordinary people. The Liberal Democrats and other smaller parties have also voiced support for a change in government, arguing that the status quo is no longer tenable. <br><hr> As the political crisis deepens, there is increasing speculation that the government may be forced to call an early election. Some analysts believe that the ruling party could lose power if an election were held soon, given the discontent within the electorate. However, others argue that an election would only deepen the country’s divisions and make it even more difficult to address the economic challenges ahead. <br><hr> The economic and political uncertainty in the UK has far-reaching consequences. International investors are closely monitoring the situation, and many have expressed concerns about the country’s long-term stability. The value of the pound has been volatile, and some economists worry that the ongoing instability could lead to a loss of confidence in the UK’s financial markets. <br><hr> In the face of these challenges, many British citizens are feeling disillusioned with the political system. Public trust in government institutions has eroded, and there is a growing sense of frustration among those who feel that their voices are not being heard. As the nation grapples with economic hardship and political upheaval, it is unclear what the future holds for the UK. <br><hr> One thing is clear, however: the United Kingdom is at a crossroads. The next few months will be crucial in determining the country’s political and economic trajectory. With the ruling party divided and opposition parties calling for change, it remains to be seen whether the UK can find a path to stability or whether the current crisis will continue to spiral. <br><hr> In conclusion, the United Kingdom is facing a period of unprecedented political and economic turmoil. Inflation, unemployment, and pressure on public services are just some of the challenges confronting the nation. At the same time, political divisions within the ruling party and growing calls for new elections from opposition parties are further complicating the situation. As the country moves forward, it will need strong leadership and a clear strategy for recovery to navigate the difficult times ahead. The outcome of the current crisis will shape the future of the UK for years to come.",
        "writer": "Michael O'Sullivan",
        "aboutWriter": "Michael O'Sullivan is a political journalist with a focus on UK politics and its evolving role post-Brexit.",
        "source": "Global Politics Today",
        "picture": "../../assets/images/politics2.jpg"
      },
      {
        "epigraph": "Global tensions rise",
        "headline": "Diplomatic Standoff Threatens Global Stability",
        "subtitle": "International relations are at a breaking point as major powers face off",
        "lead": "What began as a diplomatic disagreement has escalated into a global standoff with potential repercussions for world peace.",
        "body": "The international community is on edge as tensions between key global powers continue to rise. Diplomatic efforts to resolve disputes over territorial claims, trade, and cybersecurity have so far been unsuccessful. Countries such as the United States, China, and Russia are engaged in a series of confrontations, with sanctions and military posturing escalating the situation. Analysts warn that if the current standoff is not resolved soon, it could lead to economic fallout and even the possibility of conflict. Despite ongoing negotiations, the prospect of de-escalation seems distant, and the world watches with bated breath as global leaders navigate this precarious situation. <br><hr> In recent months, the geopolitical landscape has been characterized by an increasing number of confrontations between these major powers. The United States has imposed a series of economic sanctions on both China and Russia, citing violations of international law and human rights abuses. These sanctions have targeted key industries, including technology, energy, and defense sectors, and have resulted in retaliatory measures from China and Russia. Trade barriers have been erected, and both sides have engaged in diplomatic tit-for-tat, further deepening the divide. <br><hr> The situation has been further complicated by territorial disputes in the South China Sea, where China has made aggressive claims over large swathes of international waters. The United States, in support of its allies in the region, has conducted freedom-of-navigation operations to challenge China’s claims, leading to a series of military standoffs. Meanwhile, Russia’s actions in Ukraine and its annexation of Crimea in 2014 continue to strain its relations with the West. These ongoing territorial disputes have led to a fragile security situation, with the risk of direct military confrontation increasing. <br><hr> One of the most pressing issues is the increasing threat of cyber warfare. Both China and Russia have been accused of engaging in cyber-attacks against the United States and its allies, targeting critical infrastructure, government institutions, and private corporations. These cyber-attacks have raised concerns about the vulnerabilities of modern societies, with experts warning that the next major conflict could be fought in cyberspace. The economic and security implications of cyber warfare are vast, and the consequences of a large-scale cyber conflict could be catastrophic. <br><hr> Despite the mounting tensions, there have been attempts at diplomacy, though they have largely proven unsuccessful. The United Nations, as well as other international organizations, have called for dialogue and de-escalation. However, mistrust between the parties remains high, and the willingness to compromise is limited. In some instances, countries have engaged in back-channel negotiations, but these talks have yet to yield tangible results. As each side continues to dig in its heels, the prospects for a peaceful resolution appear increasingly remote. <br><hr> Analysts caution that the current situation is unsustainable and could lead to a broader conflict if left unchecked. The potential for economic fallout is immense, as the global economy is already struggling with the effects of the COVID-19 pandemic. Trade wars and sanctions have disrupted supply chains, leading to inflation and shortages of essential goods. A further escalation of tensions could exacerbate these problems, leading to widespread economic instability. The interconnectedness of the global economy means that no country is immune to the consequences of a major conflict between these powers. <br><hr> The possibility of a military conflict, though still considered unlikely by some, cannot be ruled out entirely. If the situation continues to escalate, there is a real danger of a miscalculation or accidental conflict that could spiral out of control. The risks of direct military engagement, particularly in areas like the South China Sea or Eastern Europe, are high. The presence of nuclear weapons on all sides further complicates the situation, as any military confrontation carries the risk of catastrophic consequences. <br><hr> Global leaders are under immense pressure to find a way out of this crisis. In the United States, President John Collins has called for stronger international cooperation to address the challenges posed by China and Russia. Collins has stressed the need for multilateral solutions to global issues, but his efforts have been complicated by domestic political divisions and the rising influence of isolationist factions within the U.S. Congress. In China, President Xi Jinping has vowed to defend China’s territorial claims and to protect the country’s economic interests, signaling that China will not back down from its position. Meanwhile, Russian President Vladimir Putin has continued to assert Russian influence in Eastern Europe and the Middle East, showing little willingness to compromise on key issues. <br><hr> The economic sanctions imposed by the United States and its allies have had a significant impact on both China and Russia. In China, the sanctions have hit the technology sector particularly hard, with companies like Huawei facing restrictions on their access to critical components. In Russia, sanctions have targeted the energy sector, further isolating the country from the global economy. However, both countries have taken steps to mitigate the effects of these sanctions by seeking new trade partners and developing alternative supply chains. China has strengthened its economic ties with countries in Africa and Latin America, while Russia has deepened its relations with nations like India and Iran. <br><hr> As the diplomatic impasse continues, the international community is left to wonder how this situation will evolve. With tensions mounting and the threat of conflict looming, the coming months could prove to be pivotal in determining the future of global relations. Will diplomatic efforts succeed in averting a crisis, or will the world be plunged into a new era of geopolitical instability? Only time will tell. <br><hr> The stakes are high, and the consequences of failure are dire. The world’s major powers must find a way to de-escalate tensions and work together to address the underlying issues that are driving the current crisis. If not, the global community may be faced with a situation that is far more dangerous than anyone could have imagined.",
        "writer": "Elena Petrova",
        "aboutWriter": "Elena Petrova is an expert in international relations, reporting on global diplomacy and conflicts for over 15 years.",
        "source": "World Political Journal",
        "picture": "../../assets/images/politics3.jpg"
      }
    ];

  beforeAll(() => {
    // Create a JSDOM environment before the tests start
    const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>');
    global.document = dom.window.document;
    global.window = dom.window;

    // Mock the politicsNews data in the global scope for testing
    global.politicsNews = mockPoliticsNews;

    // Register the custom element
    if (!customElements.get('politics-component')) {
        customElements.define('politics-component', PoliticsComponent);
    }
});

beforeEach(() => {
    // Create a container for the custom element in the DOM
    container = document.createElement('div');
    document.body.appendChild(container);
});

test('should render the correct headline', () => {
    const politicsComponent = document.createElement('politics-component');
    politicsComponent.setAttribute('news-index', '0'); // Set the index
    container.appendChild(politicsComponent);

    // Manually call connectedCallback
    politicsComponent.connectedCallback();

    // Check if the headline matches the first item
    expect(politicsComponent.querySelector('.title-news').textContent).toBe('European Union Considers Major Expansion Amid Global Challenges');
});

test('should render the image with correct alt text', () => {
    const politicsComponent = document.createElement('politics-component');
    politicsComponent.setAttribute('news-index', '0'); // Set the index
    container.appendChild(politicsComponent);

    // Manually call connectedCallback
    politicsComponent.connectedCallback();

    // Check if the image alt attribute matches
    expect(politicsComponent.querySelector('img').getAttribute('alt')).toBe('A critical moment for the EU');
});

test('should render the writer section', () => {
    const politicsComponent = document.createElement('politics-component');
    politicsComponent.setAttribute('news-index', '0'); // Set the index
    container.appendChild(politicsComponent);

    // Manually call connectedCallback
    politicsComponent.connectedCallback();

    // Check if the writer's name appears in the component
    expect(politicsComponent.querySelector('.about-writer p').textContent).toBe('Laura Martinez');
});

test('should render the correct news body content', () => {
    const politicsComponent = document.createElement('politics-component');
    politicsComponent.setAttribute('news-index', '0'); // Set the index
    container.appendChild(politicsComponent);

    // Manually call connectedCallback
    politicsComponent.connectedCallback();

    // Check if the news body contains the correct lead
    expect(politicsComponent.querySelector('.news-body p').textContent).toBe('As several countries seek membership, the European Union faces tough decisions about its future and the balance of political and economic interests.');
});


test('should handle missing news-index attribute', () => {
    const politicsComponent = document.createElement('politics-component');
    container.appendChild(politicsComponent);

    // Manually call connectedCallback
    politicsComponent.connectedCallback();

    // Check if it defaults to the first news article when the news-index is missing
    expect(politicsComponent.querySelector('.title-news').textContent).toBe('European Union Considers Major Expansion Amid Global Challenges');
});

afterEach(() => {
    // Clean up the DOM after each test
    document.body.innerHTML = '';
 });
});
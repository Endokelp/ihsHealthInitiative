import { useState } from 'react';
import { Camera, ExternalLink } from 'lucide-react';
import Section from '../components/Section';
import Card from '../components/Card';
import './Partners.css';

type Lang = 'en' | 'es' | 'zh' | 'hi' | 'so';

const LANGUAGES: { code: Lang; label: string }[] = [
  { code: 'en', label: 'English' },
  { code: 'es', label: 'Español' },
  { code: 'zh', label: '繁體中文' },
  { code: 'hi', label: 'हिन्दी' },
  { code: 'so', label: 'Soomaali' },
];

interface Partner {
  initials: string;
  name: string;
  role: string;
  url: string;
  descriptions: Record<Lang, string>;
  photo?: { src: string; alt: string };
  goal?: Record<Lang, string>;
}

const partners: Partner[] = [
  {
    initials: 'WA',
    name: 'WA Dental Help',
    role: 'Dental care directory',
    url: 'https://wadentalhelp.org',
    descriptions: {
      en: 'WA Dental Help is a free website created by Interlake Health Initiative to help people across Washington State find dental clinics based on location, insurance, and care needs. We created it to make dental care easier to find, especially for people facing cost or language barriers.',
      es: 'WA Dental Help es un sitio web gratuito creado por Interlake Health Initiative para ayudar a las personas de todo el estado de Washington a encontrar clínicas dentales según su ubicación, seguro y necesidades de atención. Lo creamos para facilitar el acceso a la atención dental, especialmente para quienes enfrentan barreras económicas o de idioma.',
      zh: 'WA Dental Help 是由 Interlake Health Initiative 創立的免費網站，幫助華盛頓州居民依照地點、保險及看診需求尋找牙科診所。我們建立這個網站，是希望讓大家更容易獲得牙科照護，尤其是面臨費用或語言障礙的人。',
      hi: 'WA Dental Help, Interlake Health Initiative द्वारा बनाई गई एक निःशुल्क वेबसाइट है, जो वॉशिंगटन राज्य के लोगों को स्थान, बीमा और इलाज की ज़रूरतों के आधार पर दंत चिकित्सालय खोजने में मदद करती है। हमने इसे दंत चिकित्सा सेवाएँ ढूँढना आसान बनाने के लिए बनाया है, खासकर उन लोगों के लिए जो खर्च या भाषा संबंधी बाधाओं का सामना करते हैं।',
      so: 'WA Dental Help waa bog internet oo bilaash ah oo ay samaysay Interlake Health Initiative, kaas oo dadka gobolka Washington ka caawiya inay helaan rugaha caafimaadka ilkaha iyadoo lagu salaynayo goobta, caymiska, iyo baahiyaha daryeelka. Waxaan u samaynay si helitaanka daryeelka ilkaha loo fududeeyo, gaar ahaan dadka ay caqabad ku yihiin kharashka ama luqadda.',
    },
  },
  {
    initials: 'CCM',
    name: 'Centro Cultural Mexicano',
    role: 'Community & cultural resources',
    url: 'https://www.centroculturalmexicano.org/',
    descriptions: {
      en: 'Centro Cultural and Interlake Health Initiative work together to make healthcare information simple, accessible, and easy to understand for families. Our goal is to connect everyone, regardless of their background or circumstances, with trusted resources and affordable healthcare options in their community.',
      es: 'Centro Cultural e Interlake Health Initiative trabajan juntos para que la información sobre la atención médica sea sencilla, accesible y fácil de entender para las familias. Nuestro objetivo es conectar a todas las personas, sin importar su origen o situación, con recursos confiables y opciones de atención médica asequibles en su comunidad.',
      zh: 'Centro Cultural 與 Interlake Health Initiative 攜手合作，致力於為家庭提供簡單、便利且容易理解的醫療資訊。我們的目標是不論每個人的背景或處境，都能協助他們找到社區中值得信賴的資源及負擔得起的醫療服務。',
      hi: 'Centro Cultural और Interlake Health Initiative मिलकर परिवारों के लिए स्वास्थ्य संबंधी जानकारी को सरल, सुलभ और आसानी से समझने योग्य बनाने का काम करते हैं। हमारा उद्देश्य हर व्यक्ति को, उसकी पृष्ठभूमि या परिस्थितियों की परवाह किए बिना, अपने समुदाय में भरोसेमंद संसाधनों और किफायती स्वास्थ्य सेवाओं से जोड़ना है।',
      so: 'Centro Cultural iyo Interlake Health Initiative waxay iska kaashadaan sidii macluumaadka daryeelka caafimaadka looga dhigi lahaa mid fudud, la heli karo, oo qoysasku si sahlan u fahmi karaan. Hadafkayagu waa inaan qof walba, iyadoon loo eegin asalkiisa ama xaaladdiisa, ku xirno ilo lagu kalsoonaan karo iyo adeegyo caafimaad oo la awoodi karo oo ka jira bulshadiisa.',
    },
  },
  {
    initials: 'BMH',
    name: 'Bellevue Mini City Hall',
    role: 'Neighborhood service center',
    url: 'https://bellevuewa.gov/city-government/departments/community-development/neighborhoods/mini-city-hall',
    descriptions: {
      en: 'Bellevue Mini City Hall partners with Interlake Health Initiative to make health and community resources more accessible to local families. Visitors can also learn more about our work and access Interlake Health Initiative resources and informational materials directly at Bellevue Mini City Hall.',
      es: 'Bellevue Mini City Hall colabora con Interlake Health Initiative para facilitar el acceso de las familias locales a recursos de salud y de la comunidad. Los visitantes también pueden conocer más sobre nuestro trabajo y acceder a recursos y materiales informativos de Interlake Health Initiative directamente en Bellevue Mini City Hall.',
      zh: 'Bellevue Mini City Hall 與 Interlake Health Initiative 合作，致力於讓當地家庭更方便地獲得健康與社區資源。民眾也可以直接前往 Bellevue Mini City Hall，進一步了解我們的工作，並取得 Interlake Health Initiative 提供的資源與相關資訊。',
      hi: 'Bellevue Mini City Hall, Interlake Health Initiative के साथ मिलकर स्थानीय परिवारों के लिए स्वास्थ्य और सामुदायिक संसाधनों को अधिक सुलभ बनाने का काम करता है। लोग Bellevue Mini City Hall में सीधे जाकर हमारे काम के बारे में अधिक जानकारी प्राप्त कर सकते हैं और Interlake Health Initiative के संसाधनों तथा जानकारी सामग्री तक पहुँच सकते हैं।',
      so: 'Bellevue Mini City Hall waxay iskaashi la leedahay Interlake Health Initiative si qoysaska deegaanka ay si fudud ugu helaan adeegyada iyo macluumaadka caafimaadka iyo bulshada. Booqdayaashu waxay sidoo kale si toos ah Bellevue Mini City Hall uga baran karaan wax badan oo ku saabsan shaqadayada, kana heli karaan agabka iyo macluumaadka Interlake Health Initiative.',
    },
  },
  {
    initials: 'CK',
    name: 'Connections Kirkland',
    role: 'Youth behavioral health',
    url: 'https://connectionshs.com/kirkland',
    photo: {
      src: '/images/connections-kirkland.jpg',
      alt: 'Two people shaking hands outside the Connections Kirkland building',
    },
    goal: {
      en: 'Our goal is to bring mental health resources to a majority of high schools in King County.',
      es: 'Nuestra meta es llevar recursos de salud mental a la mayoría de las escuelas secundarias del condado de King.',
      zh: '我們的目標是將心理健康資源帶進金郡大多數的高中。',
      hi: 'हमारा लक्ष्य किंग काउंटी के अधिकांश हाई स्कूलों तक मानसिक स्वास्थ्य संसाधन पहुँचाना है।',
      so: 'Hadafkayagu waa inaan agabka caafimaadka maskaxda gaarsiino inta badan dugsiyada sare ee Degmada King.',
    },
    descriptions: {
      en: 'Interlake Health Initiative and Connections Kirkland work together to make mental health support more accessible and affordable for youth in our community, regardless of their background or insurance status. Our goal is to connect young people with comprehensive behavioral health services that support them throughout their journey, all in one location.',
      es: 'Interlake Health Initiative y Connections Kirkland trabajan juntos para hacer que el apoyo de salud mental sea más accesible y asequible para los jóvenes de nuestra comunidad, sin importar su origen o si tienen seguro médico. Nuestro objetivo es conectar a los jóvenes con servicios integrales de salud conductual que los apoyen durante todo su proceso, en un solo lugar.',
      zh: 'Interlake Health Initiative 與 Connections Kirkland 攜手合作，致力於為社區中的青少年提供更容易取得且負擔得起的心理健康支持，無論他們的背景或是否擁有醫療保險。我們的目標是協助青少年獲得全面的行為健康服務，在同一地點為他們不同階段的需求提供支持。',
      hi: 'Interlake Health Initiative और Connections Kirkland मिलकर हमारे समुदाय के युवाओं के लिए मानसिक स्वास्थ्य सहायता को अधिक सुलभ और किफायती बनाने का काम करते हैं, चाहे उनकी पृष्ठभूमि कुछ भी हो या उनके पास स्वास्थ्य बीमा हो या न हो। हमारा उद्देश्य युवाओं को व्यापक व्यवहारिक स्वास्थ्य सेवाओं से जोड़ना है, जो उनकी पूरी यात्रा के दौरान एक ही स्थान पर सहायता प्रदान करती हैं।',
      so: 'Interlake Health Initiative iyo Connections Kirkland waxay iska kaashadaan sidii taageerada caafimaadka maskaxda looga dhigi lahaa mid la heli karo oo la awoodi karo dhalinyarada bulshadeenna, iyadoon loo eegin asalkooda ama inay leeyihiin caymis caafimaad iyo in kale. Hadafkayagu waa inaan dhalinyarada ku xirno adeegyo caafimaadka hab-dhaqanka oo dhammaystiran, kuwaas oo taageera inta ay ku jiraan safarkooda oo dhan, dhammaantoodna laga heli karo hal goob.',
    },
  },
];

const Partners = () => {
  const [lang, setLang] = useState<Lang>('en');

  return (
    <>
      <Section id="partners-hero" background="alt" className="partners-hero">
        <header className="partners-hero__header">
          <span className="section-label">Working together</span>
          <h1>Our partners</h1>
          <p className="partners-hero__subtitle">
            Organizations across Washington that team up with Interlake Health Initiative to put
            care, culture, and community resources within reach.
          </p>
        </header>
      </Section>

      <Section id="partners" background="white">
        <div className="partners__lang-switch" role="group" aria-label="Description language">
          {LANGUAGES.map(({ code, label }) => (
            <button
              key={code}
              type="button"
              className={`lang-btn ${lang === code ? 'lang-btn--active' : ''}`}
              aria-pressed={lang === code}
              onClick={() => setLang(code)}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="partners__grid">
          {partners.map((partner) => (
            <Card key={partner.name} hover className="partner-card">
              <div className={`partner-card__photo ${partner.photo ? 'partner-card__photo--filled' : ''}`}>
                {partner.photo ? (
                  <img src={partner.photo.src} alt={partner.photo.alt} loading="lazy" />
                ) : (
                  <>
                    <Camera size={20} strokeWidth={1.5} />
                    <span>Photos coming soon</span>
                  </>
                )}
              </div>
              <div className="partner-card__badge">{partner.initials}</div>
              <h3 className="partner-card__name">{partner.name}</h3>
              <p className="partner-card__role">{partner.role}</p>
              <p className="partner-card__description">{partner.descriptions[lang]}</p>
              {partner.goal && <p className="partner-card__goal">{partner.goal[lang]}</p>}
              <a
                className="partner-card__link"
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit website <ExternalLink size={16} />
              </a>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
};

export default Partners;

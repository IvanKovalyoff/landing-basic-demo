// Centralized content/config for the whole landing.
// Goal: for a new client you mainly change THIS file + assets.

import offerImg1 from '../assets/offer/images/maria-orlova-kU7TkW9FIJY-unsplash.jpg';
import offerImg2 from '../assets/offer/images/cake.jpg';
import offerImg3 from '../assets/offer/images/big-cake.jpg';
import offerImg4 from '../assets/offer/images/celebrating-cake.jpg';

const toTelHref = (phoneDisplay: string) =>
  `tel:${phoneDisplay.replace(/\s+/g, '').replace(/\(0\)/g, '')}`;

export type NavItem = { id: string; label: string };

const company = {
  name: 'Piekarnia Atelier',
  fullName: 'Piekarnia Atelier Sp. z o.o.',
  address: 'ul. Kwiatowa 12',
  city: 'Warszawa',
  postalCode: '00-001',
  nip: '123-456-78-90',
  regon: '12345678',
  krs: '0000123456',
};

export const site = {
  company,
  meta: {
    lang: 'pl',
    title: 'Piekarnia Atelier — Landing BASIC',
    description:
      'Elegancki landing page (BASIC) dla małego biznesu — oferta, zaufanie i formularz kontaktowy.',
    // Put the actual domain here after you connect it on Netlify.
    // Example: https://piekarniacreative.pl
    siteUrl: '',
    ogImage: '/og-image.png',
    themeColor: '#0f172a',
  },

  nav: {
    items: [
      { id: 'oferta', label: 'Oferta' },
      { id: 'dlaczego-my', label: 'Dlaczego warto' },
      { id: 'jak-to-dziala', label: 'Proces' },
      { id: 'o-nas', label: 'O nas' },
      { id: 'kontakt', label: 'Kontakt' },
    ] satisfies NavItem[],
  },

  hero: {
    kicker: 'Landing BASIC • Strona, która zbiera zapytania',
    lead: 'Rzemieślnicza piekarnia oparta na naturalnych składnikach i tradycyjnych metodach wypieku. Każdego dnia tworzymy chleb i wypieki bez kompromisów.',
    title: 'Piekarnia Atelier',
    ctaLabel: 'Zapytaj o ofertę',
    ctaHref: '#kontakt',
  },

  offer: {
    title: 'Nasza oferta',
    description:
      'Wybierz gotową kategorię lub opisz potrzebę — przygotujemy propozycję i termin realizacji.',
    itemCtaLabel: '➜ Zapytaj o szczegóły',
    itemCtaHref: '#kontakt',
    items: [
      {
        title: 'Chleb',
        desc: 'Chrupiąca skórka, miękki środek i naturalny zakwas. Idealny na co dzień.',
        img: offerImg1,
      },
      {
        title: 'Ciasta',
        desc: 'Klasyczne smaki i sezonowe nowości — bez kompromisów, zawsze świeże.',
        img: offerImg2,
      },
      {
        title: 'Torty',
        desc: 'Torty na urodziny, wesela i firmowe eventy. Personalizacja smaku i dekoru.',
        img: offerImg3,
      },
      {
        title: 'Wypieki okolicznościowe',
        desc: 'Słodkie stoły, babeczki, pierniki i zestawy prezentowe na każdą okazję.',
        img: offerImg4,
      },
    ],
  },

  advantages: {
    title: 'Dlaczego warto',
    description: 'W kilku punktach: jakość, proces i obsługa.',
    items: [
      {
        title: 'Naturalne składniki',
        desc: 'Bez ulepszaczy — stawiamy na jakość i prosty skład.',
        icon: '🌿',
      },
      {
        title: 'Świeże codziennie',
        desc: 'Wypiekamy rano, żebyś mógł/mogła cieszyć się świeżością.',
        icon: '🔥',
      },
      {
        title: 'Tradycyjne receptury',
        desc: 'Sprawdzone przepisy i ręczna praca w każdej partii.',
        icon: '📜',
      },
      {
        title: 'Lokalna piekarnia',
        desc: 'Działamy na miejscu — szybki odbiór i sprawna dostawa w okolicy.',
        icon: '📍',
      },
    ],
  },

  process: {
    title: 'Jak to działa',
    description: 'Od zamówienia do świeżego wypieku — prosty i przejrzysty proces.',
    steps: [
      {
        title: 'Wybór i zamówienie',
        desc: 'Wybierasz produkt z oferty lub kontaktujesz się z nami w sprawie indywidualnego zamówienia (np. tortu okolicznościowego).',
      },
      {
        title: 'Świeży wypiek',
        desc: 'Przygotowujemy wypieki na bazie naturalnych składników, według sprawdzonych receptur i z dbałością o każdy detal.',
      },
      {
        title: 'Odbiór lub dostawa',
        desc: 'Odbierasz zamówienie w naszej piekarni lub korzystasz z lokalnej dostawy — zawsze świeżo i na czas.',
      },
    ],
  },

  about: {
    title: 'O nas',
    text1:
      'Jesteśmy lokalną piekarnią z Warszawy. Łączymy tradycyjne receptury z nowoczesną estetyką — tak, aby każdy wypiek był nie tylko pyszny, ale i pięknie podany.',
    mission: {
      before: 'Nasza misja:',
      strong: 'świeżo, uczciwie i bez kompromisów',
      after: 'Wypiekamy małymi partiami, pracujemy na dobrych składnikach i dbamy o detal.',
    },
    numbers: [
      { num: '2015', desc: 'rok założenia' },
      { num: '10+', desc: 'lat doświadczenia' },
      { num: '100%', desc: 'naturalnych składników' },
      { num: 'MAX', desc: 'zadowolonych klientów' },
    ],
  },

  contact: {
    title: 'Kontakt',
    description: 'Napisz do nas — odpowiemy jak najszybciej.',
    phone: {
      display: '+48 123 123 123',
      get href() {
        return toTelHref(this.display);
      },
    },
    email: 'kontakt@piekarniacreative.pl',
    address: `${company.address}, ${company.postalCode} ${company.city}`,
    mapEmbedUrl: 'https://www.google.com/maps?q=Warszawa%20ul.%20Kwiatowa%2012&output=embed',
    form: {
      name: 'contact-basic',
      thanksPath: '/thanks.html',
    },
  },

  footer: {
    menuTitle: 'Menu',
    infoTitle: 'Informacje',
    noteLines: [
      `${company.name} • ${company.address}, ${company.postalCode} ${company.city}`,
      `NIP: ${company.nip}`,
    ],
    privacy: {
      label: 'Polityka prywatności',
      pageLinkLabel: 'Otwórz jako stronę',
      pageHref: '/privacy.html',
    },
    socials: [
      { kind: 'facebook', href: 'https://www.facebook.com/', label: 'Facebook (demo)' },
      { kind: 'instagram', href: 'https://www.instagram.com/', label: 'Instagram (demo)' },
      { kind: 'x', href: 'https://x.com/', label: 'X (demo)' },
    ] as const,
    copyright: (year: number) => `© ${year} ${company.name} — demo planu BASIC`,
  }
}

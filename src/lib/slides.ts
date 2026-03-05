export type SlideType =
  | "black"
  | "title"
  | "statement"
  | "three-columns"
  | "split"
  | "grid"
  | "list"
  | "demo"
  | "horizon"
  | "iq"
  | "facts";

export interface SlideData {
  type: SlideType;
  speakerNotes?: string;
  // TitleSlide
  title?: string;
  subtitle?: string;
  meta?: string;
  footer?: string;
  // StatementSlide
  number?: string;
  label?: string;
  sub?: string;
  // ThreeColumnsSlide
  columns?: {
    emoji: string;
    year: string;
    title: string;
    body: string;
    highlighted?: boolean;
  }[];
  // SplitSlide
  leftTitle?: string;
  leftItems?: string[];
  rightTitle?: string;
  rightItems?: string[];
  // GridSlide
  items?: { number: string; label: string; source: string }[];
  // ListSlide
  listItems?: { emoji: string; text: string }[];
  // DemoSlide
  demoLabel?: string;
  demoTitle?: string;
  demoSub?: string;
  // HorizonSlide
  horizonTitle?: string;
  horizonSub?: string;
  small?: string;
  // IQSlide
  leftNumber?: string;
  leftLabel?: string;
  rightNumber?: string;
  rightLabel?: string;
  iqSub?: string;
  // FactsSlide
  factsBullets?: string[];
}

export const slides: SlideData[] = [
  // Slide 1 — Black
  {
    type: "black",
    speakerNotes:
      "Stap het podium op. Wacht 3 seconden. Pak je telefoon. Begin pas te praten als het stil is.",
  },

  // Slide 2 — Title
  {
    type: "title",
    title: "Je Volgende Collega Is Geen Mens",
    subtitle: "Hoe AI verschuift van hulpmiddel naar autonome medewerker",
    meta: "Bart Grootveld — NLdigital Ondernemersdag — 15 april 2026",
    speakerNotes:
      "Kort, krachtig. Naam + 1 zin. Geen lange intro. Het publiek wil weten wat er gaat komen.",
  },

  // Slide 3 — Statement
  {
    type: "statement",
    number: "10",
    label: "seconden",
    sub: "Dat is de tijd tussen een klantvraag en een professioneel antwoord.",
    speakerNotes:
      "Laat de 10 even hangen. Zeg niks. Wacht. Dan pas de volgende zin.",
  },

  // Slide 4 — Three Columns
  {
    type: "three-columns",
    title: "Drie Golven",
    columns: [
      {
        emoji: "🤖",
        year: "2023",
        title: "De Chatbot",
        body: "Je stelt een vraag → je krijgt een antwoord",
      },
      {
        emoji: "🦾",
        year: "2024–2025",
        title: "De Assistent",
        body: "Je geeft een opdracht → AI voert het uit",
        highlighted: true,
      },
      {
        emoji: "👥",
        year: "2026",
        title: "De Collega",
        body: "Je geeft een doel → AI plant, handelt en rapporteert",
      },
    ],
    speakerNotes:
      "Loop rustig door elke kolom. Wijs aan. Benadruk dat Golf 3 NU is — niet toekomst.",
  },

  // Slide 5 — Grid
  {
    type: "grid",
    title: "Vier Cijfers Die Ertoe Doen",
    items: [
      { number: "78%", label: "van organisaties zet AI in", source: "Stanford HAI, 2025" },
      { number: "25%", label: "heeft daar beleid voor", source: "McKinsey, 2025" },
      { number: "46%", label: "jaarlijkse groei AI-agents", source: "Gartner, 2025" },
      { number: "93%", label: "zit vast in de pilotfase", source: "Bain, 2025" },
    ],
    speakerNotes:
      "Het contrast 78% vs 25% is de killer combo. De meesten herkennen zichzelf in die 93%.",
  },

  // Slide 6 — Split
  {
    type: "split",
    title: "Het Cruciale Onderscheid",
    leftTitle: "❌ AI als gereedschap",
    leftItems: ["Schrijf een e-mail", "Vat dit samen", "Maak een grafiek"],
    rightTitle: "✅ AI als collega",
    rightItems: [
      "Verwerk mijn inbox",
      "Analyseer al onze contracten",
      "Monitor KPI's en waarschuw mij",
    ],
    footer: "Links: je bespaart minuten. Rechts: je bespaart uren.",
    speakerNotes:
      "Vraag aan publiek: hoeveel van jullie zitten op Links? Korte pauze. Dan: dat verandert.",
  },

  // Slide 7 — Demo
  {
    type: "demo",
    demoLabel: "LIVE DEMO",
    demoTitle: "Deep Research in Real-Time",
    demoSub:
      "Een onderwerp gekozen door het publiek → 30+ bronnen → gestructureerd rapport in 2 minuten",
    speakerNotes:
      "LIVE DEMO. Vraag publiek om een onderwerp. Kies er één. Begin de prompt. Praat terwijl het laadt.",
  },

  // Slide 8 — List
  {
    type: "list",
    title: "Vijf Dingen die Je Morgen Kunt Doen",
    listItems: [
      { emoji: "📧", text: "E-mail verbeteren — plak je concept, vraag om verbetering" },
      { emoji: "📊", text: "Data analyseren — upload spreadsheet, vraag om inzichten" },
      { emoji: "🔍", text: "Onderzoek doen — stel een vraag die normaal een uur kost" },
      { emoji: "📝", text: "Vergaderingen samenvatten — upload transcript, krijg actiepunten" },
      { emoji: "🎯", text: "Gesprekken voorbereiden — beschrijf situatie, krijg voorbereiding" },
    ],
    speakerNotes:
      "Vertraag hier. Dit is de meest praktische slide. Iedereen wil dit onthouden. Eventueel QR code toevoegen.",
  },

  // Slide 9 — Demo
  {
    type: "demo",
    demoLabel: "LIVE DEMO",
    demoTitle: "Van Data naar Inzicht",
    demoSub:
      "Ruwe spreadsheet → upload → trends, uitschieters, aanbevelingen. Geen formules. Gewone taal.",
    speakerNotes:
      "LIVE DEMO. Upload voorbereid CSV. Vraag publiek wat ze willen weten. Laat het zien.",
  },

  // Slide 10 — IQ
  {
    type: "iq",
    leftNumber: "135",
    leftLabel: "menselijk hoog IQ",
    rightNumber: "12.573",
    rightLabel: "wat AI kan bereiken",
    iqSub:
      "We hebben geen woorden voor dit. Net zoals een bij geen woorden heeft voor de economie.",
    speakerNotes:
      "Zeg niks bij 135. Wijs aan. Zeg niks bij 12.573. Wijs aan. Dan pas de bijenzin.",
  },

  // Slide 11 — Horizon
  {
    type: "horizon",
    horizonTitle: "Dag 29",
    horizonSub: "De vijver is halfvol. Morgen is hij vol.",
    small:
      "Exponentiële groei ziet er lang stil uit — totdat het plotseling niet meer stil is.",
    speakerNotes:
      "Lange pauze na 'Dag 29'. Laat het landen. Dit is het emotionele hoogtepunt.",
  },

  // Slide 12 — Facts (NEW)
  {
    type: "facts",
    title: "De Cijfers die Je Wakker Houden",
    factsBullets: [
      "Verdubbelingstijd AI-capaciteit: van 7 maanden → 4 maanden (2024→2025)",
      "In 2026 doet AI een volledige werkdag. In 2028: een werkweek.",
      "90% van Anthropic's eigen code wordt door Claude geschreven",
    ],
    speakerNotes:
      "Persoonlijk eindigen. Vertel kort over Pylon/Vrijdag.AI. Nodig uit voor gesprek na afloop.",
  },

  // Slide 13 — Closing Title (was slide 12)
  {
    type: "title",
    title: "Wat doe jij morgen anders?",
    subtitle:
      "De vraag is niet of AI je werk verandert. De vraag is of jij het stuurt.",
    meta: "Bart Grootveld",
    footer: "bart@vrijdag.ai · vrijdag.ai",
    speakerNotes:
      "Persoonlijk eindigen. Vertel kort over Pylon/Vrijdag.AI. Nodig uit voor gesprek na afloop.",
  },
];

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
  | "iq";

export interface SlideData {
  type: SlideType;
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
}

export const slides: SlideData[] = [
  // Slide 1 — Black
  {
    type: "black",
  },

  // Slide 2 — Title
  {
    type: "title",
    title: "Je Volgende Collega Is Geen Mens",
    subtitle: "Hoe AI verschuift van hulpmiddel naar autonome medewerker",
    meta: "Bart Grootveld — NLdigital Ondernemersdag — 15 april 2026",
  },

  // Slide 3 — Statement
  {
    type: "statement",
    number: "10",
    label: "seconden",
    sub: "Dat is de tijd tussen een klantvraag en een professioneel antwoord.",
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
  },

  // Slide 7 — Demo
  {
    type: "demo",
    demoLabel: "LIVE DEMO",
    demoTitle: "Deep Research in Real-Time",
    demoSub:
      "Een onderwerp gekozen door het publiek → 30+ bronnen → gestructureerd rapport in 2 minuten",
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
  },

  // Slide 9 — Demo
  {
    type: "demo",
    demoLabel: "LIVE DEMO",
    demoTitle: "Van Data naar Inzicht",
    demoSub:
      "Ruwe spreadsheet → upload → trends, uitschieters, aanbevelingen. Geen formules. Gewone taal.",
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
  },

  // Slide 11 — Horizon
  {
    type: "horizon",
    horizonTitle: "Dag 29",
    horizonSub: "De vijver is halfvol. Morgen is hij vol.",
    small:
      "Exponentiële groei ziet er lang stil uit — totdat het plotseling niet meer stil is.",
  },

  // Slide 12 — Closing Title
  {
    type: "title",
    title: "Wat doe jij morgen anders?",
    subtitle:
      "De vraag is niet of AI je werk verandert. De vraag is of jij het stuurt.",
    meta: "Bart Grootveld",
    footer: "bart@vrijdag.ai · vrijdag.ai",
  },
];

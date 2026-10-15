// PDF 181-183, 185-186 (second half of book-accidents, PDF 174-187; closes
// the unit). Reviewed source text and tables, including the worked "Testa
// dina kunskaper" example on 185-186, which reuses the skadat-vägmärke
// concept from page 177 (see book-accidents-t15, extended here). PDF 184 is
// blank and PDF 187 is the next unit's title page ("Indelning av fordon" /
// book-vehicle-types), no content.
export const ACCIDENTS_181_187_QUESTIONS = [
  {
    "id": "book-accidents-q28",
    "topic": "safety",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "emergencies",
    "bookUnitId": "book-accidents",
    "bookPages": [181],
    "coverageIds": ["book-accidents-t28"],
    "title": "Trafiken ökar men dödsolyckorna minskar",
    "situation": "Trafiken i Sverige har ökat kraftigt sedan 1950. Vad har hänt med antalet dödsolyckor per motorfordon under samma period?",
    "options": [
      "Antalet döda per motorfordon har minskat med 97 %.",
      "Antalet döda per motorfordon har varit oförändrat.",
      "Antalet döda per motorfordon har mer än fördubblats."
    ],
    "correct": 0,
    "hint": "Jämför antalet motorfordon 1950 (cirka 345 000) med dagens över 5 500 000.",
    "explanation": "Trots att trafiken ökar blir antalet dödsolyckor färre. 1950 fanns det cirka 345 000 motorfordon i Sverige och 595 dog i trafiken. I dag finns det över 5 500 000 motorfordon och antalet döda är under 300 per år. Antalet döda per motorfordon har under perioden minskat med 97 %.",
    "takeaway": "Trafiksäkerheten har förbättrats dramatiskt — dödsrisken per fordon är idag en bråkdel av 1950 års nivå."
  },
  {
    "id": "book-accidents-q29",
    "topic": "safety",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "emergencies",
    "bookUnitId": "book-accidents",
    "bookPages": [181],
    "coverageIds": ["book-accidents-t29"],
    "title": "Det dödligaste året i svensk trafik",
    "situation": "Vilket år var det dödligaste i den svenska trafikens historia, enligt boken, och hur har risken per körd sträcka förändrats sedan dess?",
    "options": [
      "1965, med 1313 döda; risken har sedan dess minskat med över 90 % räknat per fordonskilometer.",
      "2024, med 213 döda; risken har ökat stadigt sedan 1950.",
      "1950, med 595 döda; risken har varit oförändrad sedan dess."
    ],
    "correct": 0,
    "hint": "Det dödligaste året ligger mitt i tabellens tidsintervall, inte i början eller slutet.",
    "explanation": "1965 dog 1313 personer, vilket är det dödligaste året i den svenska trafiken. Det motsvarar 1 död per 22 miljoner fordonskilometer. I dag är den siffran cirka 1 död per 300 miljoner fordonskilometer. Det är en minskning med över 90 %.",
    "takeaway": "1965 var det dödligaste året, men risken per körd sträcka har sedan minskat med över 90 %."
  },
  {
    "id": "book-accidents-q30",
    "topic": "safety",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "emergencies",
    "bookUnitId": "book-accidents",
    "bookPages": [182],
    "coverageIds": ["book-accidents-t30"],
    "title": "Vanligaste dödsolyckstypen",
    "situation": "Vilken olyckstyp stod för flest dödsfall i trafiken 2024, enligt bokens tabell?",
    "options": [
      "Singelolycka.",
      "Mötesolycka.",
      "Gående som blivit påkörda."
    ],
    "correct": 0,
    "hint": "Samma olyckstyp beskrevs tidigare som den vanligaste trötthetsolyckan.",
    "explanation": "Enligt bokens tabell över antal döda efter olyckstyp 2024 stod singelolyckor för flest dödsfall (61), följt av möte (51), gående (30), cykel och moped (28), övrigt (13), korsning (15), avsväng (6), upphinnande bakifrån (5), samt omkörning och vilt (2 vardera).",
    "takeaway": "Singelolyckor var den vanligaste dödsolyckstypen 2024, enligt boken."
  },
  {
    "id": "book-accidents-q31",
    "topic": "safety",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "emergencies",
    "bookUnitId": "book-accidents",
    "bookPages": [182],
    "coverageIds": ["book-accidents-t31"],
    "title": "Ovanligaste dödsolyckstyperna",
    "situation": "Vilka olyckstyper hade enligt bokens tabell lägst antal dödsfall 2024?",
    "options": [
      "Omkörning och vilt, med 2 döda vardera.",
      "Singel och möte, med flest döda vardera.",
      "Korsning och avsväng, med noll döda vardera."
    ],
    "correct": 0,
    "hint": "De två olyckstyperna delar samma, lägsta siffra i tabellen.",
    "explanation": "Enligt bokens tabell hade omkörning och vilt lägst antal döda 2024, med 2 vardera.",
    "takeaway": "Omkörnings- och viltolyckor orsakade enligt tabellen färst dödsfall av olyckstyperna."
  },
  {
    "id": "book-accidents-q32",
    "topic": "safety",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "emergencies",
    "bookUnitId": "book-accidents",
    "bookPages": [183],
    "coverageIds": ["book-accidents-t32"],
    "title": "Nollvisionen",
    "situation": "Vad är Nollvisionen, och när beslutades den?",
    "options": [
      "Ett riksdagsbeslut från 1997 med målet att ingen ska dö eller skadas allvarligt i trafiken.",
      "Ett EU-direktiv från 2010 om max antal trafikdöda per land.",
      "Transportstyrelsens interna mål för myndighetens egna fordon."
    ],
    "correct": 0,
    "hint": "Namnet syftar på målet om noll dödsfall och allvarliga skador.",
    "explanation": "Nollvisionen är ett riksdagsbeslut från 1997 med mål att ingen ska dö eller skadas allvarligt i trafiken.",
    "takeaway": "Nollvisionen är ett svenskt riksdagsbeslut från 1997 om noll döda eller allvarligt skadade i trafiken."
  },
  {
    "id": "book-accidents-q33",
    "topic": "safety",
    "kind": "Säkerhetsprincip",
    "source": "book",
    "chapterId": "emergencies",
    "bookUnitId": "book-accidents",
    "bookPages": [183],
    "coverageIds": ["book-accidents-t33"],
    "title": "Nollvisionens fokus",
    "situation": "Var ligger Nollvisionens huvudsakliga fokus för att nå målet om noll döda eller allvarligt skadade?",
    "options": [
      "Att bygga bort riskerna, till exempel med säkrare bilar och vajerräcken, eftersom människor alltid kommer att begå misstag.",
      "Enbart på strängare straff för trafikbrott.",
      "Enbart på att höja minimiåldern för körkort."
    ],
    "correct": 0,
    "hint": "Tanken är att systemet ska tåla mänskliga misstag, inte bara räkna med perfekta förare.",
    "explanation": "Nollvisionens fokus ligger på att bygga bort riskerna (exempelvis säkrare bilar och vajerräcken). Utbildning av förare är också viktigt, men människor kommer alltid att begå misstag.",
    "takeaway": "Nollvisionen bygger bort risker snarare än att enbart lita på att förare aldrig gör fel."
  },
  {
    "id": "book-accidents-q34",
    "topic": "safety",
    "kind": "Säkerhetsprincip",
    "source": "book",
    "chapterId": "emergencies",
    "bookUnitId": "book-accidents",
    "bookPages": [183],
    "coverageIds": ["book-accidents-t34"],
    "title": "Varför boken redovisar bältesstatistik",
    "situation": "Varför är det värt att veta att 40 % av alla som dör i trafiken inte använde säkerhetsbälte, enligt boken?",
    "options": [
      "Förhoppningen är att du ska inse hur extremt viktigt säkerhetsbältet är, och kunna använda statistiken om en passagerare säger att bältet är ”onödigt”.",
      "Statistiken är bara till för att jämföra Sverige med andra länder.",
      "Statistiken visar att bältesanvändning inte har någon betydelse för överlevnad."
    ],
    "correct": 0,
    "hint": "Statistiken ger dig ett konkret argument att använda i en verklig situation.",
    "explanation": "Körkortsboken innehåller statistik som kan uppfattas som onödigt vetande, men det finns en tanke med den. Att 40 % av alla som dör i trafiken inte använde säkerhetsbälte ska få dig att inse hur extremt viktigt bältet är — du kan använda statistiken om en passagerare säger att bältet är ”onödigt”.",
    "takeaway": "Statistiken om bälte är ett konkret argument, inte bara en siffra att memorera."
  },
  {
    "id": "book-accidents-q35",
    "topic": "safety",
    "kind": "Säkerhetsprincip",
    "source": "book",
    "chapterId": "emergencies",
    "bookUnitId": "book-accidents",
    "bookPages": [183],
    "coverageIds": ["book-accidents-t35"],
    "title": "Varför boken redovisar viltolycksstatistik",
    "situation": "Varför är det värt att veta att det sker 75 000 viltolyckor per år, enligt boken?",
    "options": [
      "Om du tror att det bara sker 10 viltolyckor per år respekterar du kanske inte skyltarna som varnar för djur — vetskapen om den verkliga siffran ska göra dig extra uppmärksam.",
      "Siffran är bara till för jägare, inte för bilförare.",
      "Statistiken visar att viltolyckor är ett försumbart problem i Sverige."
    ],
    "correct": 0,
    "hint": "En underskattad siffra kan göra dig slarvig vid viltvarningsskyltar.",
    "explanation": "Varför ska jag veta att det sker 75 000 viltolyckor per år? Om du tror att det sker 10 viltolyckor per år, kanske du inte respekterar skyltarna som varnar för djur. Vet du att siffran är 75 000, är förhoppningen att du ska vara extra uppmärksam när du ser en skylt som varnar för djur.",
    "takeaway": "Kunskap om den verkliga olycksfrekvensen gör dig mer benägen att respektera viltvarningsskyltar."
  }
];

export const ACCIDENTS_181_187_COVERAGE = [
  { id: "book-accidents-t28", bookUnitId: "book-accidents", pages: [181], label: "Dödsolyckor per fordon har minskat 97 % sedan 1950", questionIds: ["book-accidents-q28"], visualStatus: "reviewed" },
  { id: "book-accidents-t29", bookUnitId: "book-accidents", pages: [181], label: "1965 var det dödligaste året, risken minskad 90 %+", questionIds: ["book-accidents-q29"], visualStatus: "reviewed" },
  { id: "book-accidents-t30", bookUnitId: "book-accidents", pages: [182], label: "Singelolycka vanligaste dödsolyckstypen 2024", questionIds: ["book-accidents-q30"], visualStatus: "reviewed" },
  { id: "book-accidents-t31", bookUnitId: "book-accidents", pages: [182], label: "Omkörning och vilt ovanligaste dödsolyckstyperna 2024", questionIds: ["book-accidents-q31"], visualStatus: "reviewed" },
  { id: "book-accidents-t32", bookUnitId: "book-accidents", pages: [183], label: "Nollvisionen: riksdagsbeslut 1997", questionIds: ["book-accidents-q32"], visualStatus: "not-needed" },
  { id: "book-accidents-t33", bookUnitId: "book-accidents", pages: [183], label: "Nollvisionens fokus på att bygga bort riskerna", questionIds: ["book-accidents-q33"], visualStatus: "not-needed" },
  { id: "book-accidents-t34", bookUnitId: "book-accidents", pages: [183], label: "Syftet med bältesstatistiken", questionIds: ["book-accidents-q34"], visualStatus: "not-needed" },
  { id: "book-accidents-t35", bookUnitId: "book-accidents", pages: [183], label: "Syftet med viltolycksstatistiken", questionIds: ["book-accidents-q35"], visualStatus: "not-needed" }
];

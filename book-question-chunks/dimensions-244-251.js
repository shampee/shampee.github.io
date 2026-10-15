// PDF 244-250. Reviewed source text and the worked width-limit diagrams,
// including the "Testa dina kunskaper" example on 249-250, which reuses the
// Exempel-2 concept from page 245 (see book-dimensions-t3, extended here).
// PDF 251 is the next unit's title page ("Last" / book-load), no content.
export const DIMENSIONS_244_251_QUESTIONS = [
  {
    "id": "book-dimensions-q1",
    "topic": "rules",
    "kind": "Trafikregel",
    "source": "book",
    "chapterId": "load",
    "bookUnitId": "book-dimensions",
    "bookPages": [244],
    "coverageIds": ["book-dimensions-t1"],
    "title": "Hur mycket lasten får skjuta ut i sidled",
    "situation": "Hur mycket får lasten max skjuta ut i sidled, på vardera sidan av fordonet?",
    "options": [
      "20 cm.",
      "40 cm.",
      "60 cm."
    ],
    "correct": 0,
    "hint": "Samma siffra gäller på båda sidorna.",
    "explanation": "Lasten får max skjuta ut 20 cm i sidled.",
    "takeaway": "20 cm är den högsta tillåtna sidledsöverskjutningen för last."
  },
  {
    "id": "book-dimensions-q2",
    "topic": "rules",
    "kind": "Trafikregel",
    "source": "book",
    "chapterId": "load",
    "bookUnitId": "book-dimensions",
    "bookPages": [244],
    "coverageIds": ["book-dimensions-t2"],
    "title": "Fordonets totala maxbredd",
    "situation": "Hur bred, som mest, får fordonet vara totalt (inklusive eventuell utskjutande last)?",
    "options": [
      "260 cm (2,6 meter).",
      "220 cm (2,2 meter).",
      "300 cm (3,0 meter)."
    ],
    "correct": 0,
    "hint": "Gränsen anges både i centimeter och i meter i boken.",
    "explanation": "Totalbredden får max vara 260 cm (2,6 m).",
    "takeaway": "260 cm är den absoluta maxbredden, lasten inräknad."
  },
  {
    "id": "book-dimensions-q3",
    "topic": "rules",
    "kind": "Trafikregel",
    "source": "book",
    "chapterId": "load",
    "bookUnitId": "book-dimensions",
    "bookPages": [245, 249, 250],
    "coverageIds": ["book-dimensions-t3"],
    "title": "När totalbredden ändå är otillåten",
    "situation": "Bilen är 260 cm bred (inklusive hjul), men lasten sticker ut 40 cm på ena sidan utöver det. Är det tillåtet att köra bilen på allmän väg?",
    "options": [
      "Nej, eftersom lasten skjuter ut 40 cm på ena sidan, vilket är mer än de tillåtna 20 cm.",
      "Ja, eftersom bredden på 260 cm inte överstigs.",
      "Ja, eftersom lasten inte skjuter ut något alls på den andra sidan."
    ],
    "correct": 0,
    "hint": "Det är lastens eget utskjutande, inte bara totalbredden, som avgör.",
    "explanation": "Trafikförordningen: ”Om ett motordrivet fordon eller ett därtill kopplat fordon lastas så att lasten på någondera sidan skjuter ut mer än 20 centimeter utanför fordonet eller om fordonets bredd, lasten inräknad, överstiger 260 centimeter […] får fordonet eller därtill kopplat fordon föras endast på enskild väg.” Lasten skjuter här ut 40 cm på ena sidan, vilket bryter mot 20 cm-gränsen, så bilen får inte köras på allmän väg.",
    "takeaway": "Lasten får aldrig skjuta ut mer än 20 cm åt sidan, oavsett om totalbredden i övrigt håller sig inom gränsen."
  },
  {
    "id": "book-dimensions-q4",
    "topic": "rules",
    "kind": "Trafikregel",
    "source": "book",
    "chapterId": "load",
    "bookUnitId": "book-dimensions",
    "bookPages": [246],
    "coverageIds": ["book-dimensions-t4"],
    "title": "När själva bilen är för bred",
    "situation": "Bilen har ingen utskjutande last, men är själv 280 cm bred. Är det tillåtet att köra den på vanliga vägar?",
    "options": [
      "Nej, bilen är bredare än 260 cm och får därför inte köras på vanliga vägar.",
      "Ja, eftersom ingen last sticker ut.",
      "Ja, så länge bilen kör i det högra körfältet."
    ],
    "correct": 0,
    "hint": "Gränsen på 260 cm gäller fordonets hela bredd, inte bara lasten.",
    "explanation": "Ingen last sticker ut, men bilen är bredare än 260 cm. Detta innebär att den inte får köras på vanliga vägar.",
    "takeaway": "260 cm-gränsen gäller fordonets totala bredd, även utan någon utskjutande last."
  },
  {
    "id": "book-dimensions-q5",
    "topic": "rules",
    "kind": "Trafikregel",
    "source": "book",
    "chapterId": "load",
    "bookUnitId": "book-dimensions",
    "bookPages": [247],
    "coverageIds": ["book-dimensions-t5"],
    "title": "Maxlängden för personbil och lätt lastbil",
    "situation": "Hur lång, som mest, får en personbil eller lätt lastbil vara, inklusive last?",
    "options": [
      "24 meter.",
      "12 meter.",
      "18 meter."
    ],
    "correct": 0,
    "hint": "Gränsen är avsevärt längre än vad som är lämpligt ur säkerhetssynpunkt i de flesta fall.",
    "explanation": "Längden på personbil och lätt lastbil får vara max 24 meter inklusive last. Det är dock sällan lämpligt ur ett säkerhetsperspektiv att transportera så lång last. Vissa kommuner har lokala regler som förbjuder väldigt lång last.",
    "takeaway": "24 meter är den lagliga maxlängden, men sällan en lämplig längd i praktiken."
  },
  {
    "id": "book-dimensions-q6",
    "topic": "rules",
    "kind": "Trafikregel",
    "source": "book",
    "chapterId": "load",
    "bookUnitId": "book-dimensions",
    "bookPages": [247],
    "coverageIds": ["book-dimensions-t6"],
    "title": "Last som skjuter ut framåt",
    "situation": "Din last skjuter ut framför fordonet. Måste den alltid märkas ut?",
    "options": [
      "Nej, om delen som skjuter ut framför fordonet är kortare än 1 meter och tydligt framgår för andra trafikanter behöver den inte märkas ut.",
      "Ja, all framåtskjutande last måste alltid märkas ut, utan undantag.",
      "Nej, framåtskjutande last behöver aldrig märkas ut."
    ],
    "correct": 0,
    "hint": "Det finns ett undantag kopplat både till en längdgräns och till synlighet.",
    "explanation": "Skjuter ut framåt: märk ut. Undantag: om delen som skjuter ut framför fordonet är kortare än 1 meter och den tydligt framgår för andra trafikanter, behöver den inte märkas ut.",
    "takeaway": "En kort, tydligt synlig framåtskjutande last under 1 meter slipper märkas ut."
  },
  {
    "id": "book-dimensions-q7",
    "topic": "rules",
    "kind": "Trafikregel",
    "source": "book",
    "chapterId": "load",
    "bookUnitId": "book-dimensions",
    "bookPages": [247],
    "coverageIds": ["book-dimensions-t7"],
    "title": "Last som skjuter ut bakåt",
    "situation": "Vid vilken längd måste last som skjuter ut bakåt märkas ut?",
    "options": [
      "Om delen skjuter ut mer än 1 meter.",
      "Om delen skjuter ut mer än 20 cm.",
      "Bakåtskjutande last behöver aldrig märkas ut."
    ],
    "correct": 0,
    "hint": "Gränsen är densamma som undantagsgränsen för framåtskjutande last.",
    "explanation": "Skjuter ut bakåt: märk ut om delen skjuter ut mer än 1 meter.",
    "takeaway": "Bakåtskjutande last ska märkas ut så fort den sticker ut mer än 1 meter."
  },
  {
    "id": "book-dimensions-q8",
    "topic": "rules",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "load",
    "bookUnitId": "book-dimensions",
    "bookPages": [247],
    "coverageIds": ["book-dimensions-t8"],
    "title": "Utmärkning i dagsljus respektive mörker",
    "situation": "Hur ska utskjutande last märkas ut i dagsljus, och hur skiljer sig fram- och bakmärkningen i mörker?",
    "options": [
      "I dagsljus: flaggor eller liknande i tydliga färger både fram och bak. I mörker: fram en lykta med vitt ljus samt vita reflexer, bak en lykta med rött ljus samt röda reflexer.",
      "I dagsljus krävs ingen märkning alls; i mörker räcker det med reflexer, utan lyktor.",
      "Samma färg, gult ljus och gula reflexer, används både fram och bak i mörker."
    ],
    "correct": 0,
    "hint": "Fram- och bakmärkningen i mörker använder samma färgpar som bilens egna lyktor.",
    "explanation": "Utmärkning i dagsljus: flaggor eller liknande i tydliga färger både fram och bak. Utmärkning i mörker (eller när väderförhållandena kräver det): fram, lykta med vitt ljus samt vita reflexer; bak, lykta med rött ljus samt röda reflexer.",
    "takeaway": "Vitt fram och rött bak gäller även för markeringen av utskjutande last i mörker, precis som för bilens egna lyktor."
  },
  {
    "id": "book-dimensions-q9",
    "topic": "rules",
    "kind": "Trafikregel",
    "source": "book",
    "chapterId": "load",
    "bookUnitId": "book-dimensions",
    "bookPages": [248],
    "coverageIds": ["book-dimensions-t9"],
    "title": "Utmärkning av bogserlinan",
    "situation": "Vid vilket avstånd mellan de bogserade bilarna måste bogserlinan märkas ut?",
    "options": [
      "Om avståndet mellan bilarna är över 2 meter.",
      "Om avståndet mellan bilarna är över 1 meter.",
      "Bogserlinan behöver aldrig märkas ut."
    ],
    "correct": 0,
    "hint": "En kort lina är lätt att se utan extra markering.",
    "explanation": "Vid bogsering ska bogserlinan märkas ut om avståndet mellan bilarna är över 2 meter.",
    "takeaway": "En bogserlina längre än 2 meter mellan bilarna måste märkas ut."
  },
  {
    "id": "book-dimensions-q10",
    "topic": "rules",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "load",
    "bookUnitId": "book-dimensions",
    "bookPages": [248],
    "coverageIds": ["book-dimensions-t10"],
    "title": "Släpvagnens utmärkning fram",
    "situation": "Vad krävs fram på en släpvagn, och när krävs även positionsljus där?",
    "options": [
      "Vita reflexer, samt vitt positionsljus om släpet är bredare än 160 cm.",
      "Orangea reflexer, samt rött positionsljus om släpet är bredare än 160 cm.",
      "Inget krävs fram på en släpvagn, bara bak."
    ],
    "correct": 0,
    "hint": "Färgen matchar bilens egna lyktor framtill.",
    "explanation": "Utmärkning av släpvagn, fram: vita reflexer, samt vitt positionsljus på släp bredare än 160 cm.",
    "takeaway": "Breda släp (över 160 cm) kräver även vitt positionsljus fram, inte bara reflexer."
  },
  {
    "id": "book-dimensions-q11",
    "topic": "rules",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "load",
    "bookUnitId": "book-dimensions",
    "bookPages": [248],
    "coverageIds": ["book-dimensions-t11"],
    "title": "Släpvagnens utmärkning på sidorna",
    "situation": "Vilken färg har kraven på släpvagnens sidomarkering?",
    "options": [
      "Orangea lyktor och orangea reflexer.",
      "Vita lyktor och vita reflexer.",
      "Röda lyktor och röda reflexer."
    ],
    "correct": 0,
    "hint": "Sidofärgen skiljer sig från både fram- och bakmärkningens färger.",
    "explanation": "Utmärkning av släpvagn, sidorna: orangea lyktor, orangea reflexer.",
    "takeaway": "Orange är sidomärkningens egen färg, skild från vitt fram och rött bak."
  },
  {
    "id": "book-dimensions-q12",
    "topic": "rules",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "load",
    "bookUnitId": "book-dimensions",
    "bookPages": [248],
    "coverageIds": ["book-dimensions-t12"],
    "title": "Släpvagnens utmärkning bak",
    "situation": "Vilket av följande räknar boken INTE till kraven för en släpvagns utmärkning bak?",
    "options": [
      "Vitt positionsljus.",
      "Bakljus, bromsljus och blinkers.",
      "Skyltlykta till registreringsskylten samt röda triangelformade reflexer."
    ],
    "correct": 0,
    "hint": "Vitt ljus hör till fram-markeringen, inte bak.",
    "explanation": "Utmärkning av släpvagn, bak: bakljus, bromsljus, blinkers, skyltlykta till registreringsskylten, samt röda triangelformade reflexer.",
    "takeaway": "Bakmärkningen på en släpvagn omfattar flera funktioner, men aldrig vitt ljus."
  }
];

export const DIMENSIONS_244_251_COVERAGE = [
  { id: "book-dimensions-t1", bookUnitId: "book-dimensions", pages: [244], label: "Lasten får skjuta ut max 20 cm i sidled", questionIds: ["book-dimensions-q1"], visualStatus: "reviewed" },
  { id: "book-dimensions-t2", bookUnitId: "book-dimensions", pages: [244], label: "Totalbredden får max vara 260 cm", questionIds: ["book-dimensions-q2"], visualStatus: "reviewed" },
  { id: "book-dimensions-t3", bookUnitId: "book-dimensions", pages: [245, 249, 250], label: "40 cm utskjutande last är otillåtet trots godkänd totalbredd", questionIds: ["book-dimensions-q3"], visualStatus: "reviewed" },
  { id: "book-dimensions-t4", bookUnitId: "book-dimensions", pages: [246], label: "En bil bredare än 260 cm är otillåten utan last", questionIds: ["book-dimensions-q4"], visualStatus: "reviewed" },
  { id: "book-dimensions-t5", bookUnitId: "book-dimensions", pages: [247], label: "Maxlängd 24 meter för personbil/lätt lastbil", questionIds: ["book-dimensions-q5"], visualStatus: "not-needed" },
  { id: "book-dimensions-t6", bookUnitId: "book-dimensions", pages: [247], label: "Utmärkning av framåtskjutande last och dess undantag", questionIds: ["book-dimensions-q6"], visualStatus: "not-needed" },
  { id: "book-dimensions-t7", bookUnitId: "book-dimensions", pages: [247], label: "Utmärkning av bakåtskjutande last över 1 meter", questionIds: ["book-dimensions-q7"], visualStatus: "not-needed" },
  { id: "book-dimensions-t8", bookUnitId: "book-dimensions", pages: [247], label: "Utmärkning i dagsljus och mörker", questionIds: ["book-dimensions-q8"], visualStatus: "reviewed" },
  { id: "book-dimensions-t9", bookUnitId: "book-dimensions", pages: [248], label: "Bogserlinan märks ut över 2 meter", questionIds: ["book-dimensions-q9"], visualStatus: "reviewed" },
  { id: "book-dimensions-t10", bookUnitId: "book-dimensions", pages: [248], label: "Släpvagnens utmärkning fram", questionIds: ["book-dimensions-q10"], visualStatus: "not-needed" },
  { id: "book-dimensions-t11", bookUnitId: "book-dimensions", pages: [248], label: "Släpvagnens utmärkning på sidorna", questionIds: ["book-dimensions-q11"], visualStatus: "not-needed" },
  { id: "book-dimensions-t12", bookUnitId: "book-dimensions", pages: [248], label: "Släpvagnens utmärkning bak", questionIds: ["book-dimensions-q12"], visualStatus: "not-needed" }
];

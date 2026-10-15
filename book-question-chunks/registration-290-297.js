// PDF 290-293, 295-296. Reviewed source text, including the Del 1 excerpt
// on 291 and the worked "Testa dina kunskaper" example on 295-296, which
// reuses the automatisk-avställning concept from page 293 (see
// book-registration-t13, extended here). PDF 294 is blank and PDF 297 is
// the next unit's title page ("Försäkring" / book-insurance), no content.
export const REGISTRATION_290_297_QUESTIONS = [
  {
    "id": "book-registration-q1",
    "topic": "rules",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "responsibility",
    "bookUnitId": "book-registration",
    "bookPages": [290],
    "coverageIds": ["book-registration-t1"],
    "title": "Vem som utfärdar registreringsbeviset",
    "situation": "Vem utfärdar registreringsbeviset för alla registrerade fordon?",
    "options": [
      "Transportstyrelsen.",
      "Polisen.",
      "Det godkända besiktningsföretaget som senast besiktade fordonet."
    ],
    "correct": 0,
    "hint": "Samma myndighet som ansvarar för körkort och fordonsregister.",
    "explanation": "Alla registrerade fordon har ett registreringsbevis utfärdat av Transportstyrelsen.",
    "takeaway": "Transportstyrelsen är utfärdaren av alla registreringsbevis."
  },
  {
    "id": "book-registration-q2",
    "topic": "rules",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "responsibility",
    "bookUnitId": "book-registration",
    "bookPages": [290],
    "coverageIds": ["book-registration-t2"],
    "title": "Vad Del 1 innehåller",
    "situation": "Vilken typ av information innehåller Del 1 av registreringsbeviset?",
    "options": [
      "Tekniska uppgifter om fordonet, uppgifter om leasing och kreditköp, behörighetskod för internettjänster, samt andra allmänna uppgifter om fordonet.",
      "Enbart ägarens namn och personnummer.",
      "Enbart uppgifter om fordonets försäkringsbolag."
    ],
    "correct": 0,
    "hint": "Del 1 handlar om fordonet självt, inte om ägaren.",
    "explanation": "Del 1 – uppgifter om fordonet. Innehåller: tekniska uppgifter om fordonet, uppgifter om leasing och kreditköp, behörighetskod för internettjänster, och andra allmänna uppgifter om fordonet.",
    "takeaway": "Del 1 samlar fordonets egna uppgifter, inte ägarinformation."
  },
  {
    "id": "book-registration-q3",
    "topic": "rules",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "responsibility",
    "bookUnitId": "book-registration",
    "bookPages": [290],
    "coverageIds": ["book-registration-t3"],
    "title": "Vad Del 1 används till",
    "situation": "Vilket av följande räknas INTE till vad Del 1 av registreringsbeviset används till?",
    "options": [
      "Ägarbyte.",
      "Påställning och avställning.",
      "Beställning av registreringsskyltar och beställning av Del 2."
    ],
    "correct": 0,
    "hint": "Ägarbyte hör i stället till Del 2.",
    "explanation": "Del 1 används till: påställning, avställning, beställning av registreringsskyltar, och beställning av Del 2.",
    "takeaway": "Del 1 används för fordonsadministration, medan ägarbyte hör till Del 2."
  },
  {
    "id": "book-registration-q4",
    "topic": "rules",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "responsibility",
    "bookUnitId": "book-registration",
    "bookPages": [291],
    "coverageIds": ["book-registration-t4"],
    "title": "Informationen i Del 1-exemplet",
    "situation": "Vad kan informationen i bokens utdrag från Del 1 till exempel tala om?",
    "options": [
      "Hur tungt släp bilen får dra.",
      "Hur länge bilen har varit i ägarens ägo.",
      "Vilken bensinstation bilen senast tankade på."
    ],
    "correct": 0,
    "hint": "Jämför med den tidigare genomgången av kopplingsanordningens koder i lastkapitlet.",
    "explanation": "Nedan finns ett utdrag från Del 1 som innehåller tekniska uppgifter om fordonet. Informationen här är talar till exempel om hur tungt släp bilen får dra.",
    "takeaway": "Del 1:s tekniska uppgifter kan bland annat avgöra hur tungt släp bilen får dra."
  },
  {
    "id": "book-registration-q5",
    "topic": "rules",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "responsibility",
    "bookUnitId": "book-registration",
    "bookPages": [292],
    "coverageIds": ["book-registration-t5"],
    "title": "Vad Del 2 innehåller och används till",
    "situation": "Vad innehåller Del 2 av registreringsbeviset, och vad används den till?",
    "options": [
      "Den innehåller ägaruppgifter och de senaste ägarna av fordonet, och används till ägarbyte och avregistrering.",
      "Den innehåller enbart tekniska uppgifter om fordonet, och används till beställning av registreringsskyltar.",
      "Den innehåller försäkringsuppgifter, och används till att teckna ny trafikförsäkring."
    ],
    "correct": 0,
    "hint": "Del 2 handlar om ägaren och ägarhistoriken, till skillnad från Del 1.",
    "explanation": "Del 2 – ägarbevis och ägarbyte. Innehåller: ägaruppgifter, de senaste ägarna av fordonet, och andra allmänna uppgifter om fordonet. Används till: ägarbyte, avregistrering.",
    "takeaway": "Del 2 är ägarbeviset, använt för ägarbyte och avregistrering."
  },
  {
    "id": "book-registration-q6",
    "topic": "rules",
    "kind": "Säkerhetsråd",
    "source": "book",
    "chapterId": "responsibility",
    "bookUnitId": "book-registration",
    "bookPages": [292],
    "coverageIds": ["book-registration-t6"],
    "title": "Att förvara Del 2 säkert",
    "situation": "Varför är det viktigt att förvara Del 2 av registreringsbeviset säkert, och var avråder boken specifikt från att förvara den?",
    "options": [
      "Eftersom Del 2 används för ägarbyte, och boken avråder specifikt från att förvara den i handskfacket.",
      "Eftersom Del 2 krävs för att tanka bilen, och boken avråder från att förvara den i bagageutrymmet.",
      "Del 2 behöver inte förvaras säkert, eftersom en kopia alltid finns hos Transportstyrelsen."
    ],
    "correct": 0,
    "hint": "En vanlig plats i bilen pekas ut som olämplig.",
    "explanation": "Eftersom Del 2 används för ägarbyte, är det viktigt att du förvarar denna del av registreringsbeviset säkert. Handskfacket är en dålig plats för Del 2.",
    "takeaway": "Del 2 möjliggör ägarbyte och bör därför inte förvaras i till exempel handskfacket."
  },
  {
    "id": "book-registration-q7",
    "topic": "rules",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "responsibility",
    "bookUnitId": "book-registration",
    "bookPages": [292],
    "coverageIds": ["book-registration-t7"],
    "title": "Hur ägarbyte går till",
    "situation": "Vilket är det smidigaste sättet att göra ett ägarbyte, och finns det ett alternativ?",
    "options": [
      "Det smidigaste sättet är Transportstyrelsens webbplats eller app; du kan även fylla i Del 2 av registreringsbeviset och skicka med posten.",
      "Ägarbyte kan endast göras genom att besöka ett besiktningsföretag personligen.",
      "Ägarbyte görs automatiskt så fort köpet registreras hos Skatteverket."
    ],
    "correct": 0,
    "hint": "Det finns både en digital och en pappersbaserad väg.",
    "explanation": "Det smidigaste sättet är att göra ägarbytet på Transportstyrelsens webbplats eller app. Du kan även fylla i Del 2 av registreringsbeviset och skicka med posten.",
    "takeaway": "Ägarbyte går smidigast digitalt, men kan även göras med posten via Del 2."
  },
  {
    "id": "book-registration-q8",
    "topic": "rules",
    "kind": "Trafikregel",
    "source": "book",
    "chapterId": "responsibility",
    "bookUnitId": "book-registration",
    "bookPages": [292],
    "coverageIds": ["book-registration-t8"],
    "title": "Trafikförsäkring vid ägarbyte",
    "situation": "Vad måste den nya ägaren göra i samband med ett ägarbyte, gällande försäkring?",
    "options": [
      "Teckna en trafikförsäkring som börjar gälla samma datum som anges för ägarbytet.",
      "Vänta minst en månad innan en ny trafikförsäkring behöver tecknas.",
      "Ta över den tidigare ägarens trafikförsäkring automatiskt, utan att göra något själv."
    ],
    "correct": 0,
    "hint": "Det får inte uppstå ett glapp utan giltig försäkring.",
    "explanation": "Den nya ägaren måste teckna en trafikförsäkring som börjar gälla samma datum som anges för ägarbytet.",
    "takeaway": "Den nya ägarens trafikförsäkring måste börja gälla exakt från ägarbytesdatumet."
  },
  {
    "id": "book-registration-q9",
    "topic": "rules",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "responsibility",
    "bookUnitId": "book-registration",
    "bookPages": [292],
    "coverageIds": ["book-registration-t9"],
    "title": "Kontroll av personuppgifter vid ägarbyte",
    "situation": "Vad bör köpare och säljare göra med varandras personuppgifter inför ett ägarbyte, och vad händer om uppgifterna inte stämmer?",
    "options": [
      "Kolla upp varandras personuppgifter med hjälp av någon upplysningstjänst — om uppgifterna inte stämmer kan Transportstyrelsen inte genomföra ägarbytet.",
      "Inget särskilt behöver kontrolleras, Transportstyrelsen godkänner alltid bytet ändå.",
      "Enbart säljaren behöver kontrollera köparens uppgifter, inte tvärtom."
    ],
    "correct": 0,
    "hint": "Felaktiga uppgifter kan stoppa hela processen hos myndigheten.",
    "explanation": "Kolla upp varandras personuppgifter med hjälp av någon upplysningstjänst. Om uppgifterna inte stämmer kan Transportstyrelsen inte genomföra ägarbytet.",
    "takeaway": "Korrekta personuppgifter hos båda parter är en förutsättning för att Transportstyrelsen ska kunna genomföra ägarbytet."
  },
  {
    "id": "book-registration-q10",
    "topic": "rules",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "responsibility",
    "bookUnitId": "book-registration",
    "bookPages": [292],
    "coverageIds": ["book-registration-t10"],
    "title": "Fördelen med att ställa av fordonet",
    "situation": "Vad slipper du betala om du ställer av ditt fordon?",
    "options": [
      "Fordonsskatt och trafikförsäkring.",
      "Enbart trafikförsäkring, fordonsskatten måste ändå betalas.",
      "Enbart fordonsskatt, trafikförsäkringen måste ändå betalas."
    ],
    "correct": 0,
    "hint": "Båda de löpande kostnaderna för ett fordon i trafik upphör vid avställning.",
    "explanation": "Om du ställer av ditt fordon slipper du betala fordonsskatt och trafikförsäkring.",
    "takeaway": "En avställning befriar dig från både fordonsskatt och trafikförsäkring."
  },
  {
    "id": "book-registration-q11",
    "topic": "rules",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "responsibility",
    "bookUnitId": "book-registration",
    "bookPages": [292],
    "coverageIds": ["book-registration-t11"],
    "title": "Sätt att ställa av eller på fordonet",
    "situation": "På vilka sätt kan du ställa av eller på ditt fordon?",
    "options": [
      "Via internet och app, eller med Del 2 av registreringsbeviset.",
      "Enbart genom att besöka ett besiktningsföretag personligen.",
      "Enbart genom att ringa Transportstyrelsens kundtjänst."
    ],
    "correct": 0,
    "hint": "Samma två kanaler som för ägarbyte gäller även här.",
    "explanation": "Det finns olika sätt för att ställa av och på fordonet: internet och app, eller Del 2 av registreringsbeviset.",
    "takeaway": "Av- och påställning sker digitalt eller via Del 2 av registreringsbeviset."
  },
  {
    "id": "book-registration-q12",
    "topic": "rules",
    "kind": "Trafikregel",
    "source": "book",
    "chapterId": "responsibility",
    "bookUnitId": "book-registration",
    "bookPages": [293, 295, 296],
    "coverageIds": ["book-registration-t12"],
    "title": "Körförbud ställer inte av fordonet automatiskt",
    "situation": "Ditt fordon får körförbud, till exempel på grund av utebliven kontrollbesiktning. Blir fordonet automatiskt avställt?",
    "options": [
      "Nej, ett fordon blir aldrig automatiskt avställt — du måste själv anmäla avställningen.",
      "Ja, körförbud innebär alltid automatisk avställning samma dag.",
      "Ja, men bara om körförbudet varat i mer än 5 år."
    ],
    "correct": 0,
    "hint": "Transportstyrelsen beskriver detta som en vanlig missuppfattning.",
    "explanation": "Transportstyrelsen: ”En vanlig missuppfattning är att ett fordon automatiskt blir avställt om det till exempel får körförbud på grund av utebliven kontrollbesiktning. Så är inte fallet! Ett fordon blir aldrig automatiskt avställt – du måste själv anmäla avställningen till oss.” Om fordonet får körförbud innebär det alltså inte att det blir avställt automatiskt. Du måste alltid själv aktivt ställa av fordonet.",
    "takeaway": "Körförbud och avställning är två separata saker — avställning kräver alltid en egen, aktiv anmälan."
  },
  {
    "id": "book-registration-q13",
    "topic": "rules",
    "kind": "Trafikregel",
    "source": "book",
    "chapterId": "responsibility",
    "bookUnitId": "book-registration",
    "bookPages": [293],
    "coverageIds": ["book-registration-t13"],
    "title": "Att köra ett avställt fordon",
    "situation": "Under vilka förutsättningar får ett avställt fordon köras, och vart?",
    "options": [
      "Ett avställt fordon får endast köras till och från besiktning, förutsatt att trafikförsäkring är betald och inga fordonsskatteskulder finns.",
      "Ett avställt fordon får köras fritt så länge det är besiktigat.",
      "Ett avställt fordon får aldrig köras alls, oavsett syfte."
    ],
    "correct": 0,
    "hint": "Undantaget är smalt och gäller bara en specifik resa.",
    "explanation": "Ett avställt fordon får endast köras till och från besiktning, förutsatt att trafikförsäkring är betald och att inte fordonsskatteskulder finns.",
    "takeaway": "Ett avställt fordon får bara köras till/från besiktning, och bara med betald försäkring och utan skatteskulder."
  },
  {
    "id": "book-registration-q14",
    "topic": "rules",
    "kind": "Trafikregel",
    "source": "book",
    "chapterId": "responsibility",
    "bookUnitId": "book-registration",
    "bookPages": [293],
    "coverageIds": ["book-registration-t14"],
    "title": "Bogsering av ett avställt fordon",
    "situation": "Är det tillåtet att bogsera ett avställt fordon?",
    "options": [
      "Nej, det är förbjudet att bogsera ett avställt fordon.",
      "Ja, bogsering är alltid tillåtet oavsett avställning.",
      "Ja, men bara till och från besiktning."
    ],
    "correct": 0,
    "hint": "Undantaget för ett avställt fordon gäller bara att köra det självt, inte att bogsera det.",
    "explanation": "Det är förbjudet att bogsera ett avställt fordon.",
    "takeaway": "Bogsering av ett avställt fordon är förbjudet, utan undantag."
  }
];

export const REGISTRATION_290_297_COVERAGE = [
  { id: "book-registration-t1", bookUnitId: "book-registration", pages: [290], label: "Transportstyrelsen utfärdar registreringsbeviset", questionIds: ["book-registration-q1"], visualStatus: "not-needed" },
  { id: "book-registration-t2", bookUnitId: "book-registration", pages: [290], label: "Vad Del 1 innehåller", questionIds: ["book-registration-q2"], visualStatus: "not-needed" },
  { id: "book-registration-t3", bookUnitId: "book-registration", pages: [290], label: "Vad Del 1 används till", questionIds: ["book-registration-q3"], visualStatus: "not-needed" },
  { id: "book-registration-t4", bookUnitId: "book-registration", pages: [291], label: "Del 1 visar t.ex. tillåten släpvikt", questionIds: ["book-registration-q4"], visualStatus: "reviewed" },
  { id: "book-registration-t5", bookUnitId: "book-registration", pages: [292], label: "Vad Del 2 innehåller och används till", questionIds: ["book-registration-q5"], visualStatus: "not-needed" },
  { id: "book-registration-t6", bookUnitId: "book-registration", pages: [292], label: "Förvara Del 2 säkert, inte i handskfacket", questionIds: ["book-registration-q6"], visualStatus: "not-needed" },
  { id: "book-registration-t7", bookUnitId: "book-registration", pages: [292], label: "Ägarbyte via webbplats/app eller post", questionIds: ["book-registration-q7"], visualStatus: "not-needed" },
  { id: "book-registration-t8", bookUnitId: "book-registration", pages: [292], label: "Ny trafikförsäkring vid ägarbyte", questionIds: ["book-registration-q8"], visualStatus: "not-needed" },
  { id: "book-registration-t9", bookUnitId: "book-registration", pages: [292], label: "Kontroll av personuppgifter vid ägarbyte", questionIds: ["book-registration-q9"], visualStatus: "not-needed" },
  { id: "book-registration-t10", bookUnitId: "book-registration", pages: [292], label: "Avställning befriar från skatt och försäkring", questionIds: ["book-registration-q10"], visualStatus: "not-needed" },
  { id: "book-registration-t11", bookUnitId: "book-registration", pages: [292], label: "Sätt att ställa av/på fordonet", questionIds: ["book-registration-q11"], visualStatus: "not-needed" },
  { id: "book-registration-t12", bookUnitId: "book-registration", pages: [293, 295, 296], label: "Avställning sker aldrig automatiskt", questionIds: ["book-registration-q12"], visualStatus: "not-needed" },
  { id: "book-registration-t13", bookUnitId: "book-registration", pages: [293], label: "Villkor för att köra ett avställt fordon", questionIds: ["book-registration-q13"], visualStatus: "not-needed" },
  { id: "book-registration-t14", bookUnitId: "book-registration", pages: [293], label: "Förbud mot att bogsera ett avställt fordon", questionIds: ["book-registration-q14"], visualStatus: "not-needed" }
];

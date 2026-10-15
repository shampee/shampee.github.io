// PDF 278-280, 281-282. Reviewed source text, including the worked "Testa
// dina kunskaper" example on 281-282, which reuses the 14-månader concept
// from page 279 (see book-inspection-t9, extended here). PDF 283 is the
// next unit's title page ("Service" / book-service), no content.
export const INSPECTION_278_283_QUESTIONS = [
  {
    "id": "book-inspection-q1",
    "topic": "rules",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "responsibility",
    "bookUnitId": "book-inspection",
    "bookPages": [278],
    "coverageIds": ["book-inspection-t1"],
    "title": "Syftet med kontrollbesiktningen",
    "situation": "Varför görs kontrollbesiktningen?",
    "options": [
      "För att minska antalet olyckor som orsakas av tekniska fel samt för att reducera onödigt stora utsläpp av miljöskadliga ämnen.",
      "Enbart för att staten ska kunna ta ut en extra skatt på äldre fordon.",
      "Enbart för att kontrollera att bilen har rätt färg enligt registreringsbeviset."
    ],
    "correct": 0,
    "hint": "Besiktningen har både en säkerhets- och en miljödimension.",
    "explanation": "Kontrollbesiktningen görs för att minska antalet olyckor som orsakas av tekniska fel samt för att reducera onödigt stora utsläpp av miljöskadliga ämnen.",
    "takeaway": "Besiktningen skyddar både trafiksäkerheten och miljön, inte bara det ena."
  },
  {
    "id": "book-inspection-q2",
    "topic": "rules",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "responsibility",
    "bookUnitId": "book-inspection",
    "bookPages": [278],
    "coverageIds": ["book-inspection-t2"],
    "title": "Vem som utför besiktningen",
    "situation": "Är besiktning obligatorisk i Sverige, och vem utför den?",
    "options": [
      "Ja, besiktningen är obligatorisk och utförs av ett godkänt besiktningsföretag.",
      "Nej, besiktning är frivillig men rekommenderas av Transportstyrelsen.",
      "Ja, men den får bara utföras av polisen."
    ],
    "correct": 0,
    "hint": "Flera olika företag, inte bara ett enda, är godkända att utföra besiktningar.",
    "explanation": "Besiktningen är obligatorisk i Sverige och utförs av ett godkänt besiktningsföretag.",
    "takeaway": "Besiktning är obligatorisk, men flera godkända besiktningsföretag kan utföra den."
  },
  {
    "id": "book-inspection-q3",
    "topic": "rules",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "responsibility",
    "bookUnitId": "book-inspection",
    "bookPages": [278],
    "coverageIds": ["book-inspection-t3"],
    "title": "Stommen vid besiktningen",
    "situation": "Vad kontrolleras under rubriken ”Stommen” vid besiktningen?",
    "options": [
      "Att bilens bärande konstruktion inte skadats av till exempel svår rost.",
      "Att bilens lackfärg stämmer med registreringsbeviset.",
      "Att bilens totalvikt stämmer med tjänstevikten."
    ],
    "correct": 0,
    "hint": "Det handlar om det som håller ihop och bär upp hela bilen.",
    "explanation": "Stommen — att bilens bärande konstruktion inte skadas av till exempel svår rost.",
    "takeaway": "Stomkontrollen handlar om att den bärande konstruktionen inte är rostskadad."
  },
  {
    "id": "book-inspection-q4",
    "topic": "rules",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "responsibility",
    "bookUnitId": "book-inspection",
    "bookPages": [278],
    "coverageIds": ["book-inspection-t4"],
    "title": "Hjul och styrsystem vid besiktningen",
    "situation": "Vad kontrolleras under rubriken ”Hjul och styrsystem” vid besiktningen?",
    "options": [
      "Att det inte finns skador på fram- eller bakvagnen, samt däckens skick och mönsterdjup.",
      "Enbart att fälgarna är fria från repor.",
      "Enbart att ratten är centrerad vid rak körning."
    ],
    "correct": 0,
    "hint": "Både konstruktionen och själva däcken ingår i denna rubrik.",
    "explanation": "Hjul och styrsystem — att det inte är skador på fram- eller bakvagnen. Däckens skick och mönsterdjup kontrolleras även.",
    "takeaway": "Hjul och styrsystem täcker både vagnens skador och däckens skick/mönsterdjup."
  },
  {
    "id": "book-inspection-q5",
    "topic": "rules",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "responsibility",
    "bookUnitId": "book-inspection",
    "bookPages": [278],
    "coverageIds": ["book-inspection-t5"],
    "title": "Kommunikation vid besiktningen",
    "situation": "Vilket av följande räknas till rubriken ”Kommunikation” vid besiktningen?",
    "options": [
      "Belysning, blinkers, tuta, spolarvätska och varningstriangel.",
      "Bilens infotainmentsystem och Bluetooth-anslutning.",
      "Bilens färddator och bränsleförbrukningsmätare."
    ],
    "correct": 0,
    "hint": "Rubriken handlar om att kunna kommunicera med andra trafikanter, inte om underhållningssystem.",
    "explanation": "Kommunikation — belysning, blinkers, tuta, spolarvätska och varningstriangel.",
    "takeaway": "Kommunikation vid besiktningen avser utrustning för att synas, varna och se tydligt, inte infotainment."
  },
  {
    "id": "book-inspection-q6",
    "topic": "rules",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "responsibility",
    "bookUnitId": "book-inspection",
    "bookPages": [278],
    "coverageIds": ["book-inspection-t6"],
    "title": "Miljö vid besiktningen",
    "situation": "Vad kontrolleras under rubriken ”Miljö” vid besiktningen?",
    "options": [
      "Att avgasutsläppen jämförs med gränsvärden.",
      "Att bilen är tillverkad av återvinningsbart material.",
      "Att bilen har ett miljöcertifikat från tillverkaren."
    ],
    "correct": 0,
    "hint": "Det handlar om en mätning jämfört med fastställda gränser, inte om materialval.",
    "explanation": "Miljö — avgasutsläppen jämförs med gränsvärden.",
    "takeaway": "Miljökontrollen är en mätning av avgasutsläpp mot fastställda gränsvärden."
  },
  {
    "id": "book-inspection-q7",
    "topic": "rules",
    "kind": "Trafikregel",
    "source": "book",
    "chapterId": "responsibility",
    "bookUnitId": "book-inspection",
    "bookPages": [279],
    "coverageIds": ["book-inspection-t7"],
    "title": "Första besiktningen för en ny bil",
    "situation": "Senast när ska en ny bil besiktas första gången?",
    "options": [
      "Senast 3 år (36 månader) efter den månad då bilen första gången togs i bruk.",
      "Senast 1 år (12 månader) efter den månad då bilen första gången togs i bruk.",
      "Senast 5 år (60 månader) efter den månad då bilen första gången togs i bruk."
    ],
    "correct": 0,
    "hint": "Nya bilar får längst tid på sig innan den allra första besiktningen.",
    "explanation": "En ny bil ska besiktas första gången senast 3 år (36 månader) efter den månad då bilen första gången togs i bruk.",
    "takeaway": "En ny bils första besiktning har en 3-årsgräns räknat från ibruktagandemånaden."
  },
  {
    "id": "book-inspection-q8",
    "topic": "rules",
    "kind": "Trafikregel",
    "source": "book",
    "chapterId": "responsibility",
    "bookUnitId": "book-inspection",
    "bookPages": [279],
    "coverageIds": ["book-inspection-t8"],
    "title": "Andra besiktningen",
    "situation": "Senast när ska bilens andra besiktning ske?",
    "options": [
      "Senast 2 år (24 månader) efter den månad då föregående besiktning gjordes.",
      "Senast 3 år (36 månader) efter den månad då föregående besiktning gjordes.",
      "Senast 14 månader efter den månad då föregående besiktning gjordes."
    ],
    "correct": 0,
    "hint": "Den andra besiktningen har en kortare gräns än den första, men längre än de följande.",
    "explanation": "Andra gången senast 2 år (24 månader) efter den månad då föregående besiktning gjordes.",
    "takeaway": "Den andra besiktningen har en 2-årsgräns, mitt emellan den första och de följande besiktningarna."
  },
  {
    "id": "book-inspection-q9",
    "topic": "rules",
    "kind": "Trafikregel",
    "source": "book",
    "chapterId": "responsibility",
    "bookUnitId": "book-inspection",
    "bookPages": [279, 281, 282],
    "coverageIds": ["book-inspection-t9"],
    "title": "Besiktningsintervallet efter de två första gångerna",
    "situation": "Hur ofta ska en bil som är äldre än 5 år besiktas, efter att den redan besiktats två gånger?",
    "options": [
      "Senast 14 månader efter föregående besiktning.",
      "Senast 12 månader efter föregående besiktning.",
      "Senast 24 månader efter föregående besiktning."
    ],
    "correct": 0,
    "hint": "Detta tredje och alla följande intervall är kortare än både det första och det andra.",
    "explanation": "Därefter senast 14 månader efter den månad då föregående besiktning gjordes.",
    "takeaway": "Från och med den tredje besiktningen gäller ett återkommande 14-månadersintervall."
  },
  {
    "id": "book-inspection-q10",
    "topic": "rules",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "responsibility",
    "bookUnitId": "book-inspection",
    "bookPages": [279],
    "coverageIds": ["book-inspection-t10"],
    "title": "Sista dagen för besiktning",
    "situation": "Vilken dag i månaden är alltid sista dagen för besiktning?",
    "options": [
      "Sista dagen i månaden.",
      "Den 15:e i månaden.",
      "Samma datum som bilen ursprungligen togs i bruk."
    ],
    "correct": 0,
    "hint": "Datumet förenklas alltid till hela månaden, oavsett exakt dag.",
    "explanation": "Sista dagen för besiktning är alltid sista dagen i månaden.",
    "takeaway": "Besiktningsfristen räknas alltid till och med sista dagen i den aktuella månaden."
  },
  {
    "id": "book-inspection-q11",
    "topic": "rules",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "responsibility",
    "bookUnitId": "book-inspection",
    "bookPages": [279],
    "coverageIds": ["book-inspection-t11"],
    "title": "Räkneexempel: en ny bils första besiktning",
    "situation": "En ny bil togs i bruk den 2 april 2024. Senast när ska den besiktas första gången?",
    "options": [
      "Senast 30 april 2027.",
      "Senast 2 april 2027.",
      "Senast 30 april 2026."
    ],
    "correct": 0,
    "hint": "Räkna 3 år framåt från ibruktagandemånaden, och runda till sista dagen i den månaden.",
    "explanation": "När ska en ny bil som togs i bruk 2 april 2024 besiktas första gången? Senast 30 april 2027 (3 år efter ibruktagandemånaden april 2024, avrundat till sista dagen i månaden).",
    "takeaway": "Räkna 3 år framåt från ibruktagandemånaden och runda av till den månadens sista dag."
  },
  {
    "id": "book-inspection-q12",
    "topic": "rules",
    "kind": "Trafikregel",
    "source": "book",
    "chapterId": "responsibility",
    "bookUnitId": "book-inspection",
    "bookPages": [280],
    "coverageIds": ["book-inspection-t12"],
    "title": "Körförbud vid utebliven besiktning",
    "situation": "Vad händer om besiktning inte sker i tid?",
    "options": [
      "Fordonet får automatiskt körförbud tills det besiktas.",
      "Inget särskilt händer, så länge du besiktar bilen inom ett år.",
      "Du får en varning första gången, men inget körförbud."
    ],
    "correct": 0,
    "hint": "Konsekvensen inträder automatiskt, utan särskilt beslut i varje enskilt fall.",
    "explanation": "Om besiktning inte sker får fordonet automatiskt körförbud tills det besiktas.",
    "takeaway": "Utebliven besiktning i tid ger automatiskt körförbud."
  },
  {
    "id": "book-inspection-q13",
    "topic": "rules",
    "kind": "Trafikregel",
    "source": "book",
    "chapterId": "responsibility",
    "bookUnitId": "book-inspection",
    "bookPages": [280],
    "coverageIds": ["book-inspection-t13"],
    "title": "Fel som påpekas vid besiktningen",
    "situation": "Vad måste du göra om besiktningen påpekar fel på fordonet?",
    "options": [
      "Rätta till de fel som påpekas, annars får fordonet körförbud.",
      "Inget krävs förrän nästa ordinarie besiktning.",
      "Felen behöver bara åtgärdas om de gäller miljöutsläpp."
    ],
    "correct": 0,
    "hint": "Att bara ha genomfört besiktningen räcker inte om fel hittades.",
    "explanation": "Du måste rätta till de fel som påpekas under besiktningen. Annars får fordonet körförbud.",
    "takeaway": "Påpekade fel måste åtgärdas, annars följer körförbud, trots att besiktningen genomförts."
  },
  {
    "id": "book-inspection-q14",
    "topic": "rules",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "responsibility",
    "bookUnitId": "book-inspection",
    "bookPages": [280],
    "coverageIds": ["book-inspection-t14"],
    "title": "Flygande inspektion",
    "situation": "Vad är en flygande inspektion?",
    "options": [
      "En polis eller bilinspektör har rätt att kontrollera ett fordon när som helst.",
      "En extra besiktning som bara görs på flygplatser.",
      "En besiktning som endast gäller flygburna transporter av fordon."
    ],
    "correct": 0,
    "hint": "Namnet syftar på att kontrollen kan ske oanmäld, när som helst.",
    "explanation": "En polis eller bilinspektör har rätt att kontrollera ett fordon när som helst, en så kallad flygande inspektion.",
    "takeaway": "En flygande inspektion kan ske när som helst, oavsett ordinarie besiktningsschema."
  },
  {
    "id": "book-inspection-q15",
    "topic": "rules",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "responsibility",
    "bookUnitId": "book-inspection",
    "bookPages": [280],
    "coverageIds": ["book-inspection-t15"],
    "title": "Registreringsbesiktning",
    "situation": "Du byter motorn i din bil. Vad måste du göra, och hur skiljer sig detta från vanlig besiktning?",
    "options": [
      "Fordonet måste registreringsbesiktas inom 1 månad — skilj på begreppen besiktning och registreringsbesiktning.",
      "Ingen särskild åtgärd krävs, det räcker med nästa ordinarie besiktning.",
      "Fordonet måste genomgå en vanlig besiktning inom en vecka."
    ],
    "correct": 0,
    "hint": "En ändring av fordonet utlöser ett eget, separat krav.",
    "explanation": "Om fordonet ändras (exempelvis om motorn byts ut) måste fordonet registreringsbesiktas inom 1 månad. Skilj alltså på begreppen besiktning och registreringsbesiktning.",
    "takeaway": "En fordonsändring kräver en registreringsbesiktning inom 1 månad, skild från den ordinarie besiktningen."
  }
];

export const INSPECTION_278_283_COVERAGE = [
  { id: "book-inspection-t1", bookUnitId: "book-inspection", pages: [278], label: "Syftet med kontrollbesiktningen", questionIds: ["book-inspection-q1"], visualStatus: "not-needed" },
  { id: "book-inspection-t2", bookUnitId: "book-inspection", pages: [278], label: "Besiktning är obligatorisk, utförd av godkänt företag", questionIds: ["book-inspection-q2"], visualStatus: "not-needed" },
  { id: "book-inspection-t3", bookUnitId: "book-inspection", pages: [278], label: "Stommen vid besiktningen", questionIds: ["book-inspection-q3"], visualStatus: "not-needed" },
  { id: "book-inspection-t4", bookUnitId: "book-inspection", pages: [278], label: "Hjul och styrsystem vid besiktningen", questionIds: ["book-inspection-q4"], visualStatus: "not-needed" },
  { id: "book-inspection-t5", bookUnitId: "book-inspection", pages: [278], label: "Kommunikation vid besiktningen", questionIds: ["book-inspection-q5"], visualStatus: "not-needed" },
  { id: "book-inspection-t6", bookUnitId: "book-inspection", pages: [278], label: "Miljö vid besiktningen", questionIds: ["book-inspection-q6"], visualStatus: "not-needed" },
  { id: "book-inspection-t7", bookUnitId: "book-inspection", pages: [279], label: "Första besiktningen: senast 3 år", questionIds: ["book-inspection-q7"], visualStatus: "not-needed" },
  { id: "book-inspection-t8", bookUnitId: "book-inspection", pages: [279], label: "Andra besiktningen: senast 2 år", questionIds: ["book-inspection-q8"], visualStatus: "not-needed" },
  { id: "book-inspection-t9", bookUnitId: "book-inspection", pages: [279, 281, 282], label: "Därefter: senast 14 månader", questionIds: ["book-inspection-q9"], visualStatus: "not-needed" },
  { id: "book-inspection-t10", bookUnitId: "book-inspection", pages: [279], label: "Sista dagen i månaden som gräns", questionIds: ["book-inspection-q10"], visualStatus: "not-needed" },
  { id: "book-inspection-t11", bookUnitId: "book-inspection", pages: [279], label: "Räkneexempel för första besiktningen", questionIds: ["book-inspection-q11"], visualStatus: "not-needed" },
  { id: "book-inspection-t12", bookUnitId: "book-inspection", pages: [280], label: "Automatiskt körförbud vid utebliven besiktning", questionIds: ["book-inspection-q12"], visualStatus: "not-needed" },
  { id: "book-inspection-t13", bookUnitId: "book-inspection", pages: [280], label: "Rätta till påpekade fel eller körförbud", questionIds: ["book-inspection-q13"], visualStatus: "not-needed" },
  { id: "book-inspection-t14", bookUnitId: "book-inspection", pages: [280], label: "Flygande inspektion", questionIds: ["book-inspection-q14"], visualStatus: "not-needed" },
  { id: "book-inspection-t15", bookUnitId: "book-inspection", pages: [280], label: "Registreringsbesiktning vid fordonsändring", questionIds: ["book-inspection-q15"], visualStatus: "not-needed" }
];

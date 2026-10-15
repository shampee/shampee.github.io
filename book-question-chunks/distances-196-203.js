// PDF 196-202. Reviewed source text, diagrams and worked formula examples.
// PDF 203 is the next unit's title page ("Däck" / book-tyres), no content.
export const DISTANCES_196_203_QUESTIONS = [
  {
    "id": "book-distances-q1",
    "topic": "safety",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "grip",
    "bookUnitId": "book-distances",
    "bookPages": [196],
    "coverageIds": ["book-distances-t1"],
    "title": "Vad reaktionssträcka är",
    "situation": "Vad är reaktionssträckan?",
    "options": [
      "Sträckan du hinner åka från det att du upptäckt faran tills du börjar bromsa eller väja.",
      "Sträckan bilen förflyttas från det att du börjat bromsa tills bilen står still.",
      "Den totala sträckan från det att faran uppstår tills bilen står still."
    ],
    "correct": 0,
    "hint": "Jämför med bromssträckans definition, som börjar när bromsningen påbörjas.",
    "explanation": "Reaktionssträcka är sträckan du hinner åka från det att du upptäckt faran tills dess att du börjar bromsa eller väja.",
    "takeaway": "Reaktionssträckan slutar precis när du börjar agera, inte när bilen stannar."
  },
  {
    "id": "book-distances-q2",
    "topic": "safety",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "grip",
    "bookUnitId": "book-distances",
    "bookPages": [196],
    "coverageIds": ["book-distances-t2"],
    "title": "Hastighetens effekt på reaktionssträckan",
    "situation": "Du dubblar din hastighet. Hur påverkas reaktionssträckan, allt annat lika?",
    "options": [
      "Den blir dubbelt så lång, eftersom ökningen är proportionerlig.",
      "Den blir fyra gånger så lång, eftersom ökningen är kvadratisk.",
      "Den påverkas inte alls av hastigheten."
    ],
    "correct": 0,
    "hint": "Reaktionssträckan ökar proportionerligt, till skillnad från bromssträckan.",
    "explanation": "Reaktionssträckans längd påverkas av fordonets hastighet med en proportionerlig ökning: 2 gånger högre hastighet ger 2 gånger längre reaktionssträcka, 5 gånger högre hastighet ger 5 gånger längre reaktionssträcka.",
    "takeaway": "Reaktionssträckan växer proportionerligt med hastigheten, inte kvadratiskt."
  },
  {
    "id": "book-distances-q3",
    "topic": "safety",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "grip",
    "bookUnitId": "book-distances",
    "bookPages": [196],
    "coverageIds": ["book-distances-t3"],
    "title": "Normal reaktionstid",
    "situation": "Hur lång är en normal reaktionstid, och vilken åldersgrupp har bäst reaktionstid i trafiken?",
    "options": [
      "Normalt 0,5–2 sekunder; 45–54-åringar har bäst reaktionstid.",
      "Normalt 3–5 sekunder; 18–19-åringar har bäst reaktionstid.",
      "Normalt 0,1–0,2 sekunder; över 75-åringar har bäst reaktionstid."
    ],
    "correct": 0,
    "hint": "Samma åldersgrupp nämndes tidigare som den med bäst reaktionstid i trafikolycksstatistiken.",
    "explanation": "Din reaktionstid är normalt 0,5–2 sekunder. 45–54-åringar har bäst reaktionstid i trafiken.",
    "takeaway": "0,5–2 sekunder är en normal reaktionstid, med 45–54-åringar i topp."
  },
  {
    "id": "book-distances-q4",
    "topic": "safety",
    "kind": "Säkerhetsprincip",
    "source": "book",
    "chapterId": "grip",
    "bookUnitId": "book-distances",
    "bookPages": [197],
    "coverageIds": ["book-distances-t4"],
    "title": "Vad som kan korta reaktionssträckan",
    "situation": "Vad kan göra att din reaktionssträcka blir kortare, enligt boken?",
    "options": [
      "Förutseende av faror och handlingsberedskap.",
      "Att behöva göra ett val mellan att bromsa eller väja.",
      "Trötthet och påverkan av alkohol."
    ],
    "correct": 0,
    "hint": "Att redan ana faran innan den inträffar sparar värdefull tid.",
    "explanation": "Reaktionssträckan kan bli kortare av förutseende av faror och handlingsberedskap.",
    "takeaway": "Att förutse faror och vara beredd att agera förkortar din reaktionssträcka."
  },
  {
    "id": "book-distances-q5",
    "topic": "safety",
    "kind": "Säkerhetsprincip",
    "source": "book",
    "chapterId": "grip",
    "bookUnitId": "book-distances",
    "bookPages": [197],
    "coverageIds": ["book-distances-t5"],
    "title": "Vad som kan förlänga reaktionssträckan",
    "situation": "Vilket av följande räknar boken INTE som en orsak till att reaktionssträckan blir längre?",
    "options": [
      "Att du kör i tätbebyggt område.",
      "Att du måste göra ett val, exempelvis mellan att bromsa eller styra undan.",
      "Alkohol, droger, mediciner och trötthet."
    ],
    "correct": 0,
    "hint": "Boken kopplar en längre reaktionssträcka till beslutssituationer och nedsatt förmåga, inte till var du kör.",
    "explanation": "Reaktionssträckan kan bli längre av att du måste göra val (exempelvis mellan att bromsa eller styra undan), alkohol, droger och mediciner, samt trötthet.",
    "takeaway": "Beslutssituationer och nedsatt förmåga förlänger reaktionssträckan, inte vägmiljön i sig."
  },
  {
    "id": "book-distances-q6",
    "topic": "safety",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "grip",
    "bookUnitId": "book-distances",
    "bookPages": [197],
    "coverageIds": ["book-distances-t6"],
    "title": "Enkel formel för reaktionssträckan",
    "situation": "Du kör 50 km/h och har en reaktionstid på 1 sekund. Hur räknar du ut reaktionssträckan med bokens lätta metod (stryk sista siffran i hastigheten, multiplicera med reaktionstiden och multiplicera med 3)?",
    "options": [
      "50 km/h blir 5; 5 * 1 * 3 = 15 meter reaktionssträcka.",
      "50 km/h blir 5; 5 * 1 / 3 = 1,7 meter reaktionssträcka.",
      "50 km/h blir 50; 50 * 1 * 3 = 150 meter reaktionssträcka."
    ],
    "correct": 0,
    "hint": "Stryk bara den sista siffran i hastighetstalet, till exempel blir 50 till 5.",
    "explanation": "Lätt metod: stryk sista siffran i hastigheten, multiplicera med reaktionstiden och multiplicera med 3. Exempel med hastighet 50 km/h och reaktionstid 1 sekund: 50 km/h ⇒ 5; 5 * 1 * 3 = 15 meter reaktionssträcka.",
    "takeaway": "Bokens snabbformel för reaktionssträcka: (hastighet utan sista siffran) × reaktionstid × 3."
  },
  {
    "id": "book-distances-q7",
    "topic": "safety",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "grip",
    "bookUnitId": "book-distances",
    "bookPages": [197],
    "coverageIds": ["book-distances-t7"],
    "title": "Exakt formel för reaktionssträckan",
    "situation": "Vilken formel ger boken för större exakthet vid uträkning av reaktionssträckan, och vad betyder talet 3,6 i den?",
    "options": [
      "s = (v * r) / 3,6, där 3,6 är ett fast tal för omvandling mellan km/h och m/s.",
      "s = (v * r) * 3,6, där 3,6 är friktionstalet för torr asfalt.",
      "s = v² / (3,6 * r), där 3,6 är reaktionstiden i sekunder."
    ],
    "correct": 0,
    "hint": "Hastigheten anges i km/h men sträckan ska räknas ut i meter per sekund.",
    "explanation": "Formel för större exakthet: s = (v * r) / 3,6, där s är reaktionssträckan i meter, v är hastigheten i km/h, r är reaktionstiden i sekunder och 3,6 är ett fast tal för omvandling mellan km/h och m/s. Exempel med 50 km/h och reaktionstid 1 sekund: (50 * 1) / 3,6 = 13,9 meter reaktionssträcka.",
    "takeaway": "3,6 omvandlar km/h till m/s i den exakta reaktionssträckeformeln."
  },
  {
    "id": "book-distances-q8",
    "topic": "safety",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "grip",
    "bookUnitId": "book-distances",
    "bookPages": [198],
    "coverageIds": ["book-distances-t8"],
    "title": "Vad bromssträcka är",
    "situation": "Vad är bromssträckan?",
    "options": [
      "Sträckan bilen hinner förflyttas från det att du börjat bromsa tills dess att bilen står still.",
      "Sträckan du hinner åka innan du ens börjar bromsa.",
      "Den sammanlagda sträckan från det att faran upptäcks tills bilen står still."
    ],
    "correct": 0,
    "hint": "Bromssträckan börjar precis där reaktionssträckan slutar.",
    "explanation": "Bromssträcka är sträckan bilen hinner förflyttas från det att du börjat bromsa tills dess att bilen står still.",
    "takeaway": "Bromssträckan omfattar bara den faktiska inbromsningen, inte tiden innan du reagerar."
  },
  {
    "id": "book-distances-q9",
    "topic": "safety",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "grip",
    "bookUnitId": "book-distances",
    "bookPages": [198],
    "coverageIds": ["book-distances-t9"],
    "title": "Hastighetens effekt på bromssträckan",
    "situation": "Du kör tre gånger så fort som tidigare. Hur påverkas bromssträckan, allt annat lika?",
    "options": [
      "Den blir nio gånger så lång, eftersom ökningen är kvadratisk.",
      "Den blir tre gånger så lång, eftersom ökningen är proportionerlig.",
      "Den blir bara obetydligt längre."
    ],
    "correct": 0,
    "hint": "Bromssträckan ökar ”upphöjt till 2”, till skillnad från reaktionssträckan.",
    "explanation": "Bromssträckans längd påverkas av fordonets hastighet med en kvadratisk ökning (”upphöjt till 2”): 2 gånger högre hastighet ger 4 gånger längre bromssträcka, 3 gånger högre hastighet ger 9 gånger längre bromssträcka.",
    "takeaway": "Bromssträckan växer kvadratiskt med hastigheten — dubbel fart ger fyrdubbel bromssträcka."
  },
  {
    "id": "book-distances-q10",
    "topic": "safety",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "grip",
    "bookUnitId": "book-distances",
    "bookPages": [198],
    "coverageIds": ["book-distances-t10"],
    "title": "Vad som påverkar bromssträckans längd",
    "situation": "Utöver hastigheten, vilka faktorer påverkar bromssträckans längd, enligt boken?",
    "options": [
      "Vägen (lutning och väglag), lasten, och bromsarna (skick, teknik och hur många hjul som bromsar).",
      "Enbart bilens färg och ålder.",
      "Enbart förarens reaktionstid."
    ],
    "correct": 0,
    "hint": "Reaktionstiden hör till reaktionssträckan, inte bromssträckan.",
    "explanation": "Bromssträckans längd påverkas av fordonets hastighet, vägen (lutning och väglag), lasten, och bromsarna (skicket på dem, bromsteknik samt hur många hjul som bromsar).",
    "takeaway": "Bromssträckan beror på hastighet, väg, last och bromsarnas skick — inte bara på farten."
  },
  {
    "id": "book-distances-q11",
    "topic": "safety",
    "kind": "Säkerhetsprincip",
    "source": "book",
    "chapterId": "grip",
    "bookUnitId": "book-distances",
    "bookPages": [198, 199],
    "coverageIds": ["book-distances-t11"],
    "title": "Varför bromssträckan är svår att beräkna exakt",
    "situation": "Varför är det mycket svårt att göra bra uträkningar av bromssträckan, enligt boken?",
    "options": [
      "Väglag och däckens grepp kan vara väldigt olika — bromssträckan kan till exempel bli 10 gånger längre när det är is på vägen.",
      "Det är inte svårt, bromssträckan är alltid exakt densamma oavsett väglag.",
      "Det beror bara på att hastighetsmätaren ofta är felkalibrerad."
    ],
    "correct": 0,
    "hint": "Jämför en torr sommarväg med en isig vinterväg.",
    "explanation": "Det är mycket svårt att göra bra uträkningar av bromssträckan, eftersom väglag och däckens grepp kan vara väldigt olika. Bromssträckan kan till exempel bli 10 gånger längre när det är is på vägen.",
    "takeaway": "Väglaget kan mångdubbla bromssträckan — en beräknad siffra är bara en utgångspunkt."
  },
  {
    "id": "book-distances-q12",
    "topic": "safety",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "grip",
    "bookUnitId": "book-distances",
    "bookPages": [199],
    "coverageIds": ["book-distances-t12"],
    "title": "Enkel formel för bromssträckan",
    "situation": "Med bra och torrt väglag, bra däck och bra bromsar, hur räknar du ut bromssträckan vid 50 km/h med bokens lätta metod (stryk sista siffran, multiplicera siffran med sig själv, multiplicera sedan med 0,4)?",
    "options": [
      "50 km/h blir 5; 5 * 5 = 25; 25 * 0,4 = 10 meter bromssträcka.",
      "50 km/h blir 5; 5 * 0,4 = 2 meter bromssträcka.",
      "50 km/h blir 50; 50 * 50 * 0,4 = 1000 meter bromssträcka."
    ],
    "correct": 0,
    "hint": "Talet 0,4 kommer från bromssträckan vid 10 km/h på torrt väglag.",
    "explanation": "Lätt metod (bra och torrt väglag, bra däck, bra bromsar): stryk sista siffran i hastigheten, multiplicera siffran med sig själv och multiplicera sedan med 0,4. 0,4 kommer av att bromssträckan från 10 km/h på torrt väglag är cirka 0,4 meter, uppmätt av forskare, och ökar sedan kvadratiskt med hastigheten. Exempel med 50 km/h: 50 km/h ⇒ 5; 5 * 5 = 25; 25 * 0,4 = 10 meter bromssträcka.",
    "takeaway": "Bokens snabbformel för bromssträcka: (hastighet utan sista siffran)² × 0,4, för bra väglag, däck och bromsar."
  },
  {
    "id": "book-distances-q13",
    "topic": "safety",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "grip",
    "bookUnitId": "book-distances",
    "bookPages": [199],
    "coverageIds": ["book-distances-t13"],
    "title": "Exakt formel för bromssträckan",
    "situation": "Vilken formel ger boken för större exakthet vid uträkning av bromssträckan, och vilka ungefärliga friktionstal anges för torr asfalt respektive slät is?",
    "options": [
      "s = v² / (250 * f); friktionstalet f är cirka 0,8 på torr asfalt och cirka 0,1 på slät is.",
      "s = v² / (250 * f); friktionstalet f är cirka 0,1 på torr asfalt och cirka 0,8 på slät is.",
      "s = (v * f) / 250; friktionstalet f är cirka 2,5 oavsett väglag."
    ],
    "correct": 0,
    "hint": "Is ger ett mycket lägre friktionstal än torr asfalt.",
    "explanation": "Formel för större exakthet (bra däck och bra bromsar): s = v² / (250 * f), där s är bromssträckan i meter, v är hastigheten i km/h, 250 är ett fast tal som alltid används, och f är friktionstalet, cirka 0,8 på torr asfalt och cirka 0,1 på slät is. Exempel med 50 km/h på torr asfalt: 50² / (250 * 0,8) = 12,5 meter bromssträcka.",
    "takeaway": "Ett lågt friktionstal (som på is) ger en mycket längre bromssträcka i formeln."
  },
  {
    "id": "book-distances-q14",
    "topic": "safety",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "grip",
    "bookUnitId": "book-distances",
    "bookPages": [200],
    "coverageIds": ["book-distances-t14"],
    "title": "Stoppsträckan i ett räkneexempel",
    "situation": "Det är sommar och vägen är torr. Du kör 90 km/h med en bil som har bra däck och bra bromsar. Din reaktionstid är 1 sekund. Hur lång blir stoppsträckan, enligt bokens lätta metoder?",
    "options": [
      "59 meter (27 meter reaktionssträcka plus 32 meter bromssträcka).",
      "27 meter (enbart reaktionssträckan).",
      "81 meter (enbart bromssträckan, utan avrundning)."
    ],
    "correct": 0,
    "hint": "Stoppsträckan är reaktionssträckan plus bromssträckan.",
    "explanation": "Stoppsträckan är reaktionssträckan + bromssträckan. Reaktionssträcka: 90 km/h ⇒ 9; 9 * 1 * 3 = 27 meter. Bromssträcka: 90 km/h ⇒ 9; 9 * 9 = 81; 81 * 0,4 = 32 meter (avrundat). Stoppsträcka: 27 + 32 = 59 meter.",
    "takeaway": "Stoppsträckan summerar reaktionssträckan och bromssträckan — glöm inte att lägga ihop båda."
  },
  {
    "id": "book-distances-q15",
    "topic": "safety",
    "kind": "Säkerhetsprincip",
    "source": "book",
    "chapterId": "grip",
    "bookUnitId": "book-distances",
    "bookPages": [201, 202],
    "coverageIds": ["book-distances-t15"],
    "title": "Slitna däck och reaktionstiden",
    "situation": "Bilens däck är slitna. Hur påverkas din reaktionstid av detta?",
    "options": [
      "Den påverkas inte alls — reaktionstiden beror helt och hållet på dig som människa, inte på bilens egenskaper.",
      "Den ökar med cirka 50 %.",
      "Den ökar med cirka 100 %."
    ],
    "correct": 0,
    "hint": "Skilj på vad som påverkar reaktionstiden och vad som påverkar bromssträckan.",
    "explanation": "Reaktionstiden beror helt och hållet på dig som människa och har inget med bilens egenskaper att göra. Slitna däck påverkar i stället bromssträckan, inte reaktionstiden.",
    "takeaway": "Däckens skick påverkar bromssträckan, men reaktionstiden handlar bara om dig som förare."
  }
];

export const DISTANCES_196_203_COVERAGE = [
  { id: "book-distances-t1", bookUnitId: "book-distances", pages: [196], label: "Vad reaktionssträcka är", questionIds: ["book-distances-q1"], visualStatus: "reviewed" },
  { id: "book-distances-t2", bookUnitId: "book-distances", pages: [196], label: "Hastighetens proportionerliga effekt på reaktionssträckan", questionIds: ["book-distances-q2"], visualStatus: "not-needed" },
  { id: "book-distances-t3", bookUnitId: "book-distances", pages: [196], label: "Normal reaktionstid och bäst åldersgrupp", questionIds: ["book-distances-q3"], visualStatus: "not-needed" },
  { id: "book-distances-t4", bookUnitId: "book-distances", pages: [197], label: "Vad som kortar reaktionssträckan", questionIds: ["book-distances-q4"], visualStatus: "not-needed" },
  { id: "book-distances-t5", bookUnitId: "book-distances", pages: [197], label: "Vad som förlänger reaktionssträckan", questionIds: ["book-distances-q5"], visualStatus: "not-needed" },
  { id: "book-distances-t6", bookUnitId: "book-distances", pages: [197], label: "Lätt formel för reaktionssträckan", questionIds: ["book-distances-q6"], visualStatus: "not-needed" },
  { id: "book-distances-t7", bookUnitId: "book-distances", pages: [197], label: "Exakt formel för reaktionssträckan", questionIds: ["book-distances-q7"], visualStatus: "not-needed" },
  { id: "book-distances-t8", bookUnitId: "book-distances", pages: [198], label: "Vad bromssträcka är", questionIds: ["book-distances-q8"], visualStatus: "not-needed" },
  { id: "book-distances-t9", bookUnitId: "book-distances", pages: [198], label: "Hastighetens kvadratiska effekt på bromssträckan", questionIds: ["book-distances-q9"], visualStatus: "not-needed" },
  { id: "book-distances-t10", bookUnitId: "book-distances", pages: [198], label: "Vad som påverkar bromssträckans längd", questionIds: ["book-distances-q10"], visualStatus: "not-needed" },
  { id: "book-distances-t11", bookUnitId: "book-distances", pages: [198, 199], label: "Väglagets stora inverkan på bromssträckan", questionIds: ["book-distances-q11"], visualStatus: "not-needed" },
  { id: "book-distances-t12", bookUnitId: "book-distances", pages: [199], label: "Lätt formel för bromssträckan", questionIds: ["book-distances-q12"], visualStatus: "not-needed" },
  { id: "book-distances-t13", bookUnitId: "book-distances", pages: [199], label: "Exakt formel för bromssträckan", questionIds: ["book-distances-q13"], visualStatus: "not-needed" },
  { id: "book-distances-t14", bookUnitId: "book-distances", pages: [200], label: "Stoppsträcka som räkneexempel", questionIds: ["book-distances-q14"], visualStatus: "not-needed" },
  { id: "book-distances-t15", bookUnitId: "book-distances", pages: [201, 202], label: "Reaktionstiden opåverkad av däckens skick", questionIds: ["book-distances-q15"], visualStatus: "not-needed" }
];

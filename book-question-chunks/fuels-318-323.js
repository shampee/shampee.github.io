// PDF 318-319. Reviewed source text and the miljözon table, including the
// worked "Testa dina kunskaper" example on 321-322, which reuses the
// hybrid-definition concept from page 318 (see book-fuels-t6, extended
// here). PDF 320 is blank and PDF 323 is the next unit's title page
// ("Vägmärken" / book-signs), no content.
export const FUELS_318_323_QUESTIONS = [
  {
    "id": "book-fuels-q1",
    "topic": "environment",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "environment",
    "bookUnitId": "book-fuels",
    "bookPages": [318],
    "coverageIds": ["book-fuels-t1"],
    "title": "Bensin och diesel som fossila bränslen",
    "situation": "Vad har bensin och diesel gemensamt ur klimatsynpunkt?",
    "options": [
      "Båda är fossila bränslen som bidrar till ökad växthuseffekt och klimatförändring.",
      "Båda är helt fossilfria bränslen utan klimatpåverkan.",
      "Bara diesel räknas som fossilt bränsle, bensin gör det inte."
    ],
    "correct": 0,
    "hint": "Ingen av de två räknas som ett förnybart bränsle.",
    "explanation": "Både bensin och diesel är fossila bränslen som bidrar till ökad växthuseffekt och klimatförändring.",
    "takeaway": "Bensin och diesel är båda fossila bränslen med klimatpåverkan."
  },
  {
    "id": "book-fuels-q2",
    "topic": "environment",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "environment",
    "bookUnitId": "book-fuels",
    "bookPages": [318],
    "coverageIds": ["book-fuels-t2"],
    "title": "Dieselmotorns för- och nackdel",
    "situation": "Hur förhåller sig en dieselmotor till en bensinmotor när det gäller bränsleförbrukning och avgasernas hälsopåverkan?",
    "options": [
      "En dieselmotor har lägre bränsleförbrukning jämfört med en bensinmotor, men problemet med diesel är att avgaserna är mer hälsofarliga än de från bensin.",
      "En dieselmotor har högre bränsleförbrukning men mindre hälsofarliga avgaser än en bensinmotor.",
      "Diesel och bensin ger exakt samma bränsleförbrukning och samma hälsopåverkan."
    ],
    "correct": 0,
    "hint": "Dieselns fördel gäller förbrukningen, nackdelen gäller hälsoeffekten.",
    "explanation": "En dieselmotor har lägre bränsleförbrukning jämfört med en bensinmotor. Problemet med diesel är att avgaserna är mer hälsofarliga än de från bensin.",
    "takeaway": "Diesel sparar bränsle men ger mer hälsofarliga avgaser än bensin."
  },
  {
    "id": "book-fuels-q3",
    "topic": "environment",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "environment",
    "bookUnitId": "book-fuels",
    "bookPages": [318],
    "coverageIds": ["book-fuels-t3"],
    "title": "Miljöklass 1 på svenska bensinstationer",
    "situation": "Vilken miljöklass tillhör all bensin och diesel på bensinstationer i Sverige, och vad innebär den?",
    "options": [
      "Miljöklass 1, vilket innebär att bränslet innehåller mindre mängd skadliga ämnen.",
      "Miljöklass 3, vilket är den sämsta klassen som fortfarande är tillåten.",
      "Det finns ingen gemensam miljöklass, den varierar fritt mellan olika bensinstationer."
    ],
    "correct": 0,
    "hint": "Klassen är densamma över hela landet.",
    "explanation": "På bensinstationer i Sverige är all bensin och diesel av miljöklass 1 (innehåller mindre mängd skadliga ämnen).",
    "takeaway": "All bensin och diesel i Sverige säljs i miljöklass 1."
  },
  {
    "id": "book-fuels-q4",
    "topic": "environment",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "environment",
    "bookUnitId": "book-fuels",
    "bookPages": [318],
    "coverageIds": ["book-fuels-t4"],
    "title": "Elbilens avgaser och elens ursprung",
    "situation": "Släpper en elbil ut hälsofarliga avgaser vid körning, och varifrån kommer en stor del av elen i Sverige?",
    "options": [
      "Nej, en elbil släpper inte ut några hälsofarliga avgaser vid körning; en stor del av elen i Sverige kommer från fossilfria energikällor.",
      "Ja, elbilar släpper ut samma avgaser som bensinbilar, fast i mindre mängd.",
      "Nej, men det beror enbart på att elbilar aldrig körs i trafik, bara laddas hemma."
    ],
    "correct": 0,
    "hint": "Elbilens egen körning är avgasfri, oavsett hur elen producerats.",
    "explanation": "En elbil släpper vid körning inte ut några hälsofarliga avgaser. I Sverige kommer en stor del av elen från fossilfria energikällor.",
    "takeaway": "Elbilar är avgasfria vid körning, och svensk el kommer till stor del från fossilfria källor."
  },
  {
    "id": "book-fuels-q5",
    "topic": "environment",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "environment",
    "bookUnitId": "book-fuels",
    "bookPages": [318],
    "coverageIds": ["book-fuels-t5"],
    "title": "Elbilsbatteriets miljöproblem",
    "situation": "Är elbilar helt problemfria ur miljösynpunkt, med tanke på batteriet?",
    "options": [
      "Nej, elbilens batteri kräver stora mängder metaller från gruvor runtom i världen; denna gruvdrift orsakar utsläpp och arbetsförhållandena kan vara dåliga.",
      "Ja, batteritillverkningen är helt utsläppsfri och sker utan gruvdrift.",
      "Nej, men problemet gäller enbart batteriets vikt, inte dess tillverkning."
    ],
    "correct": 0,
    "hint": "Problemet ligger i utvinningen av råvarorna till batteriet, inte i bilens egen körning.",
    "explanation": "Elbilens batteri kräver dock stora mängder metaller som kommer från gruvor runtom i världen. Denna gruvdrift orsakar utsläpp och arbetsförhållandena kan vara dåliga.",
    "takeaway": "Elbilens avgasfria körning döljer ett miljöproblem tidigare i kedjan: batteriets metallutvinning."
  },
  {
    "id": "book-fuels-q6",
    "topic": "environment",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "environment",
    "bookUnitId": "book-fuels",
    "bookPages": [318, 321, 322],
    "coverageIds": ["book-fuels-t6"],
    "title": "Vad en hybridbil är",
    "situation": "Vilket alternativ beskriver bäst en hybridbil?",
    "options": [
      "En bil som kan köras på el och bensin.",
      "En bil som enbart körs på el.",
      "En bil som enbart drivs av solenergi med hjälp av solceller."
    ],
    "correct": 0,
    "hint": "Namnet ”hybrid” syftar på att två olika drivkällor kombineras.",
    "explanation": "Hybridbilar har två olika motorer. Vanligast är el tillsammans med bensin.",
    "takeaway": "En hybridbil kombinerar två motorer, vanligtvis en el- och en bensinmotor."
  },
  {
    "id": "book-fuels-q7",
    "topic": "environment",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "environment",
    "bookUnitId": "book-fuels",
    "bookPages": [318],
    "coverageIds": ["book-fuels-t7"],
    "title": "Hur hybridbilens två motorer samverkar",
    "situation": "När används elmotorn i en hybridbil, och när kopplas bensinmotorn in?",
    "options": [
      "Elmotorn kan användas under korta sträckor i stan; när längre räckvidd och mer kraft behövs kopplas bensinmotorn in automatiskt.",
      "Bensinmotorn används alltid först, och elmotorn kopplas bara in vid motorvägskörning.",
      "De två motorerna kan aldrig användas i samma bil utan manuellt val av föraren varje gång."
    ],
    "correct": 0,
    "hint": "Elmotorn är bäst lämpad för kortare, långsammare sträckor.",
    "explanation": "Elmotorn kan användas under korta sträckor i stan. När längre räckvidd och mer kraft behövs kopplas bensinmotorn in automatiskt.",
    "takeaway": "Elmotorn sköter korta stadssträckor, medan bensinmotorn automatiskt tar över vid behov av räckvidd och kraft."
  },
  {
    "id": "book-fuels-q8",
    "topic": "environment",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "environment",
    "bookUnitId": "book-fuels",
    "bookPages": [318],
    "coverageIds": ["book-fuels-t8"],
    "title": "Laddhybridens särdrag",
    "situation": "Vad innebär det att en hybridbil är en laddhybrid?",
    "options": [
      "Att du kan ladda bilen med en laddkabel.",
      "Att bilen enbart kan laddas genom motorbromsning, aldrig med kabel.",
      "Att bilen saknar bensinmotor helt och hållet."
    ],
    "correct": 0,
    "hint": "Namnet syftar direkt på möjligheten att ladda batteriet externt.",
    "explanation": "En laddhybrid innebär att du kan ladda med en laddkabel.",
    "takeaway": "Laddhybrider kan laddas externt med en laddkabel, till skillnad från vanliga hybrider."
  },
  {
    "id": "book-fuels-q9",
    "topic": "environment",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "environment",
    "bookUnitId": "book-fuels",
    "bookPages": [319],
    "coverageIds": ["book-fuels-t9"],
    "title": "Utsläppsklasser och euroklass",
    "situation": "Vad måste alla nya bilar som säljs inom EU uppfylla, och var anges bilens euroklass?",
    "options": [
      "Vissa utsläppskrav (kolmonoxid, kolväten, kväveoxider och partiklar); vilken euroklass bilen tillhör anges i registreringsbeviset.",
      "Ett krav på att enbart drivas av el eller vätgas, oavsett tillverkningsår.",
      "Ett krav på minsta tillåtna motorstorlek, angivet i bilens instruktionsbok."
    ],
    "correct": 0,
    "hint": "Kraven gäller specifika ämnen i avgaserna, inte motorns storlek.",
    "explanation": "Alla nya bilar som säljs inom EU måste uppfylla vissa utsläppskrav (kolmonoxid, kolväten, kväveoxider och partiklar). Vilken euroklass (t.ex. Euro 5, Euro 6) bilen tillhör står angivet i registreringsbeviset.",
    "takeaway": "EU:s utsläppskrav omfattar flera specifika ämnen, och bilens euroklass står i registreringsbeviset."
  },
  {
    "id": "book-fuels-q10",
    "topic": "environment",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "environment",
    "bookUnitId": "book-fuels",
    "bookPages": [319],
    "coverageIds": ["book-fuels-t10"],
    "title": "Högre euroklass-siffra",
    "situation": "Vad innebär en högre siffra i euroklassningen, till exempel Euro 6 jämfört med Euro 5?",
    "options": [
      "En högre siffra innebär lägre utsläpp.",
      "En högre siffra innebär högre utsläpp.",
      "Siffran har ingen koppling till utsläppsnivån, bara till biltillverkningsåret."
    ],
    "correct": 0,
    "hint": "Nyare euroklasser skärper kraven jämfört med äldre.",
    "explanation": "Högre siffra innebär lägre utsläpp.",
    "takeaway": "En högre euroklass-siffra betyder strängare krav och lägre utsläpp."
  },
  {
    "id": "book-fuels-q11",
    "topic": "environment",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "environment",
    "bookUnitId": "book-fuels",
    "bookPages": [319],
    "coverageIds": ["book-fuels-t11"],
    "title": "Syftet med miljözoner",
    "situation": "Vad är syftet med att kommuner inför miljözoner?",
    "options": [
      "Att förbättra luftkvaliteten.",
      "Att minska antalet parkeringsplatser i city.",
      "Att öka kommunens skatteintäkter från fordonstrafik."
    ],
    "correct": 0,
    "hint": "Åtgärden är direkt kopplad till vilken typ av fordon som tillåts.",
    "explanation": "Kommuner kan införa miljözoner där endast vissa typer av fordon tillåts. Syftet är att förbättra luftkvaliteten.",
    "takeaway": "Miljözoner finns för att förbättra luftkvaliteten genom att begränsa vilka fordon som får köra där."
  },
  {
    "id": "book-fuels-q12",
    "topic": "environment",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "environment",
    "bookUnitId": "book-fuels",
    "bookPages": [319],
    "coverageIds": ["book-fuels-t12"],
    "title": "Miljözon klass 1",
    "situation": "Vilka fordon berörs av miljözon klass 1, och får en vanlig personbil köra där?",
    "options": [
      "Den berör endast tunga fordon (nyare lastbilar tillåts, äldre modeller är förbjudna); personbil får köra där oavsett drivmedel.",
      "Den berör alla fordonstyper, inklusive personbilar med äldre drivmedel.",
      "Den tillåter bara elfordon, precis som klass 3."
    ],
    "correct": 0,
    "hint": "Klass 1 är den mildaste av de tre miljözonsklasserna, riktad mot en specifik fordonstyp.",
    "explanation": "Klass 1 berör endast tunga fordon. Till exempel tillåts nyare lastbilar, men äldre modeller är förbjudna. Du med personbil får köra här oavsett drivmedel.",
    "takeaway": "Miljözon klass 1 riktar sig enbart mot äldre tunga fordon — personbilar berörs inte."
  },
  {
    "id": "book-fuels-q13",
    "topic": "environment",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "environment",
    "bookUnitId": "book-fuels",
    "bookPages": [319],
    "coverageIds": ["book-fuels-t13"],
    "title": "Miljözon klass 2",
    "situation": "Vilka krav gäller för bensin- respektive dieselbilar i miljözon klass 2?",
    "options": [
      "Bensinbilar måste uppfylla Euro 5 eller Euro 6; dieselbilar måste uppfylla Euro 6.",
      "Bensinbilar måste uppfylla Euro 6; dieselbilar måste uppfylla Euro 5 eller Euro 6.",
      "Samma krav, Euro 6, gäller för både bensin- och dieselbilar."
    ],
    "correct": 0,
    "hint": "Dieselbilar har ett strängare krav än bensinbilar i den här klassen.",
    "explanation": "Klass 2: bensinbilar måste uppfylla Euro 5 eller Euro 6. Dieselbilar måste uppfylla Euro 6.",
    "takeaway": "I miljözon klass 2 krävs strängare euroklass av dieselbilar (bara Euro 6) än av bensinbilar (Euro 5 eller 6)."
  },
  {
    "id": "book-fuels-q14",
    "topic": "environment",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "environment",
    "bookUnitId": "book-fuels",
    "bookPages": [319],
    "coverageIds": ["book-fuels-t14"],
    "title": "Miljözon klass 3",
    "situation": "Vilka fordon får köra i miljözon klass 3, och gäller detta även laddhybrider?",
    "options": [
      "Bara elfordon, bränslecellsfordon och gasfordon får köra där — bensin och diesel är förbjudet, och även laddhybrider är förbjudna.",
      "Alla fordon får köra där, så länge de uppfyller Euro 6.",
      "Laddhybrider är tillåtna, eftersom de delvis kan köras på el."
    ],
    "correct": 0,
    "hint": "Detta är den strängaste av de tre miljözonsklasserna.",
    "explanation": "Klass 3: här får bara elfordon, bränslecellsfordon och gasfordon köra. Bensin och diesel är förbjudet. Även laddhybrider är förbjudna.",
    "takeaway": "Miljözon klass 3 är strängast — även laddhybrider är förbjudna där, trots sin eldrift."
  }
];

export const FUELS_318_323_COVERAGE = [
  { id: "book-fuels-t1", bookUnitId: "book-fuels", pages: [318], label: "Bensin och diesel som fossila bränslen", questionIds: ["book-fuels-q1"], visualStatus: "not-needed" },
  { id: "book-fuels-t2", bookUnitId: "book-fuels", pages: [318], label: "Dieselns lägre förbrukning men farligare avgaser", questionIds: ["book-fuels-q2"], visualStatus: "not-needed" },
  { id: "book-fuels-t3", bookUnitId: "book-fuels", pages: [318], label: "Miljöklass 1 på svenska bensinstationer", questionIds: ["book-fuels-q3"], visualStatus: "reviewed" },
  { id: "book-fuels-t4", bookUnitId: "book-fuels", pages: [318], label: "Elbilens avgasfria körning och elens ursprung", questionIds: ["book-fuels-q4"], visualStatus: "not-needed" },
  { id: "book-fuels-t5", bookUnitId: "book-fuels", pages: [318], label: "Elbilsbatteriets gruvdriftsproblem", questionIds: ["book-fuels-q5"], visualStatus: "not-needed" },
  { id: "book-fuels-t6", bookUnitId: "book-fuels", pages: [318, 321, 322], label: "Vad en hybridbil är (två motorer)", questionIds: ["book-fuels-q6"], visualStatus: "not-needed" },
  { id: "book-fuels-t7", bookUnitId: "book-fuels", pages: [318], label: "Samverkan mellan el- och bensinmotor i hybrid", questionIds: ["book-fuels-q7"], visualStatus: "not-needed" },
  { id: "book-fuels-t8", bookUnitId: "book-fuels", pages: [318], label: "Laddhybridens laddkabel", questionIds: ["book-fuels-q8"], visualStatus: "not-needed" },
  { id: "book-fuels-t9", bookUnitId: "book-fuels", pages: [319], label: "EU:s utsläppskrav och euroklass i registreringsbeviset", questionIds: ["book-fuels-q9"], visualStatus: "not-needed" },
  { id: "book-fuels-t10", bookUnitId: "book-fuels", pages: [319], label: "Högre euroklass-siffra ger lägre utsläpp", questionIds: ["book-fuels-q10"], visualStatus: "not-needed" },
  { id: "book-fuels-t11", bookUnitId: "book-fuels", pages: [319], label: "Syftet med miljözoner", questionIds: ["book-fuels-q11"], visualStatus: "not-needed" },
  { id: "book-fuels-t12", bookUnitId: "book-fuels", pages: [319], label: "Miljözon klass 1", questionIds: ["book-fuels-q12"], visualStatus: "reviewed" },
  { id: "book-fuels-t13", bookUnitId: "book-fuels", pages: [319], label: "Miljözon klass 2", questionIds: ["book-fuels-q13"], visualStatus: "reviewed" },
  { id: "book-fuels-t14", bookUnitId: "book-fuels", pages: [319], label: "Miljözon klass 3", questionIds: ["book-fuels-q14"], visualStatus: "reviewed" }
];

// PDF 168-172. Reviewed source text and illustrations, including the worked
// "Testa dina kunskaper" example on 171-172, which quotes Trafikförordningen
// directly and extends the särskild-hänsyn concept introduced on page 168.
// PDF 173 is the next unit's title page ("Trafikolyckor" / book-accidents),
// no content.
export const CHILDREN_168_173_QUESTIONS = [
  {
    "id": "book-children-q1",
    "topic": "rules",
    "kind": "Trafikregel",
    "source": "book",
    "chapterId": "vulnerable",
    "bookUnitId": "book-children",
    "bookPages": [168, 171, 172],
    "coverageIds": ["book-children-t1"],
    "title": "Skyldighet att visa särskild hänsyn",
    "situation": "Är du skyldig att visa särskild hänsyn mot vissa trafikanter, eller ska alla behandlas exakt likadant?",
    "options": [
      "Ja, du ska visa särskild hänsyn mot till exempel barn, äldre, skolpatruller och personer med ett funktionshinder eller en sjukdom som är till hinder för dem i trafiken.",
      "Nej, alla trafikanter ska behandlas på exakt samma sätt, oavsett ålder eller förmåga.",
      "Särskild hänsyn krävs bara mot barn, inte mot äldre eller personer med funktionsnedsättning."
    ],
    "correct": 0,
    "hint": "Trafikförordningen räknar upp flera grupper, inte bara barn.",
    "explanation": "Trafikförordningen säger: ”Trafikanten skall visa särskild hänsyn mot barn, äldre, skolpatruller och personer som det framgår har ett funktionshinder eller en sjukdom som är till hinder för dem i trafiken.” Barn och trafik går inte bra ihop, så denna hänsyn gäller inte minst dem.",
    "takeaway": "Särskild hänsyn gäller flera grupper: barn, äldre, skolpatruller och personer med funktionshinder eller sjukdom."
  },
  {
    "id": "book-children-q2",
    "topic": "safety",
    "kind": "Säkerhetsprincip",
    "source": "book",
    "chapterId": "vulnerable",
    "bookUnitId": "book-children",
    "bookPages": [168],
    "coverageIds": ["book-children-t2"],
    "title": "Lekande och impulsiva barn",
    "situation": "Vilka regler styr barns beteende när de leker, enligt boken?",
    "options": [
      "Lekvärldens regler är det enda som räknas.",
      "Barn följer alltid trafikreglerna lika strikt som vuxna.",
      "Barn leker bara på platser helt avskilda från trafiken."
    ],
    "correct": 0,
    "hint": "En stor del av barnens liv går ut på att leka.",
    "explanation": "En stor del av barnens liv går ut på att leka. Lekvärldens regler är det enda som räknas.",
    "takeaway": "När barn leker styrs de av lekens egna regler, inte av trafikens."
  },
  {
    "id": "book-children-q3",
    "topic": "safety",
    "kind": "Säkerhetsprincip",
    "source": "book",
    "chapterId": "vulnerable",
    "bookUnitId": "book-children",
    "bookPages": [168],
    "coverageIds": ["book-children-t3"],
    "title": "Ögonkontakt med ett barn räcker inte",
    "situation": "Ett barn står stilla vid vägkanten och har ögonkontakt med dig. Kan du vara helt säker på att barnet väntar kvar?",
    "options": [
      "Nej, en kompis på andra sidan gatan kan ropa, och barnet kan plötsligt glömma bilarna och springa över vägen.",
      "Ja, ögonkontakt med ett barn garanterar alltid att barnet väntar.",
      "Ja, så länge barnet är över tio år gammalt."
    ],
    "correct": 0,
    "hint": "Barnets uppmärksamhet kan skifta blixtsnabbt till något annat.",
    "explanation": "Även om du ser att ett barn står stilla och har ögonkontakt med dig, kan du inte vara helt säker på situationen. Ropar en kompis på andra sidan gatan, kan barnet plötsligt glömma bort bilarna och springa över vägen. Var därför alltid på din vakt när barn är i närheten.",
    "takeaway": "Ögonkontakt med ett barn är ingen garanti — var alltid på din vakt."
  },
  {
    "id": "book-children-q4",
    "topic": "safety",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "vulnerable",
    "bookUnitId": "book-children",
    "bookPages": [169],
    "coverageIds": ["book-children-t4"],
    "title": "Barns sinnen och reaktionstid",
    "situation": "Varför kan ett barns reaktionstid i trafiken vara längre än du tror?",
    "options": [
      "Barn tar längre tid på sig att ställa om mellan närseende och fjärrseende, och har svårare att bedöma varifrån ett ljud kommer.",
      "Barns reaktionstid är alltid snabbare än en vuxens, eftersom barn är piggare.",
      "Det beror enbart på att barn är kortare än vuxna."
    ],
    "correct": 0,
    "hint": "Sinnena är inte färdigutvecklade hos barn.",
    "explanation": "Ett barn tar längre tid på sig att ställa om mellan närseende och fjärrseende. De har också svårare att bedöma varifrån ett ljud kommer. Detta gör att ett barns reaktionstid kan vara längre än du tror.",
    "takeaway": "Outvecklade sinnen gör att barn kan reagera senare än förväntat."
  },
  {
    "id": "book-children-q5",
    "topic": "safety",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "vulnerable",
    "bookUnitId": "book-children",
    "bookPages": [169],
    "coverageIds": ["book-children-t5"],
    "title": "Barns svårighet att beräkna risker",
    "situation": "Du kör i låg fart mot en plats där ett barn står. Kan du räkna med att barnet bedömer din bil som ofarlig eftersom farten är låg?",
    "options": [
      "Nej, barn har svårt att beräkna risker och kan bedöma en bil i låg fart på samma sätt som en vinglande bil i hög fart.",
      "Ja, barn bedömer riskerna i trafiken minst lika bra som vuxna.",
      "Ja, så länge bilen syns tydligt på långt håll."
    ],
    "correct": 0,
    "hint": "Det handlar inte om barnet kan se bilen, utan om att förstå risken.",
    "explanation": "Barn har svårigheter att beräkna risker. En bil som kommer i låg fart bedöms på samma sätt som en vinglande bil i hög fart. Det går att lära ett barn att stanna innan han eller hon går över vägen, men problemet är att barnet inte riktigt förstår varför det är viktigt, vilket gör att instruktionerna lätt kan bortprioriteras när leken tar vid.",
    "takeaway": "Barn kan inte alltid skilja en ofarligt långsam bil från en farlig snabb."
  },
  {
    "id": "book-children-q6",
    "topic": "safety",
    "kind": "Säkerhetsprincip",
    "source": "book",
    "chapterId": "vulnerable",
    "bookUnitId": "book-children",
    "bookPages": [169],
    "coverageIds": ["book-children-t6"],
    "title": "Barn kan döljas helt bakom en parkerad bil",
    "situation": "Du passerar en rad parkerade bilar. En vuxen människa syns i de flesta fall bakom en parkerad bil. Gäller samma sak för ett barn?",
    "options": [
      "Nej, ett barn kan döljas helt bakom bilen, vilket gör att du inte får någon förvarning innan barnet kliver ut i gatan.",
      "Ja, barn är precis lika synliga som vuxna bakom en parkerad bil.",
      "Nej, men bara om barnet sitter ner."
    ],
    "correct": 0,
    "hint": "Barnets lägre höjd gör skillnaden mot en vuxen.",
    "explanation": "En vuxen människa går i de flesta fall att se bakom en parkerad bil. Ett barn kan dock döljas helt bakom bilen, vilket gör att du inte får någon förvarning innan barnet kliver ut i gatan.",
    "takeaway": "Barns låga höjd gör att de kan vara helt dolda bakom parkerade bilar."
  },
  {
    "id": "book-children-q7",
    "topic": "safety",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "vulnerable",
    "bookUnitId": "book-children",
    "bookPages": [169],
    "coverageIds": ["book-children-t7"],
    "title": "Barn och smutsig luft",
    "situation": "Varför är barn extra känsliga för de föroreningar som trafiken orsakar?",
    "options": [
      "Ett barn som utsätts för mycket avgaser löper till exempel större risk att drabbas av astma.",
      "Barn påverkas inte alls av avgaser, bara vuxna med befintliga luftvägsproblem gör det.",
      "Känsligheten gäller bara barn som redan har en hjärt-kärlsjukdom."
    ],
    "correct": 0,
    "hint": "Boken nämner en specifik luftvägssjukdom som exempel.",
    "explanation": "Barn är extra känsliga för de föroreningar som trafiken orsakar. Ett barn som utsätts för mycket avgaser löper till exempel större risk att drabbas av astma.",
    "takeaway": "Trafikens avgaser är en extra hälsorisk för barn, inklusive ökad astmarisk."
  },
  {
    "id": "book-children-q8",
    "topic": "safety",
    "kind": "Säkerhetsråd",
    "source": "book",
    "chapterId": "vulnerable",
    "bookUnitId": "book-children",
    "bookPages": [169],
    "coverageIds": ["book-children-t8"],
    "title": "Omkörning av en stillastående skolbuss",
    "situation": "Du närmar dig en stillastående skolbuss där barn just har släppts av. Varför måste du vara mycket försiktig?",
    "options": [
      "Risken är stor att barnen som släppts av plötsligt springer över gatan utan att titta.",
      "Risken gäller bara om bussen har motorn igång.",
      "Det finns ingen särskild risk, så länge du håller gällande hastighetsgräns."
    ],
    "correct": 0,
    "hint": "Barnen har just klivit av och kan vara ivriga att komma hem.",
    "explanation": "Ska du köra om en stillastående skolbuss måste du vara mycket försiktig. Risken är stor att barnen som släppts av plötsligt springer över gatan utan att titta.",
    "takeaway": "En stillastående skolbuss kräver extra försiktighet — barn kan springa ut oväntat."
  },
  {
    "id": "book-children-q9",
    "topic": "safety",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "vulnerable",
    "bookUnitId": "book-children",
    "bookPages": [169],
    "coverageIds": ["book-children-t9"],
    "title": "Skolskjutsens varningslampor",
    "situation": "När tänder och släcker en skolskjuts sina varningslampor i förhållande till ett stopp?",
    "options": [
      "Chauffören tänder dem 100 meter före stoppet och släcker dem 100 meter efter stoppet.",
      "Lamporna tänds bara i exakt det ögonblick bussen stannar.",
      "Lamporna är alltid tända under hela skolskjutsens rutt."
    ],
    "correct": 0,
    "hint": "Både tändning och släckning sker på samma avstånd från stoppet.",
    "explanation": "Skolskjutsar har skyltar med varningslampor som chauffören tänder 100 meter före ett stopp och släcker 100 meter efter stoppet.",
    "takeaway": "Skolskjutsens varningslampor varnar både före och en bit efter varje stopp."
  },
  {
    "id": "book-children-q10",
    "topic": "safety",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "vulnerable",
    "bookUnitId": "book-children",
    "bookPages": [170],
    "coverageIds": ["book-children-t10"],
    "title": "Vilka skolpatrullerna är",
    "situation": "Vilka är det oftast som utgör en skolpatrull, och hur känns de igen?",
    "options": [
      "Oftast barn eller ungdomar, med orangefärgade kappor med reflexer, som står vid början av övergångsställen.",
      "Alltid utbildade poliser i polisuniform.",
      "Vuxna föräldrar som turas om att dirigera trafiken mitt i korsningen."
    ],
    "correct": 0,
    "hint": "Namnet ”skolpolis” syftar bara på deras funktion, inte på att de är poliser.",
    "explanation": "Skolpatruller (skolpolis) är oftast själva barn eller ungdomar. De har orangefärgade kappor med reflexer och står vid början av övergångsställena.",
    "takeaway": "Skolpatruller är oftast barn eller ungdomar i orange reflexkappor, inte poliser."
  },
  {
    "id": "book-children-q11",
    "topic": "safety",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "vulnerable",
    "bookUnitId": "book-children",
    "bookPages": [170],
    "coverageIds": ["book-children-t11"],
    "title": "Skolpatrullens huvuduppgifter",
    "situation": "Vilka är skolpatrullens huvuduppgifter, enligt boken?",
    "options": [
      "Se till att barnen på väg till och från skolan kommer över vägen säkert, och genom sin närvaro uppmärksamma bilister på att barn finns i närheten.",
      "Dirigera all trafik i korsningen precis som en polis.",
      "Kontrollera att förare har körkort och bilbälte."
    ],
    "correct": 0,
    "hint": "Uppgifterna handlar om barnens säkerhet och om att synas för bilister.",
    "explanation": "Skolpatrullernas huvuduppgifter: se till att barnen på väg till och från skolan kommer över vägen säkert, och genom närvaron uppmärksamma dig som bilist på att barn finns i närheten.",
    "takeaway": "Skolpatrullen skyddar barnen och gör dig som bilist uppmärksam på att barn är nära."
  },
  {
    "id": "book-children-q12",
    "topic": "rules",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "vulnerable",
    "bookUnitId": "book-children",
    "bookPages": [170],
    "coverageIds": ["book-children-t12"],
    "title": "Skolpatrullens befogenheter",
    "situation": "Har en skolpatrull befogenhet att stoppa trafiken, som en polis kan göra?",
    "options": [
      "Nej, skolpatrullerna har inga speciella befogenheter och får till exempel inte stoppa trafiken.",
      "Ja, en skolpatrull har exakt samma befogenheter som en polis i trafiken.",
      "Ja, men bara under skolans första och sista timme på dagen."
    ],
    "correct": 0,
    "hint": "Skolpatrullens roll är att uppmärksamma, inte att dirigera.",
    "explanation": "Skolpatrullerna har inga speciella befogenheter, de får till exempel inte stoppa trafiken.",
    "takeaway": "En skolpatrull kan inte stoppa trafiken — det kräver andra befogenheter, exempelvis polis."
  }
];

export const CHILDREN_168_173_COVERAGE = [
  { id: "book-children-t1", bookUnitId: "book-children", pages: [168, 171, 172], label: "Särskild hänsyn mot barn, äldre, skolpatruller och funktionshinder", questionIds: ["book-children-q1"], visualStatus: "not-needed" },
  { id: "book-children-t2", bookUnitId: "book-children", pages: [168], label: "Lekvärldens regler styr lekande barn", questionIds: ["book-children-q2"], visualStatus: "not-needed" },
  { id: "book-children-t3", bookUnitId: "book-children", pages: [168], label: "Ögonkontakt med barn garanterar ingenting", questionIds: ["book-children-q3"], visualStatus: "reviewed" },
  { id: "book-children-t4", bookUnitId: "book-children", pages: [169], label: "Barns outvecklade sinnen och reaktionstid", questionIds: ["book-children-q4"], visualStatus: "not-needed" },
  { id: "book-children-t5", bookUnitId: "book-children", pages: [169], label: "Barns svårighet att beräkna risker", questionIds: ["book-children-q5"], visualStatus: "not-needed" },
  { id: "book-children-t6", bookUnitId: "book-children", pages: [169], label: "Barn kan vara helt dolda bakom parkerade bilar", questionIds: ["book-children-q6"], visualStatus: "not-needed" },
  { id: "book-children-t7", bookUnitId: "book-children", pages: [169], label: "Barn och smutsig luft", questionIds: ["book-children-q7"], visualStatus: "not-needed" },
  { id: "book-children-t8", bookUnitId: "book-children", pages: [169], label: "Omkörning av stillastående skolbuss", questionIds: ["book-children-q8"], visualStatus: "not-needed" },
  { id: "book-children-t9", bookUnitId: "book-children", pages: [169], label: "Skolskjutsens varningslampor", questionIds: ["book-children-q9"], visualStatus: "not-needed" },
  { id: "book-children-t10", bookUnitId: "book-children", pages: [170], label: "Vilka utgör en skolpatrull", questionIds: ["book-children-q10"], visualStatus: "not-needed" },
  { id: "book-children-t11", bookUnitId: "book-children", pages: [170], label: "Skolpatrullens huvuduppgifter", questionIds: ["book-children-q11"], visualStatus: "not-needed" },
  { id: "book-children-t12", bookUnitId: "book-children", pages: [170], label: "Skolpatrullen saknar befogenhet att stoppa trafiken", questionIds: ["book-children-q12"], visualStatus: "not-needed" }
];

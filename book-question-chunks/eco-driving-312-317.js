// PDF 312-314. Reviewed source text, including the worked "Testa dina
// kunskaper" example on 315-316, which reuses and extends the
// motorbromsning concept from page 313 (see book-eco-driving-t7, extended
// here). PDF 317 is the next unit's title page ("Drivmedel" / book-fuels),
// no content.
export const ECO_DRIVING_312_317_QUESTIONS = [
  {
    "id": "book-eco-driving-q1",
    "topic": "environment",
    "kind": "Säkerhetsråd",
    "source": "book",
    "chapterId": "environment",
    "bookUnitId": "book-eco-driving",
    "bookPages": [312],
    "coverageIds": ["book-eco-driving-t1"],
    "title": "Undvik 1:ans växel",
    "situation": "1:an gör bilen väldigt stark i starten. Varför bör du ändå växla upp så snart du kan?",
    "options": [
      "1:an har baksidan att mycket bränsle förbrukas; normalt räcker det att köra några få meter på 1:an innan du växlar upp.",
      "1:an sliter extremt mycket på kopplingen, oavsett hur kort tid den används.",
      "Det är förbjudet att köra längre sträckor på 1:ans växel."
    ],
    "correct": 0,
    "hint": "1:ans styrka har ett bränslemässigt pris.",
    "explanation": "I starten är 1:an en lämplig växel. 1:an gör bilen väldigt stark, vilket dock har baksidan att mycket bränsle förbrukas. Därför är det bäst att växla upp så snart du kan efter start. Normalt räcker några få meter.",
    "takeaway": "Växla upp från 1:an efter bara några meter för att undvika onödig bränsleförbrukning."
  },
  {
    "id": "book-eco-driving-q2",
    "topic": "environment",
    "kind": "Säkerhetsråd",
    "source": "book",
    "chapterId": "environment",
    "bookUnitId": "book-eco-driving",
    "bookPages": [312],
    "coverageIds": ["book-eco-driving-t2"],
    "title": "Köra på höga växlar",
    "situation": "Vad menas med en hög växel, och klarar de flesta moderna bilar att köras på 5:an i 50 km/h?",
    "options": [
      "Hög växel betyder högt nummer (5:an = hög, 1:an = låg); de flesta moderna bilar klarar att köras på 5:an i 50 km/h.",
      "Hög växel betyder lågt nummer (1:an = hög, 5:an = låg); de flesta moderna bilar klarar inte detta alls.",
      "Begreppet hög växel syftar bara på motorns varvtal, inte på vilken växel som är ilagd."
    ],
    "correct": 0,
    "hint": "Siffran på växeln avgör om den räknas som hög eller låg.",
    "explanation": "Med hög växel menas högt nummer (5:an = hög, 1:an = låg). De flesta moderna bilar klarar att köras på 5:an i 50 km/h. Märker du att bilen blir mycket slö eller börjar hacka, ska du dock välja en lägre växel.",
    "takeaway": "Kör på så hög växel som möjligt, men växla ner om bilen blir slö eller hackar."
  },
  {
    "id": "book-eco-driving-q3",
    "topic": "environment",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "environment",
    "bookUnitId": "book-eco-driving",
    "bookPages": [312],
    "coverageIds": ["book-eco-driving-t3"],
    "title": "Veteranbilar och höga växlar",
    "situation": "Vilken risk nämner boken med att köra på för höga växlar om bilen är en veteranbil med förgasare?",
    "options": [
      "Veteranbilar med förgasare i stället för bränsleinsprutning kan sota igen om du kör på för höga växlar.",
      "Veteranbilar med förgasare drar alltid mindre bränsle på höga växlar, utan några nackdelar.",
      "Risken gäller bara veteranbilar med bränsleinsprutning, inte de med förgasare."
    ],
    "correct": 0,
    "hint": "Äldre bränslesystem fungerar annorlunda än moderna bränsleinsprutningssystem.",
    "explanation": "Notera att veteranbilar som har förgasare i stället för bränsleinsprutning kan sota igen om du kör på för höga växlar.",
    "takeaway": "Sparsam körning med höga växlar gäller inte reservationslöst för äldre förgasarbilar."
  },
  {
    "id": "book-eco-driving-q4",
    "topic": "environment",
    "kind": "Säkerhetsråd",
    "source": "book",
    "chapterId": "environment",
    "bookUnitId": "book-eco-driving",
    "bookPages": [312],
    "coverageIds": ["book-eco-driving-t4"],
    "title": "Att accelerera ganska snabbt",
    "situation": "Är det mer eller mindre bränslekrävande att komma upp i önskad hastighet snabbt, jämfört med att dra ut på accelerationsfasen, och vilket varvtal bör du hålla dig under?",
    "options": [
      "Det är bäst att snabbt komma upp i önskad hastighet, eftersom en bil som kör konstant förbrukar mindre bränsle än en bil som accelererar länge; håll motorn under 2500 varv/minut.",
      "Det är alltid bäst att accelerera så långsamt som möjligt, oavsett varvtal.",
      "Accelerationens längd har ingen betydelse för bränsleförbrukningen."
    ],
    "correct": 0,
    "hint": "En lång accelerationsfas innebär längre tid med hög bränsleförbrukning.",
    "explanation": "En bil som kör konstant i samma hastighet förbrukar mindre bränsle än en bil som accelererar. Därför är det bäst att snabbt komma upp i hastigheten du vill ha och inte dra ut på accelerationsfasen. Tänk dock på att hålla motorn under 2500 varv/minut (RPM).",
    "takeaway": "Kom snabbt upp i önskad fart (under 2500 varv/minut) i stället för att dra ut på accelerationen."
  },
  {
    "id": "book-eco-driving-q5",
    "topic": "environment",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "environment",
    "bookUnitId": "book-eco-driving",
    "bookPages": [313],
    "coverageIds": ["book-eco-driving-t5"],
    "title": "Undvik kopplingen",
    "situation": "Varför bör du bara trycka ner kopplingen när du måste, det vill säga i samband med växling?",
    "options": [
      "Motorn förbrukar bränsle när kopplingen är nertryckt.",
      "Kopplingen slits ut permanent efter bara några sekunders nedtryckning.",
      "Det är enbart en komfortfråga utan koppling till bränsleförbrukningen."
    ],
    "correct": 0,
    "hint": "Kopplingen bör bara användas i det ögonblick en växling faktiskt sker.",
    "explanation": "Tryck bara ner kopplingen när du måste, det vill säga i samband med växling. Detta eftersom motorn förbrukar bränsle när kopplingen är nertryckt.",
    "takeaway": "En nertryckt koppling ökar bränsleförbrukningen — håll den uppe utom vid faktisk växling."
  },
  {
    "id": "book-eco-driving-q6",
    "topic": "environment",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "environment",
    "bookUnitId": "book-eco-driving",
    "bookPages": [313],
    "coverageIds": ["book-eco-driving-t6"],
    "title": "Att hoppa över växlar",
    "situation": "Vad innebär det att hoppa över växlar, och vilket exempel ger boken?",
    "options": [
      "Du kommer snabbare upp i fart och undviker kopplingsarbete, till exempel genom att växla direkt från 2:an till 4:an, eller från 3:an till 5:an.",
      "Du kör utan att någonsin lägga i en mellanväxel, från 1:an direkt till 5:an.",
      "Du undviker att använda högre växlar än 3:an för att spara bränsle."
    ],
    "correct": 0,
    "hint": "Du hoppar över exakt en växel i taget, inte alla mellanliggande.",
    "explanation": "Hoppa över växlar: du kommer snabbare upp i fart och undviker kopplingsarbete. Exempel på växelhopp: 2:an ⇒ 4:an, 3:an ⇒ 5:an.",
    "takeaway": "Att hoppa en växel i taget (till exempel 2:an till 4:an) sparar tid och kopplingsarbete."
  },
  {
    "id": "book-eco-driving-q7",
    "topic": "environment",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "environment",
    "bookUnitId": "book-eco-driving",
    "bookPages": [313, 315, 316],
    "coverageIds": ["book-eco-driving-t7"],
    "title": "Motorbromsning och bränsleförbrukning",
    "situation": "Vilket påstående är sant angående motorbromsning, och exakt hur fungerar varvtalsgränserna?",
    "options": [
      "Bränsleförbrukningen minskar — släpper du gasen helt när motorvarvtalet ligger över 1500–1600 varv per minut tillförs inget bränsle alls; växla ner strax innan varvtalet sjunker till 1200–1300 varv för att behålla nollförbrukningen.",
      "Bränsleförbrukningen ökar, eftersom motorn måste arbeta hårdare för att bromsa bilen.",
      "Motorbromsning påverkar inte bränsleförbrukningen alls, bara bromsarnas slitage."
    ],
    "correct": 0,
    "hint": "Poängen är att bränsletillförseln kan stängas av helt under rätt varvtalsintervall.",
    "explanation": "Trafikverket: ”Poängen med att motorbromsa är att du kan stänga av bränsletillförseln helt medan du sänker hastigheten. […] Om du släpper gasen helt när motorvarvtalet ligger över 1500–1600 varv per minut tillförs inte längre något bränsle alls till motorn. När varvtalet sedan sjunkit till 1200–1300 varv per minut börjar motorn förbruka bränsle igen. Växla därför ner strax innan du når 1200–1300 varv för att behålla nollförbrukningen.” En bil som motorbromsar förbrukar inget bränsle — själva bromsverkan kommer från friktionen inne i motorn.",
    "takeaway": "Motorbromsning ovanför cirka 1500 varv/minut ger nollförbrukning — växla ner strax innan 1200–1300 varv för att behålla den."
  },
  {
    "id": "book-eco-driving-q8",
    "topic": "environment",
    "kind": "Säkerhetsprincip",
    "source": "book",
    "chapterId": "environment",
    "bookUnitId": "book-eco-driving",
    "bookPages": [313],
    "coverageIds": ["book-eco-driving-t8"],
    "title": "Det minst bränslekrävande körsättet",
    "situation": "Vad är det minst bränslekrävande sättet att köra, och vad innebär varje inbromsning?",
    "options": [
      "Att glida fram i konstant fart; varje inbromsning innebär att du slösar den energi som har byggts upp i din fart.",
      "Att växla mellan hög och låg hastighet så ofta som möjligt.",
      "Att alltid hålla maximal tillåten hastighet, oavsett trafiksituation."
    ],
    "correct": 0,
    "hint": "Farten representerar uppbyggd energi som går förlorad vid inbromsning.",
    "explanation": "Det minst bränslekrävande är att glida fram i konstant fart. Varje inbromsning innebär att du slösar den energi som har byggts upp i din fart.",
    "takeaway": "Konstant fart är mest bränslesnålt — varje onödig inbromsning slösar uppbyggd energi."
  },
  {
    "id": "book-eco-driving-q9",
    "topic": "environment",
    "kind": "Säkerhetsråd",
    "source": "book",
    "chapterId": "environment",
    "bookUnitId": "book-eco-driving",
    "bookPages": [313],
    "coverageIds": ["book-eco-driving-t9"],
    "title": "Att närma sig ett rödljus sparsamt",
    "situation": "Du ser ett rödljus framför dig. Vad är det sämsta du kan göra ur bränslesynpunkt, och vad kan du göra i stället?",
    "options": [
      "Det sämsta är att köra fram fort, bromsa till stillastående precis innan rödljuset och sedan accelerera upp till ursprunglig hastighet; bättre är att motorbromsa och sakta glida fram utan att stanna, i hopp om att ljuset slår om till grönt.",
      "Det sämsta är att motorbromsa i god tid, eftersom det sliter extra mycket på motorn.",
      "Det spelar ingen roll hur du närmar dig ett rödljus ur bränslesynpunkt."
    ],
    "correct": 0,
    "hint": "Att helt stanna och sedan accelerera från noll kräver mest energi.",
    "explanation": "När du ser ett rödljus framför dig kan du motorbromsa och sakta glida fram (utan att stanna) och hoppas på att det ska slå om till grönt. Det sämsta du kan göra är att köra fram fort, bromsa till stillastående precis innan rödljuset och sedan accelerera från stillastående upp till den ursprungliga hastigheten.",
    "takeaway": "Glid sakta fram mot ett rödljus i stället för att bromsa helt och sedan accelerera från stillastående."
  },
  {
    "id": "book-eco-driving-q10",
    "topic": "environment",
    "kind": "Säkerhetsprincip",
    "source": "book",
    "chapterId": "environment",
    "bookUnitId": "book-eco-driving",
    "bookPages": [314],
    "coverageIds": ["book-eco-driving-t10"],
    "title": "Trafiksäkerhet går före sparsam körning",
    "situation": "Du måste bromsa in kraftigt för att inte köra på en fotgängare. Ska du tänka på att göra detta miljövänligt genom att motorbromsa?",
    "options": [
      "Nej, trafiksäkerheten har alltid högre prioritet än sparsam körning — trampa bara på bromspedalen.",
      "Ja, motorbromsning är alltid att föredra, även i en nödsituation.",
      "Ja, men bara om hastigheten är under 30 km/h."
    ],
    "correct": 0,
    "hint": "I en nödsituation finns ingen tid eller anledning att tänka på bränsleförbrukning.",
    "explanation": "Trafiksäkerheten har alltid högre prioritet än sparsam körning. Om du till exempel måste bromsa in kraftigt för att inte köra på en fotgängare, ska du inte börja tänka på att göra det miljövänligt genom att motorbromsa — trampa bara på bromspedalen.",
    "takeaway": "I en nödsituation gäller full inbromsning direkt — sparsam körning kommer alltid i andra hand."
  },
  {
    "id": "book-eco-driving-q11",
    "topic": "environment",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "environment",
    "bookUnitId": "book-eco-driving",
    "bookPages": [314],
    "coverageIds": ["book-eco-driving-t11"],
    "title": "Sparsam körning på uppkörningen",
    "situation": "Hur viktigt är det med sparsam körning på uppkörningen, enligt boken?",
    "options": [
      "Det viktigaste är att du kör miljövänligt när det är lämpligt.",
      "Sparsam körning bedöms inte alls på uppkörningen.",
      "Sparsam körning är viktigare än trafiksäkerhet även på uppkörningen."
    ],
    "correct": 0,
    "hint": "Lämpligheten avgör, inte ett absolut krav i varje situation.",
    "explanation": "Hur viktigt är det med sparsam körning på uppkörningen? Det viktigaste är att du kör miljövänligt när det är lämpligt.",
    "takeaway": "På uppkörningen räcker det att visa miljövänlig körning när situationen faktiskt tillåter det."
  }
];

export const ECO_DRIVING_312_317_COVERAGE = [
  { id: "book-eco-driving-t1", bookUnitId: "book-eco-driving", pages: [312], label: "Undvik 1:ans växel efter start", questionIds: ["book-eco-driving-q1"], visualStatus: "not-needed" },
  { id: "book-eco-driving-t2", bookUnitId: "book-eco-driving", pages: [312], label: "Köra på så höga växlar som möjligt", questionIds: ["book-eco-driving-q2"], visualStatus: "not-needed" },
  { id: "book-eco-driving-t3", bookUnitId: "book-eco-driving", pages: [312], label: "Veteranbilar med förgasare och höga växlar", questionIds: ["book-eco-driving-q3"], visualStatus: "not-needed" },
  { id: "book-eco-driving-t4", bookUnitId: "book-eco-driving", pages: [312], label: "Accelerera snabbt upp till 2500 varv/minut", questionIds: ["book-eco-driving-q4"], visualStatus: "reviewed" },
  { id: "book-eco-driving-t5", bookUnitId: "book-eco-driving", pages: [313], label: "Undvik onödig kopplingsnedtryckning", questionIds: ["book-eco-driving-q5"], visualStatus: "not-needed" },
  { id: "book-eco-driving-t6", bookUnitId: "book-eco-driving", pages: [313], label: "Hoppa över växlar", questionIds: ["book-eco-driving-q6"], visualStatus: "not-needed" },
  { id: "book-eco-driving-t7", bookUnitId: "book-eco-driving", pages: [313, 315, 316], label: "Motorbromsningens varvtalsgränser", questionIds: ["book-eco-driving-q7"], visualStatus: "not-needed" },
  { id: "book-eco-driving-t8", bookUnitId: "book-eco-driving", pages: [313], label: "Konstant fart minst bränslekrävande", questionIds: ["book-eco-driving-q8"], visualStatus: "not-needed" },
  { id: "book-eco-driving-t9", bookUnitId: "book-eco-driving", pages: [313], label: "Glida mot rödljus i stället för att stanna", questionIds: ["book-eco-driving-q9"], visualStatus: "not-needed" },
  { id: "book-eco-driving-t10", bookUnitId: "book-eco-driving", pages: [314], label: "Trafiksäkerhet går alltid före sparsam körning", questionIds: ["book-eco-driving-q10"], visualStatus: "not-needed" },
  { id: "book-eco-driving-t11", bookUnitId: "book-eco-driving", pages: [314], label: "Sparsam körning på uppkörningen", questionIds: ["book-eco-driving-q11"], visualStatus: "not-needed" }
];

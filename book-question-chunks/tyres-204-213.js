// PDF 204-208, 211-212. Reviewed source text and illustrations, including
// the dubbdäck-på-släpvagn diagrams on 208 and the worked "Testa dina
// kunskaper" example on 211-212, which reuses that same concept (see
// book-tyres-t20, extended here). PDF 209-210 are blank and PDF 213 is the
// next unit's title page ("Styrning" / book-steering), no content.
export const TYRES_204_213_QUESTIONS = [
  {
    "id": "book-tyres-q1",
    "topic": "safety",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "grip",
    "bookUnitId": "book-tyres",
    "bookPages": [204],
    "coverageIds": ["book-tyres-t1"],
    "title": "Dubbdäck",
    "situation": "Vilken typ av vinterdäck är bäst på isigt underlag, och vilka bilar bör särskilt ha den typen?",
    "options": [
      "Dubbdäck; äldre bilar utan antisladdsystem bör ha dubbdäck.",
      "Friktionsdäck; äldre bilar utan antisladdsystem bör ha friktionsdäck.",
      "Sommardäck; alla bilar oavsett ålder klarar sig bäst med sommardäck på is."
    ],
    "correct": 0,
    "hint": "Jämför med friktionsdäck, som är lika bra förutom just på is.",
    "explanation": "Dubbdäck är bäst på isigt underlag, men sliter hårt på vägarna. Äldre bilar utan antisladdsystem bör ha dubbdäck.",
    "takeaway": "Dubbdäck har bäst isgrepp, vilket gör dem extra lämpliga för äldre bilar utan antisladdsystem."
  },
  {
    "id": "book-tyres-q2",
    "topic": "safety",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "grip",
    "bookUnitId": "book-tyres",
    "bookPages": [204],
    "coverageIds": ["book-tyres-t2"],
    "title": "Friktionsdäck",
    "situation": "Hur presterar friktionsdäck jämfört med dubbdäck, och när passar de bäst?",
    "options": [
      "Lika bra som dubbdäck, förutom på is; de rullar tystare och sliter mindre. Passar bra om bilen har antisladdsystem och du ofta upplever milda vintrar.",
      "Bättre än dubbdäck i alla väglag, inklusive is.",
      "Sämre än dubbdäck i alla väglag utom på torr asfalt."
    ],
    "correct": 0,
    "hint": "Friktionsdäckens enda tydliga nackdel gäller just is.",
    "explanation": "Friktionsdäck är lika bra som dubbdäck, förutom på is. Friktionsdäck rullar tystare och sliter mindre på vägarna. Välj friktionsdäck om du har en bil med antisladdsystem och ofta upplever milda vintrar där du bor.",
    "takeaway": "Friktionsdäck matchar dubbdäck i det mesta men förlorar mot dem på ren is."
  },
  {
    "id": "book-tyres-q3",
    "topic": "safety",
    "kind": "Säkerhetsprincip",
    "source": "book",
    "chapterId": "grip",
    "bookUnitId": "book-tyres",
    "bookPages": [204],
    "coverageIds": ["book-tyres-t3"],
    "title": "Friktionsdäck på sommaren",
    "situation": "Varför kan det vara farligt att köra med friktionsdäck på sommaren?",
    "options": [
      "Gummit i däcken blir för mjukt, vilket kan orsaka farliga situationer.",
      "Friktionsdäck spricker alltid vid temperaturer över 20°C.",
      "Det är inte farligt alls, bara olagligt."
    ],
    "correct": 0,
    "hint": "Mönstret och gummiblandningen skiljer sig mellan sommar- och vinterdäck.",
    "explanation": "Mönstret och gummiblandningen skiljer sig mellan sommardäck och vinterdäck. Att köra med friktionsdäck på sommaren kan orsaka farliga situationer, eftersom gummit i däcken blir för mjukt.",
    "takeaway": "Vinterdäckens gummi är inte gjort för sommarvärme — det blir farligt mjukt."
  },
  {
    "id": "book-tyres-q4",
    "topic": "safety",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "grip",
    "bookUnitId": "book-tyres",
    "bookPages": [204],
    "coverageIds": ["book-tyres-t4"],
    "title": "\"Året runt-däck\"",
    "situation": "Är så kallade \"året runt-däck\" lämpliga att använda i Sverige?",
    "options": [
      "Nej, de är inte lämpliga, med tanke på de stora skillnaderna mellan sommar och vinter.",
      "Ja, de är lagligen den enda rekommenderade däcktypen i Sverige.",
      "Ja, men bara i Sveriges södra delar."
    ],
    "correct": 0,
    "hint": "Sverige har stora säsongsskillnader i väglag.",
    "explanation": "Det finns däck som marknadsförs som året runt-däck. Dessa är ej lämpliga att använda i Sverige med tanke på de stora skillnaderna mellan sommar och vinter.",
    "takeaway": "Året runt-däck passar dåligt för Sveriges stora säsongsskillnader."
  },
  {
    "id": "book-tyres-q5",
    "topic": "safety",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "grip",
    "bookUnitId": "book-tyres",
    "bookPages": [204],
    "coverageIds": ["book-tyres-t5"],
    "title": "Minsta tillåtna mönsterdjup",
    "situation": "Vilket minsta mönsterdjup krävs på sommardäck respektive vinterdäck?",
    "options": [
      "1,6 mm på sommardäck, 3 mm på vinterdäck.",
      "3 mm på sommardäck, 1,6 mm på vinterdäck.",
      "Samma gräns, 3 mm, gäller för både sommar- och vinterdäck."
    ],
    "correct": 0,
    "hint": "Vinterdäck kräver ett djupare mönster än sommardäck.",
    "explanation": "Minsta tillåtna mönsterdjup är 1,6 mm på sommardäck och 3 mm på vinterdäck. Nya däck har 8–9 mm mönsterdjup, och våtgreppet blir sämre redan vid 3–4 mm.",
    "takeaway": "Vinterdäck kräver dubbelt så djupt mönster (3 mm) som sommardäck (1,6 mm)."
  },
  {
    "id": "book-tyres-q6",
    "topic": "rules",
    "kind": "Trafikregel",
    "source": "book",
    "chapterId": "grip",
    "bookUnitId": "book-tyres",
    "bookPages": [205],
    "coverageIds": ["book-tyres-t6"],
    "title": "Lagen om vinterdäck",
    "situation": "Under vilken period gäller lagen om vinterdäck vid vinterväglag?",
    "options": [
      "1 december–31 mars.",
      "1 november–31 mars.",
      "1 december–28 februari."
    ],
    "correct": 0,
    "hint": "Perioden täcker vintern men inte hela hösten.",
    "explanation": "Lag på vinterdäck vid vinterväglag gäller 1 december–31 mars.",
    "takeaway": "Vinterdäckskravet vid vinterväglag gäller 1 december till 31 mars."
  },
  {
    "id": "book-tyres-q7",
    "topic": "rules",
    "kind": "Trafikregel",
    "source": "book",
    "chapterId": "grip",
    "bookUnitId": "book-tyres",
    "bookPages": [205],
    "coverageIds": ["book-tyres-t7"],
    "title": "Förbudsperioden för dubbdäck",
    "situation": "Under vilken period är det förbjudet att ha dubbdäck, om det inte är eller förväntas vinterväglag?",
    "options": [
      "16 april–30 september.",
      "1 maj–30 september.",
      "16 april–31 oktober."
    ],
    "correct": 0,
    "hint": "Perioden börjar mitt i april.",
    "explanation": "Förbjudet att ha dubbdäck 16 april–30 september om det inte är eller förväntas vinterväglag.",
    "takeaway": "Dubbdäck är förbjudna 16 april–30 september, såvida inte vinterväglag råder eller väntas."
  },
  {
    "id": "book-tyres-q8",
    "topic": "rules",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "grip",
    "bookUnitId": "book-tyres",
    "bookPages": [205],
    "coverageIds": ["book-tyres-t8"],
    "title": "Vad vinterväglag är",
    "situation": "Vad räknas som vinterväglag, enligt boken?",
    "options": [
      "Om det finns snö, is, snömodd eller frost på någon del av vägen.",
      "Enbart om temperaturen är under 0°C hela dygnet.",
      "Enbart om hela vägbanan är täckt av snö eller is."
    ],
    "correct": 0,
    "hint": "Det räcker att en del av vägen har ett av de fyra tillstånden.",
    "explanation": "Det är vinterväglag om det finns snö, is, snömodd eller frost på någon del av vägen.",
    "takeaway": "Vinterväglag kräver bara snö, is, snömodd eller frost på en del av vägen, inte hela den."
  },
  {
    "id": "book-tyres-q9",
    "topic": "rules",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "grip",
    "bookUnitId": "book-tyres",
    "bookPages": [205],
    "coverageIds": ["book-tyres-t9"],
    "title": "Odubbade vinterdäck sommartid",
    "situation": "Det är 1 juli och inget vinterväglag förväntas. Får du köra med odubbade vinterdäck (friktionsdäck)?",
    "options": [
      "Ja, det är endast dubbdäck som är förbjudna under perioden — men vinterdäckets köregenskaper blir sämre vid varmt väder.",
      "Nej, alla vinterdäck, dubbade som odubbade, är förbjudna under sommaren.",
      "Ja, och det påverkar inte däckets köregenskaper alls."
    ],
    "correct": 0,
    "hint": "Förbudet gäller specifikt dubbdäck, inte vinterdäck i allmänhet.",
    "explanation": "Det är 1 juli och inget vinterväglag förväntas. Får jag ha odubbade vinterdäck? Ja, det är endast dubbdäck som är förbjudna. Tänk dock på att vinterdäckets köregenskaper blir sämre vid varmt väder.",
    "takeaway": "Odubbade vinterdäck är tillåtna året runt, men sommarvärme försämrar deras köregenskaper."
  },
  {
    "id": "book-tyres-q10",
    "topic": "rules",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "grip",
    "bookUnitId": "book-tyres",
    "bookPages": [205],
    "coverageIds": ["book-tyres-t10"],
    "title": "Sommardäck i december utan vinterväglag",
    "situation": "Det är 10 december och det är höstväder, inte vinterväglag. Får du köra med sommardäck?",
    "options": [
      "Ja, datumen med krav på vinterdäck gäller endast om det är vinterväglag — men sommardäckets köregenskaper blir sämre vid kallt väder.",
      "Nej, 1 december–31 mars kräver alltid vinterdäck, oavsett väglag.",
      "Ja, och sommardäckets köregenskaper påverkas inte av kyla."
    ],
    "correct": 0,
    "hint": "Datumperioden i lagen är kopplad till väglaget, inte bara kalendern.",
    "explanation": "Det är 10 december och höstväder (ej vinterväglag). Får jag köra med sommardäck? Ja, datumen med krav på vinterdäck gäller endast om det är vinterväglag. Tänk dock på att sommardäckets köregenskaper blir sämre vid kallt väder.",
    "takeaway": "Vinterdäckskravet triggas av faktiskt vinterväglag, inte bara av kalenderdatumet."
  },
  {
    "id": "book-tyres-q11",
    "topic": "safety",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "grip",
    "bookUnitId": "book-tyres",
    "bookPages": [205],
    "coverageIds": ["book-tyres-t11"],
    "title": "Dubbdäck och hälsa",
    "situation": "Varför är det förbjudet att använda dubbdäck 16 april–30 september om det inte är eller förväntas vinterväglag?",
    "options": [
      "Dubbade vinterdäck sliter upp hälsofarliga partiklar från vägarna, vilket är den främsta anledningen till förbudet.",
      "Enbart för att dubbdäck slits ut snabbare i värme och blir en ekonomisk belastning.",
      "Enbart för att dubbdäck låter mer på torr asfalt än på snö."
    ],
    "correct": 0,
    "hint": "Anledningen handlar om luftkvalitet, inte bara om däckens eget slitage.",
    "explanation": "Dubbade vinterdäck sliter upp hälsofarliga partiklar från vägarna. Detta är den främsta anledningen till att det är förbjudet att använda dubbdäck 16 april–30 september om det inte är eller förväntas vinterväglag. På vissa vägsträckor i större städer är luftkvaliteten så dålig att det har införts förbud mot att köra med dubbdäck där (märkt med vägmärke C44), vilket gäller även mitt i vintern.",
    "takeaway": "Dubbdäcksreglerna finns främst för hälsan — partiklarna de river upp är skadliga att andas in."
  },
  {
    "id": "book-tyres-q12",
    "topic": "rules",
    "kind": "Trafikregel",
    "source": "book",
    "chapterId": "grip",
    "bookUnitId": "book-tyres",
    "bookPages": [206],
    "coverageIds": ["book-tyres-t12"],
    "title": "Att blanda däcktyper",
    "situation": "Får du blanda sommardäck och vinterdäck på samma bil, eller dubbade och odubbade vinterdäck?",
    "options": [
      "Nej, det är förbjudet, med undantag för att tillfälligt använda ett sommarreservdäck vid punktering på en bil med vinterdäck, tills vinterdäcket hunnit lagas.",
      "Ja, det är alltid tillåtet att blanda fritt mellan alla däcktyper.",
      "Nej, förbudet gäller bara att blanda sommar- och vinterdäck, inte dubbat med odubbat."
    ],
    "correct": 0,
    "hint": "Det finns ett specifikt undantag kopplat till en akut situation.",
    "explanation": "Förbjudet att blanda sommardäck och vinterdäck. Det är inte heller tillåtet att blanda dubbade vinterdäck och odubbade vinterdäck. Undantag: om du får punktering med en bil som har vinterdäck, får du använda ett sommarreservdäck tills vinterdäcket hunnit lagas.",
    "takeaway": "Blandade däcktyper är förbjudna, utom som en tillfällig nödlösning vid punktering."
  },
  {
    "id": "book-tyres-q13",
    "topic": "safety",
    "kind": "Säkerhetsråd",
    "source": "book",
    "chapterId": "grip",
    "bookUnitId": "book-tyres",
    "bookPages": [206],
    "coverageIds": ["book-tyres-t13"],
    "title": "Att byta bara ett däck",
    "situation": "Ett av dina fyra däck är utslitet. Räcker det att bara byta det däcket?",
    "options": [
      "Nej, att bara ersätta ett däck försämrar bilens köregenskaper — byt i stället båda däcken på samma axel, och helst alla fyra samtidigt.",
      "Ja, det är alltid tillräckligt att bara byta det slitna däcket.",
      "Nej, du måste alltid byta de två framdäcken, oavsett vilket däck som slitits."
    ],
    "correct": 0,
    "hint": "Olika grepp på samma axel kan göra bilen svårare att hantera.",
    "explanation": "Att bara ersätta ett däck försämrar bilens köregenskaper, byt därför båda på samma axel. Bäst är att byta alla däck samtidigt.",
    "takeaway": "Byt däck parvis per axel, och helst alla fyra samtidigt, för jämna köregenskaper."
  },
  {
    "id": "book-tyres-q14",
    "topic": "safety",
    "kind": "Säkerhetsråd",
    "source": "book",
    "chapterId": "grip",
    "bookUnitId": "book-tyres",
    "bookPages": [206],
    "coverageIds": ["book-tyres-t14"],
    "title": "Efterspänning av hjulbultar",
    "situation": "Du har precis bytt däck på bilen. Vad bör du göra efter några mils körning?",
    "options": [
      "Efterspänna hjulbultarna, för att minimera risken för att de lossnar.",
      "Sänka lufttrycket något för bättre grepp.",
      "Växla plats på samtliga fyra däck igen."
    ],
    "correct": 0,
    "hint": "Bultarna kan sätta sig något efter den första körningen på nymonterade hjul.",
    "explanation": "Vid byte av däck bör du efterspänna hjulbultarna efter några mils körning för att minimera risken för att de lossnar.",
    "takeaway": "Efterspänn hjulbultarna efter en kort körsträcka efter varje däckbyte."
  },
  {
    "id": "book-tyres-q15",
    "topic": "safety",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "grip",
    "bookUnitId": "book-tyres",
    "bookPages": [206],
    "coverageIds": ["book-tyres-t15"],
    "title": "Snökedjor som alternativ",
    "situation": "Finns det ett tillåtet alternativ till vinterdäck på sommardäck?",
    "options": [
      "Ja, sommardäck med snökedjor får användas som alternativ till vinterdäck.",
      "Nej, det finns inget tillåtet alternativ till riktiga vinterdäck.",
      "Ja, men bara i kombination med dubbdäck på de andra tre hjulen."
    ],
    "correct": 0,
    "hint": "Kedjorna monteras på sommardäcken själva.",
    "explanation": "Sommardäck med snökedjor får användas som alternativ till vinterdäck.",
    "takeaway": "Snökedjor på sommardäck är ett tillåtet alternativ till vinterdäck."
  },
  {
    "id": "book-tyres-q16",
    "topic": "safety",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "grip",
    "bookUnitId": "book-tyres",
    "bookPages": [206],
    "coverageIds": ["book-tyres-t16"],
    "title": "Friktion",
    "situation": "Vad är friktion, och vilket av följande exempel har boken på hög respektive låg friktion?",
    "options": [
      "Motståndet mellan två objekt som rör sig mot varandra; skridskor på is är lågt, suddgummi mot papper är högt.",
      "Motståndet mellan två objekt som rör sig mot varandra; skridskor på is är högt, suddgummi mot papper är lågt.",
      "Ett mått på hur blankt ett däck är, oberoende av underlaget."
    ],
    "correct": 0,
    "hint": "Tänk på hur lätt respektive svårt det är att glida i vart och ett av exemplen.",
    "explanation": "Friktion är motståndet mellan två objekt som rör sig mot varandra. Skridskor på is = låg friktion. Suddgummi mot papper = hög friktion. Friktionen mellan däcken och vägen ska vara hög för bästa grepp.",
    "takeaway": "Hög friktion mellan däck och väg ger bäst grepp, precis som suddgummi mot papper."
  },
  {
    "id": "book-tyres-q17",
    "topic": "safety",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "grip",
    "bookUnitId": "book-tyres",
    "bookPages": [206],
    "coverageIds": ["book-tyres-t17"],
    "title": "Slitagevarnare",
    "situation": "Vad är en slitagevarnare, och vad betyder det när mönstret är i nivå med den?",
    "options": [
      "Små gummiklumpar nere i skårorna på däcket; när mönstret är i nivå med dem bör däcket bytas snarast.",
      "En lampa på instrumentpanelen som tänds när lufttrycket är för lågt.",
      "En etikett på nya däck som bara anger tillverkningsdatum."
    ],
    "correct": 0,
    "hint": "Den sitter fysiskt i däckets mönster, inte på instrumentpanelen.",
    "explanation": "Slitagevarnare är små gummiklumpar som sitter nere i skårorna på däcken. När mönstret på däcket har slitits ner så mycket att de är i nivå med slitagevarnarna bör däcket bytas snarast.",
    "takeaway": "När mönstret blir jämnt med slitagevarnaren är det dags att byta däck."
  },
  {
    "id": "book-tyres-q18",
    "topic": "safety",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "grip",
    "bookUnitId": "book-tyres",
    "bookPages": [207],
    "coverageIds": ["book-tyres-t18"],
    "title": "Felaktig hjulinställning",
    "situation": "Du håller ratten löst på en rak väg, och bilen drar snett. Vad kan orsaka detta, och vad är en annan konsekvens?",
    "options": [
      "Felaktig hjulinställning, vilket också leder till att däcken slits ojämnt. Kan orsakas av att hjulet stött emot något.",
      "Felaktig balansering, vilket alltid orsakar att ratten skakar kraftigt.",
      "Lågt lufttryck i enbart ett bakdäck, utan andra konsekvenser."
    ],
    "correct": 0,
    "hint": "Jämför med felaktig balansering, som i stället ger en skakande ratt.",
    "explanation": "Felaktig hjulinställning gör att bilen drar snett om du håller ratten löst på en rak väg. Leder till att däcken slits ojämnt. Kan orsakas av att hjulet stött emot något.",
    "takeaway": "En bil som drar snett med löst grepp om ratten kan ha felaktig hjulinställning, ofta efter en smäll mot hjulet."
  },
  {
    "id": "book-tyres-q19",
    "topic": "safety",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "grip",
    "bookUnitId": "book-tyres",
    "bookPages": [207],
    "coverageIds": ["book-tyres-t19"],
    "title": "Reservhjul: vanligt jämfört med nödhjul",
    "situation": "Vad är skillnaden mellan ett vanligt reservhjul och ett nödhjul?",
    "options": [
      "Ett vanligt reservhjul är likadant som bilens övriga däck och kan användas som ett vanligt däck; ett nödhjul är smalare och bara lämpligt för att köra till en verkstad, med begränsningar i instruktionsboken.",
      "Ett nödhjul är alltid större än bilens övriga däck, för extra säkerhet.",
      "Det finns ingen skillnad, båda typerna är avsedda för obegränsad användning."
    ],
    "correct": 0,
    "hint": "Det smalare alternativet är tänkt för en kort, försiktig körning.",
    "explanation": "Vanligt reservhjul har ett likadant däck som bilen normalt har; du får köra med det som ett vanligt däck, men det är oftast bäst att reparera det gamla däcket och sätta tillbaka det, eftersom ett helt nytt däck på en sida kan försämra bilens köregenskaper. Nödhjul är smalare och endast lämpligt för att köra bilen till en verkstad; instruktionsboken innehåller bestämmelser om högsta hastighet, maximal körsträcka och lufttryck för nödhjulet.",
    "takeaway": "Ett nödhjul är en tillfällig nödlösning med egna begränsningar, till skillnad från ett vanligt reservhjul."
  },
  {
    "id": "book-tyres-q20",
    "topic": "rules",
    "kind": "Trafikregel",
    "source": "book",
    "chapterId": "grip",
    "bookUnitId": "book-tyres",
    "bookPages": [208, 211, 212],
    "coverageIds": ["book-tyres-t20"],
    "title": "Dubbdäck på släpvagn",
    "situation": "Din bil har dubbdäck och du kopplar en släpvagn till den vid vinterväglag. Måste släpvagnen också ha dubbdäck?",
    "options": [
      "Ja, har bilen dubbdäck måste också släpvagnen ha dubbdäck vid vinterväglag.",
      "Nej, det krävs aldrig dubbdäck på en släpvagn, oavsett bilens däck.",
      "Ja, men bara om släpvagnen är bromsad."
    ],
    "correct": 0,
    "hint": "Kravet gäller oavsett om släpvagnen har bromsar eller inte.",
    "explanation": "Om bilen har dubbdäck måste också en släpvagn som är kopplad till bilen ha dubbdäck vid vinterväglag (Transportstyrelsen). Har släpvagnen dubbdäck behöver dock inte bilen ha det.",
    "takeaway": "Dubbdäckskravet går bara i en riktning: om bilen har dubbdäck, måste släpet också ha det."
  },
  {
    "id": "book-tyres-q21",
    "topic": "safety",
    "kind": "Säkerhetsprincip",
    "source": "book",
    "chapterId": "grip",
    "bookUnitId": "book-tyres",
    "bookPages": [208],
    "coverageIds": ["book-tyres-t21"],
    "title": "Fällknivsverkan",
    "situation": "Varför är det farligt om bilen har dubbdäck men släpvagnen inte har det?",
    "options": [
      "Bilen får bättre grepp än släpet vid inbromsning, vilket kan göra att släpet glider okontrollerat åt sidan (fällknivsverkan).",
      "Det ökar bara det totala bränsleförbrukningen, utan någon säkerhetsrisk.",
      "Det är bara ett problem om släpvagnen är tyngre än bilen."
    ],
    "correct": 0,
    "hint": "Namnet på fenomenet beskriver hur ekipaget viker sig i en vinkel.",
    "explanation": "Detta är för att motverka fällknivsverkan, som innebär att bilen har bättre grepp än släpet vid inbromsning. Resultatet blir att släpet glider okontrollerat åt sidan.",
    "takeaway": "Fällknivsverkan uppstår när bilens grepp är bättre än släpets vid inbromsning, så att släpet viker ut åt sidan."
  }
];

export const TYRES_204_213_COVERAGE = [
  { id: "book-tyres-t1", bookUnitId: "book-tyres", pages: [204], label: "Dubbdäck bäst på is", questionIds: ["book-tyres-q1"], visualStatus: "reviewed" },
  { id: "book-tyres-t2", bookUnitId: "book-tyres", pages: [204], label: "Friktionsdäck jämfört med dubbdäck", questionIds: ["book-tyres-q2"], visualStatus: "not-needed" },
  { id: "book-tyres-t3", bookUnitId: "book-tyres", pages: [204], label: "Friktionsdäck på sommaren är farligt", questionIds: ["book-tyres-q3"], visualStatus: "not-needed" },
  { id: "book-tyres-t4", bookUnitId: "book-tyres", pages: [204], label: "\"Året runt-däck\" olämpliga i Sverige", questionIds: ["book-tyres-q4"], visualStatus: "not-needed" },
  { id: "book-tyres-t5", bookUnitId: "book-tyres", pages: [204], label: "Minsta mönsterdjup: 1,6 mm sommar, 3 mm vinter", questionIds: ["book-tyres-q5"], visualStatus: "not-needed" },
  { id: "book-tyres-t6", bookUnitId: "book-tyres", pages: [205], label: "Vinterdäckslagen 1 dec–31 mars", questionIds: ["book-tyres-q6"], visualStatus: "not-needed" },
  { id: "book-tyres-t7", bookUnitId: "book-tyres", pages: [205], label: "Dubbdäcksförbudet 16 april–30 sept", questionIds: ["book-tyres-q7"], visualStatus: "not-needed" },
  { id: "book-tyres-t8", bookUnitId: "book-tyres", pages: [205], label: "Definition av vinterväglag", questionIds: ["book-tyres-q8"], visualStatus: "not-needed" },
  { id: "book-tyres-t9", bookUnitId: "book-tyres", pages: [205], label: "Odubbade vinterdäck tillåtna på sommaren", questionIds: ["book-tyres-q9"], visualStatus: "not-needed" },
  { id: "book-tyres-t10", bookUnitId: "book-tyres", pages: [205], label: "Sommardäck tillåtna i december utan vinterväglag", questionIds: ["book-tyres-q10"], visualStatus: "not-needed" },
  { id: "book-tyres-t11", bookUnitId: "book-tyres", pages: [205], label: "Dubbdäck och hälsofarliga partiklar", questionIds: ["book-tyres-q11"], visualStatus: "reviewed" },
  { id: "book-tyres-t12", bookUnitId: "book-tyres", pages: [206], label: "Förbud mot att blanda däcktyper", questionIds: ["book-tyres-q12"], visualStatus: "not-needed" },
  { id: "book-tyres-t13", bookUnitId: "book-tyres", pages: [206], label: "Byt däck parvis per axel", questionIds: ["book-tyres-q13"], visualStatus: "not-needed" },
  { id: "book-tyres-t14", bookUnitId: "book-tyres", pages: [206], label: "Efterspänn hjulbultarna efter däckbyte", questionIds: ["book-tyres-q14"], visualStatus: "not-needed" },
  { id: "book-tyres-t15", bookUnitId: "book-tyres", pages: [206], label: "Snökedjor som alternativ till vinterdäck", questionIds: ["book-tyres-q15"], visualStatus: "not-needed" },
  { id: "book-tyres-t16", bookUnitId: "book-tyres", pages: [206], label: "Vad friktion är", questionIds: ["book-tyres-q16"], visualStatus: "not-needed" },
  { id: "book-tyres-t17", bookUnitId: "book-tyres", pages: [206], label: "Slitagevarnare", questionIds: ["book-tyres-q17"], visualStatus: "not-needed" },
  { id: "book-tyres-t18", bookUnitId: "book-tyres", pages: [207], label: "Felaktig hjulinställning", questionIds: ["book-tyres-q18"], visualStatus: "not-needed" },
  { id: "book-tyres-t19", bookUnitId: "book-tyres", pages: [207], label: "Vanligt reservhjul jämfört med nödhjul", questionIds: ["book-tyres-q19"], visualStatus: "reviewed" },
  { id: "book-tyres-t20", bookUnitId: "book-tyres", pages: [208, 211, 212], label: "Dubbdäck på bilen kräver dubbdäck på släpet", questionIds: ["book-tyres-q20"], visualStatus: "reviewed" },
  { id: "book-tyres-t21", bookUnitId: "book-tyres", pages: [208], label: "Fällknivsverkan", questionIds: ["book-tyres-q21"], visualStatus: "reviewed" }
];

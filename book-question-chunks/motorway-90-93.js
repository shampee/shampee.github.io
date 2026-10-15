// PDF 90-93. Original questions authored directly from reviewed source text
// and illustrations (no recovered draft archive exists beyond unit 7).
export const MOTORWAY_90_93_QUESTIONS = [
  {
    "id": "book-motorway-q1",
    "topic": "rules",
    "kind": "Trafikregel",
    "source": "book",
    "chapterId": "roads",
    "bookUnitId": "book-motorway",
    "bookPages": [
      90
    ],
    "coverageIds": [
      "book-motorway-t1"
    ],
    "title": "Motorvägens körbanor",
    "situation": "Du kör in på en väg märkt med vägmärket Motorväg. Vad kännetecknar trafiken i de två riktningarna?",
    "options": [
      "De båda riktningarna är alltid avskilda; möten med mötande trafik förekommer inte.",
      "Riktningarna är avskilda bara på vissa sträckor.",
      "Riktningarna delar samma körbana men med en målad mittlinje."
    ],
    "correct": 0,
    "hint": "Motorvägens grundkonstruktion utesluter möten helt.",
    "explanation": "Trafiken i de båda riktningarna på en motorväg är alltid avskild. Det innebär att möten med mötande trafik inte förekommer.",
    "takeaway": "På motorväg är körriktningarna alltid fysiskt avskilda; inga möten."
  },
  {
    "id": "book-motorway-q2",
    "topic": "rules",
    "kind": "Trafikregel",
    "source": "book",
    "chapterId": "roads",
    "bookUnitId": "book-motorway",
    "bookPages": [
      90
    ],
    "coverageIds": [
      "book-motorway-t2"
    ],
    "title": "Korsande trafik på motorväg",
    "situation": "En vanlig väg korsar motorvägens sträckning. Hur hanteras den korsande trafiken?",
    "options": [
      "Den korsande trafiken leds om på broar eller liknande, utan korsning i samma plan.",
      "Den korsande trafiken har väjningsplikt och korsar motorvägen direkt.",
      "Motorvägstrafiken stannar vid en bevakad korsning."
    ],
    "correct": 0,
    "hint": "Motorvägen saknar helt korsningar i samma plan.",
    "explanation": "På motorväg finns ingen korsande trafik i samma plan. Trafiken leds i stället om på broar och liknande konstruktioner.",
    "takeaway": "Motorvägar har inga korsningar i samma plan; korsande vägar leds om på broar."
  },
  {
    "id": "book-motorway-q3",
    "topic": "rules",
    "kind": "Trafikregel",
    "source": "book",
    "chapterId": "roads",
    "bookUnitId": "book-motorway",
    "bookPages": [
      90
    ],
    "coverageIds": [
      "book-motorway-t3"
    ],
    "title": "Av- och påfartens status",
    "situation": "Du befinner dig på en avfart från motorvägen, inte på själva den genomgående körbanan. Gäller motorvägens regler där?",
    "options": [
      "Nej, avfarten räknas inte som en del av motorvägen.",
      "Ja, både avfarten och påfarten tillhör motorvägen, så samma regler gäller.",
      "Bara påfarten räknas som motorväg; avfarten gör det inte."
    ],
    "correct": 1,
    "hint": "Båda typerna av anslutningsväg omfattas, inte bara en av dem.",
    "explanation": "Både avfarten och påfarten tillhör motorvägen, vilket gör att samma regler gäller även där.",
    "takeaway": "Av- och påfarter räknas som en del av motorvägen; samma regler gäller där."
  },
  {
    "id": "book-motorway-q4",
    "topic": "rules",
    "kind": "Trafikregel",
    "source": "book",
    "chapterId": "roads",
    "bookUnitId": "book-motorway",
    "bookPages": [
      91
    ],
    "coverageIds": [
      "book-motorway-t4"
    ],
    "title": "Accelerationsfält finns",
    "situation": "Du kör in på en motorväg via en påfart med accelerationsfält. Vem har företräde, du eller trafiken på motorvägen?",
    "options": [
      "Trafiken på motorvägen har alltid företräde.",
      "Du i accelerationsfältet har alltid företräde.",
      "Ingen av er har företräde; ömsesidig hänsyn och anpassning gäller."
    ],
    "correct": 2,
    "hint": "Accelerationsfältet bygger på samarbete, inte en ensidig rättighet.",
    "explanation": "Om accelerationsfält finns har varken de i accelerationsfältet eller de på motorvägen företräde. Ömsesidig hänsyn och anpassning gäller.",
    "takeaway": "Med accelerationsfält har ingen part företräde; båda ska anpassa sig till varandra."
  },
  {
    "id": "book-motorway-q5",
    "topic": "rules",
    "kind": "Trafikregel",
    "source": "book",
    "chapterId": "roads",
    "bookUnitId": "book-motorway",
    "bookPages": [
      91
    ],
    "coverageIds": [
      "book-motorway-t5"
    ],
    "title": "Utan accelerationsfält",
    "situation": "Du ska köra in på en motorväg via en påfart som helt saknar accelerationsfält. Vad gäller?",
    "options": [
      "De anslutande fordonen har väjningsplikt mot trafiken på motorvägen.",
      "Trafiken på motorvägen har väjningsplikt mot de anslutande fordonen.",
      "Högerregeln avgör vem som ska köra först."
    ],
    "correct": 0,
    "hint": "Utan ett fält att anpassa sig i krävs en tydlig väjningsplikt.",
    "explanation": "Finns inget accelerationsfält har de anslutande fordonen väjningsplikt mot trafiken på motorvägen.",
    "takeaway": "Utan accelerationsfält har den som ansluter väjningsplikt mot motorvägstrafiken."
  },
  {
    "id": "book-motorway-q6",
    "topic": "safety",
    "kind": "Säkerhetsråd",
    "source": "book",
    "chapterId": "roads",
    "bookUnitId": "book-motorway",
    "bookPages": [
      91
    ],
    "coverageIds": [
      "book-motorway-t6"
    ],
    "title": "Lämna påfarten",
    "situation": "Du har kommit ut på motorvägen via påfarten och vill byta till ett körfält längre bort från kanten. Vad bör du tänka på?",
    "options": [
      "Lämna påfarten så snart du kan och kom ihåg att kolla döda vinkeln.",
      "Stanna kvar i det yttersta körfältet så länge som möjligt innan du byter.",
      "Byta körfält utan att kontrollera döda vinkeln, eftersom backspegeln räcker."
    ],
    "correct": 0,
    "hint": "Både snabbhet och en kontroll du inte ser i speglarna krävs.",
    "explanation": "Lämna påfarten så snart du kan. Kom ihåg att kolla döda vinkeln.",
    "takeaway": "Lämna påfarten snabbt och kontrollera alltid döda vinkeln vid körfältsbytet."
  },
  {
    "id": "book-motorway-q7",
    "topic": "rules",
    "kind": "Trafikregel",
    "source": "book",
    "chapterId": "roads",
    "bookUnitId": "book-motorway",
    "bookPages": [
      91,
      92
    ],
    "coverageIds": [
      "book-motorway-t7"
    ],
    "title": "Stanna på motorväg",
    "situation": "Du kör på en motorväg och ser en plats i vägrenen som ser lämplig ut för ett kort stopp. Får du stanna där?",
    "options": [
      "Ja, om platsen ser säker och lämplig ut.",
      "Nej, det är förbjudet att stanna och parkera på motorväg.",
      "Ja, men bara om du parkerar, inte om du bara stannar."
    ],
    "correct": 1,
    "hint": "Ett lämpligt utseende ändrar inte förbudet.",
    "explanation": "På motorväg är det förbjudet att stanna och parkera. Det gäller även platser som ser lämpliga ut.",
    "takeaway": "Stanna och parkera är förbjudet på motorväg, oavsett hur lämplig platsen verkar."
  },
  {
    "id": "book-motorway-q8",
    "topic": "rules",
    "kind": "Trafikregel",
    "source": "book",
    "chapterId": "roads",
    "bookUnitId": "book-motorway",
    "bookPages": [
      91
    ],
    "coverageIds": [
      "book-motorway-t8"
    ],
    "title": "Vända på motorväg",
    "situation": "Du ser ett hål i mitträcket på motorvägen och överväger att använda det för att vända. Vad gäller?",
    "options": [
      "Det är tillåtet, eftersom hålet finns till för just det ändamålet.",
      "Det är förbjudet att vända; hålen är till för utryckningsfordon och vägarbetare.",
      "Det är tillåtet om ingen annan trafik syns."
    ],
    "correct": 1,
    "hint": "Öppningen har ett annat syfte än vanlig trafiks vändning.",
    "explanation": "Det är förbjudet att vända på motorväg. Hål i mitträckena är till för utryckningsfordon och vägarbetare.",
    "takeaway": "Vändning är förbjuden på motorväg; mitträckets hål är reserverade för utryckning och vägarbete."
  },
  {
    "id": "book-motorway-q9",
    "topic": "rules",
    "kind": "Trafikregel",
    "source": "book",
    "chapterId": "roads",
    "bookUnitId": "book-motorway",
    "bookPages": [
      91
    ],
    "coverageIds": [
      "book-motorway-t9"
    ],
    "title": "Missat en avfart",
    "situation": "Du missade den avfart du tänkt ta på motorvägen. Får du backa för att nå den?",
    "options": [
      "Ja, om du backar långsamt i vägrenen.",
      "Nej, det är förbjudet att backa på motorväg.",
      "Ja, men bara på sträckor utan trafik."
    ],
    "correct": 1,
    "hint": "Lösningen är att fortsätta till nästa avfart, inte att backa.",
    "explanation": "Det är förbjudet att backa på motorväg.",
    "takeaway": "Backning är förbjuden på motorväg; kör i stället vidare till nästa avfart."
  },
  {
    "id": "book-motorway-q10",
    "topic": "rules",
    "kind": "Trafikregel",
    "source": "book",
    "chapterId": "roads",
    "bookUnitId": "book-motorway",
    "bookPages": [
      91
    ],
    "coverageIds": [
      "book-motorway-t10"
    ],
    "title": "Gående, cyklister och mopeder",
    "situation": "Vilka trafikantgrupper är förbjudna på motorväg, enligt vägmärket Förbud mot gångtrafik och den tillhörande regeln?",
    "options": [
      "Bara gående.",
      "Gående, cyklister och mopedförare.",
      "Gående och cyklister, men inte mopedförare."
    ],
    "correct": 1,
    "hint": "Förbudet omfattar tre skilda sätt att färdas.",
    "explanation": "På motorväg är det förbjudet att gå, cykla och köra moped.",
    "takeaway": "Motorvägen är förbjuden mark för gående, cyklister och mopedförare."
  },
  {
    "id": "book-motorway-q11",
    "topic": "rules",
    "kind": "Trafikregel",
    "source": "book",
    "chapterId": "roads",
    "bookUnitId": "book-motorway",
    "bookPages": [
      91
    ],
    "coverageIds": [
      "book-motorway-t11"
    ],
    "title": "Bogsering på motorväg",
    "situation": "Din bil har fått motorstopp på motorvägen. En annan bilist erbjuder sig att bogsera dig till nästa avfart. Är det tillåtet att bogsera på motorvägen?",
    "options": [
      "Ja, om det sker i låg hastighet.",
      "Nej, bogsering är förbjuden på motorväg.",
      "Ja, men bara i det yttersta körfältet."
    ],
    "correct": 1,
    "hint": "Bogsering räknas som ett eget förbud, oavsett hastighet eller körfält.",
    "explanation": "Det är förbjudet att bogsera på motorväg.",
    "takeaway": "Bogsering är förbjuden på motorväg; tillkalla i stället hjälp för bärgning."
  },
  {
    "id": "book-motorway-q12",
    "topic": "rules",
    "kind": "Trafikregel",
    "source": "book",
    "chapterId": "roads",
    "bookUnitId": "book-motorway",
    "bookPages": [
      91
    ],
    "coverageIds": [
      "book-motorway-t12"
    ],
    "title": "Fordon som inte klarar farten",
    "situation": "Ett fordon är konstruerat för att som mest framföras i 35 km/h. Får det köras på motorväg?",
    "options": [
      "Ja, om föraren håller så långt till höger som möjligt.",
      "Nej, fordon som inte är konstruerade för minst 40 km/h är förbjudna på motorväg.",
      "Ja, om det sker utanför högtrafik."
    ],
    "correct": 1,
    "hint": "Gränsen gäller fordonets konstruktion, inte hur det körs.",
    "explanation": "Det är förbjudet att köra fordon som inte är konstruerade för att framföras i minst 40 km/h på motorväg.",
    "takeaway": "Motorväg kräver att fordonet är konstruerat för minst 40 km/h."
  },
  {
    "id": "book-motorway-q13",
    "topic": "rules",
    "kind": "Trafikregel",
    "source": "book",
    "chapterId": "roads",
    "bookUnitId": "book-motorway",
    "bookPages": [
      91
    ],
    "coverageIds": [
      "book-motorway-t13"
    ],
    "title": "EU-moped på motorväg",
    "situation": "En EU-moped är konstruerad för att köra i upp till 45 km/h, det vill säga snabbare än motorvägens 40-kilometersgräns för fordonstypen. Får EU-mopeden ändå köras på motorväg?",
    "options": [
      "Ja, eftersom den klarar mer än 40 km/h.",
      "Nej, EU-moped är uttryckligen förbjuden trots sin hastighet.",
      "Ja, men bara på motortrafikled, inte på motorväg."
    ],
    "correct": 1,
    "hint": "Det finns ett namngivet undantag som går emot hastighetsgränsen.",
    "explanation": "Fordon som inte klarar minst 40 km/h är förbjudna på motorväg, men EU-moped är förbjuden som ett uttryckligt undantag, trots att den får köra i 45 km/h.",
    "takeaway": "EU-moped är förbjuden på motorväg trots att den klarar mer än 40 km/h."
  },
  {
    "id": "book-motorway-q14",
    "topic": "rules",
    "kind": "Trafikregel",
    "source": "book",
    "chapterId": "roads",
    "bookUnitId": "book-motorway",
    "bookPages": [
      91
    ],
    "coverageIds": [
      "book-motorway-t14"
    ],
    "title": "Traktor på motorväg",
    "situation": "En traktor som klarar mer än 40 km/h närmar sig en motorväg. Får den köras där?",
    "options": [
      "Ja, eftersom hastigheten är tillräcklig.",
      "Nej, det är förbjudet att köra traktor på motorväg.",
      "Ja, men bara mellan avfarterna, inte vid på- eller avfart."
    ],
    "correct": 1,
    "hint": "Traktorer är uttryckligen uteslutna, oavsett fart.",
    "explanation": "Det är förbjudet att köra traktor på motorväg.",
    "takeaway": "Traktorer är förbjudna på motorväg, oavsett hastighet."
  },
  {
    "id": "book-motorway-q15",
    "topic": "safety",
    "kind": "Säkerhetsråd",
    "source": "book",
    "chapterId": "roads",
    "bookUnitId": "book-motorway",
    "bookPages": [
      91
    ],
    "coverageIds": [
      "book-motorway-t15"
    ],
    "title": "Fartblindhet vid avfart",
    "situation": "Vilken risk förknippas särskilt med att lämna en motorväg vid en avfart?",
    "options": [
      "Fartblindhet, som gör att den egna hastigheten känns lägre än den är.",
      "Vattenplaning, som bara förekommer vid avfarter.",
      "Att andra fordon alltid saknar väjningsplikt vid avfarten."
    ],
    "correct": 0,
    "hint": "Risken handlar om felbedömd egen hastighet efter motorvägskörning.",
    "explanation": "En av riskerna med motorvägar är fartblindhet vid avfart.",
    "takeaway": "Var medveten om fartblindhet när du lämnar motorvägen vid en avfart."
  },
  {
    "id": "book-motorway-q16",
    "topic": "safety",
    "kind": "Säkerhetsråd",
    "source": "book",
    "chapterId": "roads",
    "bookUnitId": "book-motorway",
    "bookPages": [
      91
    ],
    "coverageIds": [
      "book-motorway-t16"
    ],
    "title": "Seriekrockar på motorväg",
    "situation": "Vilken orsak anges särskilt för seriekrockar på motorväg?",
    "options": [
      "För korta avstånd mellan fordonen.",
      "För låg hastighet i det vänstra körfältet.",
      "Avsaknad av vägbelysning nattetid."
    ],
    "correct": 0,
    "hint": "Kort avstånd ger inte tid att reagera på inbromsningar framför.",
    "explanation": "En risk med motorvägar är seriekrockar på grund av för korta avstånd.",
    "takeaway": "Håll tillräckligt avstånd på motorväg för att undvika seriekrockar."
  },
  {
    "id": "book-motorway-q17",
    "topic": "safety",
    "kind": "Säkerhetsråd",
    "source": "book",
    "chapterId": "roads",
    "bookUnitId": "book-motorway",
    "bookPages": [
      91
    ],
    "coverageIds": [
      "book-motorway-t17"
    ],
    "title": "Enformig körning",
    "situation": "Vilken typ av olycka kan enformigheten i motorvägskörning leda till?",
    "options": [
      "En singelolycka.",
      "En olycka med utryckningsfordon.",
      "En kollision vid en obevakad korsning."
    ],
    "correct": 0,
    "hint": "Enformighet drabbar främst den egna körningen, inte mötande trafik.",
    "explanation": "Enformigheten i körningen kan leda till en singelolycka.",
    "takeaway": "Lång, enformig motorvägskörning ökar risken för singelolyckor."
  },
  {
    "id": "book-motorway-q18",
    "topic": "safety",
    "kind": "Säkerhetsråd",
    "source": "book",
    "chapterId": "roads",
    "bookUnitId": "book-motorway",
    "bookPages": [
      91
    ],
    "coverageIds": [
      "book-motorway-t18"
    ],
    "title": "Vattenplaning och hastighet",
    "situation": "Hur förändras risken för vattenplaning när hastigheten ökar?",
    "options": [
      "Risken minskar, eftersom däcken hinner leda bort vattnet snabbare.",
      "Risken ökar ju högre hastigheten är.",
      "Risken är opåverkad av hastigheten och beror bara på däckens mönster."
    ],
    "correct": 1,
    "hint": "Högre fart ger däcken mindre tid att leda bort vattnet.",
    "explanation": "Risken för vattenplaning ökar ju högre hastigheten är.",
    "takeaway": "Sänk hastigheten vid vått väglag; risken för vattenplaning ökar med farten."
  },
  {
    "id": "book-motorway-q19",
    "topic": "rules",
    "kind": "Trafikregel",
    "source": "book",
    "chapterId": "roads",
    "bookUnitId": "book-motorway",
    "bookPages": [
      93
    ],
    "coverageIds": [
      "book-motorway-t19"
    ],
    "title": "Vad är en motortrafikled?",
    "situation": "Du kör in på en väg skyltad som motortrafikled. Hur beskrivs den här vägtypen?",
    "options": [
      "Som en ren motorväg med extra skyltning.",
      "Som en blandning av motorväg och landsväg.",
      "Som en vanlig landsväg utan särskilda regler."
    ],
    "correct": 1,
    "hint": "Vägtypen lånar drag från två andra vägtyper.",
    "explanation": "Motortrafikled är en blandning av motorväg och landsväg.",
    "takeaway": "En motortrafikled kombinerar egenskaper från motorväg och landsväg."
  },
  {
    "id": "book-motorway-q20",
    "topic": "rules",
    "kind": "Trafikregel",
    "source": "book",
    "chapterId": "roads",
    "bookUnitId": "book-motorway",
    "bookPages": [
      93
    ],
    "coverageIds": [
      "book-motorway-t20"
    ],
    "title": "Möten på motortrafikled",
    "situation": "Till skillnad från en motorväg kan en motortrafikled ha möten med mötande trafik. Vad gäller samtidigt om korsande trafik?",
    "options": [
      "Korsande trafik i samma plan förekommer inte, men möten kan förekomma (ovanligt, oftast med vajerräcke).",
      "Både möten och korsande trafik i samma plan är vanliga.",
      "Varken möten eller korsande trafik förekommer, precis som på motorväg."
    ],
    "correct": 0,
    "hint": "Det som skiljer motortrafikled från motorväg är just möjligheten till möten.",
    "explanation": "På motortrafikled finns ingen korsande trafik, men du kan få möten. Det är ovanligt, och vajerräcke finns oftast.",
    "takeaway": "Motortrafikled saknar korsande trafik men kan undantagsvis ha möten, ofta med vajerräcke."
  },
  {
    "id": "book-motorway-q21",
    "topic": "rules",
    "kind": "Trafikregel",
    "source": "book",
    "chapterId": "roads",
    "bookUnitId": "book-motorway",
    "bookPages": [
      93
    ],
    "coverageIds": [
      "book-motorway-t21"
    ],
    "title": "Regler på motortrafikled",
    "situation": "Vilka regler och förbud gäller på en motortrafikled, jämfört med en motorväg?",
    "options": [
      "Samma regler och förbud som på motorvägar.",
      "Enbart hastighetsgränsen är densamma; övriga regler skiljer sig.",
      "Inga av motorvägens förbud gäller på motortrafikled."
    ],
    "correct": 0,
    "hint": "Motortrafikleden delar motorvägens regelverk, trots att den liknar en landsväg.",
    "explanation": "Samma regler och förbud som på motorvägar gäller på motortrafikled.",
    "takeaway": "Motortrafikledens regler och förbud är desamma som motorvägens."
  },
  {
    "id": "book-motorway-q22",
    "topic": "safety",
    "kind": "Säkerhetsråd",
    "source": "book",
    "chapterId": "roads",
    "bookUnitId": "book-motorway",
    "bookPages": [
      93
    ],
    "coverageIds": [
      "book-motorway-t22"
    ],
    "title": "Motortrafikledens olycksrisk",
    "situation": "Motortrafikleder är mer olycksdrabbade än motorvägar. Vilka skäl anges för detta?",
    "options": [
      "Kortare påfarter och mindre utrymme i sidled.",
      "Att hastighetsgränsen alltid är högre.",
      "Att vägbelysning saknas på alla motortrafikleder."
    ],
    "correct": 0,
    "hint": "Utrymmet för att anpassa sig vid in- och utfart är mer begränsat.",
    "explanation": "Motortrafikleder är mer olycksdrabbade än motorvägar, bland annat på grund av kortare påfarter och mindre utrymme i sidled.",
    "takeaway": "Kortare påfarter och mindre sidoutrymme gör motortrafikleder mer olycksdrabbade än motorvägar."
  },
  {
    "id": "book-motorway-q23",
    "topic": "rules",
    "kind": "Trafikregel",
    "source": "book",
    "chapterId": "roads",
    "bookUnitId": "book-motorway",
    "bookPages": [
      93
    ],
    "coverageIds": [
      "book-motorway-t23"
    ],
    "title": "Mötesfri väg utan att vara motortrafikled",
    "situation": "Du kör på en mötesfri landsväg med vajerräcke. Vägen är inte skyltad som motortrafikled. Kan korsande trafik förekomma?",
    "options": [
      "Nej, vajerräcke innebär alltid att vägen är en motortrafikled utan korsande trafik.",
      "Ja, en sådan väg kan ha korsande trafik eftersom den inte är en motortrafikled.",
      "Ja, men bara om vägen samtidigt saknar mittlinje."
    ],
    "correct": 1,
    "hint": "Vajerräcke ensamt avgör inte vägtypen.",
    "explanation": "Det finns även mötesfria landsvägar med vajerräcke som inte är motortrafikleder. På dessa kan korsande trafik förekomma.",
    "takeaway": "Vajerräcke gör inte automatiskt en väg till motortrafikled; korsande trafik kan ändå förekomma."
  },
  {
    "id": "book-motorway-q24",
    "topic": "safety",
    "kind": "Säkerhetsråd",
    "source": "book",
    "chapterId": "roads",
    "bookUnitId": "book-motorway",
    "bookPages": [
      93
    ],
    "coverageIds": [
      "book-motorway-t24"
    ],
    "title": "Vad är fartblindhet?",
    "situation": "Du har kört fort en längre tid och saktar sedan in. Hur beskrivs fartblindhet och dess konsekvens?",
    "options": [
      "Du tycker att du kör långsammare än du faktiskt gör, vilket kan ge en missbedömning av avstånd och stoppsträcka.",
      "Du tycker att du kör fortare än du faktiskt gör, vilket gör dig extra försiktig.",
      "Synen försämras tillfälligt av hög fart, oavsett hur länge du kört fort."
    ],
    "correct": 0,
    "hint": "Missbedömningen gäller den egna upplevda farten, inte synen.",
    "explanation": "När du saktar in efter att ha kört fort en längre tid tycker du förmodligen att du kör långsammare än vad du faktiskt gör. Detta kallas fartblindhet och resultatet kan bli en missbedömning av avstånd och stoppsträcka.",
    "takeaway": "Fartblindhet gör att du underskattar din egen fart, vilket kan leda till felbedömt avstånd och stoppsträcka."
  },
  {
    "id": "book-motorway-q25",
    "topic": "safety",
    "kind": "Säkerhetsråd",
    "source": "book",
    "chapterId": "roads",
    "bookUnitId": "book-motorway",
    "bookPages": [
      93
    ],
    "coverageIds": [
      "book-motorway-t25"
    ],
    "title": "Vad ökar risken för fartblindhet?",
    "situation": "Vilken kombination av faktorer anges öka risken för fartblindhet?",
    "options": [
      "Breda vägar utan distraktioner, tystgående bekväma bilar och hög hastighet under lång tid.",
      "Smala vägar med många kurvor och låg hastighet.",
      "Korta körsträckor med täta stopp."
    ],
    "correct": 0,
    "hint": "Faktorerna handlar om en bekväm, odramatisk körupplevelse i hög fart.",
    "explanation": "Risken för fartblindhet ökar med breda vägar utan distraktioner, tystgående och bekväma bilar samt hög hastighet under lång tid.",
    "takeaway": "Breda, odramatiska vägar och tysta bilar i hög fart under lång tid ökar risken för fartblindhet."
  },
  {
    "id": "book-motorway-q26",
    "topic": "rules",
    "kind": "Trafikregel",
    "source": "book",
    "chapterId": "roads",
    "bookUnitId": "book-motorway",
    "bookPages": [
      93
    ],
    "coverageIds": [
      "book-motorway-t26"
    ],
    "title": "Tunga lastbilars hastighet",
    "situation": "En tung lastbil kör på en motortrafikled. Vilken högsta hastighet gäller, jämfört med på en vanlig väg?",
    "options": [
      "90 km/h på motortrafikled och motorväg; 80 km/h på andra vägar.",
      "80 km/h på motortrafikled och motorväg; 90 km/h på andra vägar.",
      "90 km/h överallt, oavsett vägtyp."
    ],
    "correct": 0,
    "hint": "Den högre gränsen gäller bara på de två vägtyper som liknar varandra mest.",
    "explanation": "Tunga lastbilar får köra i max 90 km/h på motorvägar och motortrafikleder. På andra vägar får tunga lastbilar köra i max 80 km/h.",
    "takeaway": "Tunga lastbilar: högst 90 km/h på motorväg/motortrafikled, annars högst 80 km/h."
  }
];

export const MOTORWAY_90_93_COVERAGE = [
  {
    "id": "book-motorway-t1",
    "bookUnitId": "book-motorway",
    "pages": [
      90
    ],
    "label": "Motorvägens avskilda körbanor",
    "questionIds": [
      "book-motorway-q1"
    ],
    "visualStatus": "reviewed"
  },
  {
    "id": "book-motorway-t2",
    "bookUnitId": "book-motorway",
    "pages": [
      90
    ],
    "label": "Ingen korsande trafik i samma plan på motorväg",
    "questionIds": [
      "book-motorway-q2"
    ],
    "visualStatus": "reviewed"
  },
  {
    "id": "book-motorway-t3",
    "bookUnitId": "book-motorway",
    "pages": [
      90
    ],
    "label": "Av- och påfart tillhör motorvägen",
    "questionIds": [
      "book-motorway-q3"
    ],
    "visualStatus": "not-needed"
  },
  {
    "id": "book-motorway-t4",
    "bookUnitId": "book-motorway",
    "pages": [
      91
    ],
    "label": "Accelerationsfält: ömsesidig hänsyn utan företräde",
    "questionIds": [
      "book-motorway-q4"
    ],
    "visualStatus": "reviewed"
  },
  {
    "id": "book-motorway-t5",
    "bookUnitId": "book-motorway",
    "pages": [
      91
    ],
    "label": "Utan accelerationsfält: väjningsplikt mot motorvägstrafiken",
    "questionIds": [
      "book-motorway-q5"
    ],
    "visualStatus": "not-needed"
  },
  {
    "id": "book-motorway-t6",
    "bookUnitId": "book-motorway",
    "pages": [
      91
    ],
    "label": "Lämna påfarten snabbt och kontrollera döda vinkeln",
    "questionIds": [
      "book-motorway-q6"
    ],
    "visualStatus": "not-needed"
  },
  {
    "id": "book-motorway-t7",
    "bookUnitId": "book-motorway",
    "pages": [
      91,
      92
    ],
    "label": "Förbud mot att stanna och parkera på motorväg",
    "questionIds": [
      "book-motorway-q7"
    ],
    "visualStatus": "reviewed"
  },
  {
    "id": "book-motorway-t8",
    "bookUnitId": "book-motorway",
    "pages": [
      91
    ],
    "label": "Förbud mot att vända på motorväg",
    "questionIds": [
      "book-motorway-q8"
    ],
    "visualStatus": "not-needed"
  },
  {
    "id": "book-motorway-t9",
    "bookUnitId": "book-motorway",
    "pages": [
      91
    ],
    "label": "Förbud mot att backa på motorväg",
    "questionIds": [
      "book-motorway-q9"
    ],
    "visualStatus": "not-needed"
  },
  {
    "id": "book-motorway-t10",
    "bookUnitId": "book-motorway",
    "pages": [
      91
    ],
    "label": "Förbud mot gång-, cykel- och mopedtrafik på motorväg",
    "questionIds": [
      "book-motorway-q10"
    ],
    "visualStatus": "reviewed"
  },
  {
    "id": "book-motorway-t11",
    "bookUnitId": "book-motorway",
    "pages": [
      91
    ],
    "label": "Förbud mot bogsering på motorväg",
    "questionIds": [
      "book-motorway-q11"
    ],
    "visualStatus": "not-needed"
  },
  {
    "id": "book-motorway-t12",
    "bookUnitId": "book-motorway",
    "pages": [
      91
    ],
    "label": "Förbud mot fordon som inte klarar minst 40 km/h",
    "questionIds": [
      "book-motorway-q12"
    ],
    "visualStatus": "not-needed"
  },
  {
    "id": "book-motorway-t13",
    "bookUnitId": "book-motorway",
    "pages": [
      91
    ],
    "label": "EU-moped förbjuden trots 45 km/h-förmåga",
    "questionIds": [
      "book-motorway-q13"
    ],
    "visualStatus": "not-needed"
  },
  {
    "id": "book-motorway-t14",
    "bookUnitId": "book-motorway",
    "pages": [
      91
    ],
    "label": "Förbud mot att köra traktor på motorväg",
    "questionIds": [
      "book-motorway-q14"
    ],
    "visualStatus": "not-needed"
  },
  {
    "id": "book-motorway-t15",
    "bookUnitId": "book-motorway",
    "pages": [
      91
    ],
    "label": "Fartblindhet vid avfart",
    "questionIds": [
      "book-motorway-q15"
    ],
    "visualStatus": "not-needed"
  },
  {
    "id": "book-motorway-t16",
    "bookUnitId": "book-motorway",
    "pages": [
      91
    ],
    "label": "Seriekrockar vid för korta avstånd",
    "questionIds": [
      "book-motorway-q16"
    ],
    "visualStatus": "not-needed"
  },
  {
    "id": "book-motorway-t17",
    "bookUnitId": "book-motorway",
    "pages": [
      91
    ],
    "label": "Enformighet och singelolycka",
    "questionIds": [
      "book-motorway-q17"
    ],
    "visualStatus": "not-needed"
  },
  {
    "id": "book-motorway-t18",
    "bookUnitId": "book-motorway",
    "pages": [
      91
    ],
    "label": "Vattenplaning ökar med hastigheten",
    "questionIds": [
      "book-motorway-q18"
    ],
    "visualStatus": "not-needed"
  },
  {
    "id": "book-motorway-t19",
    "bookUnitId": "book-motorway",
    "pages": [
      93
    ],
    "label": "Motortrafikled som blandning av motorväg och landsväg",
    "questionIds": [
      "book-motorway-q19"
    ],
    "visualStatus": "reviewed"
  },
  {
    "id": "book-motorway-t20",
    "bookUnitId": "book-motorway",
    "pages": [
      93
    ],
    "label": "Motortrafikled: inga korsande vägar men sällsynta möten",
    "questionIds": [
      "book-motorway-q20"
    ],
    "visualStatus": "not-needed"
  },
  {
    "id": "book-motorway-t21",
    "bookUnitId": "book-motorway",
    "pages": [
      93
    ],
    "label": "Motortrafikled: samma regler som motorväg",
    "questionIds": [
      "book-motorway-q21"
    ],
    "visualStatus": "not-needed"
  },
  {
    "id": "book-motorway-t22",
    "bookUnitId": "book-motorway",
    "pages": [
      93
    ],
    "label": "Motortrafikled: högre olycksrisk än motorväg",
    "questionIds": [
      "book-motorway-q22"
    ],
    "visualStatus": "not-needed"
  },
  {
    "id": "book-motorway-t23",
    "bookUnitId": "book-motorway",
    "pages": [
      93
    ],
    "label": "Mötesfri landsväg med vajerräcke som inte är motortrafikled",
    "questionIds": [
      "book-motorway-q23"
    ],
    "visualStatus": "reviewed"
  },
  {
    "id": "book-motorway-t24",
    "bookUnitId": "book-motorway",
    "pages": [
      93
    ],
    "label": "Fartblindhetens definition och konsekvens",
    "questionIds": [
      "book-motorway-q24"
    ],
    "visualStatus": "not-needed"
  },
  {
    "id": "book-motorway-t25",
    "bookUnitId": "book-motorway",
    "pages": [
      93
    ],
    "label": "Faktorer som ökar risken för fartblindhet",
    "questionIds": [
      "book-motorway-q25"
    ],
    "visualStatus": "not-needed"
  },
  {
    "id": "book-motorway-t26",
    "bookUnitId": "book-motorway",
    "pages": [
      93
    ],
    "label": "Tunga lastbilars hastighetsgräns",
    "questionIds": [
      "book-motorway-q26"
    ],
    "visualStatus": "not-needed"
  }
];

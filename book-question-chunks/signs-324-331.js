// PDF 324-331 (first subchunk of book-signs, PDF 324-361, a 38-page sign
// reference catalog). Reviewed source text and all sign illustrations.
// Covers varningsmärken (A1-A41), väjningspliktsmärken (B1-B8) and the
// first half of förbudsmärken (C1-C36).
export const SIGNS_324_331_QUESTIONS = [
  {
    "id": "book-signs-q1",
    "topic": "rules",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "signs",
    "bookUnitId": "book-signs",
    "bookPages": [324],
    "coverageIds": ["book-signs-t1"],
    "title": "Varningsmärkenas form och syfte",
    "situation": "Vilken form och färg har varningsmärken (A), och vad är deras allmänna syfte?",
    "options": [
      "Gul triangel med röd kant; de varnar för en fara längre fram så att du kan vara extra uppmärksam.",
      "Röd cirkel med vit botten; de förbjuder en viss typ av trafik.",
      "Blå kvadrat; de anger en anvisning du måste följa."
    ],
    "correct": 0,
    "hint": "Formen är densamma som till exempel A1 (farlig kurva) och A28 (vägkorsning) har.",
    "explanation": "Varningsmärken (A) har formen av en gul triangel med röd kant. De varnar för en fara längre fram på vägen, så att du som förare kan vara extra uppmärksam.",
    "takeaway": "Den gula triangeln med röd kant är varningsmärkenas gemensamma form, oavsett vilken fara de varnar för."
  },
  {
    "id": "book-signs-q2",
    "topic": "rules",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "signs",
    "bookUnitId": "book-signs",
    "bookPages": [324],
    "coverageIds": ["book-signs-t2"],
    "title": "Nedförslutning och stigning",
    "situation": "Märkena A3 (nedförslutning) och A4 (stigning) ser nästan likadana ut, båda med en procentsats. Vad skiljer dem åt?",
    "options": [
      "A3 varnar för att vägen lutar nedåt, A4 för att den lutar uppåt; procentsatsen anger lutningens grad i båda fallen.",
      "A3 gäller bara motorväg, A4 gäller bara landsväg.",
      "Procentsatsen anger hastighetsbegränsningen, inte lutningen, på båda skyltarna."
    ],
    "correct": 0,
    "hint": "Symbolens trekant lutar åt olika håll beroende på om vägen går upp eller ner.",
    "explanation": "A3 (varning för nedförslutning) och A4 (varning för stigning) anger båda vägens lutning i procent, men A3 varnar för nedförsbacke och A4 för uppförsbacke.",
    "takeaway": "Procentsatsen på A3/A4 anger lutningsgraden; symbolens riktning visar om det är ned- eller uppförsbacke."
  },
  {
    "id": "book-signs-q3",
    "topic": "rules",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "signs",
    "bookUnitId": "book-signs",
    "bookPages": [324],
    "coverageIds": ["book-signs-t3"],
    "title": "Stenskott och stenras",
    "situation": "Vad är skillnaden mellan A11 (varning för stenskott) och A12 (varning för stenras)?",
    "options": [
      "A11 varnar för risken att stenar kastas upp av trafiken (till exempel på grusväg), medan A12 varnar för risken att stenar faller ner på vägen från en slänt.",
      "A11 och A12 betyder exakt samma sak, bara med olika symboler.",
      "A11 gäller vintertid, A12 gäller sommartid."
    ],
    "correct": 0,
    "hint": "Den ena faran kommer underifrån (däcken), den andra uppifrån (slänten).",
    "explanation": "A11 varnar för stenskott, risken att stenar kastas upp av trafiken. A12 varnar för stenras, risken att stenar faller ner på vägen, till exempel från en bergsslänt.",
    "takeaway": "Stenskott kommer från vägbanan/däcken, stenras kommer uppifrån en slänt."
  },
  {
    "id": "book-signs-q4",
    "topic": "rules",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "signs",
    "bookUnitId": "book-signs",
    "bookPages": [325],
    "coverageIds": ["book-signs-t4"],
    "title": "Varning för barn jämfört med varning för gående",
    "situation": "Vad är skillnaden mellan A14 (varning för gående) och A15 (varning för barn)?",
    "options": [
      "A15 används specifikt där barn ofta rör sig, till exempel vid skolor, vilket kräver extra uppmärksamhet jämfört med den mer allmänna A14.",
      "A14 och A15 betyder exakt samma sak och används slumpmässigt.",
      "A15 gäller bara för cyklande barn, aldrig gående barn."
    ],
    "correct": 0,
    "hint": "Barn är mindre förutsägbara i trafiken än vuxna gående.",
    "explanation": "A14 varnar allmänt för gående. A15 varnar specifikt för barn, exempelvis vid skolor, där barns oförutsägbara beteende kräver extra uppmärksamhet.",
    "takeaway": "A15 (barn) är en mer specifik och allvarligare varning än den allmänna A14 (gående)."
  },
  {
    "id": "book-signs-q5",
    "topic": "rules",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "signs",
    "bookUnitId": "book-signs",
    "bookPages": [325],
    "coverageIds": ["book-signs-t5"],
    "title": "Varning för vägarbete och slutet på det",
    "situation": "Vad anger A21 (”Slut på sträcka med vägarbete”) jämfört med A20 (varning för vägarbete)?",
    "options": [
      "A20 varnar om att vägarbete börjar längre fram; A21 anger att sträckan med vägarbete tar slut.",
      "A20 och A21 anger samma sak, bara riktade åt olika håll på vägen.",
      "A21 varnar om att vägarbete börjar, och A20 om att det slutar."
    ],
    "correct": 0,
    "hint": "Ett av märkena markerar start, det andra markerar slut.",
    "explanation": "A20 varnar för vägarbete som börjar längre fram. A21 anger att sträckan med vägarbete tar slut.",
    "takeaway": "A20 varnar om vägarbetets start, A21 om dess slut."
  },
  {
    "id": "book-signs-q6",
    "topic": "rules",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "signs",
    "bookUnitId": "book-signs",
    "bookPages": [325],
    "coverageIds": ["book-signs-t6"],
    "title": "Varning för flerfärgssignal",
    "situation": "Vad varnar A22 (varning för flerfärgssignal) för?",
    "options": [
      "Att en trafiksignal (trafikljus) finns längre fram, till exempel på en plats där föraren inte väntar sig en.",
      "Att vägbelysningen har flera olika färger på grund av vägarbete.",
      "Att det finns ett diskotek eller nöjesetablissemang i närheten."
    ],
    "correct": 0,
    "hint": "Symbolen visar tre runda lampor, som i en vanlig trafiksignal.",
    "explanation": "A22 varnar för flerfärgssignal, det vill säga att en trafiksignal finns längre fram.",
    "takeaway": "A22 förbereder dig på en kommande trafiksignal, särskilt där den kan komma oväntat."
  },
  {
    "id": "book-signs-q7",
    "topic": "rules",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "signs",
    "bookUnitId": "book-signs",
    "bookPages": [326],
    "coverageIds": ["book-signs-t7"],
    "title": "Vägkorsning med och utan väjningsplikt för andra",
    "situation": "Vad är skillnaden mellan A28 (varning för vägkorsning) och A29 (varning för vägkorsning där trafikanter på anslutande väg har väjningsplikt eller stopplikt)?",
    "options": [
      "A28 varnar för en vanlig korsning där högerregeln (eller annan väjningsregel) gäller normalt; A29 talar om att du själv har förkörsrätt, eftersom de andra har väjnings- eller stopplikt.",
      "A28 och A29 är exakt samma märke, bara i olika färger.",
      "A29 innebär att du själv måste väja för alla andra vid korsningen."
    ],
    "correct": 0,
    "hint": "A29 ger dig information om att du är prioriterad i just den korsningen.",
    "explanation": "A28 varnar allmänt för en vägkorsning. A29 varnar för en vägkorsning där trafikanter på den anslutande vägen har väjningsplikt eller stopplikt, det vill säga att du har förkörsrätt.",
    "takeaway": "A29 talar om att du är prioriterad; A28 ger ingen sådan garanti."
  },
  {
    "id": "book-signs-q8",
    "topic": "rules",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "signs",
    "bookUnitId": "book-signs",
    "bookPages": [326],
    "coverageIds": ["book-signs-t8"],
    "title": "Järnvägskorsning med och utan bommar",
    "situation": "Vad är skillnaden mellan A35 (varning för järnvägskorsning med bommar) och A36 (varning för järnvägskorsning utan bommar)?",
    "options": [
      "A35 varnar för en korsning som har bommar som fälls ner vid tågpassage; A36 varnar för en korsning helt utan bommar, där du själv måste bedöma om det är säkert att korsa.",
      "A35 och A36 gäller samma typ av korsning, bara med olika hastighetsbegränsning.",
      "A36 gäller korsningar med bommar, A35 gäller korsningar utan bommar."
    ],
    "correct": 0,
    "hint": "Symbolerna skiljer sig åt genom att en av dem visar bommar i bilden.",
    "explanation": "A35 varnar för järnvägskorsning med bommar. A36 varnar för järnvägskorsning utan bommar, där extra egen vaksamhet krävs eftersom inget fysiskt hinder stoppar dig.",
    "takeaway": "En korsning utan bommar (A36) kräver större egen vaksamhet än en med bommar (A35)."
  },
  {
    "id": "book-signs-q9",
    "topic": "rules",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "signs",
    "bookUnitId": "book-signs",
    "bookPages": [327],
    "coverageIds": ["book-signs-t9"],
    "title": "Avstånd till plankorsning",
    "situation": "Vad visar märket A38 (avstånd till plankorsning), med sina diagonala streck?",
    "options": [
      "Hur långt det är kvar till en järnvägskorsning, där antalet streck minskar ju närmare korsningen man kommer.",
      "Hur många spår järnvägskorsningen har.",
      "Den högsta tillåtna hastigheten fram till korsningen."
    ],
    "correct": 0,
    "hint": "Märket sätts upp i en serie, där strecken räknas ner i takt med avståndet.",
    "explanation": "A38 (avstånd till plankorsning) visar hur långt det är kvar till en järnvägskorsning. Strecken på skylten minskar i antal ju närmare korsningen du kommer.",
    "takeaway": "A38:s nedräknande streck hjälper dig bedöma avståndet till en kommande järnvägskorsning."
  },
  {
    "id": "book-signs-q10",
    "topic": "rules",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "signs",
    "bookUnitId": "book-signs",
    "bookPages": [327],
    "coverageIds": ["book-signs-t10"],
    "title": "Varning för annan fara och varning för olycka",
    "situation": "När används A40 (varning för annan fara) respektive A41 (varning för olycka)?",
    "options": [
      "A40 används för en fara som inte har ett eget specifikt varningsmärke; A41 används tillfälligt för att varna om en nyligen inträffad olycka.",
      "A40 och A41 är permanenta skyltar som aldrig tas bort, oavsett situation.",
      "A41 används för alla typer av faror som saknar eget märke, och A40 bara för olyckor."
    ],
    "correct": 0,
    "hint": "Ett av märkena är en generell ”catch-all”-skylt, det andra är kopplat till en specifik händelse.",
    "explanation": "A40 (varning för annan fara) används när faran saknar ett eget specifikt varningsmärke. A41 (varning för olycka) används tillfälligt för att varna om en nyligen inträffad olycka på platsen.",
    "takeaway": "A40 är en generell reservskylt, medan A41 specifikt varnar om en nyligen inträffad olycka."
  },
  {
    "id": "book-signs-q11",
    "topic": "rules",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "signs",
    "bookUnitId": "book-signs",
    "bookPages": [328],
    "coverageIds": ["book-signs-t11"],
    "title": "Väjningsplikt jämfört med stopplikt",
    "situation": "Vad är skillnaden mellan B1 (väjningsplikt) och B2 (stopplikt)?",
    "options": [
      "Vid B1 ska du lämna företräde men behöver bara stanna om det krävs för att göra det säkert; vid B2 måste du alltid stanna helt, oavsett om vägen är fri eller inte.",
      "B1 och B2 betyder exakt samma sak, bara med olika form.",
      "B2 kräver bara att du saktar ner, aldrig att du stannar helt."
    ],
    "correct": 0,
    "hint": "Den ena skylten (åttkantig, röd) kräver ett fullständigt stopp varje gång.",
    "explanation": "B1 (väjningsplikt) innebär att du ska lämna företräde åt korsande trafik, men du behöver bara stanna om det krävs för att göra det säkert. B2 (stopplikt) innebär att du alltid måste stanna helt, oavsett om vägen är fri.",
    "takeaway": "Stopplikt (B2) kräver alltid ett fullständigt stopp; väjningsplikt (B1) bara vid behov."
  },
  {
    "id": "book-signs-q12",
    "topic": "rules",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "signs",
    "bookUnitId": "book-signs",
    "bookPages": [328],
    "coverageIds": ["book-signs-t12"],
    "title": "Huvudled och huvudled upphör",
    "situation": "Vad anger B4 (huvudled) och B5 (huvudled upphör)?",
    "options": [
      "B4 anger att du kör på en huvudled där korsande trafik normalt har väjningsplikt; B5 anger var huvudledens sträcka tar slut.",
      "B4 och B5 betyder samma sak och används växelvis utan skillnad.",
      "B5 anger att en ny huvudled börjar längre fram."
    ],
    "correct": 0,
    "hint": "Det ena märket (gul romb) markerar start/fortsättning, det andra markerar slutet.",
    "explanation": "B4 (huvudled) anger att du befinner dig på en huvudled, där korsande trafik normalt har väjningsplikt. B5 (huvudled upphör) anger var denna huvudledssträcka tar slut.",
    "takeaway": "B4 markerar att huvudledsstatusen gäller, B5 att den upphör."
  },
  {
    "id": "book-signs-q13",
    "topic": "rules",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "signs",
    "bookUnitId": "book-signs",
    "bookPages": [328],
    "coverageIds": ["book-signs-t13"],
    "title": "Väjningsplikt mot mötande trafik och dess motsats",
    "situation": "Vad är skillnaden mellan B6 (väjningsplikt mot mötande trafik) och B7 (mötande trafik har väjningsplikt)?",
    "options": [
      "B6 betyder att du måste släppa fram mötande trafik (till exempel vid en avsmalning); B7 betyder att det är den mötande trafiken som måste släppa fram dig.",
      "B6 och B7 betyder exakt samma sak, bara med spegelvänd symbol.",
      "B7 gäller bara för tunga fordon, B6 bara för personbilar."
    ],
    "correct": 0,
    "hint": "Pilarnas färg (röd eller vit) anger vem som har väjningsplikten.",
    "explanation": "B6 (väjningsplikt mot mötande trafik) innebär att du måste släppa fram mötande trafik, till exempel vid en avsmalning eller enfilig passage. B7 (mötande trafik har väjningsplikt) innebär att det i stället är den mötande trafiken som måste släppa fram dig.",
    "takeaway": "B6 och B7 är varandras motsatser — se efter vilken riktning som har väjningsplikten."
  },
  {
    "id": "book-signs-q14",
    "topic": "rules",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "signs",
    "bookUnitId": "book-signs",
    "bookPages": [328],
    "coverageIds": ["book-signs-t14"],
    "title": "Cykelöverfart",
    "situation": "Vad anger märket B8 (cykelöverfart)?",
    "options": [
      "En plats där cyklister och mopedister klass II korsar vägen, och där bilförare har väjningsplikt mot dem.",
      "En plats där cyklister alltid har väjningsplikt mot bilar.",
      "Samma sak som ett vanligt övergångsställe (B3), fast enbart avsett för gående."
    ],
    "correct": 0,
    "hint": "En cykelöverfart ger andra rättigheter till den som korsar än en vanlig cykelbana som bara korsar vägen.",
    "explanation": "B8 (cykelöverfart) anger en plats där cyklister och mopedister klass II korsar vägen och där bilförare har väjningsplikt mot dem.",
    "takeaway": "Vid en cykelöverfart (B8) har bilförare väjningsplikt mot cyklister och mopedister klass II."
  },
  {
    "id": "book-signs-q15",
    "topic": "rules",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "signs",
    "bookUnitId": "book-signs",
    "bookPages": [329],
    "coverageIds": ["book-signs-t15"],
    "title": "Förbud mot infart kontra förbud mot trafik med fordon",
    "situation": "Vad är skillnaden mellan C1 (förbud mot infart med fordon) och C2 (förbud mot trafik med fordon)?",
    "options": [
      "C1 förbjuder infart från just det hållet (till exempel vid en enkelriktad gata), medan fordon kan få köra därifrån åt andra hållet; C2 förbjuder all fordonstrafik i båda riktningarna.",
      "C1 och C2 förbjuder exakt samma sak, bara i olika färger.",
      "C2 gäller bara för cyklar, C1 gäller bara för bilar."
    ],
    "correct": 0,
    "hint": "Det ena märket (röd med gul stapel) syns ofta i ena änden av en enkelriktad gata.",
    "explanation": "C1 (förbud mot infart med fordon) förbjuder infart från just det hållet, till exempel i ena änden av en enkelriktad gata. C2 (förbud mot trafik med fordon) förbjuder all fordonstrafik, i båda riktningarna.",
    "takeaway": "C1 stoppar bara infart från ett håll; C2 stänger av vägen för fordon helt och hållet."
  },
  {
    "id": "book-signs-q16",
    "topic": "rules",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "signs",
    "bookUnitId": "book-signs",
    "bookPages": [329],
    "coverageIds": ["book-signs-t16"],
    "title": "Förbud mot fordon med farligt gods",
    "situation": "Vad förbjuder märket C9?",
    "options": [
      "Trafik med fordon lastat med farligt gods.",
      "Trafik med alla typer av lastbilar, oavsett last.",
      "Trafik med fordon som saknar giltig besiktning."
    ],
    "correct": 0,
    "hint": "Symbolen visar en lastbil med en specifik varningsmarkering.",
    "explanation": "C9 förbjuder trafik med fordon lastat med farligt gods.",
    "takeaway": "C9 riktar sig specifikt mot fordon som transporterar farligt gods."
  },
  {
    "id": "book-signs-q17",
    "topic": "rules",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "signs",
    "bookUnitId": "book-signs",
    "bookPages": [330],
    "coverageIds": ["book-signs-t17"],
    "title": "Begränsad bruttovikt på fordon jämfört med fordonståg",
    "situation": "Vad är skillnaden mellan C20 (begränsad bruttovikt på fordon) och C21 (begränsad bruttovikt på fordon och fordonståg)?",
    "options": [
      "C20 begränsar vikten för ett enskilt fordon; C21 begränsar den sammanlagda vikten för fordonet och eventuellt tillkopplat släp (fordonståg) tillsammans.",
      "C20 och C21 betyder exakt samma sak.",
      "C21 gäller bara för motorcyklar, aldrig för bilar med släp."
    ],
    "correct": 0,
    "hint": "Ett fordonståg innefattar även det som är tillkopplat bakom fordonet.",
    "explanation": "C20 (begränsad bruttovikt på fordon) begränsar vikten för ett enskilt fordon. C21 (begränsad bruttovikt på fordon och fordonståg) begränsar den sammanlagda vikten för fordonet plus ett eventuellt tillkopplat släp.",
    "takeaway": "C21 räknar in hela ekipaget (fordon + släp), medan C20 bara gäller fordonet för sig."
  },
  {
    "id": "book-signs-q18",
    "topic": "rules",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "signs",
    "bookUnitId": "book-signs",
    "bookPages": [330],
    "coverageIds": ["book-signs-t18"],
    "title": "Bärighetsklass",
    "situation": "Vad anger märket C22, med texten ”BK” och en siffra?",
    "options": [
      "Vägens bärighetsklass, vilket avgör hur tunga fordon som får trafikera vägen.",
      "Högsta tillåtna hastighet på vägen.",
      "Antal körfält på den aktuella vägsträckan."
    ],
    "correct": 0,
    "hint": "”BK” står för ett begrepp kopplat till vägens bärförmåga.",
    "explanation": "C22 anger vägens bärighetsklass (BK), vilket avgör hur tunga fordon som får trafikera vägen.",
    "takeaway": "Bärighetsklass-skylten (BK) styr vilka fordonsvikter en väg tål."
  },
  {
    "id": "book-signs-q19",
    "topic": "rules",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "signs",
    "bookUnitId": "book-signs",
    "bookPages": [331],
    "coverageIds": ["book-signs-t19"],
    "title": "Förbud mot omkörning och förbud mot omkörning med tung lastbil",
    "situation": "Vad är skillnaden mellan C27 (förbud mot omkörning) och C29 (förbud mot omkörning med tung lastbil)?",
    "options": [
      "C27 förbjuder omkörning för alla motordrivna fordon; C29 förbjuder omkörning bara för tunga lastbilar, medan andra fordon fortfarande får köra om.",
      "C27 och C29 förbjuder exakt samma sak, bara riktade åt olika håll.",
      "C29 förbjuder omkörning för alla fordon, och C27 bara för tunga lastbilar."
    ],
    "correct": 0,
    "hint": "Ett av märkena visar specifikt en lastbilssymbol i förbudscirkeln.",
    "explanation": "C27 (förbud mot omkörning) förbjuder omkörning för (i princip) alla motordrivna fordon. C29 (förbud mot omkörning med tung lastbil) förbjuder omkörning bara för tunga lastbilar.",
    "takeaway": "C29 riktar omkörningsförbudet specifikt mot tunga lastbilar, till skillnad från det generella C27."
  },
  {
    "id": "book-signs-q20",
    "topic": "rules",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "signs",
    "bookUnitId": "book-signs",
    "bookPages": [331],
    "coverageIds": ["book-signs-t20"],
    "title": "Stopp vid tull och stopp av angiven anledning",
    "situation": "Vad är skillnaden mellan C33 (stopp vid tull) och C34 (stopp av angiven anledning)?",
    "options": [
      "C33 gäller specifikt vid en tullstation; C34 används mer generellt och visas tillsammans med en text eller tilläggstavla som förklarar varför du måste stanna.",
      "C33 och C34 betyder exakt samma sak.",
      "C34 gäller bara vid tullstationer, och C33 används generellt vid andra stopp."
    ],
    "correct": 0,
    "hint": "Det ena märket har ordet ”TULL/TOLD” inbyggt i symbolen.",
    "explanation": "C33 (stopp vid tull) gäller specifikt vid en tullstation. C34 (stopp av angiven anledning) används mer generellt, med texten ”STOPP” och ”SIGNAL”, där den exakta anledningen anges separat.",
    "takeaway": "C33 är knutet till tullkontroll, medan C34 är en generell stoppskylt för andra angivna skäl."
  },
  {
    "id": "book-signs-q21",
    "topic": "rules",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "signs",
    "bookUnitId": "book-signs",
    "bookPages": [331],
    "coverageIds": ["book-signs-t21"],
    "title": "Parkeringsförbud på dag med udda datum",
    "situation": "Vad innebär märket C36 (förbud mot att parkera fordon på dag med udda datum)?",
    "options": [
      "Att du inte får parkera på platsen de dagar i månaden som har ett udda datumtal.",
      "Att parkering är helt förbjuden alla dagar, utan undantag.",
      "Att parkering bara är tillåten på dagar med udda datumtal."
    ],
    "correct": 0,
    "hint": "Märket styr parkeringen utifrån kalenderdatumets sista siffra.",
    "explanation": "C36 (förbud mot att parkera fordon på dag med udda datum) innebär att du inte får parkera på platsen de dagar i månaden som har ett udda datumtal. Detta skiljer sig från C35, som förbjuder parkering helt, utan undantag.",
    "takeaway": "C36 är ett datumstyrt parkeringsförbud, till skillnad från C35:s fullständiga förbud."
  }
];

export const SIGNS_324_331_COVERAGE = [
  { id: "book-signs-t1", bookUnitId: "book-signs", pages: [324], label: "Varningsmärkenas gula triangelform", questionIds: ["book-signs-q1"], visualStatus: "reviewed" },
  { id: "book-signs-t2", bookUnitId: "book-signs", pages: [324], label: "A3/A4: nedförslutning kontra stigning", questionIds: ["book-signs-q2"], visualStatus: "reviewed" },
  { id: "book-signs-t3", bookUnitId: "book-signs", pages: [324], label: "A11/A12: stenskott kontra stenras", questionIds: ["book-signs-q3"], visualStatus: "reviewed" },
  { id: "book-signs-t4", bookUnitId: "book-signs", pages: [325], label: "A14/A15: gående kontra barn", questionIds: ["book-signs-q4"], visualStatus: "reviewed" },
  { id: "book-signs-t5", bookUnitId: "book-signs", pages: [325], label: "A20/A21: vägarbete start och slut", questionIds: ["book-signs-q5"], visualStatus: "reviewed" },
  { id: "book-signs-t6", bookUnitId: "book-signs", pages: [325], label: "A22: varning för flerfärgssignal", questionIds: ["book-signs-q6"], visualStatus: "reviewed" },
  { id: "book-signs-t7", bookUnitId: "book-signs", pages: [326], label: "A28/A29: vägkorsning med/utan väjningsplikt för andra", questionIds: ["book-signs-q7"], visualStatus: "reviewed" },
  { id: "book-signs-t8", bookUnitId: "book-signs", pages: [326], label: "A35/A36: järnvägskorsning med/utan bommar", questionIds: ["book-signs-q8"], visualStatus: "reviewed" },
  { id: "book-signs-t9", bookUnitId: "book-signs", pages: [327], label: "A38: avstånd till plankorsning", questionIds: ["book-signs-q9"], visualStatus: "reviewed" },
  { id: "book-signs-t10", bookUnitId: "book-signs", pages: [327], label: "A40/A41: annan fara kontra olycka", questionIds: ["book-signs-q10"], visualStatus: "reviewed" },
  { id: "book-signs-t11", bookUnitId: "book-signs", pages: [328], label: "B1/B2: väjningsplikt kontra stopplikt", questionIds: ["book-signs-q11"], visualStatus: "reviewed" },
  { id: "book-signs-t12", bookUnitId: "book-signs", pages: [328], label: "B4/B5: huvudled och huvudled upphör", questionIds: ["book-signs-q12"], visualStatus: "reviewed" },
  { id: "book-signs-t13", bookUnitId: "book-signs", pages: [328], label: "B6/B7: väjningsplikt mot/från mötande trafik", questionIds: ["book-signs-q13"], visualStatus: "reviewed" },
  { id: "book-signs-t14", bookUnitId: "book-signs", pages: [328], label: "B8: cykelöverfart", questionIds: ["book-signs-q14"], visualStatus: "reviewed" },
  { id: "book-signs-t15", bookUnitId: "book-signs", pages: [329], label: "C1/C2: förbud mot infart kontra all fordonstrafik", questionIds: ["book-signs-q15"], visualStatus: "reviewed" },
  { id: "book-signs-t16", bookUnitId: "book-signs", pages: [329], label: "C9: förbud mot fordon med farligt gods", questionIds: ["book-signs-q16"], visualStatus: "reviewed" },
  { id: "book-signs-t17", bookUnitId: "book-signs", pages: [330], label: "C20/C21: bruttovikt fordon kontra fordonståg", questionIds: ["book-signs-q17"], visualStatus: "reviewed" },
  { id: "book-signs-t18", bookUnitId: "book-signs", pages: [330], label: "C22: bärighetsklass", questionIds: ["book-signs-q18"], visualStatus: "reviewed" },
  { id: "book-signs-t19", bookUnitId: "book-signs", pages: [331], label: "C27/C29: omkörningsförbud generellt kontra tung lastbil", questionIds: ["book-signs-q19"], visualStatus: "reviewed" },
  { id: "book-signs-t20", bookUnitId: "book-signs", pages: [331], label: "C33/C34: stopp vid tull kontra angiven anledning", questionIds: ["book-signs-q20"], visualStatus: "reviewed" },
  { id: "book-signs-t21", bookUnitId: "book-signs", pages: [331], label: "C36: parkeringsförbud på dag med udda datum", questionIds: ["book-signs-q21"], visualStatus: "reviewed" }
];

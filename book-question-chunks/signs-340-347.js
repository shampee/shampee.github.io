// PDF 340-347 (third subchunk of book-signs, PDF 324-361, a 38-page sign
// reference catalog). Reviewed source text and all sign illustrations.
// Covers lokaliseringsmärken för allmänna inrättningar (G1-G12), för
// serviceanläggningar (H1-H28), för turistiskt intressanta mål (I1-I4),
// upplysningsmärken (J2-J3), symboler (S1-S13) and tilläggstavlor
// (T1-T25). Continues the comparison/grouping approach from the earlier
// signs subchunks rather than one question per sign.
export const SIGNS_340_347_QUESTIONS = [
  {
    "id": "book-signs-q42",
    "topic": "rules",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "signs",
    "bookUnitId": "book-signs",
    "bookPages": [340, 341],
    "coverageIds": ["book-signs-t42"],
    "title": "Allmänna inrättningar kontra serviceanläggningar",
    "situation": "Lokaliseringsmärken för allmänna inrättningar (G), till exempel G4 (akutsjukhus), och för serviceanläggningar (H), till exempel H6 (restaurang), ser likadana ut, blå kvadrater med vit symbol. Vad är skillnaden mellan grupperna?",
    "options": [
      "G-märken visar vägen till viktiga allmänna och samhällsfunktioner, som sjukhus eller järnvägsstation, medan H-märken visar vägen till service som riktar sig mer till resande, som drivmedel, mat eller boende.",
      "G-märken gäller bara i städer, H-märken bara på landsbygd.",
      "G och H är bara olika namn för samma skyltgrupp utan praktisk skillnad."
    ],
    "correct": 0,
    "hint": "Jämför G4 (akutsjukhus) med H7 (hotell): den ena är en samhällsfunktion, den andra en resetjänst.",
    "explanation": "G-märken (allmänna inrättningar) visar vägen till samhällsviktiga funktioner som sjukhus, järnvägsstation eller post. H-märken (serviceanläggningar) visar i stället vägen till service som är särskilt användbar för resande, till exempel drivmedel, mat, boende eller camping.",
    "takeaway": "Både G och H är blå vägvisningsmärken, men G pekar mot samhällsfunktioner och H mot reseservice."
  },
  {
    "id": "book-signs-q43",
    "topic": "safety",
    "kind": "Säkerhetsråd",
    "source": "book",
    "chapterId": "signs",
    "bookUnitId": "book-signs",
    "bookPages": [340],
    "coverageIds": ["book-signs-t43"],
    "title": "Hjälptelefon vid nödsituation",
    "situation": "Vad visar skylt G2 (hjälptelefon), och när kan den vara användbar?",
    "options": [
      "Den visar vägen till en nödtelefon, till exempel längs en motorväg, som du kan använda för att larma vid en olycka eller ett fordonshaveri.",
      "Den visar vägen till en vanlig telefonkiosk för privata samtal.",
      "Den innebär att mobiltelefonanvändning är förbjuden i området."
    ],
    "correct": 0,
    "hint": "Symbolen visar en telefonlur och texten SOS.",
    "explanation": "G2 (hjälptelefon) visar vägen till en nödtelefon som kan användas för att larma hjälp, till exempel vid en olycka eller ett fordonshaveri där du saknar annan möjlighet att kontakta räddningstjänsten.",
    "takeaway": "Hjälptelefonskylten pekar ut en nödtelefon för larm, inte en vanlig telefon."
  },
  {
    "id": "book-signs-q44",
    "topic": "environment",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "signs",
    "bookUnitId": "book-signs",
    "bookPages": [341],
    "coverageIds": ["book-signs-t44"],
    "title": "Drivmedel, gas och laddning",
    "situation": "Vad är skillnaden mellan H3 (drivmedel), H4 (gas för fordonsdrift) och H27 (laddstation)?",
    "options": [
      "H3 visar vägen till en vanlig bensin-/dieselmack, H4 visar vägen till en mack med gas (till exempel CNG) för fordonsdrift, och H27 visar vägen till en laddstation för elfordon.",
      "De tre skyltarna betyder exakt samma sak: en plats att tanka bilen på.",
      "H27 gäller bara elcyklar, aldrig bilar."
    ],
    "correct": 0,
    "hint": "Tänk på de olika symbolerna: en bensinpump, en gastub med CNG-text, och en laddsladd med blixt.",
    "explanation": "H3 (drivmedel), H4 (gas för fordonsdrift) och H27 (laddstation) visar vägen till olika typer av energipåfyllning för fordon: flytande drivmedel, gas som till exempel CNG, respektive elladdning.",
    "takeaway": "Symbolen avgör vilken typ av energipåfyllning skylten visar vägen till: flytande bränsle, gas eller el."
  },
  {
    "id": "book-signs-q45",
    "topic": "rules",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "signs",
    "bookUnitId": "book-signs",
    "bookPages": [341, 342],
    "coverageIds": ["book-signs-t45"],
    "title": "Campingplats, husvagnsplats och stugby",
    "situation": "Vad är skillnaden mellan H11 (campingplats), H12 (husvagnsplats) och H9 (stugby)?",
    "options": [
      "H11 visar vägen till en campingplats i allmänhet, H12 visar specifikt en plats avsedd för husvagnar, och H9 visar en anläggning med flera uthyrningsstugor.",
      "De tre skyltarna betyder exakt samma sak.",
      "H12 betyder att husvagnar är förbjudna på platsen."
    ],
    "correct": 0,
    "hint": "Symbolerna visar ett tält, en husvagn respektive flera små hus.",
    "explanation": "H11 (campingplats) visar vägen till camping i allmänhet, H12 (husvagnsplats) till en plats särskilt avsedd för husvagnar, och H9 (stugby) till en anläggning med flera uthyrningsstugor.",
    "takeaway": "Symbolen (tält, husvagn eller flera stugor) visar vilken typ av boendeanläggning skylten gäller."
  },
  {
    "id": "book-signs-q46",
    "topic": "rules",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "signs",
    "bookUnitId": "book-signs",
    "bookPages": [342, 343],
    "coverageIds": ["book-signs-t46"],
    "title": "Serviceanläggningar kontra turistmål",
    "situation": "H-märken (serviceanläggningar) är blå, medan I-märken (turistiskt intressanta mål), till exempel I3 (landmärke) och I4 (världsarv), är bruna. Vad signalerar färgskiftet?",
    "options": [
      "Den bruna färgen markerar att skylten pekar ut ett sevärdhets- eller turistmål snarare än en praktisk serviceanläggning som mat, boende eller drivmedel.",
      "Brun färg betyder att platsen är stängd för allmänheten.",
      "Brun färg används bara under sommarhalvåret."
    ],
    "correct": 0,
    "hint": "Jämför H22 (sevärdhet, blå) med I3 (landmärke, brun): den bruna gruppen är specifikt för turistiskt intressanta mål.",
    "explanation": "I-märken har brun botten och pekar ut turistiskt intressanta mål, till exempel ett landmärke (I3) eller en plats på Unescos världsarvslista (I4), till skillnad från de blå H-märkena som visar praktisk service.",
    "takeaway": "Brun botten särskiljer turistmålsskyltar (I) från de blå serviceskyltarna (H)."
  },
  {
    "id": "book-signs-q47",
    "topic": "safety",
    "kind": "Säkerhetsråd",
    "source": "book",
    "chapterId": "signs",
    "bookUnitId": "book-signs",
    "bookPages": [344],
    "coverageIds": ["book-signs-t47"],
    "title": "Livsfarlig ledning",
    "situation": "Vad varnar upplysningsmärket J3 (livsfarlig ledning) för, och varför är det särskilt viktigt att vara uppmärksam på den vid till exempel arbete med ett fordon med hög lastarm?",
    "options": [
      "Den varnar för en elledning med livsfarlig spänning ovanför vägen, till exempel en järnvägs kontaktledning, där kontakt med ett högt fordon eller en lastarm kan vara dödlig.",
      "Den varnar för att vägen är hal på grund av nedfallna ledningar.",
      "Den innebär bara att mobiltäckningen är dålig i området."
    ],
    "correct": 0,
    "hint": "Symbolen visar en blixt, samma varningssymbol som används för elfara i allmänhet.",
    "explanation": "J3 (livsfarlig ledning) varnar för en elledning med livsfarlig spänning, ofta en järnvägs kontaktledning. Kontakt mellan ledningen och till exempel en hög lastarm eller ett högt fordon kan vara dödlig, så extra försiktighet krävs.",
    "takeaway": "Livsfarlig ledning-skylten är en säkerhetsvarning för dödlig elfara ovanför vägen, inte bara en allmän upplysning."
  },
  {
    "id": "book-signs-q48",
    "topic": "rules",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "signs",
    "bookUnitId": "book-signs",
    "bookPages": [345],
    "coverageIds": ["book-signs-t48"],
    "title": "Symbolernas funktion på tilläggstavlor",
    "situation": "Symboler (S), till exempel S1 (tung lastbil) eller S10 (gående), förekommer sällan som egna skyltar på vägen. Hur används de i stället?",
    "options": [
      "De används tillsammans med andra skyltar, ofta på en tilläggstavla, för att visa vilken typ av fordon eller trafikant som regeln gäller eller inte gäller för.",
      "De används bara i körkortsboken för pedagogiskt syfte och finns aldrig i verkligheten.",
      "De ersätter helt vanliga vägmärken på smala vägar."
    ],
    "correct": 0,
    "hint": "Tänk på en förbudsskylt med en liten bild av en lastbil under sig, som preciserar att förbudet gäller just lastbilar.",
    "explanation": "Symboler (S) används tillsammans med andra vägmärken, oftast på en tilläggstavla under huvudmärket, för att ange att regeln gäller (eller inte gäller) en viss typ av fordon eller trafikant, till exempel tung lastbil eller gående.",
    "takeaway": "S-symboler preciserar vilka fordon eller trafikanter ett annat märkes regel gäller, via en tilläggstavla."
  },
  {
    "id": "book-signs-q49",
    "topic": "rules",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "signs",
    "bookUnitId": "book-signs",
    "bookPages": [345],
    "coverageIds": ["book-signs-t49"],
    "title": "Klass II: traktor/motorredskap och personbil",
    "situation": "Symbolerna S6 (traktor och motorredskap klass II) och S12 (personbil klass II) innehåller båda uttrycket 'klass II', men avser olika fordon. Vad är skillnaden?",
    "options": [
      "S6 avser jordbruks- och arbetsfordon som är konstruerade eller begränsade för en lägre toppfart (klass II), medan S12 avser en personbil klass II, det vill säga en så kallad A-traktor eller mopedbil med motsvarande hastighetsbegränsning.",
      "De två symbolerna betyder exakt samma sak och kan användas omväxlande.",
      "Klass II syftar i båda fallen på fordonets färg."
    ],
    "correct": 0,
    "hint": "Tänk på att 'klass II' är ett återkommande sätt att beteckna hastighetsbegränsade fordonsvarianter inom flera fordonsslag.",
    "explanation": "S6 (traktor och motorredskap klass II) och S12 (personbil klass II) representerar olika fordonsslag som båda har en klass II-variant med lägre konstruktiv hastighet. De är inte utbytbara symboler, utan preciserar olika fordonstyper.",
    "takeaway": "'Klass II' i fordonsbeteckningar syftar på en hastighetsbegränsad variant, men förekommer inom flera olika fordonsslag."
  },
  {
    "id": "book-signs-q50",
    "topic": "rules",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "signs",
    "bookUnitId": "book-signs",
    "bookPages": [346],
    "coverageIds": ["book-signs-t50"],
    "title": "Avstånd kontra avstånd till stopplikt",
    "situation": "Vad är skillnaden mellan tilläggstavlorna T2 (avstånd) och T3 (avstånd till stopplikt)?",
    "options": [
      "T2 anger det allmänna avståndet till det som huvudmärket varnar för eller upplyser om, medan T3 specifikt anger avståndet till en stopplikt längre fram, till exempel 'STOPP 200 m'.",
      "De två tilläggstavlorna betyder exakt samma sak.",
      "T3 anger en hastighetsbegränsning, inte ett avstånd."
    ],
    "correct": 0,
    "hint": "T3 har alltid ordet STOPP med i texten.",
    "explanation": "T2 (avstånd) anger i allmänhet hur långt det är kvar till det som huvudmärket gäller. T3 (avstånd till stopplikt) är en mer specifik variant som förvarnar om ett kommande stopplikts-märke och avståndet dit.",
    "takeaway": "T3 är en specialvariant av avståndstavlan som förvarnar specifikt om en stopplikt framöver."
  },
  {
    "id": "book-signs-q51",
    "topic": "rules",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "signs",
    "bookUnitId": "book-signs",
    "bookPages": [346],
    "coverageIds": ["book-signs-t51"],
    "title": "Fri bredd kontra totalvikt",
    "situation": "Vad är skillnaden mellan tilläggstavlorna T4 (fri bredd) och T5 (totalvikt)?",
    "options": [
      "T4 anger den högsta tillåtna bredden på ett fordon som får passera, till exempel vid en smal bro, medan T5 anger den högsta tillåtna totalvikten för fordon som får använda vägen eller platsen.",
      "De två tilläggstavlorna avser samma sak, bara mätt i olika enheter.",
      "T4 gäller bara cyklar, T5 gäller bara lastbilar."
    ],
    "correct": 0,
    "hint": "T4 anges i meter, T5 i ton.",
    "explanation": "T4 (fri bredd) anger den högsta tillåtna bredden för fordon som får passera, ofta vid en smal passage. T5 (totalvikt) anger i stället den högsta tillåtna totalvikten för fordon, till exempel på en bro med bärighetsbegränsning.",
    "takeaway": "Fri bredd begränsar fordonets bredd, totalvikt begränsar fordonets vikt, med olika mätenheter."
  },
  {
    "id": "book-signs-q52",
    "topic": "rules",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "signs",
    "bookUnitId": "book-signs",
    "bookPages": [346],
    "coverageIds": ["book-signs-t52"],
    "title": "Tidsangivelse med flera intervall",
    "situation": "Tilläggstavlan T6 (tidsangivelse) kan visa flera tidsintervall, ibland med ett inom parentes. Hur ska du tolka en sådan tavla, till exempel '8-17, (8-14), 8-13'?",
    "options": [
      "De olika raderna anger när regeln gäller under olika typer av dagar, till exempel vardagar, dag före sön- och helgdag inom parentes, och lördagar, så du måste veta vilken dag det är för att läsa av rätt rad.",
      "Du får välja fritt vilken av raderna som ska gälla för dig.",
      "Parentesen betyder att den raden inte gäller längre och kan ignoreras."
    ],
    "correct": 0,
    "hint": "Olika rader på en tidsangivelsetavla motsvarar ofta vardag, dag före sön-/helgdag och lördag.",
    "explanation": "En tidsangivelse (T6) med flera rader anger att regeln gäller olika tider beroende på vilken typ av dag det är, till exempel en tid för vardagar, en (ofta inom parentes) för dag före sön- och helgdag, och en för lördagar. Du behöver känna till dagens karaktär för att läsa rätt rad.",
    "takeaway": "En tidsangivelse med flera rader kräver att du vet vilken typ av dag det är för att läsa av rätt tidsintervall."
  },
  {
    "id": "book-signs-q53",
    "topic": "rules",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "signs",
    "bookUnitId": "book-signs",
    "bookPages": [346],
    "coverageIds": ["book-signs-t53"],
    "title": "Flervägsväjning kontra flervägsstopp",
    "situation": "Vad är skillnaden mellan tilläggstavlorna T13 (flervägsväjning) och T14 (flervägsstopp)?",
    "options": [
      "T13 anger att väjningsplikt gäller från flera håll i en korsning, medan T14 anger att stopplikt gäller från flera håll i korsningen, vilket är en strängare regel eftersom stopplikt alltid kräver att du stannar helt.",
      "De två tilläggstavlorna betyder exakt samma sak.",
      "T13 gäller bara cyklister, T14 gäller bara bilister."
    ],
    "correct": 0,
    "hint": "Tänk på skillnaden mellan väjningsplikt (B1) och stopplikt (B2): den ena kräver väjning, den andra ett fullständigt stopp.",
    "explanation": "T13 (flervägsväjning) innebär att väjningsplikt gäller från flera infarter i en korsning samtidigt. T14 (flervägsstopp) innebär på motsvarande sätt att stopplikt gäller från flera infarter, vilket kräver att alla berörda fordon stannar helt innan de kör vidare.",
    "takeaway": "Flervägsstopp är strängare än flervägsväjning, eftersom stopplikt alltid kräver ett fullständigt stopp."
  },
  {
    "id": "book-signs-q54",
    "topic": "rules",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "signs",
    "bookUnitId": "book-signs",
    "bookPages": [346],
    "coverageIds": ["book-signs-t54"],
    "title": "Vägars fortsättning i korsning",
    "situation": "Vad är syftet med tilläggstavlan T15 (vägars fortsättning i korsning)?",
    "options": [
      "Den visar i förväg hur vägarna fortsätter och hur korsningen är utformad, så att du kan förbereda dig på en oregelbunden eller oväntad korsningsform.",
      "Den visar att korsningen är helt avstängd för trafik.",
      "Den anger hastighetsbegränsningen i korsningen."
    ],
    "correct": 0,
    "hint": "Symbolen är en schematisk bild av hur vägarna möts i korsningen.",
    "explanation": "T15 (vägars fortsättning i korsning) ger en schematisk bild av hur vägarna är utformade i en kommande korsning, vilket är särskilt användbart när korsningen har en oregelbunden eller oväntad form.",
    "takeaway": "T15 förbereder dig på en korsnings faktiska utformning innan du når fram till den."
  },
  {
    "id": "book-signs-q55",
    "topic": "rules",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "signs",
    "bookUnitId": "book-signs",
    "bookPages": [347],
    "coverageIds": ["book-signs-t55"],
    "title": "Boende kontra P-biljett",
    "situation": "Vad är skillnaden mellan tilläggstavlorna T19 (boende) och T20 (P-biljett) under en parkeringsskylt?",
    "options": [
      "T19 anger att parkeringen är reserverad för eller undantagen för boende med särskilt tillstånd i området, medan T20 anger att du måste lösa och visa en parkeringsbiljett för att få parkera.",
      "De två tilläggstavlorna betyder exakt samma sak.",
      "T20 innebär att parkering är helt gratis."
    ],
    "correct": 0,
    "hint": "Den ena tavlan handlar om vem som får parkera, den andra om vad du måste göra för att få parkera.",
    "explanation": "T19 (boende) anger att en parkeringsregel är kopplad till boendeparkering, till exempel att endast boende med tillstånd får parkera eller att boende är undantagna en annan regel. T20 (P-biljett) anger i stället att du måste lösa och visa en parkeringsbiljett.",
    "takeaway": "Boende-tavlan gäller vem som får parkera, P-biljett-tavlan gäller ett krav på att lösa biljett."
  },
  {
    "id": "book-signs-q56",
    "topic": "safety",
    "kind": "Säkerhetsråd",
    "source": "book",
    "chapterId": "signs",
    "bookUnitId": "book-signs",
    "bookPages": [347],
    "coverageIds": ["book-signs-t56"],
    "title": "Tunnelkategori",
    "situation": "Vad anger tilläggstavlan T23 (tunnelkategori), till exempel med bokstaven B?",
    "options": [
      "Den anger tunnelns säkerhetskategori, vilket bland annat avgör vilka mängder och typer av farligt gods som får transporteras genom tunneln.",
      "Den anger hur många körfält tunneln har.",
      "Den anger tunnelns namn."
    ],
    "correct": 0,
    "hint": "Tunnelkategorier används särskilt för att reglera transport av farligt gods.",
    "explanation": "T23 (tunnelkategori) anger tunnelns säkerhetsklassificering med en bokstav. Kategorin styr bland annat vilka typer och mängder av farligt gods som får transporteras genom tunneln, eftersom olika tunnlar har olika förutsättningar för räddningsinsatser.",
    "takeaway": "Tunnelkategorin är särskilt viktig vid transport av farligt gods genom en tunnel."
  },
  {
    "id": "book-signs-q57",
    "topic": "environment",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "signs",
    "bookUnitId": "book-signs",
    "bookPages": [347],
    "coverageIds": ["book-signs-t57"],
    "title": "Laddplats som tilläggstavla",
    "situation": "Vad anger tilläggstavlan T24 (laddplats) i kombination med en parkeringsskylt?",
    "options": [
      "Att den aktuella parkeringsplatsen är avsedd eller reserverad för elfordon som laddar, inte för parkering i allmänhet.",
      "Att parkering är helt förbjuden på platsen.",
      "Att platsen bara får användas av tunga lastbilar."
    ],
    "correct": 0,
    "hint": "Symbolen visar en bil med laddsladd.",
    "explanation": "T24 (laddplats) som tilläggstavla till en parkeringsskylt anger att platsen är avsedd för elfordon som laddar, vilket skiljer den från vanliga parkeringsplatser utan laddningsmöjlighet.",
    "takeaway": "Laddplats-tavlan reserverar en parkeringsplats för laddning av elfordon, inte parkering i allmänhet."
  }
];

export const SIGNS_340_347_COVERAGE = [
  { id: "book-signs-t42", bookUnitId: "book-signs", pages: [340, 341], label: "G/H: allmänna inrättningar kontra serviceanläggningar", questionIds: ["book-signs-q42"], visualStatus: "reviewed" },
  { id: "book-signs-t43", bookUnitId: "book-signs", pages: [340], label: "G2: hjälptelefon för nödlarm", questionIds: ["book-signs-q43"], visualStatus: "reviewed" },
  { id: "book-signs-t44", bookUnitId: "book-signs", pages: [341], label: "H3/H4/H27: drivmedel, gas och laddning", questionIds: ["book-signs-q44"], visualStatus: "reviewed" },
  { id: "book-signs-t45", bookUnitId: "book-signs", pages: [341, 342], label: "H9/H11/H12: camping-, husvagns- och stugboende", questionIds: ["book-signs-q45"], visualStatus: "reviewed" },
  { id: "book-signs-t46", bookUnitId: "book-signs", pages: [342, 343], label: "H/I: blå service kontra brun turistmålsskylt", questionIds: ["book-signs-q46"], visualStatus: "reviewed" },
  { id: "book-signs-t47", bookUnitId: "book-signs", pages: [344], label: "J3: livsfarlig ledning, elfara ovanför vägen", questionIds: ["book-signs-q47"], visualStatus: "reviewed" },
  { id: "book-signs-t48", bookUnitId: "book-signs", pages: [345], label: "S-symbolernas funktion på tilläggstavlor", questionIds: ["book-signs-q48"], visualStatus: "reviewed" },
  { id: "book-signs-t49", bookUnitId: "book-signs", pages: [345], label: "S6/S12: klass II hos traktor/motorredskap och personbil", questionIds: ["book-signs-q49"], visualStatus: "reviewed" },
  { id: "book-signs-t50", bookUnitId: "book-signs", pages: [346], label: "T2/T3: avstånd kontra avstånd till stopplikt", questionIds: ["book-signs-q50"], visualStatus: "reviewed" },
  { id: "book-signs-t51", bookUnitId: "book-signs", pages: [346], label: "T4/T5: fri bredd kontra totalvikt", questionIds: ["book-signs-q51"], visualStatus: "reviewed" },
  { id: "book-signs-t52", bookUnitId: "book-signs", pages: [346], label: "T6: tidsangivelse med flera dagtyper", questionIds: ["book-signs-q52"], visualStatus: "reviewed" },
  { id: "book-signs-t53", bookUnitId: "book-signs", pages: [346], label: "T13/T14: flervägsväjning kontra flervägsstopp", questionIds: ["book-signs-q53"], visualStatus: "reviewed" },
  { id: "book-signs-t54", bookUnitId: "book-signs", pages: [346], label: "T15: vägars fortsättning i korsning", questionIds: ["book-signs-q54"], visualStatus: "reviewed" },
  { id: "book-signs-t55", bookUnitId: "book-signs", pages: [347], label: "T19/T20: boende kontra P-biljett", questionIds: ["book-signs-q55"], visualStatus: "reviewed" },
  { id: "book-signs-t56", bookUnitId: "book-signs", pages: [347], label: "T23: tunnelkategori och farligt gods", questionIds: ["book-signs-q56"], visualStatus: "reviewed" },
  { id: "book-signs-t57", bookUnitId: "book-signs", pages: [347], label: "T24: laddplats för elfordon", questionIds: ["book-signs-q57"], visualStatus: "reviewed" }
];

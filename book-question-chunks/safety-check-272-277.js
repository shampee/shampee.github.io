// PDF 272-273, 275-276. Reviewed source text, including the worked "Testa
// dina kunskaper" example on 275-276. PDF 274 is blank and PDF 277 is the
// next unit's title page ("Besiktning" / book-inspection), no content.
export const SAFETY_CHECK_272_277_QUESTIONS = [
  {
    "id": "book-safety-check-q1",
    "topic": "safety",
    "kind": "Säkerhetsråd",
    "source": "book",
    "chapterId": "vehicle",
    "bookUnitId": "book-safety-check",
    "bookPages": [272],
    "coverageIds": ["book-safety-check-t1"],
    "title": "Yttre säkerhetskontrollens första steg",
    "situation": "Vad är det första steget i den yttre säkerhetskontrollen?",
    "options": [
      "Tänd parkeringsbelysningen och kolla fram- och bakljus, reflexer och skyltlykta, och rengör vid behov.",
      "Slå på helljus och höger blinkers direkt.",
      "Be någon annan bromsa medan du kollar bromsljusen."
    ],
    "correct": 0,
    "hint": "Kontrollen börjar med den svagaste belysningen, inte den starkaste.",
    "explanation": "Yttre säkerhetskontroll, steg 1: Tänd parkeringsbelysningen och kolla fram- och bakljus, reflexer och skyltlykta. Rengör vid behov.",
    "takeaway": "Den yttre säkerhetskontrollen inleds med parkeringsbelysningen, inte med helljuset."
  },
  {
    "id": "book-safety-check-q2",
    "topic": "safety",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "vehicle",
    "bookUnitId": "book-safety-check",
    "bookPages": [272],
    "coverageIds": ["book-safety-check-t2"],
    "title": "Vad du kontrollerar på framhjulet",
    "situation": "Vid den yttre säkerhetskontrollens framhjulskontroll, vad ska du titta efter?",
    "options": [
      "Att mönsterdjupet ser bra ut, att däcket är runt och inte platt längst ner på grund av lågt lufttryck.",
      "Enbart att fälgen är ren och fri från smuts.",
      "Enbart att däckets tillverkningsdatum inte är äldre än fem år."
    ],
    "correct": 0,
    "hint": "Ett lufttrycksfel syns som en platthet längst ner på däcket.",
    "explanation": "På vänstersidan: kontrollera framhjul (ytligt — ser mönsterdjupet bra ut och är däcket runt och inte platt längst ner på grund av lågt lufttryck).",
    "takeaway": "En snabb okulärkontroll kollar mönsterdjup och om däcket är runt, inte plattat av lågt lufttryck."
  },
  {
    "id": "book-safety-check-q3",
    "topic": "safety",
    "kind": "Säkerhetsråd",
    "source": "book",
    "chapterId": "vehicle",
    "bookUnitId": "book-safety-check",
    "bookPages": [272],
    "coverageIds": ["book-safety-check-t3"],
    "title": "Att kontrollera bromsljusen",
    "situation": "Hur kontrollerar du att bromsljusen fungerar som en del av den yttre säkerhetskontrollen?",
    "options": [
      "Be någon annan bromsa samtidigt som du själv står bakom bilen och kollar att bromsljusen fungerar.",
      "Titta i en spegel på avstånd samtidigt som du själv trycker ner bromspedalen.",
      "Lita på att bromsljusen fungerar om bilen klarade besiktningen senast."
    ],
    "correct": 0,
    "hint": "Du behöver se ljuset bakifrån samtidigt som pedalen trycks ner.",
    "explanation": "Sista steget i yttre säkerhetskontroll: be någon annan att bromsa samtidigt som du själv står bakom bilen och kollar att bromsljusen fungerar.",
    "takeaway": "Bromsljusen kräver en andra person — en som bromsar medan du observerar bakifrån."
  },
  {
    "id": "book-safety-check-q4",
    "topic": "safety",
    "kind": "Säkerhetsråd",
    "source": "book",
    "chapterId": "vehicle",
    "bookUnitId": "book-safety-check",
    "bookPages": [272],
    "coverageIds": ["book-safety-check-t4"],
    "title": "Inre säkerhetskontrollens första steg",
    "situation": "Vad är det första steget i den inre säkerhetskontrollen?",
    "options": [
      "Inta korrekt körställning och kontrollera speglarna samt att dörrarna är stängda.",
      "Starta motorn direkt och vänta tills den blir varm.",
      "Tuta en gång för att kontrollera signalhornet."
    ],
    "correct": 0,
    "hint": "Innan du kan bedöma speglar och övrig funktion behöver du sitta rätt.",
    "explanation": "Inre säkerhetskontroll, steg 1: Inta korrekt körställning och kontrollera speglarna samt att dörrarna är stängda.",
    "takeaway": "Den inre säkerhetskontrollen börjar med rätt körställning, innan övriga kontroller görs."
  },
  {
    "id": "book-safety-check-q5",
    "topic": "safety",
    "kind": "Säkerhetsråd",
    "source": "book",
    "chapterId": "vehicle",
    "bookUnitId": "book-safety-check",
    "bookPages": [272],
    "coverageIds": ["book-safety-check-t5"],
    "title": "Att testa fotbromsen",
    "situation": "Hur testar du fotbromsen som en del av den inre säkerhetskontrollen, och vad ska det kännas som?",
    "options": [
      "Tryck ner fotbromsen hårt och håll kvar — det ska kännas stumt.",
      "Trampa snabbt flera korta tryck på bromsen — pedalen ska studsa tillbaka.",
      "Tryck ner bromsen mjukt en gång — pedalen ska kännas mjuk och fjädrande."
    ],
    "correct": 0,
    "hint": "En stum känsla visar att systemet är tätt och inte läcker.",
    "explanation": "Tryck ner fotbromsen hårt och håll kvar. Det ska kännas stumt.",
    "takeaway": "En stum, orörlig bromspedal vid hårt och ihållande tryck är tecknet på ett tätt bromssystem."
  },
  {
    "id": "book-safety-check-q6",
    "topic": "safety",
    "kind": "Säkerhetsråd",
    "source": "book",
    "chapterId": "vehicle",
    "bookUnitId": "book-safety-check",
    "bookPages": [272],
    "coverageIds": ["book-safety-check-t6"],
    "title": "Att testa broms- och styrservon",
    "situation": "Hur testar du att broms- och styrservon fungerar som en del av den inre säkerhetskontrollen?",
    "options": [
      "Vrid lite på ratten och starta bilen — du ska känna att servon fungerar genom att bromsen sjunker och ratten blir lätt att vrida.",
      "Kör i hög hastighet och gör en tvär inbromsning.",
      "Stäng av motorn helt och försök vrida ratten med full kraft."
    ],
    "correct": 0,
    "hint": "Testet sker precis i det ögonblick motorn startar.",
    "explanation": "Vrid lite på ratten och starta bilen. Du ska känna att broms- och styrservon fungerar (fungerar ifall bromsen sjunker och ratten blir lätt att vrida).",
    "takeaway": "Servons funktion märks genom att bromspedalen sjunker och ratten blir lätt precis vid motorstart."
  },
  {
    "id": "book-safety-check-q7",
    "topic": "safety",
    "kind": "Säkerhetsråd",
    "source": "book",
    "chapterId": "vehicle",
    "bookUnitId": "book-safety-check",
    "bookPages": [272],
    "coverageIds": ["book-safety-check-t7"],
    "title": "Att testa handbromsen",
    "situation": "Hur kontrollerar du att handbromsen fungerar som en del av den inre säkerhetskontrollen?",
    "options": [
      "Dra åt den och försök köra lite försiktigt framåt eller bakåt (eller genom att släppa den i en backe).",
      "Enbart titta på varningslampan på instrumentpanelen.",
      "Dra åt den medan bilen står i en helt plan uppfart utan att försöka köra."
    ],
    "correct": 0,
    "hint": "Du behöver faktiskt försöka sätta bilen i rörelse för att testa motståndet.",
    "explanation": "Kontrollera att handbromsen fungerar genom att dra åt den och försök köra lite försiktigt framåt eller bakåt (eller genom att släppa den i en backe).",
    "takeaway": "Handbromsen testas genom att faktiskt pröva om den håller emot en försiktig körrörelse."
  },
  {
    "id": "book-safety-check-q8",
    "topic": "safety",
    "kind": "Säkerhetsråd",
    "source": "book",
    "chapterId": "vehicle",
    "bookUnitId": "book-safety-check",
    "bookPages": [273],
    "coverageIds": ["book-safety-check-t8"],
    "title": "Att ställa in stolen",
    "situation": "Hur vet du att bilstolen är rätt inställd enligt bokens körställningsguide?",
    "options": [
      "Handlederna ska kunna vikas över ratten.",
      "Armarna ska vara helt raka och sträckta mot ratten.",
      "Knäna ska vara helt raka vid pedalerna."
    ],
    "correct": 0,
    "hint": "Testet görs genom att placera handlederna högst upp på ratten.",
    "explanation": "Körställning, steg 1: Ställ in stolen så att du sitter bra (handlederna ska kunna vikas över ratten).",
    "takeaway": "Rätt stolsavstånd kontrolleras genom att handlederna precis kan vikas över rattens topp."
  },
  {
    "id": "book-safety-check-q9",
    "topic": "safety",
    "kind": "Säkerhetsråd",
    "source": "book",
    "chapterId": "vehicle",
    "bookUnitId": "book-safety-check",
    "bookPages": [273],
    "coverageIds": ["book-safety-check-t9"],
    "title": "Att justera nackskyddet",
    "situation": "Var ska nackskyddet placeras, enligt körställningsguiden?",
    "options": [
      "Ungefär i mitten av bakhuvudet.",
      "Så lågt som möjligt, i nivå med nacken.",
      "Så högt som möjligt, ovanför hjässan."
    ],
    "correct": 0,
    "hint": "Jämför med kapitlet om krocksäkerhet, där nackskyddet beskrevs som ett viktigt skydd.",
    "explanation": "Körställning, steg 2: Justera nackskyddet så att det är placerat ungefär i mitten av bakhuvudet.",
    "takeaway": "Nackskyddet ställs in mot mitten av bakhuvudet, varken för lågt eller för högt."
  },
  {
    "id": "book-safety-check-q10",
    "topic": "safety",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "vehicle",
    "bookUnitId": "book-safety-check",
    "bookPages": [273],
    "coverageIds": ["book-safety-check-t10"],
    "title": "Körställningens ordning",
    "situation": "I vilken ordning gör du stolen, nackskyddet och speglarna enligt körställningsguiden?",
    "options": [
      "Först stolen, sedan nackskyddet, och därefter speglarna.",
      "Först speglarna, sedan stolen, och därefter nackskyddet.",
      "Ordningen spelar ingen roll, alla tre görs samtidigt."
    ],
    "correct": 0,
    "hint": "Speglarna justeras utifrån var huvudet faktiskt hamnar, så de bör komma sist av de tre.",
    "explanation": "Körställning: 1) Ställ in stolen. 2) Justera nackskyddet. 3) Justera inre backspegeln och de yttre sidospeglarna.",
    "takeaway": "Speglarna justeras sist av de tre, eftersom de beror på var stolen och huvudet hamnar."
  },
  {
    "id": "book-safety-check-q11",
    "topic": "rules",
    "kind": "Trafikregel",
    "source": "book",
    "chapterId": "vehicle",
    "bookUnitId": "book-safety-check",
    "bookPages": [275, 276],
    "coverageIds": ["book-safety-check-t11"],
    "title": "Minsta mönsterdjup på vinterdäck i januari",
    "situation": "Vilket är det minsta tillåtna mönsterdjupet på vinterdäck vid vinterväglag i januari?",
    "options": [
      "3,0 mm.",
      "1,6 mm.",
      "1,0 mm."
    ],
    "correct": 0,
    "hint": "Januari ligger inom perioden 1 december–31 mars, då vinterdäckslagen gäller.",
    "explanation": "Transportstyrelsen: ”Vid vinterväglag under perioden 1 december–31 mars ska mönsterdjupet vara minst 3 mm”.",
    "takeaway": "3 mm är minsta tillåtna mönsterdjup på vinterdäck under vinterväglagsperioden, alltså även i januari."
  }
];

export const SAFETY_CHECK_272_277_COVERAGE = [
  { id: "book-safety-check-t1", bookUnitId: "book-safety-check", pages: [272], label: "Yttre säkerhetskontrollens första steg", questionIds: ["book-safety-check-q1"], visualStatus: "not-needed" },
  { id: "book-safety-check-t2", bookUnitId: "book-safety-check", pages: [272], label: "Vad som kontrolleras på framhjulet", questionIds: ["book-safety-check-q2"], visualStatus: "not-needed" },
  { id: "book-safety-check-t3", bookUnitId: "book-safety-check", pages: [272], label: "Att kontrollera bromsljusen med hjälp av annan person", questionIds: ["book-safety-check-q3"], visualStatus: "not-needed" },
  { id: "book-safety-check-t4", bookUnitId: "book-safety-check", pages: [272], label: "Inre säkerhetskontrollens första steg", questionIds: ["book-safety-check-q4"], visualStatus: "not-needed" },
  { id: "book-safety-check-t5", bookUnitId: "book-safety-check", pages: [272], label: "Fotbromstestets stumma känsla", questionIds: ["book-safety-check-q5"], visualStatus: "not-needed" },
  { id: "book-safety-check-t6", bookUnitId: "book-safety-check", pages: [272], label: "Broms- och styrservotest vid motorstart", questionIds: ["book-safety-check-q6"], visualStatus: "not-needed" },
  { id: "book-safety-check-t7", bookUnitId: "book-safety-check", pages: [272], label: "Handbromstest genom försiktig körning", questionIds: ["book-safety-check-q7"], visualStatus: "not-needed" },
  { id: "book-safety-check-t8", bookUnitId: "book-safety-check", pages: [273], label: "Stolsinställning: handlederna över ratten", questionIds: ["book-safety-check-q8"], visualStatus: "not-needed" },
  { id: "book-safety-check-t9", bookUnitId: "book-safety-check", pages: [273], label: "Nackskyddet mitt i bakhuvudet", questionIds: ["book-safety-check-q9"], visualStatus: "not-needed" },
  { id: "book-safety-check-t10", bookUnitId: "book-safety-check", pages: [273], label: "Körställningens ordningsföljd", questionIds: ["book-safety-check-q10"], visualStatus: "not-needed" },
  { id: "book-safety-check-t11", bookUnitId: "book-safety-check", pages: [275, 276], label: "Minsta mönsterdjup vinterdäck i januari", questionIds: ["book-safety-check-q11"], visualStatus: "not-needed" }
];

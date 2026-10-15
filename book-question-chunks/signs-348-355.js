// PDF 348-355 (fourth subchunk of book-signs, PDF 324-361, a 38-page sign
// reference catalog). Reviewed source text and all sign illustrations.
// Covers trafiksignaler (SIG1-SIG18), vägmarkeringar (M1-M34), andra
// anordningar för anvisningar för trafiken (X1-X10), signaler vid
// korsning med järnväg eller spårväg (Y1-Y4), and tecken av vakt
// (V1-V3). This range leaves the roadside-sign catalog behind for
// traffic lights, road markings and temporary/guard signals, so
// questions test practical meaning and right-of-way consequences
// rather than pure sign recognition, while keeping the same
// comparison/grouping approach as the earlier subchunks.
export const SIGNS_348_355_QUESTIONS = [
  {
    "id": "book-signs-q58",
    "topic": "rules",
    "kind": "Trafikregel",
    "source": "book",
    "chapterId": "signs",
    "bookUnitId": "book-signs",
    "bookPages": [348],
    "coverageIds": ["book-signs-t58"],
    "title": "Röd och gul samtidigt",
    "situation": "Vad betyder det när trafiksignalen visar rött och gult ljus samtidigt (SIG2), precis innan den blir grön?",
    "options": [
      "Att du fortfarande måste stå still; kombinationen förbereder dig på att signalen strax blir grön, men du får inte köra förrän den är helt grön.",
      "Att du får köra försiktigt redan nu, eftersom gult har tänts.",
      "Att signalen är trasig och du ska köra som om det inte fanns någon signal."
    ],
    "correct": 0,
    "hint": "Jämför med hur SIG1 (röd) ensam redan innebär stopp.",
    "explanation": "Röd och gul samtidigt (SIG2) är en förberedelsefas inför grönt ljus. Du måste fortfarande stanna kvar och vänta tills signalen blir helt grön (SIG3) innan du får köra.",
    "takeaway": "Röd och gul tillsammans betyder fortfarande stopp, bara en förvarning om att grönt snart kommer."
  },
  {
    "id": "book-signs-q59",
    "topic": "rules",
    "kind": "Trafikregel",
    "source": "book",
    "chapterId": "signs",
    "bookUnitId": "book-signs",
    "bookPages": [348],
    "coverageIds": ["book-signs-t59"],
    "title": "Blinkande gult ljus i en trafiksignal",
    "situation": "Vad innebär det när en trafiksignal visar blinkande gult ljus (SIG5), till exempel nattetid?",
    "options": [
      "Att signalen inte styr trafiken för tillfället; du ska köra med extra försiktighet och tillämpa de väjningsregler som annars gäller i korsningen, till exempel högerregeln.",
      "Att du måste stanna helt, precis som vid fast rött ljus.",
      "Att du har fri väg utan att behöva ta hänsyn till korsande trafik."
    ],
    "correct": 0,
    "hint": "Blinkande gult används ofta när en signal stängs av under lugna timmar.",
    "explanation": "Blinkande gult ljus (SIG5) betyder att signalen tillfälligt inte styr trafiken. Du ska köra med extra försiktighet och använda de väjningsregler som annars skulle gälla i korsningen, till exempel högerregeln om inget annat anges.",
    "takeaway": "Blinkande gult är ingen stoppsignal, utan en uppmaning till extra försiktighet när signalen inte aktivt styr trafiken."
  },
  {
    "id": "book-signs-q60",
    "topic": "safety",
    "kind": "Säkerhetsråd",
    "source": "book",
    "chapterId": "signs",
    "bookUnitId": "book-signs",
    "bookPages": [348],
    "coverageIds": ["book-signs-t60"],
    "title": "Akustiska signaler för gående",
    "situation": "Vad är syftet med SIG6 (röd akustisk signal med långsam pulsfrekvens) och SIG7 (grön akustisk signal med snabb pulsfrekvens)?",
    "options": [
      "De hjälper synskadade gående att uppfatta om det är rött eller grönt ljus genom ljudets pulsfrekvens, utan att behöva se signalen.",
      "De är en siren som varnar om en nalkande utryckning.",
      "De används bara för att mäta trafikflödet i korsningen."
    ],
    "correct": 0,
    "hint": "Den ena pulserar långsamt (stopp), den andra snabbt (gå).",
    "explanation": "De akustiska signalerna (SIG6 röd, långsam puls; SIG7 grön, snabb puls) gör gångsignalen hörbar, vilket särskilt hjälper synskadade personer att uppfatta om de ska vänta eller kan gå, genom skillnaden i pulsfrekvens.",
    "takeaway": "Pulsfrekvensen i den akustiska signalen gör gångsignalens budskap tillgängligt även utan att se ljuset."
  },
  {
    "id": "book-signs-q61",
    "topic": "rules",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "signs",
    "bookUnitId": "book-signs",
    "bookPages": [348],
    "coverageIds": ["book-signs-t61"],
    "title": "Körfältssignaler: öppet, stängs snart eller stängt",
    "situation": "Ovanför ett körfält, till exempel på en motorväg med reversibla körfält, kan du se SIG10 (lodrätt streck eller pil), SIG11 (vågrätt streck) eller SIG12 (rött kryss). Vad betyder de i tur och ordning?",
    "options": [
      "Lodrätt streck eller pil betyder att körfältet är öppet och får användas, vågrätt streck betyder att körfältet snart stängs och du bör byta fält, och rött kryss betyder att körfältet är helt stängt och inte får användas.",
      "Alla tre symbolerna betyder samma sak: att körfältet är öppet.",
      "Rött kryss betyder att du måste köra i det körfältet."
    ],
    "correct": 0,
    "hint": "Tänk dig en gradvis övergång: öppet, varning om stängning, helt stängt.",
    "explanation": "SIG10 (lodrätt streck eller pil) visar att körfältet är öppet för trafik. SIG11 (vågrätt streck) varnar om att körfältet snart stängs, så du bör börja byta fält. SIG12 (rött kryss) betyder att körfältet är helt stängt och inte får användas.",
    "takeaway": "Lodrät symbol betyder öppet, vågrät symbol betyder stängs snart, och rött kryss betyder helt stängt körfält."
  },
  {
    "id": "book-signs-q62",
    "topic": "safety",
    "kind": "Säkerhetsråd",
    "source": "book",
    "chapterId": "signs",
    "bookUnitId": "book-signs",
    "bookPages": [349],
    "coverageIds": ["book-signs-t62"],
    "title": "Rött blinkande ljus kontra fast rött ljus",
    "situation": "Vad är skillnaden mellan SIG16 (rött blinkande ljus, två växelvis blinkande röda lampor) och SIG17 (rött fast ljus)?",
    "options": [
      "Båda innebär att du måste stanna, men det blinkande röda ljuset används till exempel vid järnvägskorsningar, rörliga broar och brandstationer, medan fast rött ljus är den vanliga kontinuerliga stoppsignalen.",
      "Blinkande rött ljus är bara en varning och kräver inte att du stannar.",
      "De två ljusen betyder helt olika saker: det ena stoppar trafiken, det andra ger fri väg."
    ],
    "correct": 0,
    "hint": "Tänk på var du sett två växelvis blinkande röda lampor tidigare, till exempel vid en järnvägsövergång.",
    "explanation": "Både SIG16 och SIG17 innebär att du måste stanna. SIG16 (två växelvis blinkande röda lampor) används ofta vid särskilda faror som järnvägskorsningar, rörliga broar eller utryckning från en brandstation, medan SIG17 är den vanliga fasta röda stoppsignalen.",
    "takeaway": "Både blinkande och fast rött ljus kräver att du stannar; blinkande rött används ofta vid särskilda riskplatser."
  },
  {
    "id": "book-signs-q63",
    "topic": "rules",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "signs",
    "bookUnitId": "book-signs",
    "bookPages": [350],
    "coverageIds": ["book-signs-t63"],
    "title": "Heldragen linje kontra mittlinje",
    "situation": "Vad är skillnaden mellan M1 (mittlinje eller körfältslinje, streckad) och M8 (heldragen linje)?",
    "options": [
      "M1 är en streckad linje som normalt får korsas, till exempel vid omkörning, medan M8 är en heldragen linje som du inte får korsa eller köra på, till exempel vid skymd sikt.",
      "De två linjerna betyder exakt samma sak, bara olika breda.",
      "M8 gäller bara cyklister, M1 gäller bara bilister."
    ],
    "correct": 0,
    "hint": "Tänk på skillnaden mellan en streckad och en heldragen linje du mött i praktiken.",
    "explanation": "M1 (mittlinje eller körfältslinje) är streckad och får normalt korsas, till exempel vid omkörning. M8 (heldragen linje) markerar i stället att linjen inte får korsas eller köras på, ofta där sikten är skymd eller omkörning är farlig.",
    "takeaway": "Streckad linje får normalt korsas, heldragen linje får inte korsas."
  },
  {
    "id": "book-signs-q64",
    "topic": "safety",
    "kind": "Säkerhetsråd",
    "source": "book",
    "chapterId": "signs",
    "bookUnitId": "book-signs",
    "bookPages": [350],
    "coverageIds": ["book-signs-t64"],
    "title": "Varningslinjen som förvarning",
    "situation": "Vad är syftet med M3 (varningslinje), som har längre streck och kortare mellanrum än den vanliga mittlinjen?",
    "options": [
      "Den varnar om att en heldragen linje, där omkörning är förbjuden, börjar strax därefter, så du bör inte påbörja en omkörning.",
      "Den innebär att du måste sänka hastigheten till 30 km/h.",
      "Den visar var en cykelöverfart börjar."
    ],
    "correct": 0,
    "hint": "Tänk på att varningslinjen fungerar som en förvarning, ungefär som en gul triangel varnar för en fara.",
    "explanation": "M3 (varningslinje) har längre streck än den vanliga mittlinjen och varnar om att en heldragen linje strax följer. Du bör alltså inte påbörja en omkörning när du kör på eller möter en varningslinje.",
    "takeaway": "Varningslinjen signalerar att en omkörningsförbjudande heldragen linje är på väg."
  },
  {
    "id": "book-signs-q65",
    "topic": "rules",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "signs",
    "bookUnitId": "book-signs",
    "bookPages": [350],
    "coverageIds": ["book-signs-t65"],
    "title": "Spärrområde",
    "situation": "Vad betyder M9 (spärrområde), markerat med ett skraffyrat eller strimmigt fält på vägbanan?",
    "options": [
      "Att du inte får köra in i eller stanna på det markerade området, till exempel där körfält delar sig eller möts.",
      "Att området är reserverat för gående att gå på.",
      "Att du måste parkera inom området om du behöver stanna."
    ],
    "correct": 0,
    "hint": "Spärrområden finns ofta där ett körfält delar sig i två eller där påfarter möter huvudkörbanan.",
    "explanation": "M9 (spärrområde) markerar ett område på vägbanan som du inte får köra in på eller stanna inom, till exempel där körfält delar sig eller möts och där körning genom området skulle vara farlig eller förvirrande för andra trafikanter.",
    "takeaway": "Ett spärrområde är förbjudet att köra in i eller stanna på, inte en plats att använda som körfält."
  },
  {
    "id": "book-signs-q66",
    "topic": "rules",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "signs",
    "bookUnitId": "book-signs",
    "bookPages": [351],
    "coverageIds": ["book-signs-t66"],
    "title": "Stopplinje kontra väjningslinje",
    "situation": "Vad är skillnaden mellan M13 (stopplinje, ett heldraget tvärgående streck) och M14 (väjningslinje, en rad trianglar)?",
    "options": [
      "M13 visar var du ska stanna helt vid stopplikt, medan M14 visar var du ska lämna företräde vid väjningsplikt, utan att nödvändigtvis behöva stanna helt om vägen är fri.",
      "De två linjerna betyder exakt samma sak.",
      "M14 gäller bara vid rödljus, M13 gäller bara vid vägarbete."
    ],
    "correct": 0,
    "hint": "Jämför med skillnaden mellan B1 (väjningsplikt) och B2 (stopplikt): den ena kräver stopp, den andra bara väjning.",
    "explanation": "M13 (stopplinje) markerar var du ska stanna fordonet vid stopplikt. M14 (väjningslinje, en rad trianglar) markerar i stället var du ska lämna företräde vid väjningsplikt, men du behöver inte stanna helt om vägen är fri från korsande trafik.",
    "takeaway": "Stopplinjen hör ihop med stopplikt (alltid stanna), väjningslinjen med väjningsplikt (lämna företräde, stanna vid behov)."
  },
  {
    "id": "book-signs-q67",
    "topic": "rules",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "signs",
    "bookUnitId": "book-signs",
    "bookPages": [351],
    "coverageIds": ["book-signs-t67"],
    "title": "Cykelpassage eller cykelöverfart: samma markering, olika regler",
    "situation": "M16 kallas 'cykelpassage eller cykelöverfart' och har samma streckade ruta på vägbanan i båda fallen. Vad avgör om det är en cykelpassage eller en cykelöverfart, och varför spelar det roll?",
    "options": [
      "Det är de omgivande vägmärkena, till exempel B8 (cykelöverfart) tillsammans med väjningsplikt för bilister, som avgör vilken typ det är; vid en cykelöverfart markerad på det sättet har cyklister företräde, medan en vanlig cykelpassage inte ger cyklister automatiskt företräde.",
      "Markeringen själv avgör typen beroende på hur bred rutan är.",
      "Det är bara en stilistisk skillnad utan praktisk betydelse för vem som har företräde."
    ],
    "correct": 0,
    "hint": "Tänk tillbaka på B8 (cykelöverfart) bland väjningspliktsmärkena tidigare i detta kapitel.",
    "explanation": "Markeringen M16 är densamma, men det är de omgivande vägmärkena som avgör om platsen är en cykelöverfart (där bilister har väjningsplikt mot cyklister, markerad med B8 och väjningspliktsmärken för fordon) eller en vanlig cykelpassage (där cyklister inte automatiskt har företräde).",
    "takeaway": "Samma vägmarkering kan vara en cykelöverfart eller en cykelpassage beroende på omgivande skyltning, vilket avgör vem som har företräde."
  },
  {
    "id": "book-signs-q68",
    "topic": "rules",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "signs",
    "bookUnitId": "book-signs",
    "bookPages": [351],
    "coverageIds": ["book-signs-t68"],
    "title": "Cykelbox vid trafiksignal",
    "situation": "Vad är syftet med M17a (cykelbox), en markerad yta framför bilarnas stopplinje vid en trafiksignal?",
    "options": [
      "Den ger cyklister en egen väntplats framför de andra fordonen vid rött ljus, vilket gör cyklisterna mer synliga och ger dem ett försprång när signalen blir grön.",
      "Den är en parkeringsplats reserverad för cyklar under hela dygnet.",
      "Den innebär att cyklister måste vänta bakom alla andra fordon."
    ],
    "correct": 0,
    "hint": "Tänk på var stopplinjen för bilar respektive cyklar är placerad i förhållande till varandra.",
    "explanation": "M17a (cykelbox) är en markerad yta mellan bilarnas stopplinje och korsningen, där cyklister kan vänta väl synliga framför biltrafiken vid rött ljus och få ett försprång när signalen blir grön.",
    "takeaway": "Cykelboxen ger cyklister en säker, synlig väntplats längst fram vid en trafiksignal."
  },
  {
    "id": "book-signs-q69",
    "topic": "rules",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "signs",
    "bookUnitId": "book-signs",
    "bookPages": [351],
    "coverageIds": ["book-signs-t69"],
    "title": "Gult sicksackmönster: stanna och parkera i kombination",
    "situation": "Vägmarkeringarna M21 (gul heldragen linje, förbud mot att stanna och parkera), M22 (gul streckad linje, förbud mot att parkera) och M23 (gult sicksackmönster) finns alla längs körbanans kant. Vad betyder sicksackmönstret i M23?",
    "options": [
      "Att både förbudet mot att stanna och förbudet mot att parkera gäller på samma sträcka, alltså en kombination av M21 och M22.",
      "Att markeringen bara är dekorativ utan juridisk betydelse.",
      "Att du får parkera fritt på sträckan."
    ],
    "correct": 0,
    "hint": "Tänk på att M23:s namn uttryckligen nämner både 'stanna' och 'parkera'.",
    "explanation": "M23 (gult sicksackmönster) markerar att både förbudet mot att stanna och parkera (som M21 ensam visar) och förbudet mot att bara parkera (som M22 ensam visar) gäller på samma sträcka, alltså den strängaste kombinationen av de två.",
    "takeaway": "Sicksackmönstret i M23 kombinerar förbuden mot att både stanna och parkera på samma kantmarkering."
  },
  {
    "id": "book-signs-q70",
    "topic": "safety",
    "kind": "Säkerhetsråd",
    "source": "book",
    "chapterId": "signs",
    "bookUnitId": "book-signs",
    "bookPages": [353],
    "coverageIds": ["book-signs-t70"],
    "title": "Markeringsskärmar för hinder",
    "situation": "Vad är skillnaden mellan X2 (markeringsskärm för hinder) och X3 (markeringsskärm för sidohinder, farthinder med mera)?",
    "options": [
      "X2 markerar ett hinder du möter rakt framifrån, till exempel mitt i vägbanan, medan X3 markerar ett hinder vid sidan av vägen eller ett farthinder, med en annan randmönster för att visa riktningen att hålla sig till.",
      "De två skärmarna betyder exakt samma sak.",
      "X3 används bara för att markera vägarbeten på motorväg."
    ],
    "correct": 0,
    "hint": "Tänk på de gul-blå randiga skärmarna du sett vid vägarbeten, och hur deras ränder pekar åt olika håll.",
    "explanation": "X2 (markeringsskärm för hinder) varnar för ett hinder mitt i vägbanan. X3 (markeringsskärm för sidohinder, farthinder med mera) varnar i stället för hinder vid sidan av vägen eller farthinder, med ett randmönster som visar vilken väg du ska hålla dig till.",
    "takeaway": "Randmönstrets riktning på markeringsskärmen visar om hindret är rakt fram eller vid sidan av vägen."
  },
  {
    "id": "book-signs-q71",
    "topic": "safety",
    "kind": "Säkerhetsråd",
    "source": "book",
    "chapterId": "signs",
    "bookUnitId": "book-signs",
    "bookPages": [353],
    "coverageIds": ["book-signs-t71"],
    "title": "Särskild varningsanordning för olycka",
    "situation": "Vad är syftet med X6 (särskild varningsanordning), en orange triangel med texten 'Olycka'?",
    "options": [
      "Den varnar tillfälligt för en olycka längre fram på vägen, till exempel satt ut av räddningstjänsten eller andra trafikanter, innan ett permanent varningsmärke hunnit sättas upp.",
      "Den innebär att vägen är permanent avstängd.",
      "Den visar vägen till närmaste akutsjukhus."
    ],
    "correct": 0,
    "hint": "Tänk på att en olycka kan inträffa plötsligt, innan ett ordinarie vägmärke hinner sättas upp.",
    "explanation": "X6 (särskild varningsanordning) används för att snabbt varna trafikanter om en olycka eller annan akut fara längre fram, till exempel satt ut av räddningstjänsten innan en mer permanent skyltning kan ordnas.",
    "takeaway": "X6 är en tillfällig, snabbt utsatt varning för en olycka, inte ett permanent vägmärke."
  },
  {
    "id": "book-signs-q72",
    "topic": "rules",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "signs",
    "bookUnitId": "book-signs",
    "bookPages": [353],
    "coverageIds": ["book-signs-t72"],
    "title": "Cirkulationstrafik vid vägarbete",
    "situation": "Vad visar X9 (cirkulationstrafik), en blå skärm med vita pilar, vid till exempel ett vägarbete?",
    "options": [
      "Den visar hur trafiken ska ledas förbi hindret, till exempel vilket körfält som ska användas och i vilken riktning.",
      "Den innebär att du har kommit in i en cirkulationsplats.",
      "Den visar att vägarbetet är avslutat."
    ],
    "correct": 0,
    "hint": "Tänk på hur trafiken ofta måste ledas om vid ett vägarbete för att komma förbi säkert.",
    "explanation": "X9 (cirkulationstrafik) visar med pilar hur trafiken ska ledas förbi ett hinder, till exempel ett vägarbete, genom att ange vilket körfält eller vilken riktning du ska följa.",
    "takeaway": "Cirkulationstrafik-skärmen leder trafiken runt ett tillfälligt hinder, den anger inte en cirkulationsplats."
  },
  {
    "id": "book-signs-q73",
    "topic": "safety",
    "kind": "Säkerhetsråd",
    "source": "book",
    "chapterId": "signs",
    "bookUnitId": "book-signs",
    "bookPages": [354],
    "coverageIds": ["book-signs-t73"],
    "title": "Signaler vid järnvägskorsning",
    "situation": "Vid en järnvägskorsning kan du möta Y1 (rött blinkande ljus), Y2 (ljudsignal) och Y3 (bom). Vad ska du göra om någon av dessa aktiveras?",
    "options": [
      "Du måste stanna och inte köra in på spårområdet; alla tre signalerar att tåg är på väg, oavsett om bommen hunnit fällas ner än.",
      "Du behöver bara stanna om bommen redan är helt nedfälld.",
      "Ljudsignalen ensam kan ignoreras om du inte ser något tåg."
    ],
    "correct": 0,
    "hint": "Tänk på att bommen kan vara på väg ner, medan ljus och ljud redan varnar om tåget.",
    "explanation": "Rött blinkande ljus (Y1), ljudsignal (Y2) och bom (Y3) varnar alla om att ett tåg närmar sig. Du måste stanna och vänta, oavsett i vilken ordning signalerna aktiveras; kör aldrig in på spårområdet när någon av dem är aktiv.",
    "takeaway": "Alla tre järnvägssignalerna kräver att du stannar; vänta inte på att bara bommen ska vara nere."
  },
  {
    "id": "book-signs-q74",
    "topic": "rules",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "signs",
    "bookUnitId": "book-signs",
    "bookPages": [354],
    "coverageIds": ["book-signs-t74"],
    "title": "Plankorsningsskärm",
    "situation": "Vad visar Y4 (plankorsningsskärm), en skärm med blått och vitt rutmönster uppsatt vid spåret?",
    "options": [
      "Den markerar själva platsen för plankorsningen, så att du som förare tydligt ser var spåret korsar vägen.",
      "Den innebär att korsningen är permanent stängd för trafik.",
      "Den visar hastighetsbegränsningen för tåget."
    ],
    "correct": 0,
    "hint": "Jämför med hur en avfartsskärm (X4) tydliggör var en avfart börjar.",
    "explanation": "Y4 (plankorsningsskärm) markerar tydligt platsen där järnvägsspåret korsar vägen, så att du som förare lätt kan se var plankorsningen finns, särskilt i dåligt väder eller mörker.",
    "takeaway": "Plankorsningsskärmen pekar ut själva korsningspunkten mellan väg och järnväg."
  },
  {
    "id": "book-signs-q75",
    "topic": "rules",
    "kind": "Trafikregel",
    "source": "book",
    "chapterId": "signs",
    "bookUnitId": "book-signs",
    "bookPages": [355],
    "coverageIds": ["book-signs-t75"],
    "title": "Vaktens tecken går före andra anvisningar",
    "situation": "En vakt ger tecken för stopp (V1) i en korsning där trafiksignalen samtidigt visar grönt. Vilken anvisning ska du följa?",
    "options": [
      "Vaktens tecken, eftersom tecken av vakt eller polis alltid går före både vägmärken och trafiksignaler.",
      "Trafiksignalen, eftersom den är en fast installation och därför mer tillförlitlig.",
      "Du får själv välja vilken anvisning som passar bäst för din situation."
    ],
    "correct": 0,
    "hint": "Tänk på rangordningen mellan tecken av vakt eller polis, trafiksignaler och vägmärken.",
    "explanation": "Tecken av vakt eller polis (V) har alltid företräde framför både trafiksignaler och vägmärken. Om en vakt visar stopp (V1) måste du stanna, även om trafiksignalen samtidigt visar grönt.",
    "takeaway": "En vakts eller polis tecken går alltid före trafiksignaler och vägmärken, oavsett vad de visar."
  },
  {
    "id": "book-signs-q76",
    "topic": "rules",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "signs",
    "bookUnitId": "book-signs",
    "bookPages": [355],
    "coverageIds": ["book-signs-t76"],
    "title": "Vaktens kroppsställning visar din färdriktning",
    "situation": "Hur vet du vilken riktning en vakt tillåter dig att köra i, när flera fordon från olika håll möts vid en vaktstyrd plats?",
    "options": [
      "Vaktens kroppsställning, alltså vilken sida av kroppen som är vänd mot dig, visar vilken färdriktning som gäller för just ditt fordon.",
      "Alla fordon från alla riktningar får köra samtidigt när vakten syns.",
      "Du måste fråga vakten muntligt innan du kör."
    ],
    "correct": 0,
    "hint": "Tänk på hur bilen i bokens illustration pekas ut beroende på vilken sida av vaktens kropp som vänds mot den.",
    "explanation": "En vakts kroppsställning anger vilken färdriktning som är tillåten. Fordon som vakten vänder sidan mot kan få köra fram, medan fordon som vakten vänder bröst eller rygg mot ska stanna, så du måste läsa av vaktens kroppsställning i förhållande till ditt eget fordon.",
    "takeaway": "Det är vaktens kroppsställning i förhållande till ditt fordon, inte bara handrörelser, som avgör om du får köra."
  }
];

export const SIGNS_348_355_COVERAGE = [
  { id: "book-signs-t58", bookUnitId: "book-signs", pages: [348], label: "SIG1-SIG4: rött, rött+gult, grönt, gult", questionIds: ["book-signs-q58"], visualStatus: "reviewed" },
  { id: "book-signs-t59", bookUnitId: "book-signs", pages: [348], label: "SIG5: blinkande gult, signalen styr inte", questionIds: ["book-signs-q59"], visualStatus: "reviewed" },
  { id: "book-signs-t60", bookUnitId: "book-signs", pages: [348], label: "SIG6/SIG7: akustiska gångsignaler", questionIds: ["book-signs-q60"], visualStatus: "reviewed" },
  { id: "book-signs-t61", bookUnitId: "book-signs", pages: [348], label: "SIG10/SIG11/SIG12: körfältssignaler", questionIds: ["book-signs-q61"], visualStatus: "reviewed" },
  { id: "book-signs-t62", bookUnitId: "book-signs", pages: [349], label: "SIG16/SIG17: blinkande kontra fast rött ljus", questionIds: ["book-signs-q62"], visualStatus: "reviewed" },
  { id: "book-signs-t63", bookUnitId: "book-signs", pages: [350], label: "M1/M8: streckad kontra heldragen linje", questionIds: ["book-signs-q63"], visualStatus: "reviewed" },
  { id: "book-signs-t64", bookUnitId: "book-signs", pages: [350], label: "M3: varningslinje inför heldragen linje", questionIds: ["book-signs-q64"], visualStatus: "reviewed" },
  { id: "book-signs-t65", bookUnitId: "book-signs", pages: [350], label: "M9: spärrområde", questionIds: ["book-signs-q65"], visualStatus: "reviewed" },
  { id: "book-signs-t66", bookUnitId: "book-signs", pages: [351], label: "M13/M14: stopplinje kontra väjningslinje", questionIds: ["book-signs-q66"], visualStatus: "reviewed" },
  { id: "book-signs-t67", bookUnitId: "book-signs", pages: [351], label: "M16: cykelpassage eller cykelöverfart", questionIds: ["book-signs-q67"], visualStatus: "reviewed" },
  { id: "book-signs-t68", bookUnitId: "book-signs", pages: [351], label: "M17a: cykelbox vid trafiksignal", questionIds: ["book-signs-q68"], visualStatus: "reviewed" },
  { id: "book-signs-t69", bookUnitId: "book-signs", pages: [351], label: "M21/M22/M23: gula kantmarkeringar", questionIds: ["book-signs-q69"], visualStatus: "reviewed" },
  { id: "book-signs-t70", bookUnitId: "book-signs", pages: [353], label: "X2/X3: markeringsskärmar för hinder", questionIds: ["book-signs-q70"], visualStatus: "reviewed" },
  { id: "book-signs-t71", bookUnitId: "book-signs", pages: [353], label: "X6: tillfällig olycksvarning", questionIds: ["book-signs-q71"], visualStatus: "reviewed" },
  { id: "book-signs-t72", bookUnitId: "book-signs", pages: [353], label: "X9: cirkulationstrafik vid hinder", questionIds: ["book-signs-q72"], visualStatus: "reviewed" },
  { id: "book-signs-t73", bookUnitId: "book-signs", pages: [354], label: "Y1/Y2/Y3: järnvägskorsningens signaler", questionIds: ["book-signs-q73"], visualStatus: "reviewed" },
  { id: "book-signs-t74", bookUnitId: "book-signs", pages: [354], label: "Y4: plankorsningsskärm", questionIds: ["book-signs-q74"], visualStatus: "reviewed" },
  { id: "book-signs-t75", bookUnitId: "book-signs", pages: [355], label: "V1: vaktens tecken går före signal och skylt", questionIds: ["book-signs-q75"], visualStatus: "reviewed" },
  { id: "book-signs-t76", bookUnitId: "book-signs", pages: [355], label: "V3: vaktens kroppsställning visar färdriktning", questionIds: ["book-signs-q76"], visualStatus: "reviewed" }
];

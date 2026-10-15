// PDF 14–21. Original scenarios, with reviewed diagrams and exact page references.
export const LANES_QUESTIONS = [
  {
    "id": "book-lanes-q01",
    "topic": "rules",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "positioning",
    "bookUnitId": "book-lanes",
    "bookPages": [
      14,
      20
    ],
    "coverageIds": [
      "book-lanes-t1"
    ],
    "title": "Körfält utan linjer",
    "situation": "En körbana saknar vägmarkeringar men har ett längsgående utrymme där fyrhjuliga fordon kan framföras i en fil med rimliga säkerhetsmarginaler. Räknas utrymmet som ett körfält?",
    "options": [
      "Ja, ett körfält kan finnas även utan vägmarkeringar.",
      "Nej, ett körfält måste avgränsas med målade linjer.",
      "Bara om trafiken är enkelriktad."
    ],
    "correct": 0,
    "hint": "Linjer är ett sätt att avgränsa körfält, men inte det enda.",
    "explanation": "Körfält kan vara markerade eller omarkerade. Utan markeringar avgör det användbara utrymmet för en fil med fyrhjuliga fordon om ett körfält finns.",
    "takeaway": "Avsaknad av linjer betyder inte avsaknad av körfält."
  },
  {
    "id": "book-lanes-q02",
    "topic": "rules",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "positioning",
    "bookUnitId": "book-lanes",
    "bookPages": [
      20
    ],
    "coverageIds": [
      "book-lanes-t2"
    ],
    "title": "Bredd med säkerhetsmarginaler",
    "situation": "På en omarkerad körbana kan fyra bilar precis ställas bredvid varandra, men mellanrummen blir bara omkring tio centimeter. Två bilar kan däremot framföras bredvid varandra med rimliga säkerhetsmarginaler. Hur ska bredden bedömas?",
    "options": [
      "Som fyra körfält, eftersom fyra bilar rent fysiskt får plats.",
      "Som två körfält, eftersom körfälten måste medge normal och säker körning.",
      "Som ett körfält, eftersom vägmarkeringar saknas."
    ],
    "correct": 1,
    "hint": "Att få plats är inte samma sak som att kunna köra säkert.",
    "explanation": "Bedömningen ska inkludera rimliga säkerhetsmarginaler mellan fordonen. Fyra tätt packade bilar visar därför inte att körbanan har fyra körfält.",
    "takeaway": "Räkna användbar körbredd, inte maximal packning av bilar."
  },
  {
    "id": "book-lanes-q03",
    "topic": "safety",
    "kind": "Säkerhetsråd",
    "source": "book",
    "chapterId": "positioning",
    "bookUnitId": "book-lanes",
    "bookPages": [
      14
    ],
    "coverageIds": [
      "book-lanes-t3"
    ],
    "title": "Normal placering",
    "situation": "Du kör rakt fram i ett körfält. Sikten är god och inget möte, ingen sväng eller annan omständighet motiverar en särskild sidoplacering. Var ska bilen placeras?",
    "options": [
      "Nära körfältets vänsterkant.",
      "Nära körfältets högerkant.",
      "I mitten av körfältet."
    ],
    "correct": 2,
    "hint": "Utgå från grundplaceringen när inget kräver en anpassning.",
    "explanation": "Grundregeln är att placera bilen mitt i det egna körfältet. Sidoplaceringarna är anpassningar till särskilda förhållanden.",
    "takeaway": "Mitten av körfältet är grundplaceringen."
  },
  {
    "id": "book-lanes-q04",
    "topic": "safety",
    "kind": "Säkerhetsråd",
    "source": "book",
    "chapterId": "positioning",
    "bookUnitId": "book-lanes",
    "bookPages": [
      14
    ],
    "coverageIds": [
      "book-lanes-t4"
    ],
    "title": "Möte med ett brett fordon",
    "situation": "Du möter ett brett fordon på en väg med ett körfält i vardera riktningen. Vilken anpassning kan vara lämplig?",
    "options": [
      "Placera dig något åt höger i ditt körfält och kontrollera särskilt gående och hinder vid höger vägkant.",
      "Placera dig nära vänsterkanten för att öka avståndet till vägkanten.",
      "Placera dig åt höger utan att kontrollera vägkanten, eftersom mötet är den enda risken."
    ],
    "correct": 0,
    "hint": "Mer utrymme mot mötande trafik kan ge mindre utrymme mot vägkanten.",
    "explanation": "Högerplacering kan ge större avstånd till det breda mötande fordonet. Samtidigt måste du vara mycket uppmärksam på gående och hinder längs höger vägkant.",
    "takeaway": "Anpassa för mötet utan att förbise riskerna vid vägkanten."
  },
  {
    "id": "book-lanes-q05",
    "topic": "safety",
    "kind": "Säkerhetsråd",
    "source": "book",
    "chapterId": "positioning",
    "bookUnitId": "book-lanes",
    "bookPages": [
      14
    ],
    "coverageIds": [
      "book-lanes-t5"
    ],
    "title": "Tät skog längs en rak väg",
    "situation": "Du kör på en rak väg genom tät skog. Sikten framåt är god, men sikten åt sidorna är dålig. Det finns ingen mötande trafik och ingen skymd kurva där mötande trafik plötsligt kan dyka upp. Vilken placering kan vara lämplig?",
    "options": [
      "Nära högerkanten för att komma närmare skogen.",
      "Till vänster inom det egna körfältet.",
      "Över mittlinjen, eftersom sikten framåt är god."
    ],
    "correct": 1,
    "hint": "Skilj mellan vänsterplacering inom körfältet och att lämna körfältet.",
    "explanation": "Vid god sikt framåt och dålig sidosikt kan vänsterplacering inom det egna körfältet vara lämplig. Den ska undvikas när mötande trafik finns eller plötsligt kan komma.",
    "takeaway": "Vänsterplacering vid dålig sidosikt kräver att mötesrisken beaktas."
  },
  {
    "id": "book-lanes-q06",
    "topic": "safety",
    "kind": "Säkerhetsråd",
    "source": "book",
    "chapterId": "positioning",
    "bookUnitId": "book-lanes",
    "bookPages": [
      14
    ],
    "coverageIds": [
      "book-lanes-t6"
    ],
    "title": "Skymd kurva",
    "situation": "Du närmar dig en kurva där du inte kan se om det finns mötande trafik eller hinder längs vägkanten bakom kurvan. Hur bör du anpassa körningen?",
    "options": [
      "Behåll hastigheten och kör nära vänsterkanten.",
      "Behåll hastigheten och kör nära högerkanten.",
      "Sänk hastigheten och placera bilen mitt i det egna körfältet."
    ],
    "correct": 2,
    "hint": "Du behöver marginaler både mot mötande trafik och mot vägkanten.",
    "explanation": "Bakom kurvan kan både mötande trafik och hinder finnas. Lägre hastighet och mittplacering är därför den angivna anpassningen.",
    "takeaway": "Vid skymd kurva: sänk farten och välj mittplacering."
  },
  {
    "id": "book-lanes-q07",
    "topic": "rules",
    "kind": "Trafikregel",
    "source": "book",
    "chapterId": "positioning",
    "bookUnitId": "book-lanes",
    "bookPages": [
      15
    ],
    "coverageIds": [
      "book-lanes-t7"
    ],
    "title": "Inför vänstersväng på dubbelriktad väg",
    "situation": "Du ska svänga vänster från en dubbelriktad väg med ett körfält i vardera riktningen. Ingen särskild körfältsanvisning gäller. Hur placerar du bilen inför svängen?",
    "options": [
      "Så nära vänsterkanten av ditt körfält som möjligt, utan att hindra mötande trafik.",
      "Så nära vänsterkanten av hela körbanan som möjligt, även i mötandes körfält.",
      "Så nära högerkanten av körbanan som möjligt."
    ],
    "correct": 0,
    "hint": "På en dubbelriktad väg gäller placeringen ditt eget körfält.",
    "explanation": "Inför vänstersväng ska du ligga nära det egna körfältets vänsterkant. Placeringen får inte hindra mötande trafik.",
    "takeaway": "Vänstersväng innebär inte att du får ta mötandes utrymme."
  },
  {
    "id": "book-lanes-q08",
    "topic": "rules",
    "kind": "Trafikregel",
    "source": "book",
    "chapterId": "positioning",
    "bookUnitId": "book-lanes",
    "bookPages": [
      15
    ],
    "coverageIds": [
      "book-lanes-t8"
    ],
    "title": "Inför högersväng",
    "situation": "Du ska svänga höger från en dubbelriktad väg med ett körfält i vardera riktningen. Ingen särskild körfältsanvisning gäller. Vilken placering väljer du inför svängen?",
    "options": [
      "Nära vänsterkanten av ditt körfält.",
      "Så nära högerkanten av körbanan som möjligt.",
      "Mitt i körbanan, oavsett körfältsindelning."
    ],
    "correct": 1,
    "hint": "Placeringen ska motsvara svängriktningen.",
    "explanation": "Inför högersväng ska bilen placeras så nära körbanans högerkant som möjligt. Vänsterplacering hör inte till denna sväng.",
    "takeaway": "Förbered högersvängen med placering vid körbanans högerkant."
  },
  {
    "id": "book-lanes-q09",
    "topic": "rules",
    "kind": "Trafikregel",
    "source": "book",
    "chapterId": "positioning",
    "bookUnitId": "book-lanes",
    "bookPages": [
      15
    ],
    "coverageIds": [
      "book-lanes-t9"
    ],
    "title": "Vänstersväng från enkelriktad väg",
    "situation": "Du kör på en enkelriktad väg med två körfält och ska svänga vänster. Inga körfältspilar eller andra anvisningar anger en annan placering. Var placerar du dig inför svängen?",
    "options": [
      "Vid vänsterkanten av det högra körfältet.",
      "Vid körbanans högerkant.",
      "Så nära körbanans vänsterkant som möjligt."
    ],
    "correct": 2,
    "hint": "På den enkelriktade vägen finns ingen tillåten mötande trafik.",
    "explanation": "Inför vänstersväng från enkelriktad väg gäller körbanans vänsterkant, inte bara vänsterkanten av ett valfritt körfält.",
    "takeaway": "På enkelriktad väg förbereds vänstersväng vid körbanans vänsterkant."
  },
  {
    "id": "book-lanes-q10",
    "topic": "rules",
    "kind": "Trafikregel",
    "source": "book",
    "chapterId": "positioning",
    "bookUnitId": "book-lanes",
    "bookPages": [
      15
    ],
    "coverageIds": [
      "book-lanes-t10"
    ],
    "title": "Högersväng från enkelriktad väg",
    "situation": "Du kör på en enkelriktad väg och ska svänga höger. Ingen särskild körfältsanvisning gäller. Vilken placering väljer du inför svängen?",
    "options": [
      "Så nära körbanans högerkant som möjligt.",
      "Så nära körbanans vänsterkant som möjligt.",
      "Mitt på körbanan eftersom mötande trafik saknas."
    ],
    "correct": 0,
    "hint": "Enkelriktningen ändrar inte sidovalet inför högersväng.",
    "explanation": "Även på en enkelriktad väg ska en högersväng förberedas nära körbanans högerkant. Att mötande trafik saknas gör inte mittplacering till rätt svängplacering.",
    "takeaway": "Högersväng förbereds vid högerkanten även på enkelriktad väg."
  },
  {
    "id": "book-lanes-q11",
    "topic": "rules",
    "kind": "Trafikregel",
    "source": "book",
    "chapterId": "positioning",
    "bookUnitId": "book-lanes",
    "bookPages": [
      15
    ],
    "coverageIds": [
      "book-lanes-t9",
      "book-lanes-t11"
    ],
    "title": "Från enkelriktat till mötande trafik",
    "situation": "Du ska svänga vänster från en enkelriktad gata. Vägen du svänger in på har trafik i båda riktningarna, vilket en varning om mötande trafik upplyser om. Vilket förhållningssätt är rätt?",
    "options": [
      "Förbered svängen vid högerkanten och behandla även den nya vägen som enkelriktad.",
      "Förbered svängen vid vänsterkanten och räkna med mötande trafik på den nya vägen.",
      "Förbered svängen vid vänsterkanten och fortsätt räkna med att mötande trafik är förbjuden."
    ],
    "correct": 1,
    "hint": "Den gamla och den nya vägen har olika trafikförhållanden.",
    "explanation": "Den enkelriktade gatan motiverar vänsterplacering inför vänstersvängen. Enkelriktningen följer däremot inte med in på den nya vägen, där mötande trafik förekommer.",
    "takeaway": "Bedöm trafikförhållandena på vägen du svänger in på separat."
  },
  {
    "id": "book-lanes-q12",
    "topic": "rules",
    "kind": "Trafikregel",
    "source": "book",
    "chapterId": "positioning",
    "bookUnitId": "book-lanes",
    "bookPages": [
      16
    ],
    "coverageIds": [
      "book-lanes-t12"
    ],
    "title": "Grundregel för körfältsval",
    "situation": "Du kör på en väg med två körfält i din riktning och hastighetsgränsen 90 km/h. Båda körfälten leder till samma färdmål och du ska inte köra om. Vilket körfält ska du välja?",
    "options": [
      "Det vänstra eftersom vägen har flera körfält.",
      "Valfritt körfält eftersom båda leder till samma färdmål.",
      "Körfältet längst till höger."
    ],
    "correct": 2,
    "hint": "Inget av undantagen för friare körfältsval är uppfyllt.",
    "explanation": "Grundregeln är att välja körfältet längst till höger. Här är hastighetsgränsen över 70 km/h och körfälten är inte skyltade mot olika färdmål.",
    "takeaway": "Flera körfält ger inte i sig rätt till fritt körfältsval."
  },
  {
    "id": "book-lanes-q13",
    "topic": "rules",
    "kind": "Trafikregel",
    "source": "book",
    "chapterId": "positioning",
    "bookUnitId": "book-lanes",
    "bookPages": [
      16
    ],
    "coverageIds": [
      "book-lanes-t13"
    ],
    "title": "Körfältsval vid 70 km/h",
    "situation": "Vägen har två markerade körfält i din färdriktning och hastighetsgränsen är 70 km/h. Båda körfälten leder till samma färdmål. Vad gäller för ditt körfältsval?",
    "options": [
      "Du får välja det körfält som är lämpligast för din fortsatta färd.",
      "Du måste alltid välja höger körfält eftersom färdmålet är detsamma.",
      "Du får välja fritt endast om hastighetsgränsen är lägre än 70 km/h."
    ],
    "correct": 0,
    "hint": "Gränsen omfattar även exakt 70 km/h.",
    "explanation": "När det finns minst två markerade körfält i färdriktningen och hastighetsgränsen är högst 70 km/h får du välja det lämpligaste för fortsatt färd.",
    "takeaway": "Minst två markerade körfält och högst 70 km/h medger anpassat körfältsval."
  },
  {
    "id": "book-lanes-q14",
    "topic": "rules",
    "kind": "Trafikregel",
    "source": "book",
    "chapterId": "positioning",
    "bookUnitId": "book-lanes",
    "bookPages": [
      16
    ],
    "coverageIds": [
      "book-lanes-t14"
    ],
    "title": "Olika skyltade färdmål",
    "situation": "Hastighetsgränsen är 80 km/h. Körfältsvägvisare visar att höger körfält leder mot en ort och vänster körfält mot den ort du ska till. Vilket val är rätt?",
    "options": [
      "Välj höger körfält eftersom hastighetsgränsen överstiger 70 km/h.",
      "Välj vänster körfält eftersom det är lämpligt för ditt skyltade färdmål.",
      "Välj höger körfält och byt först när vägvisningen har upphört."
    ],
    "correct": 1,
    "hint": "Olika skyltade färdmål är ett eget undantag från grundregeln.",
    "explanation": "När körfälten enligt körfältsvägvisare leder till olika färdmål får du välja det som är lämpligast för fortsatt färd. Detta undantag kräver inte en hastighetsgräns på högst 70 km/h.",
    "takeaway": "Körfältsvägvisningen kan motivera ett annat val än längst till höger."
  },
  {
    "id": "book-lanes-q15",
    "topic": "rules",
    "kind": "Trafikregel",
    "source": "book",
    "chapterId": "positioning",
    "bookUnitId": "book-lanes",
    "bookPages": [
      16
    ],
    "coverageIds": [
      "book-lanes-t15"
    ],
    "title": "Efter en omkörning vid 80 km/h",
    "situation": "Du har avslutat en omkörning på en väg med två körfält i din riktning. Hastighetsgränsen är 80 km/h, båda körfälten leder till samma färdmål och du ska inte köra om fler fordon. Vad ska du göra när körfältsbytet kan genomföras säkert?",
    "options": [
      "Stanna i vänster körfält så länge du håller hastighetsgränsen.",
      "Stanna i vänster körfält eftersom omkörningen redan är avslutad.",
      "Återgå till körfältet längst till höger."
    ],
    "correct": 2,
    "hint": "Efter omkörningen gäller åter grundregeln för körfältsval.",
    "explanation": "Vid 80 km/h gäller inte undantaget för högst 70 km/h. Eftersom körfälten leder till samma färdmål och ingen mer omkörning planeras ska du återgå åt höger.",
    "takeaway": "Avslutad omkörning vid 80 km/h innebär återgång åt höger när undantag saknas."
  },
  {
    "id": "book-lanes-q16",
    "topic": "rules",
    "kind": "Trafikregel",
    "source": "book",
    "chapterId": "positioning",
    "bookUnitId": "book-lanes",
    "bookPages": [
      16
    ],
    "coverageIds": [
      "book-lanes-t16"
    ],
    "title": "Avfart eller genomgående körfält?",
    "situation": "Du ska fortsätta rakt fram. En avfart kommer längre fram, men ditt nuvarande högra körfält fortsätter rakt fram förbi avfarten. Gör avfartens närhet att du måste lämna körfältet?",
    "options": [
      "Nej, körfältet är genomgående och kan användas för fortsatt färd rakt fram.",
      "Ja, det högra körfältet blir alltid ett avfartsfält när en avfart närmar sig.",
      "Ja, ett genomgående körfält får inte användas intill en avfart."
    ],
    "correct": 0,
    "hint": "Avgör vart själva körfältet leder.",
    "explanation": "En närliggande avfart innebär inte att det högra körfältet upphör att vara genomgående. I den beskrivna situationen fortsätter körfältet rakt fram.",
    "takeaway": "Skilj avfartens läge från körfältets fortsättning."
  },
  {
    "id": "book-lanes-q17",
    "topic": "rules",
    "kind": "Trafikregel",
    "source": "book",
    "chapterId": "positioning",
    "bookUnitId": "book-lanes",
    "bookPages": [
      16
    ],
    "coverageIds": [
      "book-lanes-t15",
      "book-lanes-t16"
    ],
    "title": "Göteborg och en avfart om 500 meter",
    "situation": "Du ska mot Göteborg och har just kört om. Vägen har fyra körfält i din riktning, A, B, C och D från vänster till höger. Hastighetsgränsen är 80 km/h och alla fyra är skyltade mot Göteborg. En avfart kommer om 500 meter, men även D fortsätter rakt fram. Du ska inte köra om fler bilar. Vilket körfält ska du återgå till när det kan ske säkert?",
    "options": [
      "C, eftersom D måste lämnas inför avfarten.",
      "D, eftersom det är längst till höger och fortsätter mot ditt färdmål.",
      "A, eftersom alla körfält leder mot Göteborg."
    ],
    "correct": 1,
    "hint": "Avfarten ändrar inte att D är ett genomgående körfält.",
    "explanation": "Vid 80 km/h och samma skyltade färdmål ska du återgå längst till höger efter omkörningen. D fortsätter rakt fram, så avfarten om 500 meter motiverar inte att stanna längre till vänster.",
    "takeaway": "Håll till höger i genomgående körfält efter omkörningen när inget undantag gäller."
  },
  {
    "id": "book-lanes-q18",
    "topic": "safety",
    "kind": "Säkerhetsråd",
    "source": "book",
    "chapterId": "positioning",
    "bookUnitId": "book-lanes",
    "bookPages": [
      17
    ],
    "coverageIds": [
      "book-lanes-t17"
    ],
    "title": "Kontrollen framför före körfältsbyte",
    "situation": "Du planerar att byta körfält men ligger nära ett framförvarande fordon. Vilken kontroll ska inleda förberedelserna?",
    "options": [
      "Slå på blinkers och börja sedan bedöma avståndet framför.",
      "Kontrollera bara trafiken bakom, eftersom bytet sker åt sidan.",
      "Kontrollera trafiken framför och om avståndet till framförvarande är bra."
    ],
    "correct": 2,
    "hint": "Förberedelserna börjar inte med trafiken bakom.",
    "explanation": "Först ska du kontrollera trafiken framför. När avståndet till framförvarande är bra går du vidare med speglar och döda vinkeln.",
    "takeaway": "Ett körfältsbyte börjar med kontroll av trafiken och avståndet framför."
  },
  {
    "id": "book-lanes-q19",
    "topic": "safety",
    "kind": "Säkerhetsråd",
    "source": "book",
    "chapterId": "positioning",
    "bookUnitId": "book-lanes",
    "bookPages": [
      17
    ],
    "coverageIds": [
      "book-lanes-t18"
    ],
    "title": "Speglarna inför körfältsbyte",
    "situation": "Du har kontrollerat trafiken framför och har ett bra avstånd till framförvarande. Vilken ordning anges för nästa kontroller inför körfältsbytet?",
    "options": [
      "Inre backspegel, sidospegel och därefter döda vinkeln.",
      "Sidospegel, blinkers och därefter inre backspegel.",
      "Inre backspegel och därefter blinkers, utan kontroll i sidospegeln."
    ],
    "correct": 0,
    "hint": "Speglarna följs av en kontroll genom att vrida huvudet.",
    "explanation": "Efter kontrollen framför anges inre backspegeln, sidospegeln och döda vinkeln i den ordningen. Blinkers kommer först när dessa kontroller ser bra ut.",
    "takeaway": "Använd både inre backspegel och sidospegel före teckengivningen."
  },
  {
    "id": "book-lanes-q20",
    "topic": "safety",
    "kind": "Säkerhetsråd",
    "source": "book",
    "chapterId": "positioning",
    "bookUnitId": "book-lanes",
    "bookPages": [
      17
    ],
    "coverageIds": [
      "book-lanes-t19"
    ],
    "title": "Döda vinkeln två gånger",
    "situation": "Du ska byta körfält. Efter spegelkontrollerna ser det fritt ut och du tänker slå på blinkers. Hur ska döda vinkeln kontrolleras?",
    "options": [
      "Bara före blinkers, eftersom läget sedan är känt.",
      "Genom att vrida huvudet före blinkers och en sista gång efter väntan, före sidoförflyttningen.",
      "Bara efter att bilen har börjat röra sig in i det nya körfältet."
    ],
    "correct": 1,
    "hint": "Trafikläget kan ändras medan du ger tecken.",
    "explanation": "Döda vinkeln kontrolleras före teckengivningen. Efter några sekunders väntan ska den kontrolleras en sista gång innan du lugnt kör över.",
    "takeaway": "Kontrollera döda vinkeln både före tecknet och strax före bytet."
  },
  {
    "id": "book-lanes-q21",
    "topic": "safety",
    "kind": "Trafikregel och säkerhet",
    "source": "book",
    "chapterId": "positioning",
    "bookUnitId": "book-lanes",
    "bookPages": [
      17
    ],
    "coverageIds": [
      "book-lanes-t20"
    ],
    "title": "Efter att blinkers har slagits på",
    "situation": "Du har kontrollerat trafiken inför ett körfältsbyte och slagit på blinkers. Vad ska du göra innan den sista kontrollen av döda vinkeln?",
    "options": [
      "Sväng direkt eftersom blinkers kräver att andra lämnar plats.",
      "Titta enbart rakt fram och bortse från andra förares reaktioner.",
      "Avvakta några sekunder med rörlig blick och se hur andra trafikanter reagerar."
    ],
    "correct": 2,
    "hint": "Teckengivningen följs av observation, inte omedelbar sidoförflyttning.",
    "explanation": "Efter blinkers ska du vänta några sekunder och följa andra trafikanters reaktioner med rörlig blick. Därefter görs den sista kontrollen av döda vinkeln.",
    "takeaway": "Ge andra tid att uppfatta tecknet och kontrollera deras reaktioner."
  },
  {
    "id": "book-lanes-q22",
    "topic": "safety",
    "kind": "Säkerhetsråd",
    "source": "book",
    "chapterId": "positioning",
    "bookUnitId": "book-lanes",
    "bookPages": [
      17
    ],
    "coverageIds": [
      "book-lanes-t21"
    ],
    "title": "Själva körfältsbytet",
    "situation": "Du kör under hastighetsgränsen och ska byta körfält. Kontrollerna visar en tillräcklig lucka utan fara eller onödigt hinder. Ett fordon kommer bakom i det nya körfältet. Vilken manöver kan vara lämplig?",
    "options": [
      "Kör lugnt över och anpassa farten; en liten ökning inom hastighetsgränsen kan vara lämplig.",
      "Gör en hastig sidoförflyttning så att bytet tar så kort tid som möjligt.",
      "Bromsa kraftigt samtidigt som du svänger över framför fordonet."
    ],
    "correct": 0,
    "hint": "Sidoförflyttningen ska vara lugn, och farten kan behöva anpassas.",
    "explanation": "Byt körfält lugnt och bara när det kan ske utan fara eller onödigt hinder. Bokens råd om en liten fartökning förutsätter att ökningen är säker och håller sig inom hastighetsgränsen. Om luckan är otillräcklig ska du vänta; fartökning ger inte rätt att tränga dig in.",
    "takeaway": "Byt lugnt och anpassa farten till trafiken i det nya körfältet."
  },
  {
    "id": "book-lanes-q23",
    "topic": "rules",
    "kind": "Trafikregel",
    "source": "book",
    "chapterId": "positioning",
    "bookUnitId": "book-lanes",
    "bookPages": [
      17
    ],
    "coverageIds": [
      "book-lanes-t22"
    ],
    "title": "Luckor i tät trafik",
    "situation": "På en väg med flera körfält i din riktning är trafiken tät. Du vill byta fram och tillbaka mellan körfälten enbart för att vinna några platser. Är det tillåtet?",
    "options": [
      "Ja, om varje lucka är större än din bil.",
      "Nej, det är otillåten slalomkörning mellan bilarna.",
      "Ja, om du använder blinkers vid varje byte."
    ],
    "correct": 1,
    "hint": "En rad körfältsbyten för att tränga sig fram är något annat än ett motiverat byte.",
    "explanation": "Du får inte köra slalom mellan bilarna i tät trafik för att tjäna platser. Blinkers eller tillgängliga luckor gör inte detta körsätt tillåtet.",
    "takeaway": "Använd inte upprepade körfältsbyten för att vinna köplatser."
  },
  {
    "id": "book-lanes-q24",
    "topic": "rules",
    "kind": "Trafikregel",
    "source": "book",
    "chapterId": "positioning",
    "bookUnitId": "book-lanes",
    "bookPages": [
      17
    ],
    "coverageIds": [
      "book-lanes-t22"
    ],
    "title": "Ett konkret slalomförsök",
    "situation": "Du kör i tät trafik med två körfält i samma riktning. En lucka i vänster körfält lockar dig att köra förbi en bil. Direkt därefter vill du byta tillbaka till en lucka i höger körfält för att komma förbi nästa bil. Bytena har inget annat syfte än att vinna platser. Hur bedöms körsättet?",
    "options": [
      "Det är tillåtet eftersom du återvänder till höger körfält.",
      "Det är tillåtet eftersom båda luckorna redan finns.",
      "Det är otillåten slalomkörning."
    ],
    "correct": 2,
    "hint": "Bedöm det samlade körsättet, inte bara varje lucka.",
    "explanation": "Att växla mellan körfälten för att ta sig förbi bilar i tät trafik är slalomkörning. Att ett av bytena går tillbaka åt höger ändrar inte detta.",
    "takeaway": "Luckor får inte användas till slalom mellan bilarna."
  },
  {
    "id": "book-lanes-q25",
    "topic": "rules",
    "kind": "Trafikregel",
    "source": "book",
    "chapterId": "positioning",
    "bookUnitId": "book-lanes",
    "bookPages": [
      18
    ],
    "coverageIds": [
      "book-lanes-t23"
    ],
    "title": "Heldragen linje på din sida",
    "situation": "Du vill byta körfält för att fortsätta färden. Linjen på din sida är heldragen och inget undantag är tillämpligt. Det andra körfältet är tomt. Får du passera linjen?",
    "options": [
      "Nej, du får inte köra över till det andra körfältet när linjen på din sida är heldragen.",
      "Ja, eftersom det andra körfältet är tomt.",
      "Ja, om du först ger tecken med blinkers."
    ],
    "correct": 0,
    "hint": "Ett tomt körfält ändrar inte linjens betydelse.",
    "explanation": "Huvudregeln förbjuder att korsa en heldragen linje. Ett tomt grannfält eller blinkers är inget undantag. Särskilda undantag med försiktighetskrav finns exempelvis för att passera ett hinder eller köra till och från en fastighet, men inget sådant fall beskrivs här.",
    "takeaway": "Kontrollera linjen på den egna sidan före ett byte."
  },
  {
    "id": "book-lanes-q26",
    "topic": "rules",
    "kind": "Trafikregel",
    "source": "book",
    "chapterId": "positioning",
    "bookUnitId": "book-lanes",
    "bookPages": [
      18
    ],
    "coverageIds": [
      "book-lanes-t24"
    ],
    "title": "Olika linjer för A och B",
    "situation": "Två mötande körfält skiljs åt av en mittmarkering med heldragen linje på förare A:s sida och en linje som inte är heldragen på förare B:s sida. Om inga andra hinder finns för en omkörning, vad innebär markeringen?",
    "options": [
      "A får korsa mittmarkeringen men B får inte.",
      "B får korsa mittmarkeringen men A får inte.",
      "Båda får korsa eftersom bara en av linjerna är heldragen."
    ],
    "correct": 1,
    "hint": "Varje förare ska bedöma linjen på sin egen sida.",
    "explanation": "A hindras av den heldragna linjen på sin sida. B:s linje är inte heldragen och hindrar därför inte B från att köra över, exempelvis vid en omkörning.",
    "takeaway": "Samma mittmarkering kan ge olika möjligheter från vardera sidan."
  },
  {
    "id": "book-lanes-q27",
    "topic": "rules",
    "kind": "Trafikregel",
    "source": "book",
    "chapterId": "positioning",
    "bookUnitId": "book-lanes",
    "bookPages": [
      18
    ],
    "coverageIds": [
      "book-lanes-t25"
    ],
    "title": "Vilka får använda högra bussfilen?",
    "situation": "Ett kollektivkörfält ligger till höger i färdriktningen. Ingen tilläggstavla ger andra fordon tillträde. Vilken grupp omfattas av den angivna användningen?",
    "options": [
      "Fordon i linjetrafik, cykel och moped klass I, men inte moped klass II.",
      "Endast fordon i linjetrafik; varken cykel eller moped får använda körfältet.",
      "Fordon i linjetrafik, cykel och moped klass II, men inte moped klass I."
    ],
    "correct": 2,
    "hint": "Mopedklassen spelar roll.",
    "explanation": "Körfältet är avsett för fordon i linjetrafik. Ligger det till höger i färdriktningen får även cykel och moped klass II färdas där. Tillåtelsen gäller inte moped klass I. En buss som inte går i linjetrafik får inte automatiskt tillträde bara för att den är en buss.",
    "takeaway": "Högra kollektivkörfältet får även användas av cykel och moped klass II."
  },
  {
    "id": "book-lanes-q28",
    "topic": "rules",
    "kind": "Trafikregel",
    "source": "book",
    "chapterId": "positioning",
    "bookUnitId": "book-lanes",
    "bookPages": [
      18
    ],
    "coverageIds": [
      "book-lanes-t26"
    ],
    "title": "Kollektivkörfältets läge",
    "situation": "Du kör moped klass II. Ett kollektivkörfält ligger till vänster i färdriktningen och ingen tilläggstavla ger dig tillträde. Kan du använda regeln som tillåter moped klass II i kollektivkörfält?",
    "options": [
      "Nej, den angivna tillåtelsen gäller kollektivkörfält till höger i färdriktningen.",
      "Ja, moped klass II får använda alla kollektivkörfält oavsett läge.",
      "Ja, så länge ingen buss befinner sig i körfältet."
    ],
    "correct": 0,
    "hint": "Tillåtelsen är knuten till körfältets placering.",
    "explanation": "Tillåtelsen för cykel och moped klass II gäller kollektivkörfält som ligger till höger i färdriktningen. Den kan inte användas som stöd för att köra i det vänstra körfältet.",
    "takeaway": "Kontrollera kollektivkörfältets läge, inte bara fordonsslaget."
  },
  {
    "id": "book-lanes-q29",
    "topic": "rules",
    "kind": "Trafikregel",
    "source": "book",
    "chapterId": "positioning",
    "bookUnitId": "book-lanes",
    "bookPages": [
      18
    ],
    "coverageIds": [
      "book-lanes-t26"
    ],
    "title": "Tilläggstavla för andra fordon",
    "situation": "Du kör taxi och vill använda ett kollektivkörfält. Vilken uppgift visar att även ditt fordon får använda körfältet?",
    "options": [
      "Att körfältet för tillfället saknar bussar.",
      "En tilläggstavla som anger att taxi får använda körfältet.",
      "Att trafiken i de andra körfälten står stilla."
    ],
    "correct": 1,
    "hint": "Tillträde för andra fordon anges genom skyltning.",
    "explanation": "Om andra fordon får använda kollektivkörfältet anges detta på en tilläggstavla. Ett tomt kollektivkörfält eller köer i övriga körfält ger inte sådan tillåtelse.",
    "takeaway": "Andra fordons tillträde ska framgå av en tilläggstavla."
  },
  {
    "id": "book-lanes-q30",
    "topic": "rules",
    "kind": "Trafikregel",
    "source": "book",
    "chapterId": "positioning",
    "bookUnitId": "book-lanes",
    "bookPages": [
      18
    ],
    "coverageIds": [
      "book-lanes-t27"
    ],
    "title": "Korsa utan att köra längs bussfilen",
    "situation": "Tre körfält går åt samma håll. Du kör personbil i det vanliga vänstra körfältet A. Ett busskörfält ligger mellan A och det vanliga högra körfältet B, där du vill förbereda en högersväng. Markeringarna får passeras och manövern kan ske utan fara eller onödigt hinder. Får du korsa busskörfältet från A till B?",
    "options": [
      "Du får aldrig korsa ett kollektivkörfält med personbil.",
      "Du får korsa bara om du också får färdas längs körfältet.",
      "Du får korsa kollektivkörfältet."
    ],
    "correct": 2,
    "hint": "Skilj mellan att korsa ett körfält och att använda det för färd längs vägen.",
    "explanation": "Du får korsa ett kollektivkörfält för att komma till ett annat körfält. Bokens diagram visar denna förflyttning från A till B över busskörfältet. Det ger inte rätt att använda busskörfältet för längsgående färd, och du måste kontrollera att korsningen kan ske säkert.",
    "takeaway": "Ett kollektivkörfält får korsas även när längsgående färd inte är tillåten."
  },
  {
    "id": "book-lanes-q31",
    "topic": "rules",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "positioning",
    "bookUnitId": "book-lanes",
    "bookPages": [
      18
    ],
    "coverageIds": [
      "book-lanes-t28"
    ],
    "title": "Reversibelt körfält",
    "situation": "En väg har ett reversibelt körfält. Vilken egenskap skiljer det från ett körfält med fast körriktning?",
    "options": [
      "Körriktningen kan vändas efter behov.",
      "Varje förare får själv välja körriktning.",
      "Det är alltid reserverat för bussar."
    ],
    "correct": 0,
    "hint": "Förändringen gäller körfältets körriktning, inte förarens fria val.",
    "explanation": "I ett reversibelt körfält kan körriktningen ändras efter behov. Det innebär inte att trafikanter själva får välja vilken riktning de kör i.",
    "takeaway": "Reversibla körfält har en körriktning som kan ändras."
  },
  {
    "id": "book-lanes-q32",
    "topic": "rules",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "positioning",
    "bookUnitId": "book-lanes",
    "bookPages": [
      18
    ],
    "coverageIds": [
      "book-lanes-t28"
    ],
    "title": "Extra körfält ut ur staden",
    "situation": "På eftermiddagen ska många trafikanter lämna staden efter arbetet. Vägen har ett reversibelt körfält. Hur kan det användas för detta trafikbehov?",
    "options": [
      "Genom att låta trafiken köra samtidigt åt båda håll i körfältet.",
      "Genom att ändra körriktningen så att ett extra körfält går ut från staden.",
      "Genom att göra alla övriga körfält till kollektivkörfält."
    ],
    "correct": 1,
    "hint": "Reversibilitet gör det möjligt att anpassa fördelningen mellan riktningarna.",
    "explanation": "När fler ska lämna staden kan det reversibla körfältets riktning ändras så att utgående trafik får ett extra körfält. Det är en tillämpning av att riktningen kan vändas efter behov.",
    "takeaway": "Reversibla körfält kan ge mer utrymme åt den riktning som behöver det."
  },
  {
    "id": "book-lanes-q33",
    "topic": "rules",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "positioning",
    "bookUnitId": "book-lanes",
    "bookPages": [
      19,
      20
    ],
    "coverageIds": [
      "book-lanes-t2",
      "book-lanes-t29"
    ],
    "title": "Övning: antal omarkerade körfält",
    "situation": "En väg saknar vägmarkeringar. Två bilar får tydligt plats i bredd med rimliga säkerhetsmarginaler. Fyra bilar skulle möjligen kunna pressas in bredvid varandra, men inte framföras normalt och säkert. Hur många körfält har vägen?",
    "options": [
      "Inga körfält, eftersom linjer saknas.",
      "Fyra körfält, eftersom fyra bilar möjligen kan få plats.",
      "Två körfält."
    ],
    "correct": 2,
    "hint": "Räkna hur många filer med fyrhjuliga fordon som kan framföras säkert.",
    "explanation": "Utan vägmarkeringar bedöms antalet körfält utifrån användbar bredd. Här ryms två säkra fordonsfiler; möjligheten att pressa in fyra bilar räcker inte för fyra körfält.",
    "takeaway": "På omarkerad väg bestäms körfältsantalet med rimliga säkerhetsmarginaler."
  }
];

export const LANES_COVERAGE = [
  {
    "id": "book-lanes-t1",
    "bookUnitId": "book-lanes",
    "pages": [
      14,
      20
    ],
    "label": "Markerade och omarkerade körfält",
    "questionIds": [
      "book-lanes-q01"
    ],
    "visualStatus": "not-needed"
  },
  {
    "id": "book-lanes-t2",
    "bookUnitId": "book-lanes",
    "pages": [
      19,
      20
    ],
    "label": "Körfältsbredd och rimliga säkerhetsmarginaler",
    "questionIds": [
      "book-lanes-q02",
      "book-lanes-q33"
    ],
    "visualStatus": "not-needed"
  },
  {
    "id": "book-lanes-t3",
    "bookUnitId": "book-lanes",
    "pages": [
      14
    ],
    "label": "Grundplacering mitt i körfältet",
    "questionIds": [
      "book-lanes-q03"
    ],
    "visualStatus": "not-needed"
  },
  {
    "id": "book-lanes-t4",
    "bookUnitId": "book-lanes",
    "pages": [
      14
    ],
    "label": "Högerplacering vid möte med brett fordon",
    "questionIds": [
      "book-lanes-q04"
    ],
    "visualStatus": "not-needed"
  },
  {
    "id": "book-lanes-t5",
    "bookUnitId": "book-lanes",
    "pages": [
      14
    ],
    "label": "Vänsterplacering vid dålig sidosikt",
    "questionIds": [
      "book-lanes-q05"
    ],
    "visualStatus": "not-needed"
  },
  {
    "id": "book-lanes-t6",
    "bookUnitId": "book-lanes",
    "pages": [
      14
    ],
    "label": "Placering och hastighet vid skymd kurva",
    "questionIds": [
      "book-lanes-q06"
    ],
    "visualStatus": "reviewed"
  },
  {
    "id": "book-lanes-t7",
    "bookUnitId": "book-lanes",
    "pages": [
      15
    ],
    "label": "Placering inför vänstersväng",
    "questionIds": [
      "book-lanes-q07"
    ],
    "visualStatus": "not-needed"
  },
  {
    "id": "book-lanes-t8",
    "bookUnitId": "book-lanes",
    "pages": [
      15
    ],
    "label": "Placering inför högersväng",
    "questionIds": [
      "book-lanes-q08"
    ],
    "visualStatus": "not-needed"
  },
  {
    "id": "book-lanes-t9",
    "bookUnitId": "book-lanes",
    "pages": [
      15
    ],
    "label": "Vänstersväng från enkelriktad väg",
    "questionIds": [
      "book-lanes-q09",
      "book-lanes-q11"
    ],
    "visualStatus": "reviewed"
  },
  {
    "id": "book-lanes-t10",
    "bookUnitId": "book-lanes",
    "pages": [
      15
    ],
    "label": "Högersväng från enkelriktad väg",
    "questionIds": [
      "book-lanes-q10"
    ],
    "visualStatus": "not-needed"
  },
  {
    "id": "book-lanes-t11",
    "bookUnitId": "book-lanes",
    "pages": [
      15
    ],
    "label": "Övergång till väg med mötande trafik",
    "questionIds": [
      "book-lanes-q11"
    ],
    "visualStatus": "reviewed"
  },
  {
    "id": "book-lanes-t12",
    "bookUnitId": "book-lanes",
    "pages": [
      16
    ],
    "label": "Grundregel om körfält längst till höger",
    "questionIds": [
      "book-lanes-q12"
    ],
    "visualStatus": "not-needed"
  },
  {
    "id": "book-lanes-t13",
    "bookUnitId": "book-lanes",
    "pages": [
      16
    ],
    "label": "Fritt körfältsval vid högst 70 km/h",
    "questionIds": [
      "book-lanes-q13"
    ],
    "visualStatus": "not-needed"
  },
  {
    "id": "book-lanes-t14",
    "bookUnitId": "book-lanes",
    "pages": [
      16
    ],
    "label": "Körfältsval efter olika skyltade färdmål",
    "questionIds": [
      "book-lanes-q14"
    ],
    "visualStatus": "not-needed"
  },
  {
    "id": "book-lanes-t15",
    "bookUnitId": "book-lanes",
    "pages": [
      16
    ],
    "label": "Återgång efter omkörning vid 80 km/h",
    "questionIds": [
      "book-lanes-q15",
      "book-lanes-q17"
    ],
    "visualStatus": "reviewed"
  },
  {
    "id": "book-lanes-t16",
    "bookUnitId": "book-lanes",
    "pages": [
      16
    ],
    "label": "Avfart kontra genomgående körfält",
    "questionIds": [
      "book-lanes-q16",
      "book-lanes-q17"
    ],
    "visualStatus": "reviewed"
  },
  {
    "id": "book-lanes-t17",
    "bookUnitId": "book-lanes",
    "pages": [
      17
    ],
    "label": "Trafik och avstånd framför vid körfältsbyte",
    "questionIds": [
      "book-lanes-q18"
    ],
    "visualStatus": "not-needed"
  },
  {
    "id": "book-lanes-t18",
    "bookUnitId": "book-lanes",
    "pages": [
      17
    ],
    "label": "Inre backspegel och sidospegel",
    "questionIds": [
      "book-lanes-q19"
    ],
    "visualStatus": "not-needed"
  },
  {
    "id": "book-lanes-t19",
    "bookUnitId": "book-lanes",
    "pages": [
      17
    ],
    "label": "Döda vinkeln före och efter teckengivning",
    "questionIds": [
      "book-lanes-q20"
    ],
    "visualStatus": "not-needed"
  },
  {
    "id": "book-lanes-t20",
    "bookUnitId": "book-lanes",
    "pages": [
      17
    ],
    "label": "Blinkers och andra trafikanters reaktion",
    "questionIds": [
      "book-lanes-q21"
    ],
    "visualStatus": "not-needed"
  },
  {
    "id": "book-lanes-t21",
    "bookUnitId": "book-lanes",
    "pages": [
      17
    ],
    "label": "Lugnt körfältsbyte och eventuell fartökning",
    "questionIds": [
      "book-lanes-q22"
    ],
    "visualStatus": "not-needed"
  },
  {
    "id": "book-lanes-t22",
    "bookUnitId": "book-lanes",
    "pages": [
      17
    ],
    "label": "Förbud mot slalomkörning",
    "questionIds": [
      "book-lanes-q23",
      "book-lanes-q24"
    ],
    "visualStatus": "reviewed"
  },
  {
    "id": "book-lanes-t23",
    "bookUnitId": "book-lanes",
    "pages": [
      18
    ],
    "label": "Heldragen linje på den egna sidan",
    "questionIds": [
      "book-lanes-q25"
    ],
    "visualStatus": "reviewed"
  },
  {
    "id": "book-lanes-t24",
    "bookUnitId": "book-lanes",
    "pages": [
      18
    ],
    "label": "Olika korsningsmöjligheter på mittlinjens sidor",
    "questionIds": [
      "book-lanes-q26"
    ],
    "visualStatus": "reviewed"
  },
  {
    "id": "book-lanes-t25",
    "bookUnitId": "book-lanes",
    "pages": [
      18
    ],
    "label": "Kollektivkörfält för buss, cykel och moped",
    "questionIds": [
      "book-lanes-q27"
    ],
    "visualStatus": "reviewed"
  },
  {
    "id": "book-lanes-t26",
    "bookUnitId": "book-lanes",
    "pages": [
      18
    ],
    "label": "Kollektivkörfältets läge och tilläggstavlor",
    "questionIds": [
      "book-lanes-q28",
      "book-lanes-q29"
    ],
    "visualStatus": "not-needed"
  },
  {
    "id": "book-lanes-t27",
    "bookUnitId": "book-lanes",
    "pages": [
      18
    ],
    "label": "Korsning av kollektivkörfält",
    "questionIds": [
      "book-lanes-q30"
    ],
    "visualStatus": "reviewed"
  },
  {
    "id": "book-lanes-t28",
    "bookUnitId": "book-lanes",
    "pages": [
      18
    ],
    "label": "Reversibelt körfält",
    "questionIds": [
      "book-lanes-q31",
      "book-lanes-q32"
    ],
    "visualStatus": "reviewed"
  },
  {
    "id": "book-lanes-t29",
    "bookUnitId": "book-lanes",
    "pages": [
      19,
      20
    ],
    "label": "Antal körfält utan vägmarkering",
    "questionIds": [
      "book-lanes-q33"
    ],
    "visualStatus": "reviewed"
  }
];

// PDF 304-308. Reviewed source text and the växthuseffekt diagram on 304,
// including the worked "Testa dina kunskaper" example on 309-310, which
// reuses the takräcke/takbox concept from page 306 (see
// book-environment-t14, extended here). PDF 311 is the next unit's title
// page ("Sparsam körning" / book-eco-driving), no content.
export const ENVIRONMENT_304_311_QUESTIONS = [
  {
    "id": "book-environment-q1",
    "topic": "environment",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "environment",
    "bookUnitId": "book-environment",
    "bookPages": [304],
    "coverageIds": ["book-environment-t1"],
    "title": "Fordonstrafikens andel av koldioxidutsläppen",
    "situation": "Varför har riksdagen, regeringen och myndigheterna ett intresse av att förare kör miljömedvetet?",
    "options": [
      "Fordonstrafiken står för en betydande del av koldioxidutsläppen, och hela världen försöker minska dem.",
      "Fordonstrafiken står bara för en försumbar del av de globala koldioxidutsläppen.",
      "Det handlar enbart om att minska trafikbuller, inte om koldioxidutsläpp."
    ],
    "correct": 0,
    "hint": "Utsläppens storlek är anledningen till det politiska intresset.",
    "explanation": "Hela världen försöker minska koldioxidutsläppen. Fordonstrafiken står för en betydande del av utsläppen. Detta gör att riksdagen, regeringen och myndigheterna har ett intresse av att få förare att köra på ett miljömedvetet sätt.",
    "takeaway": "Fordonstrafikens stora andel av koldioxidutsläppen gör miljömedveten körning till en politisk prioritet."
  },
  {
    "id": "book-environment-q2",
    "topic": "environment",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "environment",
    "bookUnitId": "book-environment",
    "bookPages": [304],
    "coverageIds": ["book-environment-t2"],
    "title": "Växthuseffektens grundprincip",
    "situation": "Varför har växthuseffekten fått sitt namn, och vad motsvarar jorden respektive atmosfären i jämförelsen med ett växthus?",
    "options": [
      "Namnet kommer från det som sker i växthus, där solens värmestrålar kommer in och värmen stannar kvar; i den stora skalan är jorden växten och atmosfären glastaket.",
      "Namnet kommer från att växter själva producerar växthusgaser som värmer planeten.",
      "Namnet syftar på att effekten bara påverkar jordbruksmark, inte hela jordens klimat."
    ],
    "correct": 0,
    "hint": "Jämförelsen bygger på hur ett glastak fångar in solvärme.",
    "explanation": "Växthuseffekten har fått sitt namn efter det som sker i växthus. Solens värmestrålar kommer in genom glastaket och avger värme. Den största delen av värmen stannar sedan kvar i växthuset. Denna process sker naturligt i en större skala också. Då är det jorden som är växten och atmosfären som är glastaket.",
    "takeaway": "Växthuseffekten är samma princip som i ett växthus, bara i jordens hela atmosfäriska skala."
  },
  {
    "id": "book-environment-q3",
    "topic": "environment",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "environment",
    "bookUnitId": "book-environment",
    "bookPages": [304],
    "coverageIds": ["book-environment-t3"],
    "title": "Varför växthuseffekten blir ett problem",
    "situation": "Växthuseffekten i sig är naturlig. Vad är det som gör den till ett problem just nu?",
    "options": [
      "Att den förstärks onaturligt, genom att vi hämtar upp fossila bränslen och förbränner dessa.",
      "Att den har upphört helt, vilket gör jorden kallare än normalt.",
      "Att den bara förekommer i tätbefolkade områden, aldrig på landsbygden."
    ],
    "correct": 0,
    "hint": "Problemet handlar om en onaturlig förstärkning av en i grunden naturlig process.",
    "explanation": "Problemet uppstår när växthuseffekten förstärks onaturligt. Detta sker just nu genom att vi hämtar upp fossila bränslen och förbränner dessa.",
    "takeaway": "Det är den onaturliga förstärkningen av växthuseffekten, inte effekten i sig, som är problemet."
  },
  {
    "id": "book-environment-q4",
    "topic": "environment",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "environment",
    "bookUnitId": "book-environment",
    "bookPages": [304],
    "coverageIds": ["book-environment-t4"],
    "title": "Mekanismen bakom förstärkt växthuseffekt",
    "situation": "Hur gör bilens koldioxidutsläpp jorden varmare, enligt bokens illustration?",
    "options": [
      "Koldioxiden lägger sig i atmosfären och gör den tjockare, vilket gör att värmestrålar som annars skulle reflekterats ut i rymden i stället studsar tillbaka mot jorden och avger ytterligare värme.",
      "Koldioxiden absorberar solljuset direkt innan det ens når jordytan.",
      "Koldioxiden gör atmosfären tunnare, vilket släpper in mer solvärme än normalt."
    ],
    "correct": 0,
    "hint": "En tjockare atmosfär hindrar värme från att lämna jorden igen.",
    "explanation": "Bilen släpper ut koldioxid som lägger sig i atmosfären, vilket gör den tjockare. Att atmosfären blir tjockare leder till att vissa av värmestrålarna som reflekteras tillbaka inte kommer igenom. Dessa strålar studsar i stället tillbaka ner mot jorden och avger ytterligare värme. Jorden blir alltså varmare än den normalt skulle ha blivit.",
    "takeaway": "En tjockare atmosfär av koldioxid fångar in värme som annars skulle lämnat jorden."
  },
  {
    "id": "book-environment-q5",
    "topic": "environment",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "environment",
    "bookUnitId": "book-environment",
    "bookPages": [305],
    "coverageIds": ["book-environment-t5"],
    "title": "Naturkatastrofer som konsekvens",
    "situation": "Hur kan ett varmare klimat leda till naturkatastrofer, enligt boken?",
    "options": [
      "Smältvatten från gigantiska glaciärer kan orsaka svåra översvämningar.",
      "Enbart genom fler jordbävningar, orsakade av tyngden från smältande is.",
      "Enbart genom fler vulkanutbrott i tidigare kalla områden."
    ],
    "correct": 0,
    "hint": "Vattenmängden från smältande glaciärer är central för denna konsekvens.",
    "explanation": "Konsekvenserna av ett varmare klimat kan bli många. Naturkatastrofer — smältvatten från gigantiska glaciärer kan orsaka svåra översvämningar.",
    "takeaway": "Smältande glaciärer kan utlösa svåra översvämningar som en av klimatförändringens konsekvenser."
  },
  {
    "id": "book-environment-q6",
    "topic": "environment",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "environment",
    "bookUnitId": "book-environment",
    "bookPages": [305],
    "coverageIds": ["book-environment-t6"],
    "title": "Brist på vatten som konsekvens",
    "situation": "Varför kan smältande glaciärer leda till vattenbrist för en stor del av jordens befolkning?",
    "options": [
      "En stor del av jordens befolkning använder smältvatten från glaciärer som dricksvatten; smälter glaciärerna bort blir dessa människor utan vatten.",
      "Smältande glaciärer gör allt kvarvarande vatten på jorden saltvatten.",
      "Smältande glaciärer orsakar enbart problem för djurlivet, inte för människors vattenförsörjning."
    ],
    "correct": 0,
    "hint": "Paradoxen är att smältande is ändå kan leda till vattenbrist på sikt.",
    "explanation": "Brist på vatten — en stor del av jordens befolkning använder smältvatten från glaciärer som dricksvatten. Om glaciärerna smälter bort blir dessa människor utan vatten.",
    "takeaway": "Glaciärer som helt smälter bort tar med sig en viktig dricksvattenkälla för miljontals människor."
  },
  {
    "id": "book-environment-q7",
    "topic": "environment",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "environment",
    "bookUnitId": "book-environment",
    "bookPages": [305],
    "coverageIds": ["book-environment-t7"],
    "title": "Störningar i odlingen och sjukdomar",
    "situation": "Vilka två ytterligare konsekvenser av ett varmare klimat nämner boken, utöver naturkatastrofer och vattenbrist?",
    "options": [
      "Störningar i odlingen (temperaturkänslig föda kan sluta kunna odlas) och sjukdomar (sjukdomar som inte trivs i vårt kalla klimat kan nå Sverige).",
      "Ökad livsmedelsproduktion och förbättrad folkhälsa.",
      "Lägre elpriser och billigare uppvärmning."
    ],
    "correct": 0,
    "hint": "Båda konsekvenserna är negativa, precis som naturkatastroferna och vattenbristen.",
    "explanation": "Störningar i odlingen — viss föda som odlas är mycket temperaturkänslig, vilket gör att små förändringar kan leda till att odling inte kan ske. Sjukdomar — vi i Sverige kan få hit sjukdomar som just nu inte trivs i vårt kalla klimat.",
    "takeaway": "Ett varmare klimat hotar både odling av temperaturkänslig föda och för in sjukdomar som tidigare inte trivts här."
  },
  {
    "id": "book-environment-q8",
    "topic": "environment",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "environment",
    "bookUnitId": "book-environment",
    "bookPages": [305],
    "coverageIds": ["book-environment-t8"],
    "title": "Katalysatorns funktion",
    "situation": "Vad gör katalysatorn med de skadliga ämnena i avgaserna?",
    "options": [
      "Den omvandlar de skadliga ämnena till koldioxid och vatten genom kemiska reaktioner.",
      "Den filtrerar bort de skadliga ämnena fysiskt utan att förändra dem kemiskt.",
      "Den samlar upp de skadliga ämnena i en behållare som töms vid service."
    ],
    "correct": 0,
    "hint": "Processen är kemisk, inte bara mekanisk filtrering.",
    "explanation": "Katalysatorn omvandlar de skadliga ämnena i avgaserna till koldioxid och vatten genom kemiska reaktioner.",
    "takeaway": "Katalysatorn omvandlar skadliga ämnen kemiskt, i stället för att bara filtrera bort dem."
  },
  {
    "id": "book-environment-q9",
    "topic": "environment",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "environment",
    "bookUnitId": "book-environment",
    "bookPages": [305],
    "coverageIds": ["book-environment-t9"],
    "title": "Katalysatorns effektivitet och arbetstemperatur",
    "situation": "Hur stor andel av de skadliga ämnena försvinner tack vare katalysatorn, och varför fungerar den inte optimalt direkt efter kallstart?",
    "options": [
      "80–95 % av de skadliga ämnena försvinner; katalysatorn har en arbetstemperatur på 400–600°C, så det tar ett tag innan den fungerar optimalt.",
      "40–50 % av de skadliga ämnena försvinner; katalysatorn fungerar alltid optimalt direkt vid start.",
      "100 % av de skadliga ämnena försvinner; temperaturen har ingen betydelse för funktionen."
    ],
    "correct": 0,
    "hint": "Katalysatorn behöver bli mycket varm innan den fungerar som bäst.",
    "explanation": "80–95 % av de skadliga ämnena försvinner. Katalysatorn har en arbetstemperatur på 400–600°C, vilket innebär att det tar ett tag innan den fungerar optimalt.",
    "takeaway": "Katalysatorn renar mycket effektivt, men behöver först värmas upp till 400–600°C."
  },
  {
    "id": "book-environment-q10",
    "topic": "environment",
    "kind": "Säkerhetsråd",
    "source": "book",
    "chapterId": "environment",
    "bookUnitId": "book-environment",
    "bookPages": [305],
    "coverageIds": ["book-environment-t10"],
    "title": "Fördelar med motorvärmare",
    "situation": "Vilka fördelar nämner boken med att använda motorvärmare?",
    "options": [
      "Katalysatorn börjar fungera snabbare, lägre bränsleförbrukning, och mindre slitage på motorn.",
      "Motorn blir helt ljudlös och bromssträckan förkortas.",
      "Bilen behöver aldrig bytas olja om motorvärmare används regelbundet."
    ],
    "correct": 0,
    "hint": "Fördelarna rör motorns uppvärmning, bränsle och slitage.",
    "explanation": "Det finns många fördelar med att använda motorvärmare: katalysatorn börjar fungera snabbare, lägre bränsleförbrukning, och den sliter mindre på motorn.",
    "takeaway": "Motorvärmare ger snabbare katalysatorstart, lägre förbrukning och mindre motorslitage."
  },
  {
    "id": "book-environment-q11",
    "topic": "environment",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "environment",
    "bookUnitId": "book-environment",
    "bookPages": [306],
    "coverageIds": ["book-environment-t11"],
    "title": "Hur länge motorvärmaren bör vara på",
    "situation": "Det är -20°C ute. Hur länge bör motorvärmaren vara på innan färd, enligt boken?",
    "options": [
      "90 minuter (1,5 timme).",
      "30 minuter.",
      "60 minuter (1 timme)."
    ],
    "correct": 0,
    "hint": "Ju kallare det är, desto längre tid krävs.",
    "explanation": "Hur länge motorvärmaren ska vara på: +10°C — 30 minuter innan färd; 0°C — 60 minuter (1 timme) innan färd; -20°C — 90 minuter (1,5 timme) innan färd.",
    "takeaway": "Vid -20°C bör motorvärmaren vara på i 90 minuter innan avfärd."
  },
  {
    "id": "book-environment-q12",
    "topic": "environment",
    "kind": "Säkerhetsråd",
    "source": "book",
    "chapterId": "environment",
    "bookUnitId": "book-environment",
    "bookPages": [306],
    "coverageIds": ["book-environment-t12"],
    "title": "Motorvärmare på för länge",
    "situation": "Är det bra att ha motorvärmaren på mycket längre än den rekommenderade tiden, för säkerhets skull?",
    "options": [
      "Nej, det är onödigt och inte bra, eftersom el används utan att den gör någon nytta.",
      "Ja, längre tid gör alltid motorn ännu mer skonad.",
      "Ja, men bara om utomhustemperaturen är under -10°C."
    ],
    "correct": 0,
    "hint": "Nyttan av motorvärmaren planar ut efter den rekommenderade tiden.",
    "explanation": "Att ha på motorvärmaren för länge är onödigt och inte bra, eftersom el används utan att den gör någon nytta.",
    "takeaway": "Mer tid på motorvärmaren än nödvändigt slösar bara el utan extra nytta."
  },
  {
    "id": "book-environment-q13",
    "topic": "environment",
    "kind": "Säkerhetsråd",
    "source": "book",
    "chapterId": "environment",
    "bookUnitId": "book-environment",
    "bookPages": [306, 309, 310],
    "coverageIds": ["book-environment-t13"],
    "title": "Takräcke och takbox",
    "situation": "Varför bör du montera bort takräcke och takbox när de inte används?",
    "options": [
      "De skapar onödigt luftmotstånd, vilket ökar bränsleförbrukningen — en takbox kan öka förbrukningen med mer än 1 dl per mil.",
      "De är en trafikfara eftersom de alltid lossnar vid hastigheter över 90 km/h.",
      "De gör bilen tyngre, vilket enbart påverkar accelerationen, inte bränsleförbrukningen."
    ],
    "correct": 0,
    "hint": "Trafikverket anger en konkret siffra för hur mycket extra bränsle en takbox kan dra.",
    "explanation": "Trafikverket: ”Takbox och takräcke skapar onödigt luftmotstånd och bilen rullar trögare. En takbox kan öka bränsleförbrukningen med mer än 1 dl per mil.” Montera därför bort takräcke och takbox när de inte används.",
    "takeaway": "En onödig takbox kan dra över 1 dl extra bränsle per mil genom ökat luftmotstånd."
  },
  {
    "id": "book-environment-q14",
    "topic": "environment",
    "kind": "Säkerhetsråd",
    "source": "book",
    "chapterId": "environment",
    "bookUnitId": "book-environment",
    "bookPages": [306],
    "coverageIds": ["book-environment-t14"],
    "title": "Stängda rutor och luftmotstånd",
    "situation": "Varför bör du köra med stängda rutor för att minska luftmotståndet?",
    "options": [
      "En öppen sidoruta eller taklucka stör luftflödet runt bilen, vilket leder till större luftmotstånd.",
      "Öppna rutor har ingen effekt på luftmotståndet, bara på ljudnivån i kupén.",
      "Stängda rutor krävs enbart för att AC:n ska fungera korrekt."
    ],
    "correct": 0,
    "hint": "Det handlar om att inte störa luftflödets naturliga väg runt karossen.",
    "explanation": "Kör med stängda rutor. En öppen sidoruta eller taklucka stör luftflödet runt bilen, vilket leder till större luftmotstånd.",
    "takeaway": "Öppna rutor eller takluckor stör luftflödet och ökar luftmotståndet."
  },
  {
    "id": "book-environment-q15",
    "topic": "environment",
    "kind": "Säkerhetsråd",
    "source": "book",
    "chapterId": "environment",
    "bookUnitId": "book-environment",
    "bookPages": [306],
    "coverageIds": ["book-environment-t15"],
    "title": "Rätt däcktryck och bränsleförbrukning",
    "situation": "Hur påverkar lufttrycket i däcken bränsleförbrukningen?",
    "options": [
      "Hårt pumpade däck rullar lättare än däck med dåligt lufttryck, vilket minskar bränsleförbrukningen (och även däckslitaget).",
      "Lågt lufttryck gör alltid att bilen drar mindre bränsle, eftersom däcken blir mjukare.",
      "Lufttrycket påverkar bara komforten, inte bränsleförbrukningen."
    ],
    "correct": 0,
    "hint": "Ett hårdare däck har mindre kontaktyta mot vägen och rullar därför lättare.",
    "explanation": "Hårt pumpade däck rullar lättare än däck med dåligt lufttryck. Ju lättare bilen rullar, desto mindre bränsle går åt för att driva fram den. Slitaget på däcken minskar även.",
    "takeaway": "Rätt (högt) lufttryck sänker både bränsleförbrukningen och däckslitaget."
  },
  {
    "id": "book-environment-q16",
    "topic": "environment",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "environment",
    "bookUnitId": "book-environment",
    "bookPages": [306],
    "coverageIds": ["book-environment-t16"],
    "title": "AC och bränsleförbrukning",
    "situation": "Hur mycket kan du spara i bränsleförbrukning genom att köra med AC:n avstängd?",
    "options": [
      "5–10 %.",
      "50 %.",
      "Nästan ingenting, AC:n kräver försumbart lite energi."
    ],
    "correct": 0,
    "hint": "AC:n kräver mycket energi för att fungera.",
    "explanation": "Luftkonditioneringen (AC) kräver mycket energi för att fungera. Kör du med AC:n avstängd kan du spara 5–10 % i bränsleförbrukning.",
    "takeaway": "Avstängd AC kan sänka bränsleförbrukningen med 5–10 %."
  },
  {
    "id": "book-environment-q17",
    "topic": "environment",
    "kind": "Säkerhetsråd",
    "source": "book",
    "chapterId": "environment",
    "bookUnitId": "book-environment",
    "bookPages": [307],
    "coverageIds": ["book-environment-t17"],
    "title": "Var du bör tvätta bilen",
    "situation": "Varför bör du tvätta bilen på ett ställe avsett för biltvätt, till exempel en bensinmack?",
    "options": [
      "Dessa ställen har speciella golvbrunnar som samlar upp de skadliga restprodukterna från tvätten.",
      "Det är bara en ekonomisk fråga, utan miljöskäl.",
      "Det krävs enbart för att undvika repor i lacken."
    ],
    "correct": 0,
    "hint": "Restprodukterna från biltvätt kan annars hamna i naturen.",
    "explanation": "Du bör tvätta bilen på ett ställe som är avsett för biltvätt, exempelvis på en bensinmack. Dessa ställen har nämligen speciella golvbrunnar som samlar upp de skadliga restprodukterna från tvätten.",
    "takeaway": "Avsedda biltvättsplatser har golvbrunnar som hindrar skadliga restprodukter från att nå naturen."
  },
  {
    "id": "book-environment-q18",
    "topic": "environment",
    "kind": "Säkerhetsråd",
    "source": "book",
    "chapterId": "environment",
    "bookUnitId": "book-environment",
    "bookPages": [307],
    "coverageIds": ["book-environment-t18"],
    "title": "Varför vaxa bilen är bra för miljön",
    "situation": "Hur kan det vara bra för miljön att vaxa bilen?",
    "options": [
      "Vaxet bildar en skyddande hinna som gör att mindre smuts fastnar, vilket leder till färre tvättar.",
      "Vaxet innehåller ämnen som renar luften runt bilen när den körs.",
      "Vaxet gör att bilen behöver tankas mer sällan."
    ],
    "correct": 0,
    "hint": "Färre tvättar betyder mindre restprodukter totalt sett.",
    "explanation": "Att vaxa bilen gör den inte bara snygg — vaxet bildar även en skyddande hinna som gör att mindre smuts fastnar. Detta leder till färre tvättar, vilket är bra för miljön.",
    "takeaway": "Vaxning minskar hur ofta bilen behöver tvättas, vilket är bra för miljön."
  },
  {
    "id": "book-environment-q19",
    "topic": "environment",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "environment",
    "bookUnitId": "book-environment",
    "bookPages": [307],
    "coverageIds": ["book-environment-t19"],
    "title": "Koldioxid som den viktigaste växthusgasen",
    "situation": "Vilken av bokens kemiska föroreningar bidrar mest till växthuseffekten och klimatförändringen?",
    "options": [
      "Koldioxid (CO2).",
      "Kolmonoxid/koloxid (CO).",
      "Kväveoxider (NOx)."
    ],
    "correct": 0,
    "hint": "Den här gasen uppstår direkt vid förbränning av fossila bränslen som bensin och diesel.",
    "explanation": "Koldioxid (CO2) är den växthusgas som bidrar mest till växthuseffekten och klimatförändringen. Förbränningen av fossila bränslen som bensin och diesel orsakar stora koldioxidutsläpp.",
    "takeaway": "Koldioxid från förbränning av fossila bränslen är den huvudsakliga växthusgasen från trafiken."
  },
  {
    "id": "book-environment-q20",
    "topic": "environment",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "environment",
    "bookUnitId": "book-environment",
    "bookPages": [307],
    "coverageIds": ["book-environment-t20"],
    "title": "Kolmonoxidens effekt på kroppen",
    "situation": "Hur påverkar kolmonoxid (CO) kroppen, och vad kan minska utsläppen?",
    "options": [
      "Den försämrar blodets syreupptagningsförmåga och orsakar trötthet, samt kan vara livshotande i stora mängder; katalysatorer minskar kolmonoxidutsläppen.",
      "Den orsakar enbart hudirritation vid direktkontakt, utan effekt på blodet.",
      "Den förbättrar syreupptagningen tillfälligt men orsakar långsiktig lungskada."
    ],
    "correct": 0,
    "hint": "Samma typ av rening som minskar andra avgasutsläpp hjälper även här.",
    "explanation": "Kolmonoxid/koloxid (CO) försämrar blodets syreupptagningsförmåga. Den orsakar trötthet och kan vara livshotande i stora mängder. Katalysatorer minskar kolmonoxidutsläppen.",
    "takeaway": "Kolmonoxid stör kroppens syreupptagning och kan vara livsfarlig i höga koncentrationer."
  },
  {
    "id": "book-environment-q21",
    "topic": "environment",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "environment",
    "bookUnitId": "book-environment",
    "bookPages": [307],
    "coverageIds": ["book-environment-t21"],
    "title": "Kolvätens hälsoeffekter",
    "situation": "Vilka hälsoeffekter kan kolväten (HC) orsaka?",
    "options": [
      "De kan orsaka cancer och påverka arvsanlagen, samt bidra till att bilda marknära ozon.",
      "De orsakar enbart tillfällig hosta utan några långsiktiga effekter.",
      "De har ingen hälsopåverkan, bara en miljöpåverkan på sjöar."
    ],
    "correct": 0,
    "hint": "Kolväten delar en av sina effekter med kväveoxider: bildandet av marknära ozon.",
    "explanation": "Kolväten (HC) orsakar cancer, kan påverka arvsanlagen, och bidrar till att bilda marknära ozon.",
    "takeaway": "Kolväten är cancerframkallande, kan påverka arvsanlagen och bidrar till marknära ozon."
  },
  {
    "id": "book-environment-q22",
    "topic": "environment",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "environment",
    "bookUnitId": "book-environment",
    "bookPages": [307],
    "coverageIds": ["book-environment-t22"],
    "title": "Kväveoxidernas effekter",
    "situation": "Vilka miljö- och hälsoeffekter orsakar kväveoxider (NOx)?",
    "options": [
      "De bidrar till försurning av marken och övergödning av sjöar, påverkar människans arvsmassa och luftvägar, och bidrar till att bilda marknära ozon.",
      "De orsakar enbart korrosion på fordonets egen avgassystem.",
      "De har ingen effekt på naturen, bara på byggnaders fasader."
    ],
    "correct": 0,
    "hint": "Effekterna sträcker sig från mark och vatten till människans egen kropp.",
    "explanation": "Kväveoxider (NOx) bidrar till försurning av marken och övergödning av sjöar. De påverkar människans arvsmassa och luftvägar, och bidrar till att bilda marknära ozon.",
    "takeaway": "Kväveoxider skadar både naturen (försurning, övergödning) och människans luftvägar och arvsmassa."
  },
  {
    "id": "book-environment-q23",
    "topic": "environment",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "environment",
    "bookUnitId": "book-environment",
    "bookPages": [308],
    "coverageIds": ["book-environment-t23"],
    "title": "Marknära ozon, sot och giftiga partiklar",
    "situation": "Vad är marknära ozon skadligt för, och vilka problem orsakar sot och giftiga partiklar i biltäta städer?",
    "options": [
      "Marknära ozon är skadligt för växter och djur; sot och giftiga partiklar påverkar andningen och kan orsaka cancer.",
      "Marknära ozon är enbart ett estetiskt problem (dimma); sot och partiklar har ingen hälsopåverkan.",
      "Marknära ozon förbättrar luftkvaliteten lokalt, medan sot bara smutsar ner fasader."
    ],
    "correct": 0,
    "hint": "Båda företeelserna är vanliga problem i tätbefolkade, biltäta miljöer.",
    "explanation": "Ozon som bildas nära markytan är skadligt för växter och djur. Sot och giftiga partiklar är ett vanligt problem i biltäta städer — de påverkar andningen och kan orsaka cancer.",
    "takeaway": "Marknära ozon skadar växter och djur, medan sot/partiklar hotar människors andning och hälsa."
  },
  {
    "id": "book-environment-q24",
    "topic": "environment",
    "kind": "Säkerhetsråd",
    "source": "book",
    "chapterId": "environment",
    "bookUnitId": "book-environment",
    "bookPages": [308],
    "coverageIds": ["book-environment-t24"],
    "title": "Att minska trafikbuller",
    "situation": "Vad kan minska problemet med störande trafikbuller i städer?",
    "options": [
      "Sänkt hastighet och bullerskydd.",
      "Enbart att förbjuda bilar helt inom tätorten.",
      "Enbart att höja hastigheten, så att bilarna snabbare lämnar området."
    ],
    "correct": 0,
    "hint": "En av lösningarna syns ofta som en skylt längs vägen i bullerkänsliga områden.",
    "explanation": "I städer är störande ljud från bilar vanligt. Sänkt hastighet och bullerskydd minskar problemet.",
    "takeaway": "Lägre hastighet och bullerskydd är de åtgärder boken lyfter fram mot trafikbuller i städer."
  }
];

export const ENVIRONMENT_304_311_COVERAGE = [
  { id: "book-environment-t1", bookUnitId: "book-environment", pages: [304], label: "Fordonstrafikens andel av koldioxidutsläppen", questionIds: ["book-environment-q1"], visualStatus: "not-needed" },
  { id: "book-environment-t2", bookUnitId: "book-environment", pages: [304], label: "Växthuseffektens grundprincip", questionIds: ["book-environment-q2"], visualStatus: "not-needed" },
  { id: "book-environment-t3", bookUnitId: "book-environment", pages: [304], label: "Onaturlig förstärkning av växthuseffekten", questionIds: ["book-environment-q3"], visualStatus: "not-needed" },
  { id: "book-environment-t4", bookUnitId: "book-environment", pages: [304], label: "Mekanismen bakom förstärkt växthuseffekt", questionIds: ["book-environment-q4"], visualStatus: "reviewed" },
  { id: "book-environment-t5", bookUnitId: "book-environment", pages: [305], label: "Naturkatastrofer som konsekvens", questionIds: ["book-environment-q5"], visualStatus: "not-needed" },
  { id: "book-environment-t6", bookUnitId: "book-environment", pages: [305], label: "Brist på vatten som konsekvens", questionIds: ["book-environment-q6"], visualStatus: "not-needed" },
  { id: "book-environment-t7", bookUnitId: "book-environment", pages: [305], label: "Störningar i odlingen och sjukdomar", questionIds: ["book-environment-q7"], visualStatus: "not-needed" },
  { id: "book-environment-t8", bookUnitId: "book-environment", pages: [305], label: "Katalysatorns funktion", questionIds: ["book-environment-q8"], visualStatus: "not-needed" },
  { id: "book-environment-t9", bookUnitId: "book-environment", pages: [305], label: "Katalysatorns effektivitet och arbetstemperatur", questionIds: ["book-environment-q9"], visualStatus: "not-needed" },
  { id: "book-environment-t10", bookUnitId: "book-environment", pages: [305], label: "Fördelar med motorvärmare", questionIds: ["book-environment-q10"], visualStatus: "not-needed" },
  { id: "book-environment-t11", bookUnitId: "book-environment", pages: [306], label: "Motorvärmartid efter temperatur", questionIds: ["book-environment-q11"], visualStatus: "not-needed" },
  { id: "book-environment-t12", bookUnitId: "book-environment", pages: [306], label: "Motorvärmare för länge är onödigt", questionIds: ["book-environment-q12"], visualStatus: "not-needed" },
  { id: "book-environment-t13", bookUnitId: "book-environment", pages: [306, 309, 310], label: "Takräcke/takbox ökar luftmotstånd", questionIds: ["book-environment-q13"], visualStatus: "not-needed" },
  { id: "book-environment-t14", bookUnitId: "book-environment", pages: [306], label: "Stängda rutor minskar luftmotstånd", questionIds: ["book-environment-q14"], visualStatus: "not-needed" },
  { id: "book-environment-t15", bookUnitId: "book-environment", pages: [306], label: "Rätt däcktryck sänker bränsleförbrukningen", questionIds: ["book-environment-q15"], visualStatus: "not-needed" },
  { id: "book-environment-t16", bookUnitId: "book-environment", pages: [306], label: "AC avstängd sparar 5–10 % bränsle", questionIds: ["book-environment-q16"], visualStatus: "not-needed" },
  { id: "book-environment-t17", bookUnitId: "book-environment", pages: [307], label: "Tvätta bilen på avsedd plats", questionIds: ["book-environment-q17"], visualStatus: "not-needed" },
  { id: "book-environment-t18", bookUnitId: "book-environment", pages: [307], label: "Vaxning minskar antalet tvättar", questionIds: ["book-environment-q18"], visualStatus: "not-needed" },
  { id: "book-environment-t19", bookUnitId: "book-environment", pages: [307], label: "Koldioxid som huvudsaklig växthusgas", questionIds: ["book-environment-q19"], visualStatus: "not-needed" },
  { id: "book-environment-t20", bookUnitId: "book-environment", pages: [307], label: "Kolmonoxidens effekt på blodet", questionIds: ["book-environment-q20"], visualStatus: "not-needed" },
  { id: "book-environment-t21", bookUnitId: "book-environment", pages: [307], label: "Kolvätens hälsoeffekter", questionIds: ["book-environment-q21"], visualStatus: "not-needed" },
  { id: "book-environment-t22", bookUnitId: "book-environment", pages: [307], label: "Kväveoxidernas effekter", questionIds: ["book-environment-q22"], visualStatus: "not-needed" },
  { id: "book-environment-t23", bookUnitId: "book-environment", pages: [308], label: "Marknära ozon samt sot och giftiga partiklar", questionIds: ["book-environment-q23"], visualStatus: "not-needed" },
  { id: "book-environment-t24", bookUnitId: "book-environment", pages: [308], label: "Åtgärder mot trafikbuller", questionIds: ["book-environment-q24"], visualStatus: "reviewed" }
];

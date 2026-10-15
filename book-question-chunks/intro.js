// PDF 5–13. Original scenarios, reviewed against text and source illustrations.
// Stable IDs preserve answer history when wording changes.
export const INTRO_QUESTIONS = [
  {
    "id": "book-intro-q01",
    "topic": "rules",
    "kind": "Trafikregel",
    "source": "book",
    "chapterId": "driver",
    "bookUnitId": "book-intro",
    "bookPages": [
      6,
      7
    ],
    "coverageIds": [
      "book-intro-t1",
      "book-intro-t13"
    ],
    "title": "Omsorg och varsamhet",
    "situation": "Du kan ta dig fram snabbare genom att köra med små marginaler till andra trafikanter. Vad bör styra ditt beslut?",
    "options": [
      "Att färden går så snabbt som möjligt.",
      "Att du kör försiktigt och undviker att utsätta andra för risker.",
      "Att andra trafikanter får anpassa sig till dig."
    ],
    "correct": 1,
    "hint": "Grundreglerna handlar om hur ditt körsätt påverkar andra.",
    "explanation": "Omsorg och varsamhet innebär att välja ett försiktigt körsätt. Tidsvinster motiverar inte små säkerhetsmarginaler, och ansvaret kan inte skjutas över på andra.",
    "takeaway": "Låt säkerheten styra även när du skulle kunna komma fram snabbare."
  },
  {
    "id": "book-intro-q02",
    "topic": "rules",
    "kind": "Trafikregel",
    "source": "book",
    "chapterId": "driver",
    "bookUnitId": "book-intro",
    "bookPages": [
      6
    ],
    "coverageIds": [
      "book-intro-t2"
    ],
    "title": "Hänsyn omfattar även närboende",
    "situation": "Du kör genom ett område där människor bor nära vägen. Vilka ska du visa hänsyn till?",
    "options": [
      "Både trafikanterna och människorna som bor nära vägen.",
      "Bara dem som befinner sig på körbanan.",
      "Bara andra fordonsförare."
    ],
    "correct": 0,
    "hint": "Alla som påverkas av trafiken är inte själva ute på vägen.",
    "explanation": "Hänsynen omfattar både dem som använder vägen och dem som bor i närheten. De andra alternativen begränsar ansvaret för mycket.",
    "takeaway": "Trafikhänsyn gäller också människor som bor intill vägen."
  },
  {
    "id": "book-intro-q03",
    "topic": "rules",
    "kind": "Trafikregel",
    "source": "book",
    "chapterId": "driver",
    "bookUnitId": "book-intro",
    "bookPages": [
      6
    ],
    "coverageIds": [
      "book-intro-t3"
    ],
    "title": "Grupper som kräver särskild hänsyn",
    "situation": "Vilken gruppindelning motsvarar dem som särskilt lyfts fram som behövande av extra hänsyn i trafiken?",
    "options": [
      "Enbart barn som går utan vuxen.",
      "Enbart cyklister och mopedister.",
      "Barn, skolpatruller, äldre och personer med funktionsnedsättning."
    ],
    "correct": 2,
    "hint": "Det gäller flera grupper, inte bara barn.",
    "explanation": "Barn, skolpatruller, äldre och personer med funktionsnedsättning omfattas av den särskilda hänsynen. Att bara uppmärksamma en grupp räcker inte.",
    "takeaway": "Visa särskild hänsyn till barn, skolpatruller, äldre och personer med funktionsnedsättning."
  },
  {
    "id": "book-intro-q04",
    "topic": "rules",
    "kind": "Trafikregel",
    "source": "book",
    "chapterId": "driver",
    "bookUnitId": "book-intro",
    "bookPages": [
      6
    ],
    "coverageIds": [
      "book-intro-t4"
    ],
    "title": "Undvik onödiga hinder",
    "situation": "Ditt sätt att köra hindrar andra, trots att det inte behövs av säkerhetsskäl eller någon annan anledning. Hur bör du agera?",
    "options": [
      "Fortsätta eftersom andra alltid ska vänta.",
      "Ändra körsättet så att du inte hindrar andra i onödan.",
      "Bara ta hänsyn om någon tutar."
    ],
    "correct": 1,
    "hint": "Skilj mellan nödvändig försiktighet och onödigt hindrande.",
    "explanation": "Du ska inte störa eller hindra i onödan. Hänsynen gäller utan att andra först behöver protestera.",
    "takeaway": "Undvik att skapa hinder som saknar anledning."
  },
  {
    "id": "book-intro-q05",
    "topic": "safety",
    "kind": "Säkerhetsprincip",
    "source": "book",
    "chapterId": "driver",
    "bookUnitId": "book-intro",
    "bookPages": [
      6
    ],
    "coverageIds": [
      "book-intro-t5"
    ],
    "title": "Skyldigheter i stället för anspråk",
    "situation": "En förare säger: ”Jag har rätt att köra först, så säkerheten är de andras ansvar.” Vilket synsätt stämmer med trafikens grundregler?",
    "options": [
      "Trafikanterna har gemensamma skyldigheter, inte en rätt att kräva att andra löser situationen.",
      "Den som anser sig ha företräde slipper visa hänsyn.",
      "Gemensamma skyldigheter gäller bara när vägmärken saknas."
    ],
    "correct": 0,
    "hint": "En trafiksituation kräver ansvar även från den som ska köra vidare.",
    "explanation": "Grundreglerna betonar gemensamma skyldigheter. Att hänvisa till en egen rättighet befriar inte någon från omsorg och hänsyn.",
    "takeaway": "Ta ansvar för samspelet i stället för att hävda en ovillkorlig rätt."
  },
  {
    "id": "book-intro-q06",
    "topic": "rules",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "driver",
    "bookUnitId": "book-intro",
    "bookPages": [
      6
    ],
    "coverageIds": [
      "book-intro-t6"
    ],
    "title": "Väg, körbana och körfält",
    "situation": "En väg har två körfält i motsatta riktningar och en vägren utanför körbanan. Vilken beskrivning är riktig?",
    "options": [
      "Vägen består bara av vägrenen, medan körbanan är ett enda körfält.",
      "Körbanan omfattar också vägrenen, men vägen omfattar bara körfälten.",
      "Vägen omfattar körbanan och vägrenen; körbanan omfattar de två körfälten."
    ],
    "correct": 2,
    "hint": "Väg är det mest omfattande begreppet.",
    "explanation": "Körfälten är delarna där bilarna kör. De två körfälten bildar här körbanan. Vägrenen ligger utanför körbanan men ingår i vägen.",
    "takeaway": "Skilj mellan hela vägen, körbanan och de enskilda körfälten."
  },
  {
    "id": "book-intro-q07",
    "topic": "rules",
    "kind": "Begrepp och säkerhet",
    "source": "book",
    "chapterId": "driver",
    "bookUnitId": "book-intro",
    "bookPages": [
      6
    ],
    "coverageIds": [
      "book-intro-t7"
    ],
    "title": "Vägrenens främsta uppgift",
    "situation": "Vad är vägrenen i första hand avsedd att vara?",
    "options": [
      "Ett extra körfält för personbilar som vill köra fortare.",
      "En säkerhetszon för gående, cyklister, mopedister och långsamtgående fordon.",
      "Ett område som bara får användas av parkerade bilar."
    ],
    "correct": 1,
    "hint": "Vägrenen ligger utanför körbanan.",
    "explanation": "Vägrenen beskrivs som en säkerhetszon som främst används av de angivna trafikanterna. Den är inte ett vanligt extra bilkörfält.",
    "takeaway": "Räkna med andra användare på vägrenen."
  },
  {
    "id": "book-intro-q08",
    "topic": "rules",
    "kind": "Trafikregel och säkerhet",
    "source": "book",
    "chapterId": "driver",
    "bookUnitId": "book-intro",
    "bookPages": [
      6
    ],
    "coverageIds": [
      "book-intro-t8"
    ],
    "title": "Underlätta en omkörning",
    "situation": "En bil bakom dig vill köra om. Du överväger att köra ut på vägrenen en kort stund, men sikten över vägrenen är begränsad. Vilket påstående är riktigt?",
    "options": [
      "Tillfällig körning där kan användas för att underlätta omkörningen, men den begränsade sikten kräver försiktighet.",
      "Vägrenen måste alltid användas när någon vill köra om.",
      "När syftet är att underlätta en omkörning saknar sikten betydelse."
    ],
    "correct": 0,
    "hint": "En möjlighet är inte en skyldighet eller en garanti för säkerhet.",
    "explanation": "En bilförare kan använda vägrenen kortvarigt för att underlätta en omkörning. Begränsad sikt är däremot ett uttryckligt skäl till försiktighet.",
    "takeaway": "Använd inte vägrenen utan att bedöma riskerna."
  },
  {
    "id": "book-intro-q09",
    "topic": "rules",
    "kind": "Trafikregel",
    "source": "book",
    "chapterId": "driver",
    "bookUnitId": "book-intro",
    "bookPages": [
      6
    ],
    "coverageIds": [
      "book-intro-t9"
    ],
    "title": "Från vägren till körbana",
    "situation": "Du kör på vägrenen och vill återvända till körbanan. Ett annat fordon befinner sig på körbanan. Vem har väjningsplikt?",
    "options": [
      "Fordonet på körbanan, eftersom du vill byta plats.",
      "Ingen, eftersom båda befinner sig på samma väg.",
      "Du som kommer från vägrenen."
    ],
    "correct": 2,
    "hint": "Vägrenen och körbanan har olika funktioner.",
    "explanation": "Fordon på vägrenen har väjningsplikt mot fordon på körbanan. Att vilja köra in på körbanan ger inte företräde.",
    "takeaway": "Lämna företräde åt trafiken på körbanan när du kommer från vägrenen."
  },
  {
    "id": "book-intro-q10",
    "topic": "safety",
    "kind": "Säkerhetsråd",
    "source": "book",
    "chapterId": "driver",
    "bookUnitId": "book-intro",
    "bookPages": [
      7
    ],
    "coverageIds": [
      "book-intro-t10"
    ],
    "title": "Kontakt med en gående",
    "situation": "Du närmar dig ett övergångsställe där en person verkar vilja gå över. Vad hjälper er att förstå varandras avsikter?",
    "options": [
      "Att du undviker att titta mot personen.",
      "Att du söker ögonkontakt och gör ditt eget agerande tydligt.",
      "Att du utgår från att personen redan vet vad du tänker göra."
    ],
    "correct": 1,
    "hint": "Tydlighet minskar osäkerheten mellan trafikanter.",
    "explanation": "Ögonkontakt och tydliga avsikter är grundläggande säkerhetsåtgärder. De ersätts inte av antagandet att någon annan kan läsa dina tankar.",
    "takeaway": "Sök kontakt och visa tydligt hur du tänker agera."
  },
  {
    "id": "book-intro-q11",
    "topic": "safety",
    "kind": "Säkerhetsråd",
    "source": "book",
    "chapterId": "driver",
    "bookUnitId": "book-intro",
    "bookPages": [
      7
    ],
    "coverageIds": [
      "book-intro-t10"
    ],
    "title": "Kontakt med en korsande förare",
    "situation": "En annan förare ska korsa din färdväg. Vilket beteende bidrar till tydligt samspel?",
    "options": [
      "Sök ögonkontakt och var tydlig med dina avsikter.",
      "Håll dina avsikter otydliga tills den andra föraren har börjat köra.",
      "Förutsätt att den andra föraren alltid har sett dig."
    ],
    "correct": 0,
    "hint": "Även mellan fordonsförare behöver avsikterna bli begripliga.",
    "explanation": "Att söka ögonkontakt med en förare som ska korsa din väg är ett exempel på säker kommunikation. Att förutsätta att du är upptäckt skapar osäkerhet.",
    "takeaway": "Gör samspelet tydligt även med andra förare."
  },
  {
    "id": "book-intro-q12",
    "topic": "safety",
    "kind": "Säkerhetsråd",
    "source": "book",
    "chapterId": "driver",
    "bookUnitId": "book-intro",
    "bookPages": [
      7
    ],
    "coverageIds": [
      "book-intro-t11"
    ],
    "title": "En bildörr kan öppnas",
    "situation": "Du ska passera en parkerad bil. Varför behöver du hålla säkerhetsavstånd till den?",
    "options": [
      "För att parkerade bilar alltid börjar rulla när någon passerar.",
      "För att säkerhetsavstånd bara behövs till stillastående fordon.",
      "För att någon plötsligt kan öppna en dörr."
    ],
    "correct": 2,
    "hint": "Det kan hända något även när bilen står stilla.",
    "explanation": "En dörr kan öppnas hastigt. Avståndet ger en säkerhetsmarginal för detta. Det finns inget stöd för att bilen alltid börjar rulla, och avstånd behövs också till andra trafikanter.",
    "takeaway": "Lämna marginal för plötsligt öppnade bildörrar."
  },
  {
    "id": "book-intro-q13",
    "topic": "safety",
    "kind": "Säkerhetsråd",
    "source": "book",
    "chapterId": "driver",
    "bookUnitId": "book-intro",
    "bookPages": [
      7
    ],
    "coverageIds": [
      "book-intro-t11",
      "book-intro-t13"
    ],
    "title": "En cyklist kan vingla",
    "situation": "Du ska passera en cyklist som för tillfället cyklar rakt. Hur bör du tänka om avståndet?",
    "options": [
      "Lämna säkerhetsmarginal eftersom cyklisten kan vingla till.",
      "Passera så nära som möjligt eftersom cyklisten just nu håller rak kurs.",
      "Säkerhetsavstånd behövs bara om cyklisten redan vinglar."
    ],
    "correct": 0,
    "hint": "Marginalen behövs innan något oväntat händer.",
    "explanation": "En cyklist kan plötsligt ändra sin sidoposition. En rak kurs just nu är därför inget skäl att minska marginalen.",
    "takeaway": "Ta höjd för att en cyklist kan röra sig i sidled."
  },
  {
    "id": "book-intro-q14",
    "topic": "safety",
    "kind": "Säkerhetsråd",
    "source": "book",
    "chapterId": "driver",
    "bookUnitId": "book-intro",
    "bookPages": [
      7
    ],
    "coverageIds": [
      "book-intro-t12",
      "book-intro-t13",
      "book-intro-t14"
    ],
    "title": "Cyklist framför en parkerad bil",
    "situation": "Du närmar dig bakifrån en cyklist som snart behöver passera en parkerad bil. Bilen ligger i cyklistens färdväg. Vad behöver du räkna med inför en omkörning?",
    "options": [
      "Att cyklisten säkert håller samma sidoposition hela tiden.",
      "Att cyklisten kan styra längre ut mot vägens mitt för att passera bilen.",
      "Att den parkerade bilen tar bort behovet av säkerhetsmarginal."
    ],
    "correct": 1,
    "hint": "Tänk på hur hindret påverkar cyklistens väg.",
    "explanation": "Cyklisten behöver sannolikt röra sig utåt förbi den parkerade bilen. Omkörningen måste därför planeras med god marginal för den rörelsen.",
    "takeaway": "Förutse cyklistens väg runt hinder innan du kör om."
  },
  {
    "id": "book-intro-q15",
    "topic": "safety",
    "kind": "Säkerhetsråd",
    "source": "book",
    "chapterId": "driver",
    "bookUnitId": "book-intro",
    "bookPages": [
      7,
      8
    ],
    "coverageIds": [
      "book-intro-t14"
    ],
    "title": "Handlingsberedskap",
    "situation": "Trafiken verkar lugn. Vilket förhållningssätt är defensivt?",
    "options": [
      "Släpp uppsikten tills någon annan gör något oväntat.",
      "Utgå från att inget ovanligt kan inträffa när trafiken är lugn.",
      "Behåll uppsikten, tänk framåt och var beredd på något ovanligt."
    ],
    "correct": 2,
    "hint": "Förberedelse kommer före händelsen.",
    "explanation": "Defensiv körning innebär bra uppsikt och beredskap även för ovanliga händelser. Att vänta tills faran redan uppstått minskar möjligheten att agera i tid.",
    "takeaway": "Behåll beredskapen även i till synes lugna situationer."
  },
  {
    "id": "book-intro-q16",
    "topic": "safety",
    "kind": "Säkerhetsråd",
    "source": "book",
    "chapterId": "driver",
    "bookUnitId": "book-intro",
    "bookPages": [
      8
    ],
    "coverageIds": [
      "book-intro-t13",
      "book-intro-t14"
    ],
    "title": "Tänk igenom nästa steg",
    "situation": "Du står inför en trafiksituation där flera händelseförlopp är möjliga. Vad bör du göra innan du agerar?",
    "options": [
      "Bedöma situationen och tänka på vad som kan hända därefter.",
      "Agera först och fundera på följderna efteråt.",
      "Välja det snabbaste alternativet oavsett marginalerna."
    ],
    "correct": 0,
    "hint": "Framförhållning handlar om mer än det som händer just nu.",
    "explanation": "Defensiv körning omfattar att tänka igenom situationen före handlingen och förutse fortsättningen. Snabbhet utan riskbedömning är inte samma sak som god planering.",
    "takeaway": "Bedöm både nuläget och möjliga följder innan du agerar."
  },
  {
    "id": "book-intro-q17",
    "topic": "safety",
    "kind": "Säkerhetsråd",
    "source": "book",
    "chapterId": "driver",
    "bookUnitId": "book-intro",
    "bookPages": [
      7,
      8
    ],
    "coverageIds": [
      "book-intro-t15"
    ],
    "title": "Tid och mjuk körning",
    "situation": "Du planerar en bilresa och vet att du kommer att behöva sänka farten under vägen. Vilken plan stöder defensiv körning?",
    "options": [
      "Planera med små tidsmarginaler och bromsa sent.",
      "Ha gott om tid, kör mjukt och börja bromsa i god tid.",
      "Planera för stress och kompensera med kraftiga inbromsningar."
    ],
    "correct": 1,
    "hint": "Både tidsplaneringen och sättet att bromsa spelar roll.",
    "explanation": "Gott om tid minskar stressen. Mjuk körning och tidig bromsning är också delar av defensiv körning, till skillnad från sen och kraftig inbromsning.",
    "takeaway": "Planera med tidsmarginal och anpassa farten mjukt."
  },
  {
    "id": "book-intro-q18",
    "topic": "rules",
    "kind": "Trafikregel",
    "source": "book",
    "chapterId": "driver",
    "bookUnitId": "book-intro",
    "bookPages": [
      8
    ],
    "coverageIds": [
      "book-intro-t16"
    ],
    "title": "Anvisningarnas rangordning",
    "situation": "I en korsning får du motstridiga besked från polisens tecken, en trafiksignal med fast sken och ett vägmärke om stopp- eller väjningsplikt. Hur ordnar du dessa anvisningar och den allmänna väjningsregeln, från högst till lägst?",
    "options": [
      "Vägmärken, allmänna regler, trafiksignaler, polisens tecken.",
      "Trafiksignaler, vägmärken, polisens tecken, allmänna regler.",
      "Polisens eller vägtransportledarens tecken, trafiksignaler, vägmärken, allmänna regler."
    ],
    "correct": 2,
    "hint": "En persons trafikdirigering står högst i denna ordning.",
    "explanation": "Polisens och motsvarande behörig trafikdirigerings anvisningar kommer först. Fast sken i trafiksignalen gäller framför skyltad stopp- eller väjningsplikt, och skyltad väjning går före en allmän regel som högerregeln. Det betyder inte att grönt ljus upphäver andra vägmärken, exempelvis en hastighetsgräns.",
    "takeaway": "Följ den högst rangordnade anvisningen när besked krockar."
  },
  {
    "id": "book-intro-q19",
    "topic": "rules",
    "kind": "Trafikregel",
    "source": "book",
    "chapterId": "driver",
    "bookUnitId": "book-intro",
    "bookPages": [
      8
    ],
    "coverageIds": [
      "book-intro-t16",
      "book-intro-t17"
    ],
    "title": "Grönt ljus och stoppskylt",
    "situation": "Du närmar dig en stopplinje. För din färdriktning finns både en stoppskylt och en fungerande trafiksignal som visar grönt. Kräver stoppskylten att du stannar vid linjen?",
    "options": [
      "Nej, den gröna trafiksignalen gäller framför stoppskylten.",
      "Ja, stoppskylten gäller alltid framför trafiksignalen.",
      "Ja, vägmärket och trafiksignalen måste alltid följas samtidigt."
    ],
    "correct": 0,
    "hint": "Jämför trafiksignalens och vägmärkets plats i rangordningen.",
    "explanation": "Trafiksignalen har högre rang än stoppskylten. Stoppskylten kräver därför inte ett stopp i denna situation.",
    "takeaway": "Grön signal gäller framför en stoppskylt."
  },
  {
    "id": "book-intro-q20",
    "topic": "rules",
    "kind": "Trafikregel",
    "source": "book",
    "chapterId": "driver",
    "bookUnitId": "book-intro",
    "bookPages": [
      8
    ],
    "coverageIds": [
      "book-intro-t18"
    ],
    "title": "Trafiksignalen fungerar inte",
    "situation": "Vid en korsning finns en stoppskylt och en trafiksignal för din färdriktning. Trafiksignalen är ur funktion. Vad ska du följa?",
    "options": [
      "Enbart högerregeln, eftersom alla anvisningar då upphör.",
      "Stoppskylten.",
      "Den signal som du tror visades senast."
    ],
    "correct": 1,
    "hint": "Vägmärket finns fortfarande kvar som anvisning.",
    "explanation": "När trafiksignalen är ur funktion ska stoppskylten följas. Ett antagande om tidigare signal ersätter inte den gällande anvisningen.",
    "takeaway": "Följ stoppskylten när trafiksignalen inte fungerar."
  },
  {
    "id": "book-intro-q21",
    "topic": "safety",
    "kind": "Trafikregel och säkerhet",
    "source": "book",
    "chapterId": "driver",
    "bookUnitId": "book-intro",
    "bookPages": [
      9
    ],
    "coverageIds": [
      "book-intro-t19"
    ],
    "title": "Kontroll och stoppmöjlighet",
    "situation": "Du väljer hastighet på en väg där ett hinder framför dig går att förutse. Vilket krav ska ditt hastighetsval uppfylla?",
    "options": [
      "Du behöver bara kunna stanna om hindret är oväntat.",
      "Skyltad hastighet befriar dig från att bedöma stoppmöjligheten.",
      "Du ska ha kontroll över fordonet och kunna stanna framför hindret."
    ],
    "correct": 2,
    "hint": "Hastigheten ska ge handlingsutrymme.",
    "explanation": "Hastighetsanpassning ska ge kontroll och möjlighet att stanna framför förutsägbara hinder. Hastighetsskylten ersätter inte den bedömningen.",
    "takeaway": "Välj en fart som ger kontroll och stoppmarginal."
  },
  {
    "id": "book-intro-q22",
    "topic": "safety",
    "kind": "Trafikregel och säkerhet",
    "source": "book",
    "chapterId": "driver",
    "bookUnitId": "book-intro",
    "bookPages": [
      9
    ],
    "coverageIds": [
      "book-intro-t20"
    ],
    "title": "Trafik, fordon och last",
    "situation": "Du bedömer lämplig hastighet inför och under en färd. Vilka av följande förhållanden ska vägas in?",
    "options": [
      "Övrig trafik, fordonets skick och dess last.",
      "Bara hastighetsskylten, inte fordonets skick.",
      "Bara lasten, inte trafiken runt dig."
    ],
    "correct": 0,
    "hint": "Hastighetsanpassningen omfattar både omgivningen och ditt fordon.",
    "explanation": "Du ska ta hänsyn till trafiken samt till fordonets skick och last. De andra alternativen utelämnar sådant som uttryckligen ska ingå i bedömningen.",
    "takeaway": "Anpassa farten efter både trafiken och fordonets förutsättningar."
  },
  {
    "id": "book-intro-q23",
    "topic": "safety",
    "kind": "Trafikregel och säkerhet",
    "source": "book",
    "chapterId": "driver",
    "bookUnitId": "book-intro",
    "bookPages": [
      9
    ],
    "coverageIds": [
      "book-intro-t19",
      "book-intro-t21",
      "book-intro-t23"
    ],
    "title": "70-väg med halka och skymd kurva",
    "situation": "Hastighetsbegränsningen är 70 km/h. Du närmar dig en kurva med skymd sikt och väglaget är halt. Vilket beslut är lämpligt?",
    "options": [
      "Håll 70 km/h eftersom skylten anger att den farten alltid är lämplig.",
      "Anpassa farten nedåt efter halkans och den begränsade siktens risker.",
      "Bortse från väglaget så länge bilen har lastats rätt."
    ],
    "correct": 1,
    "hint": "Tillåten hastighet och lämplig hastighet är inte samma sak.",
    "explanation": "Skymd sikt och halka gör 70 km/h olämpligt i den beskrivna situationen. Hastigheten måste anpassas efter väder, väglag och möjligheten att upptäcka hinder. Någon exakt lämplig fart anges inte.",
    "takeaway": "Sänk farten när sikt och väglag kräver större marginaler."
  },
  {
    "id": "book-intro-q24",
    "topic": "safety",
    "kind": "Trafikregel och säkerhet",
    "source": "book",
    "chapterId": "driver",
    "bookUnitId": "book-intro",
    "bookPages": [
      9
    ],
    "coverageIds": [
      "book-intro-t22",
      "book-intro-t4"
    ],
    "title": "Bromsning utan anledning",
    "situation": "Det finns inget hinder, ingen fara eller annan anledning att ändra farten kraftigt. Vilket påstående är riktigt?",
    "options": [
      "Det är alltid tillåtet att bromsa plötsligt för att påverka trafiken bakom.",
      "Överdrivet långsam körning är alltid lämplig oavsett omständigheterna.",
      "Du ska inte plötsligt bromsa eller köra överdrivet långsamt utan anledning."
    ],
    "correct": 2,
    "hint": "Det avgörande här är att anledning saknas.",
    "explanation": "Omotiverad plötslig bromsning och överdrivet långsam körning ska undvikas. Detta hindrar inte motiverad fartminskning för exempelvis halka eller dålig sikt.",
    "takeaway": "Säkerhetsanpassa farten, men skapa inte omotiverade störningar."
  },
  {
    "id": "book-intro-q25",
    "topic": "rules",
    "kind": "Trafikregel",
    "source": "book",
    "chapterId": "driver",
    "bookUnitId": "book-intro",
    "bookPages": [
      9
    ],
    "coverageIds": [
      "book-intro-t23"
    ],
    "title": "Bashastigheter när skylt saknas",
    "situation": "Du jämför två vägar utan hastighetsskylt: en inom tättbebyggt område och en utanför. Vilka bashastigheter anges för dessa två fall?",
    "options": [
      "50 km/h inom och 70 km/h utanför tättbebyggt område.",
      "70 km/h inom och 50 km/h utanför tättbebyggt område.",
      "70 km/h i båda fallen."
    ],
    "correct": 0,
    "hint": "Den lägre bashastigheten hör till det tättbebyggda området.",
    "explanation": "De angivna bashastigheterna är 50 respektive 70 km/h. Finns en hastighetsskylt gäller den i första hand. Även då måste farten anpassas till förhållandena.",
    "takeaway": "Skilj på skyltad hastighet, bashastighet och lämplig fart."
  },
  {
    "id": "book-intro-q26",
    "topic": "rules",
    "kind": "Trafikregel",
    "source": "book",
    "chapterId": "driver",
    "bookUnitId": "book-intro",
    "bookPages": [
      10
    ],
    "coverageIds": [
      "book-intro-t24"
    ],
    "title": "Stanna före ett övergångsställe",
    "situation": "Du vill frivilligt stanna eller parkera åtta meter före ett övergångsställe, inte stanna för att trafiken kräver det. Är platsen tillåten för detta?",
    "options": [
      "Ja, eftersom förbudet bara gäller parkering.",
      "Nej, både stopp och parkering är förbjudna inom tio meter före övergångsstället.",
      "Ja, eftersom åtta meter är längre än förbudssträckan."
    ],
    "correct": 1,
    "hint": "Jämför åtta meter med den angivna gränsen på tio meter.",
    "explanation": "Åtta meter ligger inom tiometerssträckan före övergångsstället. Förbudet omfattar både att stanna och att parkera, inte bara parkering.",
    "takeaway": "Stanna eller parkera inte frivilligt inom tio meter före övergångsstället."
  },
  {
    "id": "book-intro-q27",
    "topic": "safety",
    "kind": "Trafikregel och säkerhet",
    "source": "book",
    "chapterId": "driver",
    "bookUnitId": "book-intro",
    "bookPages": [
      10
    ],
    "coverageIds": [
      "book-intro-t25"
    ],
    "title": "Osäker avsikt vid övergångsställe",
    "situation": "Vid ett obevakat övergångsställe står en person nära kanten. Du kan inte säkert avgöra om personen just ska gå ut eller väntar på att du ska passera. Hur kör du säkert?",
    "options": [
      "Jag fortsätter tills personen står mitt i körbanan.",
      "Jag gissar att personen väntar och behåller farten.",
      "Jag sänker farten, försöker förstå avsikten och är beredd att stanna och lämna företräde."
    ],
    "correct": 2,
    "hint": "Alla trafikregler kan inte tillämpas genom att bara mäta.",
    "explanation": "Vid ett obevakat övergångsställe ska du väja för gående som har gått ut eller just ska gå ut. Bokens bild illustrerar att avsikten kan vara svår att bedöma. Osäkerhet kräver försiktighet och beredskap att stanna, inte en chansning om vad personen tänker göra. En eventuell domstolsbedömning gäller omständigheterna i det enskilda fallet.",
    "takeaway": "Oklar avsikt vid övergångsstället: sänk farten och var beredd att stanna."
  },
  {
    "id": "book-intro-q28",
    "topic": "rules",
    "kind": "Bedömning i bokens exempel",
    "source": "book",
    "chapterId": "driver",
    "bookUnitId": "book-intro",
    "bookPages": [
      10
    ],
    "coverageIds": [
      "book-intro-t25"
    ],
    "title": "Vem bedömer en anmäld händelse?",
    "situation": "I bokens exempel anmäls en förare för att inte ha stannat för en gående, och fallet prövas av domstol. Det är omtvistat om personen just skulle gå ut på övergångsstället. Hur gör domstolen bedömningen?",
    "options": [
      "Domstolen jämför reglerna med omständigheterna i det specifika fallet och avgör saken.",
      "En anmälan innebär automatiskt att regeln har brutits.",
      "Din egen bedömning kan aldrig ifrågasättas."
    ],
    "correct": 0,
    "hint": "En anmälan och ett avgörande är olika steg.",
    "explanation": "Efter en anmälan kan domstolen bedöma reglerna i förhållande till det enskilda fallet. Varken anmälan i sig eller förarens egen uppfattning avgör automatiskt resultatet.",
    "takeaway": "En rimlig egen bedömning kan senare prövas av domstol."
  },
  {
    "id": "book-intro-q29",
    "topic": "rules",
    "kind": "Trafikregel",
    "source": "book",
    "chapterId": "driver",
    "bookUnitId": "book-intro",
    "bookPages": [
      11,
      12
    ],
    "coverageIds": [
      "book-intro-t16",
      "book-intro-t26"
    ],
    "title": "Högersväng med grönt och väjningsskylt",
    "situation": "Du vill svänga höger i en korsning. Trafiksignalen för din färd visar fast grönt sken och fungerar. Det finns också ett vägmärke om väjningsplikt för din tillfart. Medför väjningsmärket att du ska lämna företräde åt fordon som närmar sig från vänster?",
    "options": [
      "Ja, väjningsmärket gäller framför den gröna signalen.",
      "Nej, den fungerande gröna signalen gäller framför väjningsmärket.",
      "Ja, just vid högersväng får väjningsmärket högre rang än signalen."
    ],
    "correct": 1,
    "hint": "Svängriktningen ändrar inte rangordningen mellan signal och vägmärke.",
    "explanation": "Fast sken i trafiksignalen gäller framför vägmärket om väjningsplikt. Väjningsmärket blir styrande om signalerna är ur funktion. Frågan gäller skyldigheten som följer av just detta vägmärke, inte ett undantag från all omsorg i korsningen.",
    "takeaway": "En fungerande grön signal har högre rang än väjningsskylten."
  }
];

export const INTRO_COVERAGE = [
  {
    "id": "book-intro-t1",
    "bookUnitId": "book-intro",
    "pages": [
      6,
      7
    ],
    "label": "Omsorg och varsamhet",
    "questionIds": [
      "book-intro-q01"
    ],
    "visualStatus": "not-needed"
  },
  {
    "id": "book-intro-t2",
    "bookUnitId": "book-intro",
    "pages": [
      6
    ],
    "label": "Hänsyn till trafikanter och närboende",
    "questionIds": [
      "book-intro-q02"
    ],
    "visualStatus": "not-needed"
  },
  {
    "id": "book-intro-t3",
    "bookUnitId": "book-intro",
    "pages": [
      6
    ],
    "label": "Särskild hänsyn till utsatta grupper",
    "questionIds": [
      "book-intro-q03"
    ],
    "visualStatus": "not-needed"
  },
  {
    "id": "book-intro-t4",
    "bookUnitId": "book-intro",
    "pages": [
      6,
      9
    ],
    "label": "Inte störa eller hindra i onödan",
    "questionIds": [
      "book-intro-q04",
      "book-intro-q24"
    ],
    "visualStatus": "not-needed"
  },
  {
    "id": "book-intro-t5",
    "bookUnitId": "book-intro",
    "pages": [
      6
    ],
    "label": "Gemensamma skyldigheter utan företrädesrätt",
    "questionIds": [
      "book-intro-q05"
    ],
    "visualStatus": "not-needed"
  },
  {
    "id": "book-intro-t6",
    "bookUnitId": "book-intro",
    "pages": [
      6
    ],
    "label": "Väg, körbana och körfält",
    "questionIds": [
      "book-intro-q06"
    ],
    "visualStatus": "reviewed"
  },
  {
    "id": "book-intro-t7",
    "bookUnitId": "book-intro",
    "pages": [
      6
    ],
    "label": "Vägrenens funktion och användare",
    "questionIds": [
      "book-intro-q07"
    ],
    "visualStatus": "not-needed"
  },
  {
    "id": "book-intro-t8",
    "bookUnitId": "book-intro",
    "pages": [
      6
    ],
    "label": "Tillfällig körning på vägrenen",
    "questionIds": [
      "book-intro-q08"
    ],
    "visualStatus": "not-needed"
  },
  {
    "id": "book-intro-t9",
    "bookUnitId": "book-intro",
    "pages": [
      6
    ],
    "label": "Väjningsplikt från vägrenen",
    "questionIds": [
      "book-intro-q09"
    ],
    "visualStatus": "not-needed"
  },
  {
    "id": "book-intro-t10",
    "bookUnitId": "book-intro",
    "pages": [
      7
    ],
    "label": "Tydliga avsikter och ögonkontakt",
    "questionIds": [
      "book-intro-q10",
      "book-intro-q11"
    ],
    "visualStatus": "not-needed"
  },
  {
    "id": "book-intro-t11",
    "bookUnitId": "book-intro",
    "pages": [
      7
    ],
    "label": "Säkerhetsavstånd vid dörrar och cyklister",
    "questionIds": [
      "book-intro-q12",
      "book-intro-q13"
    ],
    "visualStatus": "not-needed"
  },
  {
    "id": "book-intro-t12",
    "bookUnitId": "book-intro",
    "pages": [
      7
    ],
    "label": "Omkörning av cyklist vid parkerad bil",
    "questionIds": [
      "book-intro-q14"
    ],
    "visualStatus": "reviewed"
  },
  {
    "id": "book-intro-t13",
    "bookUnitId": "book-intro",
    "pages": [
      6,
      7,
      8
    ],
    "label": "Riskundvikande och säkerhetsmarginaler",
    "questionIds": [
      "book-intro-q01",
      "book-intro-q13",
      "book-intro-q14",
      "book-intro-q16"
    ],
    "visualStatus": "not-needed"
  },
  {
    "id": "book-intro-t14",
    "bookUnitId": "book-intro",
    "pages": [
      7,
      8
    ],
    "label": "Uppsikt, framförhållning och handlingsberedskap",
    "questionIds": [
      "book-intro-q14",
      "book-intro-q15",
      "book-intro-q16"
    ],
    "visualStatus": "not-needed"
  },
  {
    "id": "book-intro-t15",
    "bookUnitId": "book-intro",
    "pages": [
      7,
      8
    ],
    "label": "Stressfri och mjuk körning",
    "questionIds": [
      "book-intro-q17"
    ],
    "visualStatus": "not-needed"
  },
  {
    "id": "book-intro-t16",
    "bookUnitId": "book-intro",
    "pages": [
      8,
      11,
      12
    ],
    "label": "Rangordning mellan trafikens anvisningar",
    "questionIds": [
      "book-intro-q18",
      "book-intro-q19",
      "book-intro-q29"
    ],
    "visualStatus": "not-needed"
  },
  {
    "id": "book-intro-t17",
    "bookUnitId": "book-intro",
    "pages": [
      8
    ],
    "label": "Grön signal framför stoppskylt",
    "questionIds": [
      "book-intro-q19"
    ],
    "visualStatus": "reviewed"
  },
  {
    "id": "book-intro-t18",
    "bookUnitId": "book-intro",
    "pages": [
      8
    ],
    "label": "Ur funktion varande trafiksignal",
    "questionIds": [
      "book-intro-q20"
    ],
    "visualStatus": "not-needed"
  },
  {
    "id": "book-intro-t19",
    "bookUnitId": "book-intro",
    "pages": [
      9
    ],
    "label": "Hastighet för kontroll och förutsägbara hinder",
    "questionIds": [
      "book-intro-q21",
      "book-intro-q23"
    ],
    "visualStatus": "not-needed"
  },
  {
    "id": "book-intro-t20",
    "bookUnitId": "book-intro",
    "pages": [
      9
    ],
    "label": "Hastighet efter trafik, fordon och last",
    "questionIds": [
      "book-intro-q22"
    ],
    "visualStatus": "not-needed"
  },
  {
    "id": "book-intro-t21",
    "bookUnitId": "book-intro",
    "pages": [
      9
    ],
    "label": "Hastighet efter väder, väglag och sikt",
    "questionIds": [
      "book-intro-q23"
    ],
    "visualStatus": "reviewed"
  },
  {
    "id": "book-intro-t22",
    "bookUnitId": "book-intro",
    "pages": [
      9
    ],
    "label": "Omotiverad bromsning och långsam körning",
    "questionIds": [
      "book-intro-q24"
    ],
    "visualStatus": "not-needed"
  },
  {
    "id": "book-intro-t23",
    "bookUnitId": "book-intro",
    "pages": [
      9
    ],
    "label": "Skyltad hastighet och bashastigheter",
    "questionIds": [
      "book-intro-q23",
      "book-intro-q25"
    ],
    "visualStatus": "not-needed"
  },
  {
    "id": "book-intro-t24",
    "bookUnitId": "book-intro",
    "pages": [
      10
    ],
    "label": "Stopp- och parkeringsförbud före övergångsställe",
    "questionIds": [
      "book-intro-q26"
    ],
    "visualStatus": "not-needed"
  },
  {
    "id": "book-intro-t25",
    "bookUnitId": "book-intro",
    "pages": [
      10
    ],
    "label": "Gåendes avsikt och domstolens bedömning",
    "questionIds": [
      "book-intro-q27",
      "book-intro-q28"
    ],
    "visualStatus": "reviewed"
  },
  {
    "id": "book-intro-t26",
    "bookUnitId": "book-intro",
    "pages": [
      11,
      12
    ],
    "label": "Högersväng med grön signal och väjningsskylt",
    "questionIds": [
      "book-intro-q29"
    ],
    "visualStatus": "reviewed"
  }
];

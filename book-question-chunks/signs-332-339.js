// PDF 332-339 (second subchunk of book-signs, PDF 324-361, a 38-page sign
// reference catalog). Reviewed source text and all sign illustrations.
// Covers the rest of förbudsmärken (C37-C46), all of påbudsmärken (D1-D12),
// all of anvisningsmärken (E1-E34), and the start of lokaliseringsmärken
// (F1-F38). Continues the comparison/grouping approach from the first
// subchunk rather than one question per sign.
export const SIGNS_332_339_QUESTIONS = [
  {
    "id": "book-signs-q22",
    "topic": "rules",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "signs",
    "bookUnitId": "book-signs",
    "bookPages": [332],
    "coverageIds": ["book-signs-t22"],
    "title": "Jämnt datum kontra ojämnt datum",
    "situation": "Vad innebär skylt C37, förbud mot att parkera fordon på dag med jämnt datum?",
    "options": [
      "Du får inte parkera där den dagar i månaden som har ett jämnt datumtal, till exempel den 14:e.",
      "Du får bara parkera där jämna årtal, till exempel 2026.",
      "Förbudet gäller bara under jämna klockslag."
    ],
    "correct": 0,
    "hint": "Jämnt datum betyder att datumtalet går att dela med två, till exempel 2, 4, 14 eller 30.",
    "explanation": "C37 förbjuder parkering på dagar då datumet är jämnt (till exempel den 2:a, 14:e eller 30:e). Sådan datumparkering används ofta för att växelvis hålla ena gatusidan fri, till exempel för städning.",
    "takeaway": "C37 förbjuder parkering på jämna datum; kontrollera dagens datum innan du parkerar på en sådan gata."
  },
  {
    "id": "book-signs-q23",
    "topic": "rules",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "signs",
    "bookUnitId": "book-signs",
    "bookPages": [332],
    "coverageIds": ["book-signs-t23"],
    "title": "Förbud mot att stanna och parkera",
    "situation": "Vad är skillnaden mellan C37/C38 (datumparkering) och C39 (förbud mot att stanna och parkera)?",
    "options": [
      "Datumparkering reglerar bara parkering beroende på dagens datum, medan C39 helt förbjuder både att stanna och att parkera, oavsett datum.",
      "De betyder exakt samma sak.",
      "C39 gäller bara parkering, inte att stanna kort för att släppa av en passagerare."
    ],
    "correct": 0,
    "hint": "C39 har ett kryss över den blå parkeringssymbolen, vilket markerar ett totalförbud.",
    "explanation": "C37 och C38 reglerar parkering utifrån datum, medan C39 (förbud mot att stanna och parkera) är ett totalförbud mot att både stanna och parkera på platsen.",
    "takeaway": "C39 förbjuder även korta stopp, inte bara parkering, till skillnad från datumparkeringsskyltarna."
  },
  {
    "id": "book-signs-q24",
    "topic": "rules",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "signs",
    "bookUnitId": "book-signs",
    "bookPages": [332],
    "coverageIds": ["book-signs-t24"],
    "title": "Ändamålsplats och vändplats",
    "situation": "Märkena C40 (ändamålsplats) och C42 (vändplats) har båda en slutskylt (C41 respektive C43) med snedstreck. Vad betyder ett sådant snedstreck över en gul skylt?",
    "options": [
      "Att platsens särskilda ändamål eller funktion, till exempel lastplats eller vändmöjlighet, upphör vid skylten.",
      "Att du måste vända bilen omedelbart.",
      "Att du har kört in på en motorväg."
    ],
    "correct": 0,
    "hint": "Jämför med hur till exempel tättbebyggt område upphör (E6) också markeras med ett snedstreck.",
    "explanation": "C40/C42 anger en ändamålsplats respektive vändplats, medan C41/C43 (med snedstreck) markerar att denna särskilda plats eller funktion tar slut.",
    "takeaway": "Ett snedstreck över en gul skylt betyder genomgående att den föregående platsens funktion upphör."
  },
  {
    "id": "book-signs-q25",
    "topic": "rules",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "signs",
    "bookUnitId": "book-signs",
    "bookPages": [332],
    "coverageIds": ["book-signs-t25"],
    "title": "Dubbdäcksförbud med undantag",
    "situation": "Skylt C44 förbjuder trafik med annat motordrivet fordon med dubbdäck än moped klass II. Vad betyder det i praktiken?",
    "options": [
      "De flesta motordrivna fordon med dubbdäck får inte köra där, men en moped klass II med dubbdäck är undantagen och får köra in.",
      "Förbudet gäller bara cyklar med dubbdäck.",
      "Alla fordon med dubbdäck, inklusive moped klass II, är förbjudna."
    ],
    "correct": 0,
    "hint": "Läs skyltens text noga: förbudet gäller 'annat... fordon... än moped klass II'.",
    "explanation": "C44 förbjuder motordrivna fordon med dubbdäck, med ett uttryckligt undantag för moped klass II, som alltså får köra in på platsen även med dubbdäck.",
    "takeaway": "C44 är ett dubbdäcksförbud riktat mot motorfordon i allmänhet, med moped klass II som uttalat undantag."
  },
  {
    "id": "book-signs-q26",
    "topic": "rules",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "signs",
    "bookUnitId": "book-signs",
    "bookPages": [332],
    "coverageIds": ["book-signs-t26"],
    "title": "Särskilda bestämmelser och tilläggstid",
    "situation": "Skylt C45 (särskilda bestämmelser för stannande och parkering) visas ofta tillsammans med en tidsangivelse, till exempel 8-18. Hur ska du tolka det?",
    "options": [
      "Reglerna för att stanna eller parkera gäller specifikt under det angivna klockslagsintervallet, till exempel mellan klockan 8 och 18.",
      "Du får bara köra på vägen mellan klockan 8 och 18.",
      "Tiden anger hur länge skylten själv är giltig innan den tas bort."
    ],
    "correct": 0,
    "hint": "Jämför med hur en tilläggstavla med klockslag avgränsar när en regel gäller.",
    "explanation": "Klockslagen på C45 anger under vilken tid på dygnet de särskilda bestämmelserna för att stanna eller parkera gäller, till exempel mellan klockan 8 och 18.",
    "takeaway": "Ett klockslagsintervall på en parkeringsskylt avgränsar när just den regeln är i kraft."
  },
  {
    "id": "book-signs-q27",
    "topic": "rules",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "signs",
    "bookUnitId": "book-signs",
    "bookPages": [333],
    "coverageIds": ["book-signs-t27"],
    "title": "Påbudsmärkenas färg och innebörd",
    "situation": "Påbudsmärken (D), till exempel D1 (påbjuden körriktning), har blå botten. Vad skiljer påbudsmärken från förbudsmärken (C)?",
    "options": [
      "Påbudsmärken anger vad du måste göra, till exempel vilken riktning eller bana du måste använda, medan förbudsmärken anger vad som är förbjudet.",
      "Påbudsmärken är bara rekommendationer, medan förbudsmärken är juridiskt bindande.",
      "Påbudsmärken gäller bara cyklister, förbudsmärken gäller bara bilister."
    ],
    "correct": 0,
    "hint": "Tänk på ordet 'påbjuden' i D1, det betyder 'föreskriven' eller 'obligatorisk'.",
    "explanation": "Påbudsmärken (D) har blå botten och anger en anvisning du måste följa, till exempel en påbjuden körriktning eller en påbjuden bana. Förbudsmärken (C) anger i stället vad som är förbjudet.",
    "takeaway": "Blå runda skyltar (D) föreskriver vad du ska göra; röda/vita runda skyltar (C) förbjuder något."
  },
  {
    "id": "book-signs-q28",
    "topic": "rules",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "signs",
    "bookUnitId": "book-signs",
    "bookPages": [333],
    "coverageIds": ["book-signs-t28"],
    "title": "Gemensam bana kontra delad bana",
    "situation": "Vad är skillnaden mellan D6 (påbjuden gång- och cykelbana) och D7 (påbjudna gång- och cykelbanor)?",
    "options": [
      "D6 visar en symbol för gående och cyklist utan avskiljande linje, vilket betyder att banan är gemensam, medan D7 har en linje mellan symbolerna och betyder att gång- och cykeltrafik är uppdelade på varsin del av banan.",
      "D6 gäller bara på landsbygden, D7 bara i städer.",
      "De två skyltarna betyder exakt samma sak."
    ],
    "correct": 0,
    "hint": "Titta på om det finns en vertikal linje mellan gång- och cykelsymbolerna.",
    "explanation": "D6 anger en gemensam gång- och cykelbana utan uppdelning. D7 har en linje mellan symbolerna och anger att banan är uppdelad, med en egen del för gående och en egen del för cyklister.",
    "takeaway": "En linje mellan symbolerna på D7 visar att gång- och cykeltrafik är fysiskt åtskilda, till skillnad från D6."
  },
  {
    "id": "book-signs-q29",
    "topic": "rules",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "signs",
    "bookUnitId": "book-signs",
    "bookPages": [333],
    "coverageIds": ["book-signs-t29"],
    "title": "Farligt gods och påbjuden körriktning",
    "situation": "Skylt D12 anger påbjuden körriktning för fordon lastat med farligt gods. Vad betyder den för en vanlig personbilsförare utan farligt gods?",
    "options": [
      "Inget särskilt; skylten riktar sig specifikt till fordon som transporterar farligt gods och styr dem till en viss väg eller riktning.",
      "Att alla fordon måste välja den visade riktningen.",
      "Att vägen är helt avstängd för alla fordon."
    ],
    "correct": 0,
    "hint": "Läs symbolen (den orange farligt gods-skylten) inuti märket.",
    "explanation": "D12 är en påbjuden körriktning som bara gäller fordon lastade med farligt gods; de hänvisas till en viss väg eller riktning, ofta för att undvika tunnlar eller tättbefolkade områden. Andra fordon berörs inte av påbudet.",
    "takeaway": "D12 styr bara farligt gods-transporter till en viss riktning, inte trafiken i allmänhet."
  },
  {
    "id": "book-signs-q30",
    "topic": "rules",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "signs",
    "bookUnitId": "book-signs",
    "bookPages": [334],
    "coverageIds": ["book-signs-t30"],
    "title": "Motorväg kontra motortrafikled",
    "situation": "Vad är den praktiska skillnaden mellan E1 (motorväg) och E3 (motortrafikled)?",
    "options": [
      "Motorväg har alltid mittremsa eller mitträcke och skilda körbanor i respektive riktning, medan en motortrafikled är byggd för snabb trafik men kan sakna fysisk mittdelning och tillåter i regel lägre maxhastighet.",
      "Motortrafikled är bara en synonym för motorväg utan skillnad i regler.",
      "Motorväg tillåter gående och cyklister, motortrafikled gör det inte."
    ],
    "correct": 0,
    "hint": "Tänk på vilken väg som har fysiskt skilda körriktningar och vilken som inte nödvändigtvis har det.",
    "explanation": "En motorväg (E1) har skilda körbanor för de olika körriktningarna, ofta med mitträcke. En motortrafikled (E3) är också byggd för genomgående trafik men saknar motorvägens krav på fysiskt skilda körbanor, och lägre fordon som mopeder är fortfarande förbjudna liksom på motorväg.",
    "takeaway": "Motorväg har fysiskt skilda körbanor; motortrafikled är en snabb väg utan det kravet."
  },
  {
    "id": "book-signs-q31",
    "topic": "rules",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "signs",
    "bookUnitId": "book-signs",
    "bookPages": [334],
    "coverageIds": ["book-signs-t31"],
    "title": "Gågata kontra gångfartsområde",
    "situation": "Vad är den viktigaste skillnaden mellan E7 (gågata) och E9 (gångfartsområde)?",
    "options": [
      "På en gågata får du bara köra in med fordon för korta transporter till fastighet och du ska köra i gångfart, medan ett gångfartsområde är en mer blandad miljö där fordonstrafik är tillåten men ska ske på de gåendes villkor och i gångfart.",
      "Gågata tillåter 30 km/h, gångfartsområde tillåter 50 km/h.",
      "De två skyltarna betyder exakt samma sak."
    ],
    "correct": 0,
    "hint": "Gågata är mer restriktiv för fordon, gångfartsområde är tänkt för mer blandad trafik.",
    "explanation": "På en gågata (E7) får fordon bara föras in för att nå en fastighet eller korsa gatan, och gångfart gäller. Ett gångfartsområde (E9) är en mer blandad trafikmiljö där fordon normalt får köra, men på de gåendes villkor och i gångfart.",
    "takeaway": "Gågata är strängare mot fordonstrafik än gångfartsområde, men båda kräver gångfart."
  },
  {
    "id": "book-signs-q32",
    "topic": "rules",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "signs",
    "bookUnitId": "book-signs",
    "bookPages": [335],
    "coverageIds": ["book-signs-t32"],
    "title": "Rekommenderad hastighet kontra hastighetsbegränsning",
    "situation": "Märkena E11 (rekommenderad lägre hastighet) och E13 (rekommenderad högsta hastighet) har siffror precis som en vanlig hastighetsbegränsning. Vad skiljer dem från en bindande hastighetsbegränsning?",
    "options": [
      "Rekommenderad hastighet är bara ett råd, inte en juridiskt bindande gräns, även om du bör följa den av säkerhetsskäl, till exempel inför en skarp kurva.",
      "Rekommenderad hastighet är strängare än en vanlig hastighetsbegränsning och måste alltid följas.",
      "Det finns ingen skillnad; båda är lika bindande."
    ],
    "correct": 0,
    "hint": "Ordet 'rekommenderad' signalerar att det rör sig om ett råd, inte en regel.",
    "explanation": "E11 och E13 anger en rekommenderad hastighet, till exempel inför en farlig kurva, men det är ett råd och inte en juridiskt bindande hastighetsbegränsning. Det är ändå klokt att följa rekommendationen av säkerhetsskäl.",
    "takeaway": "En rekommenderad hastighet är ett säkerhetsråd, till skillnad från en bindande hastighetsbegränsning."
  },
  {
    "id": "book-signs-q33",
    "topic": "rules",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "signs",
    "bookUnitId": "book-signs",
    "bookPages": [335],
    "coverageIds": ["book-signs-t33"],
    "title": "Mötesplats på smal väg",
    "situation": "Vad betyder skylt E18 (mötesplats)?",
    "options": [
      "Att du är vid en plats på en i övrigt smal väg där det finns utrymme att mötas eller köra om.",
      "Att du måste stanna och vänta på mötande trafik.",
      "Att vägen tar slut och du måste vända."
    ],
    "correct": 0,
    "hint": "Tänk på smala vägar där det bara finns utvalda ställen som är breda nog för möte.",
    "explanation": "E18 (mötesplats) markerar en plats på en smal väg där det finns tillräckligt utrymme för att mötande fordon ska kunna passera varandra eller för omkörning.",
    "takeaway": "Mötesplats-skylten hjälper dig hitta platser att mötas på smala vägar, inte en uppmaning att stanna."
  },
  {
    "id": "book-signs-q34",
    "topic": "rules",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "signs",
    "bookUnitId": "book-signs",
    "bookPages": [335],
    "coverageIds": ["book-signs-t34"],
    "title": "Automatisk trafikövervakning",
    "situation": "Vad innebär skylt E24 (automatisk trafiksäkerhetskontroll)?",
    "options": [
      "Att vägsträckan har kamerabaserad övervakning, till exempel för hastighet, vilket ska påminna dig om att hålla gällande regler.",
      "Att du måste stanna vid en bemannad poliskontroll.",
      "Att det inte finns någon trafikövervakning på sträckan."
    ],
    "correct": 0,
    "hint": "Symbolen visar en kamera.",
    "explanation": "E24 anger att det finns automatisk trafiksäkerhetskontroll, till exempel fartkameror, på vägsträckan. Det är en påminnelse om att hålla gällande trafikregler.",
    "takeaway": "Kameraskylten E24 varnar för automatisk övervakning, inte en bemannad kontroll."
  },
  {
    "id": "book-signs-q35",
    "topic": "safety",
    "kind": "Säkerhetsråd",
    "source": "book",
    "chapterId": "signs",
    "bookUnitId": "book-signs",
    "bookPages": [336],
    "coverageIds": ["book-signs-t35"],
    "title": "Nödutgång och nöduppställningsplats i tunnel",
    "situation": "I en tunnel ser du både E27 (nöduppställningsplats) och E28 (nödutgång). Vad är skillnaden mellan dem?",
    "options": [
      "Nöduppställningsplats (E27) är till för att ställa ett fordon åt sidan vid driftstopp eller olycka, medan nödutgång (E28) visar vägen ut ur tunneln till fots vid till exempel brand.",
      "Båda skyltarna visar exakt samma sak: en plats att parkera bilen på.",
      "E27 gäller bara cyklar, E28 gäller bara bilar."
    ],
    "correct": 0,
    "hint": "Den ena symbolen visar ett fordon, den andra en springande person.",
    "explanation": "E27 (nöduppställningsplats) markerar en plats i tunneln där du kan ställa fordonet vid driftstopp eller olycka. E28 (nödutgång) visar i stället vägen till en utgång du kan använda till fots, till exempel vid brand.",
    "takeaway": "Nöduppställningsplats är för fordonet, nödutgång är för dig som fotgängare i en nödsituation."
  },
  {
    "id": "book-signs-q36",
    "topic": "environment",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "signs",
    "bookUnitId": "book-signs",
    "bookPages": [336],
    "coverageIds": ["book-signs-t36"],
    "title": "Miljözon",
    "situation": "Vad innebär skylt E31 (miljözon), till exempel miljözon klass 1?",
    "options": [
      "Att fordon som inte uppfyller de avgaskrav som gäller för den angivna miljözonsklassen inte får köra in i området.",
      "Att området är bilfritt för alla motorfordon, utan undantag.",
      "Att skylten bara är informativ och saknar juridisk betydelse."
    ],
    "correct": 0,
    "hint": "Tänk på att miljözoner infördes för att minska utsläpp från äldre, mer förorenande fordon i tätbebyggda områden.",
    "explanation": "En miljözon (E31) begränsar vilka fordon som får köra in i området utifrån avgaskrav. Olika miljözonsklasser (till exempel klass 1, 2 och 3) ställer olika höga krav på fordonets avgasrening och ålder.",
    "takeaway": "Miljözonskyltar styr vilka fordon som får köra in, baserat på fordonets avgasrening, inte ett totalt körförbud för alla."
  },
  {
    "id": "book-signs-q37",
    "topic": "rules",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "signs",
    "bookUnitId": "book-signs",
    "bookPages": [336],
    "coverageIds": ["book-signs-t37"],
    "title": "Cykelgata",
    "situation": "Vad gäller på en cykelgata, markerad med skylt E33?",
    "options": [
      "Cyklande har företräde framför motorfordon, och motorfordon får bara köra in för korta transporter och ska hålla en låg hastighet, högst 30 km/h.",
      "Cykelgata betyder att bilar är helt förbjudna, utan undantag.",
      "Cykelgata är bara en vanlig cykelbana med ett annat namn."
    ],
    "correct": 0,
    "hint": "Jämför cykelgata med gågata: båda ger en trafikantgrupp företräde men stänger inte helt ute motorfordon.",
    "explanation": "På en cykelgata (E33) har cyklande företräde framför motorfordonstrafik. Motorfordon får köra in, men bara för korta transporter till fastighet längs gatan, och hastigheten får vara högst 30 km/h.",
    "takeaway": "Cykelgatan ger cyklister företräde och en låg hastighetsgräns för motorfordon, men stänger inte ute dem helt."
  },
  {
    "id": "book-signs-q38",
    "topic": "rules",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "signs",
    "bookUnitId": "book-signs",
    "bookPages": [337],
    "coverageIds": ["book-signs-t38"],
    "title": "Orienteringstavla, vägvisare och tabellvägvisare",
    "situation": "Lokaliseringsmärken för vägvisning (F) finns i flera varianter, till exempel F1 (orienteringstavla), F5 (vägvisare) och F6 (tabellvägvisare). Vad är deras gemensamma syfte?",
    "options": [
      "Att hjälpa dig hitta rätt väg genom att visa orter, riktningar och avstånd, till exempel inför eller i en korsning.",
      "Att varna för en fara i vägbanan.",
      "Att förbjuda trafik i en viss riktning."
    ],
    "correct": 0,
    "hint": "Tänk på de blå skyltarna med ortnamn och pilar som du möter inför större korsningar.",
    "explanation": "Lokaliseringsmärken för vägvisning (F), som orienteringstavla, vägvisare och tabellvägvisare, hjälper dig navigera genom att visa orter, körriktningar och ibland avstånd, särskilt inför och i korsningar.",
    "takeaway": "F-märken för vägvisning är till för navigering, inte för att varna eller förbjuda något."
  },
  {
    "id": "book-signs-q39",
    "topic": "rules",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "signs",
    "bookUnitId": "book-signs",
    "bookPages": [338],
    "coverageIds": ["book-signs-t39"],
    "title": "Riksmärke och vägnummer",
    "situation": "Vad är skillnaden mellan F14 (vägnummer, till exempel E4) och F22 (riksmärke, till exempel ett lands flagga)?",
    "options": [
      "Vägnummer identifierar själva vägen, till exempel E4:an, medan riksmärket visar vilket land en väg leder till eller tillhör, till exempel vid en gränsövergång.",
      "De två skyltarna betyder exakt samma sak.",
      "F22 anger alltid hastighetsbegränsningen i det landet."
    ],
    "correct": 0,
    "hint": "Den ena skylten har en flagga, den andra ett vägnummer som E4 eller en länsväg.",
    "explanation": "F14 (vägnummer) talar om vilken väg du befinner dig på, till exempel E4. F22 (riksmärke) visar i stället vilket land vägen leder till eller passerar, ofta i anslutning till en gräns.",
    "takeaway": "Vägnummer identifierar vägen, riksmärket identifierar landet vägen är kopplad till."
  },
  {
    "id": "book-signs-q40",
    "topic": "rules",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "signs",
    "bookUnitId": "book-signs",
    "bookPages": [338],
    "coverageIds": ["book-signs-t40"],
    "title": "Körfältsindelning och minskning av antal körfält",
    "situation": "Vad är skillnaden mellan F17 (minskning av antal körfält) och F18 (körfältsindelning på sträcka)?",
    "options": [
      "F17 varnar specifikt om att antalet körfält minskar framöver, medan F18 visar den aktuella körfältsindelningen och vilka riktningar eller svängar varje körfält gäller för, utan att nödvändigtvis minska antalet fält.",
      "De två skyltarna betyder exakt samma sak.",
      "F17 gäller bara motorväg, F18 gäller bara landsväg."
    ],
    "correct": 0,
    "hint": "Den ena symbolen visar pilar som smalnar av till färre fält, den andra visar flera parallella pilar med fasta riktningar.",
    "explanation": "F17 varnar om att antalet körfält minskar längre fram. F18 (körfältsindelning på sträcka) visar i stället hur de befintliga körfälten är indelade och vilken riktning eller sväng varje fält gäller för.",
    "takeaway": "F17 handlar om att fält försvinner, F18 handlar om hur befintliga fält är organiserade."
  },
  {
    "id": "book-signs-q41",
    "topic": "rules",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "signs",
    "bookUnitId": "book-signs",
    "bookPages": [339],
    "coverageIds": ["book-signs-t41"],
    "title": "Farligt gods och fordonsslag som lokaliseringsmärken",
    "situation": "Märkena F31 (märke för visst fordonsslag eller trafikantgrupp) och F32 (farligt gods) används ofta tillsammans med andra F-märken, till exempel vägvisare. Vad anger de?",
    "options": [
      "Att den vägvisning eller anläggning skylten sitter vid, till exempel en parkeringsplats eller körriktning, är avsedd för eller gäller det angivna fordonsslaget, till exempel lastbilar med farligt gods.",
      "Att all trafik är förbjuden på platsen.",
      "Att skylten bara är dekorativ utan praktisk betydelse."
    ],
    "correct": 0,
    "hint": "Tänk på hur en symbol för en lastbil eller farligt gods kan kombineras med en vägvisare eller parkeringsskylt.",
    "explanation": "F31 och F32 preciserar att den vägvisning, parkering eller anläggning skylten hör till gäller just det angivna fordonsslaget, till exempel tung lastbil eller fordon lastade med farligt gods.",
    "takeaway": "Dessa tilläggsmärken preciserar vilken fordonstyp en vägvisning eller anläggning avser."
  }
];

export const SIGNS_332_339_COVERAGE = [
  { id: "book-signs-t22", bookUnitId: "book-signs", pages: [332], label: "C37/C38: datumparkering, jämnt datum", questionIds: ["book-signs-q22"], visualStatus: "reviewed" },
  { id: "book-signs-t23", bookUnitId: "book-signs", pages: [332], label: "C39: totalförbud mot att stanna och parkera", questionIds: ["book-signs-q23"], visualStatus: "reviewed" },
  { id: "book-signs-t24", bookUnitId: "book-signs", pages: [332], label: "C40-C43: ändamålsplats/vändplats och slutskyltar", questionIds: ["book-signs-q24"], visualStatus: "reviewed" },
  { id: "book-signs-t25", bookUnitId: "book-signs", pages: [332], label: "C44: dubbdäcksförbud med undantag för moped klass II", questionIds: ["book-signs-q25"], visualStatus: "reviewed" },
  { id: "book-signs-t26", bookUnitId: "book-signs", pages: [332], label: "C45/C46: tilläggstid och trippelaxeltryck", questionIds: ["book-signs-q26"], visualStatus: "reviewed" },
  { id: "book-signs-t27", bookUnitId: "book-signs", pages: [333], label: "Påbudsmärkenas (D) blå form och innebörd", questionIds: ["book-signs-q27"], visualStatus: "reviewed" },
  { id: "book-signs-t28", bookUnitId: "book-signs", pages: [333], label: "D6/D7: gemensam kontra delad gång- och cykelbana", questionIds: ["book-signs-q28"], visualStatus: "reviewed" },
  { id: "book-signs-t29", bookUnitId: "book-signs", pages: [333], label: "D12: påbjuden körriktning för farligt gods", questionIds: ["book-signs-q29"], visualStatus: "reviewed" },
  { id: "book-signs-t30", bookUnitId: "book-signs", pages: [334], label: "E1/E3: motorväg kontra motortrafikled", questionIds: ["book-signs-q30"], visualStatus: "reviewed" },
  { id: "book-signs-t31", bookUnitId: "book-signs", pages: [334], label: "E7/E9: gågata kontra gångfartsområde", questionIds: ["book-signs-q31"], visualStatus: "reviewed" },
  { id: "book-signs-t32", bookUnitId: "book-signs", pages: [335], label: "E11/E13: rekommenderad hastighet som råd", questionIds: ["book-signs-q32"], visualStatus: "reviewed" },
  { id: "book-signs-t33", bookUnitId: "book-signs", pages: [335], label: "E18: mötesplats på smal väg", questionIds: ["book-signs-q33"], visualStatus: "reviewed" },
  { id: "book-signs-t34", bookUnitId: "book-signs", pages: [335], label: "E24: automatisk trafikövervakning", questionIds: ["book-signs-q34"], visualStatus: "reviewed" },
  { id: "book-signs-t35", bookUnitId: "book-signs", pages: [336], label: "E27/E28: nöduppställningsplats kontra nödutgång", questionIds: ["book-signs-q35"], visualStatus: "reviewed" },
  { id: "book-signs-t36", bookUnitId: "book-signs", pages: [336], label: "E31: miljözon och avgaskrav", questionIds: ["book-signs-q36"], visualStatus: "reviewed" },
  { id: "book-signs-t37", bookUnitId: "book-signs", pages: [336], label: "E33: cykelgata, cyklisters företräde", questionIds: ["book-signs-q37"], visualStatus: "reviewed" },
  { id: "book-signs-t38", bookUnitId: "book-signs", pages: [337], label: "F1/F5/F6: vägvisningens syfte", questionIds: ["book-signs-q38"], visualStatus: "reviewed" },
  { id: "book-signs-t39", bookUnitId: "book-signs", pages: [338], label: "F14/F22: vägnummer kontra riksmärke", questionIds: ["book-signs-q39"], visualStatus: "reviewed" },
  { id: "book-signs-t40", bookUnitId: "book-signs", pages: [338], label: "F17/F18: minskning kontra indelning av körfält", questionIds: ["book-signs-q40"], visualStatus: "reviewed" },
  { id: "book-signs-t41", bookUnitId: "book-signs", pages: [339], label: "F31/F32: fordonsslag och farligt gods som tilläggsmärken", questionIds: ["book-signs-q41"], visualStatus: "reviewed" }
];

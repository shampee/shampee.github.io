// PDF 224-227, 229-230. Reviewed source text and illustrations, including
// the worked "Testa dina kunskaper" example on 229-230, which reuses the
// fjädrande-pedal/luft concept from page 225 (see book-brakes-t10,
// extended here). PDF 228 is blank and PDF 231 is the next unit's title
// page ("Krocksäkerhet" / book-crash-protection), no content.
export const BRAKES_224_231_QUESTIONS = [
  {
    "id": "book-brakes-q1",
    "topic": "safety",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "vehicle",
    "bookUnitId": "book-brakes",
    "bookPages": [224],
    "coverageIds": ["book-brakes-t1"],
    "title": "Tvåkrets bromssystem",
    "situation": "Vad innebär ett tvåkrets bromssystem, och vad händer om en krets går sönder?",
    "options": [
      "Bromssystemet är indelat i två oberoende delar; går en krets (bromsen till två hjul) sönder fungerar den andra kretsen (återstående två hjul) som vanligt.",
      "Det är ett system med två separata pedaler, en för fram- och en för bakhjulen.",
      "Det innebär att bilen har både skivbromsar och trumbromsar samtidigt på varje hjul."
    ],
    "correct": 0,
    "hint": "Tanken är att ett fel inte ska slå ut hela bromsförmågan.",
    "explanation": "Tvåkrets bromssystem innebär att bromssystemet är indelat i två oberoende delar. Går en krets (bromsen till två hjul) sönder fungerar den andra kretsen (återstående två hjul) som vanligt. Detta ökar säkerheten och finns på alla bilar utom de riktigt gamla.",
    "takeaway": "Ett tvåkrets bromssystem gör att ett delfel inte slår ut all bromsförmåga."
  },
  {
    "id": "book-brakes-q2",
    "topic": "safety",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "vehicle",
    "bookUnitId": "book-brakes",
    "bookPages": [224],
    "coverageIds": ["book-brakes-t2"],
    "title": "Hydrauliska bromsar",
    "situation": "Vad innebär det att dagens bilar har hydrauliska bromsar?",
    "options": [
      "Bromskraften förs från pedalen till bromsarna med hjälp av en speciell bromsvätska.",
      "Bromsarna styrs helt elektroniskt utan någon mekanisk eller vätskebaserad koppling.",
      "Bromsarna drivs av tryckluft i stället för vätska."
    ],
    "correct": 0,
    "hint": "Ordet ”hydraulisk” syftar på att en vätska överför kraften.",
    "explanation": "Dagens bilar har hydrauliska bromsar. Detta innebär att bromskraften förs från pedalen till bromsarna med hjälp av en speciell bromsvätska.",
    "takeaway": "Hydrauliska bromsar överför pedalens kraft till bromsarna via bromsvätska."
  },
  {
    "id": "book-brakes-q3",
    "topic": "safety",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "vehicle",
    "bookUnitId": "book-brakes",
    "bookPages": [224],
    "coverageIds": ["book-brakes-t3"],
    "title": "Skivbromsar och trumbromsar",
    "situation": "Hur skiljer sig skivbromsar från trumbromsar, och vilken typ är vanligast på nya bilar?",
    "options": [
      "Skivbromsar har en öppen bromsskiva med ett bromsok som pressas mot skivan, och är vanligast på nya bilar; trumbromsar har en stängd trumma med bromsklossar som pressas mot trummans insida.",
      "Trumbromsar är vanligast på nya bilar, medan skivbromsar bara används på äldre fordon.",
      "Skivbromsar och trumbromsar är två namn för exakt samma konstruktion."
    ],
    "correct": 0,
    "hint": "Den öppna konstruktionen är den som dominerar på moderna bilar.",
    "explanation": "Skivbromsar har en öppen bromsskiva och ett bromsok som pressas mot skivan när du bromsar. Dessa bromsar är den vanligaste typen på nya bilar. Trumbromsar har en stängd konstruktion som består av en rund trumma, där bromsklossar pressas mot trumman när du bromsar.",
    "takeaway": "Skivbromsar (öppen konstruktion) är standard på nya bilar; trumbromsar är en stängd, äldre konstruktion."
  },
  {
    "id": "book-brakes-q4",
    "topic": "safety",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "vehicle",
    "bookUnitId": "book-brakes",
    "bookPages": [224],
    "coverageIds": ["book-brakes-t4"],
    "title": "Vad ABS-bromsar gör",
    "situation": "Vad hjälper ABS-bromsar (låsningsfria bromsar) dig med, och påverkas bromssträckan alltid positivt?",
    "options": [
      "De hjälper dig att behålla kontrollen (styrförmågan) vid kraftiga inbromsningar; bromssträckan kan förkortas, men i vissa fall (till exempel på grus) även förlängas.",
      "De gör alltid bromssträckan kortare, oavsett underlag.",
      "De hjälper bara till att minska bromspedalens tyngd, utan effekt på styrförmågan."
    ],
    "correct": 0,
    "hint": "ABS huvudsyfte är styrbarhet, inte garanterat kortare bromssträcka på alla underlag.",
    "explanation": "Låsningsfria bromsar (ABS, anti-lock braking system) hjälper dig som förare att behålla kontrollen över bilen (styrförmågan) i samband med kraftiga inbromsningar. Bromssträckan kan förkortas, men i vissa fall också förlängas (till exempel på grus).",
    "takeaway": "ABS huvudvinst är styrförmåga under hård inbromsning, inte en garanterat kortare bromssträcka."
  },
  {
    "id": "book-brakes-q5",
    "topic": "safety",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "vehicle",
    "bookUnitId": "book-brakes",
    "bookPages": [225],
    "coverageIds": ["book-brakes-t5"],
    "title": "Hur ABS-bromsar fungerar steg för steg",
    "situation": "I vilken ordning agerar ABS-systemet när du pressar bromspedalen hårt och hjulen börjar låsa sig?",
    "options": [
      "Hjulen låser sig och glider, ABS känner av detta, släpper en del av trycket så hjulen börjar rulla, och anpassar sedan bromskraften så stor som möjligt utan att låsa hjulen igen.",
      "ABS släpper allt tryck direkt och väntar tills du släpper pedalen helt innan bromsningen återupptas.",
      "ABS ökar bromstrycket ytterligare varje gång hjulen börjar låsa sig."
    ],
    "correct": 0,
    "hint": "Processen upprepas i en snabb cykel av att känna av, släppa och anpassa.",
    "explanation": "Du pressar ner bromspedalen hårt, vilket leder till att hjulen låser sig och glider fram. Omedelbart känner ABS-systemet av att hjulen är låsta (genom att de inte rullar). ABS-systemet släpper en del av trycket på bromsarna så att hjulen börjar rulla. Därefter anpassar ABS-systemet bromskraften så att den är så stor som möjligt utan att den blir för stor och låser hjulen.",
    "takeaway": "ABS känner av låsta hjul och justerar bromstrycket i en snabb, upprepad cykel."
  },
  {
    "id": "book-brakes-q6",
    "topic": "safety",
    "kind": "Säkerhetsprincip",
    "source": "book",
    "chapterId": "vehicle",
    "bookUnitId": "book-brakes",
    "bookPages": [225],
    "coverageIds": ["book-brakes-t6"],
    "title": "Att styra under en ABS-inbromsning",
    "situation": "Varför kan du styra bilen under en kraftig inbromsning med ABS, och när är detta särskilt viktigt?",
    "options": [
      "Eftersom hjulen inte är låsta kan du styra i samband med inbromsningen, vilket är mycket viktigt om du ska väja för något.",
      "Du kan aldrig styra under en ABS-inbromsning, bara innan och efter den.",
      "Styrförmågan finns bara kvar om bilen kör i rakt spår, inte om du behöver väja."
    ],
    "correct": 0,
    "hint": "Låsta hjul kan inte överföra styrkrafter till vägen.",
    "explanation": "Eftersom hjulen inte är låsta, kan du styra i samband med en inbromsning med ABS. Detta är mycket viktigt om du ska väja för något.",
    "takeaway": "ABS bevarar styrförmågan under hård inbromsning, avgörande om du samtidigt måste väja."
  },
  {
    "id": "book-brakes-q7",
    "topic": "safety",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "vehicle",
    "bookUnitId": "book-brakes",
    "bookPages": [225],
    "coverageIds": ["book-brakes-t7"],
    "title": "Hackande pedal vid ABS-inbromsning",
    "situation": "Du bromsar hårt i en bil med ABS och pedalen börjar hacka och pulsera. Vad ska du göra?",
    "options": [
      "Fortsätta trycka ner pedalen så hårt du kan och inte släppa, även om det känns konstigt — det är helt normalt.",
      "Släppa upp pedalen omedelbart, eftersom hackandet betyder att något är trasigt.",
      "Pumpa pedalen snabbt i korta ryck för att hjälpa ABS-systemet."
    ],
    "correct": 0,
    "hint": "Hackandet är ett tecken på att ABS-systemet arbetar som det ska.",
    "explanation": "När du bromsar hårt med en bil som har ABS kan pedalen börja hacka och pulsera (det låter som att något är fel). Detta är dock helt normalt, eftersom det är så ABS-systemet arbetar. Du ska alltså fortsätta att trycka ner pedalen så hårt du kan och inte släppa, hur konstigt det än känns.",
    "takeaway": "En hackande, pulserande pedal under hård inbromsning är ABS som fungerar normalt — fortsätt trycka."
  },
  {
    "id": "book-brakes-q8",
    "topic": "safety",
    "kind": "Säkerhetsråd",
    "source": "book",
    "chapterId": "vehicle",
    "bookUnitId": "book-brakes",
    "bookPages": [225],
    "coverageIds": ["book-brakes-t8"],
    "title": "Läckage i bromssystemet",
    "situation": "Du testar bromsarna genom att trycka ner pedalen hårt i 20 sekunder. Pedalen fortsätter att sjunka långsamt trots att den redan nått den egentliga botten. Vad tyder detta på, och hur bråttom är det att åtgärda?",
    "options": [
      "Förmodligen ett läckage i bromssystemet, vilket är mycket trafikfarligt och måste åtgärdas omedelbart.",
      "Enbart normalt slitage, som kan åtgärdas vid nästa ordinarie service.",
      "Luft i bromssystemet, vilket bara kräver att du pumpar pedalen några gånger."
    ],
    "correct": 0,
    "hint": "Att pedalen fortsätter sjunka efter att ha nått botten är allvarligare än bara ett längre pedalslag.",
    "explanation": "För att testa bromsarna, tryck ner pedalen hårt i 20 sekunder. Om bromsen tar långt ner tyder det på slitage. Skulle pedalen fortfarande sjunka långsamt, trots att den nått den egentliga botten, finns det förmodligen ett läckage i bromssystemet. Detta är mycket trafikfarligt och måste åtgärdas omedelbart.",
    "takeaway": "En pedal som fortsätter sjunka efter botten pekar på ett läckage — akut och trafikfarligt."
  },
  {
    "id": "book-brakes-q9",
    "topic": "safety",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "vehicle",
    "bookUnitId": "book-brakes",
    "bookPages": [225, 229, 230],
    "coverageIds": ["book-brakes-t9"],
    "title": "Fjädrande bromspedal",
    "situation": "Vilket fel är det sannolikt om bromspedalen känns fjädrande vid inbromsning?",
    "options": [
      "Luft i bromssystemet.",
      "Läckage i bromssystemet.",
      "Slitna bromsar."
    ],
    "correct": 0,
    "hint": "Jämför med läckage, som i stället ger en pedal som sjunker långsamt.",
    "explanation": "Är det ett läckage sjunker pedalen långsamt (bromsvätskan pressas ut). Om bromsarna är slitna tar de längre ner än normalt, men pedalen känns fortfarande stum. Luft i bromssystemet gör att pedalen känns fjädrande, eftersom luften åker runt i systemet på ett oberäkneligt sätt.",
    "takeaway": "En fjädrande pedal pekar på luft i systemet, skilt från läckage (sjunker långsamt) och slitage (stum men tar längre ner)."
  },
  {
    "id": "book-brakes-q10",
    "topic": "safety",
    "kind": "Säkerhetsråd",
    "source": "book",
    "chapterId": "vehicle",
    "bookUnitId": "book-brakes",
    "bookPages": [225],
    "coverageIds": ["book-brakes-t10"],
    "title": "Provbromsning efter biltvätt",
    "situation": "Du har precis tvättat bilen. Varför är det extra viktigt att provbromsa direkt efteråt?",
    "options": [
      "Vattnet påverkar bromsarna negativt, och en kraftig och kontrollerad inbromsning torkar upp fukten.",
      "Biltvätten tar automatiskt bort en del av bromsvätskan, som måste fyllas på.",
      "Det är bara en vanerekommendation utan någon faktisk effekt på bromsarna."
    ],
    "correct": 0,
    "hint": "Tänk på vad som fysiskt händer med bromsskivorna när de blir blöta.",
    "explanation": "Viktigt är också att provbromsa då och då. Drar bilen snett är det läge att lämna in den på verkstad. Efter att ha tvättat bilen är det extra viktigt att du provbromsar, eftersom vattnet gör att bromsarna påverkas negativt. En kraftig och kontrollerad inbromsning torkar upp fukten.",
    "takeaway": "Provbromsa alltid efter biltvätt — vattnet försämrar bromsarna tillfälligt."
  },
  {
    "id": "book-brakes-q11",
    "topic": "safety",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "vehicle",
    "bookUnitId": "book-brakes",
    "bookPages": [226],
    "coverageIds": ["book-brakes-t11"],
    "title": "Varför bromsvätskan pressar mot bromsarna",
    "situation": "Bromsrören är fyllda till max. När du trycker ner bromsen försöker bromsvätskan försvinna ut i andra änden, men det går inte. Varför?",
    "options": [
      "Eftersom systemet är slutet, så resultatet blir i stället att vätskan pressar mot bromsarna så att bilen stannar.",
      "Eftersom bromsvätskan är för trögflytande för att röra sig alls.",
      "Eftersom bromsrören har en säkerhetsventil som stänger vätskeflödet helt."
    ],
    "correct": 0,
    "hint": "Vätskan har ingenstans att ta vägen i ett slutet system.",
    "explanation": "Bromsrören är fyllda till max och när du trycker ner bromsen vill bromsvätskan försvinna ut i andra änden. Det går dock inte, eftersom systemet är slutet. Resultatet blir att vätskan pressar mot bromsarna så att bilen stannar.",
    "takeaway": "Ett slutet, vätskefyllt system omvandlar pedaltrycket direkt till bromskraft."
  },
  {
    "id": "book-brakes-q12",
    "topic": "safety",
    "kind": "Säkerhetsråd",
    "source": "book",
    "chapterId": "vehicle",
    "bookUnitId": "book-brakes",
    "bookPages": [226],
    "coverageIds": ["book-brakes-t12"],
    "title": "Varför bromsvätskan bör bytas",
    "situation": "Varför rekommenderas det att byta bromsvätska vartannat år?",
    "options": [
      "Bromsvätskan drar åt sig fukt/vatten, vilket kan leda till att dess egenskaper försämras.",
      "Bromsvätskan avdunstar helt inom cirka två år och måste fyllas på igen.",
      "Det är bara en rekommendation kopplad till bilens garanti, utan teknisk grund."
    ],
    "correct": 0,
    "hint": "Fukt i vätskan är problemet, inte att den tar slut.",
    "explanation": "Ett av problemen med bromsvätska är att den drar åt sig fukt/vatten, vilket kan leda till att egenskaperna försämras. Detta gör att den bör bytas vartannat år.",
    "takeaway": "Bromsvätska bör bytas vartannat år eftersom den gradvis drar åt sig fukt."
  },
  {
    "id": "book-brakes-q13",
    "topic": "safety",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "vehicle",
    "bookUnitId": "book-brakes",
    "bookPages": [226],
    "coverageIds": ["book-brakes-t13"],
    "title": "Bromsservo",
    "situation": "Vad gör bromsservon (vakuumservon), och när fungerar den?",
    "options": [
      "Den minskar kraften som du måste trycka ner bromspedalen med, och fungerar bara när motorn är i gång.",
      "Den ökar bromssträckan något men gör pedalen lättare att trycka ner.",
      "Den fungerar oavsett om motorn är i gång eller inte, precis som servostyrningen."
    ],
    "correct": 0,
    "hint": "Jämför med servostyrningen, som har en liknande roll för ratten.",
    "explanation": "Precis som servostyrningen hjälper bromsservon dig genom att minska kraften som du måste trycka ner bromspedalen med. Bromsservon fungerar endast när motorn är i gång.",
    "takeaway": "Bromsservon lättar pedaltrycket, men bara medan motorn går."
  },
  {
    "id": "book-brakes-q14",
    "topic": "safety",
    "kind": "Säkerhetsråd",
    "source": "book",
    "chapterId": "vehicle",
    "bookUnitId": "book-brakes",
    "bookPages": [226],
    "coverageIds": ["book-brakes-t14"],
    "title": "Att testa bromsservon",
    "situation": "Hur testar du om bromsservon fungerar som den ska?",
    "options": [
      "Pumpa bromspedalen några gånger med bilen avstängd, starta sedan bilen med pedalen nedtryckt — om pedalen sjunker samtidigt som motorn går i gång fungerar servon.",
      "Kör bilen i hög hastighet och bromsa kraftigt en enda gång.",
      "Kontrollera enbart om bromsljusen tänds när pedalen trycks ner."
    ],
    "correct": 0,
    "hint": "Testet jämför pedalkänslan precis när motorn startar.",
    "explanation": "Testa om bromsservon fungerar: pumpa med bromspedalen några gånger med bilen avstängd, starta bilen med bromspedalen nedtryckt. Om pedalen sjunker samtidigt som motorn går i gång, fungerar servon som den ska.",
    "takeaway": "Ett sjunkande pedaltryck exakt vid motorstart bekräftar att bromsservon fungerar."
  },
  {
    "id": "book-brakes-q15",
    "topic": "safety",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "vehicle",
    "bookUnitId": "book-brakes",
    "bookPages": [227],
    "coverageIds": ["book-brakes-t15"],
    "title": "Parkeringsbromsens risker",
    "situation": "Vilka två problem med parkeringsbromsen (handbromsen) nämner boken?",
    "options": [
      "Risk att den fryser fast när det är kallt och fuktigt, och att den kan börja kärva om den inte används regelbundet.",
      "Risk att den löser ut av sig själv vid hög hastighet, och att den sliter ut bromsskivorna snabbare än färdbromsen.",
      "Risk att den bara fungerar på plan mark, och att den kräver service var sjätte månad."
    ],
    "correct": 0,
    "hint": "Båda problemen handlar om att bromsen fastnar eller slutar fungera smidigt.",
    "explanation": "Att tänka på när det gäller parkeringsbromsen: risk att den fryser fast när det är kallt och fuktigt, och att den kan börja kärva om du inte använder parkeringsbromsen regelbundet.",
    "takeaway": "Regelbunden användning håller parkeringsbromsen fri från både frysrisk och kärvning."
  },
  {
    "id": "book-brakes-q16",
    "topic": "safety",
    "kind": "Säkerhetsråd",
    "source": "book",
    "chapterId": "vehicle",
    "bookUnitId": "book-brakes",
    "bookPages": [227],
    "coverageIds": ["book-brakes-t16"],
    "title": "Extra åtgärd utöver parkeringsbromsen",
    "situation": "Utöver att dra åt parkeringsbromsen, vad rekommenderar boken för att ytterligare minska risken för att bilen rullar?",
    "options": [
      "Att lägga i 1:an (eller backväxeln).",
      "Att vrida ratten helt rakt.",
      "Att stänga av bilens elektronik helt."
    ],
    "correct": 0,
    "hint": "En växel i ingrepp hindrar hjulen från att rotera fritt.",
    "explanation": "Utöver parkeringsbromsen är det bra att lägga i 1:an, eftersom det ytterligare minskar risken för att bilen rullar.",
    "takeaway": "Lägg i en växel utöver parkeringsbromsen för extra säkerhet mot att bilen rullar."
  },
  {
    "id": "book-brakes-q17",
    "topic": "safety",
    "kind": "Säkerhetsråd",
    "source": "book",
    "chapterId": "vehicle",
    "bookUnitId": "book-brakes",
    "bookPages": [227],
    "coverageIds": ["book-brakes-t17"],
    "title": "Att kontrollera en traditionell handbroms",
    "situation": "Du vill kontrollera om en traditionell handbroms fungerar (detta fungerar inte med en elektronisk parkeringsbroms). Vilka två kontroller nämner boken?",
    "options": [
      "Rulla i en backe och sedan dra åt bromsen, samt försöka köra med bromsen åtdragen.",
      "Mäta bromsvätskenivån och kontrollera bromsljusen.",
      "Köra i hög hastighet och testa en nödbromsning med handbromsen."
    ],
    "correct": 0,
    "hint": "Båda kontrollerna testar om bromsen faktiskt håller emot rörelse.",
    "explanation": "Kontroller för att se om parkeringsbromsen fungerar (traditionell handbroms, fungerar inte med elektronisk parkeringsbroms): rulla i en backe och sedan dra åt bromsen, eller försöka att köra med bromsen åtdragen.",
    "takeaway": "En traditionell handbroms testas genom att se om den faktiskt håller emot rullning eller körning."
  }
];

export const BRAKES_224_231_COVERAGE = [
  { id: "book-brakes-t1", bookUnitId: "book-brakes", pages: [224], label: "Tvåkrets bromssystem", questionIds: ["book-brakes-q1"], visualStatus: "not-needed" },
  { id: "book-brakes-t2", bookUnitId: "book-brakes", pages: [224], label: "Hydrauliska bromsar", questionIds: ["book-brakes-q2"], visualStatus: "not-needed" },
  { id: "book-brakes-t3", bookUnitId: "book-brakes", pages: [224], label: "Skivbromsar kontra trumbromsar", questionIds: ["book-brakes-q3"], visualStatus: "reviewed" },
  { id: "book-brakes-t4", bookUnitId: "book-brakes", pages: [224], label: "Vad ABS-bromsar gör", questionIds: ["book-brakes-q4"], visualStatus: "not-needed" },
  { id: "book-brakes-t5", bookUnitId: "book-brakes", pages: [225], label: "ABS-processens fyra steg", questionIds: ["book-brakes-q5"], visualStatus: "not-needed" },
  { id: "book-brakes-t6", bookUnitId: "book-brakes", pages: [225], label: "Styrförmåga bevaras under ABS-inbromsning", questionIds: ["book-brakes-q6"], visualStatus: "not-needed" },
  { id: "book-brakes-t7", bookUnitId: "book-brakes", pages: [225], label: "Hackande pedal är normalt vid ABS", questionIds: ["book-brakes-q7"], visualStatus: "not-needed" },
  { id: "book-brakes-t8", bookUnitId: "book-brakes", pages: [225], label: "Läckage ger en pedal som fortsätter sjunka", questionIds: ["book-brakes-q8"], visualStatus: "not-needed" },
  { id: "book-brakes-t9", bookUnitId: "book-brakes", pages: [225, 229, 230], label: "Fjädrande pedal tyder på luft i systemet", questionIds: ["book-brakes-q9"], visualStatus: "not-needed" },
  { id: "book-brakes-t10", bookUnitId: "book-brakes", pages: [225], label: "Provbromsa efter biltvätt", questionIds: ["book-brakes-q10"], visualStatus: "not-needed" },
  { id: "book-brakes-t11", bookUnitId: "book-brakes", pages: [226], label: "Slutet bromssystem pressar vätskan mot bromsarna", questionIds: ["book-brakes-q11"], visualStatus: "not-needed" },
  { id: "book-brakes-t12", bookUnitId: "book-brakes", pages: [226], label: "Bromsvätska byts vartannat år", questionIds: ["book-brakes-q12"], visualStatus: "not-needed" },
  { id: "book-brakes-t13", bookUnitId: "book-brakes", pages: [226], label: "Bromsservons funktion", questionIds: ["book-brakes-q13"], visualStatus: "not-needed" },
  { id: "book-brakes-t14", bookUnitId: "book-brakes", pages: [226], label: "Att testa bromsservon", questionIds: ["book-brakes-q14"], visualStatus: "not-needed" },
  { id: "book-brakes-t15", bookUnitId: "book-brakes", pages: [227], label: "Parkeringsbromsens risker", questionIds: ["book-brakes-q15"], visualStatus: "not-needed" },
  { id: "book-brakes-t16", bookUnitId: "book-brakes", pages: [227], label: "Lägg i 1:an utöver parkeringsbromsen", questionIds: ["book-brakes-q16"], visualStatus: "not-needed" },
  { id: "book-brakes-t17", bookUnitId: "book-brakes", pages: [227], label: "Kontroller av en traditionell handbroms", questionIds: ["book-brakes-q17"], visualStatus: "not-needed" }
];

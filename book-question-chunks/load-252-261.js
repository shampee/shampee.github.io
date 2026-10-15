// PDF 252-257, 259-260. Reviewed source text, worked weight examples and
// the registreringsbevis excerpt on 255. PDF 258 is blank and PDF 261 is
// the next unit's title page ("Belysning" / book-lights), no content.
export const LOAD_252_261_QUESTIONS = [
  {
    "id": "book-load-q1",
    "topic": "safety",
    "kind": "Säkerhetsråd",
    "source": "book",
    "chapterId": "load",
    "bookUnitId": "book-load",
    "bookPages": [252],
    "coverageIds": ["book-load-t1"],
    "title": "Varför lasten måste säkras",
    "situation": "Varför måste lasten säkras med spännband eller liknande?",
    "options": [
      "Lös last som glider runt kan slungas i väg och orsaka stor skada vid kraftiga inbromsningar eller kollisioner.",
      "Enbart för att undvika repor på lastutrymmets insida.",
      "Det är bara en rekommendation för att hålla lasten prydligt ordnad."
    ],
    "correct": 0,
    "hint": "Tänk på vad som händer med en osäkrad väska vid en tvärbromsning.",
    "explanation": "Säkra lasten med spännband eller liknande. Lös last som glider runt kan slungas i väg och orsaka stor skada vid kraftiga inbromsningar och kollisioner.",
    "takeaway": "Osäkrad last blir en projektil vid en kraftig inbromsning eller kollision."
  },
  {
    "id": "book-load-q2",
    "topic": "safety",
    "kind": "Säkerhetsråd",
    "source": "book",
    "chapterId": "load",
    "bookUnitId": "book-load",
    "bookPages": [252],
    "coverageIds": ["book-load-t2"],
    "title": "Var i bagageutrymmet lasten bör placeras",
    "situation": "Var bör du placera lasten i bagageutrymmet, och varför?",
    "options": [
      "Längst in, så att den inte slits loss och flyger i väg — om lasten ligger längst in mot baksätena har den ingenstans att ta vägen vid en kraftig inbromsning.",
      "Längst bak mot bakluckan, för att göra den så lättåtkomlig som möjligt.",
      "Det spelar ingen roll var i bagageutrymmet lasten placeras."
    ],
    "correct": 0,
    "hint": "Tänk på vilken riktning lasten rör sig vid en inbromsning.",
    "explanation": "Placera lasten längst in i bagageutrymmet för att den inte ska slitas loss och flyga i väg. Om lasten ligger längst in mot baksätena har den ingenstans att ta vägen vid en kraftig inbromsning.",
    "takeaway": "Last längst in mot baksätet har ingenstans att flyga vid en kraftig inbromsning."
  },
  {
    "id": "book-load-q3",
    "topic": "safety",
    "kind": "Säkerhetsråd",
    "source": "book",
    "chapterId": "load",
    "bookUnitId": "book-load",
    "bookPages": [252],
    "coverageIds": ["book-load-t3"],
    "title": "Varför tyngsta lasten ska placeras lågt",
    "situation": "Varför bör den tyngsta lasten placeras lågt?",
    "options": [
      "Det minskar risken för att den flyger i väg och orsakar skada.",
      "Det förbättrar bilens bränsleekonomi.",
      "Det är bara en rekommendation för bättre sikt bakåt."
    ],
    "correct": 0,
    "hint": "En lägre tyngdpunkt är svårare att få i rörelse.",
    "explanation": "Placera tyngsta lasten lågt, så minskas risken för att den flyger i väg och orsakar skada.",
    "takeaway": "Tung last lågt ner minskar risken för att den far iväg vid en olycka."
  },
  {
    "id": "book-load-q4",
    "topic": "rules",
    "kind": "Trafikregel",
    "source": "book",
    "chapterId": "load",
    "bookUnitId": "book-load",
    "bookPages": [252],
    "coverageIds": ["book-load-t4"],
    "title": "Vad lastsäkringen minst måste tåla",
    "situation": "Hur mycket av lastvikten måste lastsäkringen minst tåla framåt respektive bakåt och åt sidorna?",
    "options": [
      "80 % av lastvikten framåt, och 50 % bakåt och åt sidorna.",
      "50 % av lastvikten framåt, och 80 % bakåt och åt sidorna.",
      "100 % av lastvikten i alla riktningar."
    ],
    "correct": 0,
    "hint": "Den största påfrestningen sker normalt vid inbromsning, det vill säga framåt.",
    "explanation": "Normalt är det vid bromsning som den största påfrestningen på lasten och lastsäkringen förekommer. Detta innebär att lastsäkringarna minst måste tåla: 80 % av lastvikten framåt, och 50 % av lastvikten bakåt och åt sidorna.",
    "takeaway": "Lastsäkringen måste tåla mest framåt (80 %), eftersom bromsning ger den största påfrestningen."
  },
  {
    "id": "book-load-q5",
    "topic": "rules",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "load",
    "bookUnitId": "book-load",
    "bookPages": [252],
    "coverageIds": ["book-load-t5"],
    "title": "Tjänstevikt",
    "situation": "Vad är tjänstevikt?",
    "options": [
      "Olastad bil med standardutrustning, inklusive föraren (75 kg).",
      "Den maximalt tillåtna lasten enligt registreringsbeviset.",
      "Vikten vid ett visst tillfälle, inklusive last och passagerare."
    ],
    "correct": 0,
    "hint": "Föraren räknas med i detta mått, trots att bilen är ”olastad”.",
    "explanation": "Tjänstevikt: olastad bil med standardutrustning inklusive förare (75 kg).",
    "takeaway": "Tjänstevikten inkluderar en schablonmässig förarvikt på 75 kg, trots att bilen räknas som olastad."
  },
  {
    "id": "book-load-q6",
    "topic": "rules",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "load",
    "bookUnitId": "book-load",
    "bookPages": [252],
    "coverageIds": ["book-load-t6"],
    "title": "Maxlast och totalvikt",
    "situation": "Vad är maxlast, och hur räknas totalvikten ut?",
    "options": [
      "Maxlast är maximalt tillåten last enligt registreringsbeviset; totalvikt är tjänstevikt plus maxlast.",
      "Maxlast är samma sak som totalvikt; tjänstevikt beräknas separat utan koppling till dem.",
      "Maxlast är bilens vikt utan förare; totalvikt är maxlast minus tjänstevikt."
    ],
    "correct": 0,
    "hint": "Totalvikten är summan av de två andra viktbegreppen.",
    "explanation": "Maxlast: maximalt tillåten last enligt registreringsbeviset. Totalvikt: tjänstevikt + maxlast.",
    "takeaway": "Totalvikt = tjänstevikt + maxlast, och maxlast anges i registreringsbeviset."
  },
  {
    "id": "book-load-q7",
    "topic": "rules",
    "kind": "Trafikregel",
    "source": "book",
    "chapterId": "load",
    "bookUnitId": "book-load",
    "bookPages": [252],
    "coverageIds": ["book-load-t7"],
    "title": "Högsta totalvikt med B-körkort",
    "situation": "Vilken högsta totalvikt får personbilar och lätta lastbilar ha som du kör med vanligt B-körkort?",
    "options": [
      "3500 kg (3,5 ton).",
      "2500 kg (2,5 ton).",
      "4500 kg (4,5 ton)."
    ],
    "correct": 0,
    "hint": "Gränsen anges både i kilogram och i ton i boken.",
    "explanation": "Med ett B-körkort får du köra personbilar och lätta lastbilar med en totalvikt på högst 3500 kg (3,5 ton).",
    "takeaway": "3500 kg totalvikt är gränsen för vad ett vanligt B-körkort tillåter dig att köra."
  },
  {
    "id": "book-load-q8",
    "topic": "rules",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "load",
    "bookUnitId": "book-load",
    "bookPages": [253],
    "coverageIds": ["book-load-t8"],
    "title": "Vad som räknas som lätt släpvagn",
    "situation": "Vilka två kriterier avgör om en släpvagn räknas som lätt släpvagn, som du får dra med ett vanligt B-körkort?",
    "options": [
      "Släp med totalvikt på max 750 kg, eller släp där den sammanlagda totalvikten för bil och släp är max 3500 kg.",
      "Släp med totalvikt på max 1500 kg, oavsett bilens vikt.",
      "Enbart att släpets totalvikt är lägre än bilens tjänstevikt."
    ],
    "correct": 0,
    "hint": "Det finns två separata sätt att räknas som lätt — det räcker att ett av dem stämmer.",
    "explanation": "Vad räknas som lätt släpvagn? 1) Släp med totalvikt på max 750 kg. 2) Släp där totalvikten för bil + släp är max 3500 kg (3,5 ton).",
    "takeaway": "En släpvagn räknas som lätt om något av de två kriterierna är uppfyllt."
  },
  {
    "id": "book-load-q9",
    "topic": "rules",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "load",
    "bookUnitId": "book-load",
    "bookPages": [253, 254],
    "coverageIds": ["book-load-t9"],
    "title": "När punkt 2 inte behöver kontrolleras",
    "situation": "Ett släp väger 600 kg. Behöver du kontrollera bilens och släpets sammanlagda totalvikt för att veta om släpet är lätt?",
    "options": [
      "Nej, eftersom släpets totalvikt redan är under 750 kg (punkt 1), räknas det alltid som lätt — inga beräkningar behövs.",
      "Ja, du måste alltid räkna ut den sammanlagda totalvikten, oavsett släpets egen vikt.",
      "Nej, men bara om bilen samtidigt väger mindre än 2000 kg."
    ],
    "correct": 0,
    "hint": "Punkt 2 blir irrelevant så fort punkt 1 redan är uppfylld.",
    "explanation": "Om punkt 1 (max 750 kg) är uppfylld, gäller inte punkt 2. Inga beräkningar behöver göras. Släpvagnens totalvikt är inte över 750 kg, den räknas därför alltid som lätt.",
    "takeaway": "Ett släp under 750 kg är alltid lätt, oavsett vilken bil som drar det."
  },
  {
    "id": "book-load-q10",
    "topic": "rules",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "load",
    "bookUnitId": "book-load",
    "bookPages": [253],
    "coverageIds": ["book-load-t10"],
    "title": "Exempel på ej lätt släpvagn",
    "situation": "En bil med totalvikt 1800 kg drar ett släp med totalvikt 2000 kg. Släpets egen totalvikt är över 750 kg. Räknas släpet som lätt?",
    "options": [
      "Nej, eftersom den sammanlagda totalvikten (1800 kg + 2000 kg = 3800 kg) överstiger 3500 kg.",
      "Ja, eftersom bilens totalvikt är lägre än släpets.",
      "Ja, eftersom varken bilen eller släpet väger över 2500 kg var för sig."
    ],
    "correct": 0,
    "hint": "Eftersom släpet redan väger över 750 kg måste punkt 2 kontrolleras.",
    "explanation": "Den sammanlagda totalvikten (1800 kg + 2000 kg = 3800 kg) överstiger 3500 kg, vilket gör att släpet inte räknas som lätt.",
    "takeaway": "När släpets egen vikt överstiger 750 kg avgör den sammanlagda totalvikten (max 3500 kg) om släpet räknas som lätt."
  },
  {
    "id": "book-load-q11",
    "topic": "rules",
    "kind": "Säkerhetsprincip",
    "source": "book",
    "chapterId": "load",
    "bookUnitId": "book-load",
    "bookPages": [254],
    "coverageIds": ["book-load-t11"],
    "title": "Lätt släpvagn räcker inte alltid",
    "situation": "En släpvagn räknas som lätt. Innebär det att du alltid får dra den med vilken bil som helst?",
    "options": [
      "Nej, du måste också kontrollera hur tung släpvagn din bil får dra — ett släp kan räknas som lätt men ändå vara förbjudet för dig att dra, om dragbilen inte klarar vikten.",
      "Ja, en lätt släpvagn får alltid dras av vilken bil som helst med B-körkort.",
      "Nej, en lätt släpvagn får bara dras av bilar tyngre än 3000 kg."
    ],
    "correct": 0,
    "hint": "”Lätt släpvagn” och ”vad just din bil får dra” är två olika frågor.",
    "explanation": "Innebär det att jag alltid får dra släpvagnen med alla bilar? Nej, du måste kontrollera hur tung släpvagn din bil får dra. En släpvagn kan räknas som lätt, men ändå vara förbjuden för dig att dra på grund av att dragbilen inte klarar vikten.",
    "takeaway": "Att ett släp räknas som lätt säger inget om huruvida just din bil är godkänd att dra det."
  },
  {
    "id": "book-load-q12",
    "topic": "rules",
    "kind": "Trafikregel",
    "source": "book",
    "chapterId": "load",
    "bookUnitId": "book-load",
    "bookPages": [254],
    "coverageIds": ["book-load-t12"],
    "title": "Tung bil med lätt släp på vanligt B-körkort",
    "situation": "Din bil väger 3500 kg och är byggd för att dra ett släp på 750 kg. Får du på ett vanligt B-körkort dra släpet, trots att den sammanlagda totalvikten blir 4250 kg?",
    "options": [
      "Ja, regeln ger dig rätt att dra ett släp som väger 750 kg, oavsett den sammanlagda totalvikten, så länge släpet i sig inte överstiger 750 kg.",
      "Nej, eftersom den sammanlagda totalvikten överstiger 3500 kg.",
      "Ja, men bara med utökad behörighet B96 eller BE."
    ],
    "correct": 0,
    "hint": "Släpet uppfyller redan punkt 1 (max 750 kg), så punkt 2 om 3500 kg sammanlagt gäller inte här.",
    "explanation": "Ja. Regeln ger dig rätt att dra ett släp som väger 750 kg. Det är ovanligt att bilar väger 3500 kg, men om du har en så tung bil får du dra 3500 kg + 750 kg på vanligt B-körkort (alltså ej utökad B96, ej BE). Notera dock att detta slutar gälla så fort släpet väger över 750 kg.",
    "takeaway": "Ett 750 kg-släp får dras på vanligt B-körkort oavsett dragbilens vikt, så länge släpet självt håller sig under 750 kg."
  },
  {
    "id": "book-load-q13",
    "topic": "rules",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "load",
    "bookUnitId": "book-load",
    "bookPages": [255],
    "coverageIds": ["book-load-t13"],
    "title": "Registreringsbevisets kopplingsuppgifter",
    "situation": "Var hittar du i praktiken informationen om hur tung släpvagn just din bil får dra?",
    "options": [
      "I bilens registreringsbevis, under rubriken Kopplingsanordning.",
      "Enbart genom att väga bilen och släpet tillsammans på en allmän vägmätningsstation.",
      "I bilens instruktionsbok, under rubriken Bränsleförbrukning."
    ],
    "correct": 0,
    "hint": "Dokumentet anges med koder som O.1, F.9 och O.3.",
    "explanation": "I praktiken är det sällan som beräkningar behöver göras. All information du behöver står nämligen i bilens registreringsbevis, under Kopplingsanordning (till exempel O.1 högsta vikt bromsat släp, F.9 högsta vikt släpkärra, och O.3 högsta totalvikt på släpet för B-körkort/B utökad).",
    "takeaway": "Registreringsbeviset, inte en egen uträkning, ger i praktiken svaret på vad bilen får dra."
  },
  {
    "id": "book-load-q14",
    "topic": "rules",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "load",
    "bookUnitId": "book-load",
    "bookPages": [255],
    "coverageIds": ["book-load-t14"],
    "title": "O.3-kodens begränsning",
    "situation": "En bils registreringsbevis anger O.1 (högsta vikt bromsat släp) 2100 kg, men O.3 (högsta totalvikt på släpet för B-körkort) bara 910 kg. Får du med vanligt B-körkort dra ett släp som väger 2100 kg?",
    "options": [
      "Nej, inte med vanligt B-körkort, eftersom O.3 anger att maximal släpvagnsvikt för B-körkort är 910 kg.",
      "Ja, eftersom O.1 alltid är den avgörande gränsen oavsett körkortsbehörighet.",
      "Ja, eftersom F.9 alltid åsidosätter O.3."
    ],
    "correct": 0,
    "hint": "O.3 är specifikt kopplad till just B-körkortets behörighetsgräns.",
    "explanation": "Bilen med detta registreringsbevis får dra ett släp som väger max 2100 kg. Dock inte med vanligt B-körkort, eftersom O.3 anger att maximal släpvagnsvikt för B-körkort är 910 kg.",
    "takeaway": "O.3-koden kan sätta en lägre gräns för just B-körkort, även om O.1 tillåter ett tyngre släp."
  },
  {
    "id": "book-load-q15",
    "topic": "rules",
    "kind": "Trafikregel",
    "source": "book",
    "chapterId": "load",
    "bookUnitId": "book-load",
    "bookPages": [255],
    "coverageIds": ["book-load-t15"],
    "title": "Maxvikten gäller oavsett behörighet",
    "situation": "Bilens registreringsbevis anger O.1 (högsta vikt bromsat släp) 2100 kg. Får du med utökad behörighet B96 eller BE-körkort dra ett släp som väger 2300 kg med den bilen?",
    "options": [
      "Nej, eftersom vikten 2100 kg aldrig får överskridas, oavsett behörighet — bilen är inte konstruerad för att klara av ett tyngre släp.",
      "Ja, B96 eller BE-körkort höjer alltid gränsen med minst 500 kg.",
      "Ja, så länge föraren har minst fem års körvana."
    ],
    "correct": 0,
    "hint": "Gränsen handlar om vad bilen klarar tekniskt, inte om vilken behörighet föraren har.",
    "explanation": "Får jag med denna bil dra ett släp som väger 2300 kg med utökad behörighet B (B96) eller BE-körkort? Nej, eftersom vikten 2100 kg aldrig får överskridas, oavsett behörighet. Bilen är nämligen inte konstruerad för att klara av tyngre släp.",
    "takeaway": "Bilens tekniska maxgräns för släpvikt gäller oavsett körkortsbehörighet — högre behörighet kan bara utnyttja en gräns bilen redan tillåter."
  },
  {
    "id": "book-load-q16",
    "topic": "safety",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "load",
    "bookUnitId": "book-load",
    "bookPages": [256],
    "coverageIds": ["book-load-t16"],
    "title": "Kultryck",
    "situation": "Vad är kultryck, och vilket intervall ska det normalt ligga inom?",
    "options": [
      "Det tryck som släpets kopplingsanordning orsakar på bilens dragkrok; normalt 30–100 kg.",
      "Det tryck som bilens dragkrok orsakar på vägbanan; normalt 300–1000 kg.",
      "Släpvagnens totala vikt fördelad över dess hjulaxlar; normalt 30–100 kg."
    ],
    "correct": 0,
    "hint": "Det handlar om trycket just i kopplingspunkten mellan bil och släp.",
    "explanation": "Kultrycket är det tryck som släpets kopplingsanordning orsakar på bilens dragkrok. Normalt ska kultrycket ligga mellan 30–100 kg.",
    "takeaway": "Kultrycket mäts i kopplingspunkten och ska normalt ligga mellan 30 och 100 kg."
  },
  {
    "id": "book-load-q17",
    "topic": "safety",
    "kind": "Säkerhetsprincip",
    "source": "book",
    "chapterId": "load",
    "bookUnitId": "book-load",
    "bookPages": [256],
    "coverageIds": ["book-load-t17"],
    "title": "Högt kultryck",
    "situation": "Vad orsakar högt kultryck, och vilka två konsekvenser nämner boken?",
    "options": [
      "För mycket last längst fram i släpet; det medför dåligt grepp på framhjulen samt att halvljusen blir bländande.",
      "För mycket last längst bak i släpet; det medför dåligt grepp på bakhjulen.",
      "För lite last i släpet överlag; det medför ingen praktisk konsekvens."
    ],
    "correct": 0,
    "hint": "Lasten pressar kopplingsanordningen neråt mot marken.",
    "explanation": "Högt kultryck: för mycket last längst fram i släpet. Detta medför dåligt grepp på framhjulen samt att halvljusen blir bländande.",
    "takeaway": "Last längst fram i släpet ger högt kultryck, sämre framhjulsgrepp och bländande halvljus."
  },
  {
    "id": "book-load-q18",
    "topic": "safety",
    "kind": "Säkerhetsprincip",
    "source": "book",
    "chapterId": "load",
    "bookUnitId": "book-load",
    "bookPages": [256],
    "coverageIds": ["book-load-t18"],
    "title": "Lågt kultryck",
    "situation": "Vad orsakar lågt kultryck, och vilken konsekvens nämner boken?",
    "options": [
      "För mycket last längst bak i släpet; det medför dåligt grepp på bakhjulen.",
      "För mycket last längst fram i släpet; det medför dåligt grepp på framhjulen.",
      "Ett helt tomt släp; det medför ingen praktisk konsekvens."
    ],
    "correct": 0,
    "hint": "Lasten tippar släpet så att kopplingsanordningen trycks uppåt.",
    "explanation": "Lågt kultryck: för mycket last längst bak i släpet. Detta medför dåligt grepp på bakhjulen.",
    "takeaway": "Last längst bak i släpet ger lågt kultryck och sämre grepp på bilens bakhjul."
  },
  {
    "id": "book-load-q19",
    "topic": "rules",
    "kind": "Trafikregel",
    "source": "book",
    "chapterId": "load",
    "bookUnitId": "book-load",
    "bookPages": [257],
    "coverageIds": ["book-load-t19"],
    "title": "Krav på färdbroms och parkeringsbroms",
    "situation": "Vid vilken vikt krävs färdbroms respektive parkeringsbroms på en släpvagn?",
    "options": [
      "Färdbroms krävs vid totalvikt över 750 kg; parkeringsbroms krävs vid tjänstevikt över 400 kg.",
      "Färdbroms krävs vid tjänstevikt över 400 kg; parkeringsbroms krävs vid totalvikt över 750 kg.",
      "Båda kraven gäller från samma gräns: totalvikt över 750 kg."
    ],
    "correct": 0,
    "hint": "De två kraven är kopplade till olika viktbegrepp: totalvikt respektive tjänstevikt.",
    "explanation": "Färdbroms måste finnas på släpvagnar med totalvikt över 750 kg. Parkeringsbroms måste finnas på släpvagnar med tjänstevikt över 400 kg.",
    "takeaway": "Färdbromsens gräns är kopplad till totalvikten, parkeringsbromsens till tjänstevikten."
  },
  {
    "id": "book-load-q20",
    "topic": "rules",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "load",
    "bookUnitId": "book-load",
    "bookPages": [257],
    "coverageIds": ["book-load-t20"],
    "title": "Reflexmärkning av tunga fordon",
    "situation": "Hur skiljer sig reflexmärkningen på en tung lastbil från märkningen på ett släp med totalvikt över 3,5 ton?",
    "options": [
      "Tung lastbil har en röd-gul diagonalrandig reflex, medan det tunga släpet har en gul reflex med röd ram.",
      "Båda fordonstyperna har exakt samma reflexmönster.",
      "Tung lastbil saknar krav på reflex, bara det tunga släpet har det."
    ],
    "correct": 0,
    "hint": "Mönstren skiljer sig åt för att du ska kunna avgöra vilken typ av fordon du ser i mörker.",
    "explanation": "Utmärkning av tunga lastbilar och tunga släp: reflex på tung lastbil är röd-gul diagonalrandig; reflex på släp med totalvikt över 3,5 ton är gul med röd ram.",
    "takeaway": "De olika reflexmönstren hjälper dig urskilja en tung lastbil från ett tungt släp i mörker."
  },
  {
    "id": "book-load-q21",
    "topic": "safety",
    "kind": "Säkerhetsprincip",
    "source": "book",
    "chapterId": "load",
    "bookUnitId": "book-load",
    "bookPages": [257],
    "coverageIds": ["book-load-t21"],
    "title": "Omkörning av lastbil med släp",
    "situation": "Du vill köra om en lastbil som har ett släp kopplat till sig. Vad bör du tänka på jämfört med att köra om en lastbil utan släp?",
    "options": [
      "Omkörningssträckan blir längre jämfört med en lastbil utan släp.",
      "Omkörningssträckan blir kortare, eftersom släpet bromsar in snabbare.",
      "Det finns ingen skillnad i omkörningssträcka mellan de två fallen."
    ],
    "correct": 0,
    "hint": "Ekipaget med släp är helt enkelt längre än lastbilen ensam.",
    "explanation": "Lastbilen har ett släp. Vill du köra om, tänk då på att omkörningssträckan blir längre jämfört med en lastbil utan släp.",
    "takeaway": "Ett tillkopplat släp förlänger fordonets totala längd och därmed omkörningssträckan."
  },
  {
    "id": "book-load-q22",
    "topic": "rules",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "load",
    "bookUnitId": "book-load",
    "bookPages": [259, 260],
    "coverageIds": ["book-load-t22"],
    "title": "Ny tillämpning av lätt-släpvagn-regeln",
    "situation": "En bil har totalvikt 2100 kg. En släpvagn har tjänstevikt 300 kg, maxlast 800 kg och totalvikt 1100 kg. Räknas släpvagnen som lätt om den kopplas till bilen?",
    "options": [
      "Ja, eftersom den sammanlagda totalvikten (2100 kg + 1100 kg = 3200 kg) ligger under 3500 kg.",
      "Nej, eftersom släpets egen totalvikt (1100 kg) överstiger 750 kg.",
      "Nej, eftersom bilens totalvikt (2100 kg) är lägre än släpets maxlast plus tjänstevikt."
    ],
    "correct": 0,
    "hint": "Släpets totalvikt är över 750 kg, så det är den sammanlagda totalvikten som avgör.",
    "explanation": "Med vanligt B-körkort är det endast tillåtet att dra lätt släpvagn. Som lätt släpvagn räknas: 1) släp med totalvikt på max 750 kg, eller 2) släp där totalvikten för bil + släp är max 3500 kg (3,5 ton). Här är släpets egen totalvikt (1100 kg) över 750 kg, så punkt 2 avgör: 2100 kg + 1100 kg = 3200 kg, vilket är under 3,5 ton. Släpvagnen räknas därför som lätt.",
    "takeaway": "När släpets egen vikt överstiger 750 kg, räknar du i stället ihop bilens och släpets totalvikt mot 3500 kg-gränsen."
  }
];

export const LOAD_252_261_COVERAGE = [
  { id: "book-load-t1", bookUnitId: "book-load", pages: [252], label: "Varför lasten måste säkras", questionIds: ["book-load-q1"], visualStatus: "reviewed" },
  { id: "book-load-t2", bookUnitId: "book-load", pages: [252], label: "Placera lasten längst in i bagageutrymmet", questionIds: ["book-load-q2"], visualStatus: "not-needed" },
  { id: "book-load-t3", bookUnitId: "book-load", pages: [252], label: "Placera tyngsta lasten lågt", questionIds: ["book-load-q3"], visualStatus: "not-needed" },
  { id: "book-load-t4", bookUnitId: "book-load", pages: [252], label: "Lastsäkringens 80 %/50 % krav", questionIds: ["book-load-q4"], visualStatus: "not-needed" },
  { id: "book-load-t5", bookUnitId: "book-load", pages: [252], label: "Tjänstevikt-begreppet", questionIds: ["book-load-q5"], visualStatus: "not-needed" },
  { id: "book-load-t6", bookUnitId: "book-load", pages: [252], label: "Maxlast och totalvikt-begreppen", questionIds: ["book-load-q6"], visualStatus: "not-needed" },
  { id: "book-load-t7", bookUnitId: "book-load", pages: [252], label: "Högsta totalvikt 3500 kg med B-körkort", questionIds: ["book-load-q7"], visualStatus: "not-needed" },
  { id: "book-load-t8", bookUnitId: "book-load", pages: [253], label: "De två kriterierna för lätt släpvagn", questionIds: ["book-load-q8"], visualStatus: "not-needed" },
  { id: "book-load-t9", bookUnitId: "book-load", pages: [253, 254], label: "Punkt 1 gör punkt 2 irrelevant", questionIds: ["book-load-q9"], visualStatus: "reviewed" },
  { id: "book-load-t10", bookUnitId: "book-load", pages: [253], label: "Exempel på ej lätt släpvagn (3800 kg)", questionIds: ["book-load-q10"], visualStatus: "reviewed" },
  { id: "book-load-t11", bookUnitId: "book-load", pages: [254], label: "Lätt släp kräver ändå kontroll av dragbilen", questionIds: ["book-load-q11"], visualStatus: "not-needed" },
  { id: "book-load-t12", bookUnitId: "book-load", pages: [254], label: "3500 kg bil + 750 kg släp tillåtet på B-körkort", questionIds: ["book-load-q12"], visualStatus: "not-needed" },
  { id: "book-load-t13", bookUnitId: "book-load", pages: [255], label: "Registreringsbevisets kopplingsuppgifter", questionIds: ["book-load-q13"], visualStatus: "reviewed" },
  { id: "book-load-t14", bookUnitId: "book-load", pages: [255], label: "O.3-kodens begränsning för B-körkort", questionIds: ["book-load-q14"], visualStatus: "reviewed" },
  { id: "book-load-t15", bookUnitId: "book-load", pages: [255], label: "Maxvikten gäller oavsett behörighet", questionIds: ["book-load-q15"], visualStatus: "not-needed" },
  { id: "book-load-t16", bookUnitId: "book-load", pages: [256], label: "Kultryck och dess normalintervall", questionIds: ["book-load-q16"], visualStatus: "not-needed" },
  { id: "book-load-t17", bookUnitId: "book-load", pages: [256], label: "Högt kultryck: orsak och konsekvens", questionIds: ["book-load-q17"], visualStatus: "reviewed" },
  { id: "book-load-t18", bookUnitId: "book-load", pages: [256], label: "Lågt kultryck: orsak och konsekvens", questionIds: ["book-load-q18"], visualStatus: "reviewed" },
  { id: "book-load-t19", bookUnitId: "book-load", pages: [257], label: "Färdbroms- och parkeringsbromskrav", questionIds: ["book-load-q19"], visualStatus: "not-needed" },
  { id: "book-load-t20", bookUnitId: "book-load", pages: [257], label: "Reflexmärkning av tung lastbil och tungt släp", questionIds: ["book-load-q20"], visualStatus: "reviewed" },
  { id: "book-load-t21", bookUnitId: "book-load", pages: [257], label: "Längre omkörningssträcka med släp", questionIds: ["book-load-q21"], visualStatus: "reviewed" },
  { id: "book-load-t22", bookUnitId: "book-load", pages: [259, 260], label: "Tillämpning av lätt-släpvagn-regeln (3200 kg)", questionIds: ["book-load-q22"], visualStatus: "reviewed" }
];

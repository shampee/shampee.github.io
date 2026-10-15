// PDF 362-366 (book-cases, the final 5-page unit of the book, "Rättsfall").
// Reviewed source text in full. The chapter consists of ~19 short real
// court-case summaries (tingsrätt/hovrätt/Högsta domstolen rulings),
// each illustrating a single legal or practical principle. Unlike the
// book-signs catalog, this content is narrative and example-driven, so
// each case gets its own question in the book's own "Bedömning i
// bokens exempel" style, closely following the text. This closes the
// entire 39-unit book.
export const CASES_362_366_QUESTIONS = [
  {
    "id": "book-cases-q1",
    "topic": "rules",
    "kind": "Bedömning i bokens exempel",
    "source": "book",
    "chapterId": "responsibility",
    "bookUnitId": "book-cases",
    "bookPages": [362],
    "coverageIds": ["book-cases-t1"],
    "title": "Väjningsplikt enligt högerregeln även i fel körfält",
    "situation": "A svängde höger i en korsning där högerregeln gällde. B befann sig tillfälligt på fel sida av vägen eftersom föraren passerade en parkerad bil C. En krock skedde. Vad ansåg tingsrätten om ansvaret?",
    "options": [
      "Båda A och B hade gjort fel: A:s väjningsplikt enligt högerregeln gällde all trafik på körbanan till höger, även trafik som tillfälligt befann sig i fel körfält, och B klandrades för att ha varit på fel sida i ett läge då det inte var trafiksäkert.",
      "Endast B bar ansvar, eftersom B körde i fel körfält.",
      "Endast A bar ansvar, eftersom A svängde utan att se sig för."
    ],
    "correct": 0,
    "hint": "Högerregeln gäller 'all trafik på körbanan till höger', inte bara trafik i rätt körfält.",
    "explanation": "Tingsrätten ansåg att både A och B gjort fel. A:s väjningsplikt enligt högerregeln ansågs gälla all trafik på körbanan till höger, alltså även trafik i fel körfält. B klandrades ändå för att ha befunnit sig på fel sida av vägen i ett läge då det inte var trafiksäkert att göra det.",
    "takeaway": "Högerregelns väjningsplikt gäller all trafik till höger oavsett körfält, men den som olovligen befinner sig i fel körfält bär ändå ansvar om det inte var trafiksäkert."
  },
  {
    "id": "book-cases-q2",
    "topic": "rules",
    "kind": "Bedömning i bokens exempel",
    "source": "book",
    "chapterId": "responsibility",
    "bookUnitId": "book-cases",
    "bookPages": [362],
    "coverageIds": ["book-cases-t2"],
    "title": "Parkering i en vägkorsning",
    "situation": "I exemplet med A, B och C hade bil C parkerat i själva vägkorsningen. Varför lyfter boken fram detta som problematiskt, utöver frågan om vem som orsakade krocken mellan A och B?",
    "options": [
      "Att parkera i en vägkorsning är inte tillåtet, och exemplet visar hur en otillåtet parkerad bil kan bidra till att skapa farliga situationer för annan trafik, som när B tvingades ut i fel körfält.",
      "Det är tillåtet att parkera i en vägkorsning så länge bilen inte blockerar sikten helt.",
      "Bil C saknar helt betydelse för händelsen och nämns bara som bakgrund."
    ],
    "correct": 0,
    "hint": "Tänk på var C stod parkerad och varför B tvingades ut i fel körfält.",
    "explanation": "Bil C hade parkerat på ett otillåtet sätt, i själva vägkorsningen. Boken lyfter fram detta som ett tydligt exempel på varför det inte är tillåtet att parkera i en vägkorsning, eftersom en sådan bil kan tvinga andra trafikanter ut i fel körfält, precis som i fallet med B.",
    "takeaway": "Parkering i en vägkorsning är förbjuden, bland annat eftersom den kan tvinga andra trafikanter till farliga manövrar."
  },
  {
    "id": "book-cases-q3",
    "topic": "rules",
    "kind": "Bedömning i bokens exempel",
    "source": "book",
    "chapterId": "responsibility",
    "bookUnitId": "book-cases",
    "bookPages": [363],
    "coverageIds": ["book-cases-t3"],
    "title": "Felaktig hastighetsmätare är inget försvar",
    "situation": "En förares hastighetsmätare visade 75 km/h, men den faktiska hastigheten var cirka 90 km/h. Föraren kände inte till problemet med mätaren. Vad ansåg Högsta domstolen?",
    "options": [
      "Att det ändå var fortkörning, trots att föraren inte kände till felet i hastighetsmätaren; föraren bär ansvar för den faktiska hastigheten.",
      "Att föraren inte kunde dömas, eftersom denne litat på hastighetsmätaren i god tro.",
      "Att biltillverkaren i stället bar hela ansvaret för felet."
    ],
    "correct": 0,
    "hint": "Ansvaret för att hålla rätt hastighet ligger på föraren, oavsett vad instrumenten visar.",
    "explanation": "Högsta domstolen ansåg att detta var fortkörning, trots att föraren inte kände till problemet med hastighetsmätaren. Föraren bär ansvar för fordonets faktiska hastighet, inte bara för vad instrumentet visar.",
    "takeaway": "Du ansvarar för din faktiska hastighet, inte bara för vad hastighetsmätaren visar; ett tekniskt fel i mätaren är inget giltigt försvar."
  },
  {
    "id": "book-cases-q4",
    "topic": "rules",
    "kind": "Bedömning i bokens exempel",
    "source": "book",
    "chapterId": "responsibility",
    "bookUnitId": "book-cases",
    "bookPages": [363],
    "coverageIds": ["book-cases-t4"],
    "title": "Avlastning kräver närhet till fordonet",
    "situation": "En förare ställde bilen och gick 200–300 meter bort för att leverera gods till en fastighet. Vad ansåg hovrätten?",
    "options": [
      "Att detta var parkering, inte stannande för avlastning, eftersom aktiviteten (leveransen) inte skedde i närheten av bilen.",
      "Att det alltid räknas som avlastning så länge godset till slut levereras till rätt mottagare.",
      "Att avståndet till fastigheten saknar betydelse för bedömningen."
    ],
    "correct": 0,
    "hint": "Avlastning förutsätter att du håller dig i fordonets närhet medan du utför av- eller pålastningen.",
    "explanation": "Hovrätten ansåg att detta var parkering och inte stannande för avlastning, eftersom leveransen inte skedde i närheten av bilen utan 200–300 meter bort.",
    "takeaway": "Att lämna fordonet och gå en bit bort för att utföra ett ärende räknas som parkering, inte avlastning, även om syftet är att leverera gods."
  },
  {
    "id": "book-cases-q5",
    "topic": "rules",
    "kind": "Bedömning i bokens exempel",
    "source": "book",
    "chapterId": "responsibility",
    "bookUnitId": "book-cases",
    "bookPages": [363],
    "coverageIds": ["book-cases-t5"],
    "title": "Ansvar att mäta avstånd trots felmålad linje",
    "situation": "En heldragen gul linje sträckte sig cirka 5 meter framför ett övergångsställe, fast den egentligen borde ha varit 10 meter lång enligt regeln om parkeringsförbud framför övergångsställe. En bilförare parkerade precis framför linjen. Vad ansåg hovrätten?",
    "options": [
      "Att föraren själv var ansvarig för att mäta avståndet till övergångsstället, och att den felaktigt målade linjen inte gav rätt att parkera för nära övergångsstället.",
      "Att föraren inte kunde klandras, eftersom den målade linjen på vägen alltid är avgörande.",
      "Att kommunen som målat linjen felaktigt bar hela ansvaret, inte föraren."
    ],
    "correct": 0,
    "hint": "Vägmarkeringen är en hjälp, men den ersätter inte din skyldighet att känna till och följa den faktiska regeln.",
    "explanation": "Hovrätten ansåg att bilisten själv var ansvarig att mäta avståndet till övergångsstället, och att den felaktigt målade (för korta) linjen inte gav rätt att parkera för nära övergångsstället, eftersom regeln egentligen kräver 10 meter.",
    "takeaway": "En felaktigt målad linje fritar dig inte från ansvaret att hålla det avstånd som regeln faktiskt kräver, till exempel 10 meter framför ett övergångsställe."
  },
  {
    "id": "book-cases-q6",
    "topic": "rules",
    "kind": "Bedömning i bokens exempel",
    "source": "book",
    "chapterId": "responsibility",
    "bookUnitId": "book-cases",
    "bookPages": [363],
    "coverageIds": ["book-cases-t6"],
    "title": "Uppackning och sortering är inte avlastning",
    "situation": "En förare ställde bilen på en lastplats, där det var tillåtet att lasta av gods men förbjudet att parkera. Föraren lastade ur varor till sin butik men ägnade sig sedan åt uppackning och sortering av varorna bredvid bilen i cirka 10 minuter. Vad ansåg hovrätten?",
    "options": [
      "Att detta inte var tillåtet, eftersom uppackning och sortering av gods inte kan anses vara avlastning.",
      "Att allt som sker i nära anslutning till bilen automatiskt räknas som avlastning.",
      "Att tidsgränsen på en lastplats alltid är 15 minuter, så 10 minuter låg inom gränsen."
    ],
    "correct": 0,
    "hint": "Själva avlastningen avslutas när godset är ur bilen; det som händer därefter är något annat.",
    "explanation": "Hovrätten ansåg att detta inte var tillåtet, eftersom uppackning och sortering av varorna inte kan anses vara avlastning, utan en separat aktivitet som skedde efter att godset redan var ur bilen.",
    "takeaway": "Avlastning omfattar själva lastningen eller lossningen, inte efterföljande uppackning eller sortering av godset."
  },
  {
    "id": "book-cases-q7",
    "topic": "rules",
    "kind": "Bedömning i bokens exempel",
    "source": "book",
    "chapterId": "responsibility",
    "bookUnitId": "book-cases",
    "bookPages": [363],
    "coverageIds": ["book-cases-t7"],
    "title": "Att föra ett motordrivet fordon utan igångsatt motor",
    "situation": "En berusad person satt på en moped och förflyttade den genom att sparka sig fram med fötterna, medan mopedens motor var avstängd. Vad ansåg Högsta domstolen?",
    "options": [
      "Att personen ändå ansågs ha fört ett motordrivet fordon, trots att motorn inte var igång, vilket innebar att reglerna om rattfylleri kunde tillämpas.",
      "Att det inte kunde räknas som att föra ett fordon, eftersom motorn var avstängd under hela förflyttningen.",
      "Att mopeden i det läget räknades som en vanlig cykel, och reglerna om rattfylleri därför inte gällde."
    ],
    "correct": 0,
    "hint": "Att 'föra' ett fordon handlar om att förflytta och ha kontroll över det, inte nödvändigtvis om att motorn är igång.",
    "explanation": "Högsta domstolen ansåg att den berusade personen ändå hade fört ett motordrivet fordon, trots att motorn var avstängd, eftersom personen aktivt förflyttade och styrde mopeden.",
    "takeaway": "Du kan anses föra ett motordrivet fordon, med tillhörande ansvar för exempelvis rattfylleri, även om motorn är avstängd och du förflyttar fordonet på annat sätt."
  },
  {
    "id": "book-cases-q8",
    "topic": "rules",
    "kind": "Bedömning i bokens exempel",
    "source": "book",
    "chapterId": "responsibility",
    "bookUnitId": "book-cases",
    "bookPages": [364],
    "coverageIds": ["book-cases-t8"],
    "title": "Utfartsregeln går före högerregeln",
    "situation": "Ett bostadsområde hade ett avgränsat område för parkeringar. En kort väg ledde ut från området till en väg för vanlig trafik, och två fordon krockade där vägarna möttes. Vad ansåg Högsta domstolen om vilken regel som gällde?",
    "options": [
      "Att platsen räknades som en utfart, inte en vanlig vägkorsning, så högerregeln inte gällde; i stället gällde utfartsregeln, vilket innebar att föraren som kom från det avgränsade området hade väjningsplikt.",
      "Att högerregeln alltid gäller så fort två vägar fysiskt korsar varandra, oavsett vägarnas karaktär eller syfte.",
      "Att ingen av förarna hade väjningsplikt, eftersom platsen inte räknades som en riktig korsning."
    ],
    "correct": 0,
    "hint": "Det avgörande var vägens syfte, inte bara att två vägar fysiskt möttes.",
    "explanation": "Högsta domstolen ansåg att platsen var en utfart eftersom vägen från bostadsområdet bara tjänade det avgränsade parkeringsområdet. Därför gällde inte högerregeln, utan utfartsregeln, vilket gav föraren som kom från området väjningsplikt.",
    "takeaway": "En väg vars enda syfte är att tjäna ett avgränsat område, som en parkering, räknas som en utfart; då gäller utfartsregeln och inte högerregeln."
  },
  {
    "id": "book-cases-q9",
    "topic": "safety",
    "kind": "Bedömning i bokens exempel",
    "source": "book",
    "chapterId": "responsibility",
    "bookUnitId": "book-cases",
    "bookPages": [364],
    "coverageIds": ["book-cases-t9"],
    "title": "Känd risk för medvetslöshet och vårdslöshet i trafik",
    "situation": "En förare drabbades under färd av ett epileptiskt anfall som ledde till medvetslöshet och orsakade en olycka. Vad ansåg hovrätten?",
    "options": [
      "Att detta var vårdslöshet i trafik, eftersom föraren varit medveten om risken för anfall och ändå valt att köra.",
      "Att föraren inte kunde klandras alls, eftersom anfallet var en plötslig och oförutsägbar medicinsk händelse.",
      "Att ansvaret enbart låg hos den läkare som godkänt förarens körkort."
    ],
    "correct": 0,
    "hint": "Avgörande var inte anfallet i sig, utan att föraren redan kände till risken innan hen satte sig bakom ratten.",
    "explanation": "Hovrätten ansåg att detta var vårdslöshet i trafik, eftersom föraren varit medveten om risken för ett anfall och ändå valde att köra.",
    "takeaway": "Att köra trots kännedom om en risk för plötslig medvetslöshet kan räknas som vårdslöshet i trafik, oavsett att själva anfallet inte går att styra över."
  },
  {
    "id": "book-cases-q10",
    "topic": "rules",
    "kind": "Bedömning i bokens exempel",
    "source": "book",
    "chapterId": "responsibility",
    "bookUnitId": "book-cases",
    "bookPages": [365],
    "coverageIds": ["book-cases-t10"],
    "title": "Smitning efter att ha stänkt ner gående",
    "situation": "En förare körde så att två gångtrafikanter blev nedstänkta. Föraren märkte vad som hänt men stannade inte. Vad ansåg hovrätten?",
    "options": [
      "Att detta var att betrakta som smitning.",
      "Att det inte var smitning, eftersom ingen fysisk skada uppstod på personerna.",
      "Att föraren bara behövde stanna om gångtrafikanterna själva krävde det."
    ],
    "correct": 0,
    "hint": "Smitning handlar om att lämna platsen efter en händelse du orsakat utan att uppfylla din skyldighet, inte bara om kroppsskada.",
    "explanation": "Hovrätten ansåg att detta var att betrakta som smitning, eftersom föraren märkte vad som hänt men ändå valde att inte stanna.",
    "takeaway": "Att orsaka olägenhet för andra trafikanter och inte stanna kan räknas som smitning, även utan en krock i vanlig mening."
  },
  {
    "id": "book-cases-q11",
    "topic": "rules",
    "kind": "Bedömning i bokens exempel",
    "source": "book",
    "chapterId": "responsibility",
    "bookUnitId": "book-cases",
    "bookPages": [365],
    "coverageIds": ["book-cases-t11"],
    "title": "Smitning trots avsikt att kontakta bilägaren senare",
    "situation": "En förare backade in i en parkerad bil, klev ut och tittade men kunde inte se några skador. Föraren åkte därifrån med avsikten att kontakta den andra bilens ägare senare. Vad ansåg hovrätten?",
    "options": [
      "Att detta räknades som smitning från olycksplats, trots avsikten att kontakta ägaren senare.",
      "Att det inte var smitning, eftersom föraren faktiskt stannade och kontrollerade bilen innan hen åkte.",
      "Att det inte var smitning så länge föraren senare verkligen hörde av sig till ägaren."
    ],
    "correct": 0,
    "hint": "Skyldigheten gäller vad du gör på platsen, inte vad du planerar att göra efteråt.",
    "explanation": "Hovrätten ansåg att detta var smitning från olycksplats, trots att föraren haft för avsikt att kontakta ägaren senare. Att åka iväg uppfyller inte skyldigheten att stanna kvar eller lämna uppgifter på plats.",
    "takeaway": "Att lämna platsen efter en kollision, även med avsikt att höra av sig senare, uppfyller inte skyldigheten att stanna kvar eller lämna uppgifter på plats."
  },
  {
    "id": "book-cases-q12",
    "topic": "safety",
    "kind": "Bedömning i bokens exempel",
    "source": "book",
    "chapterId": "responsibility",
    "bookUnitId": "book-cases",
    "bookPages": [365],
    "coverageIds": ["book-cases-t12"],
    "title": "Onödigt störande körning trots ett oskyldigt syfte",
    "situation": "En bilist körde runt ett bostadskvarter flera gånger under kort tid, med ryckig körning (accelerationer och inbromsningar). Föraren hävdade att syftet var att leta efter en bekant. Vad ansåg hovrätten?",
    "options": [
      "Att boende blivit onödigt störda och dömde föraren, trots förarens förklaring om syftet med körningen.",
      "Att föraren friades helt, eftersom syftet med körningen inte var att störa någon.",
      "Att körningen bara var ett brott om den skedde nattetid."
    ],
    "correct": 0,
    "hint": "Det är den faktiska störningen för andra, inte förarens avsikt, som är avgörande.",
    "explanation": "Hovrätten ansåg att boende blivit onödigt störda av den ryckiga körningen och dömde föraren, trots förarens förklaring att syftet var att leta efter en bekant.",
    "takeaway": "Onödigt störande körning bedöms utifrån den faktiska störningen för omgivningen, inte utifrån förarens egna, kanske oskyldiga, avsikter."
  },
  {
    "id": "book-cases-q13",
    "topic": "safety",
    "kind": "Bedömning i bokens exempel",
    "source": "book",
    "chapterId": "responsibility",
    "bookUnitId": "book-cases",
    "bookPages": [365],
    "coverageIds": ["book-cases-t13"],
    "title": "Onödigt högt motorljud nära bostäder",
    "situation": "En förare körde i ett område nära bostäder och gjorde ett kraftigt gaspådrag som lät mycket högt. Vad ansåg hovrätten?",
    "options": [
      "Att detta var att betrakta som onödigt störande och dömde föraren.",
      "Att ljudet inte spelade någon roll så länge föraren inte körde för fort.",
      "Att detta bara är ett problem om det sker upprepade gånger vid samma tillfälle."
    ],
    "correct": 0,
    "hint": "Jämför med det föregående fallet om ryckig körning: det är den onödiga störningen för de boende som bedöms.",
    "explanation": "Hovrätten ansåg att det kraftiga, högljudda gaspådraget nära bostäder var att betrakta som onödigt störande och dömde föraren.",
    "takeaway": "Ett enstaka, onödigt högljutt gaspådrag nära bostäder kan räknas som störande körning och leda till ansvar."
  },
  {
    "id": "book-cases-q14",
    "topic": "rules",
    "kind": "Bedömning i bokens exempel",
    "source": "book",
    "chapterId": "responsibility",
    "bookUnitId": "book-cases",
    "bookPages": [365],
    "coverageIds": ["book-cases-t14"],
    "title": "Både väjningsbrott och för hög hastighet vid skymd sikt",
    "situation": "A och B krockade i en högerregelskorsning med skymd sikt. A körde i cirka 50 km/h. Vad ansåg Högsta domstolen om ansvaret?",
    "options": [
      "Att båda förarna dömdes för vårdslöshet i trafik: B för brott mot högerregeln, och A för att ha hållit för hög hastighet med tanke på den skymda sikten.",
      "Att endast B bar ansvar, eftersom B bröt mot högerregeln.",
      "Att A friades helt, eftersom A hade väjningsrätt enligt högerregeln."
    ],
    "correct": 0,
    "hint": "Att ha väjningsrätt enligt högerregeln fritar dig inte från ansvaret att anpassa farten efter sikten.",
    "explanation": "Högsta domstolen dömde båda förarna för vårdslöshet i trafik: B för brott mot högerregeln, och A för att ha hållit för hög hastighet i förhållande till den skymda sikten.",
    "takeaway": "Även en förare med väjningsrätt enligt högerregeln måste anpassa hastigheten efter sikten; väjningsrätt är ingen ursäkt för för hög fart vid skymd sikt."
  },
  {
    "id": "book-cases-q15",
    "topic": "rules",
    "kind": "Bedömning i bokens exempel",
    "source": "book",
    "chapterId": "responsibility",
    "bookUnitId": "book-cases",
    "bookPages": [366],
    "coverageIds": ["book-cases-t15"],
    "title": "Omparkering förnyar inte tidsgränsen",
    "situation": "Hovrätten har ansett att omparkering i samma parkeringsruta endast är tillåten om någon annan har en realistisk möjlighet att ta över rutan. Om du har parkerat på en 10-minutersparkering, vad gäller om du backar ut och omedelbart kör fram för att parkera i samma ruta igen?",
    "options": [
      "En ny 10-minutersperiod påbörjas inte bara för att du backade ut och körde in igen, eftersom ingen annan haft en realistisk möjlighet att ta över platsen.",
      "En helt ny tidsperiod börjar alltid så fort du lämnat och återvänt till rutan, oavsett hur kort tid det tar.",
      "Regeln gäller bara om du lämnar parkeringsplatsen i minst en timme."
    ],
    "correct": 0,
    "hint": "Syftet med tidsbegränsningen är att ge andra en chans att använda platsen, inte att du ska kunna kringgå tidsgränsen.",
    "explanation": "Hovrätten ansåg att omparkering i samma ruta bara är tillåten om någon annan haft en realistisk möjlighet att ta över platsen. Att bara backa ut och köra in igen förnyar alltså inte tidsgränsen.",
    "takeaway": "Du kan inte förnya en tidsbegränsad parkering genom att kort backa ut och köra in igen, om ingen annan haft en verklig möjlighet att ta platsen."
  },
  {
    "id": "book-cases-q16",
    "topic": "rules",
    "kind": "Bedömning i bokens exempel",
    "source": "book",
    "chapterId": "responsibility",
    "bookUnitId": "book-cases",
    "bookPages": [366],
    "coverageIds": ["book-cases-t16"],
    "title": "Personlig oförmåga fritar inte från avgiftsskyldighet",
    "situation": "En hjärtsjuk person befann sig högt upp i ett lägenhetshus och kunde inte gå ner för trapporna för att betala en ny parkeringsavgift innan tiden gick ut. Vad ansåg hovrätten?",
    "options": [
      "Att personen, trots sin situation, var skyldig att betala den nya avgiften.",
      "Att personen var befriad från avgiften på grund av sitt hälsotillstånd.",
      "Att fastighetsägaren i stället var skyldig att betala avgiften."
    ],
    "correct": 0,
    "hint": "Parkeringsreglerna tar generellt inte hänsyn till personliga svårigheter att ta sig till bilen i tid.",
    "explanation": "Hovrätten ansåg att personen, trots sitt hälsotillstånd och svårigheten att ta sig ner för trapporna, ändå var skyldig att betala den nya parkeringsavgiften.",
    "takeaway": "Skyldigheten att betala parkeringsavgift i tid gäller även om personliga omständigheter gör det svårt att ta sig till bilen."
  },
  {
    "id": "book-cases-q17",
    "topic": "safety",
    "kind": "Bedömning i bokens exempel",
    "source": "book",
    "chapterId": "responsibility",
    "bookUnitId": "book-cases",
    "bookPages": [366],
    "coverageIds": ["book-cases-t17"],
    "title": "Att öppna bildörren oförsiktigt",
    "situation": "En parkerad förare öppnade bildörren tvärt så att den träffade en förbipasserande cyklist. Vad ansåg domstolen?",
    "options": [
      "Att föraren dömdes för vårdslöshet i trafik.",
      "Att föraren inte kunde dömas, eftersom bilen stod stilla och var parkerad.",
      "Att ansvaret enbart låg hos cyklisten för att inte ha hållit tillräckligt avstånd till bilen."
    ],
    "correct": 0,
    "hint": "Att hantera ett fordon på ett sätt som skadar någon annan kan vara vårdslöshet, även om bilen inte är i rörelse i vanlig mening.",
    "explanation": "Domstolen dömde den parkerade föraren för vårdslöshet i trafik, eftersom bildörren öppnades så att den träffade en förbipasserande cyklist.",
    "takeaway": "Du måste kontrollera omgivningen innan du öppnar en bildörr; att oförsiktigt öppna dörren i vägen för en cyklist kan räknas som vårdslöshet i trafik."
  },
  {
    "id": "book-cases-q18",
    "topic": "rules",
    "kind": "Bedömning i bokens exempel",
    "source": "book",
    "chapterId": "responsibility",
    "bookUnitId": "book-cases",
    "bookPages": [366],
    "coverageIds": ["book-cases-t18"],
    "title": "Bränslebrist ger inte rätt att stå i strid med parkeringsförbud",
    "situation": "En förares bränsle tog slut, och bilen blev stående på en plats med parkeringsförbud. Vad ansåg hovrätten?",
    "options": [
      "Att bränslebristen inte gav föraren rätt att ha bilen uppställd på platsen, eftersom föraren själv ansvarar för att ha tillräckligt med bränsle i fordonet.",
      "Att föraren alltid är befriad från ansvar vid ett oplanerat motorstopp, oavsett orsak.",
      "Att den här typen av bedömning bara gäller elfordon som fått slut på laddning."
    ],
    "correct": 0,
    "hint": "Att planera i förväg, till exempel genom att tanka i tid, är förarens eget ansvar.",
    "explanation": "Hovrätten ansåg att bränslebristen inte gav föraren rätt att ha bilen uppställd på platsen i strid med parkeringsförbudet, eftersom föraren själv ansvarar för att ha tillräckligt med bränsle i fordonet.",
    "takeaway": "Du ansvarar för att ha tillräckligt med bränsle; bränslebrist räknas inte som en giltig ursäkt för att stå parkerad i strid med ett förbud."
  },
  {
    "id": "book-cases-q19",
    "topic": "rules",
    "kind": "Bedömning i bokens exempel",
    "source": "book",
    "chapterId": "responsibility",
    "bookUnitId": "book-cases",
    "bookPages": [366],
    "coverageIds": ["book-cases-t19"],
    "title": "Trasig betalningsautomat fritar inte från avgiftsskyldighet",
    "situation": "Parkeringsautomaten på en avgiftsbelagd plats var ur funktion. Vad ansåg hovrätten om att parkera där ändå utan att betala?",
    "options": [
      "Att det inte var tillåtet att parkera på platsen utan att betala avgift, trots att automaten var trasig.",
      "Att parkeringen blev avgiftsfri så fort automaten slutade fungera.",
      "Att föraren bara behövde betala avgiften i efterhand om hen blev påkommen."
    ],
    "correct": 0,
    "hint": "En trasig betalningsautomat innebär normalt att du måste hitta ett annat sätt att betala, inte att platsen blir gratis.",
    "explanation": "Hovrätten ansåg att det inte var tillåtet att parkera utan att betala avgift, trots att automaten var ur funktion. Föraren förväntades hitta ett annat sätt att betala.",
    "takeaway": "Ett tekniskt fel på betalningsautomaten fritar dig inte från skyldigheten att betala parkeringsavgiften på något sätt."
  },
  {
    "id": "book-cases-q20",
    "topic": "rules",
    "kind": "Bedömning i bokens exempel",
    "source": "book",
    "chapterId": "responsibility",
    "bookUnitId": "book-cases",
    "bookPages": [366],
    "coverageIds": ["book-cases-t20"],
    "title": "Undantag: att stanna för att underlätta framkomligheten",
    "situation": "En förare stannade i ett område med stoppförbud för att hjälpa till att flytta en framförvarande bil som fått motorstopp, och fick en parkeringsbot. Vad ansåg hovrätten?",
    "options": [
      "Att boten skulle ogiltigförklaras, eftersom stannandet skedde för att underlätta framkomligheten på platsen.",
      "Att boten var korrekt, eftersom stoppförbud alltid gäller utan undantag.",
      "Att boten bara kunde ogiltigförklaras om föraren hjälpt till i minst en timme."
    ],
    "correct": 0,
    "hint": "Jämför med fallet om avlastning 200–300 meter bort: här var syftet att snabbt lösa ett akut trafikhinder, inte ett personligt ärende.",
    "explanation": "Hovrätten ogiltigförklarade parkeringsboten, eftersom stannandet skedde för att underlätta framkomligheten på platsen genom att hjälpa till att flytta en bil med motorstopp.",
    "takeaway": "Att kort stanna i ett stoppförbudsområde för att hjälpa till att lösa ett akut trafikhinder kan vara ett giltigt undantag från förbudet."
  }
];

export const CASES_362_366_COVERAGE = [
  { id: "book-cases-t1", bookUnitId: "book-cases", pages: [362], label: "A/B/C: högerregelns väjningsplikt gäller fel körfält också", questionIds: ["book-cases-q1"], visualStatus: "reviewed" },
  { id: "book-cases-t2", bookUnitId: "book-cases", pages: [362], label: "Parkering i vägkorsning är förbjuden", questionIds: ["book-cases-q2"], visualStatus: "reviewed" },
  { id: "book-cases-t3", bookUnitId: "book-cases", pages: [363], label: "Felaktig hastighetsmätare befriar inte från ansvar", questionIds: ["book-cases-q3"], visualStatus: "reviewed" },
  { id: "book-cases-t4", bookUnitId: "book-cases", pages: [363], label: "Avlastning 200-300 m bort räknas som parkering", questionIds: ["book-cases-q4"], visualStatus: "reviewed" },
  { id: "book-cases-t5", bookUnitId: "book-cases", pages: [363], label: "Felmålad linje fritar inte från 10-metersregeln", questionIds: ["book-cases-q5"], visualStatus: "reviewed" },
  { id: "book-cases-t6", bookUnitId: "book-cases", pages: [363], label: "Uppackning/sortering räknas inte som avlastning", questionIds: ["book-cases-q6"], visualStatus: "reviewed" },
  { id: "book-cases-t7", bookUnitId: "book-cases", pages: [363], label: "Att föra fordon gäller även med avstängd motor", questionIds: ["book-cases-q7"], visualStatus: "reviewed" },
  { id: "book-cases-t8", bookUnitId: "book-cases", pages: [364], label: "Utfartsregeln går före högerregeln vid parkeringsutfart", questionIds: ["book-cases-q8"], visualStatus: "reviewed" },
  { id: "book-cases-t9", bookUnitId: "book-cases", pages: [364], label: "Känd anfallsrisk och vårdslöshet i trafik", questionIds: ["book-cases-q9"], visualStatus: "reviewed" },
  { id: "book-cases-t10", bookUnitId: "book-cases", pages: [365], label: "Att stänka ner gående utan att stanna är smitning", questionIds: ["book-cases-q10"], visualStatus: "reviewed" },
  { id: "book-cases-t11", bookUnitId: "book-cases", pages: [365], label: "Smitning trots avsikt att höra av sig senare", questionIds: ["book-cases-q11"], visualStatus: "reviewed" },
  { id: "book-cases-t12", bookUnitId: "book-cases", pages: [365], label: "Onödigt störande körning trots oskyldigt syfte", questionIds: ["book-cases-q12"], visualStatus: "reviewed" },
  { id: "book-cases-t13", bookUnitId: "book-cases", pages: [365], label: "Onödigt högt gaspådrag nära bostäder", questionIds: ["book-cases-q13"], visualStatus: "reviewed" },
  { id: "book-cases-t14", bookUnitId: "book-cases", pages: [365], label: "Väjningsrätt fritar inte från hastighetsanpassning vid skymd sikt", questionIds: ["book-cases-q14"], visualStatus: "reviewed" },
  { id: "book-cases-t15", bookUnitId: "book-cases", pages: [366], label: "Omparkering förnyar inte en tidsbegränsning", questionIds: ["book-cases-q15"], visualStatus: "reviewed" },
  { id: "book-cases-t16", bookUnitId: "book-cases", pages: [366], label: "Personlig oförmåga fritar inte från avgiftsskyldighet", questionIds: ["book-cases-q16"], visualStatus: "reviewed" },
  { id: "book-cases-t17", bookUnitId: "book-cases", pages: [366], label: "Oförsiktig döröppning är vårdslöshet i trafik", questionIds: ["book-cases-q17"], visualStatus: "reviewed" },
  { id: "book-cases-t18", bookUnitId: "book-cases", pages: [366], label: "Bränslebrist fritar inte från parkeringsförbud", questionIds: ["book-cases-q18"], visualStatus: "reviewed" },
  { id: "book-cases-t19", bookUnitId: "book-cases", pages: [366], label: "Trasig betalningsautomat fritar inte från avgift", questionIds: ["book-cases-q19"], visualStatus: "reviewed" },
  { id: "book-cases-t20", bookUnitId: "book-cases", pages: [366], label: "Undantag vid stopp för att underlätta framkomlighet", questionIds: ["book-cases-q20"], visualStatus: "reviewed" }
];

// PDF 148-152. Reviewed source text and the worked "Testa dina kunskaper"
// example on 151-152, including its direct Trafikförordningen quote. PDF 153
// is the next unit's title page ("Synen" / book-vision), no content.
export const FATIGUE_148_153_QUESTIONS = [
  {
    "id": "book-fatigue-q1",
    "topic": "rules",
    "kind": "Trafikregel",
    "source": "book",
    "chapterId": "risks",
    "bookUnitId": "book-fatigue",
    "bookPages": [148, 151, 152],
    "coverageIds": ["book-fatigue-t1"],
    "title": "Är trötthet alltid förbjudet",
    "situation": "Kan det vara förbjudet att framföra ett fordon om du är trött?",
    "options": [
      "Ja, om tröttheten gör att du inte kan köra trafiksäkert.",
      "Nej, eftersom trötthet inte går att mäta på samma sätt som promille.",
      "Ja, men bara under natten mellan klockan 22 och 06."
    ],
    "correct": 0,
    "hint": "Trafikförordningen talar om huruvida föraren ”kan” föra fordonet på ett betryggande sätt.",
    "explanation": "Trafikförordningen säger: ”Fordon får inte föras av den som på grund av sjukdom, uttröttning, påverkan av alkohol, andra stimulerande eller bedövande ämnen eller av andra skäl inte kan föra fordonet på ett betryggande sätt.” Det är tillåtet att vara trött så länge du kan framföra fordonet på ett betryggande sätt — frågan gäller alltså om det ”kan” vara förbjudet, inte om det alltid är förbjudet.",
    "takeaway": "Att vara trött är bara förbjudet när det gör att du inte kan köra betryggande."
  },
  {
    "id": "book-fatigue-q2",
    "topic": "rules",
    "kind": "Trafikregel",
    "source": "book",
    "chapterId": "risks",
    "bookUnitId": "book-fatigue",
    "bookPages": [148],
    "coverageIds": ["book-fatigue-t2"],
    "title": "Trötthet jämförd med rattfylleri",
    "situation": "Hur farlig kan en natt helt utan sömn vara jämfört med att köra alkoholpåverkad?",
    "options": [
      "En natt utan sömn försämrar reaktionstiden till samma nivå som en rattfull förare.",
      "En natt utan sömn har ingen mätbar effekt på reaktionstiden.",
      "Sömnbrist påverkar bara synen, inte reaktionstiden."
    ],
    "correct": 0,
    "hint": "Boken jämför direkt med en rattfull förares reaktionstid.",
    "explanation": "Det är förbjudet och straffbart att köra om du på grund av trötthet inte kan köra trafiksäkert. En natt utan sömn försämrar reaktionstiden till samma nivå som en rattfull förare.",
    "takeaway": "Svår sömnbrist kan försämra reaktionstiden lika mycket som rattfylleri."
  },
  {
    "id": "book-fatigue-q3",
    "topic": "safety",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "risks",
    "bookUnitId": "book-fatigue",
    "bookPages": [148],
    "coverageIds": ["book-fatigue-t3"],
    "title": "Orsaker till trötthet",
    "situation": "Vilket av följande räknar boken INTE som en orsak till trötthet bakom ratten?",
    "options": [
      "Kraftig acceleration och många filbyten.",
      "Utmattning och sömnbrist.",
      "Monotoni, till exempel breda, långa och raka vägar utan avbrott, motorljud och buller från däcken."
    ],
    "correct": 0,
    "hint": "Boken listar utmattning, sömnbrist, alkohol/droger/mediciner och monotoni.",
    "explanation": "Orsaker till trötthet är utmattning, sömnbrist, alkohol, droger och vissa mediciner, samt monotoni (enformighet) — exempelvis breda, långa och raka vägar utan avbrott, motorljud och buller från däcken.",
    "takeaway": "Monotona vägar och ljud kan göra dig trött lika mycket som faktisk sömnbrist."
  },
  {
    "id": "book-fatigue-q4",
    "topic": "safety",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "risks",
    "bookUnitId": "book-fatigue",
    "bookPages": [148],
    "coverageIds": ["book-fatigue-t4"],
    "title": "De allvarligaste försämringarna av trötthet",
    "situation": "Trötthet skärpan på i princip alla sinnen och förmågor. Vilken av följande är INTE en av de allvarligaste försämringarna som boken nämner?",
    "options": [
      "Starkare känsla för avstånd till andra fordon.",
      "Dålig beslutsfattningsförmåga och sämre koncentration.",
      "Längre tid att uppfatta saker, där vissa saker inte upptäcks alls."
    ],
    "correct": 0,
    "hint": "Trötthet försämrar förmågor, det förbättrar inga.",
    "explanation": "De allvarligaste försämringarna är sämre koncentration och svårare att koordinera, längre tid att uppfatta saker (vissa saker upptäcks inte alls), dålig beslutsfattningsförmåga, försämrad reaktionstid och reflexer, samt svårare att hålla jämn kurs och hastighet.",
    "takeaway": "Trötthet försämrar nästan alla förmågor som behövs för säker körning."
  },
  {
    "id": "book-fatigue-q5",
    "topic": "safety",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "risks",
    "bookUnitId": "book-fatigue",
    "bookPages": [149],
    "coverageIds": ["book-fatigue-t5"],
    "title": "Tecken på trötthet",
    "situation": "Vilket av följande räknar boken INTE som en trötthetssignal?",
    "options": [
      "Ökad aptit och törst.",
      "Suddig blick och svårt att hålla ögonlocken öppna.",
      "Gäspar ofta och blir kall och frusen."
    ],
    "correct": 0,
    "hint": "Boken listar fysiska och mentala tecken, inte aptit eller törst.",
    "explanation": "Trötthetssignaler enligt boken är bland annat suddig blick, problem med koncentrationen, torr i munnen, gäspningar, att bli kall och frusen, huvudet känns tungt, överreaktioner, muskelavslappning, synvillor och illusioner samt svårt att hålla ögonlocken öppna.",
    "takeaway": "Känn igen kroppens egna trötthetssignaler innan de blir farliga."
  },
  {
    "id": "book-fatigue-q6",
    "topic": "safety",
    "kind": "Säkerhetsråd",
    "source": "book",
    "chapterId": "risks",
    "bookUnitId": "book-fatigue",
    "bookPages": [149],
    "coverageIds": ["book-fatigue-t6"],
    "title": "Undvik trötthet under resan",
    "situation": "Vilket av följande råd ger boken för att undvika trötthet under en bilresa?",
    "options": [
      "Ta en paus efter cirka en timmes körning och gå ut ur bilen.",
      "Håll bilen varm och avstå helt från pauser för att hålla tempot uppe.",
      "Ät en tung måltid med mycket kött innan du kör vidare."
    ],
    "correct": 0,
    "hint": "Boken avråder specifikt från för varmt i bilen och tung mat.",
    "explanation": "För att undvika trötthet: kör utvilad, ha inte för varmt i bilen, ta en paus efter cirka en timmes körning (gå ut ur bilen), och ät ingen tung mat (kött och liknande).",
    "takeaway": "Regelbundna pauser utomhus och lätt mat motverkar trötthet under resan."
  },
  {
    "id": "book-fatigue-q7",
    "topic": "safety",
    "kind": "Säkerhetsprincip",
    "source": "book",
    "chapterId": "risks",
    "bookUnitId": "book-fatigue",
    "bookPages": [150],
    "coverageIds": ["book-fatigue-t7"],
    "title": "Det enda riktiga sättet mot trötthet",
    "situation": "Vad är enligt boken det bästa och enda riktiga sättet att bli av med trötthet?",
    "options": [
      "Att sova länge.",
      "Att dricka mycket kaffe under hela resan.",
      "Att öppna fönstret och köra med kall luft i bilen."
    ],
    "correct": 0,
    "hint": "Allt annat boken nämner är bara tillfälliga lösningar.",
    "explanation": "Det bästa och enda riktiga sättet att minska trötthet är att sova länge. Kort tupplur, paus med frisk luft och koffein kan bara minska tröttheten tillfälligt.",
    "takeaway": "Bara ordentlig sömn löser trötthet på riktigt — allt annat är tillfälligt."
  },
  {
    "id": "book-fatigue-q8",
    "topic": "safety",
    "kind": "Säkerhetsråd",
    "source": "book",
    "chapterId": "risks",
    "bookUnitId": "book-fatigue",
    "bookPages": [150],
    "coverageIds": ["book-fatigue-t8"],
    "title": "Tillfälligt minska trötthet",
    "situation": "Du behöver minska tröttheten tillfälligt under en resa. Hur kort får en tupplur vara enligt boken för att vara effektiv?",
    "options": [
      "Inte kortare än 15 minuter.",
      "Minst 2 timmar.",
      "Längden spelar ingen roll, även några sekunders slummer räcker."
    ],
    "correct": 0,
    "hint": "En för kort tupplur hinner inte göra någon skillnad.",
    "explanation": "För att tillfälligt minska tröttheten kan du ta en kort tupplur, dock inte kortare än 15 minuter, en paus eller bensträckare med frisk luft, eller dricka kaffe eller annat koffein, som kan ha samma effekt som en tupplur.",
    "takeaway": "En effektiv tupplur ska vara minst 15 minuter."
  },
  {
    "id": "book-fatigue-q9",
    "topic": "safety",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "risks",
    "bookUnitId": "book-fatigue",
    "bookPages": [150],
    "coverageIds": ["book-fatigue-t9"],
    "title": "Mikrosömn",
    "situation": "Du nickar till med huvudet och vaknar nästan omedelbart med en snabb huvudryckning. Vad kallas detta, och hur länge varar det vanligtvis?",
    "options": [
      "Mikrosömn, som ofta varar mindre än 1 sekund.",
      "Sömnapné, som varar hela natten.",
      "Tupplur, som varar 15–30 minuter."
    ],
    "correct": 0,
    "hint": "Namnet beskriver hur extremt kort händelsen är.",
    "explanation": "Mikrosömn är när du nickar till med huvudet och nästan omedelbart vaknar upp med en snabb huvudryckning. Mikrosömn varar under en mycket kort tid, ofta mindre än 1 sekund.",
    "takeaway": "Mikrosömn är en blixtsnabb bortdomning, ofta under en sekund."
  },
  {
    "id": "book-fatigue-q10",
    "topic": "safety",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "risks",
    "bookUnitId": "book-fatigue",
    "bookPages": [150],
    "coverageIds": ["book-fatigue-t10"],
    "title": "Sömnapné",
    "situation": "Vad är sömnapné, och hur hänger det ihop med trötthetsolyckor?",
    "options": [
      "Andningsstörningar som stör nattens sömn; bristen på god sömn leder till ökad risk för trötthetsolyckor i trafiken.",
      "En kort, lätt sömnform på 15–30 minuter utan några risker.",
      "Ett annat ord för mikrosömn under bilkörning."
    ],
    "correct": 0,
    "hint": "Det handlar om andningen under natten, inte om körningen i sig.",
    "explanation": "Sömnapné är andningsstörningar som stör nattens sömn. Bristen på god sömn leder till ökad risk för trötthetsolyckor i trafiken.",
    "takeaway": "Sömnapné stör nattsömnen och höjer därmed risken för trötthetsolyckor."
  },
  {
    "id": "book-fatigue-q11",
    "topic": "safety",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "risks",
    "bookUnitId": "book-fatigue",
    "bookPages": [150],
    "coverageIds": ["book-fatigue-t11"],
    "title": "Trötthetsstatistik: tid på dygnet och olyckstyp",
    "situation": "Vilken tid på dygnet inträffar de flesta trötthetsolyckorna, och vilken är den vanligaste trötthetsolyckan?",
    "options": [
      "Klockan 02:00–05:00, och singelolycka är den vanligaste trötthetsolyckan.",
      "Klockan 12:00–15:00, och omkörningsolycka är den vanligaste trötthetsolyckan.",
      "Klockan 08:00–09:00, och påkörning bakifrån är den vanligaste trötthetsolyckan."
    ],
    "correct": 0,
    "hint": "Tänk på när kroppens naturliga dygnsrytm gör den tröttast.",
    "explanation": "Klockan 02:00–05:00 inträffar de flesta trötthetsolyckorna. Singelolycka är den vanligaste trötthetsolyckan.",
    "takeaway": "Trötthetsolyckor koncentreras till natten, oftast som singelolyckor."
  },
  {
    "id": "book-fatigue-q12",
    "topic": "safety",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "risks",
    "bookUnitId": "book-fatigue",
    "bookPages": [150],
    "coverageIds": ["book-fatigue-t12"],
    "title": "Trötthetsolyckor i mörker",
    "situation": "Hur stor andel av singelolyckorna utanför tättbebyggt område sker under mörker eller gryning, enligt boken?",
    "options": [
      "40 %.",
      "5 %.",
      "90 %."
    ],
    "correct": 0,
    "hint": "Siffran kommer direkt från bokens trötthetsstatistik.",
    "explanation": "40 % av singelolyckorna utanför tättbebyggt område sker under mörker eller gryning.",
    "takeaway": "En stor andel av singelolyckorna på landsväg sker i mörker eller gryning."
  },
  {
    "id": "book-fatigue-q13",
    "topic": "safety",
    "kind": "Säkerhetsprincip",
    "source": "book",
    "chapterId": "risks",
    "bookUnitId": "book-fatigue",
    "bookPages": [150],
    "coverageIds": ["book-fatigue-t13"],
    "title": "Olycksrisk nära resmålet",
    "situation": "Du närmar dig slutmålet för en lång bilresa. Varför ökar olycksrisken enligt boken just då?",
    "options": [
      "Du slappnar av och tänker att du snart är framme, vilket innebär större olycksrisk.",
      "Olycksrisken minskar alltid nära resmålet, eftersom hastigheten normalt är lägre.",
      "Risken ökar bara om resmålet ligger i tättbebyggt område."
    ],
    "correct": 0,
    "hint": "Uppmärksamheten kan sjunka innan resan faktiskt är slut.",
    "explanation": "Nära resmålet innebär större olycksrisk, eftersom du slappnar av och tänker att du snart är framme.",
    "takeaway": "Håll uppmärksamheten uppe ända fram — risken ökar när du tror att du nästan är där."
  }
];

export const FATIGUE_148_153_COVERAGE = [
  { id: "book-fatigue-t1", bookUnitId: "book-fatigue", pages: [148, 151, 152], label: "Trötthet är förbjudet när trafiksäker körning inte är möjlig", questionIds: ["book-fatigue-q1"], visualStatus: "not-needed" },
  { id: "book-fatigue-t2", bookUnitId: "book-fatigue", pages: [148], label: "Sömnlös natt kan motsvara rattfylleri", questionIds: ["book-fatigue-q2"], visualStatus: "not-needed" },
  { id: "book-fatigue-t3", bookUnitId: "book-fatigue", pages: [148], label: "Orsaker till trötthet, inklusive monotoni", questionIds: ["book-fatigue-q3"], visualStatus: "reviewed" },
  { id: "book-fatigue-t4", bookUnitId: "book-fatigue", pages: [148], label: "De allvarligaste försämringarna av trötthet", questionIds: ["book-fatigue-q4"], visualStatus: "not-needed" },
  { id: "book-fatigue-t5", bookUnitId: "book-fatigue", pages: [149], label: "Bokens trötthetssignaler", questionIds: ["book-fatigue-q5"], visualStatus: "not-needed" },
  { id: "book-fatigue-t6", bookUnitId: "book-fatigue", pages: [149], label: "Råd för att undvika trötthet under resan", questionIds: ["book-fatigue-q6"], visualStatus: "not-needed" },
  { id: "book-fatigue-t7", bookUnitId: "book-fatigue", pages: [150], label: "Sömn är det enda riktiga botemedlet", questionIds: ["book-fatigue-q7"], visualStatus: "not-needed" },
  { id: "book-fatigue-t8", bookUnitId: "book-fatigue", pages: [150], label: "Tupplurens minsta effektiva längd", questionIds: ["book-fatigue-q8"], visualStatus: "not-needed" },
  { id: "book-fatigue-t9", bookUnitId: "book-fatigue", pages: [150], label: "Mikrosömn", questionIds: ["book-fatigue-q9"], visualStatus: "not-needed" },
  { id: "book-fatigue-t10", bookUnitId: "book-fatigue", pages: [150], label: "Sömnapné", questionIds: ["book-fatigue-q10"], visualStatus: "not-needed" },
  { id: "book-fatigue-t11", bookUnitId: "book-fatigue", pages: [150], label: "Trötthetsolyckors tid och typ", questionIds: ["book-fatigue-q11"], visualStatus: "not-needed" },
  { id: "book-fatigue-t12", bookUnitId: "book-fatigue", pages: [150], label: "Andel singelolyckor i mörker/gryning", questionIds: ["book-fatigue-q12"], visualStatus: "not-needed" },
  { id: "book-fatigue-t13", bookUnitId: "book-fatigue", pages: [150], label: "Ökad olycksrisk nära resmålet", questionIds: ["book-fatigue-q13"], visualStatus: "not-needed" }
];

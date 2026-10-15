// PDF 162-163, 165-166. Reviewed source text and illustrations, including the
// vit-käpp and tilläggstavla images on 162 and the worked "Testa dina
// kunskaper" example on 165-166. PDF 164 is blank and PDF 167 is the next
// unit's title page ("Barn" / book-children), no content.
export const CAPACITY_162_167_QUESTIONS = [
  {
    "id": "book-capacity-q1",
    "topic": "safety",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "risks",
    "bookUnitId": "book-capacity",
    "bookPages": [162],
    "coverageIds": ["book-capacity-t1"],
    "title": "Vad funktionsnedsättning innebär",
    "situation": "Hur definierar boken funktionsnedsättning?",
    "options": [
      "Det är när en person inte klarar det som förväntas av personen.",
      "Det gäller bara personer som använder rullstol.",
      "Det är ett tillfälligt tillstånd som alltid går över av sig själv."
    ],
    "correct": 0,
    "hint": "Definitionen är allmänt hållen, inte knuten till en specifik diagnos.",
    "explanation": "Funktionsnedsättning är när en person inte klarar det som förväntas av personen.",
    "takeaway": "Funktionsnedsättning definieras utifrån vad personen inte klarar, inte utifrån en viss diagnos."
  },
  {
    "id": "book-capacity-q2",
    "topic": "safety",
    "kind": "Säkerhetsprincip",
    "source": "book",
    "chapterId": "risks",
    "bookUnitId": "book-capacity",
    "bookPages": [162],
    "coverageIds": ["book-capacity-t2"],
    "title": "Synliga och dolda funktionsnedsättningar",
    "situation": "En trafikant verkar ta extra tid på sig, men du kan inte se någon tydlig anledning. Vad bör du tänka på?",
    "options": [
      "Vissa funktionsnedsättningar är dolda, till exempel hörselskada och epilepsi, så var tålmodig.",
      "Om du inte kan se en funktionsnedsättning finns den med säkerhet inte.",
      "Bara synliga funktionsnedsättningar som rullstol och vit käpp förtjänar extra tålamod."
    ],
    "correct": 0,
    "hint": "Boken skiljer mellan synlig funktionsnedsättning (rullstol, vit käpp) och dold (hörselskada, epilepsi).",
    "explanation": "Vissa funktionsnedsättningar kan vara svåra att se. Var därför tålmodig om någon verkar ta extra tid på sig. Synlig funktionsnedsättning är till exempel rullstol och vit käpp; dold funktionsnedsättning är till exempel hörselskada och epilepsi.",
    "takeaway": "Inte alla funktionsnedsättningar syns utanpå — tålamod gäller även det du inte kan se."
  },
  {
    "id": "book-capacity-q3",
    "topic": "safety",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "risks",
    "bookUnitId": "book-capacity",
    "bookPages": [162],
    "coverageIds": ["book-capacity-t3"],
    "title": "Signaler med vit käpp",
    "situation": "En synskadad person håller den vita käppen snett framåt. Vad betyder detta?",
    "options": [
      "Personen tänker börja gå.",
      "Personen väntar och lyssnar.",
      "Personen ber om hjälp att korsa vägen."
    ],
    "correct": 0,
    "hint": "Jämför med signalen där käppen hålls rakt ner mot marken.",
    "explanation": "Käppen rakt ner mot marken betyder att personen väntar och lyssnar. Käppen snett framåt betyder att personen tänker börja gå.",
    "takeaway": "Käppens vinkel visar om en synskadad väntar eller är på väg att gå."
  },
  {
    "id": "book-capacity-q4",
    "topic": "safety",
    "kind": "Säkerhetsråd",
    "source": "book",
    "chapterId": "risks",
    "bookUnitId": "book-capacity",
    "bookPages": [162],
    "coverageIds": ["book-capacity-t4"],
    "title": "Att släppa över en synskadad med ljud i åtanke",
    "situation": "Du stannar för att släppa över en synskadad person vid ett övergångsställe. Vad bör du tänka på gällande ljud, enligt boken?",
    "options": [
      "Var mycket försiktig med ljud — varva inte motorn och tuta bara i nödfall.",
      "Varva motorn kraftigt så att personen hör var bilen står.",
      "Tuta kort som en hövlig signal om att personen kan gå nu."
    ],
    "correct": 0,
    "hint": "Den synskadade använder ljudet från din bil för att orientera sig.",
    "explanation": "När du släpper över en synskadad vid ett övergångsställe: stanna med god marginal till övergångsstället, och var mycket försiktig med ljud — varva inte motorn och tuta bara i nödfall.",
    "takeaway": "Onödigt motorljud eller tutande kan förvirra en synskadad som orienterar sig efter ljud."
  },
  {
    "id": "book-capacity-q5",
    "topic": "safety",
    "kind": "Säkerhetsråd",
    "source": "book",
    "chapterId": "risks",
    "bookUnitId": "book-capacity",
    "bookPages": [162],
    "coverageIds": ["book-capacity-t5"],
    "title": "Att inte köra vidare för tidigt",
    "situation": "Den synskadade personen har precis lämnat ditt körfält men är inte helt över vägen än. Varför bör du vänta med att köra vidare?",
    "options": [
      "För att inte förvirra den synskadade med ljudet från din accelererande bil innan personen är helt över vägen.",
      "Det finns ingen anledning att vänta, du kan köra så fort ditt eget körfält är fritt.",
      "Du måste bara vänta om personen har ledarhund."
    ],
    "correct": 0,
    "hint": "Tänk på att personen fortfarande orienterar sig efter ljud från trafiken.",
    "explanation": "Kör inte vidare så fort den synskadade är borta från ditt körfält, utan vänta tills personen är helt över vägen. Detta för att inte förvirra den synskadade med ljudet från din accelererande bil.",
    "takeaway": "Vänta tills den synskadade är helt över vägen innan du accelererar vidare."
  },
  {
    "id": "book-capacity-q6",
    "topic": "safety",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "risks",
    "bookUnitId": "book-capacity",
    "bookPages": [163],
    "coverageIds": ["book-capacity-t6"],
    "title": "Ledarhundens begränsningar",
    "situation": "En synskadad person har en ledarhund med vit sele. Kan du lita på att hunden alltid bedömer trafikläget korrekt?",
    "options": [
      "Nej, hunden hjälper till att undvika hinder men kan inte bedöma trafikläget på samma sätt som en människa.",
      "Ja, en ledarhund bedömer trafikläget minst lika bra som en vuxen människa.",
      "Ja, men bara i tättbebyggt område."
    ],
    "correct": 0,
    "hint": "Hundens uppgift är att hjälpa till att navigera, inte att fatta trafikbeslut.",
    "explanation": "Ledarhunden har vit sele och hjälper den synskadade att undvika hinder, men kan inte bedöma trafikläget på samma sätt som en människa.",
    "takeaway": "En ledarhund hjälper till att undvika hinder, men ersätter inte mänsklig trafikbedömning."
  },
  {
    "id": "book-capacity-q7",
    "topic": "safety",
    "kind": "Säkerhetsråd",
    "source": "book",
    "chapterId": "risks",
    "bookUnitId": "book-capacity",
    "bookPages": [163],
    "coverageIds": ["book-capacity-t7"],
    "title": "Att inte kontakta en ledarhund",
    "situation": "Du möter en synskadad person med ledarhund och vill klappa hunden. Är det okej?",
    "options": [
      "Nej, en ledarhund ska aldrig störas eller kontaktas.",
      "Ja, så länge du frågar ägaren först.",
      "Ja, men bara om hunden inte bär sin sele just då."
    ],
    "correct": 0,
    "hint": "Hunden är i tjänst och behöver hela sin uppmärksamhet.",
    "explanation": "En ledarhund ska aldrig störas eller kontaktas.",
    "takeaway": "Ledarhundar arbetar — lämna dem helt ostörda."
  },
  {
    "id": "book-capacity-q8",
    "topic": "safety",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "risks",
    "bookUnitId": "book-capacity",
    "bookPages": [162, 165, 166],
    "coverageIds": ["book-capacity-t8"],
    "title": "Tilläggstavlan för nedsatt syn",
    "situation": "Du ser tilläggstavlan för nedsatt syn (T9), med gul bottenfärg och fem punkter, tillsammans med skylten för övergångsställe. Vad anger denna kombination?",
    "options": [
      "Ett övergångsställe där personer med nedsatt syn är vanligt förekommande.",
      "Ett övergångsställe som nyligen varit med om en olycka.",
      "Ett bevakat övergångsställe med trafiksignaler."
    ],
    "correct": 0,
    "hint": "Tavlan har alltid gul bottenfärg, enligt Vägmärkesförordningen.",
    "explanation": "Tavlan (T9) anger att personer med nedsatt syn är vanligt förekommande. Tavlan har alltid gul bottenfärg (Vägmärkesförordningen).",
    "takeaway": "T9 med gul bottenfärg vid ett övergångsställe varnar om att synskadade ofta korsar där."
  },
  {
    "id": "book-capacity-q9",
    "topic": "safety",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "risks",
    "bookUnitId": "book-capacity",
    "bookPages": [162],
    "coverageIds": ["book-capacity-t9"],
    "title": "Tilläggstavlan för nedsatt hörsel",
    "situation": "Vad anger tilläggstavlan för nedsatt hörsel (T10)?",
    "options": [
      "Att personer med nedsatt hörsel är vanligt förekommande på platsen.",
      "Att platsen saknar ljudsignaler vid trafikljus.",
      "Att enbart ledarhundar är tillåtna att passera platsen."
    ],
    "correct": 0,
    "hint": "Jämför med tilläggstavlan för nedsatt syn, fast för ett annat sinne.",
    "explanation": "Tilläggstavlan för nedsatt hörsel (T10) anger att personer med nedsatt hörsel är vanligt förekommande.",
    "takeaway": "T10 varnar om att personer med nedsatt hörsel ofta finns på platsen, precis som T9 gör för nedsatt syn."
  },
  {
    "id": "book-capacity-q10",
    "topic": "safety",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "risks",
    "bookUnitId": "book-capacity",
    "bookPages": [163],
    "coverageIds": ["book-capacity-t10"],
    "title": "Förare 65–74 år",
    "situation": "Hur kör förare mellan 65 och 74 år, jämfört med 18-åringar som precis tagit körkort, enligt boken?",
    "options": [
      "Denna grupp har i regel stor grad av mognad och trafikvana, vilket gör att de kör säkrare än nytagna 18-åriga förare.",
      "De kör alltid farligare än nya 18-åriga förare, eftersom reaktionstiden redan börjat försämras.",
      "Det finns ingen skillnad i olycksrisk mellan denna grupp och nya 18-åriga förare."
    ],
    "correct": 0,
    "hint": "Mognad och vana vägs mot eventuella åldersrelaterade försämringar.",
    "explanation": "Förare mellan 65 och 74 år har i regel stor grad av mognad och trafikvana, vilket gör att de kör säkrare än 18-åringar som precis tagit körkort.",
    "takeaway": "Erfarenhet och mognad hos 65–74-åringar väger upp eventuella åldersrelaterade försämringar."
  },
  {
    "id": "book-capacity-q11",
    "topic": "safety",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "risks",
    "bookUnitId": "book-capacity",
    "bookPages": [163],
    "coverageIds": ["book-capacity-t11"],
    "title": "Förare över 75 år",
    "situation": "Hur stor är olycksrisken för förare över 75 år, jämfört med genomsnittsföraren, enligt boken?",
    "options": [
      "5–6 gånger högre, vilket motsvarar samma olycksrisk som 18–19-åringar.",
      "Ungefär samma som genomsnittsföraren.",
      "Hälften så stor som genomsnittsföraren, tack vare lägre hastigheter."
    ],
    "correct": 0,
    "hint": "Risknivån jämförs med en annan grupp som nämns i samma kapitel om unga förare.",
    "explanation": "Över 75 år är sinnena oftast nedsatta och hjärnan börjar fungera långsammare, vilket gör att de har 5–6 gånger högre olycksrisk än genomsnittsföraren — samma olycksrisk som 18–19-åringar.",
    "takeaway": "Förare över 75 och nya tonårsförare delar en förhöjd olycksrisk, om än av olika skäl."
  },
  {
    "id": "book-capacity-q12",
    "topic": "safety",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "risks",
    "bookUnitId": "book-capacity",
    "bookPages": [163],
    "coverageIds": ["book-capacity-t12"],
    "title": "Vad som försämras med åldern",
    "situation": "Vilket av följande räknar boken INTE som en försämring som kan följa med åldern?",
    "options": [
      "Körerfarenheten.",
      "Synen, hörseln och balansen.",
      "Reaktionstiden samt korrekt och snabb tolkning av intryck."
    ],
    "correct": 0,
    "hint": "Körerfarenheten är snarare det som ökar med åldern.",
    "explanation": "Försämringar med åldern kan gälla synen, hörseln, balansen, reaktionstiden samt korrekt och snabb tolkning av intryck.",
    "takeaway": "Åldern kan försämra flera sinnen och förmågor, men ökar samtidigt körerfarenheten."
  }
];

export const CAPACITY_162_167_COVERAGE = [
  { id: "book-capacity-t1", bookUnitId: "book-capacity", pages: [162], label: "Vad funktionsnedsättning innebär", questionIds: ["book-capacity-q1"], visualStatus: "not-needed" },
  { id: "book-capacity-t2", bookUnitId: "book-capacity", pages: [162], label: "Synlig och dold funktionsnedsättning", questionIds: ["book-capacity-q2"], visualStatus: "not-needed" },
  { id: "book-capacity-t3", bookUnitId: "book-capacity", pages: [162], label: "Vit käpp-signaler", questionIds: ["book-capacity-q3"], visualStatus: "not-needed" },
  { id: "book-capacity-t4", bookUnitId: "book-capacity", pages: [162], label: "Ljudförsiktighet när en synskadad släpps över", questionIds: ["book-capacity-q4"], visualStatus: "not-needed" },
  { id: "book-capacity-t5", bookUnitId: "book-capacity", pages: [162], label: "Vänta tills den synskadade är helt över vägen", questionIds: ["book-capacity-q5"], visualStatus: "not-needed" },
  { id: "book-capacity-t6", bookUnitId: "book-capacity", pages: [163], label: "Ledarhundens begränsningar", questionIds: ["book-capacity-q6"], visualStatus: "not-needed" },
  { id: "book-capacity-t7", bookUnitId: "book-capacity", pages: [163], label: "Ledarhundar ska inte störas", questionIds: ["book-capacity-q7"], visualStatus: "not-needed" },
  { id: "book-capacity-t8", bookUnitId: "book-capacity", pages: [162, 165, 166], label: "Tilläggstavlan T9 för nedsatt syn", questionIds: ["book-capacity-q8"], visualStatus: "reviewed" },
  { id: "book-capacity-t9", bookUnitId: "book-capacity", pages: [162], label: "Tilläggstavlan T10 för nedsatt hörsel", questionIds: ["book-capacity-q9"], visualStatus: "reviewed" },
  { id: "book-capacity-t10", bookUnitId: "book-capacity", pages: [163], label: "Förare 65–74 år kör säkrare än nya förare", questionIds: ["book-capacity-q10"], visualStatus: "not-needed" },
  { id: "book-capacity-t11", bookUnitId: "book-capacity", pages: [163], label: "Förare över 75 år har förhöjd olycksrisk", questionIds: ["book-capacity-q11"], visualStatus: "not-needed" },
  { id: "book-capacity-t12", bookUnitId: "book-capacity", pages: [163], label: "Vad som försämras med åldern", questionIds: ["book-capacity-q12"], visualStatus: "not-needed" }
];

// PDF 356-361 (fifth and final subchunk of book-signs, PDF 324-361).
// Reviewed source text and all illustrations. Covers tecken av polis
// med flera (P1-P11), the book's own "Testa dina kunskaper" worked
// example on PDF 359-360 (diagonal vs. perpendicular arrow heads on
// påbudsmärken D1/D2, a genuinely new concept not covered by the
// earlier D6/D7/D12 questions in signs-332-339.js), and PDF 358/361
// which are blank/title pages with no content (358 blank, 361 is the
// title page for the next unit, book-cases). Closes the book-signs unit.
export const SIGNS_356_361_QUESTIONS = [
  {
    "id": "book-signs-q77",
    "topic": "rules",
    "kind": "Trafikregel",
    "source": "book",
    "chapterId": "signs",
    "bookUnitId": "book-signs",
    "bookPages": [356],
    "coverageIds": ["book-signs-t77"],
    "title": "Polisens olika stoppsignaler",
    "situation": "En polis kan visa stopp på flera olika sätt (P1, P2, P3), bland annat med en utsträckt arm, en upplyft hand eller en tjänstestav med rött reflexljus i en cirkelrörelse. Vad betyder dessa olika varianter?",
    "options": [
      "De betyder alla samma sak, stopp, men olika tekniker och hjälpmedel (till exempel en lysande tjänstestav) används beroende på till exempel ljusförhållanden och synlighet.",
      "Varje variant innebär en annan grad av stopp, där vissa är mer akuta än andra.",
      "Bara tecknet med den lysande tjänstestaven är juridiskt bindande, de andra är frivilliga."
    ],
    "correct": 0,
    "hint": "Tänk på att en polis kan behöva vara extra synlig i mörker, och då är en lysande stav ett bra hjälpmedel.",
    "explanation": "P1, P2 och P3 betyder alla stopp, men visas med olika tekniker: utsträckt arm, upplyft hand eller en tjänstestav med rött reflexljus som förs i en cirkelrörelse, vilket gör polisen extra synlig till exempel i mörker.",
    "takeaway": "Flera olika kroppsspråk och hjälpmedel kan användas för att visa stopp, men budskapet är detsamma."
  },
  {
    "id": "book-signs-q78",
    "topic": "rules",
    "kind": "Trafikregel",
    "source": "book",
    "chapterId": "signs",
    "bookUnitId": "book-signs",
    "bookPages": [356],
    "coverageIds": ["book-signs-t78"],
    "title": "Kör fram kontra minska hastigheten",
    "situation": "Vad är skillnaden mellan polisens tecken P4 (kör fram) och P5 (minska hastigheten)?",
    "options": [
      "P4 ges genom att polisen för armen eller tjänstestaven i den riktning du ska köra, medan P5 ges genom en nedåtriktad, dämpande rörelse som uppmanar dig att sakta ner utan att nödvändigtvis stanna helt.",
      "De två tecknen betyder exakt samma sak.",
      "P5 innebär att du ska stanna helt, precis som P1-P3."
    ],
    "correct": 0,
    "hint": "Den ena rörelsen pekar framåt i en riktning, den andra trycker nedåt som för att dämpa farten.",
    "explanation": "P4 (kör fram) visas genom en rörelse som pekar i den riktning du ska köra. P5 (minska hastigheten) visas i stället genom en nedåtriktad, dämpande rörelse som uppmanar dig att sänka farten, utan att det nödvändigtvis innebär ett fullständigt stopp.",
    "takeaway": "Kör fram pekar ut en riktning att följa, minska hastigheten ber dig sakta ner utan att alltid kräva stopp."
  },
  {
    "id": "book-signs-q79",
    "topic": "safety",
    "kind": "Säkerhetsråd",
    "source": "book",
    "chapterId": "signs",
    "bookUnitId": "book-signs",
    "bookPages": [357],
    "coverageIds": ["book-signs-t79"],
    "title": "Kontroll och förberedande upplysning om kontroll",
    "situation": "Vad innebär skyltarna P6 (kontroll) och P7 (förberedande upplysning om kontroll, med avstånd som 1000 m)?",
    "options": [
      "De visar att det finns eller snart kommer en polisiär kontrollplats längre fram, till exempel för nykterhetskontroll eller fordonskontroll, så att du kan förbereda dig på att eventuellt bli anvisad att stanna.",
      "De innebär att vägen är helt avstängd för genomfart.",
      "De gäller bara tunga lastbilar, aldrig personbilar."
    ],
    "correct": 0,
    "hint": "P7 fungerar som en vanlig avståndstavla, men för en kommande kontrollplats i stället för en fara.",
    "explanation": "P6 (kontroll) visar att det finns en polisiär kontrollplats, till exempel för nykterhets- eller fordonskontroll. P7 (förberedande upplysning om kontroll) förvarnar om detta på ett visst avstånd, så att du hinner förbereda dig innan du når fram.",
    "takeaway": "Kontrollskyltarna förbereder dig på en kommande polisiär kontroll, inte en vägavstängning."
  },
  {
    "id": "book-signs-q80",
    "topic": "safety",
    "kind": "Säkerhetsprincip",
    "source": "book",
    "chapterId": "signs",
    "bookUnitId": "book-signs",
    "bookPages": [357],
    "coverageIds": ["book-signs-t80"],
    "title": "Följ efter kontra kör in till vägkanten",
    "situation": "Vad är skillnaden mellan polisens tecken P10 (följ efter och stanna bakom polisfordonet när detta stannar) och P11 (kör in till vägkanten och stanna framför polisfordonet)?",
    "options": [
      "Vid P10 ska du följa efter polisbilen och stanna bakom den när den själv stannar, medan P11 i stället innebär att du ska köra in till vägkanten på egen hand och stanna framför polisbilen.",
      "De två tecknen innebär exakt samma stoppmanöver.",
      "P11 innebär att du ska köra förbi polisbilen och fortsätta vidare."
    ],
    "correct": 0,
    "hint": "Tänk på var ditt fordon ska hamna i förhållande till polisbilen i respektive fall: bakom den, eller framför den.",
    "explanation": "P10 innebär att du ska följa efter polisfordonet och stanna bakom det när det självt stannar, till exempel för att bli eskorterad till en lämpligare plats. P11 innebär i stället att du ska köra in till vägkanten på egen hand och stanna framför polisfordonet.",
    "takeaway": "Lägg märke till om tecknet anger att du ska stanna bakom eller framför polisfordonet, det avgör vad du ska göra."
  },
  {
    "id": "book-signs-q81",
    "topic": "rules",
    "kind": "Bedömning i bokens exempel",
    "source": "book",
    "chapterId": "signs",
    "bookUnitId": "book-signs",
    "bookPages": [359, 360],
    "coverageIds": ["book-signs-t81"],
    "title": "Diagonala kontra vinkelräta pilspetsar på påbudsmärken",
    "situation": "Boken visar fyra blå runda märken med pilar och ställer frågan vilka som anger påbjuden körriktning. Hur skiljer du på ett märke som anger påbjuden körbana och ett som anger påbjuden körriktning, utifrån pilens form?",
    "options": [
      "Diagonala (vridna/sneda) pilspetsar anger påbjuden körbana, eftersom de pekar på själva körbanan du ska använda, medan vinkelräta (raka) pilspetsar anger påbjuden körriktning, eftersom de pekar i en bestämd riktning du ska följa.",
      "Pilens färg, inte dess vinkel, avgör om märket gäller körbana eller körriktning.",
      "Alla pilmärken med blå botten anger alltid körriktning, aldrig körbana."
    ],
    "correct": 0,
    "hint": "Jämför en pil som pekar snett ner mot en körbana med en pil som pekar rakt fram eller åt sidan i en bestämd riktning.",
    "explanation": "Enligt bokens minnesregel anger diagonala (vridna/sneda) pilspetsar påbjuden körbana, eftersom de pekar på vilken körbana du ska använda. Vinkelräta (raka) pilspetsar anger i stället påbjuden körriktning, eftersom de pekar i en bestämd riktning du måste följa.",
    "takeaway": "Sned pilspets = påbjuden körbana (vilken bana), rak pilspets = påbjuden körriktning (vilken riktning)."
  }
];

export const SIGNS_356_361_COVERAGE = [
  { id: "book-signs-t77", bookUnitId: "book-signs", pages: [356], label: "P1/P2/P3: polisens olika stoppsignaler", questionIds: ["book-signs-q77"], visualStatus: "reviewed" },
  { id: "book-signs-t78", bookUnitId: "book-signs", pages: [356], label: "P4/P5: kör fram kontra minska hastigheten", questionIds: ["book-signs-q78"], visualStatus: "reviewed" },
  { id: "book-signs-t79", bookUnitId: "book-signs", pages: [357], label: "P6/P7: kontrollplats och förvarning", questionIds: ["book-signs-q79"], visualStatus: "reviewed" },
  { id: "book-signs-t80", bookUnitId: "book-signs", pages: [357], label: "P10/P11: följ efter kontra kör in till vägkanten", questionIds: ["book-signs-q80"], visualStatus: "reviewed" },
  { id: "book-signs-t81", bookUnitId: "book-signs", pages: [359, 360], label: "Diagonal kontra vinkelrät pilspets: körbana kontra körriktning", questionIds: ["book-signs-q81"], visualStatus: "reviewed" }
];

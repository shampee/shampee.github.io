// PDF 298-299, 301-302. Reviewed source text, including the worked "Testa
// dina kunskaper" example on 301-302, which reuses the
// trafikförsäkring-täcker-inte-egna-fordonet concept from page 298 (see
// book-insurance-t4, extended here). PDF 300 is blank and PDF 303 is the
// next unit's title page ("Miljö" / book-environment), no content.
export const INSURANCE_298_303_QUESTIONS = [
  {
    "id": "book-insurance-q1",
    "topic": "rules",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "responsibility",
    "bookUnitId": "book-insurance",
    "bookPages": [298],
    "coverageIds": ["book-insurance-t1"],
    "title": "Bilförsäkringens tre nivåer",
    "situation": "I vilka tre nivåer kan bilförsäkringar delas upp, och är innehållet i dem exakt likadant mellan olika försäkringsbolag?",
    "options": [
      "Trafikförsäkring, halvförsäkring och helförsäkring; vad som ingår i de olika nivåerna skiljer sig mellan olika försäkringsbolag.",
      "Grundförsäkring, utökad försäkring och premiumförsäkring; innehållet är identiskt hos alla bolag.",
      "Personförsäkring, fordonsförsäkring och miljöförsäkring; innehållet regleras exakt av lag utan variation."
    ],
    "correct": 0,
    "hint": "Namnen beskriver en stigande skyddsnivå, men detaljerna kan skilja sig åt.",
    "explanation": "Bilförsäkringar kan delas upp i 3 nivåer: trafikförsäkring, halvförsäkring och helförsäkring. Vad som ingår i de olika bilförsäkringarna skiljer sig mellan olika försäkringsbolag.",
    "takeaway": "De tre nivåerna är standardbegrepp, men exakt innehåll varierar mellan försäkringsbolag."
  },
  {
    "id": "book-insurance-q2",
    "topic": "rules",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "responsibility",
    "bookUnitId": "book-insurance",
    "bookPages": [298],
    "coverageIds": ["book-insurance-t2"],
    "title": "Hemförsäkringens roll",
    "situation": "Vad kan en hemförsäkring ge dig ersättning för, utöver bilförsäkringen?",
    "options": [
      "Om du skadats i en olycka, förlorat bagage eller liknande.",
      "Enbart skador på själva bilens kaross.",
      "Enbart kostnader kopplade till fordonsskatt."
    ],
    "correct": 0,
    "hint": "Hemförsäkringen är en separat försäkring, inte en del av bilförsäkringen.",
    "explanation": "En hemförsäkring kan ge dig ersättning om du skadats i en olycka, förlorat bagage eller liknande.",
    "takeaway": "Hemförsäkringen kan komplettera bilförsäkringen med ersättning för personskada och förlorat bagage."
  },
  {
    "id": "book-insurance-q3",
    "topic": "safety",
    "kind": "Säkerhetsråd",
    "source": "book",
    "chapterId": "responsibility",
    "bookUnitId": "book-insurance",
    "bookPages": [298],
    "coverageIds": ["book-insurance-t3"],
    "title": "Skadeanmälningsblankett i bilen",
    "situation": "Vad är bra att ha med i bilen vid en eventuell olycka, och varifrån beställer du den?",
    "options": [
      "En skadeanmälningsblankett, beställd från ditt försäkringsbolag.",
      "En kopia av registreringsbevisets Del 2, beställd från Transportstyrelsen.",
      "Ett intyg om senaste besiktning, beställt från ett besiktningsföretag."
    ],
    "correct": 0,
    "hint": "Blanketten används för att dokumentera en olycka på plats, som i boken om trafikolyckor.",
    "explanation": "En skadeanmälningsblankett är bra att ha med i bilen. Beställ en från ditt försäkringsbolag.",
    "takeaway": "En skadeanmälningsblankett i bilen underlättar dokumentation direkt vid en olycka."
  },
  {
    "id": "book-insurance-q4",
    "topic": "rules",
    "kind": "Trafikregel",
    "source": "book",
    "chapterId": "responsibility",
    "bookUnitId": "book-insurance",
    "bookPages": [298, 301, 302],
    "coverageIds": ["book-insurance-t4"],
    "title": "Vad trafikförsäkringen inte täcker",
    "situation": "Vilken typ av skada täcker inte trafikförsäkringen?",
    "options": [
      "Skada på det egna fordonet.",
      "Skada på någon annans fordon.",
      "Personskada."
    ],
    "correct": 0,
    "hint": "Trafikförsäkringen skyddar andra, inte din egen bil.",
    "explanation": "Transportstyrelsen: ”Trafikförsäkring […] Observera att du inte får ersättning för […] skador på det egna fordonet”. Trafikförsäkringen täcker personskador och skador på andras fordon eller egendom. Skadas din egen bil får du alltså ingen ersättning.",
    "takeaway": "Trafikförsäkringen ersätter aldrig skador på ditt eget fordon, bara på andra."
  },
  {
    "id": "book-insurance-q5",
    "topic": "rules",
    "kind": "Trafikregel",
    "source": "book",
    "chapterId": "responsibility",
    "bookUnitId": "book-insurance",
    "bookPages": [298],
    "coverageIds": ["book-insurance-t5"],
    "title": "Trafikförsäkringens obligatoriska karaktär",
    "situation": "Är trafikförsäkring frivillig eller obligatorisk?",
    "options": [
      "Obligatorisk — alla motordrivna fordon måste vara trafikförsäkrade.",
      "Frivillig, men rekommenderad av Transportstyrelsen.",
      "Obligatorisk enbart för fordon som används yrkesmässigt."
    ],
    "correct": 0,
    "hint": "Det gäller alla motordrivna fordon, inte bara personbilar som används dagligen.",
    "explanation": "Trafikförsäkring är obligatorisk, det vill säga att alla motordrivna fordon måste vara trafikförsäkrade.",
    "takeaway": "Trafikförsäkring är ett obligatoriskt krav för alla motordrivna fordon."
  },
  {
    "id": "book-insurance-q6",
    "topic": "rules",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "responsibility",
    "bookUnitId": "book-insurance",
    "bookPages": [298],
    "coverageIds": ["book-insurance-t6"],
    "title": "Bonus vid skadefria år",
    "situation": "Vad kan du få om du varit skadefri i ett antal år?",
    "options": [
      "Billigare trafikförsäkringspremie genom så kallad bonus.",
      "Automatisk uppgradering till helförsäkring utan extra kostnad.",
      "Befrielse från kravet att vara trafikförsäkrad överhuvudtaget."
    ],
    "correct": 0,
    "hint": "Begreppet är detsamma som ofta används i vardagligt tal om bilförsäkring.",
    "explanation": "Om du har varit skadefri i ett antal år kan du få billigare trafikförsäkringspremie genom så kallad bonus.",
    "takeaway": "Skadefria år belönas med lägre premie genom bonussystemet."
  },
  {
    "id": "book-insurance-q7",
    "topic": "rules",
    "kind": "Trafikregel",
    "source": "book",
    "chapterId": "responsibility",
    "bookUnitId": "book-insurance",
    "bookPages": [298],
    "coverageIds": ["book-insurance-t7"],
    "title": "Regressrätt vid grov vårdslöshet eller rattfylleri",
    "situation": "Du straffas för grov vårdslöshet i trafik eller rattfylleri efter en olycka där försäkringen betalat ut ersättning. Kan detta påverka dig ekonomiskt i efterhand?",
    "options": [
      "Ja, försäkringsbolaget kan kräva tillbaka pengar från dig, så kallad regressrätt.",
      "Nej, en utbetald ersättning kan aldrig krävas tillbaka av försäkringsbolaget.",
      "Ja, men bara om olyckan inträffade utomlands."
    ],
    "correct": 0,
    "hint": "Begreppet beskriver bolagets rätt att vända sig mot den som orsakat skadan.",
    "explanation": "Om du straffas för grov vårdslöshet i trafik eller rattfylleri kan försäkringsbolaget kräva tillbaka pengar från dig (regressrätt).",
    "takeaway": "Regressrätt innebär att försäkringsbolaget kan återkräva utbetalad ersättning vid grov vårdslöshet eller rattfylleri."
  },
  {
    "id": "book-insurance-q8",
    "topic": "rules",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "responsibility",
    "bookUnitId": "book-insurance",
    "bookPages": [298],
    "coverageIds": ["book-insurance-t8"],
    "title": "Vad halvförsäkringen lägger till",
    "situation": "Halvförsäkring (delkaskoförsäkring) innehåller allt som ingår i trafikförsäkringen. Vilket av följande läggs INTE till i halvförsäkringen?",
    "options": [
      "Skador på den egna bilen vid trafikolycka.",
      "Stöld och brand.",
      "Glas (till exempel stenskott), maskin och rättsskydd."
    ],
    "correct": 0,
    "hint": "Skador på den egna bilen vid trafikolycka hör i stället till helförsäkringen.",
    "explanation": "Halvförsäkring (delkaskoförsäkring) innehåller allt som ingår i trafikförsäkringen och även: stöld, brand, glas, maskin och rättsskydd.",
    "takeaway": "Halvförsäkringen täcker stöld, brand, glas, maskin och rättsskydd, men inte egna trafikolycksskador."
  },
  {
    "id": "book-insurance-q9",
    "topic": "rules",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "responsibility",
    "bookUnitId": "book-insurance",
    "bookPages": [299],
    "coverageIds": ["book-insurance-t9"],
    "title": "Vad helförsäkringen lägger till",
    "situation": "Helförsäkring (vagnskadeförsäkring) innehåller allt i trafik- och halvförsäkringen. Vad läggs dessutom till?",
    "options": [
      "Skador på den egna bilen vid trafikolycka, repor och bucklor, skadegörelse, samt bärgning.",
      "Enbart stöld och brand, som redan ingår i halvförsäkringen.",
      "Enbart glasskador, som redan ingår i halvförsäkringen."
    ],
    "correct": 0,
    "hint": "Det här är den nivå som slutligen täcker skador på din egen bil vid en trafikolycka.",
    "explanation": "Helförsäkring (vagnskadeförsäkring) innehåller allt som ingår i trafikförsäkringen och halvförsäkringen samt även: skador på den egna bilen vid trafikolycka, repor och bucklor, skadegörelse, och bärgning.",
    "takeaway": "Bara helförsäkringen täcker skador på din egen bil vid en trafikolycka, plus repor, skadegörelse och bärgning."
  },
  {
    "id": "book-insurance-q10",
    "topic": "rules",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "responsibility",
    "bookUnitId": "book-insurance",
    "bookPages": [298],
    "coverageIds": ["book-insurance-t10"],
    "title": "Halvförsäkringens andra namn",
    "situation": "Vad kallas halvförsäkring även?",
    "options": [
      "Delkaskoförsäkring.",
      "Vagnskadeförsäkring.",
      "Grundförsäkring."
    ],
    "correct": 0,
    "hint": "Namnet syftar på att den täcker en del av de risker som kan drabba fordonet.",
    "explanation": "Halvförsäkring (delkaskoförsäkring) innehåller allt som ingår i trafikförsäkringen och även stöld, brand, glas, maskin och rättsskydd.",
    "takeaway": "Halvförsäkring kallas även delkaskoförsäkring."
  },
  {
    "id": "book-insurance-q11",
    "topic": "rules",
    "kind": "Begrepp",
    "source": "book",
    "chapterId": "responsibility",
    "bookUnitId": "book-insurance",
    "bookPages": [299],
    "coverageIds": ["book-insurance-t11"],
    "title": "Helförsäkringens andra namn",
    "situation": "Vad kallas helförsäkring även?",
    "options": [
      "Vagnskadeförsäkring.",
      "Delkaskoförsäkring.",
      "Helkaskoförsäkring."
    ],
    "correct": 0,
    "hint": "Namnet syftar på skador på själva vagnen/bilen.",
    "explanation": "Helförsäkring (vagnskadeförsäkring) innehåller allt som ingår i trafikförsäkringen och halvförsäkringen samt även skador på den egna bilen, repor och bucklor, skadegörelse och bärgning.",
    "takeaway": "Helförsäkring kallas även vagnskadeförsäkring."
  }
];

export const INSURANCE_298_303_COVERAGE = [
  { id: "book-insurance-t1", bookUnitId: "book-insurance", pages: [298], label: "Bilförsäkringens tre nivåer", questionIds: ["book-insurance-q1"], visualStatus: "not-needed" },
  { id: "book-insurance-t2", bookUnitId: "book-insurance", pages: [298], label: "Hemförsäkringens roll vid olycka/förlorat bagage", questionIds: ["book-insurance-q2"], visualStatus: "not-needed" },
  { id: "book-insurance-t3", bookUnitId: "book-insurance", pages: [298], label: "Skadeanmälningsblankett i bilen", questionIds: ["book-insurance-q3"], visualStatus: "not-needed" },
  { id: "book-insurance-t4", bookUnitId: "book-insurance", pages: [298, 301, 302], label: "Trafikförsäkringen täcker inte egna fordonet", questionIds: ["book-insurance-q4"], visualStatus: "not-needed" },
  { id: "book-insurance-t5", bookUnitId: "book-insurance", pages: [298], label: "Trafikförsäkring obligatorisk", questionIds: ["book-insurance-q5"], visualStatus: "not-needed" },
  { id: "book-insurance-t6", bookUnitId: "book-insurance", pages: [298], label: "Bonus vid skadefria år", questionIds: ["book-insurance-q6"], visualStatus: "not-needed" },
  { id: "book-insurance-t7", bookUnitId: "book-insurance", pages: [298], label: "Regressrätt vid grov vårdslöshet/rattfylleri", questionIds: ["book-insurance-q7"], visualStatus: "not-needed" },
  { id: "book-insurance-t8", bookUnitId: "book-insurance", pages: [298], label: "Vad halvförsäkringen lägger till", questionIds: ["book-insurance-q8"], visualStatus: "not-needed" },
  { id: "book-insurance-t9", bookUnitId: "book-insurance", pages: [299], label: "Vad helförsäkringen lägger till", questionIds: ["book-insurance-q9"], visualStatus: "not-needed" },
  { id: "book-insurance-t10", bookUnitId: "book-insurance", pages: [298], label: "Halvförsäkring = delkaskoförsäkring", questionIds: ["book-insurance-q10"], visualStatus: "not-needed" },
  { id: "book-insurance-t11", bookUnitId: "book-insurance", pages: [299], label: "Helförsäkring = vagnskadeförsäkring", questionIds: ["book-insurance-q11"], visualStatus: "not-needed" }
];

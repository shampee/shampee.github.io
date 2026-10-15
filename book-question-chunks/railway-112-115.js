// PDF 112-114. Original questions authored directly from reviewed source
// text and illustrations (no recovered draft archive exists for this unit).
// PDF 115 is the next unit's title page ("Speciella gator" /
// book-special-streets), no content.
export const RAILWAY_112_115_QUESTIONS = [
  {
    "id": "book-railway-q21",
    "topic": "safety",
    "kind": "Säkerhetsråd",
    "source": "book",
    "chapterId": "roads",
    "bookUnitId": "book-railway",
    "bookPages": [
      112
    ],
    "coverageIds": [
      "book-railway-t21"
    ],
    "title": "Bommarna har fällts upp",
    "situation": "Du närmar dig en järnvägskorsning. Bommarna har redan fällts upp, men lamporna blinkar fortfarande rött. Får du köra?",
    "options": [
      "Ja, upplyfta bommar betyder alltid att det är säkert att köra.",
      "Nej, du får inte köra innan lamporna slutar blinka rött, oavsett om bommarna är uppe.",
      "Ja, men bara om du kör i låg hastighet."
    ],
    "correct": 1,
    "hint": "Bommarnas läge och lampornas blinkande kan tillfälligt gå isär.",
    "explanation": "Bommarna hinner ofta fällas upp innan lamporna slutar blinka. Du får dock inte köra innan lamporna slutar blinka rött.",
    "takeaway": "Lita på lamporna, inte bommarnas läge, för att avgöra om det är säkert att köra."
  },
  {
    "id": "book-railway-q22",
    "topic": "rules",
    "kind": "Trafikregel",
    "source": "book",
    "chapterId": "roads",
    "bookUnitId": "book-railway",
    "bookPages": [
      112
    ],
    "coverageIds": [
      "book-railway-t22"
    ],
    "title": "Helbom och halvbom",
    "situation": "Du jämför två typer av järnvägsbommar vid en korsning med körfält i båda riktningarna. Vad skiljer en helbom från en halvbom?",
    "options": [
      "Helbommen blockerar hela körbanans bredd i respektive riktning; halvbommen blockerar bara en del av den.",
      "Halvbommen blockerar hela körbanans bredd; helbommen blockerar bara en del av den.",
      "De två typerna fungerar identiskt, bara färgen på bommen skiljer."
    ],
    "correct": 0,
    "hint": "Namnen beskriver hur stor del av körbanan som täcks.",
    "explanation": "En helbom blockerar hela körbanans bredd i respektive riktning, medan en halvbom bara blockerar en del av den.",
    "takeaway": "Helbommen täcker hela körfältet i varje riktning; halvbommen täcker bara en del."
  },
  {
    "id": "book-railway-q23",
    "topic": "rules",
    "kind": "Trafikregel",
    "source": "book",
    "chapterId": "roads",
    "bookUnitId": "book-railway",
    "bookPages": [
      113,
      114
    ],
    "coverageIds": [
      "book-railway-t23"
    ],
    "title": "Avståndsmärket med tre markeringar",
    "situation": "Du ser ett gult avståndsmärke med tre diagonala röda markeringar inför en järnvägskorsning. Vad betyder antalet markeringar?",
    "options": [
      "Störst avstånd till plankorsningen.",
      "Minst avstånd till plankorsningen.",
      "Att det är tre spår att korsa."
    ],
    "correct": 0,
    "hint": "Antalet markeringar minskar i takt med att du närmar dig korsningen.",
    "explanation": "Märket med tre markeringar anger störst avstånd till plankorsningen; märkena med två och en markering anger kortare återstående avstånd.",
    "takeaway": "Fler markeringar på avståndsmärket betyder längre avstånd kvar till plankorsningen."
  },
  {
    "id": "book-railway-q24",
    "topic": "rules",
    "kind": "Trafikregel",
    "source": "book",
    "chapterId": "roads",
    "bookUnitId": "book-railway",
    "bookPages": [
      114
    ],
    "coverageIds": [
      "book-railway-t24"
    ],
    "title": "Markeringarna anger tredjedelar",
    "situation": "Du har passerat märket med tre markeringar och når nu märket med två markeringar. Hur mycket av det ursprungliga avståndet till plankorsningen anger detta märke?",
    "options": [
      "Att du passerat halva avståndet.",
      "Två tredjedelars avstånd kvar till plankorsningen.",
      "Att nästa märke är det sista innan spåret."
    ],
    "correct": 1,
    "hint": "Hela sträckan delas i tre lika stora delar, inte i halvor.",
    "explanation": "Märkena anger avståndet till en plankorsning i tredjedelar. Märket med två markeringar anger två tredjedels avstånd till plankorsningen, och märket med en markering anger den sista tredjedelen av avståndet.",
    "takeaway": "Avståndsmärkena mäter i tredjedelar: tre, två och en markering motsvarar tre, två och en tredjedel av sträckan."
  },
  {
    "id": "book-railway-q25",
    "topic": "rules",
    "kind": "Trafikregel",
    "source": "book",
    "chapterId": "roads",
    "bookUnitId": "book-railway",
    "bookPages": [
      114
    ],
    "coverageIds": [
      "book-railway-t25"
    ],
    "title": "Var sätts märket med tre markeringar upp?",
    "situation": "Utanför tättbebyggt område ser du avståndsmärket med tre markeringar. Under vilken typ av märke är det normalt uppsatt?",
    "options": [
      "Under ett av varningsmärkena för järnvägskorsning med bommar, utan bommar, eller korsning med spårväg (A35, A36 eller A37).",
      "Under ett hastighetsbegränsningsmärke.",
      "Det sätts aldrig upp tillsammans med något annat märke."
    ],
    "correct": 0,
    "hint": "Märket hör ihop med själva varningen om den kommande korsningen.",
    "explanation": "Märket med tre markeringar är, utom i tättbebyggt område, uppsatt under något av märkena A35 (varning för järnvägskorsning med bommar), A36 (varning för järnvägskorsning utan bommar) eller A37 (varning för korsning med spårväg).",
    "takeaway": "Trestrecksmärket sätts utanför tättbebyggt område upp under ett varningsmärke för den specifika korsningstypen (A35, A36 eller A37)."
  }
];

export const RAILWAY_112_115_COVERAGE = [
  {
    "id": "book-railway-t21",
    "bookUnitId": "book-railway",
    "pages": [
      112
    ],
    "label": "Uppfällda bommar innebär inte att det är säkert att köra",
    "questionIds": [
      "book-railway-q21"
    ],
    "visualStatus": "not-needed"
  },
  {
    "id": "book-railway-t22",
    "bookUnitId": "book-railway",
    "pages": [
      112
    ],
    "label": "Skillnaden mellan helbom och halvbom",
    "questionIds": [
      "book-railway-q22"
    ],
    "visualStatus": "reviewed"
  },
  {
    "id": "book-railway-t23",
    "bookUnitId": "book-railway",
    "pages": [
      113,
      114
    ],
    "label": "Tre markeringar betyder störst avstånd (A38)",
    "questionIds": [
      "book-railway-q23"
    ],
    "visualStatus": "reviewed"
  },
  {
    "id": "book-railway-t24",
    "bookUnitId": "book-railway",
    "pages": [
      114
    ],
    "label": "Avståndsmärkena mäter i tredjedelar",
    "questionIds": [
      "book-railway-q24"
    ],
    "visualStatus": "not-needed"
  },
  {
    "id": "book-railway-t25",
    "bookUnitId": "book-railway",
    "pages": [
      114
    ],
    "label": "Trestrecksmärket sätts under A35, A36 eller A37",
    "questionIds": [
      "book-railway-q25"
    ],
    "visualStatus": "not-needed"
  }
];

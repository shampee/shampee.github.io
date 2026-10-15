// PDF 95-96. Reviewed source text and illustrations. PDF 94 is blank and
// PDF 97 is the next unit's title page ("Omkörningar" / book-overtaking),
// no content.
export const MOTORWAY_94_97_QUESTIONS = [
  {
    "id": "book-motorway-q27",
    "topic": "rules",
    "kind": "Trafikregel",
    "source": "book",
    "chapterId": "roads",
    "bookUnitId": "book-motorway",
    "bookPages": [
      95,
      96
    ],
    "coverageIds": [
      "book-motorway-t27"
    ],
    "title": "Huvudled med mitträcke",
    "situation": "Du kör på en huvudled som just nu har ett mitträcke och en skyltad hastighet på 100 km/h. Vägen är varken skyltad som motorväg eller motortrafikled. Kan det förekomma korsande trafik i samma plan längre fram?",
    "options": [
      "Ja, eftersom vägen inte är en motorväg eller motortrafikled.",
      "Nej, ett mitträcke garanterar alltid att korsande trafik i samma plan saknas.",
      "Nej, en hastighetsgräns på 100 km/h innebär alltid att vägen är fri från korsningar."
    ],
    "correct": 0,
    "hint": "Det är vägtypens skyltning, inte mitträcket eller hastigheten, som avgör.",
    "explanation": "Det är endast motorvägar och motortrafikleder som garanterat är fria från korsande trafik i samma plan. Ett mitträcke eller en hög hastighetsgräns på en vanlig huvudled garanterar inte detta; det kan fortfarande komma korsningar med trafik i samma plan.",
    "takeaway": "Bara skyltad motorväg eller motortrafikled garanterar att korsande trafik i samma plan saknas, inte mitträcke eller hög hastighetsgräns."
  }
];

export const MOTORWAY_94_97_COVERAGE = [
  {
    "id": "book-motorway-t27",
    "bookUnitId": "book-motorway",
    "pages": [
      95,
      96
    ],
    "label": "Huvudled med mitträcke kan ändå ha korsningar i samma plan",
    "questionIds": [
      "book-motorway-q27"
    ],
    "visualStatus": "reviewed"
  }
];

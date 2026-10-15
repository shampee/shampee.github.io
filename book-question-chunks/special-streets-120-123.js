// PDF 121-122. Reviewed source text and illustrations. PDF 120 is blank and
// PDF 123 is the next unit's title page ("Vinter" / book-winter), no content.
export const SPECIAL_STREETS_120_123_QUESTIONS = [
  {
    "id": "book-special-streets-q17",
    "topic": "rules",
    "kind": "Trafikregel",
    "source": "book",
    "chapterId": "roads",
    "bookUnitId": "book-special-streets",
    "bookPages": [
      121,
      122
    ],
    "coverageIds": [
      "book-special-streets-t15"
    ],
    "title": "Vilken skylt anger gågata?",
    "situation": "Du ser fyra skyltar: en svartvit med en stadssiluett, en blå skylt med texten \"max 30 km/tim\", en blå skylt med bil, gående och ett hus, samt en blå skylt med bara en vuxen och ett barn som går. Vilken av dessa anger gågata?",
    "options": [
      "Den svartvita skylten med stadssiluetten.",
      "Den blå skylten med bil, gående och hus.",
      "Den blå skylten med bara en vuxen och ett barn som går."
    ],
    "correct": 2,
    "hint": "Gågatans skylt visar bara gående, utan bil eller hus.",
    "explanation": "Skylten med en vuxen och ett barn som går, utan bil eller hus, är gågata (E7). Skylten med bil, gående och hus är i stället gångfartsområde (E9).",
    "takeaway": "Gågatans skylt (E7) visar enbart gående; gångfartsområdets skylt (E9) visar även en bil och ett hus."
  }
];

export const SPECIAL_STREETS_120_123_COVERAGE = [
  {
    "id": "book-special-streets-t15",
    "bookUnitId": "book-special-streets",
    "pages": [
      121,
      122
    ],
    "label": "Skilja gågatans skylt (E7) från gångfartsområdets (E9)",
    "questionIds": [
      "book-special-streets-q17"
    ],
    "visualStatus": "reviewed"
  }
];

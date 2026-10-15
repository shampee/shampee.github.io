// PDF 62-63, 65-66. Reviewed source text and illustrations. PDF 64 is blank
// and PDF 67 is the next unit's title page ("Stanna & parkera"), no content.
export const ROUNDABOUTS_62_67_QUESTIONS = [
  {
    "id": "book-roundabouts-q17",
    "topic": "rules",
    "kind": "Trafikregel",
    "source": "book",
    "chapterId": "priority",
    "bookUnitId": "book-roundabouts",
    "bookPages": [
      62
    ],
    "coverageIds": [
      "book-roundabouts-t19"
    ],
    "title": "Krav vid utfart, råd vid infart",
    "situation": "Du ska köra in i en cirkulationsplats och senare lämna den. Du vill skilja mellan obligatorisk teckengivning och råd om att visa den fortsatta färden. Vilket påstående är rätt?",
    "options": [
      "Vänster blinkers är alltid ett krav vid infart om resmålet ligger åt vänster.",
      "Höger blinkers krävs vid utfart, men det finns inget krav på tecken för själva infarten.",
      "Om jag inte behöver blinka vid infarten behöver jag inte heller blinka vid utfarten."
    ],
    "correct": 1,
    "hint": "Infarten har bara en möjlig körriktning: motsols.",
    "explanation": "Det finns inget krav på tecken för själva infarten, eftersom färden då ska gå åt samma håll: motsols. Högerblinkning vid utfart är däremot ett krav. Råd om vänsterblinkning handlar om att visa den fortsatta färden.",
    "takeaway": "Infarten kräver inget tecken; utfarten kräver alltid höger blinkers."
  },
  {
    "id": "book-roundabouts-q18",
    "topic": "rules",
    "kind": "Trafikregel",
    "source": "book",
    "chapterId": "priority",
    "bookUnitId": "book-roundabouts",
    "bookPages": [
      62
    ],
    "coverageIds": [
      "book-roundabouts-t20"
    ],
    "title": "När vänsterblinkning kan missförstås",
    "situation": "Du ska till en avfart åt vänster men kör i höger körfält i en tvåfilig cirkulationsplats. Du tänker stanna i samma körfält. En annan bil kör i vänster körfält bredvid dig. Hur undviker du att signalera ett körfältsbyte som du inte tänker göra?",
    "options": [
      "Avstå från vänsterblinkning för den fortsatta färden, eftersom föraren bredvid kan tolka den som ett byte till vänster körfält.",
      "Blinka vänster hela tiden, eftersom vänster blinkers i höger körfält aldrig kan uppfattas som ett körfältsbyte.",
      "Blinka höger hela vägen runt, trots att jag ska passera flera avfarter innan jag kör ut."
    ],
    "correct": 0,
    "hint": "Tydlighet kring körfältsbyte väger tyngre än att visa riktning.",
    "explanation": "När du ligger i höger körfält kan vänsterblinkning tolkas som att du vill byta till vänster körfält. I detta fall är det tydligare att avstå från vänstersignalen för den fortsatta färden. Högerblinkning ska fortfarande ges inför utfarten.",
    "takeaway": "Avstå från vänsterblinkning när den riskerar att se ut som ett körfältsbyte du inte ska göra."
  },
  {
    "id": "book-roundabouts-q19",
    "topic": "rules",
    "kind": "Trafikregel",
    "source": "book",
    "chapterId": "priority",
    "bookUnitId": "book-roundabouts",
    "bookPages": [
      63
    ],
    "coverageIds": [
      "book-roundabouts-t21"
    ],
    "title": "Rund väg utan cirkulationsplats",
    "situation": "Du närmar dig en cirkelformad vägkorsning. Vid din infart saknas både vägmärket Cirkulationsplats och väjningspliktsskylt. Du kan också se baksidan av en väjningspliktsskylt som gäller trafiken från vänster. Vilken slutsats är riktig?",
    "options": [
      "Vägen är en cirkulationsplats enbart eftersom den är rund.",
      "Den andra trafikens väjningspliktsskylt gör hela korsningen till en cirkulationsplats.",
      "Det är en cirkelformad vägkorsning, inte en cirkulationsplats."
    ],
    "correct": 2,
    "hint": "Formen ensam avgör inte; utmärkningen gör det.",
    "explanation": "Det finns rundade korsningar som inte är cirkulationsplatser. I den beskrivna situationen saknas utmärkningen för cirkulationsplats och väjningsplikt vid din infart, medan trafiken från vänster har en egen väjningspliktsskylt.",
    "takeaway": "En rund vägform är inte i sig en cirkulationsplats; utmärkningen avgör."
  }
];

export const ROUNDABOUTS_62_67_COVERAGE = [
  {
    "id": "book-roundabouts-t19",
    "bookUnitId": "book-roundabouts",
    "pages": [
      62
    ],
    "label": "Krav vid utfart kontra råd om blinkning vid infart",
    "questionIds": [
      "book-roundabouts-q17"
    ],
    "visualStatus": "reviewed"
  },
  {
    "id": "book-roundabouts-t20",
    "bookUnitId": "book-roundabouts",
    "pages": [
      62
    ],
    "label": "Vänsterblinkning i höger körfält kan misstolkas",
    "questionIds": [
      "book-roundabouts-q18"
    ],
    "visualStatus": "reviewed"
  },
  {
    "id": "book-roundabouts-t21",
    "bookUnitId": "book-roundabouts",
    "pages": [
      63
    ],
    "label": "Cirkelformad vägkorsning som inte är cirkulationsplats",
    "questionIds": [
      "book-roundabouts-q19"
    ],
    "visualStatus": "reviewed"
  }
];

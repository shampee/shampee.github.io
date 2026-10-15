// PDF 42-44. Reviewed source text and illustrations. PDF 45 is the next
// unit's title page ("Passager") and has no substantive content.
export const PRIORITY_42_45_QUESTIONS = [
  {
    "id": "book-priority-q61",
    "topic": "rules",
    "kind": "Trafikregel",
    "source": "book",
    "chapterId": "priority",
    "bookUnitId": "book-priority",
    "bookPages": [
      42
    ],
    "coverageIds": [
      "book-priority-t57"
    ],
    "title": "Högersväng över grön cykelpassage",
    "situation": "Du har rund grön signal och vill svänga höger över en cykelpassage. Cykelpassagens signal är också grön och en cyklist ska passera över din svängväg. Vad gör du?",
    "options": [
      "Svänger före cyklisten eftersom du har grönt.",
      "Släpper fram cyklisten innan du svänger.",
      "Kräver att cyklisten väntar tills bilarnas signal blir röd."
    ],
    "correct": 1,
    "hint": "Båda kan ha grönt samtidigt.",
    "explanation": "Din gröna signal upphäver inte skyldigheten att släppa fram cyklisten på den gröna cykelpassagen. Vänta tills cyklisten har passerat din svängväg.",
    "takeaway": "Kontrollera cykelpassagens signal och trafik före högersväng."
  },
  {
    "id": "book-priority-q62",
    "topic": "rules",
    "kind": "Trafikregel",
    "source": "book",
    "chapterId": "priority",
    "bookUnitId": "book-priority",
    "bookPages": [
      42
    ],
    "coverageIds": [
      "book-priority-t58"
    ],
    "title": "Olika signaler för olika körfält",
    "situation": "Du kör i körfältet för vänstersväng. Signalen för ditt körfält visar gult inför rött och du kan stanna säkert. De andra körfältens signal för trafik rakt fram visar grönt. Vad ska du göra?",
    "options": [
      "Följa den gröna signalen för trafik rakt fram och svänga vänster.",
      "Fortsätta eftersom någon signal i korsningen fortfarande är grön.",
      "Stanna säkert och följa signalen för ditt eget körfält."
    ],
    "correct": 2,
    "hint": "Identifiera vilken signal som styr just din färdväg.",
    "explanation": "Den gröna signalen för de andra körfälten gäller inte din vänstersväng. Du ska följa ditt körfälts egen signal och stanna när ett säkert stopp är möjligt.",
    "takeaway": "Läs den signal som gäller ditt körfält, inte en intilliggande grön signal."
  },
  {
    "id": "book-priority-q63",
    "topic": "rules",
    "kind": "Trafikregel",
    "source": "book",
    "chapterId": "priority",
    "bookUnitId": "book-priority",
    "bookPages": [
      43,
      44
    ],
    "coverageIds": [
      "book-priority-t59"
    ],
    "title": "Fordon från gångfartsområde",
    "situation": "Du kör på en vanlig väg. Ett fordon närmar sig från höger och ska lämna ett gångfartsområde, markerat med vägmärke E9, för att köra in på din väg. Har du väjningsplikt mot fordonet enligt högerregeln?",
    "options": [
      "Nej, fordonet från gångfartsområdet har väjningsplikt enligt utfartsregeln.",
      "Ja, eftersom fordon från höger alltid ska släppas fram.",
      "Ja, eftersom utfartsregeln bara gäller parkeringsplatser och fastigheter."
    ],
    "correct": 0,
    "hint": "Kontrollera vilken typ av område fordonet lämnar.",
    "explanation": "Fordonet kommer in på vägen från ett gångfartsområde och har därför väjningsplikt mot varje fordon vars kurs skär dess egen, enligt Trafikförordningens utfartsregel. Högerregeln gäller alltså inte här.",
    "takeaway": "Ett fordon från höger kan självt ha väjningsplikt genom utfartsregeln."
  }
];

export const PRIORITY_42_45_COVERAGE = [
  {
    "id": "book-priority-t57",
    "bookUnitId": "book-priority",
    "pages": [
      42
    ],
    "label": "Högersväng över cykelpassage med grönt",
    "questionIds": [
      "book-priority-q61"
    ],
    "visualStatus": "reviewed"
  },
  {
    "id": "book-priority-t58",
    "bookUnitId": "book-priority",
    "pages": [
      42
    ],
    "label": "Olika signaler för olika körfält",
    "questionIds": [
      "book-priority-q62"
    ],
    "visualStatus": "reviewed"
  },
  {
    "id": "book-priority-t59",
    "bookUnitId": "book-priority",
    "pages": [
      43,
      44
    ],
    "label": "Utfart från gångfartsområde framför högerregel",
    "questionIds": [
      "book-priority-q63"
    ],
    "visualStatus": "reviewed"
  }
];

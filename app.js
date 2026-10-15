import { QUESTIONS, TOPICS, SOURCES, CHECKED_ON, CHAPTERS, COURSE_GOALS } from './content.js';
import { COURSE_STORAGE_KEY, RATINGS, parseCourseProgress, markSection, rateChapter, chapterStats } from './course-state.js';
import { BOOK, BOOK_UNITS, BOOK_EXCLUSIONS, BOOK_ISSUES } from './book.js';
import { BOOK_STORAGE_KEY, parseBookProgress, bookPageLabel, bookPageUrl, bookQuestionPool, makeBookSession } from './book-state.js';
import { BOOK_QUESTIONS, BOOK_SOURCE } from './book-questions.js';
const ALL_QUESTIONS = [...QUESTIONS, ...BOOK_QUESTIONS];
import { bookOverviewHtml, bookUnitHtml } from './book-ui.js';
import { STORAGE_KEY, parseProgress, makeSession, recordAnswer, shuffle, stats } from './learning.js';
import { SIGN_CATEGORIES, ROAD_SIGNS } from './road-signs.js';
import { SIGNS_STORAGE_KEY, signOptions } from './signs-game.js';
import { NARRATION } from './audio-manifest.js';
import { createNarrator, questionClips } from './speech.js';

const app = document.querySelector('#app');
const warning = document.querySelector('#storage-warning');
let progress = {};
let topic = 'all';
let session = [];
let position = 0;
let results = [];
let selected = null;
let usedHint = false;
let answerOrder = [];
let progressBeforeAnswer = null;
let answeredAt = 0;

let reading = {};
let activeChapter = null;
let storageAvailable = true;
let bookProgress = {};
let activeBookUnit = null;
let bookFilter = 'all';
let bookSession = false;
let sessionMode = 'mixed';
let signsProgress = {};
let signsCategory = 'all';
let signsSession = [];
let signsPosition = 0;
let signsResults = [];
let signsSelected = null;
let signsOrder = [];
let signsProgressBeforeAnswer = null;
let signsAnsweredAt = 0;
const SIGNS_ROUND_LIMIT = 10;
try {
  progress = parseProgress(localStorage.getItem(STORAGE_KEY), ALL_QUESTIONS);
  reading = parseCourseProgress(localStorage.getItem(COURSE_STORAGE_KEY), CHAPTERS);
  bookProgress = parseBookProgress(localStorage.getItem(BOOK_STORAGE_KEY), BOOK_UNITS);
  signsProgress = parseProgress(localStorage.getItem(SIGNS_STORAGE_KEY), ROAD_SIGNS);
} catch {
  warning.hidden = false;
  storageAvailable = false;
}

const escape = value => String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);
const sourceLink = source => `<a href="${escape(source.url)}" target="_blank" rel="noopener noreferrer">${escape(source.title)} ↗</a>`;

function save() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ version: 1, items: progress }));
    localStorage.setItem(COURSE_STORAGE_KEY, JSON.stringify({ version: 1, items: reading }));
    localStorage.setItem(BOOK_STORAGE_KEY, JSON.stringify({ version: 1, items: bookProgress }));
    localStorage.setItem(SIGNS_STORAGE_KEY, JSON.stringify({ version: 1, items: signsProgress }));
    storageAvailable = true;
    warning.hidden = true;
  } catch {
    warning.hidden = false;
    storageAvailable = false;
  }
}

const narrator = createNarrator({
  onState(state) {
    const status = app.querySelector('#speech-status');
    if (!status) return;
    const messages = {
      idle: '',
      loading: 'Laddar svensk uppläsning…',
      playing: 'Läser på svenska.',
      error: 'Ljudet kunde inte spelas upp. Försök igen eller ladda om sidan.',
    };
    status.textContent = messages[state];
    status.dataset.state = state;
  },
});

function stopSpeech() {
  narrator.stop();
}

function focusHeading() {
  app.querySelector('h1, h2')?.focus();
}

function speak(clips) {
  void narrator.play(clips);
}

function speechControls(available = true) {
  return `<div class="speech-tools"><button id="listen" class="quiet" ${available ? '' : 'disabled'}>Lyssna</button><button id="stop-speech" class="quiet" ${available ? '' : 'disabled'}>Stoppa uppläsning</button></div><p id="speech-status" role="status" class="muted">${available ? '' : 'Uppläsning saknas för detta innehåll. Läs texten nedan.'}</p>`;
}

function home(moveFocus = false) {
  stopSpeech();
  const counts = stats(QUESTIONS, progress);
  activeChapter = null;
  activeBookUnit = null;
  if (location.hash) history.replaceState(null, '', location.pathname + location.search);
  app.innerHTML = `
    <section class="intro">
      <p class="eyebrow">B-KÖRKORT · EN SITUATION I TAGET</p>
      <h1 tabindex="-1">Vad gör du här?</h1>
      <p class="lead">Läs och lyssna kapitel för kapitel.<br>Öva på beslut och förstå varför.</p>
    <div class="actions"><a class="button primary" href="#book">Gå igenom hela teoriboken</a><a class="button" href="#course">Ämneskurs · ${CHAPTERS.length} kapitel</a><a class="button" href="#signs">Vägmärkesspelet · ${ROAD_SIGNS.length} skyltar</a><a class="button" href="#coverage">Mål och källtäckning</a></div>
    </section>
    <section class="panel" aria-labelledby="practice-title">
      <h2 id="practice-title">Ett kort pass</h2>
      <p>Upp till 5 frågor. Ingen tidspress. Du kan få en ledtråd och lyssna på texten.</p>
      <label for="topic">Vad vill du öva på?</label>
      <select id="topic">
        <option value="all">Alla områden</option>
        ${Object.entries(TOPICS).map(([id, name]) => `<option value="${id}" ${topic === id ? 'selected' : ''}>${escape(name)}</option>`).join('')}
      </select>
      <div class="actions">
        <button id="start" class="primary">Börja öva</button>
        <button id="repeat" ${counts.difficult ? '' : 'disabled'}>Öva på svåra frågor (${counts.difficult})</button>
      </div>
      <p class="muted">Svåra frågor kommer först. Sedan sådant som är dags att repetera.</p>
    </section>
    <section class="progress-panel" aria-label="Dina framsteg">
      <div><strong>${counts.practiced} / ${QUESTIONS.length}</strong><span>situationer övade</span></div>
      <div><strong>${counts.difficult}</strong><span>att öva mer på</span></div>
      <div><strong>${counts.due}</strong><span>dags att repetera</span></div>
    </section>
    <details class="about">
      <summary>Om innehållet och dina framsteg</summary>
      <p>${CHAPTERS.length} kapitel och ${QUESTIONS.length} egna situationer inom teoriprovets fem områden. Innehållet är pedagogiska utkast med källreferenser. Trafikfacklig granskning och fullständig kontroll av varje kursmål återstår. Dina resultat visar övning, inte provberedskap.</p>
      <p>Referensbok: ${escape(BOOK.title)}, ${escape(BOOK.publisher)}, utgåva ${escape(BOOK.edition)}. ${BOOK_UNITS.length} läspass med PDF-sidreferenser och egna studiefrågor. Officiella faktakällor finns vid kursavsnitt och övningssvar.</p>
    <p><a href="#coverage">Referensregister och granskningsstatus</a> · <a href="#book">Bokens läsordning</a></p>
      <p>Dina framsteg sparas i den här webbläsaren. Använd separata webbläsarprofiler om ni pluggar på samma dator. Uppläsningen använder förberett svenskt ljud, utan webbläsarens röstinställningar. Rösten är sv_SE-alma-medium, tränad av Daniel Nylander (CC BY 4.0).</p>
      <button id="reset" class="quiet">Radera mina framsteg</button>
    </details>
    <p id="home-status" role="status" class="notice" hidden></p>`;
  app.querySelector('#topic').addEventListener('change', event => { topic = event.target.value; });
  app.querySelector('#start').addEventListener('click', () => start('mixed'));
  app.querySelector('#repeat').addEventListener('click', () => start('difficult'));
  app.querySelector('#reset').addEventListener('click', () => {
    if (!window.confirm('Radera alla dina sparade framsteg i den här webbläsaren?')) return;
    bookProgress = {};
    progress = {};
    reading = {};
    signsProgress = {};
    save();
    home(true);
  });
  if (moveFocus) focusHeading();
}

function start(mode) {
  bookSession = false;
  sessionMode = mode;
  const pool = activeChapter ? QUESTIONS.filter(q => q.chapterId === activeChapter) : QUESTIONS;
  session = makeSession(pool, progress, { topic: activeChapter ? 'all' : topic, mode });
  if (!session.length) {
    const status = app.querySelector('#home-status');
    status.textContent = 'Inga svåra frågor i det valda området. Välj ett annat område eller börja ett vanligt pass.';
    status.hidden = false;
    return;
  }
  position = 0;
  results = [];
  question();
}

function startBook(mode) {
  const pool = activeBookUnit
    ? BOOK_QUESTIONS.filter(q => q.bookUnitId === activeBookUnit)
    : bookQuestionPool(BOOK_QUESTIONS, BOOK_UNITS, bookProgress, bookFilter);
  session = makeBookSession(pool, progress, { mode });
  if (!session.length) return;
  bookSession = true;
  sessionMode = mode;
  position = 0;
  results = [];
  question();
}

function bindBookControls() {
  app.querySelector('#book-practice').addEventListener('click', () => startBook('ordered'));
  app.querySelector('#book-mixed').addEventListener('click', () => startBook('mixed'));
  app.querySelector('#book-difficult').addEventListener('click', () => startBook('difficult'));
}

function bookQuestionLinks(q) {
  return `<p class="source">${q.bookPages.map(page => `<a href="${escape(BOOK.url)}#page=${page}" target="_blank" rel="noopener noreferrer">PDF-sida ${page} ↗</a>`).join(' · ')}</p>`;
}
function question() {
  stopSpeech();
  const q = session[position];
  selected = null;
  usedHint = false;
  answerOrder = shuffle(q.options.map((_, index) => index));
  app.innerHTML = `
    <div class="pass-header"><button id="home" class="quiet">${bookSession ? 'Till boken' : activeChapter ? 'Till kapitlet' : 'Avsluta passet'}</button><span>Situation ${position + 1} av ${session.length}</span></div>
    <progress value="${position}" max="${session.length}" aria-label="Passets framsteg"></progress>
    <p class="eyebrow topic-label">${escape(TOPICS[q.topic])}</p>
    <section class="situation" aria-labelledby="question-title">
      <h1 id="question-title" tabindex="-1">${escape(q.title)}</h1>
      <p id="situation-text">${escape(q.situation)}</p>
      ${q.source === 'book' ? bookQuestionLinks(q) : ''}
    </section>
    ${speechControls(Boolean(NARRATION.questions[q.id]))}
    <div class="answers" role="group" aria-label="Välj hur du skulle agera">
      ${answerOrder.map((index, order) => `<button class="answer" data-option="${index}"><span class="option-letter" aria-hidden="true">${String.fromCharCode(65 + order)}</span><span>${escape(q.options[index])}</span></button>`).join('')}
    </div>
    <button id="hint-button" class="quiet" aria-expanded="false" aria-controls="hint">Ge mig en ledtråd</button>
    <p id="hint" class="hint" hidden>${escape(q.hint)}</p>
    <section id="feedback" class="panel feedback" aria-label="Förklaring" hidden></section>`;
  app.querySelector('#home').addEventListener('click', returnToReading);
  app.querySelector('#listen')?.addEventListener('click', () => {
    speak(questionClips(NARRATION, q.id, answerOrder));
  });
  app.querySelector('#stop-speech')?.addEventListener('click', stopSpeech);
  app.querySelector('#hint-button').addEventListener('click', event => {
    const hint = app.querySelector('#hint');
    hint.hidden = !hint.hidden;
    if (!hint.hidden) usedHint = true;
    event.target.setAttribute('aria-expanded', String(!hint.hidden));
  });
  app.querySelectorAll('[data-option]').forEach(button => button.addEventListener('click', () => answer(Number(button.dataset.option))));
  focusHeading();
}

function answer(index) {
  if (selected !== null) return;
  stopSpeech();
  selected = index;
  const q = session[position];
  const correct = index === q.correct;
  progressBeforeAnswer = progress;
  answeredAt = Date.now();
  // Until understanding is confirmed, schedule another attempt conservatively.
  progress = recordAnswer(progress, q.id, correct, false, answeredAt);
  save();
  app.querySelector('#hint-button').disabled = true;
  app.querySelectorAll('[data-option]').forEach(button => {
    button.disabled = true;
    const option = Number(button.dataset.option);
    if (option === q.correct) button.classList.add('correct');
    if (option === index && !correct) button.classList.add('incorrect');
  });
  const feedback = app.querySelector('#feedback');
  feedback.hidden = false;
  feedback.innerHTML = `
    <p class="eyebrow">${escape(q.kind)}</p>
    <h2 tabindex="-1">${correct ? 'Rätt. Här är varför.' : 'Vi går igenom det.'}</h2>
    ${correct ? '' : `<p><strong>Rätt agerande:</strong> ${escape(q.options[q.correct])}</p>`}
    <p>${escape(q.explanation)}</p>
    <p class="takeaway">${escape(q.takeaway)}</p>
    <p class="source">${sourceLink(q.source === 'book' ? BOOK_SOURCE : SOURCES[q.source])}<br>${escape(q.reference || (q.source === 'book' ? BOOK_SOURCE : SOURCES[q.source]).locator || '')}<br>Källa kontrollerad ${escape((q.source === 'book' ? BOOK_SOURCE : SOURCES[q.source]).checkedOn || CHECKED_ON)}</p>
    ${q.source === 'book' ? `${bookQuestionLinks(q)}<p><a href="#book/${escape(q.bookUnitId)}">Till bokens läspass</a></p>` : `<p><a href="#chapter/${escape(q.chapterId)}">Läs kapitlet och dess referenser</a></p>`}
      <button id="listen-explanation" class="quiet" ${NARRATION.questions[q.id]?.explanation ? '' : 'disabled'}>Lyssna på förklaringen</button>
    ${usedHint ? '<p class="muted">Du använde en ledtråd. Frågan sparas för mer övning.</p>' : ''}
    <div class="actions">
      ${correct && !usedHint ? '<button id="confident" class="primary">Jag förstår, nästa</button><button id="uncertain">Jag vill öva igen</button>' : '<button id="uncertain" class="primary">Nästa situation</button>'}
    </div>`;
  feedback.querySelector('#listen-explanation').addEventListener('click', () => speak([NARRATION.questions[q.id].explanation]));
  feedback.querySelector('#confident')?.addEventListener('click', () => advance(true));
  feedback.querySelector('#uncertain').addEventListener('click', () => advance(false));
  feedback.querySelector('h2').focus();
}

function advance(confident) {
  if (selected === null) return;
  const q = session[position];
  const correct = selected === q.correct;
  if (correct && confident && !usedHint) {
    // Recalculate from the pre-answer snapshot so the attempt is counted once.
    const understood = recordAnswer(progressBeforeAnswer, q.id, true, true, answeredAt);
    progress = { ...progress, [q.id]: understood[q.id] };
  }
  results.push({ id: q.id, correct, difficult: progress[q.id].difficult });
  save();
  position++;
  selected = null;
  if (position === session.length) summary();
  else question();
}

function summary() {
  stopSpeech();
  const needsPractice = results.filter(r => r.difficult);
  const correct = results.filter(r => r.correct).length;
  app.innerHTML = `
    <section class="intro">
      <p class="eyebrow">PASSET ÄR KLART</p>
      <h1 tabindex="-1">En bit på vägen.</h1>
      <p class="lead">Du övade på ${session.length} situationer.</p>
    </section>
    <section class="panel">
      <p>${correct} av ${session.length} svar var rätt.</p>
      ${needsPractice.length ? `<h2>Det här övar vi mer på</h2><ul>${needsPractice.map(r => `<li>${escape(ALL_QUESTIONS.find(q => q.id === r.id).title)}</li>`).join('')}</ul><p>Felaktiga svar, ledtrådar och sådant du känner dig osäker på sparas för repetition.</p>` : '<h2>Nästa repetition</h2><p>Dagens frågor blir aktuella igen om 1, 3, 7, 14 eller 30 dagar, beroende på hur många gånger du har förstått svaret. Du kan öva tidigare om du vill.</p>'}
    <div class="actions"><button id="again" class="primary">${bookSession && sessionMode === 'ordered' ? 'Nästa bit i bokordning' : 'Ett pass till'}</button><button id="home">${bookSession ? 'Till boken' : activeChapter ? 'Till kapitlet' : 'Till startsidan'}</button></div>
    </section>`;
  app.querySelector('#again').addEventListener('click', () => bookSession ? startBook(sessionMode) : start('mixed'));
  app.querySelector('#home').addEventListener('click', returnToReading);
  focusHeading();
}

function returnToReading() {
  if (bookSession && !activeBookUnit) bookOverview();
  else if (activeBookUnit) bookUnitPage(activeBookUnit);
  else if (activeChapter) chapterPage(activeChapter);
  else home(true);
}

function courseOverview() {
  stopSpeech();
  activeChapter = null;
  activeBookUnit = null;
  app.innerHTML = `
    <div class="pass-header"><a href="#home">Startsidan</a><a href="#coverage">Mål och källor</a></div>
    <section class="intro"><p class="eyebrow">B-TEORI · KAPITEL FÖR KAPITEL</p>
    <h1 tabindex="-1">Din kursöversikt</h1>
    <p class="lead">Läs eller lyssna, pröva principerna och motivera dina beslut.</p>
    <p class="muted">Eget kursmaterial med officiella referenser. Alla kapitel är utkast. Markeringar för lästa avsnitt och övade situationer är inte en bedömning av körförmåga.</p></section>
    <p><a href="#book">Följ bokens ordning med PDF-sidreferenser</a></p>
    <ol class="chapter-list">${CHAPTERS.map(c => {
      const n = chapterStats(c, QUESTIONS, progress, reading);
      return `<li class="panel"><h2><a href="#chapter/${escape(c.id)}">${escape(c.title)}</a></h2>
        <p>${escape(c.summary)}</p><p class="muted">${n.read}/${n.sections} avsnitt lästa · ${n.practiced}/${n.questions} situationer övade</p>
        ${reading[c.id]?.rating ? `<p class="muted">Självvärdering: ${escape(RATINGS[reading[c.id].rating])}</p>` : ''}</li>`;
    }).join('')}</ol>`;
  focusHeading();
}

function chapterPage(id) {
  const chapter = CHAPTERS.find(c => c.id === id);
  if (!chapter) { courseOverview(); return; }
  stopSpeech();
  activeChapter = id;
  activeBookUnit = null;
  const index = CHAPTERS.indexOf(chapter);
  const n = chapterStats(chapter, QUESTIONS, progress, reading);
  app.innerHTML = `
    <div class="pass-header"><a href="#course">Alla kapitel</a><span>Kapitel ${index + 1} av ${CHAPTERS.length}</span></div>
    <section class="intro"><p class="eyebrow">KÄLLKONTROLLERAT UTKAST</p>
      <h1 tabindex="-1">${escape(chapter.title)}</h1><p class="lead">${escape(chapter.summary)}</p>
      <p class="muted">Trafikfacklig granskning återstår. ${n.read}/${n.sections} avsnitt lästa · ${n.practiced}/${n.questions} situationer övade.</p>
    </section>
    ${speechControls(chapter.sections.every(s => NARRATION.chapters?.[id]?.sections?.[s.id]))}
    <nav class="section-index" aria-label="Avsnitt">${chapter.sections.map(s => `<a href="#section-${escape(s.id)}" data-scroll="${escape(s.id)}">${escape(s.title)}</a>`).join('')}</nav>
    <details class="book-references"><summary>Läs mer i ${escape(BOOK.title)}</summary><ul>${BOOK_UNITS.filter(u => u.chapterId === id).map(u => `<li><a href="#book/${escape(u.id)}">${escape(u.title)}</a> · <a href="${escape(bookPageUrl(BOOK, u))}" target="_blank" rel="noopener noreferrer">${bookPageLabel(u)} ↗</a></li>`).join('')}</ul><p class="source">${escape(BOOK.publisher)}, utgåva ${escape(BOOK.edition)}. Sidnumren är PDF-visarens, räknat från omslaget.</p></details>
    ${chapter.sections.map(section => `
      <section id="section-${escape(section.id)}" class="panel lesson" aria-labelledby="heading-${escape(section.id)}">
        <h2 id="heading-${escape(section.id)}">${escape(section.title)}</h2>
        ${section.paragraphs.map(p => `<p>${escape(p)}</p>`).join('')}
        <details class="references"><summary>Källor och regelhänvisning</summary>
          <p class="source">${escape(section.reference)}</p>
          <ul>${section.sourceIds.map(sourceId => `<li>${sourceLink(SOURCES[sourceId])}<br><span class="source">Kontrollerad ${escape(SOURCES[sourceId].checkedOn)}</span></li>`).join('')}</ul>
        </details>
        <button class="quiet" data-listen-section="${escape(section.id)}" ${NARRATION.chapters?.[id]?.sections?.[section.id] ? '' : 'disabled'}>Lyssna på avsnittet</button>
        <label class="read-marker"><input type="checkbox" data-read="${escape(section.id)}" ${reading[id]?.read.includes(section.id) ? 'checked' : ''}> Jag har läst eller lyssnat på avsnittet</label>
      </section>`).join('')}
    <section class="panel reflection"><h2>Fundera och motivera</h2>
      <p>${escape(chapter.reflection)}</p>
      <p class="muted">Förklara högt eller för din handledare vad du gör, varför och vilken regel eller risk du utgår från.</p>
      <button id="listen-reflection" class="quiet" ${NARRATION.chapters?.[id]?.reflection ? '' : 'disabled'}>Lyssna på reflektionsfrågan</button>
      <label for="rating">Min självvärdering</label><select id="rating"><option value="">Välj när du har reflekterat</option>
      ${Object.entries(RATINGS).map(([value, label]) => `<option value="${value}" ${reading[id]?.rating === value ? 'selected' : ''}>${escape(label)}</option>`).join('')}</select>
      <p id="reading-status" class="muted" role="status"></p>
      <div class="actions"><button id="chapter-practice" class="primary">Öva på kapitlet · ${n.questions} situationer</button></div>
      <p class="muted">Upp till fem situationer per pass. Fortsätt med fler pass för att öva på alla.</p>
    </section>
    <details class="about"><summary>Koppling till kursplanen</summary><ul>
      ${chapter.goalIds.map(goalId => {
        const goal = COURSE_GOALS.find(g => g.id === goalId);
        return `<li>${escape(goal.title)}<br>${escape(goal.reference)} · ${sourceLink(SOURCES[goal.source])}</li>`;
      }).join('')}</ul><a href="#coverage">Visa hela målmatrisen</a></details>
    <nav class="actions" aria-label="Kapitelnavigering">
      ${index > 0 ? `<a class="button" href="#chapter/${CHAPTERS[index - 1].id}">Föregående kapitel</a>` : ''}
      ${index < CHAPTERS.length - 1 ? `<a class="button" href="#chapter/${CHAPTERS[index + 1].id}">Nästa kapitel</a>` : '<a class="button" href="#course">Till kursöversikten</a>'}
    </nav>`;
  app.querySelector('#listen').addEventListener('click', () => speak(chapter.sections.map(s => NARRATION.chapters[id].sections[s.id])));
  app.querySelector('#stop-speech').addEventListener('click', stopSpeech);
  app.querySelector('#listen-reflection').addEventListener('click', () => speak([NARRATION.chapters[id].reflection]));
  app.querySelectorAll('[data-listen-section]').forEach(button => button.addEventListener('click', () => speak([NARRATION.chapters[id].sections[button.dataset.listenSection]])));
  app.querySelectorAll('[data-scroll]').forEach(link => link.addEventListener('click', event => {
    event.preventDefault();
    app.querySelector(`#section-${link.dataset.scroll}`).scrollIntoView({ behavior: 'smooth' });
  }));
  app.querySelectorAll('[data-read]').forEach(input => input.addEventListener('change', () => {
    reading = markSection(reading, id, input.dataset.read, input.checked);
    saveReadingStatus();
  }));
  app.querySelector('#rating').addEventListener('change', event => {
    if (event.target.value) reading = rateChapter(reading, id, event.target.value);
    else reading = { ...reading, [id]: { read: [], ...reading[id], rating: '' } };
    saveReadingStatus();
  });
  app.querySelector('#chapter-practice').addEventListener('click', () => start('mixed'));
  focusHeading();
}

function saveReadingStatus() {
  save();
  app.querySelector('#reading-status').textContent = storageAvailable ? 'Sparat i den här webbläsaren.' : 'Sparas bara under detta besök eftersom webbläsarlagring är blockerad.';
}

function coveragePage() {
  stopSpeech();
  activeChapter = null;
  app.innerHTML = `<div class="pass-header"><a href="#course">Alla kapitel</a><a href="#home">Startsidan</a></div>
    <section class="intro"><p class="eyebrow">OFFICIELL GRUND OCH SPÅRBARHET</p><h1 tabindex="-1">Mål och källtäckning</h1>
    <p>Matrisen kopplar kapitel till målgrupper i TSFS 2011:20. Den är en arbetskarta, inte en fullständig verifiering av varje delmål. Teori, praktisk färdighet och självvärdering behöver följas upp tillsammans med handledare eller trafiklärare.</p></section>
    <div class="goal-list">${COURSE_GOALS.map(g => {
      const linked = CHAPTERS.filter(c => c.goalIds.includes(g.id));
      return `<section class="panel"><h2>${escape(g.title)}</h2><p class="source">${escape(g.reference)} · ${sourceLink(SOURCES[g.source])}</p>
        <ul>${linked.map(c => `<li><a href="#chapter/${escape(c.id)}">${escape(c.title)}</a> · utkast · ${QUESTIONS.filter(q => q.chapterId === c.id).length} situationer</li>`).join('')}</ul>
        <p class="muted">${linked.length ? 'Utkast finns. Fullständig delmålskontroll och trafikfacklig granskning återstår.' : 'Inget material kopplat ännu.'}</p></section>`;
    }).join('')}</div>
    <section class="panel lesson"><h2>Referensregister</h2><ul>${Object.entries(SOURCES).map(([id, s]) => {
      const used = CHAPTERS.filter(c => c.sections.some(section => section.sourceIds.includes(id)) || QUESTIONS.some(q => q.chapterId === c.id && q.source === id));
      return `<li>${sourceLink(s)}<p class="source">Kontrollerad ${escape(s.checkedOn)}${s.locator ? ` · ${escape(s.locator)}` : ''}</p>
        <p class="source">${used.map(c => `<a href="#chapter/${escape(c.id)}">${escape(c.title)}</a>`).join(' · ')}</p></li>`;
    }).join('')}</ul></section>
    <section class="panel lesson"><h2>Kursbokens sidkarta</h2><p>${escape(BOOK.title)} · ${escape(BOOK.publisher)} · utgåva ${escape(BOOK.edition)} · ${BOOK.pages} PDF-sidor.</p>
      <p>${BOOK_UNITS.length} läspass med hänvisningar till PDF-visarens sidnummer, med omslaget som sida 1.</p>
      <a href="#book">Visa alla läspass med sidreferenser</a>
      <details><summary>Sidor utanför läspassen</summary><ul>${BOOK_EXCLUSIONS.map(e => `<li>PDF-sida ${e.startPage}–${e.endPage}: ${escape(e.reason)}</li>`).join('')}</ul></details>
      ${BOOK_ISSUES.length ? `<details><summary>Granskningsbehov i bokkartläggningen</summary><ul>${BOOK_ISSUES.map(i => `<li>${escape(i)}</li>`).join('')}</ul></details>` : ''}
      <p class="muted">Läspassen är egenproducerade studieguider till din lokala bok. Övningarna är kopplade till ämneskapitel och täcker ännu inte varje delmoment i boken.</p>
    </section>`;
  focusHeading();
}

function bookOverview() {
  stopSpeech();
  activeChapter = null;
  activeBookUnit = null;
  app.innerHTML = bookOverviewHtml(bookProgress, bookFilter, progress);
  bindBookControls();
  app.querySelector('#book-filter').value = bookFilter;
  app.querySelector('#book-filter').addEventListener('change', event => { bookFilter = event.target.value; bookOverview(); });
  focusHeading();
}

function bookUnitPage(id) {
  const unit = BOOK_UNITS.find(u => u.id === id);
  if (!unit) { bookOverview(); return; }
  stopSpeech();
  activeBookUnit = id;
  activeChapter = null;
  app.innerHTML = bookUnitHtml(unit, bookProgress, speechControls(Boolean(NARRATION.book?.[id])), progress);
  bindBookControls();
  app.querySelector('#listen').addEventListener('click', () => speak([NARRATION.book[id]]));
  app.querySelector('#stop-speech').addEventListener('click', stopSpeech);
  app.querySelector('#book-read').addEventListener('change', event => {
    bookProgress = { ...bookProgress, [id]: event.target.checked };
    saveReadingStatus();
  });
  focusHeading();
}

function signsHome() {
  stopSpeech();
  activeChapter = null;
  activeBookUnit = null;
  const pool = signsCategory === 'all' ? ROAD_SIGNS : ROAD_SIGNS.filter(s => s.category === signsCategory);
  const counts = stats(pool, signsProgress);
  app.innerHTML = `
    <div class="pass-header"><a href="#home">Startsidan</a></div>
    <section class="intro">
      <p class="eyebrow">VÄGMÄRKEN · FLASHCARDS</p>
      <h1 tabindex="-1">Vägmärkesspelet</h1>
      <p class="lead">Se en skylt, välj rätt betydelse.<br>${SIGNS_ROUND_LIMIT} skyltar per omgång, ingen tidspress.</p>
    </section>
    <section class="panel" aria-labelledby="signs-practice-title">
      <h2 id="signs-practice-title">En omgång</h2>
      <label for="signs-category">Vilken kategori vill du öva på?</label>
      <select id="signs-category">
        ${['all', ...Object.keys(SIGN_CATEGORIES)].map(id => {
          const count = id === 'all' ? ROAD_SIGNS.length : ROAD_SIGNS.filter(s => s.category === id).length;
          const label = id === 'all' ? 'Alla kategorier' : SIGN_CATEGORIES[id].name;
          return `<option value="${id}" ${signsCategory === id ? 'selected' : ''}>${escape(label)} (${count})</option>`;
        }).join('')}
      </select>
      <div class="actions">
        <button id="signs-start" class="primary">Starta omgång</button>
        <button id="signs-difficult" ${counts.difficult ? '' : 'disabled'}>Öva på svåra skyltar (${counts.difficult})</button>
      </div>
      <p id="signs-status" role="status" class="notice" hidden></p>
    </section>
    <section class="progress-panel" aria-label="Dina framsteg med vägmärken">
      <div><strong>${counts.practiced} / ${pool.length}</strong><span>skyltar övade</span></div>
      <div><strong>${counts.difficult}</strong><span>att öva mer på</span></div>
      <div><strong>${counts.due}</strong><span>dags att repetera</span></div>
    </section>
    <details class="about">
      <summary>Om vägmärkesspelet</summary>
      <p>${ROAD_SIGNS.length} officiella vägmärken: varningsmärken, väjningspliktsmärken, förbudsmärken och påbudsmärken, enligt vägmärkesförordningen (SFS 2007:90). Skyltbilderna är Transportstyrelsens egna, hämtade från <a href="https://www.transportstyrelsen.se/sv/vagtrafik/trafikregler-och-vagmarken/vagmarken/" target="_blank" rel="noopener noreferrer">transportstyrelsen.se ↗</a>. Namnen är korta juridiska beteckningar, inte fullständiga förklaringar av reglerna kring varje märke.</p>
      <p class="muted">Rätt och fel svar sparas separat från ämneskursen och bokens läspass. Svåra skyltar och skyltar det är dags att repetera prioriteras i nästa omgång.</p>
    </details>`;
  app.querySelector('#signs-category').addEventListener('change', event => { signsCategory = event.target.value; signsHome(); });
  app.querySelector('#signs-start').addEventListener('click', () => startSignsRound('mixed'));
  app.querySelector('#signs-difficult').addEventListener('click', () => startSignsRound('difficult'));
  focusHeading();
}

function startSignsRound(mode) {
  const pool = signsCategory === 'all' ? ROAD_SIGNS : ROAD_SIGNS.filter(s => s.category === signsCategory);
  signsSession = makeSession(pool, signsProgress, { topic: 'all', mode, limit: SIGNS_ROUND_LIMIT });
  if (!signsSession.length) {
    const status = app.querySelector('#signs-status');
    status.textContent = 'Inga svåra skyltar i den valda kategorin. Välj en annan kategori eller starta en vanlig omgång.';
    status.hidden = false;
    return;
  }
  signsPosition = 0;
  signsResults = [];
  signQuestion();
}

function signQuestion() {
  stopSpeech();
  const sign = signsSession[signsPosition];
  signsSelected = null;
  signsOrder = signOptions(sign, ROAD_SIGNS, 3);
  app.innerHTML = `
    <div class="pass-header"><button id="signs-home" class="quiet">Avsluta omgången</button><span>Skylt ${signsPosition + 1} av ${signsSession.length}</span></div>
    <progress value="${signsPosition}" max="${signsSession.length}" aria-label="Omgångens framsteg"></progress>
    <p class="eyebrow topic-label">${escape(SIGN_CATEGORIES[sign.category].name)}</p>
    <section class="sign-card" aria-label="Vägmärke att identifiera">
      <img class="sign-image" src="${escape(sign.image)}" alt="Vägmärke att identifiera" width="180" height="180">
    </section>
    <p class="muted">Vad betyder skylten?</p>
    <div class="answers" role="group" aria-label="Välj rätt betydelse">
      ${signsOrder.map((option, order) => `<button class="answer" data-sign="${escape(option.id)}"><span class="option-letter" aria-hidden="true">${String.fromCharCode(65 + order)}</span><span>${escape(option.name)}</span></button>`).join('')}
    </div>
    <section id="feedback" class="panel feedback" aria-label="Rätt svar" hidden></section>`;
  app.querySelector('#signs-home').addEventListener('click', signsHome);
  app.querySelectorAll('[data-sign]').forEach(button => button.addEventListener('click', () => signAnswer(button.dataset.sign)));
  focusHeading();
}

function signAnswer(signId) {
  if (signsSelected !== null) return;
  signsSelected = signId;
  const sign = signsSession[signsPosition];
  const correct = signId === sign.id;
  signsProgressBeforeAnswer = signsProgress;
  signsAnsweredAt = Date.now();
  signsProgress = recordAnswer(signsProgress, sign.id, correct, false, signsAnsweredAt);
  save();
  app.querySelectorAll('[data-sign]').forEach(button => {
    button.disabled = true;
    if (button.dataset.sign === sign.id) button.classList.add('correct');
    if (button.dataset.sign === signId && !correct) button.classList.add('incorrect');
  });
  const feedback = app.querySelector('#feedback');
  feedback.hidden = false;
  feedback.innerHTML = `
    <p class="eyebrow">${escape(sign.code)}</p>
    <h2 tabindex="-1">${correct ? 'Rätt!' : 'Rätt svar:'}</h2>
    <p>${escape(sign.name)}</p>
    <div class="actions">
      ${correct ? '<button id="confident" class="primary">Jag kan den, nästa</button><button id="uncertain">Jag vill öva igen</button>' : '<button id="uncertain" class="primary">Nästa skylt</button>'}
    </div>`;
  feedback.querySelector('#confident')?.addEventListener('click', () => signsAdvance(true));
  feedback.querySelector('#uncertain').addEventListener('click', () => signsAdvance(false));
  feedback.querySelector('h2').focus();
}

function signsAdvance(confident) {
  if (signsSelected === null) return;
  const sign = signsSession[signsPosition];
  const correct = signsSelected === sign.id;
  if (correct && confident) {
    const understood = recordAnswer(signsProgressBeforeAnswer, sign.id, true, true, signsAnsweredAt);
    signsProgress = { ...signsProgress, [sign.id]: understood[sign.id] };
  }
  signsResults.push({ id: sign.id, correct, difficult: signsProgress[sign.id].difficult });
  save();
  signsPosition++;
  signsSelected = null;
  if (signsPosition === signsSession.length) signsSummary();
  else signQuestion();
}

function signsSummary() {
  stopSpeech();
  const needsPractice = signsResults.filter(r => r.difficult);
  const correct = signsResults.filter(r => r.correct).length;
  app.innerHTML = `
    <section class="intro">
      <p class="eyebrow">OMGÅNGEN ÄR KLAR</p>
      <h1 tabindex="-1">Bra jobbat!</h1>
      <p class="lead">Du övade på ${signsSession.length} skyltar.</p>
    </section>
    <section class="panel">
      <p>${correct} av ${signsSession.length} svar var rätt.</p>
      ${needsPractice.length ? `<h2>Det här övar vi mer på</h2><ul>${needsPractice.map(r => { const s = ROAD_SIGNS.find(sign => sign.id === r.id); return `<li>${escape(s.name)} (${escape(s.code)})</li>`; }).join('')}</ul>` : '<h2>Nästa repetition</h2><p>Dagens skyltar blir aktuella igen om 1, 3, 7, 14 eller 30 dagar, beroende på hur många gånger du har svarat rätt. Du kan öva tidigare om du vill.</p>'}
      <div class="actions"><button id="again" class="primary">En omgång till</button><button id="signs-home">Till vägmärkesspelet</button></div>
    </section>`;
  app.querySelector('#again').addEventListener('click', () => startSignsRound('mixed'));
  app.querySelector('#signs-home').addEventListener('click', signsHome);
  focusHeading();
}

function route() {
  const path = location.hash.slice(1);
  if (path === 'course') courseOverview();
  else if (path === 'book') bookOverview();
  else if (path.startsWith('book/')) bookUnitPage(path.slice('book/'.length));
  else if (path === 'coverage') coveragePage();
  else if (path.startsWith('chapter/')) chapterPage(path.slice('chapter/'.length));
  else if (path === 'signs') signsHome();
  else home(Boolean(path));
}

window.addEventListener('hashchange', route);
window.addEventListener('pagehide', stopSpeech);
route();

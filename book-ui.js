import { BOOK, BOOK_UNITS } from './book.js';
import { CHAPTERS } from './content.js';
import { BOOK_QUESTIONS, BOOK_COVERAGE, BOOK_CHUNKS } from './book-questions.js';
import { bookPageLabel, bookPageUrl, bookUnitsForFilter, bookQuestionPool, bookUnitStats, bookUnitCheckpoint } from './book-state.js';
import { stats } from './learning.js';

const escape = value => String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);

function gameControls(pool, answers) {
  const counts = stats(pool, answers);
  return `<div class="actions"><button id="book-practice" class="primary" ${pool.length ? '' : 'disabled'}>Fortsätt i bokordning · upp till 5 frågor</button><button id="book-mixed" ${pool.length ? '' : 'disabled'}>Blandad repetition</button><button id="book-difficult" ${counts.difficult ? '' : 'disabled'}>Öva på svåra bokfrågor (${counts.difficult})</button></div>`;
}

function coverageHtml(unit, answers) {
  const n = bookUnitStats(unit, BOOK_QUESTIONS, BOOK_COVERAGE, answers);
  const checkpoint = bookUnitCheckpoint(unit, BOOK_CHUNKS);
  return `<p class="book-answer-count">${n.practiced}/${n.total} frågor besvarade · ${n.total} tillgängliga frågor · ${n.difficult} svåra.</p><p class="book-coverage">${n.total ? `${n.covered}/${n.elements} kartlagda delmoment har frågor och kontrollerad bildstatus.` : 'Väntar på bokfrågor. Detta läspass är ännu inte spelbart.'}</p><p class="source">${checkpoint.reviewed}/${checkpoint.total} PDF-sidor konverterade och källgranskade.${checkpoint.nextPage !== null ? ` Nästa sida att konvertera: ${checkpoint.nextPage}.` : ''}</p>${n.gaps.length ? `<details><summary>${n.gaps.length} täckningsluckor</summary><ul>${n.gaps.map(g => `<li>${escape(g.label)} · PDF-sida ${g.pages.join(', ')}${g.visualStatus === 'pending' ? ' · bildgranskning återstår' : ' · fråga saknas'}</li>`).join('')}</ul></details>` : ''}`;
}

export function bookOverviewHtml(progress, filter, answers = {}) {
  const done = BOOK_UNITS.filter(u => progress[u.id]).length;
  const units = bookUnitsForFilter(BOOK_UNITS, progress, filter);
  const pool = bookQuestionPool(BOOK_QUESTIONS, BOOK_UNITS, progress, filter);
  const counts = stats(pool, answers);
  const ready = BOOK_UNITS.filter(u => BOOK_QUESTIONS.some(q => q.bookUnitId === u.id)).length;
  const next = BOOK_UNITS.find(u => !progress[u.id]);
  return `<div class="pass-header"><a href="#home">Startsidan</a><a href="#course">Ämneskursen</a></div>
    <section class="intro"><p class="eyebrow">${escape(BOOK.publisher)} · ${escape(BOOK.edition)}</p><h1 tabindex="-1">Hela teoriboken</h1>
      <p class="lead">Öva med flervalsfrågor i bokordning, fem frågor åt gången. Svaren sparas direkt i den här webbläsaren.</p>
      <p>${ready}/${BOOK_UNITS.length} läspass har bokfrågor. Konvertering av resten av boken pågår.</p>
      <p>${done}/${BOOK_UNITS.length} läspass markerade som lästa · ${BOOK.pages} PDF-sidor. Läsmarkeringar och svar sparas separat.</p>
      ${next ? `<a id="continue-book" class="button" href="#book/${escape(next.id)}">Fortsätt läsa: ${escape(next.title)}</a>` : '<p>Alla läspass är markerade som lästa.</p>'}
    </section>
    <p class="muted">Sidreferenserna avser PDF-visarens sidnummer, med omslaget som sida 1. Frågorna är pedagogiska utkast. Trafikfacklig granskning återstår.</p>
    <label for="book-filter">Visa läspass och välj frågeurval</label><select id="book-filter"><option value="all">Hela boken i sidordning</option><option value="unread">Inte genomgångna</option>${CHAPTERS.map(c => `<option value="${escape(c.id)}">${escape(c.title)}</option>`).join('')}</select>
    <section class="panel"><h2>Spela valt urval</h2><p id="book-game-count">${counts.practiced}/${pool.length} frågor besvarade · ${pool.length} tillgängliga frågor.</p>${gameControls(pool, answers)}<p id="home-status" role="status" hidden></p></section>
    <ol class="chapter-list book-list">${units.map(u => `<li class="panel"><h2><a href="#book/${escape(u.id)}">${escape(u.title)}</a></h2><p>${escape(u.summary)}</p><p class="source">${bookPageLabel(u)} · ${progress[u.id] ? 'Genomgånget' : 'Att läsa'} · ${escape(CHAPTERS.find(c => c.id === u.chapterId).title)}</p>${coverageHtml(u, answers)}</li>`).join('')}</ol>${units.length ? '' : '<p>Inga läspass i detta urval.</p>'}`;
}

export function bookUnitHtml(unit, progress, speechControls, answers = {}) {
  const index = BOOK_UNITS.indexOf(unit);
  const chapter = CHAPTERS.find(c => c.id === unit.chapterId);
  const pool = BOOK_QUESTIONS.filter(q => q.bookUnitId === unit.id);
  return `<div class="pass-header"><a href="#book">Bokens läsordning</a><span>Läspass ${index + 1} av ${BOOK_UNITS.length}</span></div>
    <section class="intro"><p class="eyebrow">${escape(chapter.title)}</p><h1 tabindex="-1">${escape(unit.title)}</h1><p class="lead">${escape(unit.summary)}</p><p class="source">${escape(BOOK.title)} · ${escape(BOOK.publisher)} · ${escape(BOOK.edition)} · ${bookPageLabel(unit)}</p><a id="open-book" class="button" href="${escape(bookPageUrl(BOOK, unit))}" target="_blank" rel="noopener noreferrer">Öppna boken på PDF-sida ${unit.startPage} ↗</a></section>
    <section class="panel"><h2>Spela detta läspass</h2>${coverageHtml(unit, answers)}${gameControls(pool, answers)}<p id="home-status" role="status" hidden></p><p class="muted">Svaren sparas direkt. Uppläsning för bokfrågorna är pausad.</p></section>
    ${speechControls}
    <section class="panel lesson"><h2>Det här går du igenom</h2><ul>${unit.focus.map(point => `<li>${escape(point)}</li>`).join('')}</ul><p class="muted">Läs angivna sidor och granska illustrationerna i originalet.</p></section>
    <section class="panel reflection"><h2>Förklara med egna ord</h2><p>${escape(unit.reflection)}</p><label class="read-marker"><input type="checkbox" id="book-read" ${progress[unit.id] ? 'checked' : ''}> Jag har läst sidorna och gått igenom frågan</label><p id="reading-status" class="muted" role="status"></p><a class="button" href="#chapter/${escape(unit.chapterId)}">Läs kursens förklaringar och faktakällor</a></section>
    <nav class="actions" aria-label="Läspassnavigering">${index ? `<a class="button" href="#book/${escape(BOOK_UNITS[index - 1].id)}">Föregående läspass</a>` : ''}${index + 1 < BOOK_UNITS.length ? `<a class="button primary" href="#book/${escape(BOOK_UNITS[index + 1].id)}">Nästa läspass</a>` : '<a class="button primary" href="#book">Till boköversikten</a>'}</nav>`;
}

import { makeSession, stats } from './learning.js';
export const BOOK_STORAGE_KEY = 'teori-book-v1';

export function parseBookProgress(raw, units) {
  try {
    const data = JSON.parse(raw);
    if (data?.version !== 1 || !data.items || typeof data.items !== 'object') return {};
    return Object.fromEntries(units.filter(unit => data.items[unit.id] === true).map(unit => [unit.id, true]));
  } catch { return {}; }
}

export function bookPageLabel(unit) {
  return `PDF-sida ${unit.startPage}${unit.endPage === unit.startPage ? '' : `–${unit.endPage}`}`;
}

export function bookPageUrl(book, unit) {
  return `${book.url}#page=${unit.startPage}`;
}

// Reading progress is a filter, never a substitute for an answered question.
export function bookUnitsForFilter(units, reading, filter = 'all') {
  return units.filter(unit => filter === 'all' || (filter === 'unread' ? !reading[unit.id] : unit.chapterId === filter));
}

export function bookQuestionPool(questions, units, reading, filter = 'all') {
  const ids = new Set(bookUnitsForFilter(units, reading, filter).map(unit => unit.id));
  return questions.filter(question => ids.has(question.bookUnitId));
}

export function makeBookSession(questions, answers, { mode = 'mixed', limit = 5, ...options } = {}) {
  if (mode === 'ordered') {
    const unseen = questions.filter(question => !answers[question.id]?.seen);
    if (unseen.length) return unseen.slice(0, limit);
  }
  return makeSession(questions, answers, { ...options, limit, mode: mode === 'ordered' ? 'mixed' : mode });
}

export function bookUnitStats(unit, questions, coverage, answers) {
  const own = questions.filter(question => question.bookUnitId === unit.id);
  const ids = new Set(own.map(question => question.id));
  const elements = coverage.filter(item => item.bookUnitId === unit.id);
  const gaps = elements.filter(item => item.visualStatus === 'pending' || !item.questionIds.some(id => ids.has(id)));
  return { ...stats(own, answers), total: own.length, elements: elements.length, covered: elements.length - gaps.length, gaps };
}


// Content-review checkpoints, separate from the student's reading and answers.
export function bookUnitCheckpoint(unit, chunks) {
  const reviewed = new Set();
  for (const chunk of chunks.filter(c => c.bookUnitId === unit.id && c.reviewedOn)) {
    for (let page = Math.max(unit.startPage, chunk.startPage); page <= Math.min(unit.endPage, chunk.endPage); page++) reviewed.add(page);
  }
  const pages = Array.from({ length: unit.endPage - unit.startPage + 1 }, (_, index) => unit.startPage + index);
  const nextPage = pages.find(page => !reviewed.has(page)) ?? null;
  return { reviewed: reviewed.size, total: pages.length, complete: nextPage === null, nextPage };
}

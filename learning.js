// All learning state is local. These pure functions also make scheduling testable.
const DAY = 24 * 60 * 60 * 1000;
const INTERVALS = [1, 3, 7, 14, 30];
export const STORAGE_KEY = 'teori-progress-v1';

export function parseProgress(raw, questions) {
  try {
    const data = JSON.parse(raw);
    if (data?.version !== 1 || !data.items || typeof data.items !== 'object') return {};
    const clean = {};
    for (const { id } of questions) {
      const item = data.items[id];
      if (!item || typeof item !== 'object') continue;
      const integers = ['seen', 'correct', 'streak', 'lastSeen', 'due'];
      if (!integers.every(key => Number.isSafeInteger(item[key]) && item[key] >= 0)) continue;
      if (typeof item.difficult !== 'boolean' || item.correct > item.seen || item.streak > item.correct) continue;
      clean[id] = { ...Object.fromEntries(integers.map(key => [key, item[key]])), difficult: item.difficult };
    }
    return clean;
  } catch {
    return {};
  }
}

export function shuffle(items, random = Math.random) {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

export function makeSession(questions, progress, { topic = 'all', mode = 'mixed', limit = 5, now = Date.now(), random = Math.random } = {}) {
  const eligible = questions.filter(q => (topic === 'all' || q.topic === topic) && (mode !== 'difficult' || progress[q.id]?.difficult));
  function priority(q) {
    const p = progress[q.id];
    if (p?.difficult) return 0;
    if (p && p.due <= now) return 1;
    if (!p) return 2;
    return 3;
  }
  // Randomize ties, then prioritize difficult and due questions before new ones.
  return shuffle(eligible, random).sort((a, b) => priority(a) - priority(b)).slice(0, limit);
}

export function recordAnswer(progress, id, correct, confident, now = Date.now()) {
  const old = progress[id] || { seen: 0, correct: 0, streak: 0 };
  const comfortable = correct && confident;
  const streak = comfortable ? old.streak + 1 : 0;
  return {
    ...progress,
    [id]: {
      seen: old.seen + 1,
      correct: old.correct + Number(correct),
      streak,
      difficult: !comfortable,
      lastSeen: now,
      due: comfortable ? now + INTERVALS[Math.min(streak - 1, INTERVALS.length - 1)] * DAY : now,
    },
  };
}

export function stats(questions, progress, now = Date.now()) {
  return {
    practiced: questions.filter(q => progress[q.id]?.seen > 0).length,
    difficult: questions.filter(q => progress[q.id]?.difficult).length,
    due: questions.filter(q => progress[q.id] && progress[q.id].due <= now).length,
  };
}

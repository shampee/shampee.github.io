import { shuffle } from './learning.js';

export const SIGNS_STORAGE_KEY = 'teori-signs-v1';

// Picks at most `count` signs from `pool` (already shuffled) with distinct
// names, skipping `excludeName`. Several real signs share an official name
// across codes (e.g. P1/P2/P3 and V1 are all "Stopp") — two options with
// identical visible text would be a broken choice, not just a hard one.
function distinctByName(pool, excludeName, count) {
  const seen = new Set([excludeName]);
  const result = [];
  for (const candidate of pool) {
    if (seen.has(candidate.name)) continue;
    seen.add(candidate.name);
    result.push(candidate);
    if (result.length === count) break;
  }
  return result;
}

// Builds the multiple-choice options for one flashcard: the correct sign plus
// `count - 1` distractors, preferring the same category so the choices stay
// genuinely confusable (e.g. other triangular warning signs), falling back to
// any other sign if the category doesn't have enough distinctly-named signs.
export function signOptions(sign, allSigns, count = 3, random = Math.random) {
  const sameCategory = shuffle(allSigns.filter(s => s.id !== sign.id && s.category === sign.category), random);
  let distractors = distinctByName(sameCategory, sign.name, count - 1);
  if (distractors.length < count - 1) {
    const everyone = shuffle(allSigns.filter(s => s.id !== sign.id), random);
    distractors = distinctByName(everyone, sign.name, count - 1);
  }
  return shuffle([sign, ...distractors], random);
}

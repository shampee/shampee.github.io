// Keep the original scenario IDs so existing practice history is usable.
import { QUESTIONS as STARTER_QUESTIONS, SOURCES as STARTER_SOURCES, CHECKED_ON } from './questions.js';
import { COURSE_QUESTIONS, COURSE_SOURCES } from './course.js';
export { TOPICS, CHECKED_ON } from './questions.js';
export { CHAPTERS, COURSE_GOALS } from './course.js';

const starterChapters = {
  'right-hand-junction': 'priority', 'pedestrian-crossing': 'vulnerable',
  'roundabout-entry': 'priority', 'fog-speed': 'roads', 'children-roadside': 'vulnerable',
  'winter-tyres': 'grip', 'tyre-tread': 'grip', 'tyre-pressure': 'environment',
  'red-light-planning': 'environment', 'phone-message': 'driver',
  'handsfree-distraction': 'driver', 'peer-pressure': 'driver',
};
export const QUESTIONS = [
  ...STARTER_QUESTIONS.map(q => ({ ...q, chapterId: starterChapters[q.id] })),
  ...COURSE_QUESTIONS,
];
export const SOURCES = {
  ...Object.fromEntries(Object.entries(STARTER_SOURCES).map(([id, s]) => [id, { ...s, checkedOn: CHECKED_ON }])),
  ...COURSE_SOURCES,
};

// Reading and self-assessment are separate from correct scenario answers.
export const COURSE_STORAGE_KEY = 'teori-course-v1';
export const RATINGS = { again: 'Jag behöver läsa och öva mer', explain: 'Jag kan förklara mina beslut' };

export function parseCourseProgress(raw, chapters) {
  try {
    const data = JSON.parse(raw);
    if (data?.version !== 1 || !data.items || typeof data.items !== 'object') return {};
    const result = {};
    for (const chapter of chapters) {
      const item = data.items[chapter.id];
      if (!item || typeof item !== 'object') continue;
      const ids = new Set(chapter.sections.map(s => s.id));
      result[chapter.id] = {
        read: Array.isArray(item.read) ? [...new Set(item.read.filter(id => ids.has(id)))] : [],
        rating: Object.hasOwn(RATINGS, item.rating) ? item.rating : '',
      };
    }
    return result;
  } catch { return {}; }
}

export function markSection(progress, chapterId, sectionId, read) {
  const old = progress[chapterId] || { read: [], rating: '' };
  const sections = new Set(old.read);
  if (read) sections.add(sectionId);
  else sections.delete(sectionId);
  return { ...progress, [chapterId]: { ...old, read: [...sections] } };
}

export function rateChapter(progress, chapterId, rating) {
  if (!Object.hasOwn(RATINGS, rating)) return progress;
  return { ...progress, [chapterId]: { read: [], ...progress[chapterId], rating } };
}

export function chapterStats(chapter, questions, answers, reading) {
  const own = questions.filter(q => q.chapterId === chapter.id);
  return {
    read: chapter.sections.filter(s => reading[chapter.id]?.read.includes(s.id)).length,
    sections: chapter.sections.length,
    practiced: own.filter(q => answers[q.id]?.seen > 0).length,
    comfortable: own.filter(q => answers[q.id]?.streak > 0 && !answers[q.id]?.difficult).length,
    questions: own.length,
  };
}

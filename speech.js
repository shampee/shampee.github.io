// Play prepared Swedish audio. Voice selection never depends on OS defaults.
export function questionClips(narration, questionId, optionOrder) {
  const question = narration.questions[questionId];
  return [question.question, ...optionOrder.flatMap((index, position) => [narration.labels[position], question.options[index]])];
}

export function createNarrator({ createAudio = () => new Audio(), onState = () => {} } = {}) {
  let generation = 0;
  let audio = null;
  let cancelClip = null;

  function stop() {
    generation++;
    cancelClip?.();
    cancelClip = null;
    if (audio) {
      audio.pause();
      audio.removeAttribute('src');
      audio.load();
      audio = null;
    }
    onState('idle');
  }

  async function play(clips) {
    stop();
    const current = generation;
    const player = createAudio();
    audio = player;
    onState('loading');
    try {
      for (const clip of clips) {
        if (current !== generation) return;
        player.src = clip.url;
        const finished = await new Promise((resolve, reject) => {
          function cleanup() {
            player.removeEventListener('ended', ended);
            player.removeEventListener('error', failed);
            player.removeEventListener('playing', playing);
            if (cancelClip === cancel) cancelClip = null;
          }
          function ended() { cleanup(); resolve(true); }
          function failed() { cleanup(); reject(new Error('Swedish audio could not be played')); }
          function playing() { if (current === generation) onState('playing'); }
          const cancel = () => { cleanup(); resolve(false); };
          cancelClip = cancel;
          player.addEventListener('ended', ended);
          player.addEventListener('error', failed);
          player.addEventListener('playing', playing);
          player.play().catch(error => { cleanup(); reject(error); });
        });
        if (!finished || current !== generation) return;
      }
      if (current === generation) stop();
    } catch {
      if (current !== generation) return;
      stop();
      onState('error');
    }
  }

  return { play, stop };
}

import { createEvent, createStore, combine } from 'effector';

export const addPoint = createEvent();
export const resetScore = createEvent();

const $currentScore = createStore(0)
	.on(addPoint, (n) => n + 1)
	.on(resetScore, () => 0);

const $bestScore = createStore(0).on(addPoint, (n) => {
	const currentScore = $currentScore.getState();
	return currentScore > n ? currentScore : n;
});

export const $score = combine({
	current: $currentScore,
	best: $bestScore,
});

import { createEvent, createStore, combine } from 'effector';
import { resetScore } from './score';
import { setLoading } from './pokemons';

export const nextLevel = createEvent();
const resetLevels = createEvent();
const $levelCounter = createStore(1)
	.on(nextLevel, (n) => {
		setLoading(true);
		return n + 1;
	})
	.on(resetLevels, () => 1);
const $levelCounterText = $levelCounter.map((n) => `current value = ${n}`);

export const setGameOver = createEvent();
export const playAgain = createEvent();

export const $isGameOver = $levelCounter
	.map((n) => n > 10)
	.on(setGameOver, () => {
		resetLevels();
		return true;
	})
	.on(playAgain, () => {
		resetScore();
		return false;
	});

export const $levelCounterCombined = combine({
	level: $levelCounter,
	text: $levelCounterText,
});

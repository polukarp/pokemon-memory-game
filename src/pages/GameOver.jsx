import React from 'react';
import { playAgain } from '../store/game';

const GameOver = () => {
	return (
		<div>
			<h1>Game Over</h1>
			<button onClick={playAgain}>Play again</button>
		</div>
	);
};

export default GameOver;

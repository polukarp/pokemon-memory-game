import React from 'react';
import { playAgain } from '../store/game';
import { useStore } from 'effector-react';
import { $score } from '../store/score';
import { motion } from 'framer-motion';

const GameOver = () => {
	const { current, best } = useStore($score);
	return (
		<div className="text-center">
			<h1 className="text-3xl font-bold mb-6">Game Over</h1>
			<p className="font-bold text-2xl">Your score: {current}</p>
			<p className="font-bold text-2xl mb-6">Best score: {best}</p>
			<motion.button
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.2 }}
				whileHover={{ scale: 1.1 }}
				whileTap={{ scale: 0.9 }}
				className="bg-black text-white w-72 h-16 rounded-lg font-bold"
				onClick={playAgain}>
				Play again
			</motion.button>
		</div>
	);
};

export default GameOver;

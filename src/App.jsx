import React from 'react';
import Level from './pages/Level';
import { $levelCounterCombined, $isGameOver } from './store/game';
import { useStore } from 'effector-react';
import GameOver from './pages/GameOver';
import MainLayout from './layouts/MainLayout';

function App() {
	const { level } = useStore($levelCounterCombined);
	const isGameOver = useStore($isGameOver);

	return <MainLayout>{!isGameOver ? <Level level={level} /> : <GameOver />}</MainLayout>;
}

export default App;

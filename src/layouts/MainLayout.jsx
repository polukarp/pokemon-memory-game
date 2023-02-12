import React from 'react';
import Navbar from '../components/Navbar';
import { useStore } from 'effector-react';
import { $score } from '../store/score';

const MainLayout = ({ children }) => {
	const { current, best } = useStore($score);
	return (
		<>
			<Navbar currentScore={current} bestScore={best} />

			<main className="px-2 pb-4 md:px-4">{children}</main>
		</>
	);
};

export default MainLayout;

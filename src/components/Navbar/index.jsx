import React from 'react';

const Navbar = ({ currentScore = 0, bestScore = 0 }) => {
	return (
		<header className="flex flex-col justify-between p-4">
			<h1 className="font-primary font-bold text-center">Memory game</h1>
			<div className="flex justify-around flex-wrap">
				<p>Current score: {currentScore}</p>
				<p>Best score: {bestScore}</p>
			</div>
		</header>
	);
};

export default Navbar;

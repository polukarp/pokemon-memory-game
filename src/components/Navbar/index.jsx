import React from 'react';

const Navbar = ({ currentScore = 0, bestScore = 0 }) => {
	return (
		<header className="flex flex-col justify-between py-4 px-2 bg-black text-white mb-8">
			<h1 className="font-primary font-bold text-center text-4xl mb-4 ">
				<span className=" text-yellow-300 ">Pokemon</span> Memory Game
			</h1>
			<div className="flex justify-between flex-wrap">
				<p>Current score: {currentScore}</p>
				<p>Best score: {bestScore}</p>
			</div>
		</header>
	);
};

export default Navbar;

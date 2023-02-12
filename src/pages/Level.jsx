import { useEffect, useState } from 'react';
import { usePokemons } from '../hooks/usePokemons';
import { $score, addPoint } from '../store/score';
import { setGameOver, nextLevel } from '../store/game';
import Card from '../components/Card';
import { useStore } from 'effector-react';

const Level = ({ level = 0 }) => {
	const { pokemons, setPokemons, loading, error } = usePokemons(level);
	const [chosenPokemons, setChosenPokemons] = useState([]);
	const { currentScore } = useStore($score);

	useEffect(() => {
		setChosenPokemons([]);
	}, [level]);

	const shufflePokemons = (pokemons) => {
		const shuffledPokemons = pokemons.sort(() => Math.random() - 0.5);
		setPokemons(shuffledPokemons);
	};

	const handlePokemonClick = (name) => {
		if (!chosenPokemons.includes(name)) {
			setChosenPokemons([...chosenPokemons, name]);
			shufflePokemons(pokemons);
			addPoint(currentScore);
			console.log(chosenPokemons);
		} else {
			setGameOver();
			setChosenPokemons([]);
		}
		if (chosenPokemons.length === pokemons.length - 1 && !chosenPokemons.includes(name)) {
			nextLevel();
		}
	};

	return (
		<div>
			<h2 className="text-center font-black text-4xl uppercase mb-8">Level {level}</h2>
			{error && <p className="text-center font-bold text-xl">{error}</p>}
			{loading && <p className="text-center font-bold text-xl">Loading...</p>}
			{!loading && (
				<div className="flex flex-wrap gap-4 justify-center items-center">
					{pokemons.map((pokemon) => (
						<Card
							handleClick={handlePokemonClick}
							name={pokemon.name}
							image={pokemon.image}
						/>
					))}
				</div>
			)}
		</div>
	);
};

export default Level;

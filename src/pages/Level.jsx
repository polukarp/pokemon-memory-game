import { useEffect, useState } from 'react';
import { usePokemons } from '../hooks/usePokemons';
import { addPoint } from '../store/score';
import { setGameOver, nextLevel } from '../store/game';
import Card from '../components/Card';

const Level = ({ level = 0 }) => {
	const { pokemons, setPokemons, loading } = usePokemons(level);
	const [chosenPokemons, setChosenPokemons] = useState([]);

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
			addPoint();
		} else {
			setGameOver();
			setChosenPokemons([]);
		}
		if (chosenPokemons.length === pokemons.length - 1) {
			nextLevel();
		}
	};

	return (
		<div>
			<h2 className="text-center font-black text-xl mb-4">Level {level}</h2>
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

import { useStore } from 'effector-react';
import { useEffect } from 'react';
import { setPokemons, $pokemonsCombined } from '../store/pokemons';

export const usePokemons = (level = 1) => {
	const API_URL = 'https://pokeapi.co/api/v2/';
	const { pokemons, loading } = useStore($pokemonsCombined);

	useEffect(() => {
		const MAX_POKEMONS = 1279;
		const LEVEL_LIMIT = level + 2;
		const OFFSET = Math.random() * MAX_POKEMONS - LEVEL_LIMIT;

		fetch(`${API_URL}pokemon?limit=${LEVEL_LIMIT}}&offset=${OFFSET}`)
			.then((res) => res.json())
			.then((data) => {
				const { results } = data;
				const newPokemons = results.map((pokemon) => {
					const { name, url } = pokemon;
					const pokemonId = url.split('/')[url.split('/').length - 2];
					const newPokemon = {
						id: pokemonId,
						name,
						image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`,
					};
					return newPokemon;
				});
				setPokemons(newPokemons);
			});
	}, [level]);

	return { pokemons, setPokemons, loading };
};

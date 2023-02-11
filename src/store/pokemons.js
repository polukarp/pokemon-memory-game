import { createEvent, createStore, combine } from 'effector';

export const setPokemons = createEvent();
export const setLoading = createEvent();

export const $pokemons = createStore([]).on(setPokemons, (_, payload) => payload);
export const $loading = createStore(true)
	.on(setPokemons, () => false)
	.on(setLoading, (_, payload) => payload);

export const $pokemonsCombined = combine({
	pokemons: $pokemons,
	loading: $loading,
});

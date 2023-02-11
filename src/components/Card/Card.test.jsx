import { render, screen } from '@testing-library/react';
import Card from './index';

test('renders card', () => {
	render(<Card name={'Charizard'} />);
	const cardElement = screen.getByText(/Charizard/i);
	expect(cardElement).toBeInTheDocument();
});

//make it case sensitive
test('renders another card case sensitive', () => {
	render(<Card name={'squirtle'} />);
	expect(screen.getByText('squirtle')).toBeInTheDocument();
});

test('renders card with image', () => {
	render(
		<Card name={'Charmander'} image={'https://pokeapi.co/api/v2/pokemon-species/4/'} />,
	);
	expect(screen.getByAltText('Charmander')).toBeInTheDocument();
	expect(screen.getByAltText('Charmander')).toHaveAttribute(
		'src',
		'https://pokeapi.co/api/v2/pokemon-species/4/',
	);
	expect(screen.getByAltText('Charmander')).toHaveAttribute('alt', 'Charmander');
});

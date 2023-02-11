import { render, screen } from '@testing-library/react';
import App from './App';
import Card from './components/Card';

const api = 'https://pokeapi.co/api/v2/pokemon';
//renders header
beforeAll(async () => {
	const response = await fetch(api).then((res) => res.json());
	expect(response).toHaveProperty('results');
});

describe('App', () => {
	it('renders header', () => {
		render(<App />);
		expect(screen.getByText('Memory game')).toBeInTheDocument();
	});
	it('renders pokemon cards', () => {
		render(<App />);
	});
});

import { render, screen } from '@testing-library/react';

import Navbar from '.';

test('renders header', () => {
	render(<Navbar />);
	expect(screen.getByText('Memory game')).toBeInTheDocument();
});

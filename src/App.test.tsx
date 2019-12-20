import React from 'react';
import { render, cleanup } from '@testing-library/react';
import App from './App';

describe('Base test', (): void => {
	afterEach(cleanup);
	it('map renders', () => {
		render(<App />);
	});
});

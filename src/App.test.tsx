import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';

describe('App', (): void => {
	it('app renders', () => {
		const app = renderer.create(<App />);
		expect(app.toJSON()).toMatchSnapshot();
	});
});

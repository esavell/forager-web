import React from 'react';
import './App.css';
import MarkerMap from './Components/MarkerMap';
import MarkerFilter from './Components/MarkerFilter';
import store from './store';
import { Provider } from 'react-redux';

const App: React.FC = () => {
	return (
		<Provider store={store}>
			<div className="app">
				<div className="header">Forager</div>
				<h1>Find foragable food in Christchurch’s Red Zone</h1>
				<MarkerFilter />
				<MarkerMap />
			</div>
		</Provider>
	);
};

export default App;

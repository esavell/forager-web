import React from 'react';
import './App.css';
import Map from './Components/Map';
import MarkerFilter from './Components/MarkerFilter';
import store from './store';
import { Provider } from 'react-redux';
import 'semantic-ui-css/semantic.min.css';

const App: React.FC = () => {
	return (
		<Provider store={store}>
			<div className="app">
				<div className="header">Forager</div>
				<h1>Find foragable food in Christchurch’s Red Zone</h1>
				<MarkerFilter {...store.getState().filter} />
				<Map />
			</div>
		</Provider>
	);
};

export default App;

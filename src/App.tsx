import React from 'react';
import './App.css';
import Map from './Components/Map';

const App: React.FC = () => {
	return (
		<div className="app">
			<div className="header">Forager</div>
			<h1>Find foragable food in Christchurch’s Red Zone</h1>
			<Map />
		</div>
	);
};

export default App;

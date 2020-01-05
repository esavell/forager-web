import { TreeType, Month } from '../spec';

export interface Filter {
	selectedTypes: TreeType[];
	maxTreeHeightM: number;
	maxTreeHeightEnabled: boolean;
	curbsideOnly: boolean;
	inSeasonMonthStart: Month;
	inSeasonMonthEnd: Month;
}

export interface TreeMarker {
	id: number;
	location: LatLon;
	type: TreeType;
}

export interface LatLon {
	latitude: number;
	longitude: number;
}

export interface Viewport {
	height: number | string;
	width: number | string;
	zoom: number;
	latitude: number;
	longitude: number;
}

export interface Map {
	trackUser: boolean;
	userLocation?: LatLon;
}

export interface State {
	filter: Filter;
	map: Map;
}

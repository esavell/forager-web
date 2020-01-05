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
	heightM: number;
	isCurbside: boolean;
	seasonStart: Month;
	seasonEnd: Month;
}

export interface LatLon {
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
	markers: TreeMarker[];
}

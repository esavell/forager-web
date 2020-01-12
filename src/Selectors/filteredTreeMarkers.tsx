import { State, TreeMarker } from '../state';
import { createSelector } from 'reselect';
import { Month, TreeType } from '../spec';

const getAllMarkers: (s: State) => TreeMarker[] = (state) => state.markers;
const getSelectedTypes: (s: State) => TreeType[] = (state) => state.filter.selectedTypes;
const getSeasonStart: (s: State) => Month = (state) => state.filter.inSeasonMonthStart;
const getSeasonEnd: (s: State) => Month = (state) => state.filter.inSeasonMonthEnd;
const getMaxTreeHeight: (s: State) => number = (state) =>
	state.filter.maxTreeHeightEnabled ? state.filter.maxTreeHeightM : Number.MAX_VALUE;
const getCurbsideRestriction: (s: State) => boolean = (state) => state.filter.curbsideOnly;

export const selectFilteredMarkers = createSelector(
	getAllMarkers,
	getSelectedTypes,
	getSeasonStart,
	getSeasonEnd,
	getMaxTreeHeight,
	getCurbsideRestriction,
	(markers, selectedTypes, seasonStart, seasonEnd, treeHeight, curbsideOnly) => {
		if (!markers) {
			return [];
		}
		return markers.filter((marker: TreeMarker) => {
			if (curbsideOnly && !marker.isCurbside) {
				return false;
			}
			if (marker.heightM > treeHeight) {
				return false;
			}
			//TODO Bitwise & on bit arrays of selected season range and season range of marker
			// e.g in season Sep - Jan => 100000001111
			//    search for Nov - Dec => 000000000011
			// 100000001111 & 000000000011 == true
			if (!selectedTypes.find((t) => t === marker.type)) {
				return false;
			}
			return true;
		});
	},
);

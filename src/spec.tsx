export enum TreeType {
	Apple = 'apple',
	Crabapple = 'crabapple',
	Lemon = 'lemon',
	Orange = 'orange',
	Mandarin = 'mandarin',
	Walnut = 'walnut',
	Chestnut = 'chestnut',
	Hazelnut = 'hazelnut',
	Blackberry = 'blackberry',
	Gooseberry = 'gooseberry',
	Apricot = 'apricot',
	Plum = 'plum',
	Cherry = 'cherry',
}

export type TreeTypeDict = { [treeCategory: string]: TreeType[] };

export interface MonthRange {
	monthStart: Month;
	monthEnd: Month;
}

export const TreeTypes: TreeTypeDict = {
	'Citrus': [TreeType.Lemon, TreeType.Orange, TreeType.Mandarin],
	'Apple': [TreeType.Apple, TreeType.Crabapple],
	'Nut': [TreeType.Walnut, TreeType.Chestnut, TreeType.Hazelnut],
	'Berry': [TreeType.Blackberry, TreeType.Gooseberry],
	'Stone Fruit': [TreeType.Apricot, TreeType.Plum, TreeType.Cherry],
};

export enum Month {
	Jan = 'January',
	Feb = 'February',
	Mar = 'March',
	Apr = 'April',
	May = 'May',
	Jun = 'June',
	Jul = 'July',
	Aug = 'August',
	Sep = 'September',
	Oct = 'October',
	Nov = 'November',
	Dec = 'December',
}

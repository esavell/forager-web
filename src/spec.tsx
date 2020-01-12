export enum TreeType {
	Crabapple = 'crabapple',
	Apple = 'apple',
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
	'Apples': [TreeType.Apple, TreeType.Crabapple],
	'Nuts': [TreeType.Walnut, TreeType.Chestnut, TreeType.Hazelnut],
	'Berries': [TreeType.Blackberry, TreeType.Gooseberry],
	'Stone Fruits': [TreeType.Apricot, TreeType.Plum, TreeType.Cherry],
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

export interface IDestination {
	name: string;
	images: any;
	description: string;
	distance: string;
	travel: string;
	category: Category[];
}

export type Category = 'Moon' | 'Mars' | 'Europa' | 'Titan' | 'all';

export interface INav {
	route: string;
	number: string;
	title: string;
}

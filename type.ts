export interface Products {
	_id: number;
	title: String;
	isNew: boolean;
	oldPrice: number;
	price: number;
	description: string;
	category: string;
	image: string;
	rating: number;
	quantity: number;
}

export interface ItemProps {
	item: Products;
}

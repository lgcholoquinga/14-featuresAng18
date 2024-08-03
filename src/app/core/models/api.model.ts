export interface Pagination {
	page: number;
	per_page: number;
	total: number;
	total_pages: number;
}

export interface Info {
	count: number;
	pages: number;
	next: string;
	prev: string;
}

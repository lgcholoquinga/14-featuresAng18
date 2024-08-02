import { Pagination } from './api.model';

export interface State {
	users: User[];
	loading: boolean;
}

export interface User {
	id: number;
	email: string;
	first_name: string;
	last_name: string;
	avatar: string;
}

export interface UserInfo extends Pagination {
	data: User[];
}

export interface UserDetailInfo {
	data: User;
}

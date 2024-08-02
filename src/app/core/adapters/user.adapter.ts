import { User, UserInfo } from '@core/models';
import { UserDetailInfo } from '../models/user.model';

export const UserAdapter = (userInfo: UserInfo): User[] => {
	return userInfo.data;
};

export const UserDetailAdapter = (userDetailInfo: UserDetailInfo): User => {
	return userDetailInfo.data;
};

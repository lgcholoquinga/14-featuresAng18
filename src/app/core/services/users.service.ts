import { HttpClient } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';

import { Observable, map } from 'rxjs';

import { UserAdapter, UserDetailAdapter } from '@core/adapters';
import { State, User, UserDetailInfo, UserInfo } from '@core/models';

import { environment } from 'environments/environment';

@Injectable({
	providedIn: 'root',
})
export class UsersService {
	private http = inject(HttpClient);
	private readonly userUrl = `${environment.URL_API_REQ}/users`;
	#state = signal<State>({ loading: true, users: [] });

	public users = computed(() => this.#state().users);
	public loading = computed(() => this.#state().loading);

	constructor() {
		this.getUsers().subscribe((users: User[]) => this.#state.set({ users, loading: false }));
	}

	getUsers(): Observable<User[]> {
		return this.http
			.get<UserInfo>(this.userUrl, { params: { per_page: 100, page: 1 } })
			.pipe(map((data) => UserAdapter(data)));
	}

	getUserById(id: number): Observable<User> {
		return this.http.get<UserDetailInfo>(`${this.userUrl}/${id}`).pipe(map((data) => UserDetailAdapter(data)));
	}
}

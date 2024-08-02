import { AsyncPipe, JsonPipe } from '@angular/common';
import { Component, OnInit, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';

import { User } from '@core/models';
import { UsersService } from '@core/services';
import { TitleComponent } from '@shared/components';
import { Observable, switchMap } from 'rxjs';

@Component({
	selector: 'app-user',
	standalone: true,
	imports: [AsyncPipe, JsonPipe, TitleComponent],
	templateUrl: './user.component.html',
	styles: `
		h2 {
			margin: 20px 0px;
		}
	`,
})
export default class UserComponent implements OnInit {
	private route = inject(ActivatedRoute);
	private userService = inject(UsersService);

	public userSignal = toSignal(this.route.params.pipe(switchMap(({ id }) => this.userService.getUserById(id))));
	public user$?: Observable<User>;

	public titlePage = computed(() => {
		if (this.userSignal()) {
			return `User Detail - ${this.userSignal()?.first_name} ${this.userSignal()?.last_name}`;
		}

		return 'User Detail';
	});

	ngOnInit(): void {
		const id = this.route.snapshot.params['id'];
		this.user$ = this.userService.getUserById(id);
	}
}

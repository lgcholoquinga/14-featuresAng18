import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { UsersService } from '@core/services';
import { TitleComponent } from '@shared/components';

@Component({
	selector: 'app-users',
	standalone: true,
	imports: [TitleComponent, RouterLink],
	templateUrl: './users.component.html',
	styleUrl: './users.component.scss',
})
export default class UsersComponent {
	public userService = inject(UsersService);
}

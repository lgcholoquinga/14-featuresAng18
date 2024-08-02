import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
	selector: 'app-not-found',
	standalone: true,
	imports: [RouterLink],
	template: `
		<section class="not-found">
			<h3 class="not-found__heading">Page Not Found</h3>
			<button class="not-found__button" routerLink="/features">
				Back to top
			</button>
		</section>
	`,
	styles: `
		.not-found {
			width: 100%;
			min-height: 100dvh;
			background-color: #d1d5db;
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
			gap: 10px;

			&__heading {
				text-transform: uppercase;
				font-size: 25px;
			}

			&__button {
				width: auto;
				padding: 10px 18px;
				cursor: pointer;
				background-color: #6366f1;
				outline: none;
				border: none;
				border-radius: 4px;

				&:hover {
					background-color: #4f46e5;
				}
			}
		}
	`,
})
export default class NotFoundComponent {}

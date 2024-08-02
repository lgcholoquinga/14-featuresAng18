import { Component } from '@angular/core';
import { HeavyLoadersFastComponent, TitleComponent } from '@shared/components';

@Component({
	selector: 'app-defer-options',
	standalone: true,
	imports: [TitleComponent, HeavyLoadersFastComponent],
	templateUrl: './defer-options.component.html',
	styles: `
		.box {
			width: 250px;
			height: 250px;
			background-color: #cffafe;
			border-radius: 10px;
			display: flex;
			justify-content: center;
			align-items: center;
			margin-bottom: 10px;
		}

		button {
			height: 48px;
			padding: 10px 20px;
			cursor: pointer;
			background-color: #075985;
			margin: 10px 0;
			border: none;

			&:hover {
				background-color: #0ea5e9;
			}
		}
	`,
})
export default class DeferOptionsComponent {}

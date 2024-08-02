import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-heavy-loaders-slow',
	standalone: true,
	imports: [],
	template: `<div class="box">
		<h1>{{ title }}</h1>
	</div>`,
	styles: `
		.box {
			width: 300px;
			height: 300px;
			background-color: blue;
			display: flex;
			justify-content: center;
			align-items: center;
			border-radius: 4px;
			margin-bottom: 4px;

			h1 {
				color: white;
			}
		}
	`,
})
export class HeavyLoadersSlowComponent {
	@Input({ required: true }) title = '';

	constructor() {
		console.log('Heavy Loder Component Ready');
	}
}

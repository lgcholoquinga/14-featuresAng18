import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-heavy-loaders-fast',
	standalone: true,
	imports: [CommonModule],
	template: ` <section class="box" [ngClass]="cssClass"><ng-content /></section>`,
	styles: `
		.box {
			width: 250px;
			height: 250px;
			background-color: #67e8f9;
			border-radius: 10px;
			display: flex;
			justify-content: center;
			align-items: center;
			margin-bottom: 10px;
		}
	`,
})
export class HeavyLoadersFastComponent {
	@Input({ required: true }) cssClass = '';

	constructor() {
		console.log('Inited Component Fast');
	}
}

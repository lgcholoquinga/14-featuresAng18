import { Component } from '@angular/core';
import { HeavyLoadersSlowComponent, TitleComponent } from '@shared/components';

@Component({
	selector: 'app-defer-views',
	standalone: true,
	imports: [HeavyLoadersSlowComponent, TitleComponent],
	templateUrl: './defer-views.component.html',
	styles: `
		.box {
			width: 300px;
			height: 300px;
			background-color: red;
			display: flex;
			justify-content: center;
			align-items: center;
			border-radius: 4px;
			margin-bottom: 4px;
		}
	`,
})
export default class DeferViewsComponent {
	public phones = ['Iphone 1', 'Iphone 2', 'Iphone 3', 'Iphone 4', 'Iphone 5', 'Iphone 6'];
}

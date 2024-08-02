import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

import { TitleComponent } from '@shared/components';

@Component({
	selector: 'app-change-detection',
	standalone: true,
	imports: [TitleComponent, JsonPipe],
	templateUrl: './change-detection.component.html',
	styles: ``,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ChangeDetectionComponent {
	public frameworkAsSignal = signal({
		name: 'Angular',
		releaseDate: 2016,
	});

	public frameworkAsProperty = {
		name: 'Angular',
		releaseDate: 2016,
	};

	constructor() {
		setTimeout(() => {
			//this.frameworkAsSignal.set({ name: 'React Signal', releaseDate: 2020 });
			this.frameworkAsProperty.name = 'React';
			console.log('Done');
		}, 3000);
	}
}

import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';

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
	public currentFramework = computed(() => `Change Detection: ${this.frameworkAsSignal().name}`);

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
			this.frameworkAsSignal.update((value) => ({ ...value, name: 'React Signal' }));
		}, 3000);
	}
}

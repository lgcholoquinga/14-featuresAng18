import { Component, signal } from '@angular/core';
import { TitleComponent } from '@shared/components';

type Grade = 'A' | 'B' | 'F';

@Component({
	selector: 'app-control-flow',
	standalone: true,
	imports: [TitleComponent],
	templateUrl: './control-flow.component.html',
	styles: ``,
})
export default class ControlFlowComponent {
	public isAdmin = signal(false);
	public userName = signal('lgcholoquinga');
	public grade = signal<Grade>('F');
	public frameworks = signal(['Angular', 'React', 'VueJS', 'Quiz']);

	onChangeRole() {
		this.isAdmin.update(value => !value);
	}
}

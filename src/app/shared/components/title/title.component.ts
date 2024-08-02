import { Component, input } from '@angular/core';

@Component({
	selector: 'app-title',
	standalone: true,
	imports: [],
	template: `
		<h1 style="color: #3730a3;font-size: 30px;">{{ title() }}</h1>
		<hr style="margin-bottom: 20px;" />
	`,
	styles: ``,
})
export class TitleComponent {
	title = input.required<string>();
}

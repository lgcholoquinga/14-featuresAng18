import { Component, input, output } from '@angular/core';
import { Character } from '@core/models/character.model';

@Component({
	selector: 'app-character-card',
	standalone: true,
	imports: [],
	templateUrl: './character-card.component.html',
	styleUrl: './character-card.component.scss',
})
export class CharacterCardComponent {
	character = input.required<Character>();
	onDetail = output<number>();

	onViewDetail(id: number) {
		this.onDetail.emit(id);
	}
}

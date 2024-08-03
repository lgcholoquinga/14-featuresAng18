import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';

import { CharactersService } from '@core/services';
import { CharacterCardComponent } from '@rickymorty/components';

@Component({
	selector: 'app-character-list',
	standalone: true,
	imports: [AsyncPipe, CharacterCardComponent],
	templateUrl: './character-list.component.html',
	styleUrl: './character-list.component.scss',
})
export default class CharacterListComponent {
	private characterService = inject(CharactersService);

	public characters$ = this.characterService.getCharacters();
}

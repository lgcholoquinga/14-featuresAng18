import { AsyncPipe, JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CharactersService } from '@core/services';
import { switchMap } from 'rxjs';

@Component({
	selector: 'app-character-detail',
	standalone: true,
	imports: [JsonPipe, AsyncPipe],
	templateUrl: './character-detail.component.html',
	styleUrl: './character-detail.component.scss',
})
export default class CharacterDetailComponent {
	private router = inject(Router);
	private route = inject(ActivatedRoute);
	private characterService = inject(CharactersService);
	public character$ = this.route.params.pipe(switchMap(({ id }) => this.characterService.getCharacterById(id)));

	onNavigateHome() {
		this.router.navigateByUrl('/ricky-morty');
	}
}

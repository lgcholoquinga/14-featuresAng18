import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import { CharacterAdapter } from '@core/adapters/character.adapter';
import { Character, CharacterInfo } from '@core/models/character.model';

import { environment } from 'environments/environment';
import { Observable, map } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class CharactersService {
	private charcterUrl = `${environment.URL_API_MORTY}/character`;
	private http = inject(HttpClient);

	getCharacters(): Observable<Character[]> {
		return this.http.get<CharacterInfo>(this.charcterUrl).pipe(map((data) => CharacterAdapter(data)));
	}
}

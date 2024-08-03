import { Info } from './api.model';

enum Gender {
	'MALE' = 'Male',
	'FEMALE' = 'Female',
	'GENDERLESS' = 'Genderless',
	'UNKNOWN' = 'unknown',
}

export interface CharacterInfo {
	info: Info;
	results: Character[];
}

export interface LinkedElement {
	name: string;
	url: string;
}

export type Origin = LinkedElement;
export type Location = LinkedElement;

export interface Character {
	id: number;
	name: string;
	status: string;
	species: string;
	type: string;
	gender: Gender;
	origin: Origin;
	location: Location;
	image: string;
	episode: string[];
	url: string;
	created: string;
}

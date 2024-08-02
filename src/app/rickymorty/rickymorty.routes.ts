import { Routes } from '@angular/router';

export const RICKYMORTY_ROUTES: Routes = [
	{
		path: '',
		title: 'Ricky-Morty',
		loadComponent: () => import('./rickymorty.component'),
		children: [
			{
				path: 'home',
				loadComponent: () => import('./pages/character-list/character-list.component'),
			},
			{
				path: '',
				redirectTo: 'home',
				pathMatch: 'full',
			},
		],
	},
];

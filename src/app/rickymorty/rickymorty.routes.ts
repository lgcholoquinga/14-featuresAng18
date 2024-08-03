import { Routes } from '@angular/router';

export const RICKYMORTY_ROUTES: Routes = [
	{
		path: '',
		title: 'Ricky-Morty',
		loadComponent: () => import('./rickymorty.component'),
		children: [
			{
				path: 'home',
				title: 'Home',
				loadComponent: () => import('./pages/character-list/character-list.component'),
			},
			{
				path: 'character/:id',
				title: 'Character',
				loadComponent: () => import('./pages/character-detail/character-detail.component'),
			},
			{
				path: '',
				redirectTo: 'home',
				pathMatch: 'full',
			},
		],
	},
];

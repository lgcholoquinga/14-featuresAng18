import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: 'features',
		loadChildren: () =>
			import('./features/features.routes').then(route => route.FEATURES_ROUTES),
	},
	{
		path: 'not-found',
		loadComponent: () =>
			import('./shared/components/not-found/not-found.component'),
	},
	{
		path: '',
		redirectTo: '/features',
		pathMatch: 'full',
	},
	{
		path: '**',
		redirectTo: '/not-found',
	},
];

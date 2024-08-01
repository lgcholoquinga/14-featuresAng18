import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: 'features',
		loadChildren: () => import('./features/features.routes').then((route) => route.FEATURES_ROUTES),
	},
	{
		path: '',
		redirectTo: '/features',
		pathMatch: 'full',
	},
];

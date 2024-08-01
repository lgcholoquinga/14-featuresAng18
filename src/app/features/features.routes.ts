import { Routes } from '@angular/router';

export const FEATURES_ROUTES: Routes = [
	{
		path: '',
		title: 'Features',
		loadComponent: () => import('./features.component'),
		children: [
			{
				path: 'change-detection',
				title: 'Change Detection',
				loadComponent: () => import('./pages/change-detection/change-detection.component'),
			},
			{
				path: 'control-flow',
				title: 'Control Flow',
				loadComponent: () => import('./pages/control-flow/control-flow.component'),
			},
			{
				path: 'defer-options',
				title: 'Defer Options',
				loadComponent: () => import('./pages/defer-options/defer-options.component'),
			},
			{
				path: 'defer-views',
				title: 'Defer Views',
				loadComponent: () => import('./pages/defer-views/defer-views.component'),
			},
			{
				path: 'view-transition',
				title: 'View Transitions',
				loadComponent: () => import('./pages/view-transition/view-transition.component'),
			},
			{
				path: 'users-list',
				title: 'Users',
				loadComponent: () => import('./pages/users/users.component'),
			},
			{
				path: 'user/:id',
				title: 'User View',
				loadComponent: () => import('./pages/user/user.component'),
			},
			{
				path: '',
				redirectTo: 'control-flow',
				pathMatch: 'full',
			},
		],
	},
];

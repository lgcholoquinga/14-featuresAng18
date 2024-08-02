import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideMenuComponent } from '@shared/components';

@Component({
	selector: 'app-features',
	standalone: true,
	imports: [RouterOutlet, SideMenuComponent],
	templateUrl: './features.component.html',
	styleUrl: './features.component.scss',
})
export default class FeaturesComponent {}

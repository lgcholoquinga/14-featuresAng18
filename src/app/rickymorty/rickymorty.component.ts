import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
	selector: 'app-rickymorty',
	standalone: true,
	imports: [RouterOutlet],
	templateUrl: './rickymorty.component.html',
	styleUrl: './rickymorty.component.scss',
})
export default class RickymortyComponent {}

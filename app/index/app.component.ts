import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { HighlightDirective } from '../directive/highlight.directive';
import { HeroService } from '../service/hero.service';
@Component({
	//moduleId: module.id,
	selector: 'my-app',
	template: `
		<h1 myHighlight="#cac">{{title}}</h1>
		<nav myHighlight>
			<a [routerLink]="['/dashboard']" routerLinkActive="active">Dashboard</a>
			<a [routerLink]="['/heroes']" routerLinkActive="active">Heroes</a>
		</nav>
		<router-outlet></router-outlet>
	`,
	directives: [ROUTER_DIRECTIVES, HighlightDirective],
	providers: [HeroService]
})
export class AppComponent implements OnInit {
	title = 'Tour of Heroes';

	constructor() {}

	ngOnInit() {
		
	}
}
	
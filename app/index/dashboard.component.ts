import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from '../bean/hero';
import { HeroService } from '../service/hero.service';
@Component({
	//moduleId: module.id,
	selector: 'my-dashboard',
	templateUrl: './app/index/dashboard.component.html'
})
export class DashboardComponent implements OnInit {
	
	heroes: Hero[] = [];

	constructor(private router: Router, private heroService: HeroService) {}

	ngOnInit() {
		this.heroService.getHeroes()
			.then(heroes => this.heroes = heroes.slice(1, 5));
	}

	gotoDetail(hero: Hero) {
	  let link = ['/detail', hero.id];
	  this.router.navigate(link);
	}
}
	
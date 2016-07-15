import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { Hero } from '../bean/hero';
import { HeroService } from '../service/hero.service'
import { HeroDetailComponent } from '../detail/hero-detail.component'

@Component({
	//moduleId: module.id,
	selector: 'my-heroes',
	templateUrl: './app/index/heroes.component.html',
	directives: [HeroDetailComponent],
	styleUrls: ['./app/index/heroes.component.css']
})
export class HeroesComponent implements OnInit {
	error: any;
	addingHero = false;
	heroes : Hero[];

	title = 'Tour of Heores';

	selectedHero: Hero;

	constructor(private router: Router ,private heroService: HeroService) {}

	ngOnInit() {
		this.getHeroes();
	}

	onSlect(hero: Hero) {
		this.selectedHero = hero;
	}

	addHero() {
	  this.addingHero = true;
	  this.selectedHero = null;
	}

	close(savedHero: Hero) {
	  this.addingHero = false;
	  if (savedHero) { this.getHeroes(); }
	}

	deleteHero(hero: Hero, event: any) {
	  event.stopPropagation();
	  this.heroService
	      .delete(hero)
	      .then(res => {
	        this.heroes = this.heroes.filter(h => h !== hero);
	        if (this.selectedHero === hero) { this.selectedHero = null; }
	      })
	      .catch(error => this.error = error);
	}

	gotoDetail() {
	    this.router.navigate(['/detail', this.selectedHero.id]);
	}

	getHeroes() {
		this.heroService.getHeroes()
			.then(heroes => this.heroes = heroes)
	}
}

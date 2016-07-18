import { Component, OnInit, Input,
  trigger,
  state,
  style,
  transition,
  animate } from '@angular/core';
import { Router } from '@angular/router'

import { Hero } from '../bean/hero';
import { HeroService } from '../service/hero.service'
import { HeroDetailComponent } from '../detail/hero-detail.component'

@Component({
	//moduleId: module.id,
	selector: 'my-heroes',
	templateUrl: './app/index/heroes.component.html',
	directives: [HeroDetailComponent],
	styleUrls: ['./app/index/heroes.component.css'],
	animations: [
    trigger('heroState', [
      state('inactive', style({
        backgroundColor: '#eee',
        transform: 'scale(1)'
      })),
      state('active',   style({
        backgroundColor: '#cfd8dc',
        transform: 'scale(1.1)'
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ])
  ]
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
		hero.state = (hero.state === 'active' ? 'inactive' : 'active');
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

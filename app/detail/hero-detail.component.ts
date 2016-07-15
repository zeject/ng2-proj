import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Hero } from '../bean/hero';
import { HeroService } from '../service/hero.service';

@Component({
	//moduleId: module.id,
	selector: 'my-hero-detail',
	template: `
		<div *ngIf="hero">
			<h2>{{hero.name}} details!</h2>
			<div><label>id: </label>{{hero.id}}</div>
			<div>
				<label>name: </label>
				<input [(ngModel)]="hero.name" placeholder="name">
			</div>
		</div>
		<button (click)="goBack()">Back</button>
	`
})
export class HeroDetailComponent implements OnInit {
	hero: Hero;
	sub: any;

	constructor(
	  private heroService: HeroService,
	  private route: ActivatedRoute) {
	}

	ngOnInit() {
		this.sub = this.route.params.subscribe(params => {
	      let id = +params['id'];
	      this.heroService.getHero(id)
	        .then(hero => this.hero = hero);
	    });
	}

	ngOnDestroy() {
	  this.sub.unsubscribe();
	}

	goBack() {
	  window.history.back();
	}
}
	
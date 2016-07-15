import { Component, EventEmitter, Input, OnInit, OnDestroy, Output } from '@angular/core';
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
		<button (click)="save()">Save</button>
	`
})
export class HeroDetailComponent implements OnInit {
	@Input() hero: Hero;
	@Output() close = new EventEmitter();
	error: any;
	sub: any;
	navigated = false;

	constructor(
	  private heroService: HeroService,
	  private route: ActivatedRoute) {
	}

	ngOnInit() {
		this.sub = this.route.params.subscribe(params => {
	      if (params['id'] !== undefined) {
            let id = +params['id'];
            this.navigated = true;
            this.heroService.getHero(id)
                .then(hero => this.hero = hero);
          } else {
            this.navigated = false;
            this.hero = new Hero();
          }
	    });
	}

	save() {
	  this.heroService
	      .save(this.hero)
	      .then(hero => {
	        this.hero = hero; // saved hero, w/ id if new
	        this.goBack(hero);
	      })
	      .catch(error => this.error = error); // TODO: Display error message
	}

	goBack(savedHero: Hero = null) {
	  this.close.emit(savedHero);
	  if (this.navigated) { window.history.back(); }
	}

	ngOnDestroy() {
	  this.sub.unsubscribe();
	}
}
	
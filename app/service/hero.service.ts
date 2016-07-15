import { Injectable } from '@angular/core';
import { HEROES } from '../bean/mock-heroes'

@Injectable()
export class HeroService {
	
	constructor() {}

	getHeroes() {
		return Promise.resolve(HEROES);
	}

	getHero(id: number) {
	  return this.getHeroes()
	             .then(heroes => heroes.find(hero => hero.id === id));
	}
}
	
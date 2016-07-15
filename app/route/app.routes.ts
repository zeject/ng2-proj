import { provideRouter, RouterConfig } from '@angular/router'
import { HeroesComponent } from '../index/heroes.component'

import { DashboardComponent } from '../index/dashboard.component'
import { HeroDetailComponent } from '../detail/hero-detail.component'
const routes: RouterConfig = [
	{
	  path: '',
	  redirectTo: '/dashboard',
	  pathMatch: 'full'
	},{
	  path: 'detail/:id',
	  component: HeroDetailComponent
	},{
	  path: 'dashboard',
	  component: DashboardComponent
	},{
		path: 'heroes',
		component: HeroesComponent
	}
]

export const APP_ROUTER_PROVIDERS = [
	provideRouter(routes)
]
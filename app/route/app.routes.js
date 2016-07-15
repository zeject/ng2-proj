"use strict";
var router_1 = require('@angular/router');
var heroes_component_1 = require('../index/heroes.component');
var dashboard_component_1 = require('../index/dashboard.component');
var hero_detail_component_1 = require('../detail/hero-detail.component');
var routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    }, {
        path: 'detail/:id',
        component: hero_detail_component_1.HeroDetailComponent
    }, {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent
    }, {
        path: 'heroes',
        component: heroes_component_1.HeroesComponent
    }
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map
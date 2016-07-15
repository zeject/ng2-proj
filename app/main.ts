import { XHRBackend } from '@angular/http';

import { InMemoryBackendService, SEED_DATA } from 'angular2-in-memory-web-api';
import { InMemoryDataService }               from './bean/in-memory-data.service';

import { bootstrap } from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http'

import { AppComponent } from './index/app.component';
import { APP_ROUTER_PROVIDERS } from './route/app.routes'

bootstrap(AppComponent, [
	APP_ROUTER_PROVIDERS, 
	HTTP_PROVIDERS,
	{ provide: XHRBackend, useClass: InMemoryBackendService },
    { provide: SEED_DATA, useClass: InMemoryDataService }
]);
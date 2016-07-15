import { bootstrap } from '@angular/platform-browser-dynamic';

import { AppComponent } from './index/app.component';
import { APP_ROUTER_PROVIDERS } from './route/app.routes'

bootstrap(AppComponent, [APP_ROUTER_PROVIDERS]);
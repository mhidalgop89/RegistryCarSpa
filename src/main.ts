import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
//import { bootstrapApplication } from '@angular/platform-browser'

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { ViewCarsComponent } from './app/view-cars/view-cars.component';
import { GetCarsComponent } from './app/get-cars/get-cars.component'


if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
  platformBrowserDynamic().bootstrapModule(ViewCarsComponent).catch(err => console.error(err));
  platformBrowserDynamic().bootstrapModule(GetCarsComponent).catch(err => console.error(err));
  //Component(ViewCart);

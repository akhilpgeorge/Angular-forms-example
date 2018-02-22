import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { HeroesComponent } from './heroes/heroes.component';
import { TemplateFormComponent } from './template-form/template-form.component';

export const router: Routes = [
  {
    path: '',
    component: HeroesComponent
  },
  { path: 'temp-form', component: TemplateFormComponent }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);

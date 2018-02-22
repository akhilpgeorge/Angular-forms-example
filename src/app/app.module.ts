import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { routes } from './app.routes';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { TemplateFormComponent } from './template-form/template-form.component';

@NgModule({
  declarations: [AppComponent, HeroesComponent, TemplateFormComponent],
  imports: [BrowserModule, routes, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

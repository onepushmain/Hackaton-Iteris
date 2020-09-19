import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjetoCardComponent } from './components/projeto-card/projeto-card.component';
import { ProjetoPageComponent } from './components/projeto-page/projeto-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjetoCardComponent,
    ProjetoPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

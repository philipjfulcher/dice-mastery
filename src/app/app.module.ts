import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CardsModule } from './cards/cards.module';
import { CardDataModule } from './card-data/card-data.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    CardsModule,
    CardDataModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

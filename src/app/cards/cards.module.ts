import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from './cards/cards.component';

import { CardDataService } from '../card-data/card-data.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CardsComponent],
  providers: [
    CardDataService
  ]
})
export class CardsModule { }

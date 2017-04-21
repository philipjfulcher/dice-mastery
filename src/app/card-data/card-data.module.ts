import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardDataService } from './card-data.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    CardDataService
  ],
  declarations: []
})
export class CardDataModule { }

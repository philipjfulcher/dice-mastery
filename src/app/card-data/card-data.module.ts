import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardDataService } from './card-data.service';
import { PouchDBService } from './pouch-db.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    CardDataService,
    PouchDBService
  ],
  declarations: []
})
export class CardDataModule { }

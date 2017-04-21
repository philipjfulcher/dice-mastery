import { Injectable } from '@angular/core';

import { BattleForFaerun } from './BattleForFaerun';

@Injectable()
export class CardDataService {

  constructor() { }

  getCards() {
    return BattleForFaerun;
  }

}

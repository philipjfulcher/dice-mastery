import { Injectable } from '@angular/core';

import { BattleForFaerun } from './BattleForFaerun';
import { PouchDBService } from './pouch-db.service';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Card } from './models';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/fromEvent';

@Injectable()
export class CardDataService {
  private cardsSubject = new BehaviorSubject([]);
  cards$ = this.cardsSubject.asObservable();

  constructor(private pouchDBService: PouchDBService) { 
    this.getCards().then(() => this.subscribeToChanges());
  }

  getCards() {
    return this.pouchDBService.localCardDB.allDocs({include_docs: true}).then((docs) => {
      let cards: Card[];
      cards = docs.rows.map((row) => row.doc);
      this.cardsSubject.next(cards);
    })
  }

  subscribeToChanges() {
    return Observable.fromEvent(this.pouchDBService.localCardDB.changes({
      since: 'now',
      live: true,
      include_docs: true
    }), 'change').subscribe(() => this.getCards());
  }
}
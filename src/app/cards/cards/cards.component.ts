import { Component, OnInit, NgZone } from '@angular/core';
import { CardDataService } from '../../card-data/card-data.service';
import { Card } from '../../card-data/models';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  cards: Card[];

  constructor(private zone:NgZone, private cardDataService: CardDataService) { }

  ngOnInit() {
    this.cardDataService.cards$.subscribe((cards) => {
      //this.zone.run(() => { 
        this.cards = cards;
      //});
    });
  }

}

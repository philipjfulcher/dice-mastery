import { Component, OnInit } from '@angular/core';
import { CardDataService } from '../../card-data/card-data.service';
import { Card } from '../../card-data/models';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  cards: Card[];

  constructor(private cardDataService: CardDataService) { }

  ngOnInit() {
    this.cards = this.cardDataService.getCards();
  }

}

import { TestBed, inject } from '@angular/core/testing';

import { CardDataService } from './card-data.service';
import { Card } from './models';

describe('CardDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CardDataService]
    });
  });

  describe('getCards', () => {
    it('should return an array of cards', inject([CardDataService], (service: CardDataService) => {
      let cards: Card[];
      
      cards = service.getCards();

      expect(cards.length).toBeGreaterThan(0);
    }));
  });

  
});

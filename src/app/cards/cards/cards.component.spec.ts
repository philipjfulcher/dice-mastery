import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsComponent } from './cards.component';
import { CardDataService } from '../../card-data/card-data.service';

describe('CardsComponent', () => {
  let component: CardsComponent;
  let fixture: ComponentFixture<CardsComponent>;
  let element;
  let cards;
  let mockCardsDataService;

  mockCardsDataService = jasmine.createSpyObj('mockCardsDataService', ['getCards']);
  cards = [
    {
      Id: '1',
      Name: 'A new Card',
      SubTitle: 'With a subtitle'
    }
  ];

  mockCardsDataService.getCards.and.returnValue(cards);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardsComponent ],
      providers: [
        {
          provide: CardDataService, useValue: mockCardsDataService
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch cards', () => {
    expect(component.cards.length).toBeGreaterThan(0);
  });

  it('should render the cards in a list', () => {
    expect(element.querySelector('ul').children.length).toEqual(cards.length);
    expect(element.querySelector('ul').children[0].innerText).toContain(cards[0].Name);
  })
});
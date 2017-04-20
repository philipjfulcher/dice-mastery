import { DiceMasteryPage } from './app.po';

describe('dice-mastery App', () => {
  let page: DiceMasteryPage;

  beforeEach(() => {
    page = new DiceMasteryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

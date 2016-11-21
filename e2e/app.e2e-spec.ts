import { DaftpunkPage } from './app.po';

describe('daftpunk App', function() {
  let page: DaftpunkPage;

  beforeEach(() => {
    page = new DaftpunkPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

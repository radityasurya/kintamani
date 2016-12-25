import { JimbaranPage } from './app.po';

describe('jimbaran App', function() {
  let page: JimbaranPage;

  beforeEach(() => {
    page = new JimbaranPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

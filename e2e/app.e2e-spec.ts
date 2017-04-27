import { DummyPage } from './app.po';

describe('dummy App', () => {
  let page: DummyPage;

  beforeEach(() => {
    page = new DummyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

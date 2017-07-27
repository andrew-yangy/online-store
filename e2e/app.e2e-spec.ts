import { OnlineStorePage } from './app.po';

describe('online-store App', () => {
  let page: OnlineStorePage;

  beforeEach(() => {
    page = new OnlineStorePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

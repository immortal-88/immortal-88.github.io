import { AwesomeAppPage } from './app.po';

describe('awesome-app App', function() {
  let page: AwesomeAppPage;

  beforeEach(() => {
    page = new AwesomeAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

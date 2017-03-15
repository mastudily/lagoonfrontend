import { LagoonfrontendPage } from './app.po';

describe('lagoonfrontend App', function() {
  let page: LagoonfrontendPage;

  beforeEach(() => {
    page = new LagoonfrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

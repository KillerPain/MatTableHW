import { MatTablePage } from './app.po';

describe('mat-table App', () => {
  let page: MatTablePage;

  beforeEach(() => {
    page = new MatTablePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('mt works!');
  });
});

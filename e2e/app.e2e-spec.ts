import { TODOlistPage } from './app.po';

describe('todolist App', () => {
  let page: TODOlistPage;

  beforeEach(() => {
    page = new TODOlistPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

import { AnimationAppPage } from './app.po';

describe('animation-app App', () => {
  let page: AnimationAppPage;

  beforeEach(() => {
    page = new AnimationAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

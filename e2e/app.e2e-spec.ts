import { JedisPage } from './app.po';

describe('jedis App', () => {
  let page: JedisPage;

  beforeEach(() => {
    page = new JedisPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

import Home from '../../../src/components/Home.vue';
import { home } from '../../../src/components/shared/services/app.services';

const defaultData = Home.data();

describe('Home.vue', () => {
  it('has a data hook', () => {
    expect(typeof Home.data).to.equal('function');
  });
  it('has a data hook with zero articles', () => {
    // const defaultData = Home.data();
    expect(typeof defaultData.articles).to.equal('object');
    expect(defaultData.articles.length).to.equal(0);
  });
  it('has a data hook with zero homeErrors', () => {
    // const defaultData = Home.data();
    expect(typeof defaultData.homeErrors).to.equal('object');
    expect(defaultData.homeErrors.length).to.equal(0);
  });
  it('has a data hook with false noArticleFound flag', () => {
    // const defaultData = Home.data();
    expect(typeof defaultData.noArticleFound).to.equal('boolean');
    expect(defaultData.noArticleFound).to.equal(false);
  });
  it('has a data hook with true home flag', () => {
    // const defaultData = Home.data();
    expect(typeof defaultData.home).to.equal('boolean');
    expect(defaultData.home).to.equal(true);
  });

  it('has a created lifecycle hook if user is not logged in', done => {
    expect(typeof Home.created).to.equal('function');
    // const created = Home.created;
    const token = null;
    if (token === null) {
      home()
        .then(res => {
          if (res.data.messageCode === 'OK') {
            defaultData.articles = res.data.articles;
            expect(defaultData.articles).to.equal(res.data.articles);
            console.log('data get');
          } else if (res.data.messageCode === 'NO_ARTICLES') {
            defaultData.noArticleFound = [];
            defaultData.articles = [];
            console.log('no data');
          }
        })
        .catch(err => {
          console.error(err);
          console.log('err');
        });
    }
    done();
  });

  it('has a components object', () => {
    expect(typeof Home.components).to.equal('object');
  });

  it('has a methods object', () => {
    expect(typeof Home.methods).to.equal('object');
  });
  it('has a search hook', () => {
    const methods = Home.methods;
    expect(typeof methods.search).to.equal('function');
    // const button = Home.$el.querySelector('app-advanced-search-shared');
  });
});

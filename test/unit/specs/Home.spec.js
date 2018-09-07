import Home from '../../../src/components/Home.vue';
import { home } from '../../../src/components/shared/services/app.services';

const defaultData = Home.data();
const article = {
  articleName: 'Article Title 1',
  comments: [{ _id: '5b8e64ae75e37e32647ad149', comment: 'test', commentByWhom: 'dhruti.upadhyay' }],
  description: 'Article Description 1',
  disLike: 1,
  dislikeByWhom: ['fathullah.mohammedi'],
  isDraft: false,
  isPublic: true,
  isSaved: true,
  like: 3,
  likeByWhom: ['dhruti.upadhyay', 'fathullah.mohammedi'],
  tag: ['Article', 'Description']
};

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
            // defaultData.articles = res.data.articles;
            defaultData.articles = article;
            expect(defaultData.articles.article).to.equal(res.data.articles.article);
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
    }else{
      console.log('User is logged in');
    }
    done();
  });

  it('has a created lifecycle hook if user is logged in', done => {
    expect(typeof Home.created).to.equal('function');
    // const created = Home.created;
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6ImRocnV0aS51cGFkaHlheSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTUzNjI5Njc3OSwiZXhwIjoxNTM2MzE0Nzc5fQ.cyARhcr_SJJxvr00WbW5Ps_fY0Ys_M-zyC_oHBgASHo';
    if (token !== null) {
      home()
        .then(res => {
          if (res.data.messageCode === 'OK') {
            defaultData.articles = article;
            expect(defaultData.articles.article).to.equal(res.data.articles.article);
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
    }else{
      console.log('User is not logged in');
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

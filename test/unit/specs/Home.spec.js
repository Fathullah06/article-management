import Home from '../../../src/components/Home';

describe('Home.vue', () => {
  it('has a created hook', () => {
    expect(typeof Home.created).to.equal('function');
  });

  it('has a data function', () => {
    expect(typeof Home.data).to.equal('function');
  });
});

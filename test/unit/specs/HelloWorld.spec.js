import Home from '../../../src/components/Home.vue';

describe('Home.vue', () => {
  it('has a created hook', () => {
    expect(typeof Home.created).to.be('function');
  });
});

import Vue from 'vue';
import Login from '../../../src/components/auth/Login.vue';

describe('Login.vue', () => {
    it('Has a created hook', () => {
        expect(typeof Login.created).to.equal('function');
    });

    it('has a data function', () => {
        expect(typeof Login.data).to.equal('function');
    });

    it('Should have initial message', () => {
        const defaultData = Login.data();
        expect(defaultData.username).to.equal('');
        expect(defaultData.password).to.equal('');
    });

    it('Submit username and password to server on click', () => {
        // build component
        const Constructor = Vue.extend(Login);
        const LoginComponent = new Constructor().$mount();

        // set input value
        LoginComponent.username = 'fathullah.mohammedi';
        LoginComponent.password = 'fathullah.mohammedi';

        // simulate click event
        console.log(LoginComponent.$el);
        const button = LoginComponent.$el.querySelector('#loginButton');
        const clickEvent = new window.Event('click');
        button.dispatchEvent(clickEvent);
        LoginComponent._watcher.run();

        // assert list contains new item
        expect(LoginComponent.$el.textContent).to.contain('fathullah.mohammedi');
        expect(LoginComponent.username).to.contain('fathullah.mohammedi');
      });
});

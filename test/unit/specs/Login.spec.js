import Login from '../../../src/components/auth/Login.vue';
import { login } from '../../../src/components/shared/services/app.services';

const defaultData = Login.data();

describe('Login.vue', () => {
    it('Has a created hook', () => {
        expect(typeof Login.created).to.equal('function');
    });

    it('has a data function', () => {
        expect(typeof Login.data).to.equal('function');
    });

    it('Has username and password set to blank string', () => {
        expect(typeof defaultData.username).to.equal('string');
        expect(defaultData.username).to.equal('');
        expect(typeof defaultData.password).to.equal('string');
        expect(defaultData.password).to.equal('');
    });

    it('Has methods object', () => {
        expect(typeof Login.methods).to.equal('object');
    });

    it('Has submit function to login user', (done) => {
        const methods = Login.methods;
        expect(typeof methods.submit).to.equal('function');
        defaultData.username = 'fathullah.mohammedi';
        defaultData.password = 'rsPL123#';
        login({ userName: defaultData.username, password: defaultData.password })
        .then(res => {
            if (res.data.messageCode === 'LOGGED_IN_SUCCESSFULLY') {
                console.log('Logged in');
            }
        })
        .catch(err => {
            console.error(err);
        });
        done();
    });
});

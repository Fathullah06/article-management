import { GLOBAL } from '../../../app.global';
import axios from 'axios';

function login (data) {
    debugger;
  return axios.post(GLOBAL['SIGN_IN_URL'], data);
}

export { login };

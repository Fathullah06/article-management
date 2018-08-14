import { GLOBAL } from '../../../app.global';
import axios from 'axios';

function login (data) {
  return axios.post(GLOBAL['SIGN_IN_URL'], data);
}

function createArticle (data) {
  return axios.post(GLOBAL['CREATE_ARTICLE'], data);
}

export {
  login,
  createArticle
 };

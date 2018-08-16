import { GLOBAL } from '../../../app.global';
import axios from 'axios';

/* eslint-disable */

function login(data) {
  return axios.post(GLOBAL['SIGN_IN_URL'], data);
}

function home(data) {
  return axios.get(GLOBAL['DISPLAY_ALL_ARTICLES_URL'], data);
}

function createArticle(data) {
  return axios.post(GLOBAL['CREATE_ARTICLE'], data);
}

function likeArticle(id, data) {
  return axios.get(GLOBAL['LIKE'] + id, data);
}

function dislikeArticle(id, data) {
  return axios.get(GLOBAL['DISLIKE'] + id, data);
}

function commentOnArticle(id, data) {
  return axios.post(GLOBAL['COMMENT'] + id, data);
}

function getAllUsers(data){
  return axios.get(GLOBAL['GET_ALL_USERS'],data);
}

export {
  home,
  login,
  createArticle,
  likeArticle,
  dislikeArticle,
  commentOnArticle,
  getAllUsers
};

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

function getAllUsers(data) {
  return axios.get(GLOBAL['GET_ALL_USERS'], data);
}
function viewArticle(id) {
  return axios.get(GLOBAL['VIEW_ARTICLE'] + id);
}

function deleteArticle(id) {
  return axios.delete(GLOBAL['DELETE_ARTICLE'] + id)
}


export {
  home,
  login,
  createArticle,
  viewArticle,
  deleteArticle,
  likeArticle,
  dislikeArticle,
  commentOnArticle,
  getAllUsers
}

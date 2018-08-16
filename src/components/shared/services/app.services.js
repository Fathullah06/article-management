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

function editArticle (id, data) {
  return axios.put(GLOBAL['EDIT_ARTICLE'] + id, data);
}

function getArticleById (id) {
  return axios.get(GLOBAL['GET_ARTICLE_BY_ID'] + id);
}

function getDrafts () {
  return axios.get(GLOBAL['GET_DRAFTS']);
}

function viewArticle (id) {
  return axios.get(GLOBAL['GET_ARTICLE_BY_ID'] + id);
}

function deleteArticle (id) {
  return axios.delete(GLOBAL['DELETE_ARTICLE'] + id)
}

function likeArticle(id,data) {
  return axios.get(GLOBAL['LIKE']+'/'+id, data);
}

function dislikeArticle (id,data) {
  return axios.get(GLOBAL['DISLIKE']+'/'+id,data);
}

function globalSearch (searchText) {
  return axios.post(GLOBAL['SEARCH_GLOBAL'], searchText);
}
export {
  home,
  login,
  createArticle,
  viewArticle,
  deleteArticle,
  likeArticle,
  dislikeArticle,
  globalSearch,
  editArticle,
  getArticleById,
  getDrafts
};

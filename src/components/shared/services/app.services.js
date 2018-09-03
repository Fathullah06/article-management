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

function editArticle(id, data) {
  return axios.put(GLOBAL['EDIT_ARTICLE'] + id, data);
}

function getArticleById(id) {
  return axios.get(GLOBAL['GET_ARTICLE_BY_ID'] + id);
}

function myTrendingArticles() {
  return axios.get(GLOBAL['MY_TRENDING_ARTICLES']);
}

function myBlockedArticles() {
  return axios.get(GLOBAL['MY_BLOCKED_ARTICLES']);
}

function getDrafts() {
  return axios.get(GLOBAL['GET_DRAFTS']);
}

function viewArticle(id) {
  return axios.get(GLOBAL['GET_ARTICLE_BY_ID'] + id);
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

function deleteArticle(id) {
  return axios.delete(GLOBAL['DELETE_ARTICLE'] + id);
}

function userListBlock(id, data) {
  return axios.patch(GLOBAL['USER_LIST_BLOCK'] + id, data);
}

function articlesListBlock(data) {
  return axios.get(GLOBAL['ARTICLES_LIST_BLOCK'], data);
}

function globalSearch(searchText) {
  return axios.post(GLOBAL['SEARCH_GLOBAL'], searchText);
}

function createdArticles(data) {
  return axios.get(GLOBAL['MY_CREATED_ARTICLES'], data);
}

function articleListBlockArticle(id, data) {
  return axios.patch(GLOBAL['ADMIN_BLOCKED_ARTICLES'] + id, data);
}

function advancedSearch(searchData) {
  return axios.post(GLOBAL['SEARCH_ADVANCED'], searchData);
}

function bookmarkedArticle(id, isSaved) {
  return axios.post(GLOBAL['BOOKMARKED_ARTICLE'] + id, isSaved);
}

function getBookmarkedArticles(data) {
  return axios.get(GLOBAL['GET_BOOKMARKED_ARTICLES'], data);
}

function deleteComment(id, commentId) {
  return axios.delete(GLOBAL['DELETE_COMMENT'] + id, { data: commentId })
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
  getDrafts,
  commentOnArticle,
  getAllUsers,
  userListBlock,
  myTrendingArticles,
  myBlockedArticles,
  articlesListBlock,
  createdArticles,
  articleListBlockArticle,
  advancedSearch,
  bookmarkedArticle,
  getBookmarkedArticles,
  deleteComment
}

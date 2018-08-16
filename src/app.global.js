export let GLOBAL = {};

GLOBAL['BASE_URL'] = 'http://172.16.3.104:3000';
GLOBAL['HTTP_METHOD_GET'] = 'GET';
GLOBAL['HTTP_METHOD_POST'] = 'POST';
GLOBAL['HTTP_METHOD_PUT'] = 'PUT';

GLOBAL['SIGN_IN_URL'] = GLOBAL['BASE_URL'] + '/user/loginAD';
GLOBAL['DISPLAY_ALL_ARTICLES_URL'] = GLOBAL['BASE_URL'] + '/article/getAllArticles';
GLOBAL['CREATE_ARTICLE'] = GLOBAL['BASE_URL'] + '/article/createArticle';
GLOBAL['LIKE'] = GLOBAL['BASE_URL'] + '/article/like/';
GLOBAL['DISLIKE'] = GLOBAL['BASE_URL'] + '/article/dislike/';
GLOBAL['COMMENT'] = GLOBAL['BASE_URL'] + '/article/comment/';
GLOBAL['GET_ALL_USERS'] = GLOBAL['BASE_URL'] + '/admin/getUsers';
GLOBAL['VIEW_ARTICLE'] = GLOBAL['BASE_URL'] + '/article/';
GLOBAL['DELETE_ARTICLE'] = GLOBAL['BASE_URL'] + '/article/';

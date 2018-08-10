import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/Home.vue';
import Login from '../components/auth/Login.vue';
import ArticlesList from '../components/admin/ArticlesList.vue';
import UsersList from '../components/admin/UsersList.vue';
import CreateArticle from '../components/users/CreateArticle.vue';
import CreatedArticles from '../components/users/CreatedArticles.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      component: Home
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/articlesList',
      component: ArticlesList
    },
    {
      path: '/usersList',
      component: UsersList
    },
    {
      path: '/createArticle',
      component: CreateArticle
    },
    {
      path: '/createdArticles',
      component: CreatedArticles
    }
  ]
});

import Home from '../components/Home.vue';
import Login from '../components/auth/Login.vue';
import ArticlesList from '../components/ArticlesList.vue';
import UsersList from '../components/admin/UsersList.vue';
import CreateArticle from '../components/users/CreateArticle.vue';
import CreatedArticles from '../components/users/CreatedArticles.vue';
import Dashboard from '../components/users/Dashboard.vue';
import ViewArticle from '../components/users/ViewArticle.vue';

export const routes = [{
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
  },
  {
    path: '/dashboard',
    component: Dashboard
  },
  {
    path: '/viewArticle',
    component: ViewArticle
  }
];

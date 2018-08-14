// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Router from 'vue-router';
import VueMaterial from 'vue-material';
import VeeValidate from 'vee-validate';
import axios from 'axios';
import VueCookie from 'vue-cookie';
import App from './App';
import { routes } from './routes';
import store from '../src/store/store';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';

Vue.config.productionTip = false;
Vue.use(Router);
Vue.use(VeeValidate);
Vue.use(VueMaterial);
Vue.use(VueCookie);

axios.defaults.headers.common['Authorization'] = VueCookie.get('token');

const router = new Router({
  mode: 'history',
  routes
});

router.beforeEach((to, from, next) => {
  next(true);
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
});

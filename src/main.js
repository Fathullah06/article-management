// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Router from 'vue-router';
import axios from 'axios';
import VeeValidate from 'vee-validate';
import App from './App';
import { routes } from './routes';

Vue.config.productionTip = false;
Vue.use(Router);
Vue.use(VeeValidate);
Vue.use(axios);

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
  components: {
    App
  },
  template: '<App/>'
});

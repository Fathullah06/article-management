// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Router from 'vue-router';
import VueMaterial from 'vue-material';
import VeeValidate from 'vee-validate';
import axios from 'axios';
import VueCookie from 'vue-cookie';
import Snotify, { SnotifyPosition } from 'vue-snotify';
import App from './App';
import { routes } from './routes';
import store from '../src/store/store';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';
import 'vue-snotify/styles/material.css';

const options = {
  toast: {
    position: SnotifyPosition.rightTop,
    timeout: 3000,
    showProgressBar: false
  }
};

Vue.config.productionTip = false;
Vue.use(Router);
Vue.use(VeeValidate);
Vue.use(VueMaterial);
Vue.use(VueCookie);
Vue.use(Snotify, options);

axios.interceptors.request.use(function (config) {
  if (VueCookie.get('token') != null) {
    config.headers.Authorization = VueCookie.get('token');
  }

  return config;
}, function (err) {
  return Promise.reject(err);
});

axios.interceptors.response.use(response => {
  return response;
}, error => {
 if (error.response.status === 401) {
 }
 return error;
});

// axios.defaults.headers.common['Authorization'] = VueCookie.get('token');

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

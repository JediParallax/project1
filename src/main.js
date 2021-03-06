// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import VueResource from 'vue-resource';
Vue.use(VueResource);

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import test from './components/test.vue';
import user from './components/user.vue';

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [ 
    {
      path: '/',
      component: user
    },
    {
      path: "/test",
      component: test
    }
  ]
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router, 
  components: { App, VueResource },
  template: '<App/>'
}).$mount('#app');

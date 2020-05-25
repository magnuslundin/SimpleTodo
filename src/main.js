import Vue from 'vue';
import VueRouter from 'vue-router';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import App from './App.vue';
import Todo from './components/Todo';
import Settings from './components/Settings';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(require('vue-moment'));

const router =  new VueRouter({
  routes: [
    {
      path: '/',
      name: 'todo',
      component: Todo
    },
    {
      path: '/settings',
      name: 'settings',
      component: Settings
    },
  ]
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');

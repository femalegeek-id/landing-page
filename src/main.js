import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
// router setup
import routes from "./routes/routes";

Vue.config.productionTip = false

// configure router
const router = new VueRouter({
  routes, // short for routes: routes
  linkExactActiveClass: "nav-item active",
  mode: "history"
});
Vue.use(VueRouter);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

import Vue from "vue"
import MyRootComponent from "./rootcomponent/app.vue";
import VueResource from "vue-resource";
import VueRouter from "vue-router";
import sparoutes from "./routes/routes.js";



Vue.use(VueResource)
Vue.use(VueRouter)

const sparouter = new VueRouter({
  routes:sparoutes,
  mode:'history'
})

new Vue({
  el:"#vueapp",
  router: sparouter,
  render: h=>h(MyRootComponent)
})

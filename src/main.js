import Vue from "vue"
import MyRootComponent from "./rootcomponent/app.vue";
import VueResource from "vue-resource";

Vue.use(VueResource)

new Vue({
  el:"#vueapp",
  render: h=>h(MyRootComponent)
})

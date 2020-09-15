import Vue from "vue"
import MyRootComponent from "./rootcomponent/app.vue";


new Vue({
  el:"#vueapp",
  render: h=>h(MyRootComponent)
})

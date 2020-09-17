<template>
    <span>
        <h1>{{message}}</h1>
        <h3>{{welcome()}} </h3>
        <h4>Score: {{score}}</h4>
        <div>I am view of root component!</div>
        <div>I will contain all other components!!!!</div>
        <div>I will always render only one root element!</div>
        <hr>
        <navbar></navbar>
        <hr>
        <router-view></router-view>
       
    </span>
</template>

<script>


import MyNav from "../components/Navigation.vue";

export default{
    components:{
      
        navbar:MyNav
    },
    name: "MyRootComponent",
    data: function(){
        return{
             message: "Welcome to Vue!!!!",
             score: 80
        }
       
    },
    methods:{
        welcome: function(){
            return "Thanks to vue-cli!!!!"
        }
    }
}
</script>

<style scoped>


h1{
    color: red;
}
</style>
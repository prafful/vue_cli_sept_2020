<template>
    <span>
        <h1>{{message}}</h1>
        <h3>{{welcome()}} </h3>
        <h4>Score: {{score}}</h4>
        <div>I am view of root component!</div>
        <div>I will contain all other components!!!!</div>
        <div>I will always render only one root element!</div>
        <hr>
        <appheader></appheader>
        <appcontent></appcontent>
        <appfooter></appfooter>
    </span>
</template>

<script>
import MyHeader from "../components/Header.vue";
import MyFooter from "../components/Footer.vue";
import MyContent from "../components/Content.vue";



export default{
    components:{
        appheader: MyHeader,
        appfooter: MyFooter,
        appcontent: MyContent
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

<style >
h1{
    color: red;
}
</style>
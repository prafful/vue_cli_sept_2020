<template>
    <div>
              
        <appheader></appheader>
        <appcontent></appcontent>
        <appfooter></appfooter> 
    
    </div>
</template>
<script>
import MyHeader from "../components/Header.vue";
import MyFooter from "../components/Footer.vue";
import MyContent from "../components/Content.vue";

export default {

    components:{
        appheader: MyHeader,
        appfooter: MyFooter,
        appcontent: MyContent
    }

    
}
</script>

<style scoped>

</style>
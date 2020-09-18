<template>

    <div>
        <h1>{{title}} for {{id}}</h1>
    </div>

</template>

<script>
export default {
    data: function(){
        return{
            title: "Edit Blog!!!!",
            id: this.$route.params.blogid
        }
    },
    created: function(){
        console.log(this);
        console.log(this.$route);
          console.log(this.$route.params.blogid);
    }
}
</script>


<style scoped>

h1{
    color: violet;
}
</style>
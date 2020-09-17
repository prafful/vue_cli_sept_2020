<template>

    <div>
        <h1>{{title}}</h1>
        <form >
            <label>UserId:</label>
            <input type="number" v-model.lazy="blog.userId"> <br>
            <label>Title: </label>
            <input type="text" v-model.lazy="blog.title"><br>
            <label>Body:</label>
            <textarea cols="30" rows="10" v-model.lazy="blog.body"></textarea><br><br>
            <button v-on:click.prevent="addBlog()">Add Blog</button>
        </form>
        <div>
            <h3>Preview</h3>
            UserId: {{blog.userId}}
            <br>
            Title: {{blog.title}}
            <br>
            Body: {{blog.body}}
            <br>
        </div>
    </div>

</template>

<script>
export default {
    data: function(){
        return{
            title: "Add Blog!!!!",
            blog:{
                "userId": 0,
                "title": "",
                "body": ""
            }
        }
    },
    methods:{
        addBlog: function(){
            console.log(this.blog);
            this.$http.post('http://localhost:3000/blogs', this.blog)
                .then(response =>{
                    console.log(response);
                    this.$router.push({ path:'/showblog'})
                })
                .catch(error=>{
                    console.log(error);
                })
        }
    }
}
</script>


<style scoped>

h1{
    color: violet;
}
</style>
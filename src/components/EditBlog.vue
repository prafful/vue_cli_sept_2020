<template>
 <span>
    <div>
        <h1>{{title}} for {{id}}</h1>
        <p>
            <b>Blog Id:</b>  <br> {{blog.id}} 
            <br>
            <b>Blog Title:</b>  <br>
            <input type="text"  v-model="blog.title"> 
            <br>
            <b>Blog Body:</b> <br> 
            <textarea cols="30" rows="10" v-model="blog.body" ></textarea>
            <br>
            <b>UserId:</b>  <br> 
            <input type="number" v-model="blog.userId">
            <br>
            <button v-on:click="editBlog()">Edit Blog</button>
        </p>
    </div>
      <div>
            <h3>Preview</h3>
            <b>UserId:</b>{{blog.userId}}
            <br>
            <b>Blog Title:</b> {{blog.title}}
            <br>
            <b>Blog Body:</b> {{blog.body}}
            <br>
        </div>
       </span>

</template>

<script>
export default {
    data: function(){
        return{
            title: "Edit Blog!!!!",
            id: this.$route.params.blogid,
            blog:{}
        }
    },
    methods:{
        editBlog: function(){
            var tempBlog = {
                "userId": this.blog.userId,
                "title": this.blog.title,
                "body": this.blog.body
            }
            this.$http.put('http://localhost:3000/blogs'+ '/'+ this.id, tempBlog)
                    .then(response =>{
                        console.log(response)
                        this.$router.push({path:'/showblog'})
                        
                    })
                    .catch(err =>{
                        console.log(err);
                    })
        }
    },
    created: function(){
        console.log(this);
        console.log(this.$route);
        console.log(this.$route.params.blogid);
        this.$http.get('http://localhost:3000/blogs' + '/' + this.id )
                    .then(response =>{
                        console.log(response);
                        this.blog = response.body
                    })
                    .catch(err =>{
                        console.log(err);
                    })

    }
}
</script>


<style scoped>

h1{
    color: violet;
}
</style>
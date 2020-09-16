<template>

    <div>
        <h3>Friends</h3>
      <ol>
          <li v-for="friend in friends" v-bind:key="friend.id">
              {{friend.name}}
          </li>
      </ol>
      <hr>
      <h3>Users</h3>
      <ol>
          <li v-for="user in users" v-bind:key="user.id">
              {{user.name}}
          </li>
      </ol>
      <hr>
      <h3>Blogs</h3>
      <ol class="blogs">
          <li class="blogitem" v-for="blog in blogs" v-bind:key="blog.id">
              {{blog.title}}
              <br>
              <span class="blogbody">
                  {{blog.body}}
              </span>
          </li>
      </ol>
    </div>

</template>

<script>
export default {
    data: function(){
        return{
           users:[],
           blogs:[],
           friends:[
                {
                    id:1,
                    name:'obb',
                    location:'chennai'
                },
                {
                    id:2,
                    name:'owioh',
                    location:'japan'
                },
                {
                    id:3,
                    name:'cas',
                    location:'bengaluru'
                },
                {
                    id:4,
                    name:'bnp',
                    location:'ahmedabad'
                }
           ]
        }
    },
    mounted: function(){
        this.$http.get('https://jsonplaceholder.typicode.com/users')
                .then(response =>{
                    console.log(response)
                    console.log(response.body)
                    this.users = response.body
                })
                .catch(err => {
                    console.log(err);
                })
         //use api created by json-server
         this.$http.get('http://localhost:3000/blogs')       
                .then(response =>{
                    console.log(response)
                    console.log(response.body)
                    this.blogs = response.body
                })
                .catch(err => {
                    console.log(err);
                })
    }
}
</script>


<style scoped>

h1{
    color: violet;
}

.blogs{
    color:indianred;
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    padding: 5px;
}

.blogitem{
  text-align: center;
  border: 1px dashed pink;
  padding: 20px;
  flex-basis: 200px;  
  font-weight: bold;
  font-size: 22px;
}
.blogbody{
    color: indigo;
    font-weight: normal;
    padding-top: 5px;
    margin: 10px;
    font-size: medium;
}
</style>
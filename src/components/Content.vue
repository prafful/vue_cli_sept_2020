<template>

    <div>
      <ol>
          <li v-for="friend in friends" v-bind:key="friend.id">
              {{friend.name}}
          </li>
      </ol>
      <hr>
      <ol>
          <li v-for="user in users" v-bind:key="user.id">
              {{user.name}}
          </li>
      </ol>
    </div>

</template>

<script>
export default {
    data: function(){
        return{
           users:[],
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
    }
}
</script>


<style>

h1{
    color: violet;
}
</style>
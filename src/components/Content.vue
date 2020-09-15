<template>

    <div>
      <ol>
          <li v-for="friend in friends" v-bind:key="friend.id">
              {{friend.name}}
          </li>
      </ol>
    </div>

</template>

<script>
export default {
    data: function(){
        return{
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
    }
}
</script>


<style>

h1{
    color: violet;
}
</style>
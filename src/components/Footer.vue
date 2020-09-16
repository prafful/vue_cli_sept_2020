<template>

    <div>
        <h1>{{copyright}} <span v-on:click="updateYear">{{getCopyrightYear()}}</span></h1>
    </div>

</template>

<script>
export default {
    data: function(){
        return{
            copyright: "VueApp @ ",
            year: 2020
        }
    },
    methods:{
        getCopyrightYear: function(){
            return this.year
        },
        updateYear: function(){
            this.year++
        } 
    },
    beforeCreate: function(){
        console.log('in beforeCreate lifecycle hook!!!!')
        //alert('beforeCreate')
    },
    created: function(){
        console.log('in created lifecycle hook!!!!')
        //alert('created')
    },   
    beforeMount: function(){
        console.log('in beforeMount lifecycle hook!!!!')
        //alert('beforeMount')
    },
    mounted: function(){
        console.log('in mounted lifecycle hook!!!!')
        //alert('mounted')
    }, 
    beforeUpdate: function(){
        console.log('in beforeUpdate lifecycle hook!!!! '  + this.year)
        //alert('beforeUpdate ' + this.year )
    },
    updated: function(){
        console.log('in updated lifecycle hook!!!! ' + this.year)
        //alert('updated '  + this.year)
    }, 

}
</script>


<style scoped>

h1{
    color: green;
}
</style>
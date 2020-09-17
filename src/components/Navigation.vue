<template>

    <div>
        <ul>
            <li>
                <router-link to="/" exact>Home</router-link>
            </li>
            <li>
                <router-link to="/addblog" exact>AddBlog</router-link>
            </li>
            <li>
                <router-link to="/showblog" exact>ShowBlog</router-link>
            </li>
        </ul>
    </div>

</template>

<script>
export default {
    
}
</script>


<style scoped>

li:hover{
    font-weight: bold;
    color: indianred;
}

li{
    display: inline;
    margin: 10px;
    padding: 10px;
    
}
router-link{
    text-decoration: none;
    color: lightsalmon;
}

ul{
    list-style-type: none;
}

</style>
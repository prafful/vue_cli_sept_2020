
import Home from "../components/Home.vue";
import AddBlog from "../components/AddBlog.vue";
import ShowBlog from "../components/ShowBlog.vue";


export default [
    {
        path:'/',
        component:Home
    },
    {
        path:'/addblog',
        component:AddBlog
    },
    {
        path:'/showblog',
        component:ShowBlog
    }
]
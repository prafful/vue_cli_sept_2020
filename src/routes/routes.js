
import Home from "../components/Home.vue";
import AddBlog from "../components/AddBlog.vue";
import ShowBlog from "../components/ShowBlog.vue";
import EditBlog from "../components/EditBlog.vue";


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
    },
    {
        path:'/editblog/:blogid',
        component: EditBlog
    }
]
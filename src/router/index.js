import Vue from 'vue'
import VueRouter from 'vue-router'
import tourcard from '../components/tourcard'
import Form from  "../components/Form"
import Welcome from "../components/Welcome"
import Birthday from "../components/Birthday"
import CartInfo from "../components/CartInfo"

Vue.use(VueRouter)
const router = new VueRouter({
routes :[
    {
        path:"/",
        component:Welcome
    },
    {
        path:"/home",
        component:tourcard
    },
    {
        path:"/about",
        component:Form
    },
    {
        path:"/birthday",
        component:Birthday,
        name:"Birthday"
    },
    {
        path:"/cart",
        component:CartInfo,
        name:"CartInfo"
    }
   
]
})
export default router
import Vue from 'vue'
import VueRouter from 'vue-router'
import tourcard from '../components/tourcard'
import Form from  "../components/Form"
import Welcome from "../components/Welcome"

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
   
]
})
export default router
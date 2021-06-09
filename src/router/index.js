import Vue from 'vue'
import VueRouter from 'vue-router'
import contact from '../views/contact'

Vue.use(VueRouter)
const router = new VueRouter({
routes :[
    {
        path:"/contact",
        component:contact
    },
   
]
})
export default router
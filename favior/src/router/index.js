import VueRouter from 'vue-router'
import Vue from 'vue'
import Home from '../views/Home.vue'
import User from '../views/User.vue'
import Main from '../views/Main.vue'
import Mall from '../views/Mall.vue'
import PageOne from '../views/PageOne.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect:'/home',
        component: Main,
        children: [
            { path: 'home', component: Home },
            { path: 'user', component: User },
            { path: 'mall', component: Mall },
            { path: 'page1', component: PageOne }
        ]
    }]



const router = new VueRouter({
    routes
})

export default router
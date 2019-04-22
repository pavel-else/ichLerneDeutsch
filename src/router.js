import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Books from '@/components/Books'
import Words from '@/components/Words'
import Profile from '@/components/Profile'
import Signin from '@/components/Signin'
import Signup from '@/components/Signup'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/books',
      name: 'books',
      component: Books
    },
    {
      path: '/words',
      name: 'words',
      component: Words
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    },
    {
      path: '/signin',
      name: 'signin',
      component: Signin
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },
  ],
  mode: 'history'
})

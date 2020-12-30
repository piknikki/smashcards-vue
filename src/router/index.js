import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import AddCard from '../components/AddCard'
import EditCard from '../components/EditCard'
import Signup from '../components/Signup'
import Login from '../components/Login'
import firebase from 'firebase'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/add-card',
      name: 'AddCard',
      component: AddCard,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/edit-card/:slug',
      name: 'EditCard',
      component: EditCard,
      meta: {
        requiresAuth: true
      }
    }
  ]
})

// route guards
router.beforeEach((to, from, next) => {
  // check if route requires auth
  if (to.matched.some(rec => rec.meta.requiresAuth)) {
    // check auth state of user
    let user = firebase.auth().currentUser
    if (user) {
      // user signed in, go to route
      next()
    } else {
      // no user singed in, redirect to login
      next({ name: 'Login' })
    }
  } else {
    next()
  }
})

export default router

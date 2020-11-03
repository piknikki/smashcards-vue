import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import AddCard from '../components/AddCard'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/add-card',
      name: 'AddCard',
      component: AddCard
    }
  ]
})

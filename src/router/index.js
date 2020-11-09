import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import AddCard from '../components/AddCard'
import EditCard from '../components/EditCard'

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
    },
    {
      path: '/edit-card/:slug',
      name: 'EditCard',
      component: EditCard
    }
  ]
})

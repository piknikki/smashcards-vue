// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'
import infiniteScroll from 'vue-infinite-scroll'
import AOS from 'aos'

Vue.use(infiniteScroll)
Vue.config.productionTip = false

let app = null

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      el: '#app',
      router,
      components: { App },
      template: '<App/>'
    })
    AOS.init()
  }
})

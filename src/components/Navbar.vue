<template>
  <div class="main-navbar">
    <nav class="navbar" role="navigation">
      <div class="navbar-brand">
        <img class="logo" src="../assets/logo.png">
      </div>

      <div class="navbar-menu">
        <div class="navbar-start is-vcentered">
          <router-link :to="{name: 'Home'}" class="navbar-item title">SmashCards</router-link>
        </div>
        <div class="navbar-end is-vcentered">
          <h4 v-if="user" class="navbar-item greet">{{ user.email }}</h4>
          <router-link v-if="user" :to="{name: 'AddCard'}" class="navbar-item">
            <span class="fa-layers fa-fw">
              <i class="fas fa-circle fa-3x"></i>
              <i class="fas fa-plus fa-2x" data-fa-transform="right-5"></i>
            </span>
          </router-link>
          <router-link v-if="!user" :to="{ name: 'Signup' }" class="navbar-item signup">Sign Up</router-link>
          <router-link v-if="!user" :to="{ name: 'Login' }" class="navbar-item login">Log In</router-link>
          <a v-if="user" @click="logOut" class="navbar-item logout">Log Out</a>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'Navbar',
  data () {
    return {
      user: null
    }
  },
  methods: {
    logOut () {
      firebase.auth().signOut()
        .then(() => {
          this.$router.push({ name: 'Login' })
        })
    }
  },
  created () {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.user = user
      } else {
        this.user = null
      }
    })
  }
}
</script>

<style scoped>
.main-navbar {
  font-family: 'Orbitron', sans-serif;
}

.logo {
  width: 75px;
}

.fa-circle {
  color: #38445D;
}

.fa-plus {
  color: #E6676E;
}

.router-link-active:hover,
.navbar-item:hover,
a.navbar-item:focus {
  background: #FFFFFF;
  color: #363636;
}

.signup,
.login,
.logout {
  font-size: 1.5em;
  margin-left: 40px;
}

.greet {
  color: #E6676E;
  font-size: 1em;
  margin-right: 40px;
}

.greet:hover,
.greet:focus {
  color: #E6676E;
  cursor: default;
}
</style>

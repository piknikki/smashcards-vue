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
          <router-link v-if="loggedIn" :to="{name: 'AddCard'}" class="navbar-item">
            <span class="fa-layers fa-fw">
              <i class="fas fa-circle fa-3x"></i>
              <i class="fas fa-plus fa-2x" data-fa-transform="right-5"></i>
            </span>
          </router-link>
          <router-link to="/signup" class="navbar-item signup">Signup</router-link>
          <router-link to="/login" class="navbar-item login">Login</router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
      loggedIn: false
    }
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
.login {
  font-size: 1.5em;
}

</style>

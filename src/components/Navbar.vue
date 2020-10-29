<template>
  <div class="main-navbar">
    <nav class="navbar" role="navigation">
      <div class="navbar-brand">
        <img class="logo" src="../assets/logo.png">
      </div>

      <div class="navbar-menu">
        <div class="navbar-start is-vcentered">
          <div class="navbar-item title">SmashCards</div>
        </div>
        <div class="navbar-end">
          <a class="navbar-item">
            Home
          </a>
          <a class="navbar-item">
            About
          </a>
          <a class="navbar-item">
            Contact
          </a>
        </div>

      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>
.logo {
  width: 75px;
}

</style>

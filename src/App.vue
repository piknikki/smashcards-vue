<template>
  <div id="app">
    <Navbar />
    <Directions />
    <router-view/>
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Directions from './components/Directions'

export default {
  name: 'App',
  components: {Directions, Footer, Navbar}
}
</script>

<style>
#app {
  font-family: 'Source Code Pro', monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  padding: 40px;
}
</style>

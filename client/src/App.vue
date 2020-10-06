<template>
  <div id="app">
      <Spotify />
  </div>
</template>

<script>
import Spotify from '../../modules/vue-spotify'

export default {
  name: 'App',
  components: {
    Spotify
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

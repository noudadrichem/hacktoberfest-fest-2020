<template>
  <div id="app">
      <Example />
  </div>
</template>

<script>
import Example from '../../modules/vue-example'

export default {
  name: 'App',
  components: {
    Example
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
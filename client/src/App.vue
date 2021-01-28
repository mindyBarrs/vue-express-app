<template>
  <div id="app">
    <Beers />
  </div>
</template>

<script>
import Beers from './components/Beers.vue'

export default {
  name: 'App',
  components: {
    Beers
  }
}
</script>

<style>
body {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: baseline;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

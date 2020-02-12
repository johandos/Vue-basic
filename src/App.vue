<template>
  <div id="app">
    <h1>Proyecto VUE</h1>
    <p>Un Parrafo</p>
    <app-directivas></app-directivas>
    <input type="text" v-power-mode>
  </div>
</template>
<script>
  import Directivas from './components/Directivas'

  export default {
    name: 'App',
    components: {
      appDirectivas: Directivas
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

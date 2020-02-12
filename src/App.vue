<template>
  <div id="app">
<!--    <h1>Proyecto VUE</h1>-->
<!--    <p>Un Parrafo</p>-->
<!--    <app-directivas></app-directivas>-->
<!--    <input type="text" v-power-mode>-->
<!--    <app-computed-watch></app-computed-watch>-->
    <app-cmp-padre></app-cmp-padre>
  </div>
</template>
<script>
  //import Directivas from './components/Directivas'
  // import ComputedWatch from './components/ComputedWatch'
  import CmpPadre from './components/Propiedades/CmpPadre'
  export default {
    name: 'App',
    components: {
      /*appDirectivas: Directivas*/
      // appComputedWatch: ComputedWatch,
      appCmpPadre: CmpPadre,
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

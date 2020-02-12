import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false;

export const EventBus = new Vue({
  methods:{
    sendNombre(nombre){
      this.$emit('onSendNombre', nombre)
    }
  }
});



new Vue({
  render: h => h(App),
}).$mount('#app')

import Vue from "vue";

Vue.directive('power-mode', {
    // eslint-disable-next-line no-unused-vars
   bind(el,binding,vmode){
       el.addEventListener(('input', () => {
           const colorLetra = `rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`
           el.style.color = colorLetra;
           el.style.marginLeft = '5px';
           el.style.marginTop = '5px';
           setTimeout(() => {
               el.style.marginLeft = '0';
               el.style.marginTop = '0';
           }, 200);
       }))
   }
});
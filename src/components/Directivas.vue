<template>
    <div>
        <button @click="mostrar = !mostrar">Directivas basicas</button>
        <div v-if="mostrar">
            <p v-if="mostrar">Directiva v-if</p>
            <h2>Directivas</h2>
            <p v-text="msg"></p>
            <p v-html="bold"></p>
            <label>v-for array</label>
            <ul class="col-2">
                <li :key="mascota.id" v-for="mascota in mascotas">{{mascota.name}}</li>
            </ul>
            <label>v-for obj</label>
            <ul class="col-2">
                <li :key="key+index" v-for="(serieInfo, index, key) in series">{{serieInfo}}</li>
            </ul>
        </div>
        <div v-marcar="'lightblue'">
            <p>NUEVA DIRECTIVA v-marca</p>
        </div>
        <div v-marcar="'red'">
            <p>NUEVA DIRECTIVA v-marca</p>
        </div>
        <div v-marcar.blink="'red'">
            <p>NUEVA DIRECTIVA con modificador  v-marca</p>
        </div>

        <div>
            <textarea>
                ok
            </textarea>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                msg: "directiva v-text",
                bold: "<strong>v-html directiva</strong>",
                mostrar: false,
                mascotas: [
                    {id: 1, name: 'pato'},
                    {id: 2, name: 'gato'},
                    {id: 3, name: 'perro'}
                ],
                series: {
                    name: 'twd',
                    temp: '2',
                    otros: [
                        {personaje: 'test 1'},
                        {personaje: 'test 2'},
                        {personaje: 'test 3'}
                    ]
                }
            }
        },
        directives: {
            marcar:{
                // eslint-disable-next-line no-unused-vars
                bind(el, binding, vNode){
                    const color = binding.value;
                    const blink = Object.keys(binding.modifiers).includes('blink');
                    let intervalId = null;
                    el.style.backgroundColor = "lightgreen";
                    el.addEventListener('mouseover', () => {
                        if (blink){
                            let colorBlink = color;
                            intervalId = setInterval(() => {
                                el.style.backgroundColor = colorBlink === color ? 'white' : color;
                                colorBlink =  el.style.backgroundColor;
                            }, 500);
                        }else{
                            el.style.backgroundColor = color;
                        }
                    });
                    el.addEventListener('mouseout', () => {
                        if (blink){
                            clearInterval(intervalId);
                        }
                        el.style.backgroundColor = "lightgreen";
                    })

                }
            }
        }
    }
</script>

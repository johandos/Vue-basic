<template>
    <div>
        <p :style="{backgroundColor: colorLetra}"> Nombre y apellido: {{nameAll}}</p>
        <input type="text" v-model="name">
        <input type="text" v-model="lastName">
        <input type="text" v-model="city">
        <p>Validacion: {{status}}</p>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                name: 'Johan David',
                lastName: 'Ospina Alzate',
                city: 'Madrid',
                status: '....',
                colorLetra: 'blue'
            }
        },
        computed:{
            nameAll(){
                console.log('Se esta Modificando Nombre o Aellido');
                return this.name + ' ' + this.lastName;
            }
        },
        watch:{
            name(newName, oldName){
                setTimeout(() => {
                    if (['tony', 'robo'].includes(newName.toLowerCase())){
                        this.status = 'Nombre valido'
                    } else {
                        this.status = 'Nombre no valido'
                    }
                }, 500);

                if (newName > oldName){
                    this.colorLetra = 'yellowgreen'
                }else{
                    this.colorLetra = 'lightblue'
                }
            }
        }
    }
</script>
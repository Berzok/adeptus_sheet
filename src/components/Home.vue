<template>
    <div class="container-fluid wrapper pt-2">
        <div class="mx-auto">
            <h1>{{ message }}</h1>
            <router-link to="/login">Connexion</router-link>
            <router-link to="/overview">Synthèse</router-link>
        </div>
    </div>
</template>

<script>
import {defineComponent} from "vue";


export default defineComponent({
    name: 'Home',
    props: {
        message: String
    },
    setup(){
    }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

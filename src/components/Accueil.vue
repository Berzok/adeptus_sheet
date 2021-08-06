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
import {inject, provide, reactive} from "vue";

async function fetchData() {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve) => {
        const res = await fetch('http://www.esoteria.arae.rest/personnage/get/610bad0266bb93101bfee7bf');
        setTimeout(async () => resolve(await res.json()), 2000);
    });
}


export default {
    name: 'Accueil',
    props: {
        message: String
    },
    setup(){
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

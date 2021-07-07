<template>
    <div>
        <h1>{{ message }}</h1>
        <router-link to="/overview">Synthèse</router-link>
    </div>
</template>

<script>
export default {
    name: 'Accueil',
    props: {
        message: String
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

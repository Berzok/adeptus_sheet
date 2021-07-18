<template>
    <div id="sidemenu" hidden>
        <ul class="nav nav-tabs flex-column align-self-start w-100 mt-5">
            <li class="nav-item my-3">
                <router-link to="/accueil" active-class="active" class="nav-link">Accueil</router-link>
            </li>
            <li class="nav-item my-3">
                <router-link to="/login" active-class="active" class="nav-link">Connexion</router-link>
            </li>
            <li class="nav-item my-3">
                <router-link to="/overview" active-class="active" class="nav-link">Fiche de personnage</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Sidemenu',
    props: {
        message: String
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div{
    border: 1px solid #44d9e8;
    border-right: none;
}
#sidemenu{
    width: 10%;
}
a.nav-link.active{
    border: 2px solid #ea39b8;
    border-left: none;
    border-right: none;
    box-shadow: 2px 0 1px #17082e;
}
</style>

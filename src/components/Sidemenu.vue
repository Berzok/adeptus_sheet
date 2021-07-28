<template>
    <div id="sidemenu">
        <ul class="nav nav-tabs flex-column align-self-start w-100 mt-5">
            <li class="nav-item my-3">
                <router-link to="/accueil" active-class="active" class="nav-link">Accueil</router-link>
            </li>
            <li class="nav-item my-3">
                <router-link to="/login" active-class="active" class="nav-link">Dashboard</router-link>
            </li>

            <li>
                <hr />
            </li>

            <li v-for="p in pages" :key="p" class="nav-item my-3">
                <router-link :to="p.route" active-class="active" class="nav-link">{{ p.nom }}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Sidemenu',
    data() {
        return {
            pages: [
                {
                    nom: 'Aperçu',
                    route: '/overview'
                },
                {
                    nom: 'Atouts / Handicaps',
                    route: '/atouts_handicaps'
                },
                {
                    nom: 'Psychologie',
                    route: '/psychologie'
                }
            ]
        }
    },
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
    width: 12%;
}
a.nav-link.active{
    border: 2px solid #ea39b8;
    border-left: none;
    border-right: none;
    box-shadow: 2px 0 1px #17082e;
}
</style>

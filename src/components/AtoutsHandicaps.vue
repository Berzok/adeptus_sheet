<template>
    <div class="container-fluid wrapper pt-2">

        <div class="d-flex flex-column">

            <Atout v-bind:personnage="personnage" class="d-flex flex-column align-items-stretch"></Atout>

            <div>
                <hr />
            </div>

            <div>
                <h3>Handicaps</h3>

            </div>

        </div>

    </div>
</template>


<script lang="ts">
import Tableau from './Tableau.vue';
import Atout from './Atouts_Handicaps/Atout.vue';
import FormSelect from "./FormSelect.vue";

export default {
    name: "AtoutsHandicaps",
    mounted() {

    },
    data() {
        return {

        }
    },
    components: {
        Atout
    }
}
//<CardNumber v-for="caracteristique in caracteristiques" :key="caracteristique.nom" :title="caracteristique.nom"></CardNumber>
</script>

<style scoped>

</style>
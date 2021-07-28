<template>
    <div class="container-fluid wrapper pt-2">

        <div class="d-flex flex-column">

            <div>

                <h3>Atouts</h3>

                <div class="row border-bottom text-start mb-2 gx-0">
                    <div v-for="h in headers" :key="h" :class="'col-' + h.colSize">
                        <h4>{{ h.nom }}</h4>
                    </div>
                </div>

                <Atout :persoAtout="personnage.atouts"></Atout>
            </div>

            <div>
                <hr />
            </div>

            <div class="handicaps">

                <h3>Handicaps</h3>

                <div class="row border-bottom text-start mb-2 gx-0">
                    <div v-for="h in headers" :key="h" :class="'col-' + h.colSize">
                        <h4>{{ h.nom }}</h4>
                    </div>
                </div>

                <Handicap></Handicap>
            </div>

        </div>

    </div>
</template>


<script>
import Atout from './Atouts_Handicaps/Atout.vue';
import Handicap from "./Atouts_Handicaps/Handicaps.vue";

export default {
    name: "AtoutsHandicaps",
    mounted() {

    },
    data() {
        return {
            headers: [
                {
                    nom: 'Nom',
                    colSize: 1
                },
                {
                    nom: 'Type',
                    colSize: 1
                },
                {
                    nom: 'Valeur',
                    colSize: 1
                },
                {
                    nom: 'Effet',
                    colSize: 4
                },
                {
                    nom: 'Description',
                    colSize: 5
                }
            ],
            personnage: {
                atouts: [
                    {
                        nom: 'Affaibli',
                        type: 'Mental',
                        valeur: 10,
                        effet: 'Blabla',
                        description: 'froussard!'
                    }
                ]
            }
        }
    },
    components: {
        Handicap,
        Atout
    }
}
//<CardNumber v-for="caracteristique in caracteristiques" :key="caracteristique.nom" :title="caracteristique.nom"></CardNumber>
</script>

<style scoped>

</style>
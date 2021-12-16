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


                <Atouts :data="atouts" :personnage="personnage"></Atouts>
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

                <Handicaps :data="handicaps" :personnage="personnage"></Handicaps>
            </div>

        </div>

        <button @click="displayData()" class="btn btn-info">Voir data</button>

    </div>
</template>


<script>
import {inject} from 'vue';
import Atouts from 'src/components/Personnage/Atouts.vue';
import Handicaps from "./Atouts_Handicaps/Handicaps.vue";

export default {
    name: "AtoutsHandicaps",
    setup(){
        let personnage = inject('personnage');
        let atouts = inject('data').atouts;
        let handicaps = inject('data').handicaps;

        return {
            personnage,
            atouts,
            handicaps
        };
    },
    methods: {
        displayData(){
            console.dir(this.personnage);
        }
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
        }
    },
    components: {
        Handicaps,
        Atouts
    }
}
//<CardNumber v-for="caracteristique in caracteristiques" :key="caracteristique.nom" :title="caracteristique.nom"></CardNumber>
</script>

<style scoped>

</style>
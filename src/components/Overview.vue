<template>
    <div class="d-flex flex-column container-fluid wrapper pt-2">

        <div class="d-flex">

            <PersonnageDetails
                    :data="data"
                    :personnage="personnage">
            </PersonnageDetails>

            <span class="mx-2"></span>

            <div class="d-flex flex-column flex-grow-1">

                <div class="d-flex flex-column flex-grow-1 justify-content-evenly">

                    <div class="d-flex justify-content-around">

                        <template v-for="c in personnage.caracteristiques.slice(0, 6)" :key="c">
                            <CardNumber
                                v-model:nom="c.nom"
                                v-model:current="c.current"
                                v-model:max="c.max"
                                v-model:order="c.order"
                                @input="$emit('update:modelValue', $event.target.value)">
                            </CardNumber>
                        </template>

                    </div>

                    <!-- Fatigue, Blessures, Seuil d'effort -->
                    <div class="d-flex justify-content-around">
                        <template v-for="c in personnage.caracteristiques.slice(6, 11)" :key="c">
                            <CardNumber
                                v-model:nom="c.nom"
                                v-model:current="c.current"
                                v-model:max="c.max"
                                v-model:order="c.order"
                                @input="$emit('update:modelValue', $event.target.value)">
                            </CardNumber>
                        </template>
                    </div>

                </div>

                <div class="d-flex">

                    <Tableau :config="tableau.config" :data="tableau.data"></Tableau>

                </div>
            </div>

        </div>

        <div class="d-flex flex-grow-1 align-items-stretch pb-2">
            <button @click="displayData" class="btn btn-primary btn-outline-success form-control">
                <span class="h3">Sauvegarder</span>
            </button>
        </div>

    </div>
</template>


<script>
import PersonnageDetails from './Personnage/PersonnageDetails.vue';
import CardNumber from './CardNumber.vue';
import Tableau from './Tableau.vue';
import {inject} from 'vue';

export default {
    name: "Overview",
    setup() {
        let personnage = inject('personnage');
        let origine = inject('data').origine;
        let sexe = inject('data').sexe;

        return {
            data: {
                origine,
                sexe,
            },
            personnage
        };
    },
    data() {
        return {
            tableau: {
                config: {
                    headers: [
                        {
                            nom: 'Groupe',
                            label: 'Groupe',
                            class: '',
                        },
                        {
                            nom: 'Caractéristique',
                            label: 'Carac.',
                            class: '',
                        },
                        {
                            nom: 'Bonus',
                            label: 'Bonus',
                            class: '',
                        },
                        {
                            nom: 'Total',
                            label: 'Total',
                            class: '',
                        }
                    ]
                },
                data: [
                    {
                        nom: 'Arts',
                        cara: 'Emp',
                        bonus: null,
                        total: 12
                    },
                    {
                        nom: 'Connaissances',
                        cara: 'Int',
                        bonus: null,
                        total: 12
                    },
                    {
                        nom: 'Éloquence',
                        cara: 'Emp',
                        bonus: null,
                        total: 12
                    },
                    {
                        nom: 'Finesse',
                        cara: 'Phy',
                        bonus: null,
                        total: 12
                    },
                    {
                        nom: 'Logique',
                        cara: 'Int',
                        bonus: null,
                        total: 12
                    },
                    {
                        nom: 'Perception',
                        cara: 'Int',
                        bonus: null,
                        total: 12
                    },
                    {
                        nom: 'Puissance',
                        cara: 'Phy',
                        bonus: null,
                        total: 45
                    },
                    {
                        nom: 'Ruse',
                        cara: 'Int',
                        bonus: null,
                        total: 33
                    },
                    {
                        nom: 'Sports',
                        cara: 'Phy',
                        bonus: null,
                        total: 45
                    },
                    {
                        nom: 'Volonté',
                        cara: 'Emp',
                        bonus: null,
                        total: 21
                    },
                ]
            }
        }
    },
    methods: {
        getPersonnageDetails(){
            const {atouts, handicaps, caracteristiques, ...character} = this.personnage;
            return character;
        },
        displayData(){
            console.dir(this.$data);
        }
    },
    components: {
        'CardNumber': CardNumber,
        'PersonnageDetails': PersonnageDetails,
        'Tableau': Tableau
    }
}
//<CardNumber v-for="caracteristique in caracteristiques" :key="caracteristique.nom" :title="caracteristique.nom"></CardNumber>
</script>

<style scoped>

</style>
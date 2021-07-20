<template>
    <div class="container-fluid wrapper pt-2">

        <div class="d-flex">

            <PersonnageDetails></PersonnageDetails>


            <div class="d-flex flex-column flex-grow-1 align-items-stretch">

                <div class="d-flex flex-wrap justify-content-evenly">
                    <template v-for="c in caracteristiques.slice(0, 4)" :key="c">
                        <CardNumber v-bind="c"></CardNumber>
                    </template>
                </div>

                <!-- Fatigue, Blessures, Seuil d'effort -->
                <div class="d-flex flex-wrap justify-content-evenly">
                    <template v-for="c in caracteristiques.slice(4, 7)" :key="c">
                        <CardNumber v-bind="c"></CardNumber>
                    </template>
                </div>

                <div class="d-flex flex-wrap justify-content-evenly">
                    <template v-for="c in caracteristiques.slice(7, 9)" :key="c">
                        <CardNumber v-bind="c"></CardNumber>
                    </template>
                </div>

                <div class="d-flex flex-wrap justify-content-center">
                    <template v-for="c in caracteristiques.slice(9, 11)" :key="c">
                        <CardNumber v-bind="c"></CardNumber>
                    </template>
                </div>
            </div>


        </div>


        <div class="d-flex">
            <table class="table table-bordered">
                <thead>Hello</thead>
                <tr>
                    <td>Cellule</td>
                    <td>Cellule</td>
                    <td>Cellule</td>
                    <td>Cellule</td>
                    <td>Cellule</td>
                </tr>
            </table>
        </div>

    </div>
</template>


<script lang="ts">
import PersonnageDetails from './Personnage/PersonnageDetails.vue';
import CardNumber from './CardNumber.vue';

export default {
    name: "Overview",
    data() {
        return {
            caracteristiques: [
                {
                    nom: 'Physique',
                    current: 45,
                    max: 45,
                    order: 1,
                },
                {
                    nom: 'Intelligence',
                    current: 33,
                    max: 33,
                    order: 1,
                },
                {
                    nom: 'Empathie',
                    current: 21,
                    max: 21,
                    order: 1,
                },
                {
                    nom: 'Synchronisation',
                    current: 40,
                    max: 40,
                    order: 1,
                },
                {
                    nom: 'Fatigue',
                    current: 0,
                    max: 5,
                    order: -1
                },
                {
                    nom: 'Blessures',
                    current: 0,
                    max: 5,
                    order: -1
                },
                {
                    nom: "Seuil d'effort",
                    current: 0,
                    max: 33,
                    order: -1
                },
                {
                    nom: 'Stress',
                    current: 0,
                    max: 33,
                    order: -1
                },
                {
                    nom: 'Ego',
                    current: 0,
                    max: 21,
                    order: -1
                },
                {
                    nom: 'Fortune',
                    current: 0,
                    max: 10,
                    order: 1
                },
                {
                    nom: 'Fatalité',
                    current: 0,
                    max: '??',
                    order: -1
                },
            ]
        }
    },
    components: {
        'CardNumber': CardNumber,
        'PersonnageDetails': PersonnageDetails
    }
}
//<CardNumber v-for="caracteristique in caracteristiques" :key="caracteristique.nom" :title="caracteristique.nom"></CardNumber>
</script>

<style scoped>

</style>
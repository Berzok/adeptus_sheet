<template>
    <div class="container-fluid wrapper pt-2">

        <div class="d-flex flex-column">

            <PersonnageDetails></PersonnageDetails>


            <template v-for="i in 4" :key="i">
                <CardNumber v-bind="caracteristiques[i]"></CardNumber>
            </template>

        </div>


        <div class="d-flex">
            <table>
                <tr>
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
                    max: 45
                },
                {
                    nom: 'Intelligence',
                    current: 33,
                    max: 33
                },
                {
                    nom: 'Empathie',
                    current: 21,
                    max: 21
                },
                {
                    nom: 'Synchronisation',
                    current: 40,
                    max: 40
                },
                {
                    nom: 'Stress',
                    current: 0,
                    max: 33
                },
                {
                    nom: 'Ego',
                    current: 0,
                    max: 21
                },
                {
                    nom: 'Fatigue',
                    current: 0,
                    max: 5
                },
                {
                    nom: 'Blessures',
                    current: 0,
                    max: 5
                },
                {
                    nom: "Seuil d'effort",
                    current: 0,
                    max: 33
                },
                {
                    nom: 'Fortune',
                    current: 0,
                    max: 10
                },
                {
                    nom: 'Fatalité',
                    current: 0,
                    max: 15
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
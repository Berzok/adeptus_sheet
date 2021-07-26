<template>

    <div>

        <Tableau :config="atouts.config" :data="atouts.data"></Tableau>

        <FormSelect :options="atouts.data"></FormSelect>

    </div>

</template>


<script lang="ts">

import FormSelect from "../FormSelect.vue";
import Tableau from "../Tableau.vue";

export default {
    name: 'Atout',
    mounted() {

    },
    data() {
        return {
            atouts: {
                config: {
                    headers: [
                        {
                            nom: 'Nom',
                            label: 'Nom',
                            class: '',
                        },
                        {
                            nom: 'Type',
                            label: 'Type',
                            class: '',
                        },
                        {
                            nom: 'Valeur',
                            label: 'Valeur',
                            class: '',
                        },
                        {
                            nom: 'Effet',
                            label: 'Effet',
                            class: '',
                        },
                        {
                            nom: 'Description',
                            label: 'Description',
                            class: ''
                        }
                    ],
                    emptyRows: 2
                },
                data: [
                    {
                        nom: '<select v-model="selected"> <option :value="" </select>',
                        type: 'Mental',
                        valeur: 10,
                        effet: 'Blabla',
                        description: 'froussard!'
                    },
                    {
                        nom: 'Fuyard',
                        type: 'Mental',
                        valeur: 10,
                        effet: 'Blabla',
                        description: 'froussard!'
                    },
                ]
            }
        }
    },
    components: {
        Tableau,
        FormSelect
    }
}
//<CardNumber v-for="caracteristique in caracteristiques" :key="caracteristique.nom" :title="caracteristique.nom"></CardNumber>
</script>

<style scoped>

</style>
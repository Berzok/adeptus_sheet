<template>

    <div class="text-center overflow-hidden">

        <div class="row border-bottom text-start mb-2 gx-0">

            <div class="col-1">
                <h4>Nom</h4>
            </div>
            <div class="col-1">
                <h4>Type</h4>
            </div>
            <div class="col-1">
                <h4>Valeur</h4>
            </div>
            <div class="col-4">
                <h4>Effet</h4>
            </div>
            <div class="col-5">
                <h4>Description</h4>
            </div>

        </div>

        <div v-for="d in atouts.data" :key="d" class="row text-start mb-1 gx-0">

            <div class="col-1">
                <select class="form-select">
                    <option v-for="a in atouts.data" :key="a" :value="a.id">{{ a.nom }}</option>
                </select>
            </div>

            <div class="col">
                <span class="form-control">
                    {{ d.type }}
                </span>
            </div>
            <div class="col">
                <span class="form-control">
                    {{ d.valeur }}
                </span>
            </div>
            <div class="col-4">
                <span class="form-control">
                    {{ d.effet }}
                </span>
            </div>
            <div class="col-5">
                <span class="form-control">
                    {{ d.description }}
                </span>
            </div>

        </div>

        <div class="row text-start gx-0">
            <div class="col-2">
                <button class="btn btn-success w-100">Ajouter un atout</button>
            </div>
        </div>

    </div>

</template>


<script lang="ts">

import FormSelect from "../FormSelect.vue";
import Tableau from "../Tableau.vue";

export default {
    name: 'Atout',
    data() {
        return {
            atouts: {
                data: [
                    {
                        nom: 'Fuyard',
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
            },
            handicaps: {
                data: [
                    {
                        nom: 'Fuyard',
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
    components: {}
}
//<CardNumber v-for="caracteristique in caracteristiques" :key="caracteristique.nom" :title="caracteristique.nom"></CardNumber>
</script>

<style scoped>

</style>
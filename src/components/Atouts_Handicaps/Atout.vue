<template>

    <div>

        <div v-for="d in persoAtout" :key="d" class="row text-start mb-1 gx-0">


            <div class="col-1">
                <select class="form-select">
                    <option v-for="a in atouts.data" :key="a" :value="a.nom" v-bind="isCurrent(a, d)">
                        {{ a.nom }}
                    </option>
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


<script>

import FormSelect from "../FormSelect.vue";
import Tableau from "../Tableau.vue";

export default {
    name: 'Atout',
    methods: {
        isCurrent(a, d) {
            return (a.nom === d.nom ? {
                selected: ''
            } : '');
        }
    },
    props: {
        persoAtout: {
            nom: String,
            type: String,
            valeur: Number,
            effet: String,
            description: String
        }
    },
    data() {
        return {
            atouts: {
                data: [
                    {
                        nom: 'Affaibli',
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
                    }
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
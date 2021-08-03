<template>
    <div class="container-fluid wrapper pt-2">

        <div class="d-flex flex-column">

            <div>

                <h3>Traumatismes</h3>

                <div class="row border-bottom text-start mb-2 gx-0">
                    <div v-for="h in headers" :key="h" :class="'col-' + h.colSize">
                        <h4>{{ h.nom }}</h4>
                    </div>
                </div>

                <div class="d-flex flex-wrap">
                    <template v-for="t in personnage.traumatismes" :key="t">
                        <div class="d-flex w-100 mb-2">
                            <Traumatisme :data="traumatismes" :bound="t" class="d-flex flex-fill me-1"></Traumatisme>
                            <button @click="retirerTraumatisme(t)" class="btn btn-danger">X</button>
                        </div>
                    </template>
                </div>

                <div class="col-2">
                    <button @click="ajouterTraumatisme()" class="btn btn-success w-100">Ajouter un traumatisme</button>
                </div>
            </div>

            <div>
                <hr/>
            </div>

            <div class="handicaps">

                <h3>Pertubations</h3>

                <div class="row border-bottom text-start mb-2 gx-0">
                    <div v-for="h in headers" :key="h" :class="'col-' + h.colSize">
                        <h4>{{ h.nom }}</h4>
                    </div>
                </div>

                <Perturbation></Perturbation>
            </div>

        </div>

    </div>
</template>


<script>
import {defineComponent, inject} from "vue";
import {remove} from 'lodash';
import Traumatisme from './Psychologie/Traumatisme.vue';
import Perturbation from './Psychologie/Perturbation.vue';

export default defineComponent({
    name: "Psychologie",
    setup(props) {
        let personnage = inject('personnage');
        let traumatismes = inject('data').traumatismes;
        let effondrements = inject('data').effondrements;
        let perturbations = inject('data').perturbations;

        return {
            personnage,
            traumatismes,
            effondrements,
            perturbations
        }
    },
    data() {
        return {
            headers: [
                {
                    nom: 'Nom',
                    colSize: 2
                },
                {
                    nom: 'Rang',
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
            ]
        }
    },
    methods: {
        ajouterTraumatisme() {
            this.personnage.traumatismes.push({
                nom: '',
                rang: 1
            })
        },
        retirerTraumatisme(t){
            remove(this.personnage.traumatismes, (v) => {
                return v.nom === t.nom;
            });
        }
    },
    components: {
        Traumatisme,
        //Perturbation
    }
})
//<CardNumber v-for="caracteristique in caracteristiques" :key="caracteristique.nom" :title="caracteristique.nom"></CardNumber>
</script>

<style scoped>

</style>
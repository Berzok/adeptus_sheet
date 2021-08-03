<template>

    <div class="card mb-3" style="width: 40%">
        <h4 class="card-header border-bottom">Détails du personnage</h4>
        <div class="d-flex align-items-stretch g-0">

            <div id="imagePersonnage" class="img-fluid rounded border border-white flex-fill flex-grow-1"></div>

            <div class="p-3 d-flex flex-column justify-content-end">

                <div class="row">
                    <label for="nomPersonnage" class="col col-form-label">Nom: </label>
                    <div class="col-auto">
                        <input id="nomPersonnage" class="form-control" v-model="details.nom">
                    </div>
                </div>

                <div class="row">
                    <label for="prenomPersonnage" class="col col-form-label">Prénom: </label>
                    <div class="col-auto">
                        <input id="prenomPersonnage" class="form-control" v-model="details.prenom">
                    </div>
                </div>

                <div class="row">
                    <FormSelect
                            :data="data.origine"
                            :label="'Origine'"
                            :bound="personnage.origine">
                    </FormSelect>
                </div>

                <hr/>

                <div class="row">
                    <FormSelect
                            :data="data.sexe"
                            :label="'Sexe'"
                            :bound="personnage.sexe">
                    </FormSelect>
                </div>

                <div class="row">
                    <label for="agePersonnage" class="col col-form-label">Âge: </label>
                    <div class="col-auto">
                        <input id="agePersonnage" class="form-control" type="number" v-model="details.age">
                    </div>
                </div>

                <div class="row">
                    <label for="taillePersonnage" class="col col-form-label">Taille: </label>
                    <div class="col-auto">
                        <input id="taillePersonnage" class="form-control" type="number" v-model="details.taille">
                    </div>
                </div>

                <div class="row">
                    <label for="massePersonnage" class="col col-form-label">Masse: </label>
                    <div class="col-auto">
                        <input id="massePersonnage" class="form-control" type="number" v-model="details.masse">
                    </div>
                </div>

                <hr/>

                <div class="row">
                    <label for="nationPersonnage" class="col col-form-label">Nationalité: </label>
                    <div class="col-auto">
                        <input id="nationPersonnage" class="form-control" type="text" v-model="details.nationalite">
                    </div>
                </div>

                <div class="row">
                    <label for="ethniePersonnage" class="col col-form-label">Ethnicité: </label>
                    <div class="col-auto">
                        <input id="ethniePersonnage" class="form-control" type="text" v-model="details.ethnicite">
                    </div>
                </div>

            </div>
        </div>

        <div class="card-footer d-flex flex-column">
            <label for="descriptionPersonnage" class="form-label">Description/histoire: </label>
            <textarea v-model="details.description" id="descriptionPersonnage" class="form-control" rows="7"></textarea>
        </div>

    </div>
</template>


<script>
import {defineComponent, reactive, ref} from 'vue';
import FormSelect from "../FormSelect.vue";

export default defineComponent({
    name: 'PersonnageDetails',
    setup(props){
        return {
            details: reactive(props.personnage)
        }
    },
    props: {
        data: {
            origine: {
                nom: String,
                value: Number
            },
            sexe: {
                nom: String,
                value: Number,
            }
        },
        personnage: {
            nom: String,
            prenom: String,
            age: Number,
            description: String,
        }
    },
    emits: [
        'update:description',
    ],
    components: {
        'FormSelect': FormSelect
    }
})
</script>

<style scoped>
#imagePersonnage{
    background-image: url('~@/assets/asuka.jpg');
    background-size: cover;
}
</style>
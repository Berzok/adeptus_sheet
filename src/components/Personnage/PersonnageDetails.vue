<template>

    <div class="card mb-3" style="width: 40%">
        <h4 class="card-header border-bottom">Détails du personnage</h4>
        <div class="d-flex align-items-stretch g-0">

            <div id="imagePersonnage" class="img-fluid rounded border border-white flex-fill flex-grow-1"></div>

            <div class="p-3 d-flex flex-column justify-content-end">

                <div class="row">
                    <label for="nomPersonnage" class="col col-form-label">Nom: </label>
                    <div class="col-auto">
                        <input id="nomPersonnage" class="form-control" :value="details.nom">
                    </div>
                </div>

                <div class="row">
                    <label for="prenomPersonnage" class="col col-form-label">Prénom: </label>
                    <div class="col-auto">
                        <input id="prenomPersonnage" class="form-control" :value="details.prenom">
                    </div>
                </div>

                <div class="row">
                    <FormSelect v-bind="origine"></FormSelect>
                </div>

                <hr/>

                <div class="row">
                    <FormSelect v-bind="sexe"></FormSelect>
                </div>

                <div class="row">
                    <label for="agePersonnage" class="col col-form-label">Âge: </label>
                    <div class="col-auto">
                        <input id="agePersonnage" class="form-control" type="number" :value="details.age">
                    </div>
                </div>

                <div class="row">
                    <label for="taillePersonnage" class="col col-form-label">Taille: </label>
                    <div class="col-auto">
                        <input id="taillePersonnage" class="form-control" type="number" :value="details.taille">
                    </div>
                </div>

                <div class="row">
                    <label for="massePersonnage" class="col col-form-label">Masse: </label>
                    <div class="col-auto">
                        <input id="massePersonnage" class="form-control" type="number" :value="details.masse">
                    </div>
                </div>

                <hr/>

                <div class="row">
                    <label for="nationPersonnage" class="col col-form-label">Nationalité: </label>
                    <div class="col-auto">
                        <input id="nationPersonnage" class="form-control" type="text" :value="details.nationalite">
                    </div>
                </div>

                <div class="row">
                    <label for="ethniePersonnage" class="col col-form-label">Ethnicité: </label>
                    <div class="col-auto">
                        <input id="ethniePersonnage" class="form-control" type="text" :value="details.ethnicite">
                    </div>
                </div>

            </div>
        </div>

        <div class="card-footer d-flex flex-column">
            <label for="descriptionPersonnage" class="form-label">Description/histoire: </label>
            <textarea :value="details.description" id="descriptionPersonnage" class="form-control" rows="7"></textarea>
        </div>

    </div>
</template>


<script>
import FormSelect from "../FormSelect.vue";

export default {
    name: 'PersonnageDetails',
    props: {
        details: Object
    },
    emits: [
        'update:description',
    ],
    components: {
        'FormSelect': FormSelect
    },
    data() {
        return {
            origine: {
                label: 'Origine',
                options: [
                    {
                        nom: '',
                        value: null
                    },
                    {
                        nom: 'Néo-spartiate',
                        value: 1
                    },
                    {
                        nom: 'Manufacturé',
                        value: 2
                    },
                    {
                        nom: 'Enfant-poster',
                        value: 3
                    },
                    {
                        nom: 'Survivant',
                        value: 4
                    },
                ]
            },
            sexe: {
                label: 'Sexe',
                options: [
                    {
                        nom: '',
                        value: null,
                    },
                    {
                        nom: 'M',
                        value: 1,
                    },
                    {
                        nom: 'F',
                        value: 2,
                    }
                ]
            }
        }
    }
}
</script>

<style scoped>
#imagePersonnage{
    background-image: url('~@/assets/asuka.jpg');
    background-size: cover;
}
</style>
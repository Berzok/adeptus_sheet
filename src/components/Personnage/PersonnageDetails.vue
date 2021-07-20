<template>

    <div class="card mb-3" style="width: 60%">
        <h4 class="card-header">Détails du personnage</h4>
        <div class="d-flex align-items-stretch g-0">

            <img src="@/assets/logo.png" class="img-fluid rounded-start flex-fill h-100" alt="...">

            <div class="card-body d-flex flex-column flex-wrap">

                <div class="row">
                    <label for="nomPersonnage" class="col col-form-label">Nom: </label>
                    <div class="col-auto flex-fill">
                        <input id="nomPersonnage" class="form-control">
                    </div>
                </div>

                <div class="row">
                    <label for="prenomPersonnage" class="col col-form-label">Prénom: </label>
                    <div class="col-auto flex-fill">
                        <input id="prenomPersonnage" class="form-control">
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
                    <div class="col-auto flex-fill">
                        <input id="agePersonnage" class="form-control" type="number">
                    </div>
                </div>

                <div class="row">
                    <label for="taillePersonnage" class="col col-form-label">Taille: </label>
                    <div class="col-auto flex-fill">
                        <input id="taillePersonnage" class="form-control" type="number">
                    </div>
                </div>

                <div class="row">
                    <label for="massePersonnage" class="col col-form-label">Masse: </label>
                    <div class="col-auto flex-fill">
                        <input id="massePersonnage" class="form-control" type="number">
                    </div>
                </div>

                <hr/>

                <div class="row">
                    <label for="nationPersonnage" class="col col-form-label">Nationalité: </label>
                    <div class="col-auto flex-fill">
                        <input id="nationPersonnage" class="form-control" type="text">
                    </div>
                </div>

                <div class="row">
                    <label for="ethniePersonnage" class="col col-form-label">Ethnicité: </label>
                    <div class="col-auto flex-fill">
                        <input id="ethniePersonnage" class="form-control" type="text">
                    </div>
                </div>

            </div>
        </div>

        <div class="card-footer d-flex flex-column">
            <label for="descriptionPersonnage" class="form-label">Description/histoire: </label>
            <textarea id="descriptionPersonnage" class="form-control" rows="7"></textarea>
        </div>

    </div>
</template>


<script lang="ts">
import FormSelect from "../FormSelect.vue";

export default {
    name: 'PersonnageDetails',
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

</style>
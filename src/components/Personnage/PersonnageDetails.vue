<template>
    <div class="card mb-3 mw-75">
        <h4 class="card-header">Détails du personnage</h4>
        <div class="d-flex g-0">
            <div class="">
                <img src="@/assets/logo.png" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="card-body d-flex flex-column align-content-center">
                <div class="row">
                    <label for="nomPersonnage" class="col-lg-1 control-label col-form-label">Nom: </label>
                    <div class="col">
                        <input id="nomPersonnage" class="form-control">
                    </div>
                </div>

                <div class="row">
                    <label for="prenomPersonnage" class="col-lg-1 col-form-label">Prénom: </label>
                    <div class="col">
                        <input id="prenomPersonnage" class="form-control">
                    </div>
                </div>

                <hr/>

                <div class="row">
                    <label for="originePersonnage" class="col-lg-1 col-form-label">Origine: </label>
                    <div class="col">
                        <select id="originePersonnage" class="form-select"></select>
                    </div>
                </div>

                <hr />


            </div>
        </div>
    </div>
</template>


<script lang="ts">
export default {
    name: 'PersonnageDetails'
}
</script>

<style scoped>

</style>
<template>

    <div class="card mb-4">
        <div class="card-body">
            <h5 class="card-title">{{ nom }}</h5>
            <p class="card-text">
                {{ current }} / {{ max }}
            </p>
        </div>
    </div>

</template>


<script lang="ts">
export default {
    name: 'PersonnageDetails',
    props: {
        nom: String,
        current: Number,
        max: Number
    }
}
</script>

<style scoped>

</style>
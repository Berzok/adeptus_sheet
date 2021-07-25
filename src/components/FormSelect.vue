<template>

    <label for="originePersonnage" class="col col-form-label">
        {{ label }}:
    </label>
    <div class="col-auto">
        <select id="originePersonnage" class="form-select">
            <option v-for="o in options" v-bind:key="o" :value="o.value">
                {{ o.nom }}
            </option>
        </select>
    </div>

</template>


<script lang="ts">
export default {
    name: 'FormSelect',
    props: {
        label: String,
        options: Array
    }
}
</script>

<style scoped>

</style>
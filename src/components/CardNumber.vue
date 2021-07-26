<template>

    <div class="card mb-4 text-center">
        <h5 class="card-header border-bottom">{{ nom }}</h5>
        <div class="card-body">
            <div class="input-group input-group-lg flex-nowrap">
                <input :class="(current*order) < (max*order) ? 'text-warning' : 'text-success'" class="form-control text-center p-0" maxlength="2" type="text" size="2" :value="current">
                <span class="input-group-text">/</span>
                <input class="text-success form-control text-center bg-dark p-0" :value="max" maxlength="2" type="text" size="2">
            </div>
            <h3 class="card-text">
            </h3>
        </div>
    </div>

</template>


<script lang="ts">
export default {
    name: 'CardNumber',
    props: {
        nom: String,
        current: Number,
        max: [Number, String],
        order: Number
    }
}

</script>

<style scoped>

</style>
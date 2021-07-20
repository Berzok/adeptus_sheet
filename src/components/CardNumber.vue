<template>

    <div class="card mb-4 text-center">
        <h5 class="card-header border-bottom">{{ nom }}</h5>
        <div class="card-body">
            <h3 class="card-text">
                <span :class="(current*order) < (max*order) ? 'text-warning' : 'text-success'">{{ current }}</span>
                /
                <span class="text-success">{{ max }}</span>
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
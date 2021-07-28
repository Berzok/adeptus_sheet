<template>

    <div class="card mb-4 text-center">
        <h5 class="card-header border-bottom">{{ nom }}</h5>
        <div class="card-body">
            <div class="input-group input-group-lg flex-nowrap">
                <input ref="current" :value="current" class="form-control text-center p-0" maxlength="2" type="text"
                       size="2" @input="checkValue($event, max, order)">
                <span class="input-group-text">/</span>
                <input ref="max" :value="max" class="text-success form-control text-center bg-dark p-0" maxlength="2"
                       type="text"
                       size="2">
            </div>
            <h3 class="card-text">
            </h3>
        </div>
    </div>

</template>


<script>
import * as Vue from 'vue';

export default {
    name: 'CardNumber',
    props: {
        nom: String,
        current: Number,
        max: [Number, String],
        order: Number
    },
    methods: {
        checkValue(current, max, order) {
            console.dir(current.target.value);
            current = Number.parseInt(current.target.value);
            console.dir(max);
            console.dir(order);
            let classToToggle = (current * order) < (max * order) ? 'text-warning' : 'text-success';
            this.$refs.current.classList.toggle(classToToggle);
        }
    },
    created() {
    }
}

</script>

<style scoped>

</style>
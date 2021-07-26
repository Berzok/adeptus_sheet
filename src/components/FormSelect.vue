<template>

    <label v-if="label" for="originePersonnage" class="col col-form-label">
        {{ label }}:
    </label>
    <div class="col-auto">
        <select id="originePersonnage" class="form-select">
            <option v-for="o in options" v-bind:key="o" :value="o.value">
                {{ o.nom }}
            </option>
            <option selected></option>
        </select>
    </div>
    {{ CDNJS() }}
</template>


<script lang="ts">
import * as Vue from 'vue';
import axios from "axios";

export default Vue.defineComponent({
    name: 'FormSelect',
    props: {
        label: String,
        options: Array
    },
    methods: {
        CDNJS() {
            return axios.get('https://api.cdnjs.com/libraries/jquery').then(r => {
                console.dir(r.data.name);
                return r.data.name;
            });
        }
    },
    created() {
        this.CDNJS();
    }
})
</script>

<style scoped>

</style>
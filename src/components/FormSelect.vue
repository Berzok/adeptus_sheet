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
</template>


<script lang="ts">
import * as Vue from 'vue';
import axios from "axios";

export default Vue.defineComponent({
    name: 'FormSelect',
    props: {
        label: String
    },
    data() {
        return {
            options: {}
        }
    },
    methods: {
        async getOptions(route, params) {
            const { data } = await axios.get('http://esoteria_api/atouts/getAll');
            this.$data.options = data;
        }
    },
    created() {
        this.getOptions('atouts', 'getAll');
    }
})
</script>

<style scoped>

</style>
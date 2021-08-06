<template>

    <label for="originePersonnage" class="col col-form-label">
        {{ label }}:
    </label>
    <div class="col-auto">
        <select id="originePersonnage" v-model="selected" class="form-select">
            <option></option>
            <option v-for="d in data" :key="d" :value="d._id" :selected="d._id === selected">
                {{ d.nom }}
            </option>
        </select>
    </div>
</template>


<script>
import {defineComponent, reactive, ref, toRefs} from "vue";
import {isEqual} from 'lodash';

export default defineComponent({
    name: 'FormSelect',
    setup(props){
        let selected = reactive(Object(props.bound));

        console.dir(selected);
        return {
            selected
        }
    },
    props: {
        label: String,
        data: Array,
        bound: String
    },
    methods: {
        objectEquals(a, b){
            return isEqual(a, b);
        },
    }
})
</script>

<style scoped>

</style>
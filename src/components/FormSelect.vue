<template>

    <label for="originePersonnage" class="col col-form-label">
        {{ label }}:
    </label>
    <div class="col-auto">
        <select id="originePersonnage" @change="setSelected($event, index)" class="form-select">
            <option></option>
            <option v-for="d in data" :key="d" :value="d.value" :selected="objectEquals(d, selected)">
                {{ d.nom }}
            </option>
        </select>
    </div>
</template>


<script>
import {defineComponent, reactive} from "vue";
import {isEqual} from 'lodash';

export default defineComponent({
    name: 'FormSelect',
    setup(props){
        return {
            selected: reactive(props.bound)
        }
    },
    props: {
        label: String,
        data: Array,
        bound: Object
    },
    methods: {
        setSelected($event, index) {
            let dataIndex = $event.target.selectedIndex - 1;
            this.selected.nom = this.$props.data[dataIndex].nom;
            this.selected.value = this.$props.data[dataIndex].value;
        },
        objectEquals(a, b){
            return isEqual(a, b);
        },
    }
})
</script>

<style scoped>

</style>
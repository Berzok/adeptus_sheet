<template>

  <select class="form-select" @change="loadPersonnage">
    <option value="0" disabled>Please select one</option>
    <option v-for="p in this.personnages" :value="p.id">
      {{ p.prenom }}
    </option>
  </select>

</template>

<script>
import {defineComponent} from "vue";
import Dropdown from 'primevue/dropdown';
import axios from "axios";

export default defineComponent({
    name: 'CharacterSelect',
    components: {},
    computed: {},
    data() {
        return {
            personnages: [],
            currentOption: {},
            selected: this.personnage
        }
    },
    mounted() {
        axios.post('/personnages/list').then((response, error) => {
            this.personnages = response.data;
        });
    },
    methods: {
        loadPersonnage(e) {
            let url = '/personnage/get/empty';
            if(e.target.value > 0){
                url = '/personnage/get/' + e.target.value;
            }
            axios.post(url).then((response, error) => {
                this.selected = response.data;
                this.$emit('update:modelValue', this.selected)
            });
        }
    },
    props: {
        personnage: {}
    }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

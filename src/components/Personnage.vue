<template>
  <div class="flex-fill m-3">
    <router-view :personnage="this.personnage"
								 :atouts="this.atouts"
                 :handicaps="this.handicaps"
                 :competences="this.competences"
                 :competences_specialisations="this.competences_specialisations"
                 :origines="this.origines"/>
  </div>
</template>

<script>
import {defineComponent, provide, reactive} from 'vue';
import axios from "axios";


//Could be useful:
// https://marozed.com/vue-cheatsheet/
export default defineComponent({
    name: 'Personnage',
    created() {
    },
    data() {
        return {
            atouts: [],
            handicaps: [],
            origines: [],
            competences: [],
            competences_specialisations: []
        }
    },
    computed: {
        CurrentComponent() {
            console.dir(this.$route.name);
            return this.$route.name;
        }
    },
    mounted() {
        axios.all([
            axios.get('/origines'),
            axios.get('/competences'),
            axios.get('/specialisations'),
            axios.get('/handicaps'),
            axios.get('/atouts')
        ]).then(axios.spread((origines, competences, specialisations, handicaps, atouts) => {
            this.origines = origines.data
            this.competences = competences.data
            this.competences_specialisations = specialisations.data
            this.handicaps = handicaps.data
            this.atouts = atouts.data
        }));
    },
    props: {
        personnage: {}
    }
})
</script>

<style scoped>

</style>
<template>

  <div class="d-flex">

    <PersonnageDetails :personnage="this.personnage" :origines="this.origines">
    </PersonnageDetails>

    <span class="mx-2"></span>

    <div class="d-flex flex-column flex-fill w-25">

      <div class="d-flex flex-column justify-content-evenly mb-4">

        <div class="d-flex justify-content-around mb-4">

          <CardNumber v-for="c in this.personnage.caracteristiques.slice(0, 4)" :key="c"
                      :nom="c.caracteristique.nom"
                      v-model:current="c.score"
                      v-model:max="c.score_max">
          </CardNumber>

        </div>

        <!-- Fatigue, Blessures, Seuil d'effort -->
        <div class="d-flex flex-wrap justify-content-around align-items-start">

          <CardNumber v-for="c in this.personnage.caracteristiques.slice(4)" :key="c"
                      :nom="c.caracteristique.nom"
                      v-model:current="c.score"
                      v-model:max="c.score_max"
          >
          </CardNumber>

        </div>
      </div>


      <div class="d-flex">

        <TabView class="w-100">
          <TabPanel header="Handicaps">
            <Handicaps :personnage="this.personnage"
                       :handicaps="this.handicaps"
            ></Handicaps>
          </TabPanel>
          <TabPanel header="Atouts">
            <Atouts :personnage="this.personnage"
										:atouts="this.atouts"
						></Atouts>
          </TabPanel>
          <TabPanel header="Aspects">
						<Aspects :personnage="this.personnage"
										 :aspects="this.personnage.aspects">
						</Aspects>
					</TabPanel>
        </TabView>
      </div>

    </div>
  </div>

</template>


<script>
import {defineComponent, inject} from 'vue';
import PersonnageDetails from './PersonnageDetails.vue';
import CardNumber from './../CardNumber.vue';
import Tableau from './../Tableau.vue';
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ToggleButton from 'primevue/togglebutton';
import InputText from 'primevue/inputtext';
import InputNumber from 'primevue/inputnumber';
import Handicaps from "./Handicaps";
import Atouts from "./Atouts";
import Aspects from "./Aspect";

export default defineComponent({
    name: "Overview",
    components: {
				Aspects,
        Atouts,
        Handicaps,
        CardNumber,
        PersonnageDetails,
        Tableau,
        Column,
        DataTable,
        InputNumber,
        InputText,
        TabPanel,
        TabView,
        ToggleButton
    },
    data() {
        return {
            specs: {}
        }
    },
    methods: {
        getSpecialisations(id_groupe) {
            return this.specs[id_groupe];
        },
    },
    beforeMount() {
        this.personnage.competences.forEach(element => {
            this.specs[element.groupe.id] = element.specialisations;
        });
    },
    watch: {
        // whenever question changes, this function will run
        question(newQuestion, oldQuestion) {
            if (newQuestion.indexOf('?') > -1) {
                this.getAnswer()
            }
        }
    },
    props: {
        personnage: {},
        handicaps: [],
				atouts: [],
        competences: [],
        competences_specialisations: [],
        origines: []
    }
})
//<CardNumber v-for="caracteristique in caracteristiques" :key="caracteristique.nom" :title="caracteristique.nom"></CardNumber>
</script>

<style scoped>

::v-deep(.p-tabview-panels) {
    border-right: 1px solid !important;
    border-bottom: 1px solid !important;
    border-left: 1px solid !important;
}

</style>
<template>


  <div class="d-flex">

    <Accordion class="w-100" :activeIndex="0">
      <AccordionTab header="Atouts">
        <DataTable>
          <Column field="specialisation.nom" header="Nom"></Column>
          <Column field="acquis" header="Acquis">
            <template #body="slotProps">
              <ToggleButton v-model="slotProps.data.acquis" onIcon="fas fa-check text-success"
                            offIcon="fas fa-times text-danger"/>
            </template>
          </Column>
          <Column field="maitrise" header="Maîtrisé">
            <template #body="slotProps">
              <ToggleButton v-model="slotProps.data.maitrise" onIcon="fas fa-check text-success"
                            offIcon="fas fa-times text-danger"/>
            </template>
          </Column>
          <Column field="bonus" header="Avance">
            <template #body="slotProps">
              <!--                  <InputText v-model="data.bonus" type="text" class="p-inputtext-sm" />-->
              <!--                  <input v-model="data.bonus" type="text" class="" />-->
              <InputNumber id="stacked" v-model="slotProps.data.bonus" showButtons/>
            </template>
          </Column>
          <Column header="Total">
            <template #body="slotProps">
              <input :value="slotProps.data.score + slotProps.data.bonus">
            </template>
          </Column>
        </DataTable>
      </AccordionTab>
      <AccordionTab header="Handicaps">

      </AccordionTab>
      <AccordionTab header="Aspects">

      </AccordionTab>
    </Accordion>

    <!--        <Tableau :config="tableau.config" :data="tableau.data"></Tableau>-->
  </div>

</template>


<script>
import {defineComponent, inject} from 'vue';
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ToggleButton from 'primevue/togglebutton';
import InputText from 'primevue/inputtext';
import InputNumber from 'primevue/inputnumber';

export default defineComponent({
    name: "AtoutsHandicaps",
    components: {
        Accordion,
        AccordionTab,
        DataTable,
        Column,
        ToggleButton,
        InputText,
        InputNumber
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
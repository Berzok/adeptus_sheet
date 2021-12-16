<template>


  <div class="d-flex flex-wrap">

    <div class="col-1">
      <div class="d-flex flex-column justify-content-evenly vh-100  position-fixed">
        <CardNumber v-for="c in this.personnage.caracteristiques.slice(0, 4)" :key="c"
                    :nom="c.caracteristique.abreviation + '.'"
                    v-model:current="c.score"
                    v-model:max="c.score_max" />
      </div>
    </div>

    <div class="col-11 row">
      <template v-for="c in this.personnage.competences" :key="c">
        <div class="col-6 mx-auto pb-4">
          <h5 class="p-m-0 fw-bolder p-text-italic">{{ c.groupe.nom }}</h5>

          <DataTable :value="c.specialisations" @cell-edit-complete="" showGridlines tableStyle="width:500px; border: 1px solid grey">
            <Column field="specialisation" header="Nom">
							<template #body="slotProps">
								<p :class="slotProps.data.specialisation.restreinte ?? 'text-danger'">{{ slotProps.data.specialisation.nom }}</p>
							</template>
						</Column>
            <Column field="acquis" header="Acquis" class="col-acquis">
              <template #body="slotProps">
                <ToggleButton v-model="slotProps.data.acquis" onIcon="fas fa-check text-success"
                              offIcon="fas fa-times text-danger"/>
              </template>
            </Column>
            <Column field="maitrise" header="Maîtrisé" class="col-maitrise">
              <template #body="slotProps">
                <ToggleButton v-model="slotProps.data.maitrise" onIcon="fas fa-check text-success"
                              offIcon="fas fa-times text-danger"/>
              </template>
            </Column>
            <Column field="bonus" header="Avance" class="col-bonus">
              <template #body="slotProps">
                <!--                  <InputText v-model="data.bonus" type="text" class="p-inputtext-sm" />-->
                <!--              <input v-model="slotProps.data.bonus" type="text" class=""/>-->
                <InputNumber id="" v-model="slotProps.data.bonus" showButtons/>
              </template>
            </Column>
            <Column header="Total" style="max-width: 8rem">
              <template #body="slotProps">
                <InputNumber :value="getScore(c, slotProps.data)"/>
              </template>
            </Column>
          </DataTable>
        </div>
      </template>

    </div>
    <!--        <Tableau :config="tableau.config" :data="tableau.data"></Tableau>-->
  </div>

</template>


<script>
import {defineComponent} from 'vue';
import CardNumber from "./../CardNumber";
import Button from 'primevue/button';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ToggleButton from 'primevue/togglebutton';
import InputText from 'primevue/inputtext';
import InputNumber from 'primevue/inputnumber';

export default defineComponent({
    name: "Competences",
    components: {
        Button,
        CardNumber,
        DataTable,
        Column,
        ToggleButton,
        InputText,
        InputNumber
    },
    data() {
        return {
        }
    },
    methods: {
        getScore(groupe, specialisation){
            let caracteristique = this.personnage.caracteristiques.filter(value => {
                return value.caracteristique.id === groupe.caracteristique.id;
            });
            caracteristique = caracteristique[0];

            return caracteristique.score + specialisation.bonus;
				}
    },
    beforeMount() {
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

::v-deep(.col-acquis) {
    width: 5rem !important;
}

::v-deep(.col-maitrise) {
    width: 5rem !important;
}

::v-deep(.col-bonus) {
    width: 6rem !important;
}

::v-deep(.p-button.p-button-icon-only) {
}

::v-deep(.p-togglebutton.p-button) {
    width: 100%;
}

::v-deep(.p-tabview-panels) {
    border-right: 1px solid !important;
    border-bottom: 1px solid !important;
    border-left: 1px solid !important;
}

::v-deep(.p-button.p-inputnumber-button) {
    width: 2rem;
}

::v-deep(.p-inputtext.p-inputnumber-input) {
    padding: 0.5rem !important;
    width: 25%;
}

::v-deep(table.p-datatable-table td) {
    padding: 0.25rem 0.5rem !important;
}

::v-deep(.p-datatable-table thead tr th) {
    padding: 0.5rem !important;
}
</style>
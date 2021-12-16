<template>

	<div class="d-flex flex-column">

		<div v-for="(d, index) in personnage.handicaps" :key="d" class="p-grid">

			<div class="p-col">
				<Dropdown v-model="this.personnage.handicaps[index]"
									:options="this.handicaps"
									optionLabel="nom"
									optionValue=""/>
			</div>


			<Button icon="pi pi-eye" class="p-button-info" @click="openModal(this.personnage.handicaps[index])"/>


			<Dialog :header="this.selected.nom" v-model:visible="displayModal" :modal="true">
				<div class="p-field">
					<label for="handicap_nom">Nom:</label>
					<InputText id="handicap_nom" :value="this.selected.nom" type="text" disabled/>
				</div>

				<div class="p-formgrid p-grid">
					<div class="p-field p-col">
						<label for="handicap_type">Type:</label>
						<InputText id="handicap_type" :value="this.selected.type" type="text" disabled/>
					</div>
					<div class="p-field p-col">
						<label for="handicap_valeur">Valeur:</label>
						<InputText id="handicap_valeur" :value="this.selected.valeur" type="text" disabled/>
					</div>
				</div>

				<div class="p-field">
					<label for="handicap_description">Description:</label>
					<Textarea id="handicap_description" :value="this.selected.description" :autoResize="true" rows="4" cols="30" disabled/>
				</div>

				<div class="p-field">
					<label for="handicap_description">Effet:</label>
					<Textarea id="handicap_effet" :value="this.selected.effet" :autoResize="true" rows="4" cols="30" disabled/>
				</div>

				<template #footer>
					<Button label="No" icon="pi pi-times" @click="closeModal" class="p-button-text"/>
					<Button label="Yes" icon="pi pi-check" @click="closeModal" autofocus/>
				</template>
			</Dialog>
			<Button icon="pi pi-times" class="btn-danger" @click="this.personnage.handicaps.splice(index, 1)"></Button>

		</div>

		<div class="row text-start gx-0">
			<div class="col-2">
				<Button label="Ajouter un handicap" icon="pi pi-plus" class="btn-success btn-outline" @click="this.personnage.handicaps.push({})"></Button>
			</div>
		</div>
	</div>

</template>


<script>
import {defineComponent} from 'vue';
import Button from 'primevue/button';
import Dropdown from 'primevue/dropdown';
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import Dialog from 'primevue/dialog';

export default defineComponent({
    name: 'Handicaps',
    components: {
        Button,
        Dialog,
        Dropdown,
        InputText,
        Textarea
    },
    data() {
        return {
            displayModal: false,
						selected: {
                nom: null,
								type: null,
								valeur: null,
								description: null,
								effet: null
						}
        }
    },
    methods: {
        openModal(handicap) {
            this.selected = handicap;
            this.displayModal = true;
        },
        closeModal() {
            this.displayModal = false;
        }
    },
    props: {
        personnage: {},
        handicaps: []
    }
});
</script>

<style scoped>

::v-deep(.p-inputtext) {
    width: 100%;
    padding: 0.5rem 0.25rem;
    margin-right: 0;
    margin-left: 0;
}

::v-deep(.p-component:disabled) {
    opacity: 1;
		color: blanchedalmond;
}

</style>
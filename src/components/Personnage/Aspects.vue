<template>

	<div class="d-flex flex-column">

		<div v-for="(d, index) in personnage.atouts" :key="d" class="p-grid">

			<div class="p-col">
				<Dropdown v-model="this.personnage.atouts[index].id" :options="this.atouts" optionLabel="nom" optionValue="id"/>
			</div>

			<Button icon="pi pi-eye" class="p-button-info" @click="openModal"/>
			<Dialog :header="d.nom" v-model:visible="displayModal" :modal="true">
				<div class="p-field">
					<label for="atout_nom">Nom:</label>
					<InputText id="atout_nom" :value="d.nom" type="text" disabled/>
				</div>

				<div class="p-formgrid p-grid">
					<div class="p-field p-col">
						<label for="atout_type">Type:</label>
						<InputText id="atout_type" :value="d.type" type="text" disabled/>
					</div>
					<div class="p-field p-col">
						<label for="atout_valeur">Valeur:</label>
						<InputText id="atout_valeur" :value="d.valeur" type="text" disabled/>
					</div>
				</div>

				<div class="p-field">
					<label for="atout_description">Description:</label>
					<Textarea id="atout_description" :value="d.description" :autoResize="true" rows="5" cols="30" disabled/>
				</div>

				<div class="p-field">
					<label for="atout_description">Effet:</label>
					<Textarea id="atout_effet" :value="d.effet" :autoResize="true" rows="5" cols="30" disabled/>
				</div>

				<template #footer>
					<Button label="No" icon="pi pi-times" @click="closeModal" class="p-button-text"/>
					<Button label="Yes" icon="pi pi-check" @click="closeModal" autofocus/>
				</template>
			</Dialog>
			<Button icon="pi pi-times" class="btn-danger" @click="this.personnage.atouts.splice(index, 1)"></Button>

		</div>

		<div class="row text-start gx-0">
			<div class="col-2">
				<Button label="Ajouter un atout" icon="pi pi-plus" class="btn-success btn-outline" @click="this.personnage.atouts.push({})"></Button>
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
    name: 'Atouts',
    components: {
        Button,
        Dialog,
        Dropdown,
        InputText,
        Textarea
    },
    data() {
        return {
            displayModal: false
        }
    },
    methods: {
        openModal() {
            this.displayModal = true;
        },
        closeModal() {
            this.displayModal = false;
        }
    },
    props: {
        personnage: {},
        atouts: []
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
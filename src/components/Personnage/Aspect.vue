<template>

	<div class="d-flex flex-column">

		<div v-for="(d, index) in personnage.aspects" :key="d" class="p-grid">

			<div class="p-col d-flex px-2">
				<InputText :value="this.personnage.aspects[index].nom" class="w-auto"/>
				<Dropdown v-model="this.personnage.aspects[index].type" :options="this.types" optionValue="" optionLabel="" panelClass="my-0"/>
			</div>

			<Button icon="pi pi-pencil" class="p-button-primary" @click="openModal($event, true)"/>
			<Button icon="pi pi-eye" class="p-button-info" @click="openModal"/>
			<Button icon="pi pi-times" class="btn-danger" @click="this.personnage.aspects.splice(index, 1)"></Button>

			<Dialog :header="d.nom ?? ' '" v-model:visible="displayModal" :modal="true">
				<div class="p-field">
					<label for="aspect_nom" class="w-100">Nom:</label>
					<InputText id="aspect_nom" v-model="d.nom" type="text" :disabled="!this.modalMode"/>
				</div>

				<div class="p-field">
					<label for="aspect_type" class="w-100">Type:</label>
					<Dropdown id="aspect_type" v-model="d.type" :options="this.types" optionLabel="" optionValue="" :disabled="!this.modalMode"/>
				</div>

				<div class="p-field">
					<label for="aspect_description" class="w-100">Description:</label>
					<Textarea id="aspect_description" v-model="d.description" :autoResize="true" rows="5" cols="30" :disabled="!this.modalMode"/>
				</div>

				<template #footer>
					<Button label="Annuler" icon="pi pi-times" @click="closeModal" class="p-button-text"/>
					<Button v-if="!this.modalMode" label="Créer" icon="pi pi-plus" @click="closeModal" autofocus/>
					<Button v-else label="Valider" icon="pi pi-check" @click="closeModal" autofocus/>
				</template>
			</Dialog>

		</div>

		<div class="row text-start gx-0">
			<div class="col-2">
				<Button label="Ajouter un aspect" icon="pi pi-plus" class="btn-success btn-outline" @click="createAspect()"></Button>
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
import axios from "axios";

export default defineComponent({
    name: 'Aspects',
    components: {
        Button,
        Dialog,
        Dropdown,
        InputText,
        Textarea
    },
    data() {
        return {
            types: ['Defining', 'Character', 'Trauma'],
            displayModal: false,
						modalMode: false
        }
    },
    methods: {
        /**
         * @param event
         * @param {Boolean} edit Configuration of the modal
         * <br />- 0 (default): for read-only
         * <br />- 1: opens the modal in edition mode
         */
        openModal(event, edit = false) {
            this.modalMode = edit;
            this.displayModal = true;
        },
        closeModal() {
            this.displayModal = false;
        },
        createAspect() {
            this.personnage.aspects.push({
                nom: '',
                type: {},
                description: ''
            });
            this.openModal(null, true);
        }
    },
    mounted() {},
    props: {
        personnage: {},
        aspects: []
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
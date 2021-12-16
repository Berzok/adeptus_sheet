<template>

	<div class="d-flex flex-column mt-3">

		<h1>Choisissez un personnage</h1>

		<hr class="mb-5"/>

		<Carousel :value="this.personnages"
							:numScroll="1"
							:circular="true"
							class="flex-fill"
		>
			<template #item="slotProps">
				<div class="product-item">
					<div class="product-item-content">
						<div class="p-mb-3">
							<Image :src="getImageSource(slotProps.data.image)"
										 imageClass="img-fluid img-carousel rounded border border-dark"
										 @click="loadPersonnage(slotProps.data.id)"
							></Image>
						</div>
						<div>
							<h4 class="p-mb-1">{{ slotProps.data.prenom }}</h4>
						</div>
					</div>
				</div>
			</template>
		</Carousel>

		<hr class="border-top"/>
		<div class="align-self-center">
			<Button label="Saisir token" icon="pi pi-key" class="btn btn-secondary" @click="openDialog"/>
			<hr/>
			<Button label="Créer un personnage" icon="pi pi-plus" class="btn btn-success" @click="createPersonnage"/>
		</div>

		<Dialog v-model:visible="tokenDialog" header="Token" :modal="true">
			<div class="p-fluid mb-4">
				<InputText id="token" v-model="this.token" type="text" autofocus/>
			</div>
			<div class="text-center">
				<Button label="Valider" icon="pi pi-check" class="btn btn-info" @click="closeDialog"/>
			</div>
		</Dialog>

	</div>
</template>


<script>
import {defineComponent} from "vue";
import axios from "axios";
import Button from 'primevue/button';
import Carousel from 'primevue/carousel';
import InputText from 'primevue/inputtext';
import Dialog from 'primevue/dialog';
import Image from 'primevue/image';
import router from './../../router';
import {useStore} from "./../../store/personnage";
import {useToast} from 'vue-toastification';
import {mapActions, mapState, mapWritableState} from "pinia";

export default defineComponent({
    name: 'Login',
    components: {
        Button,
        Dialog,
        Carousel,
        Image,
        InputText
    },
    computed: {
        // gives access to this.counter inside the component and allows setting it
        // this.counter++
        // same as reading from store.counter
        ...mapWritableState(useStore, ['token']),
        ...mapState(useStore, ['isLogged'])
    },
    data() {
        return {
            personnages: [],
            currentOption: {},
            selected: this.personnage,
            tokenDialog: false,
            toast: useToast()
        }
    },
    mounted() {
        axios.get('/personnages/list').then((response, error) => {
            this.personnages = response.data;
            console.dir(this.personnages);
        });
    },
    methods: {
        // gives access to this.increment() inside the component
        // same as calling from store.increment()
        ...mapActions(useStore, ['checkToken']),
        ...mapActions(useStore, ['log']),
        createPersonnage() {
            const store = useStore();
            store.logEmpty().then(() => {
                if (store.isLogged) {
                    router.push({name: 'overview'});
                }
            });
        },
        loadPersonnage(id) {
            //const store = useStore();
            if (this.token == null) {
                this.toast.error('Token manquant');
                return;
            }
            if (this.checkToken()) {
                this.log(id).then(() => {
                    if (this.isLogged) {
                        router.push({name: 'overview'});
                    }
                });
            }
        },
        getImageSource(uri) {
            return process.env.VITE_API_URL + '/image/get/' + uri;
        },
        openDialog() {
            this.tokenDialog = true;
        },
        closeDialog() {
            this.tokenDialog = false;
        }
    },
    props: {
        personnage: {}
    }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

::v-deep(.img-carousel) {
    height: 400px;
    width: 400px;
    object-fit: cover;
}

::v-deep(.p-dialog .p-dialog-footer) {
    text-align: center;
}

</style>

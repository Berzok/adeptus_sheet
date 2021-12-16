<template>

	<nav class="navbar navbar-expand pt-0 bg-secondary border-end border-info sticky-top flex-column">

		<Image id="navbar_image"
					 :src="getImageSource"
					 imageClass="rounded border border-dark"
		></Image>

		<hr />

		<Button label="Déconnexion" icon="pi pi-sign-out" class="btn btn-danger btn-outline-dark" @click="logout"/>

		<ul class="nav nav-tabs flex-column w-100 mt-5">
			<li v-for="p in pages" :key="p" class="nav-item my-3">
				<router-link v-if="p.enabled" :to="p.route" active-class="active" class="nav-link">{{ p.nom }}</router-link>
			</li>
		</ul>

		<button class="btn btn-primary btn-outline-success" @click="save">Enregistrer</button>

	</nav>
</template>

<script>
import {defineComponent} from "vue";
import {useStore} from "./../store/personnage";
import router from "./../router";
import axios from "axios";
import Button from 'primevue/button';
import Image from "primevue/image";

export default defineComponent({
    name: 'Navbar',
    components: {
        Button,
        Image
    },
    computed: {
        getImageSource() {
            let src = './placeholder.jpg';
            if (this.personnage.image) {
                src = process.env.VITE_API_URL + '/image/get/' + this.personnage.image;
            }
            return src;
        }
    },
    data() {
        return {
            selected: {},
            pages: [
                {
                    nom: 'Aperçu',
                    route: '/overview',
                    enabled: true
                },
                {
                    nom: 'Compétences',
                    route: '/competences',
                    enabled: true
                },
                {
                    nom: 'Psychologie',
                    route: '/psychologie',
                    enabled: false
                }
            ]
        }
    },
    mounted() {
    },
    methods: {
        save() {
            let dataToSend = this.personnage;
						console.dir(dataToSend);
            dataToSend.image = dataToSend.image.split('/').pop();
            axios.post('/personnage/save', dataToSend).then((response, error) => {
                //this.personnage = response.data;
            });
        },
				logout(){
						const store = useStore();
            store.$reset();
            router.push({name: 'login'});
				}
    },
    props: {
        personnage: {}
    }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

nav {
    width: 150px !important;
}

::v-deep(#navbar_image) {
    object-fit: cover;
    width: 150px;
}

a.nav-link.active {
    border: 2px solid #ea39b8;
    border-left: none;
    border-right: none;
    box-shadow: 2px 0 1px #17082e;
}
</style>

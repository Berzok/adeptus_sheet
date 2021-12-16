<template>
	<div class="flex-fill text-center">

		<h1>Choisissez un personnage</h1>

		<hr class="mb-5" />

		<Carousel :value="this.personnages"
							:numVisible="4"
							:numScroll="1"
		>
			<template #item="slotProps">
				<div class="product-item">
					<div class="product-item-content">
						<div class="p-mb-3">
							<Image :src="slotProps.data.image"
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
	</div>
</template>


<script>
import {defineComponent} from "vue";
import axios from "axios";
import Carousel from 'primevue/carousel';
import Image from 'primevue/image';
import router from './../router';
import {useStore} from "./../store/personnage";

export default defineComponent({
    name: 'Home',
    components: {
        Carousel,
				Image
    },
    data() {
        return {
            personnages: [],
            currentOption: {},
            selected: this.personnage
        }
    },
    mounted() {
        axios.get('/personnages/list').then((response, error) => {
            this.personnages = response.data;
        });
    },
    methods: {
        async loadPersonnage(id) {
            const store = useStore()

            console.dir(id);
            let url = '/personnage/get/empty';
            if (id > 0) {
                url = '/personnage/get/' + id;
            }
            axios.get(url).then((response, error) => {
                this.selected = response.data;
                this.$emit('update:modelValue', this.selected);
            		store.log(response.data.id);
                router.push({name: 'Overview'});
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

::v-deep(.img-carousel) {
    height: 400px;
    width: 400px;
    object-fit: cover;
}

</style>

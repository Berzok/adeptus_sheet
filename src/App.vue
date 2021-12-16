<template>

	<div class="d-flex flex-nowrap">

		<div class="d-flex flex-column">
			<!-- <Navbar v-if="!['Home'].includes(this.$route.name)"/> -->
			<template v-if="this.personnage">
				<CharacterSelect v-model="this.personnage" class="px-0"/>
				<Navbar :personnage="this.personnage"/>
			</template>
		</div>

		<Spinner/>

		<!--		<Personnage v-if="this.personnage" :personnage="this.personnage"/>-->
		<router-view v-model:personnage="this.personnage"/>

	</div>
	<!--
  <div class="d-flex min-vh-100">
      <Sidemenu class="navbar order-1 bg-primary"></Sidemenu>
      <Wrapper>
      </Wrapper>
  </div>
  -->
</template>

<script>
import {defineComponent} from 'vue';
import {mapWritableState} from 'pinia';
import {useStore} from "./store/personnage";
import axios from "axios";
import Navbar from './components/Navbar';
import Spinner from './components/Spinner';
import CharacterSelect from "./components/CharacterSelect";
import Personnage from "./components/Personnage";

//Could be useful:
// https://marozed.com/vue-cheatsheet/
export default defineComponent({
    name: 'App',
    components: {
        Spinner,
        Navbar,
        CharacterSelect,
        Personnage
    },
    computed: {
        // gives access to this.counter inside the component and allows setting it
        // this.counter++
        // same as reading from store.counter
        ...mapWritableState(useStore, ['personnage'])
    },
    data() {
    },
    beforeMount() {
        return axios.post('/personnage/get/empty').then((response, error) => {
            //this.personnage = response.data;
        });
    },
})
</script>

<style lang="scss">
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css");

label, span {
  user-select: none;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
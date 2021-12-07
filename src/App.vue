<template>
    <Navbar/>
    <Spinner/>
    <div class="d-flex flex-nowrap">
        <router-view/>
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
import Navbar from './components/Navbar';
import Spinner from './components/Spinner';
import axios from "axios";

//Could be useful:
// https://marozed.com/vue-cheatsheet/
export default defineComponent({
    name: 'App',
    components: {
        Spinner,
        Navbar
    },
    data() {
        return {
            personnage: {}
        }
    },
    mounted() {
        //let info = useSWRV('http://www.esoteria.arae.rest/personnage/get/610bad0266bb93101bfee7bf', getPersonnage);
        axios.post('http://www.esoteria.arae.rest/personnage/get/610bad0266bb93101bfee7bf').then((response, error) => {
            const data = response.data;
            this.personnage = data;
        });
        //console.dir(Neutralino);
        console.dir(this.personnage);
        //Neutralino.storage.setData('personnage', this.personnage);
    },
    computed: {
    },
})
</script>

<style>

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
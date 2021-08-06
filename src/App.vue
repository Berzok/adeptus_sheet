<template>
    <div class="d-flex min-vh-100">
        <Sidemenu class="navbar order-1 bg-primary"></Sidemenu>
        <Wrapper>
        </Wrapper>
    </div>
</template>

<script>
import {provide, reactive} from 'vue';
import Sidemenu from './components/Sidemenu';
import Wrapper from "./components/Wrapper";


//Could be useful:
// https://marozed.com/vue-cheatsheet/
export default {
    name: 'App',
    components: {
        Wrapper,
        'Sidemenu': Sidemenu
    },
    data: () => ({
        currentRoute: window.location.pathname
    }),
    setup() {

        //let info = useSWRV('http://www.esoteria.arae.rest/personnage/get/610bad0266bb93101bfee7bf', getPersonnage);
    },
    computed: {
        CurrentComponent() {
            console.dir(this.$route.name);
            return this.$route.name;
        }
    },
}
</script>

<style>
@import '~bootswatch/dist/darkly/bootstrap.min.css';

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
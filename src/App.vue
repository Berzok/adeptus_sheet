<template>
    <div class="d-flex min-vh-100">
        <Sidemenu class="navbar bg-primary"></Sidemenu>
        <router-view class="flex-grow-1 border border-2 border-secondary"></router-view>
    </div>
</template>

<script>
import {h} from 'vue';
import Sidemenu from './components/Sidemenu';


//Could be useful:
// https://marozed.com/vue-cheatsheet/
export default {
    name: 'App',
    components: {
        'Sidemenu': Sidemenu
    },
    data: () => ({
        currentRoute: window.location.pathname
    }),
    computed: {
        CurrentComponent() {
            console.dir(this.$route.name);
            return this.$route.name;
        }
    },
    render() {
        return h(this.CurrentComponent);
    }
}
</script>

<style>
@import '~bootswatch/dist/darkly/bootstrap.min.css';
</style>

<template>
    <div class="d-flex min-vh-100">
        <Sidemenu class="navbar bg-primary"></Sidemenu>
        <router-view class="container-fluid d-flex flex-grow-1 border border-2 border-secondary pt-5"></router-view>
    </div>
</template>

<script>
import {h} from 'vue';
import Sidemenu from './components/Sidemenu';

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
@import '~bootstrap/dist/css/bootstrap.min.css';
@import '~bootswatch/dist/vapor/bootstrap.min.css';
</style>

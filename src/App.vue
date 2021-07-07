<template>
    <router-view></router-view>
</template>

<script>
import {h} from 'vue';

export default {
    name: 'App',
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

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>

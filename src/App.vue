<template>
    <div class="d-flex min-vh-100">
        <Sidemenu class="navbar order-1 bg-primary"></Sidemenu>
        <router-view v-slot="{ Component }" class="flex-grow-1 border border-2 border-secondary">
            <transition name="fade" mode="out-in">
                <component :is="Component"></component>
            </transition>
        </router-view>
    </div>
</template>

<script>
import {inject} from 'vue';
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
    setup() {
          // inject axios
        return inject('axios');
    }
}
</script>

<style>
@import '~bootswatch/dist/darkly/bootstrap.min.css';

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>

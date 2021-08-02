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
import {inject, provide, reactive} from 'vue';
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
    setup() {
        let data = reactive({
            atouts: [
                {
                    nom: 'Affaibli',
                    type: 'Mental',
                    valeur: 10,
                    effet: 'Faiblesse',
                    description: 'Le personnage est faible!'
                },
                {
                    nom: 'Tortue',
                    type: 'Physique',
                    valeur: 10,
                    effet: 'Blabla',
                    description: 'Vous faites preuve de lenteur'
                },
                {
                    nom: 'Palindrome',
                    type: 'Social',
                    valeur: 10,
                    effet: 'Blabla',
                    description: 'froussard!'
                }
            ],
            handicaps: [
                {
                    nom: 'Mourant',
                    type: 'Social',
                    valeur: 10,
                    effet: 'Blabla',
                    description: 'froussard!'
                }
            ]
        });

        let personnage = reactive({
            nom: 'Hunters',
            prenom: 'Nelna',
            origine: {
                nom: 'Neo-spartiate'
            },
            sexe: 'F',
            age: 16,
            taille: 170,
            masse: 55,
            nationalite: 'UK',
            ethnicite: '',
            description: 'Blablabla',
            caracteristiques: [
                {
                    nom: 'Physique',
                    current: 45,
                    max: 45,
                    order: 1,
                },
                {
                    nom: 'Intelligence',
                    current: 33,
                    max: 33,
                    order: 1,
                },
                {
                    nom: 'Empathie',
                    current: 21,
                    max: 21,
                    order: 1,
                },
                {
                    nom: 'Synchronisation',
                    current: 40,
                    max: 40,
                    order: 1,
                },
                {
                    nom: 'Fortune',
                    current: 0,
                    max: 10,
                    order: 1
                },
                {
                    nom: 'Fatalité',
                    current: 0,
                    max: 99,
                    order: -1
                },
                {
                    nom: 'Fatigue',
                    current: 0,
                    max: 5,
                    order: -1
                },
                {
                    nom: 'Blessures',
                    current: 0,
                    max: 5,
                    order: -1
                },
                {
                    nom: "Seuil d'effort",
                    current: 0,
                    max: 33,
                    order: -1
                },
                {
                    nom: 'Stress',
                    current: 0,
                    max: 33,
                    order: -1
                },
                {
                    nom: 'Ego',
                    current: 0,
                    max: 21,
                    order: -1
                }
            ],
            atouts: [
                {
                    nom: 'Affaibli',
                    type: 'Mental',
                    valeur: 10,
                    effet: 'Blabla',
                    description: 'froussard!'
                }
            ],
            handicaps: [
                {
                    nom: 'Mourant',
                    type: 'Social',
                    valeur: 10,
                    effet: 'Blabla',
                    description: 'froussard!'
                }
            ]
        });

        provide('data', data);
        provide('personnage', personnage);
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

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
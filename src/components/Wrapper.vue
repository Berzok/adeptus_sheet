<template>
    <router-view v-slot="{ Component }" class="flex-grow-1 border border-2 border-secondary">
        <transition name="fade" mode="out-in">
            <component :is="Component"></component>
        </transition>
    </router-view>
</template>

<script>
import {defineComponent, provide, reactive} from 'vue';


//Could be useful:
// https://marozed.com/vue-cheatsheet/
export default defineComponent({
    name: 'Wrapper',
    data: () => ({
        currentRoute: window.location.pathname
    }),
    setup() {
        let data = reactive({
            sexe: [
                {
                    nom: 'F',
                    value: 1
                },
                {
                    nom: 'M',
                    value: 2
                },
            ],
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
            ],
            traumatismes: [
                {
                    nom: 'Hypersensibilité',
                    effet: [
                        'oui',
                        'non',
                        'haha',
                        'hoho'
                    ],
                    description: [
                        'Le personnage trouve déplaisant le fait d’être près d’une foule ou dans des endroits bruyants, de même que des lumières vives ou trop éclatantes.',
                        'Le personnage souffre de périodes de crises lors d’une présence de trop de bruit ou de distractions visuelles. Ces épisodes peuvent se définir par de l’hyperactivité, de la panique, ou une mise en retrait.\n' +
                        'Le personnage gagne l’Aspect Traumatique ‘Hypersensibilité’, déclenché par une action délibérée du joueur pour faire subir à son personnage une telle crise en réponse à too much going on now.',
                        'Le personnage devient moins tolérants aux stimulations excessives, et ses crises durent plus longtemps, ou sont plus violentes.',
                        'La tolérance du personnage chute considérablement, et tout ce qui est supérieur à un groupe réduit a une chance de déclencher une crise.\n L’Aspect Traumatique ‘Hypersensibilité’ peut maintenant être déclenché jusqu’à deux fois dans la même session.'
                    ]
                },
                {
                    nom: 'Insularité',
                    effet: [
                        'oui',
                        'oui',
                        'oui',
                        'oui',
                    ],
                    description: [
                        'Le personnage a du mal à faire confiance aux inconnus, et refuse l’aide des personnes qu’il ne connaît pas.',
                        'Le personnage commence à ne pas seulement se méfier des inconnus, mais aussi à les supposer malveillants ou menaçants.\n' +
                        'Le personnage gagne l’Aspect Traumatique ‘Insularité’, déclenché par des actions délibérées du personnage ayant pour but d’éviter ou se protéger des inconnus.',
                        'Le personnage a des doutes au sujet de la fiabilité de ses propres amis et alliés. Les actes bienveillants sont maintenant assumés avoir un objectif caché.',
                        'Le personnage imagine que tout le monde veut lui nuire, et se tient donc éternellement vigilant de chaque menace. Mais même une horloge cassé a raison deux fois par jour.\n' +
                        'Le joueur peut dépenser 1 Fortune pour déterminer automatiquement si un groupe ou une personne donné leur en veut. Cependant, aucune preuve n’est donnée. Convaincre d’autres personnages au sujet de la menace que vous venez d’identifier pourrait être difficile.'
                    ]
                }
            ]
        });
        provide('data', data);

        let personnage = reactive({});
        provide('personnage', personnage);

        (async () => {
            let character = await getPersonnage();
            Object.assign(personnage, character);

            data.traumatismes = await getTraumatismes();
            data.origines = await getOrigines();
        })()

        async function getPersonnage() {
            return await fetch('http://www.esoteria.arae.rest/personnage/get/610bad0266bb93101bfee7bf', {
                mode: 'cors'
            }).then(r => r.json());
        }
        async function getTraumatismes() {
            return await fetch('http://www.esoteria.arae.rest/traumatisme/get', {
                mode: 'cors'
            }).then(r => r.json());
        }
        async function getOrigines(){
            return await fetch('http://www.esoteria.arae.rest/origine/get', {
                mode: 'cors'
            }).then(r => r.json());
        }
        //let info = useSWRV('http://www.esoteria.arae.rest/personnage/get/610bad0266bb93101bfee7bf', getPersonnage);

    },
    computed: {
        CurrentComponent() {
            console.dir(this.$route.name);
            return this.$route.name;
        }
    },
})
</script>

<style scoped>

</style>
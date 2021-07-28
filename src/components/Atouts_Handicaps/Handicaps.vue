<template>

    <div>

        <div v-for="d in handicaps.data" :key="d" class="row text-start mb-1 gx-0">

            <div class="col-1">
                <select class="form-select">
                    <option v-for="a in handicaps.data" :key="a" :value="a.id">{{ a.nom }}</option>
                </select>
            </div>

            <div class="col">
                <span class="form-control">
                    {{ d.type }}
                </span>
            </div>
            <div class="col">
                <span class="form-control">
                    {{ d.valeur }}
                </span>
            </div>
            <div class="col-4">
                <span class="form-control">
                    {{ d.effet }}
                </span>
            </div>
            <div class="col-5">
                <span class="form-control">
                    {{ d.description }}
                </span>
            </div>

        </div>

        <div class="row text-start gx-0">
            <div class="col-2">
                <button class="btn btn-success w-100">Ajouter un handicap</button>
            </div>
        </div>

    </div>

</template>


<script>

export default {
    name: 'Handicap',
    data() {
        return {
            handicaps: {
                data: [
                    {
                        nom: 'Fuyard',
                        type: 'Mental',
                        valeur: 10,
                        effet: 'Blabla',
                        description: 'froussard!'
                    },
                    {
                        nom: 'Fuyard',
                        type: 'Mental',
                        valeur: 10,
                        effet: 'Blabla',
                        description: 'froussard!'
                    },
                ]
            }
        }
    },
    components: {}
}
//<CardNumber v-for="caracteristique in caracteristiques" :key="caracteristique.nom" :title="caracteristique.nom"></CardNumber>
</script>

<style scoped>

</style>
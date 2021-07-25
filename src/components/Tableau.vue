<template>


    <table class="table table-bordered table-hover">
        <thead>
        <tr>
            <th scope="col">Groupe</th>
            <th scope="col"><em>Car.</em></th>
            <th scope="col">Bonus</th>
            <th scope="col">Total</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="g in groupes" :key="g">
            <td>{{ g.nom }}</td>
            <td>{{ g.cara }}</td>
            <td>{{ g.bonus }}</td>
            <td>{{ g.total }}</td>
        </tr>
        </tbody>
    </table>

</template>


<script lang="ts">
export default {
    name: 'Tableau',
    data() {
        return {
            groupes: [
                {
                    nom: 'Arts',
                    cara: 'Emp',
                    bonus: null,
                    total: 12
                },
                {
                    nom: 'Connaissances',
                    cara: 'Int',
                    bonus: null,
                    total: 12
                },
                {
                    nom: 'Éloquence',
                    cara: 'Emp',
                    bonus: null,
                    total: 12
                },
                {
                    nom: 'Finesse',
                    cara: 'Phy',
                    bonus: null,
                    total: 12
                },
                {
                    nom: 'Logique',
                    cara: 'Int',
                    bonus: null,
                    total: 12
                },
                {
                    nom: 'Perception',
                    cara: 'Int',
                    bonus: null,
                    total: 12
                },
            ]
        }
    }
}

</script>

<style scoped>

</style>
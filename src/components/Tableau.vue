<template>

    <table class="table table-bordered table-hover caption-top">
        <caption>
        </caption>
        <thead>
        <tr>
            <th v-for="h in config.headers" :key="h" :class="h.class">
                {{ h.label }}
            </th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="d in data" :key="d">
            <td v-for="p in d" :key="p">
                {{ p }}
            </td>
        </tr>
        <tr v-for="i in config.emptyRows" :key="i">
            <td v-for="p in config.headers.length" :key="p"></td>
        </tr>
        </tbody>
    </table>

</template>


<script lang="ts">
import FormSelect from "./FormSelect.vue";
export default {
    name: 'Tableau',
    props: {
        config: {
            headers: {
                nom: String,
                label: String,
                class: String
            },
            emptyRows: Number
        },
        data: [Object]
    }
}

</script>

<style scoped>
td:empty::after{
    content: "\00a0"
}
</style>
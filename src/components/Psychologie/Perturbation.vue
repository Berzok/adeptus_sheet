<template>
    <div>

        <div v-for="(d, index) in personnage.atouts" :key="d" class="row text-start mb-1 gx-0">

            <div class="col-1">
                <select @change="setAtout($event, index)" class="form-select">
                    <option></option>
                    <option v-for="a in data" :key="a" :value="a" v-bind="isCurrent(a, d)">
                        {{ a.nom }}
                    </option>
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

            <div class="col-auto">
                <button @click="removeAtout($event, index)" class="btn btn-danger" :class="index===0 ? 'disabled': ''">
                    X
                </button>
            </div>

        </div>

        <div class="row text-start gx-0">
            <div class="col-2">
                <button @click="addAtout()" class="btn btn-success w-100">Ajouter un atout</button>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: "Perturbations"
}
</script>

<style scoped>

</style>
<template>
    <div>

        <div v-for="(d, index) in personnage.handicaps" :key="d" class="row text-start mb-1 gx-0">

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
                <button @click="removeAtout($event, index)" class="btn btn-danger" :class="index===0 ? 'disabled': ''">X</button>
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
    name: 'Handicaps',
    methods: {
        isCurrent(a, d) {
            return (a.nom === d.nom ? {
                selected: ''
            } : '');
        },
        addAtout(){
            this.$props.personnage.handicaps.push({
                nom: '',
                type: '',
                valeur: null,
                effet: '',
                description: ''
            })
        },
        setAtout($event, index){
            let dataIndex = $event.target.selectedIndex - 1;
            this.$props.personnage.handicaps[index] = this.$props.data[dataIndex];
        },
        removeAtout($event, index){
            if(index === 0){
                return;
            }
            let dataIndex = $event.target.selectedIndex;
            this.$props.personnage.handicaps[index] = this.$props.data[dataIndex];
            this.$props.personnage.handicaps.splice(index, 1);
        }
    },
    props: {
        personnage: {
            handicaps: [
                {
                    nom: String,
                    type: String,
                    valeur: Number,
                    effet: String,
                    description: String
                }
            ],
        },
        data: Array
    },
    components: {}
};
//<CardNumber v-for="caracteristique in caracteristiques" :key="caracteristique.nom" :title="caracteristique.nom"></CardNumber>
</script>

<style scoped>
span{
    height: 100%;
}
</style>
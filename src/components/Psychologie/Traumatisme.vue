<template>

    <div class="text-start  gx-0">

        <div class="col-2">
            <select v-model="traumatisme.nom" class="form-select">
                <option v-for="a in data" :key="a" :value="a.nom" :selected="a.nom === traumatisme.nom">
                    {{ a.nom }}
                </option>
            </select>
        </div>

        <div class="col-1">
            <select v-model="traumatisme.rang" class="form-select">
                <option v-for="r in 4" :key="r" :value="r" :selected="r === traumatisme.rang || r === 1">
                    {{ r }}
                </option>
            </select>
        </div>
        <div class="col-4">
                <span class="form-control">
                    {{ effet }}
                </span>
        </div>
        <div class="col-5">
                <span class="form-control">
                    {{ description }}
                </span>
        </div>

    </div>

</template>

<script>
import {defineComponent, reactive} from "vue";

export default defineComponent({
    name: "Traumatismes",
    setup(props) {
        let traumatisme = reactive(props.bound);

        return {
            traumatisme
        }
    },
    props: {
        data: {
            nom: String,
            effet: String,
            description: String
        },
        bound: {
            nom: String,
            rang: Number
        }
    },
    computed: {
        description() {
            let leTrauma = this.data.find(value => {
                return value.nom === this.traumatisme.nom;
            });
            if(leTrauma === undefined){
                return '\n';
            }
            return leTrauma.description[this.traumatisme.rang - 1];
        },
        effet() {
            let leTrauma = this.data.find(value => {
                return value.nom === this.traumatisme.nom;
            });
            if(leTrauma === undefined){
                return '\n';
            }
            return leTrauma.effet[this.traumatisme.rang - 1];
        }
    },
    methods: {
        remove() {
            this.traumatisme = null;
        }
    },
})
</script>

<style scoped>
span {
    white-space: pre-line;
}
</style>
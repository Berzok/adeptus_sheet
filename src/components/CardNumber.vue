<template>

  <div class="card text-center">
    <h5 class="card-header border-bottom">{{ nom }}</h5>
    <div class="card-body p-0">
      <div class="input-group input-group-lg flex-nowrap">
        <input :value="current"
               :class="currentClass"
               @keyup="checkValue($event)"
               @input="$emit('update:current', Number.parseInt($event.target.value) || 0)"
               class="form-control text-center p-0" maxlength="2" type="text" size="2">
        <span class="input-group-text">/</span>
        <input :value="max"
               :class="maxClass"
               @input="$emit('update:max', Number.parseInt($event.target.value) || 0)"
               class="text-success form-control text-center bg-dark p-0" maxlength="2"
               type="text"
               size="2">
      </div>
    </div>
  </div>

</template>


<script>
import {defineComponent} from 'vue';

export default defineComponent({
    name: 'CardNumber',
    data() {
        return {}
    },
    props: {
        nom: String,
        current: Number,
        max: Number,
    },
    emits: [
        'update:current',
        'update:max',
    ],
    methods: {
        updateClass() {
            return 'text-success';
        },
        checkValue(event) {
            let target = event.target;
            let newValue = Number.parseInt(target.value);

            let newClass;
            if ((newValue < this.max && this.order === 1) ||
                (this.order === -1)) {
                newClass = 'text-warning';
            } else {
                newClass = 'text-success';
            }

            this.currentClass = newClass;
        }
    },
})

</script>

<style scoped>

</style>
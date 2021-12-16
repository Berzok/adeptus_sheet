<template>
  <div class="flex-fill text-center">
    <router-view v-model:personnage="this.personnage"/>
  </div>
</template>

<script lang="js">
import {defineComponent} from 'vue';

export default defineComponent({
    name: 'Authenticate',
    components: {},
		data() {
        return {
            selected: this.personnage
				}
		},
    props: {
        personnage: {}
		},
});
</script>

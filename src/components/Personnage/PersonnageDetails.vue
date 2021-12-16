<template>

  <div class="card mb-3">

    <h4 class="card-header border-bottom">Détails du personnage</h4>

    <div class="card-body d-flex g-0">

      <Image id="personnage_image"
						 :src="getImageSource" alt="Image"
						 imageClass="rounded border border-white"
             @click="uploadImage()"
             />
      <input id="image_upload" type="file" @change="imageChange($event)" hidden>


      <div class="px-3 d-flex flex-column justify-content-around">

        <div class="row">
          <label for="prenomPersonnage" class="col col-form-label">Prénom: </label>
          <div class="col-auto">
            <input id="prenomPersonnage" class="form-control" v-model="this.personnage.prenom">
          </div>
        </div>

        <div class="row">
          <label for="nomPersonnage" class="col col-form-label">Nom: </label>
          <div class="col-auto">
            <input id="nomPersonnage" class="form-control" v-model="this.personnage.nom">
          </div>
        </div>

        <div class="row">
          <label for="originePersonnage" class="col col-form-label">Origine: </label>
          <div class="col-auto">
            <select id="originePersonnage" v-model="this.personnage.origine" class="form-select">
              <option v-for="o in this.origines" :key="o"
                      :value="o"
                      :selected="o === this.personnage.origine">
                {{ o.nom }}
              </option>
            </select>
          </div>
        </div>

        <hr/>

        <div class="row">
          <label for="sexePersonnage" class="col col-form-label">Sexe: </label>
          <div class="col-auto">
            <select id="sexePersonnage" v-model="this.personnage.sexe" class="form-select">
              <option value="F" :selected="this.personnage.sexe === 'F'">F</option>
              <option value="M" :selected="this.personnage.sexe === 'M'">M</option>
            </select>
          </div>
        </div>

        <div class="row">
          <label for="agePersonnage" class="col col-form-label">Âge: </label>
          <div class="col-auto">
            <input id="agePersonnage" class="form-control" type="number" v-model="this.personnage.age">
          </div>
        </div>

        <div class="row">
          <label for="taillePersonnage" class="col col-form-label">Taille: </label>
          <div class="col-auto">
            <input id="taillePersonnage" class="form-control" type="number" v-model="this.personnage.taille">
          </div>
        </div>

        <div class="row">
          <label for="massePersonnage" class="col col-form-label">Masse: </label>
          <div class="col-auto">
            <input id="massePersonnage" class="form-control" type="number" v-model="this.personnage.masse">
          </div>
        </div>

        <hr/>

        <div class="row">
          <label for="nationPersonnage" class="col col-form-label">Nationalité: </label>
          <div class="col-auto">
            <input id="nationPersonnage" class="form-control" type="text" v-model="this.personnage.nationalite">
          </div>
        </div>

      </div>
    </div>

    <div class="card-footer d-flex flex-column">
      <div>
        <label for="inventairePersonnage" class="form-label">Inventaire: </label>
        <textarea v-model="this.personnage.inventaire" id="inventairePersonnage" class="form-control"
                  rows="2"></textarea>
      </div>
      <div>
        <label for="descriptionPersonnage" class="form-label">Description/histoire: </label>
        <textarea v-model="this.personnage.description" id="descriptionPersonnage" class="form-control"
                  rows="5"></textarea>
      </div>
    </div>

  </div>
</template>


<script>
import {defineComponent, reactive, ref} from 'vue';
import FormSelect from "../FormSelect.vue";
import Image from 'primevue/image';

export default defineComponent({
    name: 'PersonnageDetails',
    components: {
        Image
    },
    computed: {
        getImageSource() {
            let src = './placeholder.jpg';
            if (this.personnage.image) {
                // src = 'http://adeptus-sheet/image/get/' + this.personnage.image;
                src = process.env.VITE_API_URL + '/image/get/' + this.personnage.image;
            }
            return src;
        }
    },
    data() {
    },
    beforeMount() {
        if (this.personnage.origine === null) {
            this.personnage.origine = {
                id: null,
                nom: null,
                description: null
            }
        }
    },
    methods: {
        imageChange(event){
            const [file] = event.target.files
            if (file) {
                //TODO: Pouvoir modifier l'image
                // this.personnage.image = URL.createObjectURL(file)
            }
				},
        uploadImage(){
            document.getElementById('image_upload').click();
        }
    },
    props: {
        personnage: {},
        origines: []
    },
    emits: [
        'update:description',
    ]
})
</script>

<style scoped>

::v-deep(#personnage_image) {
    height: 400px;
    width: 400px;
    object-fit: cover;
}

</style>
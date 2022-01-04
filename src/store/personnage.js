import {defineStore, acceptHMRUpdate} from 'pinia';
import axios from "axios";

const useStore = defineStore('main', {
    state: () => ({
        /** @type {number|null} */
        personnage: null,
        /** @type {'all' | 'finished' | 'unfinished'} */
        filter: 'all',
        // type will be automatically inferred to number
        token: '',
        logged: false
    }),
    getters: {
        getPersonnage(){
            return state.personnage;
        },
        getToken(){
            return state.token;
        },
        /**
         * Check if a user is logged;
         * @param state
         * @returns {boolean|*}
         */
        isLogged(state){
            return state.logged;
        }
    },
    actions: {
        // any amount of arguments, return a promise or not
        log(id){
            return axios.get('/personnage/get/' + id).then((response, error) => {
                this.personnage = response.data;
                this.logged = true;
            });
        },
        logEmpty(){
            return axios.get('/personnage/get/empty').then((response, error) => {
                this.personnage = response.data;
                this.logged = true;
            });
        },
        checkToken(){
            return axios.post('/token/verify', {'token': this.token}).then((response, error) => {
                return response.data;
            });
        }
    },
});

// make sure to pass the right store definition, `useAuth` in this case.
if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useStore, import.meta.hot))
}

export {useStore};
/*
Descrizione
    Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail generare 10 indirizzi email e stamparli in pagina all'interno di una lista con Vue JS e Axios.
Bonus
    Far comparire gli indirizzi email solamente quando sono stati tutti generati.
*/


const app = new Vue ({
    el: "#app",
    data: {
        email: [],
    },
    computed: {
        dataOk() {
            return this.email.length === 10 ? true : false;
        },
    },
    created() {

        // AJAX REQUEST EMAILS WITH FOR
        for (var i = 0; i < 10; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then( element => {
                // success
                console.log(element.data.response);
                //HTML with this. because I have arrow function
                this.email.push(element.data.response);
            })
            .catch(error => {
            //error
            console.log('Attento: ', error);
            });
        }
    }
});